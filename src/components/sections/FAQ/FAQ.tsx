'use client';

import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { faq } from '@/data/faq';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="faq-section">
      <div className={styles.container}>
        <AnimatedSection>
          <div className={styles.header}>
            <div className={styles.overline}>
              <HelpCircle size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              FAQ
            </div>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
          </div>
        </AnimatedSection>
        <div className={styles.list}>
          {faq.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 80}>
              <div className={styles.item}>
                <button
                  className={styles.question}
                  onClick={() => toggle(item.id)}
                  aria-expanded={openId === item.id}
                  id={`faq-question-${item.id}`}
                >
                  {item.question}
                  <span className={`${styles.icon} ${openId === item.id ? styles.iconOpen : ''}`}>
                    +
                  </span>
                </button>
                <div className={`${styles.answer} ${openId === item.id ? styles.answerOpen : ''}`}>
                  <p className={styles.answerContent}>{item.answer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
