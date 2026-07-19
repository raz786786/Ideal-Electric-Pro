'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import { contactFormSchema } from '@/lib/validator';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string; // Honeypot
}

const initialFormState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on type
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setGeneralError(null);
    setErrors({});

    // 1. Client-Side Input Validation using Zod
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      validationResult.error.issues.forEach((err) => {
        const path = err.path[0] as keyof FormState;
        if (path) {
          fieldErrors[path] = err.message;
        }
      });
      setErrors(fieldErrors);
      setLoading(false);
      return;
    }

    try {
      // 2. Submit to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.details) {
          // Validation error returned by server
          const serverFieldErrors: Partial<Record<keyof FormState, string>> = {};
          Object.keys(data.details).forEach((key) => {
            serverFieldErrors[key as keyof FormState] = data.details[key][0];
          });
          setErrors(serverFieldErrors);
        }
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSuccess(data.message || 'Your message has been sent successfully!');
      setFormData(initialFormState);
    } catch (err: any) {
      setGeneralError(err.message || 'An unexpected error occurred. Please try calling us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer} id="contact-form-wrapper">
      <h3 className={styles.title}>Send a Message</h3>
      <p className={styles.subtitle}>Get in touch for a free estimate or service booking.</p>

      {success && (
        <div className={styles.successMessage} role="alert" id="contact-success-msg">
          ✅ {success}
        </div>
      )}

      {generalError && (
        <div className={styles.errorMessage} role="alert" id="contact-error-msg">
          ❌ {generalError}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {/* Honeypot field (hidden for spam bots) */}
        <div className={styles.honeypot}>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
          {errors.name && <span className={styles.error} id="error-name">{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
          {errors.email && <span className={styles.error} id="error-email">{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(347) 896-9289"
          />
          {errors.phone && <span className={styles.error} id="error-phone">{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service" className={styles.label}>
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            className={styles.select}
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Service --</option>
            <option value="Residential Electrical Services">Residential Electrical Services</option>
            <option value="Commercial Electrical Services">Commercial Electrical Services</option>
            <option value="Electrical Panel Upgrades">Electrical Panel Upgrades</option>
            <option value="Wiring & Rewiring">Wiring & Rewiring</option>
            <option value="Lighting Installation">Lighting Installation</option>
            <option value="EV Charger Installation">EV Charger Installation</option>
            <option value="Smart Home Installation">Smart Home Installation</option>
            <option value="Emergency Services (24/7)">Emergency Services (24/7)</option>
            <option value="Other Electrical Work">Other Electrical Work</option>
          </select>
          {errors.service && <span className={styles.error} id="error-service">{errors.service}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Please describe your electrical project or issue..."
          />
          {errors.message && <span className={styles.error} id="error-message">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={loading}
          id="contact-submit-btn"
        >
          {loading ? (
            <>
              <span className={styles.loadingSpinner}></span> Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
