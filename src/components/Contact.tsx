"use client";

import { useApp } from "@/components/Providers";
import { extra } from "@/lib/content-extra";

export function Contact() {
  const { lang } = useApp();
  const c = extra[lang].contact;

  return (
    <section id="contacto" className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-16">
      <h2 className="mb-4 text-xs tracking-widest text-accent">{c.title}</h2>
      <p className="max-w-md text-muted">{c.text}</p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a
          href={`mailto:${c.email}`}
          className="rounded-md bg-accent px-5 py-2.5 font-medium text-background hover:opacity-90"
        >
          {c.email}
        </a>
        <a
          href="https://github.com/Dannavm"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-5 py-2.5 hover:bg-card"
        >
          GitHub
        </a>
      </div>

      <p className="mt-16 text-xs text-muted">© 2026 Danna Briggitte Vera Moreira</p>
    </section>
  );
}