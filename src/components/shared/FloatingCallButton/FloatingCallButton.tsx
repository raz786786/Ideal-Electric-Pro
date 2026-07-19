'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import styles from './FloatingCallButton.module.css';

export default function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="tel:+13478969289"
      className={`${styles.floatingButton} ${visible ? styles.visible : ''}`}
      aria-label="Call Ideal Electric Pros Inc"
      id="floating-call-button"
    >
      <span className={styles.icon} style={{ display: 'inline-flex', color: 'white' }}>
        <Phone size={24} fill="currentColor" />
      </span>
      <span className={styles.pulse}></span>
    </a>
  );
}
