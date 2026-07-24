'use client';

import { useEffect, useRef } from 'react';

const roles = [
  'Data Scientist',
  'Python Developer',
  'Machine Learning Specialist',
  'Data Analyst',
];

export default function Typewriter() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        el.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2200);
          return;
        }
      } else {
        el.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          charIndex = 0;
        }
      }
      timeout = setTimeout(type, isDeleting ? 45 : 85);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="inline-flex items-center gap-2">
      <span
        ref={textRef}
        className="gradient-text font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
      />
      <span className="h-6 w-[3px] sm:h-7 md:h-8 rounded-full bg-emerald-400 animate-pulse" />
    </div>
  );
}
