'use client';

import Link from 'next/link';
import { Zap, Phone, ShieldCheck, Clock, DollarSign, Star, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroInner} style={{ backgroundImage: 'url(/images/hero/hero-home.jpg)' }}>
        <div className={styles.overlay}></div>
        <div className={styles.meshGradient}></div>
        <div className={styles.content}>
          <div className={styles.overline}>
            <span className={styles.overlineIcon}>
              <Zap size={14} fill="currentColor" />
            </span>
            Licensed &amp; Insured Electrician in Astoria, NY
          </div>
          <h1 className={styles.title}>
            Your Trusted{' '}
            <span className={styles.titleAccent}>Electrical Experts</span>{' '}
            in Queens, NYC
          </h1>
          <p className={styles.subtitle}>
            Professional residential and commercial electrical services in Astoria, Queens, and all of NYC. 
            Available 24/7 for emergencies. Licensed, insured, and committed to excellence.
          </p>
          <div className={styles.ctas}>
            <Link href="/contact" className={styles.ctaPrimary} id="hero-cta-estimate">
              Get Free Estimate
              <Zap size={16} fill="currentColor" style={{ marginLeft: '6px' }} />
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.ctaSecondary} id="hero-cta-call">
              <Phone size={16} fill="currentColor" style={{ marginRight: '6px' }} />
              Call Now: {siteConfig.phone}
            </a>
          </div>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon} style={{ color: 'var(--color-primary-400)' }}>
                <ShieldCheck size={16} />
              </span>
              Licensed &amp; Insured
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon} style={{ color: 'var(--color-primary-400)' }}>
                <Clock size={16} />
              </span>
              24/7 Emergency
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon} style={{ color: 'var(--color-primary-400)' }}>
                <DollarSign size={16} />
              </span>
              Free Estimates
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon} style={{ color: 'var(--color-accent-400)' }}>
                <Star size={16} fill="currentColor" />
              </span>
              5-Star Rated
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll Down</span>
          <span className={styles.scrollArrow}>
            <ChevronDown size={18} />
          </span>
        </div>
      </div>
    </section>
  );
}
