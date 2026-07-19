import type { Metadata } from 'next';
import { Star, MapPin } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import EmergencyCTA from '@/components/sections/EmergencyCTA/EmergencyCTA';
import SchemaMarkup from '@/components/shared/SchemaMarkup/SchemaMarkup';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './testimonials.module.css';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews',
  description: 'Read reviews and testimonials from our homeowners and business clients in Astoria and Queens. Learn why we are rated 4.9 stars.',
};

export default function TestimonialsPage() {
  const ratingSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Ideal Electric Pros Inc',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '54',
      'bestRating': '5',
      'worstRating': '1',
    },
  };

  return (
    <>
      <SchemaMarkup type="LocalBusiness" data={ratingSchema} />
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Client Testimonials</h1>
          <p className={styles.subtitle}>
            Hear directly from the local home and business owners who have experienced the Ideal Electric Pros standard.
          </p>
        </div>
      </section>

      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {testimonials.map((review, idx) => (
              <AnimatedSection key={review.id} delay={idx * 80}>
                <div className={styles.card}>
                  <span className={styles.quoteIcon}>&ldquo;</span>
                  <div className={styles.stars}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className={styles.star} style={{ color: 'var(--color-accent-400)', marginRight: '2px', display: 'inline-flex' }}>
                        <Star size={16} fill="currentColor" />
                      </span>
                    ))}
                  </div>
                  <p className={styles.quote}>&ldquo;{review.text}&rdquo;</p>
                  <div className={styles.divider}></div>
                  <div className={styles.author}>{review.name}</div>
                  <div className={styles.meta}>
                    <span className={styles.location} style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <MapPin size={12} style={{ marginRight: '4px', color: 'var(--color-text-muted)' }} />
                      {review.location}
                    </span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.service}>{review.service}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
