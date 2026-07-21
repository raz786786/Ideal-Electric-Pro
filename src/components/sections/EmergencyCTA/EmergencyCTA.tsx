import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './EmergencyCTA.module.css';

export default function EmergencyCTA() {
  return (
    <section className={styles.section} id="emergency-cta">
      <div className={styles.container}>
        <AnimatedSection direction="up">
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h2 className={styles.title}>Need an Emergency Electrician?</h2>
              <p className={styles.description}>
                We provide fast, reliable 24/7 emergency electrical services across NYC.
              </p>
            </div>
            <div className={styles.action}>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className={styles.ctaCall}
                id="emergency-call-btn"
              >
                Call {siteConfig.phone}
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
