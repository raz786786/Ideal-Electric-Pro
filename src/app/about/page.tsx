import type { Metadata } from 'next';
import Image from 'next/image';
import { Zap, ShieldCheck, HeartHandshake, Award, Users } from 'lucide-react';
import { team } from '@/data/team';
import WhyChooseUs from '@/components/sections/WhyChooseUs/WhyChooseUs';
import StatsCounter from '@/components/sections/StatsCounter/StatsCounter';
import SchemaMarkup from '@/components/shared/SchemaMarkup/SchemaMarkup';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Ideal Electric Pros Inc, Astoria\'s premier licensed electrician company. Discover our story, core values, and meet our team of experts.',
};

export default function AboutPage() {
  const aboutSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Ideal Electric Pros Inc',
      'foundingDate': '2011',
      'founder': {
        '@type': 'Person',
        'name': 'James Harrison',
      },
    },
  };

  return (
    <>
      <SchemaMarkup type="AboutPage" data={aboutSchemaData} />
      <section className={styles.hero} style={{ backgroundImage: 'url(/images/hero/hero-about.jpg)' }}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Ideal Electric Pros Inc</h1>
          <p className={styles.subtitle}>
            Astoria&apos;s trusted electrical technicians bringing safety, quality, and power since 2011.
          </p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <AnimatedSection direction="left">
              <div className={styles.storyContent}>
                <span className={styles.overline}>
                  <Zap size={14} fill="currentColor" />
                  Our Story
                </span>
                <h2 className={styles.sectionTitle}>Providing Trusted Service to Astoria & Queens</h2>
                <p className={styles.paragraph}>
                  Ideal Electric Pros Inc was founded in 2011 by James Harrison with a simple mission: 
                  to deliver honest, high-quality, and secure electrical work to families and business owners 
                  in Astoria and the broader Queens area.
                </p>
                <p className={styles.paragraph}>
                  What began as a one-man local operation has grown into a team of certified master electricians 
                  and technicians. We specialize in residential panel upgrades, commercial construction builds, 
                  smart home systems, and EV charger installations.
                </p>
                <p className={styles.paragraph}>
                  We believe in upfront pricing, rigorous safety protocols, and a commitment to customer service 
                  that treats every home like our own. All our work is backed by a 100% satisfaction guarantee.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className={styles.storyImgWrapper}>
                <Image
                  src="/images/hero/hero-home.jpg"
                  alt="Ideal Electric Pros electrician at work in Queens"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className={styles.storyImg}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.valuesHeader}>
              <span className={styles.overline}>
                <Zap size={14} fill="currentColor" />
                Core Values
              </span>
              <h2 className={styles.sectionTitle}>The Principles That Guide Us</h2>
            </div>
          </AnimatedSection>
          <div className={styles.valuesGrid}>
            <AnimatedSection delay={100}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>
                  <ShieldCheck size={36} style={{ color: 'var(--color-primary-400)', margin: '0 auto 12px' }} />
                </span>
                <h3 className={styles.valueTitle}>Safety First</h3>
                <p className={styles.valueDesc}>
                  Electricity demands respect. We prioritize safety for both our technicians and your property on every single job.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>
                  <HeartHandshake size={36} style={{ color: 'var(--color-primary-400)', margin: '0 auto 12px' }} />
                </span>
                <h3 className={styles.valueTitle}>Integrity & Honesty</h3>
                <p className={styles.valueDesc}>
                  We offer upfront pricing, honest evaluations, and never recommend services or repairs you don&apos;t actually need.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className={styles.valueCard}>
                <span className={styles.valueIcon}>
                  <Award size={36} style={{ color: 'var(--color-primary-400)', margin: '0 auto 12px' }} />
                </span>
                <h3 className={styles.valueTitle}>Uncompromising Quality</h3>
                <p className={styles.valueDesc}>
                  We use premium parts, execute code-compliant wiring, and refuse to cut corners. Quality is our reputation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.teamHeader}>
              <span className={styles.overline}>
                <Users size={14} style={{ color: 'var(--color-accent-400)' }} />
                Expert Crew
              </span>
              <h2 className={styles.sectionTitle}>Meet Our Licensed Electricians</h2>
              <p className={styles.teamSubtitle}>
                Our highly-trained technicians hold active certifications and bring decades of combined experience.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <AnimatedSection key={member.id} delay={idx * 150}>
                <div className={styles.teamCard}>
                  <div className={styles.teamImgWrapper}>
                    <div className={styles.teamAvatarPlaceholder}>
                      <Zap size={32} />
                    </div>
                  </div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}
