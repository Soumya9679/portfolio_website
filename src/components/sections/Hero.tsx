'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Code2,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Mic,
  ShieldCheck,
} from 'lucide-react';
import { heroMetrics, profile, sandboxPresets, socialLinks } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
} as const;

type SandboxTab = 'difficulty' | 'voice' | 'rag';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<SandboxTab>('difficulty');
  const [difficultyIdx, setDifficultyIdx] = useState(0);
  const [voiceIdx, setVoiceIdx] = useState(0);
  const [ragIdx, setRagIdx] = useState(0);

  const difficultyScenario = sandboxPresets.difficulty.scenarios[difficultyIdx];
  const voiceSample = sandboxPresets.voice.samples[voiceIdx];
  const ragQuery = sandboxPresets.rag.queries[ragIdx];

  return (
    <section
      id="home"
      className="relative border-b border-[var(--border-hairline)] pt-28 pb-16 sm:pt-32 lg:pb-20"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Column: Editorial Monograph Intro */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-teal)]" />
              <span className="font-mono text-[11px] font-semibold tracking-wide text-[var(--text-primary)]">
                DATA SCIENCE • ML • AI ENGINEERING
              </span>
              <span className="text-[var(--border-strong)]">|</span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">
                B.Tech IT • 8.79 CGPA
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Building{' '}
              <span className="font-serif italic font-medium text-[var(--accent-primary)]">
                leakage-free
              </span>{' '}
              ML models, multilingual speech AI, and local RAG systems.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              I&apos;m <span className="font-semibold text-[var(--text-primary)]">{profile.name}</span> — specializing in Python ML pipelines, NLP evaluation (ROUGE, BERTScore, BLEURT), FAISS vector retrieval, and FastAPI inference microservices.
            </p>

            {/* Primary Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="button-primary">
                <span>Explore ML &amp; AI Systems</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <Link href="/resume" className="button-secondary">
                <FileText className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />
                <span>Interactive CV</span>
              </Link>

              <a
                href={profile.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Direct Channels */}
            <div className="mt-7 flex flex-wrap items-center gap-2.5 border-t border-[var(--border-hairline)] pt-5">
              <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                Channels
              </span>
              {socialLinks.map(({ href, label, kind }) => {
                const Icon = iconMap[kind];
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                );
              })}
            </div>

            {/* Tabular Verified Benchmark Ledger */}
            <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] sm:grid-cols-4">
              {heroMetrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={cn(
                    'p-4',
                    idx > 0 && 'border-t border-[var(--border-hairline)] sm:border-t-0 sm:border-l'
                  )}
                >
                  <p className="font-mono text-2xl font-bold tabular-nums text-[var(--text-primary)]">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-[var(--accent-primary)]">
                    {metric.label}
                  </p>
                  <p className="mt-1 font-mono text-[10px] leading-snug text-[var(--text-muted)]">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Researcher Profile + Interactive Model Evaluation Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="editorial-card overflow-hidden">
              {/* Researcher Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] bg-[var(--bg-subtle)]/60 p-4 sm:p-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)]">
                    <Image
                      src="/images/profilePic.jpg"
                      alt={profile.name}
                      fill
                      priority
                      sizes="56px"
                      className="object-cover object-[65%_30%]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-[var(--text-primary)]">
                        {profile.name}
                      </h2>
                      <span className="rounded border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--accent-teal)]">
                        SIH LEAD
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">
                      STCET • B.Tech IT (2024–2028)
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 font-mono text-[11px] text-[var(--text-muted)]">
                      <MapPin className="h-3 w-3 text-[var(--accent-primary)]" aria-hidden="true" />
                      Kolkata, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Model Evaluation Switcher */}
              <div className="border-b border-[var(--border-hairline)] px-4 py-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Interactive Model Bench
                  </span>
                  <span className="font-mono text-[10px] font-medium text-[var(--accent-teal)]">
                    CV SYSTEMS
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5" role="tablist" aria-label="Model bench">
                  {[
                    { id: 'difficulty' as const, label: 'Difficulty ML', icon: Activity },
                    { id: 'voice' as const, label: 'Voice Guard', icon: Mic },
                    { id: 'rag' as const, label: 'Local RAG', icon: Database },
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      role="tab"
                      aria-selected={activeTab === id}
                      onClick={() => setActiveTab(id)}
                      className={cn(
                        'flex cursor-pointer items-center justify-center gap-1.5 rounded-md border px-2 py-2 font-mono text-[11px] font-medium transition',
                        activeTab === id
                          ? 'border-[var(--accent-primary)] bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] font-semibold'
                          : 'border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inspector Body */}
              <div className="p-4 sm:p-5">
                {activeTab === 'difficulty' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="font-semibold text-[var(--accent-primary)]">
                        {sandboxPresets.difficulty.endpoint}
                      </span>
                      <span className="text-[var(--text-muted)]">Random Forest v2.0</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {sandboxPresets.difficulty.scenarios.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setDifficultyIdx(idx)}
                          className={cn(
                            'cursor-pointer rounded-md border px-2.5 py-1 font-mono text-[11px] transition',
                            difficultyIdx === idx
                              ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-semibold'
                              : 'border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          )}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] p-3.5 font-mono text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-[var(--text-muted)]">current_difficulty</span>
                        <span className="font-semibold text-[var(--text-primary)]">
                          {difficultyScenario.input.current_difficulty} / 5
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--text-muted)]">accuracy / recent</span>
                        <span className="font-semibold text-[var(--text-primary)]">
                          {difficultyScenario.input.accuracy} / {difficultyScenario.input.recent_accuracy}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--text-muted)]">response_time / hints</span>
                        <span className="font-semibold text-[var(--text-primary)]">
                          {difficultyScenario.input.response_time}s / {difficultyScenario.input.hints_used}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--text-muted)]">consecutive_successes</span>
                        <span className="font-semibold text-[var(--accent-teal)]">
                          {difficultyScenario.input.consecutive_successes}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-semibold text-[var(--text-secondary)]">
                          RECOMMENDED LEVEL
                        </span>
                        <span className="font-mono text-lg font-bold text-[var(--text-primary)]">
                          Level {difficultyScenario.output.next_difficulty} / 5
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-[var(--text-secondary)]">
                        <span>{difficultyScenario.output.decision}</span>
                        <span className="font-semibold text-[var(--accent-primary)]">
                          Conf {Math.round(difficultyScenario.output.confidence * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'voice' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="font-semibold text-[var(--accent-primary)]">
                        {sandboxPresets.voice.endpoint}
                      </span>
                      <span className="text-[var(--text-muted)]">Threshold ≥ 0.47</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {sandboxPresets.voice.samples.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setVoiceIdx(idx)}
                          className={cn(
                            'cursor-pointer rounded-md border px-2.5 py-1 font-mono text-[11px] transition',
                            voiceIdx === idx
                              ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-semibold'
                              : 'border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          )}
                        >
                          {s.language}
                        </button>
                      ))}
                    </div>

                    {/* Accessible Bullet Gauge with 0.47 Threshold Marker */}
                    <div className="space-y-2.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] p-3.5 font-mono text-[11px]">
                      <p className="text-[var(--text-muted)]">SraVaani ASR Transcript:</p>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        {voiceSample.utterance}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[var(--text-muted)]">Cosine Sim (Target ≥ 0.47):</span>
                        <span className="font-bold text-[var(--text-primary)]">
                          {voiceSample.similarity.toFixed(4)}
                        </span>
                      </div>

                      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-[var(--bg-subtle)]">
                        <div
                          className={cn(
                            'h-full rounded-full transition-all duration-300',
                            voiceSample.allowed
                              ? 'bg-[var(--accent-teal)]'
                              : 'bg-[var(--accent-amber)]'
                          )}
                          style={{ width: `${Math.round(voiceSample.similarity * 100)}%` }}
                        />
                        <div
                          className="absolute inset-y-0 w-0.5 bg-[var(--text-primary)]"
                          style={{ left: '47%' }}
                          title="0.47 safety threshold"
                        />
                      </div>
                    </div>

                    <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-3.5 font-mono text-[11px]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)]">
                          <ShieldCheck
                            className={cn(
                              'h-4 w-4',
                              voiceSample.allowed
                                ? 'text-[var(--accent-teal)]'
                                : 'text-[var(--accent-amber)]'
                            )}
                            aria-hidden="true"
                          />
                          {voiceSample.intent}
                        </span>
                        <span
                          className={cn(
                            'rounded px-1.5 py-0.5 text-[10px] font-bold',
                            voiceSample.allowed
                              ? 'bg-emerald-500/15 text-[var(--accent-teal)]'
                              : 'bg-amber-500/15 text-[var(--accent-amber)]'
                          )}
                        >
                          {voiceSample.allowed ? 'ALLOW-LISTED' : 'REJECTED'}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[var(--text-secondary)]">
                        action: {voiceSample.action ?? 'null (blocked below 0.47 gate)'}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'rag' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="font-semibold text-[var(--accent-primary)]">
                        {sandboxPresets.rag.endpoint}
                      </span>
                      <span className="text-[var(--text-muted)]">FAISS + Qwen2.5</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {sandboxPresets.rag.queries.map((q, idx) => (
                        <button
                          key={q.id}
                          onClick={() => setRagIdx(idx)}
                          className={cn(
                            'cursor-pointer rounded-md border px-2.5 py-1 font-mono text-[11px] transition',
                            ragIdx === idx
                              ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-semibold'
                              : 'border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          )}
                        >
                          Query #{idx + 1}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] p-3.5 font-mono text-[11px]">
                      <p className="text-[var(--text-muted)]">Query:</p>
                      <p className="font-medium text-[var(--text-primary)]">{ragQuery.query}</p>
                      <div className="flex items-center justify-between pt-1 text-[var(--text-secondary)]">
                        <span>FAISS Top-K: {ragQuery.retrievedChunks} chunks</span>
                        <span className="font-semibold text-[var(--accent-primary)]">
                          Cosine {ragQuery.topScore} • {ragQuery.latencyMs}ms
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-3.5 text-xs leading-relaxed text-[var(--text-primary)]">
                      <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--accent-teal)]">
                        Local Qwen2.5 Output (0% External Egress)
                      </span>
                      {ragQuery.response}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
