'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Award, GraduationCap, Trophy, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { educationItems, leadershipItems } from '@/lib/portfolio-data';

export default function Leadership() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="leadership" className="section-y relative">
      <div className="section-shell">
        <SectionHeading
          index="03"
          eyebrow="Experience & Education"
          title="Hackathon leadership & academic foundation."
          subtitle="Leading engineering teams from problem framing to live ML microservices under national and 36-hour hackathon constraints."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: Hackathon & Technical Leadership */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
              <Trophy className="h-4 w-4" />
              <span>Hackathons &amp; Technical Leadership</span>
            </div>

            {leadershipItems.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="glass-pill">{item.badge}</span>
                  <span className="font-mono text-xs text-slate-400">{item.period}</span>
                </div>

                <h3 className="mt-3.5 font-display text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
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

          {/* Right: Education & Academic Record */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-300">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </div>

            {educationItems.map((edu, idx) => (
              <motion.article
                key={edu.degree}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="panel-surface rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-cyan-300">
                    {edu.score}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{edu.period}</span>
                </div>

                <h3 className="mt-3.5 font-display text-lg font-bold text-white">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-slate-300">{edu.institution}</p>

                <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  {edu.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}

            {/* Leadership Summary Callout */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Users className="h-4 w-4 text-emerald-400" />
                <span>Team HexaCore &amp; Team Coffee &amp; Code</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Owned system architecture, ML modeling, evaluation, and FastAPI deployment across 4+ competitive hackathon deliveries — turning research models into working end-to-end products.
              </p>
              <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-emerald-300">
                <Award className="h-3.5 w-3.5" />
                <span>Certified Rapid AI/Web Prototyping • GDGoC STCET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
