'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Code2,
  Cpu,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Mic,
  ShieldCheck,
  Terminal,
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
      className="relative isolate flex min-h-[92vh] items-center pt-28 pb-16 sm:pt-32 lg:pb-20"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left Column: Engineering Positioning */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Status Strip */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] font-medium text-emerald-300">
                AI/ML &amp; Data Science
              </span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-[11px] text-slate-300">
                B.Tech IT @ STCET (8.79 CGPA)
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Architecting{' '}
              <span className="gradient-text">Production ML</span>,{' '}
              Speech AI &amp; Privacy-First RAG Systems.
            </h1>

            {/* Concise Bio */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              I&apos;m <span className="font-semibold text-white">{profile.name}</span> — an engineer focused on leakage-free predictive modeling, guardrail-enforced NLP pipelines, and low-latency FastAPI microservices.
            </p>

            {/* Primary Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#projects" className="button-primary">
                <span>Inspect Architecture &amp; Systems</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link href="/resume" className="button-secondary">
                <FileText className="h-4 w-4 text-emerald-400" />
                <span>Interactive CV</span>
              </Link>

              <a
                href={profile.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Direct Channels */}
            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
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
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
                    aria-label={label}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{label}</span>
                  </a>
                );
              })}
            </div>

            {/* Verified Benchmark KPIs */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="panel-surface rounded-xl p-3.5 transition hover:border-emerald-500/35"
                >
                  <p className="font-display text-2xl font-bold text-white">{metric.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-emerald-300">{metric.label}</p>
                  <p className="mt-1 font-mono text-[10px] leading-snug text-slate-400">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Engineer Profile + Live ML Pipeline Inspector */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="panel-surface overflow-hidden rounded-2xl border-white/12">
              {/* Top Profile Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] p-4 sm:p-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-emerald-500/35 bg-slate-900">
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
                      <h2 className="font-display text-base font-bold text-white">
                        {profile.name}
                      </h2>
                      <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                        SIH LEAD
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{profile.role}</p>
                    <p className="mt-0.5 flex items-center gap-1 font-mono text-[11px] text-slate-500">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      Kolkata, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Pipeline Inspector Tabs */}
              <div className="border-b border-white/10 bg-black/25 px-4 py-2.5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    <Terminal className="h-3 w-3 text-emerald-400" />
                    Interactive Model Inspector
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400">LIVE PRESETS</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'difficulty' as const, label: 'Difficulty ML', icon: Cpu },
                    { id: 'voice' as const, label: 'Voice Guard', icon: Mic },
                    { id: 'rag' as const, label: 'Local RAG', icon: Database },
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={cn(
                        'flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 font-mono text-[11px] font-medium transition',
                        activeTab === id
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/35'
                          : 'border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white'
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
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
                      <span className="text-cyan-300">{sandboxPresets.difficulty.endpoint}</span>
                      <span className="text-slate-500">Random Forest v2.0</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {sandboxPresets.difficulty.scenarios.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setDifficultyIdx(idx)}
                          className={cn(
                            'rounded-md px-2.5 py-1 font-mono text-[11px] transition',
                            difficultyIdx === idx
                              ? 'bg-white/15 text-white border border-white/25'
                              : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-slate-200'
                          )}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#05070b] p-3.5 font-mono text-[11px] space-y-2">
                      <div className="flex justify-between text-slate-400">
                        <span>current_difficulty:</span>
                        <span className="text-white">{difficultyScenario.input.current_difficulty} / 5</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>accuracy / recent:</span>
                        <span className="text-white">
                          {difficultyScenario.input.accuracy} / {difficultyScenario.input.recent_accuracy}
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>response_time / hints:</span>
                        <span className="text-white">
                          {difficultyScenario.input.response_time}s / {difficultyScenario.input.hints_used}
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>consecutive_streak:</span>
                        <span className="text-emerald-300">
                          {difficultyScenario.input.consecutive_successes}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.07] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                          <Activity className="h-3.5 w-3.5" />
                          Predicted Level
                        </span>
                        <span className="font-display text-xl font-bold text-white">
                          Level {difficultyScenario.output.next_difficulty} / 5
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-slate-300">
                        <span>{difficultyScenario.output.decision}</span>
                        <span>Conf: {Math.round(difficultyScenario.output.confidence * 100)}%</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'voice' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-cyan-300">{sandboxPresets.voice.endpoint}</span>
                      <span className="text-slate-500">Gate ≥ 0.47</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {sandboxPresets.voice.samples.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setVoiceIdx(idx)}
                          className={cn(
                            'rounded-md px-2.5 py-1 font-mono text-[11px] transition',
                            voiceIdx === idx
                              ? 'bg-white/15 text-white border border-white/25'
                              : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-slate-200'
                          )}
                        >
                          {s.language}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#05070b] p-3.5 font-mono text-[11px] space-y-2">
                      <p className="text-slate-500">SraVaani ASR Transcript:</p>
                      <p className="text-white text-xs">{voiceSample.utterance}</p>
                      <div className="pt-1 flex items-center justify-between text-slate-400">
                        <span>Cosine Similarity:</span>
                        <span
                          className={
                            voiceSample.allowed ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'
                          }
                        >
                          {voiceSample.similarity.toFixed(4)}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className={cn(
                            'h-full rounded-full transition-all duration-300',
                            voiceSample.allowed ? 'bg-emerald-400' : 'bg-amber-400'
                          )}
                          style={{ width: `${Math.round(voiceSample.similarity * 100)}%` }}
                        />
                      </div>
                    </div>

                    <div
                      className={cn(
                        'rounded-xl border p-3.5 font-mono text-[11px]',
                        voiceSample.allowed
                          ? 'border-emerald-500/25 bg-emerald-500/[0.07]'
                          : 'border-amber-500/30 bg-amber-500/[0.08]'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-200">
                          <ShieldCheck
                            className={cn(
                              'h-4 w-4',
                              voiceSample.allowed ? 'text-emerald-400' : 'text-amber-400'
                            )}
                          />
                          Intent: <strong>{voiceSample.intent}</strong>
                        </span>
                        <span
                          className={
                            voiceSample.allowed ? 'text-emerald-300' : 'text-amber-300'
                          }
                        >
                          allowed: {String(voiceSample.allowed)}
                        </span>
                      </div>
                      <p className="mt-1.5 text-slate-400">
                        action: {voiceSample.action ?? 'null (blocked by 0.47 guardrail)'}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'rag' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-cyan-300">{sandboxPresets.rag.endpoint}</span>
                      <span className="text-slate-500">FAISS + Qwen2.5</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {sandboxPresets.rag.queries.map((q, idx) => (
                        <button
                          key={q.id}
                          onClick={() => setRagIdx(idx)}
                          className={cn(
                            'rounded-md px-2.5 py-1 font-mono text-[11px] transition',
                            ragIdx === idx
                              ? 'bg-white/15 text-white border border-white/25'
                              : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-slate-200'
                          )}
                        >
                          Query #{idx + 1}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#05070b] p-3.5 font-mono text-[11px] space-y-2">
                      <p className="text-slate-500">Prompt:</p>
                      <p className="text-white">{ragQuery.query}</p>
                      <div className="flex items-center justify-between pt-1 text-slate-400">
                        <span>FAISS Top-K: {ragQuery.retrievedChunks} chunks</span>
                        <span className="text-cyan-300">
                          Score: {ragQuery.topScore} • {ragQuery.latencyMs}ms
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-cyan-500/25 bg-cyan-500/[0.07] p-3.5 text-xs leading-relaxed text-slate-200">
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-cyan-300 mb-1">
                        Grounded Local Output (0% External Egress)
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
