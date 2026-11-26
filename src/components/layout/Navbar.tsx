'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Command, Download, FileText, Menu, Moon, Sun, X } from 'lucide-react';
import { navItems, profile } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const saved = window.localStorage.getItem('sm-theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('sm-theme', next ? 'dark' : 'light');
  };

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      for (let i = navItems.length - 1; i >= 0; i--) {
        const id = navItems[i].href.slice(1);
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 160) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setIsOpen(false);
      if (!isHome) return;
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    },
    [isHome]
  );

  const openPalette = () => {
    window.dispatchEvent(new Event('open-command-palette'));
  };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled || !isHome
          ? 'border-[var(--border-hairline)] bg-[var(--bg-page)]/92 backdrop-blur-md'
          : 'border-transparent bg-[var(--bg-page)]/75 backdrop-blur-sm'
      )}
    >
      <div className="section-shell">
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Primary">
          {/* Editorial Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--text-primary)]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] font-mono text-xs font-bold text-[var(--accent-primary)]">
              {profile.shortName}
            </span>
            <span className="hidden sm:inline-flex items-baseline gap-2">
              <span className="font-semibold">{profile.name}</span>
              <span className="font-mono text-[11px] font-normal text-[var(--text-muted)]">
                ML &amp; AI
              </span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={isHome ? item.href : `/${item.href}`}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={cn(
                      'relative inline-flex rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
                      isActive
                        ? 'bg-[var(--bg-subtle)] text-[var(--text-primary)] font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Utilities */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={openPalette}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              aria-label="Open command search"
            >
              <Command className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
              <span className="hidden xl:inline">Search</span>
              <span className="kbd-cap">Ctrl K</span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              aria-label={darkMode ? 'Switch to light editorial theme' : 'Switch to dark studio theme'}
              title={darkMode ? 'Light Editorial Mode' : 'Dark Studio Mode'}
            >
              {darkMode ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <Link
              href="/resume"
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition',
                pathname === '/resume'
                  ? 'border-[var(--accent-primary)] bg-[var(--accent-primary-soft)] text-[var(--accent-primary)]'
                  : 'border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
              )}
            >
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              <span>CV</span>
            </Link>

            <a
              href={profile.resumeHref}
              download
              className="button-primary px-3 py-1.5 text-xs"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>PDF</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={openPalette}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
              aria-label="Open command search"
            >
              <Command className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="relative z-50 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-primary)]"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col border-t border-[var(--border-hairline)] bg-[var(--bg-page)] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="rounded-lg bg-[var(--bg-subtle)] px-3 py-3 text-base font-semibold text-[var(--accent-primary)]"
              >
                Interactive CV / Resume
              </Link>
            </div>

            <div className="mt-auto border-t border-[var(--border-hairline)] pt-5">
              <a href={profile.resumeHref} download className="button-primary w-full py-3">
                <Download className="h-4 w-4" />
                Download Resume PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
