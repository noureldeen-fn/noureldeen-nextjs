'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactSectionProps {
  dict: {
    contact: {
      badge: string;
      title: string;
      description: string;
      form: {
        name: string;
        email: string;
        subject: string;
        message: string;
        send: string;
        sending: string;
        success: string;
        error: string;
      };
      directEmail: string;
      location: string;
      socials: {
        github: string;
        linkedin: string;
        twitter: string;
      };
    };
  };
}

export function ContactSection({ dict }: ContactSectionProps) {
  const { contact } = dict;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-card-border bg-surface-card text-xs font-semibold text-brand-cta uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>{contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-text-primary tracking-tight leading-tight mb-4">
            {contact.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-surface-card-border bg-surface-card space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center text-brand-cta flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${contact.directEmail}`}
                    className="text-base sm:text-lg font-bold text-text-primary hover:text-brand-cta transition-colors"
                  >
                    {contact.directEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center text-brand-cta flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block">
                    Location / Presence
                  </span>
                  <span className="text-sm font-medium text-text-primary">
                    {contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl border border-surface-card-border bg-surface-card flex items-center justify-around gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-brand-cta transition-colors"
              >
                <Github className="w-5 h-5 text-brand-cta" />
                <span>{contact.socials.github}</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-brand-cta transition-colors"
              >
                <Linkedin className="w-5 h-5 text-brand-cta" />
                <span>{contact.socials.linkedin}</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-brand-cta transition-colors"
              >
                <Twitter className="w-5 h-5 text-brand-cta" />
                <span>{contact.socials.twitter}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-surface-card-border bg-surface-card space-y-4"
            >
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{contact.form.success}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    {contact.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-card-border bg-bg-main text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-cta text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    {contact.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-card-border bg-bg-main text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-cta text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                  {contact.form.subject}
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-surface-card-border bg-bg-main text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-cta text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                  {contact.form.message}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-surface-card-border bg-bg-main text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-cta text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-cta hover:bg-brand-cta-hover text-white font-semibold text-sm tracking-wide shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'sending' ? contact.form.sending : contact.form.send}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
