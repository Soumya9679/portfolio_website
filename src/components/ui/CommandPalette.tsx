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
  Mail,
  Search,
  Terminal,
  X,
} from 'lucide-react';
import { navItems, profile, projects } from '@/lib/portfolio-data';

interface CommandAction {
  id: string;
  group: 'Navigation' | 'Flagship Systems' | 'Actions';
  label: string;
  hint: string;
  keywords: string;
  icon: 'nav' | 'system' | 'github' | 'linkedin' | 'leetcode' | 'mail' | 'resume' | 'copy';
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
      group: 'Navigation',
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
      group: 'Flagship Systems',
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
        }, 250);
      },
    }));

    const quickActions: CommandAction[] = [
      {
        id: 'act-resume-page',
        group: 'Actions',
        label: 'Open Interactive Resume / CV',
        hint: '/resume',
        keywords: 'cv resume education cgpa print pdf',
        icon: 'resume',
        run: () => {
          setOpen(false);
          router.push('/resume');
        },
      },
      {
        id: 'act-copy-email',
        group: 'Actions',
        label: copied ? 'Copied Email to Clipboard' : `Copy Email (${profile.email})`,
        hint: 'Clipboard',
        keywords: 'email mail contact copy',
        icon: 'copy',
        run: () => {
          navigator.clipboard.writeText(profile.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        },
      },
      {
        id: 'act-github',
        group: 'Actions',
        label: 'Open GitHub Profile (@Soumya9679)',
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
        group: 'Actions',
        label: 'Open LinkedIn Profile',
        hint: 'External',
        keywords: 'linkedin career profile',
        icon: 'linkedin',
        run: () => {
          setOpen(false);
          window.open(profile.linkedinHref, '_blank', 'noopener,noreferrer');
        },
      },
      {
        id: 'act-leetcode',
        group: 'Actions',
        label: 'Open LeetCode Profile',
        hint: 'External',
        keywords: 'leetcode dsa algorithms',
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
        return <Terminal className="h-4 w-4 text-emerald-400" />;
      case 'github':
        return <Github className="h-4 w-4 text-slate-300" />;
      case 'linkedin':
        return <Linkedin className="h-4 w-4 text-cyan-400" />;
      case 'leetcode':
        return <Code2 className="h-4 w-4 text-amber-400" />;
      case 'mail':
        return <Mail className="h-4 w-4 text-emerald-400" />;
      case 'copy':
        return <Copy className="h-4 w-4 text-emerald-400" />;
      case 'resume':
        return <FileText className="h-4 w-4 text-cyan-400" />;
      default:
        return <Layers className="h-4 w-4 text-slate-400" />;
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
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.16 }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b1019]/95 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <Search className="h-4 w-4 text-emerald-400 shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search systems, FastAPI, RAG, SIH, or jump to section..."
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 p-1 text-slate-400 hover:text-white"
                aria-label="Close command palette"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-10 text-center text-xs font-mono text-slate-500">
                  No matching commands or systems for &quot;{query}&quot;
                </div>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.run}
                    className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                        {renderIcon(item.icon)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-100 group-hover:text-white">
                          {item.label}
                        </p>
                        <p className="font-mono text-[11px] text-slate-500">{item.group}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
                        {item.hint}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    </div>
                  </button>
                ))
              )}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 bg-black/30 px-4 py-2 text-[11px] font-mono text-slate-500">
              <span>Navigate engineering dossier</span>
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
