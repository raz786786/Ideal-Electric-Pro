'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, X } from 'lucide-react';
import { projects } from '@/data/projects';
import { type Project } from '@/types';
import AnimatedSection from '@/components/shared/AnimatedSection/AnimatedSection';
import styles from './ProjectsGallery.module.css';

interface ProjectsGalleryProps {
  limit?: number;
}

export default function ProjectsGallery({ limit }: ProjectsGalleryProps) {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'emergency'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Esc key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className={styles.section} id="projects-gallery-section">
      <div className={styles.container}>
        {!limit && (
          <AnimatedSection>
            <div className={styles.filters}>
              {(['all', 'residential', 'commercial', 'emergency'] as const).map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${filter === cat ? styles.activeFilterBtn : ''}`}
                  onClick={() => setFilter(cat)}
                  id={`filter-btn-${cat}`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </AnimatedSection>
        )}

        <div className={styles.grid}>
          {displayProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <div
                className={styles.card}
                onClick={() => setSelectedProject(project)}
                id={`project-card-${project.id}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(project);
                  }
                }}
              >
                <div className={styles.imgWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.img}
                    loading="lazy"
                  />
                  <span className={styles.cardCategory}>{project.category}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.cardLoc}>
                    <MapPin size={14} style={{ color: 'var(--color-primary-400)', marginRight: '4px' }} />
                    {project.location}
                  </div>
                  <p className={styles.cardDesc}>{project.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {selectedProject && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedProject(null)}
            id="project-lightbox"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
                aria-label="Close lightbox"
                id="close-lightbox-btn"
              >
                <X size={18} />
              </button>
              <div className={styles.lightboxImgWrapper}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="100vw"
                  className={styles.img}
                  priority
                />
              </div>
              <div className={styles.lightboxBody}>
                <span className={styles.lightboxCategory}>{selectedProject.category}</span>
                <h3 className={styles.lightboxTitle}>{selectedProject.title}</h3>
                <div className={styles.cardLoc}>
                  <MapPin size={14} style={{ color: 'var(--color-primary-400)', marginRight: '4px' }} />
                  {selectedProject.location}
                </div>
                <p className={styles.lightboxDesc}>{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
