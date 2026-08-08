'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { navigation } from '@/data/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  /* ---- Scroll detection ---- */
  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();                        // check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ---- Lock body scroll when mobile menu is open ---- */
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  /* ---- Close mobile menu on navigation ---- */
  const closeMobileMenu = useCallback((): void => {
    setMobileMenuOpen(false);
  }, []);

  /* ---- Active-link check ---- */
  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      id="site-header"
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
    >
      <div className={styles.container}>
        {/* ---- Logo ---- */}
        <Link href="/" className={styles.logo} id="header-logo">
          <span className={styles.logoIcon} aria-hidden="true">
            <Zap size={18} fill="currentColor" />
          </span>
          Ideal Electric Pros&nbsp;<span>Inc</span>
        </Link>

        {/* ---- Desktop Navigation ---- */}
        <nav className={styles.nav} id="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ---- Desktop Phone CTA ---- */}
        <Link
          href={`tel:${siteConfig.phoneRaw}`}
          className={styles.phoneCta}
          id="header-phone-cta"
        >
          <span className={styles.phoneIcon} aria-hidden="true">
            <Phone size={14} fill="currentColor" />
          </span>
          {siteConfig.phone}
        </Link>

        {/* ---- Theme Toggle (visible on all breakpoints) ---- */}
        <ThemeToggle />

        {/* ---- Mobile Hamburger Toggle ---- */}
        <button
          type="button"
          id="mobile-menu-toggle"
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.mobileToggleOpen : ''}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ---- Mobile Menu Overlay ---- */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Mobile navigation"
      >
        {navigation.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.mobileNavLinkActive : ''}`}
            onClick={closeMobileMenu}
            style={{ '--i': index } as React.CSSProperties}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={`tel:${siteConfig.phoneRaw}`}
          className={styles.mobilePhoneCta}
          id="mobile-phone-cta"
          onClick={closeMobileMenu}
        >
          <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}>
            <Phone size={20} fill="currentColor" />
          </span>
          {siteConfig.phone}
        </Link>
      </nav>
    </header>
  );
}
