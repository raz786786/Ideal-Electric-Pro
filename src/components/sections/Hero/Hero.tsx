'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck, Star, Zap, Clock, BadgeCheck } from 'lucide-react';
import styles from './Hero.module.css';
import { siteConfig } from '@/data/siteConfig';

const marqueeItems = [
  'Panel Upgrades',
  'EV Charger Install',
  'Smart Home Setup',
  'Emergency 24/7',
  'LED Lighting',
  'Commercial Build-outs',
  'Wiring & Rewiring',
  'Generator Install',
  'Surge Protection',
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Ambient background glows */}
      <div className={styles.heroGlowOne} aria-hidden="true" />
      <div className={styles.heroGlowTwo} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className={styles.trustBadge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <ShieldCheck size={16} className={styles.trustIcon} />
            <span>Licensed &amp; Insured NYC Electricians</span>
          </motion.div>

          <motion.h1 variants={item} className={styles.title}>
            Power,{' '}
            <span className={styles.titleAccent}>done right.</span>
          </motion.h1>

          <motion.p variants={item} className={styles.subtitle}>
            From panel upgrades to full smart-home builds — Ideal Electric Pros
            delivers safe, code-compliant electrical work for homes and
            businesses across Astoria, Queens &amp; all of NYC.
          </motion.p>

          <motion.div variants={item} className={styles.ctas}>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.ctaPrimary}>
              <Phone size={18} fill="currentColor" />
              <span>
                <small>Call 24/7</small>
                {siteConfig.phone}
              </span>
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div variants={item} className={styles.socialProof}>
            <div className={styles.stars} aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span className={styles.proofText}>
              <strong>4.9/5</strong> from 500+ verified NYC reviews
            </span>
          </motion.div>
        </motion.div>

        {/* ---- Visual / image ---- */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imageBackdrop} aria-hidden="true" />
            <img
              src="/images/hero/hero-home.jpg"
              alt="Ideal Electric Pros licensed electrician at work"
              className={styles.image}
            />
          </div>

          {/* Floating rating card */}
          <motion.div
            className={styles.floatingCard}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
          >
            <span className={styles.floatingIcon} aria-hidden="true">
              <BadgeCheck size={18} />
            </span>
            <div>
              <strong>200A Panel Upgrades</strong>
              <span>Certified &amp; DOB-compliant</span>
            </div>
          </motion.div>

          {/* Floating emergency card */}
          <motion.div
            className={`${styles.floatingCard} ${styles.floatingCardAlt}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
          >
            <span className={styles.floatingIcon} aria-hidden="true">
              <Clock size={18} />
            </span>
            <div>
              <strong>24/7 Emergency</strong>
              <span>60-min response across Queens</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ---- Marquee ticker ---- */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.marqueeGroup}>
              {marqueeItems.map((label, i) => (
                <span key={i} className={styles.marqueeItem}>
                  <Zap size={12} fill="currentColor" className={styles.marqueeBolt} />
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
