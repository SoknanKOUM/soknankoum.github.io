import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems, profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="relative border-t border-subtle bg-base">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link
            to="/"
            className="font-display text-sm font-bold uppercase tracking-[0.28em] text-primary"
          >
            {profile.name}
          </Link>
          <p className="mt-4 text-sm leading-body text-secondary">
            {profile.role}. Based in {profile.location}.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-secondary transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-start gap-3">
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-subtle text-secondary transition-all hover:border-hover hover:text-primary"
          >
            <Mail size={18} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-subtle text-secondary transition-all hover:border-hover hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-subtle text-secondary transition-all hover:border-hover hover:text-primary"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      <div className="container-page border-t border-faint py-6">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
      </div>
    </footer>
  );
}
