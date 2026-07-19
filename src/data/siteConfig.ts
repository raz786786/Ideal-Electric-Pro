import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Ideal Electric Pros Inc',
  phone: '+1 (347) 896-9289',
  phoneRaw: '+13478969289',
  email: 'info@idealelectricpros.com',
  address: {
    street: '25-78 Steinway St',
    city: 'Astoria',
    state: 'NY',
    zip: '11103',
    country: 'United States',
    full: '25-78 Steinway St, Astoria, NY 11103, United States'
  },
  hours: {
    weekday: 'Mon-Fri: 7:00 AM - 8:00 PM',
    saturday: 'Sat: 8:00 AM - 6:00 PM',
    sunday: 'Sun: Emergency Only'
  },
  socialLinks: {
    facebook: 'https://facebook.com/idealelectricpros',
    instagram: 'https://instagram.com/idealelectricpros',
    yelp: 'https://yelp.com/biz/idealelectricpros',
    google: 'https://google.com/maps/place/idealelectricpros'
  },
  seo: {
    siteName: 'Ideal Electric Pros Inc',
    titleTemplate: '%s | Ideal Electric Pros Inc | Astoria Electrician',
    defaultDescription: 'Ideal Electric Pros Inc provides top-tier residential and commercial electrical services in Astoria, Queens, and the greater NYC area. Licensed, bonded, and insured experts.'
  }
};
