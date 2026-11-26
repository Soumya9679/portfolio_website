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
      <div className="relative h-full w-full overflow-hidden bg-[#05070b]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-[#090d14]/20 to-transparent" />
        {project.endpoint && (
          <div className="absolute top-3 left-3 rounded-lg border border-white/15 bg-[#05070b]/85 px-2.5 py-1 font-mono text-[10px] text-emerald-300 backdrop-blur-md">
            {project.endpoint}
          </div>
        )}
      </div>
    );
  }

  if (project.visualType === 'difficulty') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#060910] p-5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
            POST /predict • RF v2.0
          </span>
          <span className="text-slate-400">5-Fold GroupKFold</span>
        </div>

        <div className="my-auto space-y-3 py-3">
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((lvl) => (
              <div
                key={lvl}
                className={
                  lvl === 4
                    ? 'rounded-lg border border-emerald-400/50 bg-emerald-500/20 py-2 text-center font-mono text-xs font-bold text-emerald-300'
                    : 'rounded-lg border border-white/10 bg-white/[0.03] py-2 text-center font-mono text-xs text-slate-400'
                }
              >
                L{lvl}
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-[11px] space-y-1.5">
            <div className="flex justify-between text-slate-400">
              <span>Adaptive Band</span>
              <span className="text-cyan-300">0.549 — 0.632</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[89%] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Holdout Acc: 89.1%</span>
              <span>MAE: 0.109</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
          <Activity className="h-3.5 w-3.5 text-emerald-400" />
          <span>12 temporal behavioral features • zero subject leakage</span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'voice') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#060910] p-5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-cyan-300">
            POST /voice/process
          </span>
          <span className="text-emerald-300">Threshold ≥ 0.47</span>
        </div>

        <div className="my-auto space-y-2.5 py-3 font-mono text-[11px]">
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
            <span className="flex items-center gap-2 text-slate-300">
              <Mic className="h-3.5 w-3.5 text-cyan-400" />
              SraVaani-1.0 ASR
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-emerald-300">MiniLM-L12-v2</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-2">
            <span className="text-slate-200">START_MEMORY_GAME</span>
            <span className="font-bold text-emerald-300">sim 0.9377 ✓</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2">
            <span className="text-slate-300">OOD Utterance → UNKNOWN</span>
            <span className="font-bold text-amber-300">sim 0.2140 ✕</span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>15 intents • strict allow-list action registry</span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'summarizer') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#060910] p-5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="rounded border border-white/15 bg-white/[0.05] px-2 py-0.5 text-slate-200">
            CNN/DailyMail • 1,000 Docs
          </span>
          <span className="text-cyan-300">Extractive + Neural Eval</span>
        </div>

        <div className="my-auto space-y-2.5 py-3 font-mono text-[11px]">
          {[
            { name: 'ROUGE-1 / ROUGE-L', label: 'Lexical Overlap', pct: '82%' },
            { name: 'BERTScore (DistilBERT)', label: 'Contextual F1', pct: '89%' },
            { name: 'BLEURT-base-128', label: 'Learned Fidelity', pct: '85%' },
          ].map((m) => (
            <div key={m.name} className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-200">{m.name}</span>
                <span className="text-slate-400">{m.label}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  style={{ width: m.pct }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
          <BarChart3 className="h-3.5 w-3.5 text-cyan-400" />
          <span>Custom tokenizer, lemmatizer &amp; semantic consistency check</span>
        </div>
      </div>
    );
  }

  if (project.visualType === 'finance') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#060910] p-5">
        <div className="flex items-center justify-between font-mono text-[10px]">
          <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-amber-300">
            SREY 2k26 • 36h Finalist
          </span>
          <span className="text-emerald-300">Isolation Forest + RAG</span>
        </div>

        <div className="my-auto space-y-2.5 py-3 font-mono text-[11px]">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
              <span className="block text-[9px] text-slate-500">PARSER</span>
              <span className="text-white">pdfplumber</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
              <span className="block text-[9px] text-slate-500">ANOMALIES</span>
              <span className="text-amber-300">IsoForest</span>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
              <span className="block text-[9px] text-slate-500">VECTOR Q&amp;A</span>
              <span className="text-cyan-300">FAISS</span>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 text-[10px] text-slate-300">
            &quot;How much did I spend on UPI &amp; recurring SIPs this quarter?&quot;
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
          <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
          <span>Indian bank PDF/CSV intelligence + Recharts analytics</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#060910] p-5">
      <div className="flex items-center justify-between font-mono text-[10px]">
        <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
          {project.endpoint ?? 'POST /predict'}
        </span>
        <span className="text-slate-400">Render Cloud</span>
      </div>

      <div className="my-auto space-y-2.5 py-3 font-mono text-[11px]">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <div className="text-slate-400">Pipeline:</div>
          <div className="mt-1 text-white">StandardScaler → LogisticRegression</div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-emerald-300">
          <span>Pydantic Schema Validated</span>
          <Lock className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="font-mono text-[10px] text-slate-400">
        Monochrome assessment UI + FastAPI REST inference
      </div>
    </div>
  );
}
