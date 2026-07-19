'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './AnimatedSection.module.css';
import { type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'down' | 'scale';
  id?: string;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  id,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  const directionClass = {
    up: styles.fromUp,
    left: styles.fromLeft,
    right: styles.fromRight,
    down: styles.fromDown,
    scale: styles.fromScale,
  }[direction];

  return (
    <div
      ref={ref}
      id={id}
      className={`${styles.animated} ${directionClass} ${isIntersecting ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
