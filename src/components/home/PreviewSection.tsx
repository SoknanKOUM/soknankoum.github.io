import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/ui';

type PreviewSectionProps = {
  to: string;
  label: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: string;
  tags?: string[];
  imageSide?: 'left' | 'right';
};

export function PreviewSection({
  to,
  label,
  heading,
  description,
  image,
  imageAlt,
  cta,
  tags,
  imageSide = 'left',
}: PreviewSectionProps) {
  const imageFirst = imageSide === 'left';

  return (
    <section className="container-page py-16 sm:py-20">
      <Link
        to={to}
        className="group block rounded-3xl border border-subtle bg-surface-muted p-6 transition-all duration-500 hover:border-hover hover:bg-surface-hover sm:p-8"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal
            direction={imageFirst ? 'left' : 'right'}
            className={imageFirst ? '' : 'lg:order-2'}
          >
            <div className="relative overflow-hidden rounded-2xl border border-subtle">
              <div className="absolute inset-0 -z-10 bg-glow blur-2xl" />
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>

          <Reveal
            direction={imageFirst ? 'right' : 'left'}
            delay={80}
            className={imageFirst ? '' : 'lg:order-1'}
          >
            <div>
              <SectionLabel>{label}</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {heading}
              </h2>
              <p className="mt-4 max-w-md text-base leading-body text-secondary">
                {description}
              </p>

              {tags && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-subtle px-3 py-1 text-xs font-medium text-secondary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                {cta}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Reveal>
        </div>
      </Link>
    </section>
  );
}
