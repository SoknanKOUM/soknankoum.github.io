import { useEffect, useRef, useState } from 'react';
import { BookOpen, BriefcaseBusiness, MapPin } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { profile } from '@/data/profile';
import { journey, timelineHighlights } from '@/data/journey';

function SectionHeading({ number, children }: { number: string; children: string }) {
  return (
    <div className="mb-10 flex items-end gap-4 border-b border-faint pb-4">
      <span className="font-display text-sm font-semibold tracking-[0.18em] text-accent">
        {number}
      </span>
      <h2 className="text-2xl font-bold uppercase tracking-[0.16em] text-primary sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

function JourneyTimeline() {
  const trackRef = useRef<HTMLOListElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(100);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = trackRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const raw = (window.innerHeight * 0.55 - rect.top) / rect.height;
      setProgress(Math.min(100, Math.max(0, raw * 100)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={trackRef} className="relative mx-auto max-w-4xl">
      <div className="absolute left-4 top-0 h-full w-px border-l border-subtle md:left-1/2 md:-translate-x-1/2" aria-hidden="true">
        <div
          className="w-px bg-gradient-to-b from-accent-300 via-accent-500 to-accent-600 shadow-[0_0_10px_1px] shadow-accent-500/50 transition-[height] duration-150 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>

      {timelineHighlights.map((entry, i) => {
        const side = i % 2 === 0 ? 'right' : 'left';
        return (
          <li key={entry.id} className="relative mb-12 last:mb-0 md:mb-20">
            <span className="absolute left-4 top-7 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent-300 bg-base shadow-[0_0_12px_2px] shadow-accent-500/50 md:left-1/2" aria-hidden="true" />
            <div className={`pl-12 md:w-1/2 md:pl-0 ${side === 'right' ? 'md:ml-auto md:pl-14' : 'md:pr-14'}`}>
              <Reveal direction={side}>
                <article className="group overflow-hidden rounded-2xl border border-subtle bg-surface-muted transition-colors duration-500 hover:border-hover">
                  <div className="overflow-hidden">
                    <img
                      src={entry.image}
                      alt={entry.imageAlt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{entry.period}</p>
                    <h3 className="mt-3 text-xl font-bold text-primary">{entry.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary/70">{entry.organization}</p>
                    <p className="mt-3 text-sm leading-body text-secondary">{entry.description}</p>
                    {entry.coursework && (
                      <div className="mt-4 border-t border-faint pt-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                          Relevant coursework
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {entry.coursework.map((course) => (
                            <li
                              key={course}
                              className="flex items-start gap-2 text-sm leading-body text-secondary"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function AboutMe() {
  return (
    <>
      <PageHeader
        label="About Me"
        title="A little about who I am, where I come from, and where I’m going."
        subtitle={profile.longIntro}
      />

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="container-page relative py-16 sm:py-24">
          <section>
            <SectionHeading number="01" children="Experience" />
            <div className="grid gap-5">
              {journey
                .filter((entry) => entry.type === 'experience')
                .map((entry, i) => (
                  <Reveal key={entry.id} delay={i * 70}>
                    <article className="rounded-2xl border border-subtle bg-surface-muted p-6 transition-colors hover:border-hover sm:p-8">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-500/10 text-accent">
                            <BriefcaseBusiness size={21} />
                          </span>
                          <div>
                            <h3 className="text-xl font-bold text-primary">{entry.title}</h3>
                            <p className="mt-1 text-sm font-medium text-accent">{entry.organization}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-secondary sm:pt-2">
                          <MapPin size={15} className="text-accent" />
                          <span>{entry.location}</span>
                          <span className="text-muted">·</span>
                          <span>{entry.period}</span>
                        </div>
                      </div>
                      <p className="mt-5 max-w-3xl text-sm leading-body text-secondary">{entry.description}</p>
                    </article>
                  </Reveal>
                ))}
            </div>
          </section>

          <section className="mt-24 sm:mt-32">
            <SectionHeading number="02" children="Education" />
            <div className="grid gap-5">
              {journey
                .filter((entry) => entry.type === 'education')
                .map((entry, i) => (
                  <Reveal key={entry.id} delay={i * 70}>
                    <article className="rounded-2xl border border-subtle bg-surface-muted p-6 transition-colors hover:border-hover sm:p-8">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          {entry.logo ? (
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-400/30 bg-white p-1.5">
                              <img src={entry.logo} alt="" className="h-full w-full object-contain" />
                            </span>
                          ) : (
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-500/10 text-accent">
                              <BookOpen size={22} />
                            </span>
                          )}
                          <div>
                            <h3 className="text-xl font-bold text-primary">{entry.title}</h3>
                            <p className="mt-1 text-sm font-medium text-accent">{entry.organization}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-secondary sm:pt-2">
                          <MapPin size={15} className="text-accent" />
                          <span>{entry.location}</span>
                          <span className="text-muted">·</span>
                          <span>{entry.period}</span>
                        </div>
                      </div>
                      <p className="mt-5 max-w-3xl text-sm leading-body text-secondary">{entry.description}</p>
                    </article>
                  </Reveal>
                ))}
            </div>
          </section>

          <section className="mt-24 sm:mt-32">
            <SectionHeading number="03" children="My Journey" />
            <JourneyTimeline />
          </section>
        </div>
      </div>
    </>
  );
}
