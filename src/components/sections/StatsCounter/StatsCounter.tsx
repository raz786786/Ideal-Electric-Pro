'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Zap, Users, Award, Star } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './StatsCounter.module.css';

const stats = [
  { icon: Zap, number: 1500, suffix: '+', label: 'Projects Completed' },
  { icon: Users, number: 980, suffix: '+', label: 'Happy Customers' },
  { icon: Award, number: 15, suffix: '+', label: 'Years Experience' },
  { icon: Star, number: 4.9, suffix: '★', label: 'Average Rating', isDecimal: true },
];

function StatItem({ icon: Icon, number, suffix, label, isDecimal, trigger, delay }: {
  icon: React.ComponentType<any>;
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
        <span className={styles.statIcon} style={{ display: 'inline-flex', justifyContent: 'center', color: 'var(--color-primary-400)', marginBottom: '12px' }}>
          <Icon size={32} />
        </span>
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
        <AnimatedSection>
          <div className={styles.header}>
            <div className={styles.overline}>
              <Zap size={14} fill="currentColor" />
              By The Numbers
            </div>
            <h2 className={styles.title}>Trusted by Thousands Across NYC</h2>
          </div>
        </AnimatedSection>
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
