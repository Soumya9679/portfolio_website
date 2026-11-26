'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Command, Download, FileText, Menu, X } from 'lucide-react';
import { navItems, profile } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2.5' : 'py-4'
      )}
    >
      <div className="section-shell">
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 md:px-5',
            scrolled || !isHome
              ? 'border-white/12 bg-[#090d14]/88 shadow-panel backdrop-blur-xl'
              : 'border-white/8 bg-[#090d14]/55 backdrop-blur-md'
          )}
        >
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-white"
            aria-label="Go to overview"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/35 bg-emerald-500/15 font-mono text-xs font-bold text-emerald-300 transition group-hover:bg-emerald-500/25">
              {profile.shortName}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <span>Soumyadip Maity</span>
              <span className="font-mono text-[11px] font-medium text-emerald-400/90">
                /ml
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={isHome ? item.href : `/${item.href}`}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={cn(
                      'relative inline-flex rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-100'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-lg border border-emerald-500/25 bg-emerald-500/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="hidden items-center gap-2.5 md:flex">
            <button
              onClick={openPalette}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-emerald-500/35 hover:text-white"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="h-3.5 w-3.5 text-emerald-400" />
              <span className="hidden xl:inline">Search</span>
              <span className="kbd-cap">Ctrl K</span>
            </button>

            <Link
              href="/resume"
              className={cn(
                'inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition',
                pathname === '/resume'
                  ? 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300'
                  : 'border-white/10 bg-white/[0.04] text-slate-200 hover:border-emerald-500/35 hover:text-white'
              )}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>CV</span>
            </Link>

            <a
              href={profile.resumeHref}
              download
              className="button-primary px-3.5 py-2 text-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>PDF</span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={openPalette}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300"
              aria-label="Open search palette"
            >
              <Command className="h-4 w-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="relative z-50 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#05070b]/96 px-6 pt-24 pb-8 backdrop-blur-2xl md:hidden"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              Navigation
            </span>
            <div className="mt-4 flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="rounded-xl border border-transparent px-4 py-3 font-display text-lg font-semibold text-slate-200 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 font-display text-lg font-semibold text-emerald-300"
              >
                Interactive CV / Resume
              </Link>
            </div>

            <div className="mt-auto border-t border-white/10 pt-5">
              <a href={profile.resumeHref} download className="button-primary w-full py-3.5">
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
