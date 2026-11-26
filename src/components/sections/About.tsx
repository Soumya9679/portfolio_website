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
    <section id="about" className="section-y relative border-b border-[var(--border-hairline)]">
      <div className="section-shell">
        <SectionHeading
          index="04"
          eyebrow="Engineering Philosophy"
          title="Rigor before hype: validation, guardrails & measurable fidelity."
          subtitle="How I bridge exploratory ML modeling with reliable FastAPI inference services."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Narrative */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.28 }}
            className="editorial-card flex flex-col justify-between p-6 sm:p-8 lg:col-span-6"
          >
            <div className="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              <p>
                I&apos;m <span className="font-semibold text-[var(--text-primary)]">{profile.name}</span>, a B.Tech IT undergraduate at{' '}
                <span className="font-semibold text-[var(--accent-primary)]">
                  St. Thomas&apos; College of Engineering &amp; Technology (8.79 CGPA)
                </span>
                , focused on Data Science, Machine Learning, and AI Engineering.
              </p>
              <p>
                In projects like{' '}
                <span className="font-semibold text-[var(--text-primary)]">
                  Adaptive Cognitive Difficulty Prediction
                </span>{' '}
                and{' '}
                <span className="font-semibold text-[var(--text-primary)]">
                  Multilingual Voice Intent Classification
                </span>
                , I prioritize the discipline that prevents silent failures in production: eliminating subject-level leakage with GroupKFold, gating noisy speech transcripts with a 0.47 cosine threshold, and enforcing strict Pydantic + allow-list contracts.
              </p>
              <p>
                For Generative AI and NLP, I build privacy-first FAISS + local Qwen2.5 RAG pipelines and benchmark summarization models using ROUGE, BERTScore, and BLEURT before shipping FastAPI endpoints.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-[var(--border-hairline)] pt-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Location
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
                  <MapPin className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
                  Kolkata, WB, India
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Primary Stack
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
                  <Terminal className="h-3.5 w-3.5 text-[var(--accent-teal)]" aria-hidden="true" />
                  Python • scikit-learn • FastAPI
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] p-3.5">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Direct Email
                </span>
                <span className="font-mono text-xs font-semibold text-[var(--accent-primary)] sm:text-sm">
                  {profile.email}
                </span>
              </div>

              <button onClick={handleCopyEmail} className="button-secondary px-3 py-2 text-xs">
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[var(--accent-teal)]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* 4 Engineering Principles */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {engineeringPrinciples.map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="editorial-card p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[var(--accent-primary)]">
                    0{idx + 1}
                  </span>
                  {idx % 2 === 0 ? (
                    <ShieldCheck className="h-4 w-4 text-[var(--accent-teal)]" aria-hidden="true" />
                  ) : (
                    <Cpu className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-3 text-base font-bold text-[var(--text-primary)]">
                  {principle.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
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
