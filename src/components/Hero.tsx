"use client";

import { useApp } from "@/components/Providers";

export function Hero() {
  const { t } = useApp();

  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-3 text-xs tracking-widest text-accent">{t.hero.greeting}</p>
      <h1 className="text-4xl font-medium leading-tight sm:text-5xl">{t.hero.name}</h1>
      <p className="mt-3 text-lg text-accent">{t.hero.role}</p>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">{t.hero.description}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#proyectos"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
        >
          {t.hero.viewProjects}
        </a>
        <a
          href="/cv-danna-vera.pdf"
          download
          className="rounded-md border border-border px-5 py-2.5 text-sm hover:bg-card"
        >
          {t.hero.downloadCv}
        </a>
      </div>
    </section>
  );
}