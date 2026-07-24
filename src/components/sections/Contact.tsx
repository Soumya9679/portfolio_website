'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Copy,
  Check,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
  Sparkles,
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

const inputBaseClass =
  'w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 backdrop-blur-md transition-all duration-200 focus:border-emerald-500/50 focus:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/20';

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
    setTimeout(() => setCopied(false), 2500);
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
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Contact Info & Links */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <SectionHeading
              eyebrow="Get In Touch"
              title="Let's build something remarkable together."
              subtitle="Have a project concept, question, or engineering role? Send a message or connect directly."
            />

            <div className="glass-card p-6 sm:p-8 border-emerald-500/20 bg-slate-900/80">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </p>
                  <p className="mt-1 font-mono text-lg font-bold text-white">
                    {profile.email}
                  </p>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 transition"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="mt-6 space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Social Channels
                </p>
                {socialLinks.map(({ href, label, username, kind }) => {
                  const Icon = iconMap[kind];

                  return (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-slate-950/40 p-3 text-slate-300 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold text-white">{label}</span>
                        <span className="block truncate text-[11px] text-slate-400">
                          {username}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Contact Form */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="glass-card p-6 sm:p-8 lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Send a Message
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              Tell me about your project or inquiry
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Fill out the form below. Messages are delivered directly to my inbox.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Your Name
                </label>
                <input
                  id="name"
                  {...register('name')}
                  placeholder="John Doe"
                  autoComplete="name"
                  className={cn(
                    inputBaseClass,
                    errors.name && 'border-red-500/50 focus:ring-red-500/20'
                  )}
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <XCircle className="h-3.5 w-3.5" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Email Address
                </label>
                <input
                  id="email"
                  {...register('email')}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={cn(
                    inputBaseClass,
                    errors.email && 'border-red-500/50 focus:ring-red-500/20'
                  )}
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                    <XCircle className="h-3.5 w-3.5" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  placeholder="Describe your project, ideas, or questions..."
                  rows={5}
                  className={cn(
                    inputBaseClass,
                    'resize-none',
                    errors.message && 'border-red-500/50 focus:ring-red-500/20'
                  )}
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
                className="button-primary w-full py-4 text-sm font-bold disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-3 text-xs sm:text-sm font-medium text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Your message was sent successfully! I will get back to you soon.</span>
                </motion.div>
              )}

              {/* Error Notification */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/15 px-4 py-3 text-xs sm:text-sm font-medium text-red-300"
                >
                  <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                  <span>Failed to send message. Please try again or reach out via direct email.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
