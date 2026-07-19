import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit } from '@/lib/rateLimiter';
import { contactFormSchema } from '@/lib/validator';
import { sanitizeObject } from '@/lib/sanitize';
import { logger } from '@/lib/logger';

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const rateLimitRes = await checkRateLimit(req);
    if (!rateLimitRes.success) {
      logger.warn(`Rate limit exceeded for IP address.`);
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again after 15 minutes.',
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(rateLimitRes.limit),
            'X-RateLimit-Remaining': String(rateLimitRes.remaining),
            'X-RateLimit-Reset': String(rateLimitRes.resetTime),
          },
        }
      );
    }

    // 2. Parse request JSON
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    // 3. Input Validation against Zod Schema
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      logger.warn(`Validation failed: ${JSON.stringify(fieldErrors)}`);
      return NextResponse.json(
        {
          success: false,
          error: 'Input validation failed. Please check your form details.',
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const validatedData = result.data;

    // 4. Honeypot check (website field should be empty)
    if (validatedData.website) {
      logger.warn(`Honeypot field filled. Bot detected.`);
      // Return a fake success to deceive bots
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    }

    // Optional reCAPTCHA v3 verification (if configured in env)
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaToken = body.recaptchaToken; // Frontend passes this if recaptcha is set up
    if (recaptchaSecret && recaptchaToken) {
      try {
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;
        const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
        const recaptchaJson = await recaptchaRes.json();
        
        if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
          logger.warn(`reCAPTCHA verification failed. Score: ${recaptchaJson.score}`);
          return NextResponse.json(
            { success: false, error: 'Spam check failed. Please try again.' },
            { status: 403 }
          );
        }
      } catch (e: any) {
        logger.error(`reCAPTCHA API error: ${e.message}`);
        // We log it but continue so as not to break the form if reCAPTCHA server is down
      }
    }

    // 5. Input Sanitization before outputting/emailing
    const sanitizedData = sanitizeObject(validatedData);

    // 6. Configure Nodemailer transport
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailTo = process.env.CONTACT_EMAIL_TO || 'info@idealelectricpros.com';
    const emailFrom = process.env.CONTACT_EMAIL_FROM || 'noreply@idealelectricpros.com';

    // Verify SMTP settings are configured
    if (!smtpHost || !smtpUser || !smtpPass) {
      logger.error('SMTP configuration missing in environment variables.');
      
      // In development/testing, we can log the email content instead of failing hard.
      if (process.env.NODE_ENV === 'development') {
        logger.info(`[DEV MODE] Simulated Email Sent:
          To: ${emailTo}
          From: ${emailFrom}
          Subject: New Lead - ${sanitizedData.service}
          Body:
            Name: ${sanitizedData.name}
            Email: ${sanitizedData.email}
            Phone: ${sanitizedData.phone}
            Service Needed: ${sanitizedData.service}
            Message: ${sanitizedData.message}
        `);

        return NextResponse.json({
          success: true,
          message: 'Message simulated successfully in development mode.',
        });
      }

      return NextResponse.json(
        { success: false, error: 'An error occurred while sending your message. Please try again later.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // True for 465, false for others
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 7. Compose & Send Lead Notification Email
    const mailOptions = {
      from: emailFrom,
      to: emailTo,
      subject: `New Lead: ${sanitizedData.service} - Ideal Electric Pros Inc`,
      html: `
        <h2>New Service Request Received</h2>
        <p><strong>Customer Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email Address:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone Number:</strong> ${sanitizedData.phone}</p>
        <p><strong>Service Requested:</strong> ${sanitizedData.service}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; border-left: 4px solid #0A56D0; margin-top: 10px;">
          ${sanitizedData.message.replace(/\n/g, '<br/>')}
        </div>
        <br/>
        <hr/>
        <p style="font-size: 11px; color: #777;">This email was sent automatically from the Ideal Electric Pros Inc contact form.</p>
      `,
    };

    // Compose Auto-Responder to the customer
    const autoResponderOptions = {
      from: emailFrom,
      to: sanitizedData.email,
      subject: `Service Request Received - Ideal Electric Pros Inc`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #0A56D0; border-bottom: 2px solid #0A56D0; padding-bottom: 10px;">Ideal Electric Pros Inc</h2>
          <p>Hello ${sanitizedData.name},</p>
          <p>Thank you for contacting Ideal Electric Pros Inc. We have received your request for <strong>${sanitizedData.service}</strong> services.</p>
          <p>Our team of licensed electricians is reviewing your details, and a representative will get back to you shortly (typically within 1-2 hours during business hours) to provide your free estimate or schedule service.</p>
          <p>If this is an immediate <strong>electrical emergency</strong>, please call us directly at <strong>+1 (347) 896-9289</strong> for 24/7 service.</p>
          <br/>
          <p>Best Regards,</p>
          <p><strong>Ideal Electric Pros Inc Team</strong><br/>
          25-78 Steinway St, Astoria, NY 11103<br/>
          Phone: +1 (347) 896-9289</p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptions);
    
    try {
      await transporter.sendMail(autoResponderOptions);
    } catch (autoResponderError: any) {
      // Don't fail the request if just the autoresponder failed, but log it
      logger.error(`Auto-responder email failed to send: ${autoResponderError.message}`);
    }

    logger.info(`Lead submitted successfully by ${sanitizedData.name} (${sanitizedData.email})`);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon!',
    });
  } catch (err: any) {
    // Return generic error message to user, log stack trace on server
    logger.error(`Server error in contact API route: ${err.message}`, {
      stack: err.stack,
    });
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred. Please try calling us directly or try again later.',
      },
      { status: 500 }
    );
  }
}
