'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Blocks,
  BrainCircuit,
  Code2,
  Cpu,
  Globe,
  Layers,
  Layout,
  MonitorSmartphone,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { capabilities, techGroups } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const capabilityIcons = [MonitorSmartphone, Blocks, BrainCircuit, Sparkles];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const shouldReduceMotion = useReducedMotion();

  const filteredGroups =
    activeTab === 'All'
      ? techGroups
      : techGroups.filter((g) => g.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="section-y relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills & Stack"
          title="Battle-tested tools for creating performant web apps."
          subtitle="Not just knowing libraries, but crafting responsive layouts, clean state management, accessible UI, and polished user journeys."
        />

        {/* Core Capabilities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index] ?? MonitorSmartphone;

            return (
              <motion.article
                key={capability.title}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                className="glass-card group p-6 flex flex-col justify-between hover:border-emerald-500/40"
              >
                <div>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {capability.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Technologies Breakdown Box */}
        <div className="glass-card p-6 sm:p-8 border-cyan-500/20 bg-slate-900/70">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Technical Stack
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">
                Technologies & Tools I Use Daily
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Frontend', 'Programming', 'Workflow'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200',
                    activeTab === tab
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                      : 'border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grouped Skills Display */}
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {filteredGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                  {group.title === 'Frontend' && <Layout className="h-4 w-4 text-emerald-400" />}
                  {group.title === 'Programming' && <Code2 className="h-4 w-4 text-cyan-400" />}
                  {group.title === 'Workflow' && <Wrench className="h-4 w-4 text-violet-400" />}
                  <span>{group.title}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300 hover:scale-105"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
