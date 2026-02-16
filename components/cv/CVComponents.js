"use client";

import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

/* HEADER */
export function CVHeader({ name, role, phone, email, github, linkedin }) {
  return (
    <div className="border-b pb-6 mb-10">

      <h1 className="text-4xl font-bold text-foreground">{name}</h1>
      <p className="font-medium text-muted-foreground mt-1">{role}</p>

      <div className="flex flex-wrap gap-6 text-sm mt-4 text-muted-foreground">

        <span className="flex items-center gap-2">
          <FaPhone className="text-primary" /> {phone}
        </span>

        <span className="flex items-center gap-2">
          <FaEnvelope className="text-primary" /> {email}
        </span>

        <span className="flex items-center gap-2">
          <FaGithub className="text-primary" /> {github}
        </span>

        <span className="flex items-center gap-2">
          <FaLinkedin className="text-primary" /> {linkedin}
        </span>

      </div>
    </div>
  );
}

/* SECTION TITLE */
export function CVSection({ title, children }) {
  return (
    <section className="mt-12">
      <h2 className="font-bold text-lg tracking-wide uppercase border-b pb-2 mb-6 text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ITEM */
export function CVItem({ date, location, title, subtitle, children }) {
  return (
    <div className="grid grid-cols-[190px_1fr] gap-6 mb-8">

      <div className="text-sm">
        <div className="font-semibold text-primary">{date}</div>

        {location && (
          <div className="flex items-center gap-1 text-muted-foreground mt-1">
            <FaMapMarkerAlt className="text-primary"/>
            {location}
          </div>
        )}
      </div>

      <div className="relative pl-6 border-l-2 border-border">

        <h3 className="font-semibold text-foreground">{title}</h3>

        {subtitle && (
          <div className="text-muted-foreground mb-2">{subtitle}</div>
        )}

        <ul className="list-disc ml-5 space-y-1 text-muted-foreground text-[15px]">
          {children}
        </ul>

      </div>
    </div>
  );
}