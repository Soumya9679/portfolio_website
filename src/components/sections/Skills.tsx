'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Mic,
  Server,
  ShieldCheck,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { capabilities, skillCategories } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const capabilityIcons = [Activity, Mic, Database, ShieldCheck];

const categoryIcons: Record<string, typeof Code2> = {
  programming: Code2,
  ml: BrainCircuit,
  genai: Cpu,
  backend: Server,
  guardrails: ShieldCheck,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const shouldReduceMotion = useReducedMotion();

  const visibleCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="section-y relative border-b border-[var(--border-hairline)]">
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow="Capabilities & Technical Matrix"
          title="End-to-end ML engineering, NLP evaluation & FastAPI deployment."
          subtitle="Core skills directly aligned with Data Science, Machine Learning, and AI Engineering."
        />

        {/* 4 Core Engineering Pillars */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, index) => {
            const Icon = capabilityIcons[index] ?? BrainCircuit;
            return (
              <motion.article
                key={cap.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="editorial-card flex flex-col justify-between p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--accent-primary-soft)] text-[var(--accent-primary)]">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] font-medium text-[var(--text-muted)]">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[var(--text-primary)]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-[var(--border-hairline)] pt-3 font-mono text-[11px] font-semibold text-[var(--accent-teal)]">
                  {cap.metric}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CV Skills Ledger */}
        <div className="editorial-card p-5 sm:p-7">
          <div className="flex flex-col gap-4 border-b border-[var(--border-hairline)] pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                CV Technical Stack
              </span>
              <h3 className="mt-1 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                Tools, Models &amp; Evaluation Frameworks
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveCategory('all')}
                className={cn(
                  'cursor-pointer rounded-md border px-3 py-1.5 font-mono text-[11px] font-medium transition',
                  activeCategory === 'all'
                    ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-semibold'
                    : 'border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                )}
              >
                All Domains (5)
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'cursor-pointer rounded-md border px-3 py-1.5 font-mono text-[11px] font-medium transition',
                    activeCategory === cat.id
                      ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-semibold'
                      : 'border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  )}
                >
                  {cat.title.split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((group) => {
              const Icon = categoryIcons[group.id] ?? Code2;
              return (
                <div
                  key={group.id}
                  className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)] p-4 sm:p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)] sm:text-base">
                        {group.title}
                      </h4>
                      <p className="mt-0.5 font-mono text-[11px] text-[var(--text-muted)]">
                        {group.subtitle}
                      </p>
                    </div>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
