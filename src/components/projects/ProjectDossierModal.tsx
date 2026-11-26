'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Layers, ShieldAlert, X } from 'lucide-react';
import ProjectVisual from '@/components/projects/ProjectVisual';
import type { Project } from '@/lib/portfolio-data';

interface ProjectDossierModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDossierModal({ project, onClose }: ProjectDossierModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-title"
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/55 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-6 shadow-editorial-lg sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              aria-label="Close architecture dossier"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex flex-wrap items-center gap-2 pr-10">
              <span className="editorial-pill">{project.category}</span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                {project.context}
              </span>
            </div>

            <h3
              id="dossier-title"
              className="mt-3 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs font-medium text-[var(--accent-primary)]">
              {project.subtitle}
            </p>

            {/* Visual Preview */}
            <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--border-hairline)]">
              <ProjectVisual project={project} />
            </div>

            {/* Verified Metrics Strip */}
            <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)] sm:grid-cols-4">
              {project.metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={
                    idx > 0
                      ? 'border-t border-[var(--border-hairline)] p-3 sm:border-t-0 sm:border-l'
                      : 'p-3'
                  }
                >
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {metric.label}
                  </span>
                  <span className="mt-1 block font-mono text-base font-bold text-[var(--text-primary)]">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Problem & Constraint */}
            <div className="mt-6 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-4">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-amber)]">
                <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
                Problem &amp; Engineering Constraint
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-primary)]">
                {project.problem}
              </p>
            </div>

            {/* System Architecture Pipeline */}
            <div className="mt-6">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                System Architecture Pipeline
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {project.architecture.map((node) => (
                  <div
                    key={node.stage}
                    className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)] p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold text-[var(--accent-primary)]">
                        {node.stage}
                      </span>
                      <span className="rounded border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]">
                        {node.tech}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {node.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-6">
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Implementation Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[var(--border-hairline)] pt-5">
              {project.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary flex-1"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>View Repository</span>
              </a>

              {project.liveHref && (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary flex-1"
                >
                  <span>Open Live Deployment</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
