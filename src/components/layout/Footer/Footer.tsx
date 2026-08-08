import Link from 'next/link';
import { Zap, MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';
import styles from './Footer.module.css';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const footerServices = services.slice(0, 6);
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* ---- Column 1: Brand ---- */}
          <div className={styles.brand}>
            <div className={styles.brandName}>
              <span className={styles.brandMark} aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <Zap size={20} fill="currentColor" />
              </span>
              Ideal Electric Pros&nbsp;<span>Inc</span>
            </div>
            <p className={styles.brandDescription}>
              Trusted, licensed electricians serving Astoria, Queens, and the
              greater NYC area. We deliver safe, code&#8209;compliant
              electrical solutions for homes and businesses.
            </p>
            <div className={styles.socialLinks}>
              <Link
                href={siteConfig.socialLinks.facebook}
                className={styles.socialLink}
                id="footer-social-facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <FacebookIcon />
              </Link>
              <Link
                href={siteConfig.socialLinks.instagram}
                className={styles.socialLink}
                id="footer-social-instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <InstagramIcon />
              </Link>
              <Link
                href={siteConfig.socialLinks.yelp}
                className={styles.socialLink}
                id="footer-social-yelp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
              >
                <Star size={18} fill="currentColor" />
              </Link>
            </div>
          </div>

          {/* ---- Column 2: Quick Links ---- */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.columnList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.columnLink}
                    id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Column 3: Our Services ---- */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Our Services</h3>
            <ul className={styles.columnList}>
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={styles.columnLink}
                    id={`footer-service-${service.slug}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Column 4: Contact Info ---- */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact Info</h3>

            <div className={styles.contactItem} id="footer-contact-address">
              <span className={styles.contactIcon} aria-hidden="true">
                <MapPin size={16} />
              </span>
              <span>{siteConfig.address.full}</span>
            </div>

            <div className={styles.contactItem} id="footer-contact-phone">
              <span className={styles.contactIcon} aria-hidden="true">
                <Phone size={16} />
              </span>
              <Link
                href={`tel:${siteConfig.phoneRaw}`}
                className={styles.contactLink}
              >
                {siteConfig.phone}
              </Link>
            </div>

            <div className={styles.contactItem} id="footer-contact-email">
              <span className={styles.contactIcon} aria-hidden="true">
                <Mail size={16} />
              </span>
              <Link
                href={`mailto:${siteConfig.email}`}
                className={styles.contactLink}
              >
                {siteConfig.email}
              </Link>
            </div>

            <div className={styles.contactItem} id="footer-contact-hours">
              <span className={styles.contactIcon} aria-hidden="true">
                <Clock size={16} />
              </span>
              <div>
                <div>{siteConfig.hours.weekday}</div>
                <div>{siteConfig.hours.saturday}</div>
                <div>{siteConfig.hours.sunday}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Bottom Bar ---- */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link
              href="/privacy-policy"
              className={styles.bottomLink}
              id="footer-privacy-link"
            >
              Privacy Policy
            </Link>
            <Link
              href="/privacy-policy" // Fallback to privacy policy since Terms page is not created yet
              className={styles.bottomLink}
              id="footer-terms-link"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
