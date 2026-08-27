import { ReactNode } from 'react';
import { SectionLabel } from '@/components/ui';

type PageHeaderProps = {
  label: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function PageHeader({ label, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-faint">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent-700/20 blur-3xl" />
      <div className="container-page relative py-16 text-center sm:py-20">
        <div className="animate-page-in [animation-delay:60ms]">
          <SectionLabel>{label}</SectionLabel>
        </div>
        <h1 className="mx-auto mt-5 max-w-3xl animate-page-in text-4xl font-bold tracking-tight text-primary [animation-delay:140ms] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl animate-page-in text-lg leading-body text-secondary [animation-delay:220ms]">
          {subtitle}
        </p>
        {children && (
          <div className="mt-8 animate-page-in [animation-delay:300ms]">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
