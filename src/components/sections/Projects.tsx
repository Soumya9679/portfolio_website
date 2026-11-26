'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Terminal,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectVisual from '@/components/projects/ProjectVisual';
import ProjectDossierModal from '@/components/projects/ProjectDossierModal';
import {
  engineeringArchive,
  projects,
  type Project,
  type ProjectCategory,
} from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const filterCategories: ProjectCategory[] = [
  'All',
  'ML & FastAPI',
  'NLP & Speech AI',
  'RAG & GenAI',
  'Full-Stack AI',
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
    <section id="projects" className="section-y relative">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="01"
            eyebrow="Production Systems & Research"
            title="Shipped ML microservices, speech guardrails & full-stack AI."
            subtitle="Every system below is backed by real GitHub repositories, evaluated with domain-specific metrics, and documented with full architecture dossiers."
          />

          <a
            href="https://github.com/Soumya9679?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary mb-10 self-start md:self-auto"
          >
            <Github className="h-4 w-4 text-emerald-400" />
            <span>All GitHub Repos</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'inline-flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs font-medium transition',
                selectedCategory === category
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:border-emerald-500/35 hover:text-white'
              )}
            >
              <span>{category}</span>
              <span
                className={cn(
                  'rounded px-1.5 py-0.5 text-[10px]',
                  selectedCategory === category
                    ? 'bg-black/20 text-slate-950'
                    : 'bg-white/[0.06] text-slate-400'
                )}
              >
                {countFor(category)}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isLead = index === 0 && selectedCategory === 'All';

            return (
              <motion.article
                key={project.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25) }}
                className={cn(
                  'glass-card group flex flex-col justify-between overflow-hidden',
                  isLead && 'lg:col-span-2 lg:grid lg:grid-cols-12'
                )}
              >
                {/* Visual / Telemetry Header */}
                <div
                  className={cn(
                    'relative overflow-hidden border-b border-white/10',
                    isLead
                      ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[340px] lg:col-span-5 lg:border-b-0 lg:border-r'
                      : 'aspect-[16/9]'
                  )}
                >
                  <ProjectVisual project={project} priority={index < 2} />
                </div>

                {/* Details */}
                <div
                  className={cn(
                    'flex flex-col justify-between p-5 sm:p-6',
                    isLead && 'lg:col-span-7 lg:p-7'
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="glass-pill">{project.category}</span>
                        {project.tier === 'flagship' && (
                          <span className="rounded-md border border-cyan-500/25 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-300">
                            CV FLAGSHIP
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">
                        {project.context}
                      </span>
                    </div>

                    <h3 className="mt-3.5 font-display text-xl font-bold text-white transition-colors group-hover:text-emerald-300 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-slate-400">{project.subtitle}</p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {project.summary}
                    </p>

                    {/* 4-Metric KPI Strip */}
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg border border-white/10 bg-[#05070b]/80 px-2.5 py-2"
                        >
                          <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-500">
                            {m.label}
                          </span>
                          <span className="mt-0.5 block font-mono text-xs font-bold text-emerald-300">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
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
                        className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
                      >
                        <Layers className="h-3.5 w-3.5" />
                        <span>Architecture Dossier</span>
                      </button>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 transition hover:text-white"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Repo</span>
                        </a>

                        {project.liveHref && (
                          <a
                            href={project.liveHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-cyan-300 transition hover:text-cyan-200"
                          >
                            <span>Live</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* GitHub Systems & DSA Archive */}
        <div className="mt-10 panel-surface rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-emerald-400" />
              <h3 className="font-display text-lg font-bold text-white">
                Additional GitHub Systems &amp; DSA Archive
              </h3>
            </div>
            <span className="font-mono text-[11px] text-slate-400">
              github.com/Soumya9679
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringArchive.map((repo) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/10 bg-[#05070b]/70 p-4 transition hover:border-emerald-500/35 hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-white group-hover:text-emerald-300">
                    <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                    {repo.name}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-emerald-400" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {repo.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {repo.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <ProjectDossierModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
