import type { Metadata } from 'next';
import ServicesGrid from '@/components/sections/ServicesGrid/ServicesGrid';
import EmergencyCTA from '@/components/sections/EmergencyCTA/EmergencyCTA';
import SchemaMarkup from '@/components/shared/SchemaMarkup/SchemaMarkup';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Our Electrical Services',
  description: 'Explore the full range of residential and commercial electrical services provided by Ideal Electric Pros Inc in Astoria, Queens, and NYC.',
};

export default function ServicesPage() {
  const serviceSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Residential Electrical Services',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Commercial Electrical Services',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Electrical Panel Upgrades',
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Wiring & Rewiring',
      },
    ],
  };

  return (
    <>
      <SchemaMarkup type="FAQPage" data={serviceSchemaData} />
      <section className={styles.hero} style={{ backgroundImage: 'url(/images/hero/hero-services.jpg)' }}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>Our Electrical Services</h1>
          <p className={styles.subtitle}>
            Professional, licensed, and reliable electrical solutions for Astoria, Queens, and all NYC boroughs.
          </p>
        </div>
      </section>
      <ServicesGrid showViewAll={false} />
      <EmergencyCTA />
    </>
  );
}
