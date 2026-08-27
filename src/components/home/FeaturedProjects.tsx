import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/ui';
import { projects } from '@/data/projects';

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="container-page relative">
        <div>
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Selected Projects
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => {
            const category = project.tags[0];
            const to = `/projects/${project.id}`;

            return (
              <Reveal key={project.id} delay={i * 60}>
                <Link
                  to={to}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-muted p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-hover hover:shadow-[0_0_30px_-8px_var(--glow)] sm:p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-xl font-bold text-accent/70">
                      {project.index}
                    </span>
                    {category && (
                      <span className="rounded-full border border-accent-400/30 bg-accent-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
                        {category}
                      </span>
                    )}
                  </div>

                  <div className="relative mt-3 overflow-hidden rounded-xl border border-subtle">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-4 text-base font-bold tracking-tight text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-body text-secondary">
                    {project.summary}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-accent-400/30 px-2 py-0.5 text-[10px] font-medium text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                    View Project
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-accent-400/40 px-6 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/70 hover:bg-accent-500/10"
          >
            See More Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
