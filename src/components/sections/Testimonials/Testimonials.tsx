'use client';

import { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className={styles.section} id="testimonials-section">
      <div className={styles.container}>
        <AnimatedSection>
          <div className={styles.header}>
            <div className={styles.overline}>
              <Star size={14} fill="currentColor" />
              Testimonials
            </div>
            <h2 className={styles.title}>What Our Customers Say</h2>
            <p className={styles.subtitle}>
              Don&apos;t just take our word for it — hear from homeowners and businesses 
              across Astoria and Queens who trust Ideal Electric Pros.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className={styles.carousel}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.slide}>
                  <div className={styles.card}>
                    <span className={styles.quoteIcon}>&ldquo;</span>
                    <div className={styles.stars}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className={styles.star} style={{ color: 'var(--color-accent-400)', marginRight: '2px', display: 'inline-flex' }}>
                          <Star size={16} fill="currentColor" />
                        </span>
                      ))}
                    </div>
                    <p className={styles.quote}>&ldquo;{testimonial.text}&rdquo;</p>
                    <div className={styles.divider}></div>
                    <div className={styles.author}>{testimonial.name}</div>
                    <div className={styles.location}>{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.controls}>
              <button
                className={styles.navButton}
                onClick={prev}
                aria-label="Previous testimonial"
                id="testimonial-prev"
              >
                <ArrowLeft size={18} />
              </button>
              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    id={`testimonial-dot-${i}`}
                  />
                ))}
              </div>
              <button
                className={styles.navButton}
                onClick={next}
                aria-label="Next testimonial"
                id="testimonial-next"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
