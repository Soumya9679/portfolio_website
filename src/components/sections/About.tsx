'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  CheckCircle2,
  Code,
  Compass,
  Copy,
  Check,
  Layers3,
  MapPin,
  Sparkles,
  Zap,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { principles, profile } from '@/lib/portfolio-data';

export default function About() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="section-y relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="A developer who cares deeply about finished, high-polish web products."
          subtitle="I enjoy shaping ideas into web experiences that are easy to navigate, visual to explore, and robustly architected under the hood."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Main Story Narrative Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="glass-card p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-4 text-base leading-relaxed text-slate-300 md:text-lg">
              <p>
                I am <span className="font-semibold text-white">{profile.name}</span>, a dedicated{' '}
                <span className="text-emerald-400 font-semibold">{profile.role}</span> building clean web interfaces, interactive learning products, and frontend applications.
              </p>
              <p>
                My engineering approach starts with structure: intuitive information design, responsive design tokens, and smooth micro-interactions that guide users effortlesly.
              </p>
              <p>
                Whether building complex Next.js full-stack applications, gamified coding platforms, or standalone utility tools, I combine core CS fundamentals with modern React paradigms.
              </p>
            </div>

            {/* Direct Email Action Pill */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Direct Contact Email
                </p>
                <p className="text-sm font-mono text-emerald-300 mt-1">{profile.email}</p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="button-secondary text-xs py-2 px-3.5 gap-1.5"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Core Philosophy & Attributes Card */}
          <motion.aside
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="glass-card p-6 sm:p-8 lg:col-span-5 border-emerald-500/20 bg-slate-900/80"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Engineering Attributes
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  Working Philosophy
                </h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Zap className="h-5 w-5" />
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4 py-5 border-b border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 font-medium">Based in</p>
                  <p className="text-sm font-semibold text-white">{profile.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers3 className="h-4 w-4 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 font-medium">Core Stack</p>
                  <p className="text-sm font-semibold text-white">Next.js & React</p>
                </div>
              </div>
            </div>

            {/* Principles List */}
            <div className="pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Core Principles
              </p>
              <ul className="space-y-3">
                {principles.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
