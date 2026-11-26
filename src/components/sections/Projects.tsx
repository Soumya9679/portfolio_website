'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Layers } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectVisual from '@/components/projects/ProjectVisual';
import ProjectDossierModal from '@/components/projects/ProjectDossierModal';
import {
  projects,
  type Project,
  type ProjectCategory,
} from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const filterCategories: ProjectCategory[] = [
  'All',
  'Machine Learning',
  'NLP & Speech AI',
  'RAG & GenAI',
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handler = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      const found = projects.find((p) => p.id === id);
      if (found) setActiveProject(found);
    };
    window.addEventListener('open-project-dossier', handler);
    return () => window.removeEventListener('open-project-dossier', handler);
  }, []);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  const countFor = (cat: ProjectCategory) =>
    cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;

  return (
    <section id="projects" className="section-y relative border-b border-[var(--border-hairline)]">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="01"
            eyebrow="Selected ML & AI Systems"
            title="Curated strictly around Data Science, ML, NLP & RAG."
            subtitle="Six production-focused ML pipelines, speech-to-action guardrails, retrieval systems, and semantic evaluation harnesses backed by GitHub repositories."
          />

          <a
            href="https://github.com/Soumya9679?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary mb-10 self-start md:self-auto"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-[var(--border-hairline)] pb-4">
          {filterCategories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-xs font-medium transition',
                  active
                    ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-semibold'
                    : 'border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                )}
              >
                <span>{category}</span>
                <span
                  className={cn(
                    'rounded px-1.5 py-0.5 text-[10px]',
                    active
                      ? 'bg-[var(--bg-surface)]/20 text-[var(--bg-surface)]'
                      : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                  )}
                >
                  {countFor(category)}
                </span>
              </button>
            );
          })}
        </div>

        {/* 6 Focused ML & AI System Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.28, delay: Math.min(index * 0.04, 0.16) }}
              className="editorial-card group flex flex-col justify-between overflow-hidden"
            >
              {/* Visual / Telemetry Preview */}
              <div className="aspect-[16/9] overflow-hidden border-b border-[var(--border-hairline)]">
                <ProjectVisual project={project} priority={index < 2} />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="editorial-pill">{project.category}</span>
                      {project.tier === 'cv-core' && (
                        <span className="rounded border border-[var(--border-hairline)] bg-[var(--accent-primary-soft)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--accent-primary)]">
                          CV CORE
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">
                    {project.context}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.summary}
                  </p>

                  {/* 4-Metric KPI Table */}
                  <div className="mt-4 grid grid-cols-4 overflow-hidden rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)]">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={m.label}
                        className={cn(
                          'px-2.5 py-2',
                          mIdx > 0 && 'border-l border-[var(--border-hairline)]'
                        )}
                      >
                        <span className="block truncate font-mono text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
                          {m.label}
                        </span>
                        <span className="mt-0.5 block truncate font-mono text-xs font-bold text-[var(--text-primary)]">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-[var(--border-hairline)] pt-4">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border-strong)] bg-[var(--bg-subtle)] px-3 py-1.5 font-mono text-xs font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
                    >
                      <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Architecture Dossier</span>
                    </button>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                      >
                        <Github className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>GitHub</span>
                      </a>

                      {project.liveHref && (
                        <a
                          href={project.liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[var(--accent-primary)] hover:underline"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectDossierModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
