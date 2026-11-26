'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base Obsidian Surface */}
      <div className="absolute inset-0 bg-[#05070b]" />

      {/* Precision Coordinate Dot Matrix */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Subtle Hairline Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '112px 112px',
        }}
      />

      {/* Top Focal Atmospheric Spotlight */}
      <div
        className="absolute -top-48 left-1/2 h-[540px] w-[960px] -translate-x-1/2 rounded-full opacity-35 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(34, 211, 238, 0.1) 45%, transparent 75%)',
        }}
      />

      {/* Secondary Lower Depth Ambient Glow */}
      <div
        className="absolute bottom-[-18%] right-[-8%] h-[480px] w-[620px] rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(15, 23, 42, 0) 70%)',
        }}
      />

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070b]" />
    </div>
  );
}
