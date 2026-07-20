import { ShieldCheck, Clock, DollarSign, Zap, CheckCircle2, Award, Star } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Fully licensed NYC Master Electricians with comprehensive liability insurance.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Rapid 24/7 emergency electrical dispatch across Astoria, Queens, and NYC.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'Transparent, fixed upfront estimates with zero hidden fees or surprises.',
  },
  {
    icon: Zap,
    title: 'Expert Technicians',
    description: '15+ years of certified experience in residential & commercial projects.',
  },
  {
    icon: CheckCircle2,
    title: 'Satisfaction Guaranteed',
    description: '100% workmanship satisfaction guarantee on every electrical project.',
  },
  {
    icon: Award,
    title: 'Top-Rated Service',
    description: 'Top 5-star customer ratings across Google, Yelp, and local reviews.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-choose-us">
      <div className={styles.container}>
        <AnimatedSection>
          <div className={styles.header}>
            <div className={styles.overline}>
              <Star size={14} fill="currentColor" />
              Why Choose Us
            </div>
            <h2 className={styles.title}>The Ideal Electric Pros Difference</h2>
            <p className={styles.subtitle}>
              Here&apos;s why homeowners and businesses across Queens trust us 
              with their electrical needs.
            </p>
          </div>
        </AnimatedSection>
        <div className={styles.grid}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={reason.title} delay={index * 100}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{reason.title}</h3>
                  <p className={styles.cardDescription}>{reason.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
