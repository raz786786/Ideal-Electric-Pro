'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');

    return () => {
      if (transitionTimer.current) {
        clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';

    // Enable smooth transition only for the switch itself
    root.classList.add('theme-transition');
    root.setAttribute('data-theme', next);
    setTheme(next);

    try {
      window.localStorage.setItem('theme', next);
    } catch (e) {
      /* ignore storage errors */
    }

    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }
    transitionTimer.current = setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 400);
  }, []);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      id="theme-toggle"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {mounted && theme === 'dark' ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <Moon size={16} aria-hidden="true" />
      )}
    </button>
  );
}
