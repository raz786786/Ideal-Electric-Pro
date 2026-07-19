import Link from 'next/link';
import { 
  Zap, 
  Building2, 
  Sliders, 
  Plug, 
  Lightbulb, 
  Car, 
  Smartphone, 
  BatteryCharging, 
  ShieldCheck, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { services } from '@/data/services';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './ServicesGrid.module.css';

const iconMap: Record<string, React.ComponentType<any>> = {
  'Zap': Zap,
  'Building2': Building2,
  'Gauge': Sliders,
  'Cable': Plug,
  'Lightbulb': Lightbulb,
  'Car': Car,
  'Smartphone': Smartphone,
  'Power': BatteryCharging,
  'Shield': ShieldCheck,
  'AlertTriangle': AlertTriangle,
};

interface ServicesGridProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function ServicesGrid({ limit, showViewAll = true }: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className={styles.section} id="services-overview">
      <div className={styles.container}>
        <AnimatedSection>
          <div className={styles.header}>
            <div className={styles.overline}>
              <Zap size={14} fill="currentColor" />
              What We Do
            </div>
            <h2 className={styles.title}>Our Professional Electrical Services</h2>
            <p className={styles.subtitle}>
              From simple repairs to complex installations, our licensed electricians 
              deliver top-quality electrical services across Astoria, Queens, and NYC.
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Zap;
            return (
              <AnimatedSection key={service.id} delay={index * 100}>
                <Link
                  href={`/services/${service.slug}`}
                  className={styles.card}
                  id={`service-card-${service.slug}`}
                >
                  <div className={styles.cardIcon}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.shortDescription}</p>
                  <span className={styles.cardLink}>
                    Learn More 
                    <ArrowRight size={14} className={styles.cardArrow} style={{ marginLeft: '4px' }} />
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        {showViewAll && limit && (
          <AnimatedSection>
            <div className={styles.viewAll}>
              <Link href="/services" className={styles.viewAllLink} id="view-all-services">
                View All Services 
                <ArrowRight size={16} style={{ marginLeft: '6px' }} />
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
