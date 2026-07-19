import type { Metadata } from 'next';
import { Zap, Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm/ContactForm';
import FAQ from '@/components/sections/FAQ/FAQ';
import SchemaMarkup from '@/components/shared/SchemaMarkup/SchemaMarkup';
import { siteConfig } from '@/data/siteConfig';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Request Free Estimate',
  description: 'Contact Ideal Electric Pros Inc in Astoria, Queens, NY. Call +1 (347) 896-9289 or submit our secure form to get a free estimate or book a licensed electrician.',
};

export default function ContactPage() {
  const contactSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@type': 'LocalBusiness',
      'name': 'Ideal Electric Pros Inc',
      'telephone': siteConfig.phone,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': siteConfig.address.street,
        'addressLocality': siteConfig.address.city,
        'addressRegion': siteConfig.address.state,
        'postalCode': siteConfig.address.zip,
        'addressCountry': 'US',
      },
    },
  };

  return (
    <>
      <SchemaMarkup type="FAQPage" data={contactSchemaData} />
      <section className={styles.hero} style={{ backgroundImage: 'url(/images/hero/hero-contact.jpg)' }}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Contact Ideal Electric Pros Inc</h1>
          <p className={styles.subtitle}>
            Have an electrical project or emergency? Reach out today for Astoria&apos;s best service.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <span className={styles.overline}>
                  <Zap size={14} fill="currentColor" style={{ marginRight: '6px' }} />
                  Quick Contact
                </span>
                <h2 className={styles.infoTitle}>Get in Touch Directly</h2>
                <p className={styles.infoDesc}>
                  We are available for scheduled appointments as well as 24/7 emergency dispatch.
                </p>

                <div className={styles.contactItems}>
                  <div className={styles.item}>
                    <span className={styles.icon}>
                      <Phone size={18} />
                    </span>
                    <div className={styles.itemBody}>
                      <h4>Phone Number</h4>
                      <a href={`tel:${siteConfig.phoneRaw}`} className={styles.link} id="contact-page-phone">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.icon}>
                      <Mail size={18} />
                    </span>
                    <div className={styles.itemBody}>
                      <h4>Email Address</h4>
                      <a href={`mailto:${siteConfig.email}`} className={styles.link} id="contact-page-email">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.icon}>
                      <MapPin size={18} />
                    </span>
                    <div className={styles.itemBody}>
                      <h4>Office Location</h4>
                      <p>{siteConfig.address.full}</p>
                    </div>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.icon}>
                      <Clock size={18} />
                    </span>
                    <div className={styles.itemBody}>
                      <h4>Business Hours</h4>
                      <p>{siteConfig.hours.weekday}</p>
                      <p>{siteConfig.hours.saturday}</p>
                      <p className={styles.emergency}>{siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.mapCard}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0911579737976!2d-73.91437432342551!3d40.768600071385415!2m3!1f0!2f0!3f0!2m1!1f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f463be4ea29%3A0x6b8d0c6fa4d033db!2s25-78%20Steinway%20St%2C%20Astoria%2C%20NY%2011103!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ideal Electric Pros Inc Google Map Location"
                  className={styles.mapIframe}
                  id="google-map-iframe"
                ></iframe>
              </div>
            </div>

            <div className={styles.formColumn}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
