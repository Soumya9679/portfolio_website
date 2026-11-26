'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Layers, ShieldAlert, X } from 'lucide-react';
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#090d14]/98 p-6 shadow-2xl sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close dossier"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2 pr-10">
              <span className="glass-pill">{project.category}</span>
              <span className="font-mono text-xs text-slate-400">{project.context}</span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-emerald-300">{project.subtitle}</p>

            {/* Visual Preview */}
            <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10">
              <ProjectVisual project={project} />
            </div>

            {/* Verified Metrics Strip */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-[#05070b] p-3"
                >
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {metric.label}
                  </span>
                  <span className="mt-1 block font-display text-lg font-bold text-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Engineering Challenge */}
            <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/[0.05] p-4">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                <ShieldAlert className="h-3.5 w-3.5" />
                Problem &amp; Engineering Constraint
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-200">{project.problem}</p>
            </div>

            {/* System Architecture Pipeline */}
            <div className="mt-6">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                <Layers className="h-3.5 w-3.5" />
                System Architecture Pipeline
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {project.architecture.map((node, i) => (
                  <div
                    key={node.stage}
                    className="rounded-xl border border-white/10 bg-[#05070b]/80 p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-semibold text-emerald-400">
                        {node.stage}
                      </span>
                      <span className="rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-slate-300">
                        {node.tech}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{node.detail}</p>
                    {i < project.architecture.length - 1 && (
                      <ArrowRight className="mt-1 hidden h-3 w-3 text-slate-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="mt-6">
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Implementation Highlights
              </h4>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack Tags */}
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-5">
              {project.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary flex-1"
              >
                <Github className="h-4 w-4" />
                <span>View Source on GitHub</span>
              </a>

              {project.liveHref && (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary flex-1"
                >
                  <span>Open Live Deployment</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
