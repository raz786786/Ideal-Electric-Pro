import { ShieldCheck, Clock, DollarSign, Zap, CheckCircle2, Award, Star } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Fully licensed NYC electricians with comprehensive insurance coverage. Your property and safety are always protected.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Electrical emergencies don\'t wait. Our team is available around the clock to handle urgent electrical issues in Astoria and Queens.',
  },
  {
    icon: DollarSign,
    title: 'Upfront Pricing',
    description: 'No hidden fees or surprise charges. We provide detailed, transparent estimates before any work begins.',
  },
  {
    icon: Zap,
    title: 'Expert Technicians',
    description: 'Our master electricians bring 15+ years of experience to every job, from simple repairs to complex installations.',
  },
  {
    icon: CheckCircle2,
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind every project with a 100% satisfaction guarantee. If you\'re not happy, we\'ll make it right.',
  },
  {
    icon: Award,
    title: 'Top-Rated Service',
    description: 'Consistently rated 5 stars by our customers across Google, Yelp, and HomeAdvisor. Excellence is our standard.',
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
