import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Columns2, LayoutGrid, List } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/projects';

type View = 'showcase' | 'grid' | 'list';

const STORAGE_KEY = 'projects-view';
const DEFAULT_VIEW: View = 'showcase';

function getStoredView(): View {
  if (typeof window === 'undefined') return DEFAULT_VIEW;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'grid' || stored === 'list' || stored === 'showcase') return stored;
    return DEFAULT_VIEW;
  } catch {
    return DEFAULT_VIEW;
  }
}

function ViewToggle({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const options: { value: View; label: string; Icon: typeof LayoutGrid }[] = [
    { value: 'showcase', label: 'Showcase', Icon: Columns2 },
    { value: 'grid', label: 'Grid', Icon: LayoutGrid },
    { value: 'list', label: 'List', Icon: List },
  ];
  const CurrentIcon = options.find((o) => o.value === view)?.Icon ?? Columns2;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Project view: ${view}. Click to change.`}
        title="Change view"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-subtle bg-surface-muted text-secondary transition-colors duration-300 hover:border-hover hover:text-primary"
      >
        <CurrentIcon size={16} />
      </button>

      <div
        className={`absolute right-0 top-12 z-20 w-40 origin-top-right rounded-2xl border border-subtle bg-elevated p-1.5 shadow-xl shadow-black/10 transition-all duration-200 ${
          open
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <p className="px-2.5 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          View
        </p>
        {options.map(({ value, label, Icon }) => {
          const active = view === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => {
                onChange(value);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm font-medium transition-colors duration-200 ${
                active
                  ? 'bg-accent-500/10 text-accent'
                  : 'text-secondary hover:bg-surface-hover hover:text-primary'
              }`}
            >
              <Icon size={15} />
              <span className="flex-1 text-left">{label}</span>
              {active && <Check size={14} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ShowcaseView() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {projects.map((project, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={project.id}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal
              direction={imageLeft ? 'left' : 'right'}
              className={imageLeft ? '' : 'lg:order-2'}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-subtle">
                <div className="absolute inset-0 -z-10 bg-glow blur-2xl" />
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute left-5 top-5 font-display text-sm font-bold tracking-[0.3em] text-primary/60">
                  {project.index}
                </span>
              </div>
            </Reveal>

            <Reveal
              direction={imageLeft ? 'right' : 'left'}
              delay={80}
              className={imageLeft ? '' : 'lg:order-1'}
            >
              <div>
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
                  PROJECT {project.index}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-base leading-body text-primary/80">
                  {project.description}
                </p>
                <p className="mt-3 text-base leading-body text-secondary">
                  {project.contribution}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-subtle bg-surface-hover px-3 py-1 text-xs font-medium text-primary/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/projects/${project.id}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-subtle px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-hover hover:bg-surface-hover hover:-translate-y-0.5"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </section>
        );
      })}
    </div>
  );
}

function GridView() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => {
        const category = project.tags[0];
        return (
          <Reveal key={project.id} delay={i * 60}>
            <Link
              to={`/projects/${project.id}`}
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
  );
}

function ListView() {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, i) => (
        <Reveal key={project.id} delay={i * 50}>
          <Link
            to={`/projects/${project.id}`}
            className="group flex flex-col gap-4 rounded-2xl border border-subtle bg-surface-muted p-5 transition-all duration-300 hover:border-hover hover:bg-surface-hover sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="font-display text-lg font-bold text-accent/70 sm:w-10 sm:shrink-0">
              {project.index}
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold text-primary sm:text-lg">
                {project.title}
              </h3>
              <p className="mt-1 line-clamp-1 text-sm leading-body text-secondary">
                {project.summary}
              </p>
            </div>

            <ul className="flex flex-wrap gap-1.5 sm:w-auto sm:shrink-0">
              {project.tags.slice(0, 2).map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-accent-400/30 px-2.5 py-1 text-[11px] font-medium text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
              View
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export default function Projects() {
  const [view, setView] = useState<View>(getStoredView);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, view);
    } catch {
      // ignore write failures (e.g. private browsing)
    }
  }, [view]);

  return (
    <>
      <PageHeader
        label="My Projects"
        title="Turning ideas into real-world solutions."
        subtitle="A selection of work where I applied engineering, design and machine learning to solve real problems and create impact."
      />

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="container-page relative py-16 sm:py-20">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm font-medium text-secondary">All Projects</p>
            <ViewToggle view={view} onChange={setView} />
          </div>

          <div key={view} className="animate-page-in">
            {view === 'showcase' && <ShowcaseView />}
            {view === 'grid' && <GridView />}
            {view === 'list' && <ListView />}
          </div>
        </div>
      </div>
    </>
  );
}
