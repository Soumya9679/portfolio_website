import Link from 'next/link';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { navItems, profile, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
} as const;

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05070b]/95 backdrop-blur-xl">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-base font-bold tracking-tight text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-emerald-500/35 bg-emerald-500/15 font-mono text-xs font-bold text-emerald-300">
                {profile.shortName}
              </span>
              <span>
                {profile.name} <span className="font-mono text-xs text-emerald-400">/ml</span>
              </span>
            </Link>
            <p className="mt-2 font-mono text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {profile.name} • Kolkata, India • Next.js 15 &amp; TypeScript
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${item.href}`}
                className="transition hover:text-emerald-300"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/resume" className="font-mono text-emerald-300 hover:text-emerald-200">
              CV
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label, kind }) => {
              const Icon = iconMap[kind];
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-emerald-500/40 hover:text-emerald-300"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
