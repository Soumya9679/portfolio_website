'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Award, GraduationCap, Trophy, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { educationItems, leadershipItems } from '@/lib/portfolio-data';

export default function Leadership() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="leadership" className="section-y relative border-b border-[var(--border-hairline)]">
      <div className="section-shell">
        <SectionHeading
          index="03"
          eyebrow="Leadership & Education"
          title="Hackathon execution & academic foundation."
          subtitle="Leading AI/ML teams in national and 36-hour engineering sprints alongside B.Tech IT studies."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: Hackathon & Technical Leadership */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
              <Trophy className="h-4 w-4" aria-hidden="true" />
              <span>Achievements &amp; Technical Leadership</span>
            </div>

            {leadershipItems.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="editorial-card p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="editorial-pill font-semibold text-[var(--accent-primary)]">
                    {item.badge}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">{item.period}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right: Education */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-teal)]">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              <span>Education</span>
            </div>

            {educationItems.map((edu, idx) => (
              <motion.article
                key={edu.degree}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="editorial-card p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-md border border-[var(--border-hairline)] bg-[var(--accent-primary-soft)] px-2.5 py-1 font-mono text-[11px] font-bold text-[var(--accent-primary)]">
                    {edu.score}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">{edu.period}</span>
                </div>

                <h3 className="mt-3.5 text-base font-bold text-[var(--text-primary)] sm:text-lg">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{edu.institution}</p>

                <ul className="mt-4 space-y-2 border-t border-[var(--border-hairline)] pt-4">
                  {edu.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-teal)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}

            <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)]">
                <Users className="h-4 w-4 text-[var(--accent-primary)]" aria-hidden="true" />
                <span>Team HexaCore &amp; Team Coffee &amp; Code</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                Architected predictive ML, speech intent routing, and RAG backends end to end across Smart India Hackathon, GDGoC TechSprint, and SREY 2k26.
              </p>
              <div className="mt-3 flex items-center gap-2 font-mono text-[11px] font-medium text-[var(--accent-teal)]">
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Official Certification • GDGoC TechSprint 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
