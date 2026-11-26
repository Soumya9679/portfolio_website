import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 max-w-3xl',
        align === 'center' && 'mx-auto text-center'
      )}
    >
      <div
        className={cn(
          'inline-flex items-center gap-2.5',
          align === 'center' && 'justify-center'
        )}
      >
        {index && (
          <span className="font-mono text-xs font-semibold text-[var(--accent-primary)]">
            §{index}
          </span>
        )}
        <span className="editorial-pill">{eyebrow}</span>
      </div>

      <h2 className="mt-3.5 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
