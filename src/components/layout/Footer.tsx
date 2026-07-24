import { Code2, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { profile, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
} as const;

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05070d]/90 backdrop-blur-xl">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-white inline-flex items-center gap-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white font-mono text-xs font-bold">
                SM
              </span>
              <span>
                {profile.name} <span className="text-emerald-400">.dev</span>
              </span>
            </a>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              &copy; {new Date().getFullYear()} {profile.name}. Crafted with Next.js 15, React 19 & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ href, label, kind }) => {
              const Icon = iconMap[kind];

              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white hover:scale-105"
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
