'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import Typewriter from '@/components/effects/Typewriter';
import { heroStats, profile, socialLinks } from '@/lib/portfolio-data';

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
} as const;

const floatingBadges = [
  { name: 'Next.js 15', position: '-top-4 -left-4', delay: 0 },
  { name: 'React 19', position: 'top-1/4 -right-6', delay: 0.5 },
  { name: 'TypeScript', position: 'bottom-10 -left-6', delay: 1 },
  { name: 'Tailwind CSS', position: '-bottom-4 right-4', delay: 1.5 },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Hero Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Availability Status Pill */}
            <div className="glass-pill mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Web Projects & Engineering Roles</span>
            </div>

            {/* Name Headline */}
            <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{profile.name}</span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="mt-4 mb-6">
              <Typewriter />
            </div>

            {/* Subtitle / Focus */}
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl font-normal">
              {profile.focus}
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#projects" className="button-primary w-full sm:w-auto">
                <span>View Selected Work</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={profile.resumeHref}
                download
                className="button-secondary w-full sm:w-auto"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Quick Links Bar */}
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2">
                Connect:
              </span>
              {socialLinks.map(({ href, label, kind }) => {
                const Icon = iconMap[kind];
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-md transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 hover:scale-105"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>

            {/* Hero Quick Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur-md">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl sm:text-3xl font-black text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Visual Showcase Side */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0"
          >
            <div className="relative w-72 sm:w-80 md:w-88 aspect-square">
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-violet-500/30 blur-2xl animate-pulse-glow" />

              {/* Profile Image Glass Container */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60 p-2 backdrop-blur-xl shadow-glow-emerald">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/profilePic.jpg"
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 320px, 360px"
                    className="object-cover object-[65%_35%] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
                  
                  {/* Location badge on photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/70 p-2.5 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{profile.location}</span>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                      <Globe className="h-3 w-3" />
                      <span>Remote</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Technology Badges */}
              {!shouldReduceMotion &&
                floatingBadges.map((badge) => (
                  <motion.div
                    key={badge.name}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: badge.delay,
                    }}
                    className={`absolute ${badge.position} hidden sm:flex items-center gap-1.5 rounded-xl border border-white/15 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-lg shadow-black/40`}
                  >
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{badge.name}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
