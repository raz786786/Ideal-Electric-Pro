'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'down' | 'scale';
  id?: string;
}

const offsets: Record<string, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 36, scale: 1 },
  down: { x: 0, y: -36, scale: 1 },
  left: { x: 40, y: 0, scale: 1 },
  right: { x: -40, y: 0, scale: 1 },
  scale: { x: 0, y: 0, scale: 0.94 },
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  id,
}: AnimatedSectionProps) {
  const offset = offsets[direction] ?? offsets.up;

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: offset.scale, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px 0px' }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
