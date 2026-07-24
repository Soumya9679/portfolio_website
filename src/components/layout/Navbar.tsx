'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, Sparkles, X } from 'lucide-react';
import { navItems, profile } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      for (let i = navItems.length - 1; i >= 0; i--) {
        const id = navItems[i].href.slice(1);
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      event.preventDefault();
      setIsOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="section-shell">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 md:px-6 md:py-3',
            scrolled
              ? 'border-white/10 bg-[#0d1322]/80 shadow-glass backdrop-blur-xl'
              : 'border-white/5 bg-slate-900/40 backdrop-blur-md'
          )}
        >
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, '#home')}
            className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white transition hover:opacity-90"
            aria-label="Go to home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white font-mono text-sm font-bold shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              SM
            </span>
            <span className="hidden sm:inline-block">
              Soumyadip <span className="text-emerald-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden items-center gap-1 rounded-xl border border-white/10 bg-slate-950/40 p-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={cn(
                      'relative inline-flex rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-emerald-500/15 border border-emerald-500/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Resume Button */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={profile.resumeHref}
              download
              className="button-primary text-xs py-2.5 px-4"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition hover:border-emerald-500/40 hover:bg-emerald-500/10 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col bg-[#05070d]/95 pt-24 px-6 pb-8 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Navigation
              </span>
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      onClick={(event) => handleNavClick(event, item.href)}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition',
                        isActive
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && <Sparkles className="h-4 w-4 text-emerald-400" />}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto border-t border-white/10 pt-6">
              <a
                href={profile.resumeHref}
                download
                className="button-primary w-full py-3.5"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
