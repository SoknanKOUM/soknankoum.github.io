import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_12px_2px] shadow-accent-500/60" />
      {children}
    </span>
  );
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent-400/70';

const styles = {
  primary:
    'bg-accent-500 px-6 py-3 text-white shadow-lg shadow-accent-600/25 hover:bg-accent-400 hover:shadow-accent-500/40 hover:-translate-y-0.5',
  ghost:
    'border border-subtle px-6 py-3 text-primary hover:border-hover hover:bg-surface-hover hover:-translate-y-0.5',
} as const;

type Variant = keyof typeof styles;

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  children,
  variant = 'primary',
  className = '',
  download,
  external,
}: CommonProps & { href: string; download?: boolean; external?: boolean }) {
  return (
    <a
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
