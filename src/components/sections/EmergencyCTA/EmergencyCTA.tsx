import Link from 'next/link';
import { AlertTriangle, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './EmergencyCTA.module.css';

export default function EmergencyCTA() {
  return (
    <section className={styles.section} id="emergency-cta">
      <div className={styles.container}>
        <AnimatedSection direction="left">
          <div className={styles.content}>
            <span className={styles.icon} style={{ display: 'inline-flex', color: 'hsl(0, 72%, 58%)' }}>
              <AlertTriangle size={36} fill="currentColor" style={{ color: 'white' }} />
            </span>
            <h2 className={styles.title}>Electrical Emergency? We&apos;re Here 24/7</h2>
            <p className={styles.description}>
              Immediate 24/7 electrician dispatch for power outages, shorts, and hazards in Astoria &amp; Queens.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className={styles.ctas}>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className={styles.ctaCall}
              id="emergency-call-btn"
            >
              <Phone size={18} fill="currentColor" style={{ marginRight: '6px' }} />
              Call Now: {siteConfig.phone}
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.ctaEstimate} id="emergency-estimate-btn">
              Call for Estimate
              <Phone size={16} fill="currentColor" style={{ marginLeft: '6px' }} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
