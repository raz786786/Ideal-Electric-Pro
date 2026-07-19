import { type ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className = '', glow = false }: CardProps) {
  return (
    <div className={`${styles.card} ${glow ? styles.glow : ''} ${className}`}>
      {children}
    </div>
  );
}
