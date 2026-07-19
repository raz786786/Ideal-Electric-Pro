import type { Metadata } from 'next';
import ProjectsGallery from '@/components/sections/ProjectsGallery/ProjectsGallery';
import EmergencyCTA from '@/components/sections/EmergencyCTA/EmergencyCTA';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Our Completed Projects',
  description: 'Browse our portfolio of completed residential and commercial electrical projects across Astoria, Queens, and NYC. See our quality workmanship.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>Our Completed Projects</h1>
          <p className={styles.subtitle}>
            Explore our work. We take pride in delivering professional, safe, and code-compliant electrical systems.
          </p>
        </div>
      </section>
      <ProjectsGallery />
      <EmergencyCTA />
    </>
  );
}
