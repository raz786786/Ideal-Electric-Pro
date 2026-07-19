import Link from 'next/link';
import { ZapOff } from 'lucide-react';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.icon} style={{ display: 'inline-flex', color: 'var(--color-primary-400)', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <ZapOff size={48} />
        </span>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Circuit Tripped! Page Not Found</h2>
        <p className={styles.desc}>
          It looks like the path you were trying to reach has suffered a power outage or doesn&apos;t exist. 
          Let&apos;s get you reconnected.
        </p>
        <div className={styles.ctas}>
          <Link href="/" className={styles.btnPrimary} id="404-btn-home">
            Back to Home
          </Link>
          <Link href="/services" className={styles.btnSecondary} id="404-btn-services">
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
