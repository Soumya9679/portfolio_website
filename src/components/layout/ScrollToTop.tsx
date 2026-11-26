'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'no-print fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-editorial transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
