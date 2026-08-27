import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { getArticle } from '@/data/blog';
import { ButtonLink } from '@/components/ui';

export default function BlogArticle() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) {
    return (
      <div className="container-page flex flex-col items-center py-32 text-center">
        <h1 className="text-3xl font-bold text-primary">Article not found</h1>
        <p className="mt-4 max-w-md text-secondary">
          The article you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <div className="mt-8">
          <ButtonLink to="/blog">Back to blog</ButtonLink>
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
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium text-accent">
            <span className="uppercase tracking-[0.18em]">
              {article.category}
            </span>
            <span className="text-muted">•</span>
            <span className="text-secondary">{article.date}</span>
            <span className="text-muted">•</span>
            <span className="inline-flex items-center gap-1 text-secondary">
              <Clock size={13} />
              {article.readTime}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-heading tracking-tight text-primary sm:text-5xl">
            {article.title}
          </h1>
        </div>
      </div>

      <div className="container-page max-w-3xl py-12">
        <div className="overflow-hidden rounded-2xl border border-subtle">
          <img
            src={article.cover}
            alt={article.coverAlt}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-10 space-y-6">
          <p className="text-xl font-medium leading-body text-primary/90">
            {article.excerpt}
          </p>
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-lg leading-body text-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        {article.video && (
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {article.video.label ?? 'Demo'}
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-subtle">
              <video
                src={article.video.src}
                controls
                preload="metadata"
                className="aspect-video w-full bg-black"
              />
            </div>
          </div>
        )}

        <div className="mt-12 border-t border-subtle pt-8">
          <ButtonLink to="/contact" variant="ghost">
            Enjoyed this? Let&apos;s talk
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
