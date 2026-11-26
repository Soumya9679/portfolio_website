'use client';

import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, Mail, MapPin, Phone, Printer } from 'lucide-react';
import {
  educationItems,
  leadershipItems,
  profile,
  projects,
  skillCategories,
} from '@/lib/portfolio-data';

const cvProjects = projects.filter((p) => p.tier === 'flagship');

export default function ResumePage() {
  return (
    <div className="section-shell pt-28 pb-20 print:pt-4 print:pb-4">
      {/* Action Bar */}
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="button-secondary px-4 py-2 text-xs">
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => window.print()}
            className="button-secondary px-4 py-2 text-xs"
          >
            <Printer className="h-3.5 w-3.5 text-emerald-400" />
            <span>Print / Save PDF</span>
          </button>
          <a href={profile.resumeHref} download className="button-primary px-4 py-2 text-xs">
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Document Sheet */}
      <article className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-[#0a0f18]/95 p-6 shadow-panel sm:p-10 print:border-0 print:bg-white print:p-0 print:text-slate-900 print:shadow-none">
        {/* Header */}
        <header className="border-b border-white/15 pb-6 print:border-slate-300">
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl print:text-slate-900">
            {profile.name.toUpperCase()}
          </h1>
          <p className="mt-1.5 font-mono text-xs font-semibold tracking-wider text-emerald-400 print:text-slate-700">
            DATA SCIENCE • MACHINE LEARNING • AI ENGINEERING
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-slate-300 print:text-slate-700">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-emerald-400 print:text-slate-700" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-emerald-400 print:text-slate-700" />
              {profile.phone}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-emerald-300">
              <Mail className="h-3.5 w-3.5 text-emerald-400 print:text-slate-700" />
              {profile.email}
            </a>
            <a
              href={profile.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-emerald-300"
            >
              github.com/Soumya9679
              <ExternalLink className="h-3 w-3 no-print" />
            </a>
            <a
              href={profile.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-emerald-300"
            >
              linkedin.com/in/soumyadip-maity-996686353
              <ExternalLink className="h-3 w-3 no-print" />
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-slate-900">
            Professional Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300 print:text-slate-700">
            B.Tech IT undergraduate (8.79 CGPA) specializing in Data Science, ML, and AI. Experienced in Python ML pipelines, NLP, FAISS, and RAG applications, with expertise in model evaluation and FastAPI deployment.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mt-6 border-t border-white/10 pt-5 print:border-slate-300">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-slate-900">
            Technical Skills
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="text-slate-300 print:text-slate-700">
                <span className="font-semibold text-white print:text-slate-900">
                  {cat.title}:{' '}
                </span>
                <span>{cat.items.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Flagship Projects */}
        <section className="mt-6 border-t border-white/10 pt-5 print:border-slate-300">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-slate-900">
            Key Projects
          </h2>
          <div className="mt-4 space-y-5">
            {cvProjects.map((proj) => (
              <div key={proj.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-white print:text-slate-900">
                    {proj.title}{' '}
                    <span className="font-mono text-xs font-normal text-slate-400 print:text-slate-600">
                      | {proj.category}
                    </span>
                  </h3>
                  <a
                    href={proj.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-emerald-300 hover:underline print:text-slate-700"
                  >
                    {proj.githubHref.replace('https://', '')}
                  </a>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300 print:text-slate-700">
                  {proj.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements & Technical Leadership */}
        <section className="mt-6 border-t border-white/10 pt-5 print:border-slate-300">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-slate-900">
            Achievements &amp; Technical Leadership
          </h2>
          <ul className="mt-3 space-y-2.5 text-sm text-slate-300 print:text-slate-700">
            {leadershipItems.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-white print:text-slate-900">
                  {item.title}:{' '}
                </span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="mt-6 border-t border-white/10 pt-5 print:border-slate-300">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 print:text-slate-900">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {educationItems.map((edu) => (
              <div key={edu.degree} className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-white print:text-slate-900">
                    {edu.degree}{' '}
                    <span className="font-mono text-xs font-medium text-emerald-300 print:text-slate-700">
                      | {edu.score}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 print:text-slate-600">{edu.institution}</p>
                </div>
                <span className="font-mono text-xs text-slate-400 print:text-slate-600">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
