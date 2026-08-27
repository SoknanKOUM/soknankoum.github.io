import { FormEvent, useState } from 'react';
import { Check, Download, Github, Linkedin, Mail, Send } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { ButtonAnchor } from '@/components/ui';
import { profile } from '@/data/profile';
import { supabase } from '@/lib/supabase';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: FormValues = { name: '', email: '', message: '' };

const inputClass =
  'mt-2 w-full rounded-xl border border-subtle bg-base px-4 py-3 text-sm text-primary placeholder:text-muted transition-colors focus:border-accent-400/60 focus:outline-none';

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    });

    if (error) {
      setStatus('error');
      return;
    }

    setValues(initialValues);
    setStatus('success');
  };

  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Let’s work together."
        subtitle="Have an idea, an opportunity or simply want to say hello? I’d love to hear from you."
      />

      <section className="container-page grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal direction="left">
          <div>
            <p className="text-lg leading-body text-secondary">
              Whether you’re building something ambitious or exploring a new idea, the best conversations usually start with a message.
            </p>

            <div className="mt-9 space-y-5">
              <a href={profile.socials.email} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-subtle text-accent transition-colors group-hover:border-hover">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-muted">Email</span>
                  <span className="mt-1 block text-sm font-medium text-primary/80 group-hover:text-primary">{profile.email}</span>
                </span>
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-subtle text-accent transition-colors group-hover:border-hover">
                  <Linkedin size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-muted">LinkedIn</span>
                  <span className="mt-1 block text-sm font-medium text-primary/80 group-hover:text-primary">Connect with me</span>
                </span>
              </a>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-subtle text-accent transition-colors group-hover:border-hover">
                  <Github size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-muted">GitHub</span>
                  <span className="mt-1 block text-sm font-medium text-primary/80 group-hover:text-primary">See what I’m building</span>
                </span>
              </a>
            </div>

            <div className="mt-9">
              <ButtonAnchor href={profile.cvUrl} download variant="ghost">
                <Download size={17} />
                Download CV
              </ButtonAnchor>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={90}>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-subtle bg-surface-muted p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-primary/80">Name</span>
                <input
                  required
                  maxLength={120}
                  value={values.name}
                  onChange={(event) => updateValue('name', event.target.value)}
                  className={inputClass}
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-primary/80">Email</span>
                <input
                  required
                  type="email"
                  maxLength={254}
                  value={values.email}
                  onChange={(event) => updateValue('email', event.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-medium text-primary/80">Message</span>
              <textarea
                required
                maxLength={4000}
                value={values.message}
                onChange={(event) => updateValue('message', event.target.value)}
                className={`${inputClass} min-h-40 resize-y`}
                placeholder="Tell me a little about your idea..."
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={17} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="inline-flex items-center gap-2 text-sm text-emerald-400" role="status">
                  <Check size={16} /> Thanks — your message is on its way.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-rose-400" role="alert">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}
