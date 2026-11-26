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

const accentStyles = {
  emerald: {
    dot: 'bg-emerald-400',
    border: 'border-emerald-500/20',
    icon: 'text-emerald-400',
  },
  cyan: {
    dot: 'bg-cyan-400',
    border: 'border-cyan-500/20',
    icon: 'text-cyan-400',
  },
  amber: {
    dot: 'bg-amber-400',
    border: 'border-amber-500/20',
    icon: 'text-amber-400',
  },
} as const;

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
    <section id="skills" className="section-y relative">
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow="Technical Stack"
          title="Core ML capabilities, evaluation harnesses & production tooling."
          subtitle="Structured around statistical validation, low-latency Python inference microservices, vector retrieval, and deterministic safety guardrails."
        />

        {/* 4 Core Engineering Pillars */}
        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, index) => {
            const Icon = capabilityIcons[index] ?? BrainCircuit;
            return (
              <motion.article
                key={cap.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="glass-card group flex flex-col justify-between p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 transition group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] font-medium text-slate-400">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-3 font-mono text-[11px] font-medium text-emerald-300">
                  {cap.metric}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Full CV Technical Matrix */}
        <div className="panel-surface rounded-2xl p-5 sm:p-7">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-300">
                Verified Stack Matrix
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                Languages, ML Libraries, APIs &amp; Guardrails
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveCategory('all')}
                className={cn(
                  'rounded-lg px-3 py-1.5 font-mono text-[11px] font-medium transition',
                  activeCategory === 'all'
                    ? 'bg-emerald-500 text-slate-950 font-semibold'
                    : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white'
                )}
              >
                All Domains (5)
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'rounded-lg px-3 py-1.5 font-mono text-[11px] font-medium transition',
                    activeCategory === cat.id
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white'
                  )}
                >
                  {cat.title.split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((group) => {
              const Icon = categoryIcons[group.id] ?? Code2;
              const style = accentStyles[group.accent];

              return (
                <div
                  key={group.id}
                  className={cn(
                    'rounded-xl border bg-[#05070b]/70 p-4 sm:p-5',
                    style.border
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-display text-base font-bold text-white">
                        {group.title}
                      </h4>
                      <p className="mt-0.5 font-mono text-[11px] text-slate-500">
                        {group.subtitle}
                      </p>
                    </div>
                    <Icon className={cn('h-4 w-4 shrink-0 mt-1', style.icon)} />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-200 transition hover:border-emerald-500/35 hover:text-white"
                      >
                        <span className={cn('h-1.5 w-1.5 rounded-full', style.dot)} />
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
