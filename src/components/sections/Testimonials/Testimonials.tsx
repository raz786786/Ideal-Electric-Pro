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
            <div className={styles.overline}>Client Testimonials</div>
            <h2 className={styles.title}>Trusted by NYC Residents & Businesses</h2>
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
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} fill="currentColor" className={styles.starIcon} />
                      ))}
                    </div>
                    <p className={styles.quote}>"{testimonial.text}"</p>
                    <div className={styles.authorBlock}>
                      <span className={styles.author}>{testimonial.name}</span>
                      <span className={styles.location}>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.controls}>
              <button className={styles.navButton} onClick={prev} aria-label="Previous testimonial">
                <ArrowLeft size={24} strokeWidth={1} />
              </button>
              <div className={styles.fraction}>
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </div>
              <button className={styles.navButton} onClick={next} aria-label="Next testimonial">
                <ArrowRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
