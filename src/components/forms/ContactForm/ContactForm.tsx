'use client';

import { Phone, ShieldCheck, Clock, DollarSign, Zap } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={styles.formContainer} id="contact-call-card-wrapper">
      <div className={styles.header}>
        <span className={styles.overline}>
          <Zap size={14} fill="currentColor" style={{ marginRight: '6px' }} />
          Direct Dispatch Line
        </span>
        <h3 className={styles.title}>Call Us For Free Estimates &amp; Service</h3>
        <p className={styles.subtitle}>
          Skip the forms — speak directly with our Master Electrician for immediate assistance, 
          pricing estimates, and emergency dispatches.
        </p>
      </div>

      <div className={styles.callActionWrapper}>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className={styles.callNowBtn}
          id="contact-call-now-btn"
        >
          <Phone size={24} fill="currentColor" className={styles.phoneIcon} />
          <div className={styles.btnTextGroup}>
            <span className={styles.btnLabel}>Click to Call Immediately</span>
            <span className={styles.btnNumber}>{siteConfig.phone}</span>
          </div>
        </a>
      </div>

      <div className={styles.featuresList}>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>
            <Phone size={18} />
          </span>
          <div>
            <strong>Instant Connect</strong>
            <p>Direct line to licensed electricians (No automated menus)</p>
          </div>
        </div>

        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>
            <Clock size={18} />
          </span>
          <div>
            <strong>24/7 Dispatch</strong>
            <p>Available day and night for electrical emergencies across Queens &amp; NYC</p>
          </div>
        </div>

        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>
            <DollarSign size={18} />
          </span>
          <div>
            <strong>Free Estimate over Phone</strong>
            <p>Transparent upfront pricing with zero obligation</p>
          </div>
        </div>

        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>
            <ShieldCheck size={18} />
          </span>
          <div>
            <strong>Licensed &amp; Insured</strong>
            <p>Full NYC Department of Buildings compliance guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
