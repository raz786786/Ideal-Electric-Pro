'use client';
import { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './Testimonials.module.css';

function initials(name: string): string {
  const parts = name.replace('.', '').split(' ');
  return parts
    .slice(0, 2)
    .map((p) => p.charAt(0).toUpperCase())
    .join('');
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
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
            <h2 className={styles.title}>
              Trusted by <em>500+</em> NYC neighbors
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <div className={styles.carousel}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.slide}>
                  <div className={styles.card}>
                    <span className={styles.quoteMark} aria-hidden="true">
                      &ldquo;
                    </span>
                    <div className={styles.stars}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className={styles.quote}>{testimonial.text}</p>
                    <div className={styles.authorBlock}>
                      <span className={styles.avatar} aria-hidden="true">
                        {initials(testimonial.name)}
                      </span>
                      <div className={styles.authorMeta}>
                        <span className={styles.author}>{testimonial.name}</span>
                        <span className={styles.location}>
                          {testimonial.location} · {testimonial.service}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.controls}>
              <button className={styles.navButton} onClick={prev} aria-label="Previous testimonial">
                <ArrowLeft size={20} />
              </button>
              <div className={styles.fraction}>
                <strong>{String(current + 1).padStart(2, '0')}</strong>
                {' / '}
                {String(testimonials.length).padStart(2, '0')}
              </div>
              <button className={styles.navButton} onClick={next} aria-label="Next testimonial">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
