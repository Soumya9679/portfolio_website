'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Copy,
  FileText,
  Github,
  Layers,
  Linkedin,
  Search,
  Terminal,
  X,
} from 'lucide-react';
import { navItems, profile, projects } from '@/lib/portfolio-data';

interface CommandAction {
  id: string;
  group: 'Sections' | 'ML & AI Systems' | 'Links & Actions';
  label: string;
  hint: string;
  keywords: string;
  icon: 'nav' | 'system' | 'github' | 'linkedin' | 'leetcode' | 'resume' | 'copy';
  run: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((prev) => !prev);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    const onOpenTrigger = () => setOpen(true);

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('open-command-palette', onOpenTrigger);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('open-command-palette', onOpenTrigger);
    };
  }, []);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const actions = useMemo<CommandAction[]>(() => {
    const navActions: CommandAction[] = navItems.map((item) => ({
      id: `nav-${item.href}`,
      group: 'Sections',
      label: `Jump to ${item.label}`,
      hint: item.href,
      keywords: `${item.label} section`,
      icon: 'nav',
      run: () => {
        setOpen(false);
        if (window.location.pathname !== '/') {
          router.push(`/${item.href}`);
          return;
        }
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
      },
    }));

    const projectActions: CommandAction[] = projects.map((project) => ({
      id: `proj-${project.id}`,
      group: 'ML & AI Systems',
      label: project.title,
      hint: project.category,
      keywords: `${project.title} ${project.tags.join(' ')} ${project.context}`,
      icon: 'system',
      run: () => {
        setOpen(false);
        if (window.location.pathname !== '/') {
          router.push('/#projects');
          return;
        }
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('open-project-dossier', { detail: project.id }));
        }, 220);
      },
    }));

    const quickActions: CommandAction[] = [
      {
        id: 'act-resume',
        group: 'Links & Actions',
        label: 'Open Interactive CV / Resume',
        hint: '/resume',
        keywords: 'cv resume education cgpa print',
        icon: 'resume',
        run: () => {
          setOpen(false);
          router.push('/resume');
        },
      },
      {
        id: 'act-copy-email',
        group: 'Links & Actions',
        label: copied ? 'Email Copied' : `Copy Email (${profile.email})`,
        hint: 'Clipboard',
        keywords: 'email contact copy',
        icon: 'copy',
        run: () => {
          navigator.clipboard.writeText(profile.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        },
      },
      {
        id: 'act-github',
        group: 'Links & Actions',
        label: 'GitHub (@Soumya9679)',
        hint: 'External',
        keywords: 'github code repos',
        icon: 'github',
        run: () => {
          setOpen(false);
          window.open(profile.githubHref, '_blank', 'noopener,noreferrer');
        },
      },
      {
        id: 'act-linkedin',
        group: 'Links & Actions',
        label: 'LinkedIn Profile',
        hint: 'External',
        keywords: 'linkedin career',
        icon: 'linkedin',
        run: () => {
          setOpen(false);
          window.open(profile.linkedinHref, '_blank', 'noopener,noreferrer');
        },
      },
      {
        id: 'act-leetcode',
        group: 'Links & Actions',
        label: 'LeetCode (@Soumya9679)',
        hint: 'External',
        keywords: 'leetcode dsa',
        icon: 'leetcode',
        run: () => {
          setOpen(false);
          window.open(profile.leetcodeHref, '_blank', 'noopener,noreferrer');
        },
      },
    ];

    return [...navActions, ...projectActions, ...quickActions];
  }, [copied, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.hint.toLowerCase().includes(q) ||
        a.keywords.toLowerCase().includes(q)
    );
  }, [actions, query]);

  const renderIcon = (kind: CommandAction['icon']) => {
    switch (kind) {
      case 'system':
        return <Terminal className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />;
      case 'github':
        return <Github className="h-4 w-4 text-[var(--text-primary)]" aria-hidden="true" />;
      case 'linkedin':
        return <Linkedin className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />;
      case 'leetcode':
        return <Code2 className="h-4 w-4 text-[var(--accent-amber)]" aria-hidden="true" />;
      case 'copy':
        return <Copy className="h-4 w-4 text-[var(--accent-teal)]" aria-hidden="true" />;
      case 'resume':
        return <FileText className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />;
      default:
        return <Layers className="h-4 w-4 text-[var(--text-muted)]" aria-hidden="true" />;
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-editorial-lg"
          >
            <div className="flex items-center gap-3 border-b border-[var(--border-hairline)] px-4 py-3.5">
              <Search className="h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ML models, FAISS, FastAPI, SIH, or jump to section..."
                className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-md border border-[var(--border-hairline)] p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="Close command palette"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-10 text-center font-mono text-xs text-[var(--text-muted)]">
                  No matching results for &quot;{query}&quot;
                </div>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.run}
                    className="group flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-left transition hover:bg-[var(--bg-subtle)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--border-hairline)] bg-[var(--bg-page)]">
                        {renderIcon(item.icon)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-[var(--text-primary)]">
                          {item.label}
                        </p>
                        <p className="font-mono text-[11px] text-[var(--text-muted)]">
                          {item.group}
                        </p>
                      </div>
                    </div>
                    <div className="ml-3 flex shrink-0 items-center gap-2">
                      <span className="hidden font-mono text-[11px] text-[var(--text-muted)] sm:inline">
                        {item.hint}
                      </span>
                      <ArrowRight
                        className="h-3.5 w-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)]"
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                ))
              )}
            </div>

            <div className="flex items-center justify-between border-t border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-4 py-2 font-mono text-[11px] text-[var(--text-muted)]">
              <span>Navigate ML &amp; AI Dossier</span>
              <span className="flex items-center gap-1.5">
                <span className="kbd-cap">ESC</span> to close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
