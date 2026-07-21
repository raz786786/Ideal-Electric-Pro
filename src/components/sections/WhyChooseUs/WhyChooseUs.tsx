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
            <div className={styles.overline}>Why Choose Ideal Electric Pros</div>
            <h2 className={styles.title}>The Standard of Excellence in NYC</h2>
            <p className={styles.subtitle}>
              We are a team of licensed master electricians dedicated to providing safe, reliable, and high-quality electrical services.
            </p>
          </div>
        </AnimatedSection>
        <div className={styles.list}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const formattedIndex = String(index + 1).padStart(2, '0');
            return (
              <AnimatedSection key={reason.title} delay={index * 100}>
                <div className={styles.listItem}>
                  <div className={styles.itemNumber}>{formattedIndex}</div>
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>{reason.title}</h3>
                    <p className={styles.itemDescription}>{reason.description}</p>
                  </div>
                  <div className={styles.itemIcon}>
                    <Icon size={32} strokeWidth={1} />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
