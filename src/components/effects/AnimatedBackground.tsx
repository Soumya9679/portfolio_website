'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base Space Background */}
      <div className="absolute inset-0 bg-[#05070d]" />

      {/* Grid Mesh Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial Gradient Glow Orbs */}
      <div className="absolute -top-[15%] left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-500/15 blur-[120px] animate-float-slow" />
      <div className="absolute top-[35%] right-[5%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px] animate-float-delayed" />
      <div className="absolute top-[65%] left-[15%] h-[550px] w-[550px] rounded-full bg-violet-600/10 blur-[130px] animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[20%] h-[450px] w-[450px] rounded-full bg-teal-500/15 blur-[120px] animate-float-delayed" />

      {/* Subtle Vignette Edge */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070d]/30 to-[#05070d]" />
    </div>
  );
}
