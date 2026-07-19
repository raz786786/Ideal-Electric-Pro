'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertOctagon } from 'lucide-react';
import styles from './error.module.css';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console on client side
    // Internal server errors are logged via Winston on server-side
    console.error('Client-side boundary caught error:', error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.icon} style={{ display: 'inline-flex', color: 'hsl(0, 72%, 58%)', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <AlertOctagon size={48} />
        </span>
        <h1 className={styles.title}>Error</h1>
        <h2 className={styles.subtitle}>Short Circuit! Something Went Wrong</h2>
        <p className={styles.desc}>
          An unexpected error has interrupted your connection. Rest assured, our team has been notified, 
          and we are investigating the issue.
        </p>
        <div className={styles.ctas}>
          <button onClick={() => reset()} className={styles.btnPrimary} id="error-btn-reset">
            Try Again
          </button>
          <Link href="/" className={styles.btnSecondary} id="error-btn-home">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
