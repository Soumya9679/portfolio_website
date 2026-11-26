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
    <footer className="relative z-10 border-t border-[var(--border-hairline)] bg-[var(--bg-surface)]">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-tight text-[var(--text-primary)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-strong)] bg-[var(--bg-page)] font-mono text-xs font-bold text-[var(--accent-primary)]">
                {profile.shortName}
              </span>
              <span>{profile.name}</span>
            </Link>
            <p className="mt-2 font-mono text-xs text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()} {profile.name} • Data Science, ML &amp; AI Engineering • Kolkata, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--text-secondary)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${item.href}`}
                className="transition hover:text-[var(--accent-primary)]"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/resume" className="font-mono font-semibold text-[var(--accent-primary)]">
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
