'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Eye,
  Github,
  Sparkles,
  X,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

type ProjectType = (typeof projects)[number];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectType | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const categories = ['All', 'Python & Learning', 'Analytics & Education', 'Data Logging & Logic', 'Algorithmic State Machine'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section-y relative">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected projects built with focus & analytical rigor."
            subtitle="Explore data science applications, interactive learning tools, and algorithmic projects highlighting Python logic and data modeling."
          />

          <a href="#contact" className="button-secondary self-start md:self-auto mb-12">
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4 text-emerald-400" />
          </a>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/10 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200',
                selectedCategory === category
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                  : 'border border-white/10 bg-slate-900/60 text-slate-400 hover:border-emerald-500/30 hover:text-white'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && selectedCategory === 'All';
            const isDownload = project.action === 'Download';
            const ActionIcon = isDownload ? Download : ExternalLink;

            return (
              <motion.article
                key={project.title}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                className={cn(
                  'glass-card group overflow-hidden flex flex-col justify-between hover:border-emerald-500/40',
                  isFeatured && 'lg:col-span-2 lg:grid lg:grid-cols-12 lg:gap-6'
                )}
              >
                {/* Project Image Preview Container */}
                <div
                  className={cn(
                    'relative overflow-hidden bg-slate-950/60',
                    isFeatured
                      ? 'aspect-[16/9] lg:aspect-auto lg:col-span-7'
                      : 'aspect-[16/10]'
                  )}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes={
                      isFeatured
                        ? '(max-width: 1024px) 100vw, 680px'
                        : '(max-width: 768px) 100vw, 560px'
                    }
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent opacity-80" />

                  {/* Overlay Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="button-primary text-xs py-2.5 px-4 gap-2 shadow-xl"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Quick View Details</span>
                    </button>
                  </div>
                </div>

                {/* Project Details Box */}
                <div
                  className={cn(
                    'flex flex-col justify-between p-6 sm:p-7',
                    isFeatured && 'lg:col-span-5 lg:p-8'
                  )}
                >
                  <div>
                    {/* Category Badge & Live Action Icon */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="glass-pill text-[11px] font-mono">
                        {project.category}
                      </span>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md transition hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400"
                        title={project.action}
                      >
                        <ActionIcon className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    {/* Highlight Box */}
                    <div className="mt-4 border-l-2 border-emerald-400 bg-emerald-500/5 px-3.5 py-2.5 rounded-r-lg text-xs leading-relaxed text-emerald-200">
                      <span className="font-semibold text-emerald-400">Key Highlight: </span>
                      {project.highlight}
                    </div>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition"
                      >
                        <span>{project.action}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs text-slate-400 hover:text-white transition underline underline-offset-4"
                      >
                        View Info
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-slate-900/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl z-10"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="glass-pill text-xs">
                  {activeModalProject.category}
                </span>
              </div>

              <h3 className="font-display text-3xl font-bold text-white">
                {activeModalProject.title}
              </h3>

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 my-5 bg-slate-950">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="my-4 border-l-2 border-emerald-400 bg-emerald-500/10 p-3.5 rounded-r-xl text-sm text-emerald-200">
                <span className="font-bold text-emerald-300">Highlight: </span>
                {activeModalProject.highlight}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeModalProject.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={activeModalProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary w-full"
                >
                  <span>{activeModalProject.action}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
