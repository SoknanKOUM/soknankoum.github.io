import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { articles } from '@/data/blog';

export default function Blog() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug);

  return (
    <>
      <PageHeader
        label="My Blog"
        title="Sharing knowledge, ideas & perspectives."
        subtitle="Writing about technology, development, AI, mathematics and the lessons I gather from building things."
      />

      <div className="container-page py-16 sm:py-20">
        <Reveal>
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-subtle bg-surface-muted transition-all duration-500 hover:border-hover hover:bg-surface-hover lg:grid-cols-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={featured.cover}
                alt={featured.coverAlt}
                loading="lazy"
                className="h-full min-h-[16rem] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-accent-500/90 px-3 py-1 text-xs font-semibold text-white">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-center gap-3 text-xs font-medium text-accent">
                <span className="uppercase tracking-[0.18em]">
                  {featured.category}
                </span>
                <span className="text-muted">•</span>
                <span className="text-secondary">{featured.date}</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-body text-secondary">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-strong">
                Read More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article, i) => (
            <Reveal as="article" key={article.slug} delay={i * 70}>
              <Link
                to={`/blog/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-subtle bg-surface-muted transition-all duration-500 hover:border-hover hover:bg-surface-hover"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.cover}
                    alt={article.coverAlt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-accent">
                    <span className="uppercase tracking-[0.18em]">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-body text-secondary">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted">
                    <span>{article.date}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-accent transition-colors group-hover:text-accent-strong">
                      Read More
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
