'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  Terminal,
  XCircle,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile, socialLinks } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
} as const;

const inputClass =
  'w-full rounded-xl border border-white/10 bg-[#05070b]/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20';

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);

      await fetch(
        'https://script.google.com/macros/s/AKfycbwYxbMEKkY1AzfMSFc7_PjWhOF0ouyQCVuWmyQNqM0IVijTyu56YPxPouzpcYQ56k8f/exec',
        { method: 'POST', body: formData, mode: 'no-cors' }
      );

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="section-y relative">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Direct Engineering Channels */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5"
          >
            <SectionHeading
              index="05"
              eyebrow="Direct Contact"
              title="Open to AI/ML roles, research collaborations & systems builds."
              subtitle="Reach out directly via email or send a structured inquiry using the form."
            />

            <div className="panel-surface rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    Direct Email
                  </span>
                  <p className="mt-1 truncate font-mono text-sm font-semibold text-emerald-300 sm:text-base">
                    {profile.email}
                  </p>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-300"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 border-b border-white/10 pb-4 font-mono text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>{profile.location}</span>
              </div>

              <div className="mt-5 space-y-2.5">
                {socialLinks.map(({ href, label, username, kind }) => {
                  const Icon = iconMap[kind];
                  return (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#05070b]/70 p-3 transition hover:border-emerald-500/35 hover:bg-white/[0.03]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold text-white">{label}</span>
                        <span className="block truncate font-mono text-[11px] text-slate-400">
                          {username}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-emerald-400" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="panel-surface rounded-2xl p-6 sm:p-8 lg:col-span-7"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
              <Terminal className="h-3.5 w-3.5" />
              <span>Dispatch Message</span>
            </div>

            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              Start a conversation
            </h3>
            <p className="mt-1.5 text-xs text-slate-400 sm:text-sm">
              Share role details, ML/AI project requirements, or collaboration ideas.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] text-slate-300">
                    NAME
                  </label>
                  <input
                    id="name"
                    {...register('name')}
                    placeholder="Your name"
                    autoComplete="name"
                    className={cn(inputClass, errors.name && 'border-red-500/50')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <XCircle className="h-3.5 w-3.5" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] text-slate-300">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    {...register('email')}
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    className={cn(inputClass, errors.email && 'border-red-500/50')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <XCircle className="h-3.5 w-3.5" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] text-slate-300">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tell me about the role, system problem, or timeline..."
                  rows={5}
                  className={cn(inputClass, 'resize-none', errors.message && 'border-red-500/50')}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <XCircle className="h-3.5 w-3.5" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full py-3.5 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-300 sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Message delivered successfully. I will respond shortly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-300 sm:text-sm">
                  <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                  <span>Delivery failed. Please email {profile.email} directly.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
