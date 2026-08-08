import { ArrowRight, Phone, Zap } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './EmergencyCTA.module.css';

export default function EmergencyCTA() {
  return (
    <section className={styles.section} id="emergency-cta">
      <div className={styles.container}>
        <AnimatedSection direction="scale">
          <div className={styles.wrapper}>
            <Zap size={280} strokeWidth={0.5} className={styles.boltMark} aria-hidden="true" />
            <div className={styles.content}>
              <h2 className={styles.title}>
                Electrical emergency? <em>We&apos;re on call 24/7.</em>
              </h2>
              <p className={styles.description}>
                Fast, reliable emergency dispatch across Astoria, Queens &amp; all of NYC.
                Licensed master electricians — at your door within the hour.
              </p>
            </div>
            <div className={styles.action}>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className={styles.ctaCall}
                id="emergency-call-btn"
              >
                <Phone size={20} fill="currentColor" />
                <span>
                  <small>Call the emergency line</small>
                  {siteConfig.phone}
                </span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
