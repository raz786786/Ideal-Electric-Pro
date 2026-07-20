import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Check, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import EmergencyCTA from '@/components/sections/EmergencyCTA/EmergencyCTA';
import SchemaMarkup from '@/components/shared/SchemaMarkup/SchemaMarkup';
import styles from './service-detail.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} Services in Astoria`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 5);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ideal Electric Pros Inc',
      telephone: '+1 (347) 896-9289',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '25-78 Steinway St',
        addressLocality: 'Astoria',
        addressRegion: 'NY',
        postalCode: '11103',
        addressCountry: 'US',
      },
    },
    areaServed: ['Astoria', 'Queens', 'Brooklyn', 'Manhattan', 'Bronx'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Contact for Estimate',
    },
  };

  return (
    <>
      <SchemaMarkup type="Service" data={schemaData} />
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.separator}>/</span>
            <Link href="/services" className={styles.breadcrumbLink}>Services</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{service.title}</span>
          </div>
          <h1 className={styles.title}>{service.title}</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.mainContent}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={`${service.title} in Astoria, Queens`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className={styles.image}
                  priority
                />
              </div>
              
              <h2 className={styles.sectionHeading}>Professional {service.title} Services</h2>
              <p className={styles.description}>{service.description}</p>
              
              <h3 className={styles.subHeading}>What We Offer</h3>
              <ul className={styles.featuresList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <Check size={16} strokeWidth={3} className={styles.checkIcon} style={{ color: 'var(--color-success-400)', marginRight: '8px', flexShrink: 0, marginTop: '2px' }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={styles.ctaBox}>
                <h3>Ready to Start Your Project?</h3>
                <p>Contact Astoria&apos;s leading electricians today for a free estimate or to schedule your service.</p>
                <div className={styles.ctaButtons}>
                  <a href="tel:+13478969289" className={styles.btnPrimary} id="detail-cta-estimate">
                    <Phone size={14} fill="currentColor" style={{ marginRight: '6px' }} />
                    Call for Free Estimate
                  </a>
                  <a href="tel:+13478969289" className={styles.btnSecondary} id="detail-cta-call">
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Other Services</h3>
                <ul className={styles.sidebarList}>
                  {otherServices.map((other) => (
                    <li key={other.id}>
                      <Link
                        href={`/services/${other.slug}`}
                        className={styles.sidebarLink}
                        id={`sidebar-link-${other.slug}`}
                      >
                        {other.title}
                        <ArrowRight size={14} className={styles.arrow} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.sidebarWidget} ${styles.widgetBanner}`}>
                <h3>Licensed NYC Electricians</h3>
                <p>Ideal Electric Pros Inc is fully licensed and insured in the state of New York. We provide fast response times across Queens & Astoria.</p>
                <a href="tel:+13478969289" className={styles.bannerPhone}>
                  <Phone size={14} fill="currentColor" style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
                  (347) 896-9289
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
