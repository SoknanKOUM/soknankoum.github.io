import { ArrowRight, Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { ButtonLink, ButtonAnchor } from '@/components/ui';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent-700/20 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="max-w-xl">
          <p className="animate-page-in text-lg font-medium text-accent [animation-delay:60ms]">
            Hi, I&apos;m
          </p>
          <h1 className="mt-2 animate-page-in text-5xl font-bold tracking-tight text-primary [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 animate-page-in font-display text-xl font-medium text-primary/80 [animation-delay:200ms] sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-lg animate-page-in text-lg leading-body text-secondary [animation-delay:280ms]">
            {profile.intro}
          </p>

          <div className="mt-9 flex animate-page-in flex-wrap gap-4 [animation-delay:360ms]">
            <ButtonLink to="/projects">
              View My Work
              <ArrowRight size={18} />
            </ButtonLink>
            <ButtonAnchor href={profile.cvUrl} download variant="ghost">
              Download CV
              <Download size={18} />
            </ButtonAnchor>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-page-in [animation-delay:220ms]">
          <div className="absolute inset-0 -z-10 animate-glow-pulse rounded-full bg-glow blur-3xl" />
          <div className="absolute -right-6 -top-6 -z-10 h-24 w-24 animate-float rounded-full border border-accent-400/30 dot-texture opacity-70" />
          <div className="relative overflow-hidden rounded-[2rem] border border-subtle bg-surface shadow-2xl shadow-black/40">
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              loading="eager"
              className="aspect-[3/4] h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl border border-subtle bg-elevated px-5 py-3 shadow-lg shadow-black/10 [animation-delay:1s]">
            <p className="font-display text-sm font-semibold text-primary">AI</p>
            <p className="text-xs text-secondary">Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
}
