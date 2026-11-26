'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Copy, Cpu, MapPin, ShieldCheck, Terminal } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { engineeringPrinciples, profile } from '@/lib/portfolio-data';

export default function About() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="about" className="section-y relative">
      <div className="section-shell">
        <SectionHeading
          index="04"
          eyebrow="Engineering Philosophy"
          title="Models only matter when they survive unseen users and production constraints."
          subtitle="How I bridge exploratory ML research with reliable, guardrail-protected software systems."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Narrative Dossier */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.3 }}
            className="panel-surface flex flex-col justify-between rounded-2xl p-6 sm:p-8 lg:col-span-6"
          >
            <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                I&apos;m <span className="font-semibold text-white">{profile.name}</span>, a B.Tech Information Technology undergraduate at{' '}
                <span className="text-emerald-300 font-medium">
                  St. Thomas&apos; College of Engineering &amp; Technology (8.79 CGPA)
                </span>
                , focused on building practical Machine Learning, NLP, and Generative AI systems.
              </p>
              <p>
                Across projects like{' '}
                <span className="text-white font-medium">Adaptive Cognitive Difficulty</span> and{' '}
                <span className="text-white font-medium">Multilingual Voice Intent Routing</span>, I focus on the parts that usually break in production: eliminating subject-level data leakage with GroupKFold, enforcing cosine similarity rejection thresholds, and wrapping inference behind strict Pydantic schemas.
              </p>
              <p>
                Whether it&apos;s local privacy-first RAG using FAISS and Ollama Qwen2.5 or 36-hour hackathon prototypes like Cortex Finance AI, I enjoy owning the full loop from data pipeline and evaluation metrics (ROUGE, BERTScore, BLEURT) to FastAPI and Next.js delivery.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Location
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white">
                  <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                  Kolkata, WB, India
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Primary Stack
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white">
                  <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                  Python • FastAPI • Next.js
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#05070b]/80 p-3.5">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  Direct Email
                </span>
                <span className="font-mono text-xs text-emerald-300 sm:text-sm">
                  {profile.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="button-secondary px-3 py-2 text-xs"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right: 4 Engineering Principles */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {engineeringPrinciples.map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="glass-card p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-emerald-400">
                    0{idx + 1}
                  </span>
                  {idx % 2 === 0 ? (
                    <ShieldCheck className="h-4 w-4 text-emerald-400/80" />
                  ) : (
                    <Cpu className="h-4 w-4 text-cyan-400/80" />
                  )}
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                  {principle.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
