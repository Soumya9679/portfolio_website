import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 max-w-3xl',
        align === 'center' && 'mx-auto text-center'
      )}
    >
      <span className="glass-pill">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
