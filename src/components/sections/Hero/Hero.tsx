'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import styles from './Hero.module.css';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.trustBadge}>
            <ShieldCheck size={20} className={styles.trustIcon} />
            <span>Licensed & Insured NYC Electricians</span>
          </div>
          <h1 className={styles.title}>
            Expert Electrical Services You Can Trust.
          </h1>
          <p className={styles.subtitle}>
            From residential repairs to commercial installations, Ideal Electric Pros delivers safe, reliable, and high-quality electrical solutions.
          </p>
          <div className={styles.ctas}>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.ctaPrimary}>
              Call Now: {siteConfig.phone}
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className={styles.socialProof}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" className={styles.starIcon} />
              ))}
            </div>
            <span className={styles.proofText}>5.0 Rating based on 500+ Reviews</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageDecoration}></div>
          <img src="/images/hero/hero-home.jpg" alt="Professional Electrician" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
