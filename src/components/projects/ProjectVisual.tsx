'use client';

import Image from 'next/image';
import { Activity, ArrowRight, BarChart3, Lock, Mic, ShieldCheck, TrendingUp } from 'lucide-react';
import type { Project } from '@/lib/portfolio-data';

interface ProjectVisualProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectVisual({ project, priority = false }: ProjectVisualProps) {
  if (project.visualType === 'screenshot' && project.image) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[var(--bg-subtle)]">
        <Image
          src={project.image}
          alt={`${project.title} workspace preview`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        {project.endpoint && (
          <div className="absolute top-3 left-3 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)]/95 px-2.5 py-1 font-mono text-[10px] font-semibold text-[var(--accent-primary)] shadow-sm">
            {project.endpoint}
          </div>
        )}
      </div>
    );
  }

  if (project.visualType === 'difficulty') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between bg-[var(--bg-subtle)] p-5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="rounded border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2 py-0.5 font-semibold text-[var(--accent-primary)]">
            POST /predict • RF v2.0
          </span>
          <span className="font-medium text-[var(--text-secondary)]">5-Fold GroupKFold</span>
        </div>

        <div className="my-auto space-y-3 py-3">
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((lvl) => (
              <div
                key={lvl}
                className={
                  lvl === 4
                    ? 'rounded-md border border-[var(--accent-primary)] bg-[var(--accent-primary-soft)] py-2 text-center font-mono text-xs font-bold text-[var(--accent-primary)]'
                    : 'rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] py-2 text-center font-mono text-xs text-[var(--text-muted)]'
                }
              >
                L{lvl}
              </div>
            ))}
          </div>

          <div className="space-y-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-3 font-mono text-[11px]">
            <div className="flex justify-between text-[var(--text-secondary)]">
              <span>Adaptive Threshold Band</span>
              <span className="font-semibold text-[var(--accent-primary)]">0.549 — 0.632</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--bg-subtle)]">
              <div className="h-full w-[89%] rounded-full bg-[var(--accent-teal)]" />
            </div>
            <div className="flex justify-between text-[10px] text-[var(--text-muted)]">
              <span>Holdout Acc: 89.1%</span>
              <span>MAE: 0.109</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-secondary)]">
          <Activity className="h-3.5 w-3.5 text-[var(--accent-teal)]" aria-hidden="true" />
          <span>12 temporal features • zero subject leakage</span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'voice') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between bg-[var(--bg-subtle)] p-5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="rounded border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2 py-0.5 font-semibold text-[var(--accent-primary)]">
            POST /voice/process
          </span>
          <span className="font-semibold text-[var(--accent-teal)]">Gate ≥ 0.47</span>
        </div>

        <div className="my-auto space-y-2 py-3 font-mono text-[11px]">
          <div className="flex items-center justify-between rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-2">
            <span className="flex items-center gap-2 text-[var(--text-primary)]">
              <Mic className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
              SraVaani-1.0 ASR
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-[var(--text-muted)]" aria-hidden="true" />
            <span className="font-semibold text-[var(--accent-teal)]">MiniLM-L12-v2</span>
          </div>

          <div className="flex items-center justify-between rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-2">
            <span className="text-[var(--text-primary)]">START_MEMORY_GAME</span>
            <span className="font-bold text-[var(--accent-teal)]">0.9377 ALLOW</span>
          </div>

          <div className="flex items-center justify-between rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-2">
            <span className="text-[var(--text-secondary)]">OOD → UNKNOWN</span>
            <span className="font-bold text-[var(--accent-amber)]">0.2140 BLOCK</span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-secondary)]">
          <ShieldCheck className="h-3.5 w-3.5 text-[var(--accent-teal)]" aria-hidden="true" />
          <span>15 intents • allow-listed action registry</span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'summarizer') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between bg-[var(--bg-subtle)] p-5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="rounded border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2 py-0.5 font-semibold text-[var(--text-primary)]">
            CNN/DailyMail • 1,000 Docs
          </span>
          <span className="font-semibold text-[var(--accent-primary)]">Lexical + Neural Eval</span>
        </div>

        <div className="my-auto space-y-2.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-3.5 font-mono text-[11px]">
          {[
            { name: 'ROUGE-1 / ROUGE-L', label: 'Lexical Overlap', pct: '82%' },
            { name: 'BERTScore (DistilBERT)', label: 'Contextual F1', pct: '89%' },
            { name: 'BLEURT-base-128', label: 'Learned Fidelity', pct: '85%' },
          ].map((m) => (
            <div key={m.name} className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="font-semibold text-[var(--text-primary)]">{m.name}</span>
                <span className="text-[var(--text-muted)]">{m.label}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-subtle)]">
                <div
                  className="h-full rounded-full bg-[var(--accent-primary)]"
                  style={{ width: m.pct }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-secondary)]">
          <BarChart3 className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
          <span>Custom tokenization, lemmatization &amp; coherence check</span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'finance') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between bg-[var(--bg-subtle)] p-5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="rounded border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2 py-0.5 font-semibold text-[var(--accent-amber)]">
            SREY 2k26 Finalist
          </span>
          <span className="font-semibold text-[var(--accent-teal)]">Isolation Forest + RAG</span>
        </div>

        <div className="my-auto space-y-2.5 py-3 font-mono text-[11px]">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2.5">
              <span className="block text-[9px] text-[var(--text-muted)]">EXTRACT</span>
              <span className="font-semibold text-[var(--text-primary)]">pdfplumber</span>
            </div>
            <div className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2.5">
              <span className="block text-[9px] text-[var(--text-muted)]">OUTLIERS</span>
              <span className="font-semibold text-[var(--accent-amber)]">IsoForest</span>
            </div>
            <div className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2.5">
              <span className="block text-[9px] text-[var(--text-muted)]">RETRIEVAL</span>
              <span className="font-semibold text-[var(--accent-primary)]">FAISS</span>
            </div>
          </div>

          <div className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2.5 text-[10px] text-[var(--text-secondary)]">
            &quot;Detect anomalous UPI spikes &amp; recurring EMI/SIP mandates.&quot;
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-secondary)]">
          <TrendingUp className="h-3.5 w-3.5 text-[var(--accent-teal)]" aria-hidden="true" />
          <span>Bank PDF/CSV intelligence + FastAPI RAG</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-[var(--bg-subtle)] p-5">
      <div className="flex items-center justify-between font-mono text-[10px]">
        <span className="rounded border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2 py-0.5 font-semibold text-[var(--accent-primary)]">
          {project.endpoint ?? 'POST /predict'}
        </span>
        <span className="text-[var(--text-muted)]">Render Deployment</span>
      </div>

      <div className="my-auto space-y-2.5 py-3 font-mono text-[11px]">
        <div className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-3">
          <div className="text-[var(--text-muted)]">Scikit-Learn Pipeline:</div>
          <div className="mt-1 font-semibold text-[var(--text-primary)]">
            StandardScaler → LogisticRegression
          </div>
        </div>
        <div className="flex items-center justify-between rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-2 font-semibold text-[var(--accent-teal)]">
          <span>Pydantic Input Validation</span>
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
        </div>
      </div>

      <div className="font-mono text-[10px] text-[var(--text-secondary)]">
        FastAPI inference endpoint + assessment history log
      </div>
    </div>
  );
}
