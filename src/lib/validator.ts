import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' })
    .regex(/^[a-zA-Z\s\-'.]+$/, {
      message: 'Name contains invalid characters. Alphanumeric, spaces, hyphens, and apostrophes are allowed.',
    }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .max(15, { message: 'Phone number must not exceed 15 digits.' })
    .regex(/^\+?[1-9]\d{1,14}$|^(\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4})$/, {
      message: 'Please enter a valid phone number (e.g., +13478969289 or 347-896-9289).',
    }),
  service: z
    .string()
    .min(1, { message: 'Please select a service.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message must not exceed 2000 characters.' }),
  // Honeypot field for bot detection
  website: z.string().max(0, { message: 'Bot detected.' }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
