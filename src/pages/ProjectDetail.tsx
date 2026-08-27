import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getProject } from '@/data/projects';
import { ButtonLink } from '@/components/ui';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = id ? getProject(id) : undefined;

  if (!project) {
    return (
      <div className="container-page flex flex-col items-center py-32 text-center">
        <h1 className="text-3xl font-bold text-primary">Project not found</h1>
        <p className="mt-4 max-w-md text-secondary">
          The project you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <div className="mt-8">
          <ButtonLink to="/projects">Back to projects</ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <article className="animate-page-in">
      <div className="relative border-b border-faint">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent-700/20 blur-3xl" />
        <div className="container-page relative max-w-3xl py-14 sm:py-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          <p className="mt-8 font-display text-sm font-semibold tracking-[0.2em] text-accent">
            PROJECT {project.index}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-heading tracking-tight text-primary sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-body text-secondary">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="container-page max-w-3xl py-12">
        <div className="overflow-hidden rounded-2xl border border-subtle">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-10 space-y-6">
          <p className="text-xl font-medium leading-body text-primary/90">
            {project.description}
          </p>
          <p className="text-lg leading-body text-secondary">
            {project.contribution}
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-subtle bg-surface-hover px-3 py-1 text-xs font-medium text-primary/80"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.code && project.code.length > 0 && (
          <div className="mt-10 space-y-6">
            {project.code.map((block, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-ink-950"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                  <span className="text-xs font-medium text-slate-400">
                    {block.title ?? block.language}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-accent-400">
                    {block.language}
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-200">
                  <code>{block.code}</code>
                </pre>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-subtle pt-8">
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-subtle px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-hover hover:bg-surface-hover hover:-translate-y-0.5"
            >
              Visit Live Project
              <ArrowUpRight size={16} />
            </a>
          )}
          <ButtonLink to="/contact" variant="ghost">
            Interested? Let&apos;s talk
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
