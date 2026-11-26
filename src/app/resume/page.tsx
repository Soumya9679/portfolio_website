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

const cvProjects = projects.filter((p) => p.tier === 'cv-core');

export default function ResumePage() {
  return (
    <div className="section-shell pt-28 pb-20 print:pt-4 print:pb-4">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="button-secondary px-4 py-2 text-xs">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <button onClick={() => window.print()} className="button-secondary px-4 py-2 text-xs">
            <Printer className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
            <span>Print / Save PDF</span>
          </button>
          <a href={profile.resumeHref} download className="button-primary px-4 py-2 text-xs">
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      <article className="mx-auto max-w-4xl rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 shadow-editorial sm:p-10 print:border-0 print:p-0 print:shadow-none">
        <header className="border-b border-[var(--border-hairline)] pb-6 print:border-slate-300">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            {profile.name.toUpperCase()}
          </h1>
          <p className="mt-1.5 font-mono text-xs font-semibold tracking-wider text-[var(--accent-primary)] print:text-slate-700">
            DATA SCIENCE • MACHINE LEARNING • AI ENGINEERING
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
              {profile.phone}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:underline">
              <Mail className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              github.com/Soumya9679
              <ExternalLink className="no-print h-3 w-3" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              linkedin.com/in/soumyadip-maity-996686353
              <ExternalLink className="no-print h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)]">
            Professional Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            {profile.summary}
          </p>
        </section>

        <section className="mt-6 border-t border-[var(--border-hairline)] pt-5">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)]">
            Technical Skills
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">{cat.title}: </span>
                <span>{cat.items.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 border-t border-[var(--border-hairline)] pt-5">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)]">
            Projects
          </h2>
          <div className="mt-4 space-y-5">
            {cvProjects.map((proj) => (
              <div key={proj.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {proj.title}{' '}
                    <span className="font-mono text-xs font-normal text-[var(--text-muted)]">
                      | {proj.category}
                    </span>
                  </h3>
                  <a
                    href={proj.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[var(--accent-primary)] hover:underline"
                  >
                    {proj.githubHref.replace('https://', '')}
                  </a>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--text-secondary)]">
                  {proj.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 border-t border-[var(--border-hairline)] pt-5">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)]">
            Achievements &amp; Technical Leadership
          </h2>
          <ul className="mt-3 space-y-2.5 text-sm text-[var(--text-secondary)]">
            {leadershipItems.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-[var(--text-primary)]">{item.title}: </span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 border-t border-[var(--border-hairline)] pt-5">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)]">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {educationItems.map((edu) => (
              <div key={edu.degree} className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">
                    {edu.degree}{' '}
                    <span className="font-mono text-xs font-semibold text-[var(--accent-primary)]">
                      | {edu.score}
                    </span>
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{edu.institution}</p>
                </div>
                <span className="font-mono text-xs text-[var(--text-muted)]">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
