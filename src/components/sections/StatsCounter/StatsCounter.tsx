'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './StatsCounter.module.css';

const stats = [
  { number: 1500, suffix: '+', label: 'Projects Completed' },
  { number: 980, suffix: '+', label: 'Happy Customers' },
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 4.9, suffix: '★', label: 'Average Rating', isDecimal: true },
];

function StatItem({ number, suffix, label, isDecimal, trigger, delay }: {
  number: number;
  suffix: string;
  label: string;
  isDecimal?: boolean;
  trigger: boolean;
  delay: number;
}) {
  const count = useCountUp(isDecimal ? Math.floor(number * 10) : number, trigger, 2000);
  const display = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();

  return (
    <AnimatedSection delay={delay}>
      <div className={styles.stat}>
        <div className={styles.statNumber}>
          {display}{suffix}
        </div>
        <div className={styles.statLabel}>{label}</div>
      </div>
    </AnimatedSection>
  );
}

export default function StatsCounter() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section className={styles.section} id="stats" ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              trigger={isIntersecting}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
