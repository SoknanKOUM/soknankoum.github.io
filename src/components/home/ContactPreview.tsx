import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel, ButtonLink } from '@/components/ui';
import { profile } from '@/data/profile';

const links = [
  { label: 'Email', href: profile.socials.email, icon: Mail, external: false },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', href: profile.socials.github, icon: Github, external: true },
];

export function ContactPreview() {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl border border-subtle bg-surface p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-glow blur-3xl" />
        <div className="pointer-events-none absolute inset-0 dot-texture opacity-30 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div>
              <SectionLabel>Get in Touch</SectionLabel>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                Let&apos;s Work Together
              </h2>
              <p className="mt-4 max-w-md text-lg leading-body text-secondary">
                I&apos;m always open to new opportunities and interesting
                projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {links.map(({ label, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-subtle px-4 py-2 text-sm font-medium text-primary/80 transition-all hover:border-hover hover:text-primary"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-subtle px-4 py-2 text-sm font-medium text-primary/80 transition-all hover:border-hover hover:text-primary"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              <div className="mt-8">
                <ButtonLink to="/contact">
                  Visit contact page
                  <ArrowUpRight size={18} />
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100} className="hidden lg:block">
            <div className="relative mx-auto aspect-square w-64">
              <div className="absolute inset-0 animate-glow-pulse rounded-full bg-glow blur-2xl" />
              <div className="absolute inset-6 rounded-full border border-accent-400/30" />
              <div className="absolute inset-12 rounded-full border border-accent-400/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 animate-float items-center justify-center rounded-3xl border border-subtle bg-elevated shadow-lg shadow-black/10">
                  <Mail size={34} className="text-accent" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
