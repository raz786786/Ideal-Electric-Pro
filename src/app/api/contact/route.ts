import { NextResponse, type NextRequest } from 'next/server';
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
        { success: false, error: 'Invalid request payload.' },
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

    // 4. Honeypot check (website field should be empty for genuine users)
    if (validatedData.website) {
      logger.warn(`Honeypot field filled. Bot detected.`);
      return NextResponse.json({ success: true, message: 'Message submitted successfully.' });
    }

    // 5. Input Sanitization
    const sanitizedData = sanitizeObject(validatedData);

    // 6. Log submission details safely
    logger.info(`New contact inquiry received:`, {
      name: sanitizedData.name,
      phone: sanitizedData.phone,
      email: sanitizedData.email,
      service: sanitizedData.service,
      message: sanitizedData.message,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your request has been received. We will contact you at your phone number shortly.',
    });
  } catch (err: any) {
    logger.error(`Server error in contact API route: ${err.message}`, {
      stack: err.stack,
    });
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please call us directly at +1 (347) 896-9289.',
      },
      { status: 500 }
    );
  }
}
