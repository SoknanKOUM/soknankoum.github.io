import { ButtonLink } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-bold text-white">This page wandered off.</h1>
      <p className="mt-4 max-w-md text-slate-400">
        The page you’re looking for doesn’t exist. Let’s get you back to something useful.
      </p>
      <div className="mt-8">
        <ButtonLink to="/">Back home</ButtonLink>
      </div>
    </section>
  );
}
