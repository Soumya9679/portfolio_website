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
  'w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary-soft)]';

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
          {/* Left: Direct Channels */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-5"
          >
            <SectionHeading
              index="05"
              eyebrow="Contact"
              title="Open to Data Science, ML & AI Engineering opportunities."
              subtitle="Reach out directly via email or dispatch a message using the form."
            />

            <div className="editorial-card p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-[var(--border-hairline)] pb-4">
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    Direct Email
                  </span>
                  <p className="mt-1 truncate font-mono text-sm font-semibold text-[var(--accent-primary)] sm:text-base">
                    {profile.email}
                  </p>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] text-[var(--text-secondary)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-[var(--accent-teal)]" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 border-b border-[var(--border-hairline)] pb-4 font-mono text-xs text-[var(--text-secondary)]">
                <MapPin className="h-3.5 w-3.5 text-[var(--accent-primary)]" aria-hidden="true" />
                <span>{profile.location}</span>
              </div>

              <div className="mt-5 space-y-2">
                {socialLinks.map(({ href, label, username, kind }) => {
                  const Icon = iconMap[kind];
                  return (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="group flex items-center gap-3 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-page)] p-3 transition hover:border-[var(--border-strong)]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--accent-primary)]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold text-[var(--text-primary)]">
                          {label}
                        </span>
                        <span className="block truncate font-mono text-[11px] text-[var(--text-muted)]">
                          {username}
                        </span>
                      </div>
                      <ArrowUpRight
                        className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)]"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.25, delay: 0.04 }}
            className="editorial-card p-6 sm:p-8 lg:col-span-7"
          >
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
              Send Inquiry
            </span>
            <h3 className="mt-1.5 text-2xl font-bold text-[var(--text-primary)]">
              Start a conversation
            </h3>
            <p className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
              Share ML/AI internship or engineering roles, project ideas, or research questions.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-mono text-[11px] font-semibold text-[var(--text-secondary)]"
                  >
                    NAME
                  </label>
                  <input
                    id="name"
                    {...register('name')}
                    placeholder="Your name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    className={cn(inputClass, errors.name && 'border-red-600')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
                      <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono text-[11px] font-semibold text-[var(--text-secondary)]"
                  >
                    EMAIL
                  </label>
                  <input
                    id="email"
                    {...register('email')}
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    className={cn(inputClass, errors.email && 'border-red-600')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
                      <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-[11px] font-semibold text-[var(--text-secondary)]"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tell me about the role, dataset/model challenge, or timeline..."
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  className={cn(inputClass, 'resize-none', errors.message && 'border-red-600')}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
                    <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full py-3 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-lg border border-emerald-600/30 bg-emerald-500/10 px-4 py-3 text-xs font-medium text-[var(--accent-teal)] sm:text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Message sent successfully. I will respond shortly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  role="alert"
                  className="flex items-center gap-2 rounded-lg border border-red-600/30 bg-red-500/10 px-4 py-3 text-xs font-medium text-red-600 dark:text-red-400 sm:text-sm"
                >
                  <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
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
