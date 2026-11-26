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
          <span className="font-mono text-xs font-semibold text-emerald-400/80">
            {index}
          </span>
        )}
        <span className="glass-pill">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-sm leading-relaxed text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
