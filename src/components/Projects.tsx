"use client";

import { useApp } from "@/components/Providers";
import { extra } from "@/lib/content-extra";

export function Projects() {
  const { lang } = useApp();
  const p = extra[lang].projects;

  return (
    <section id="proyectos" className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-16">
      <h2 className="mb-8 text-xs tracking-widest text-accent">{p.title}</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {p.items.map((item) => (
          <article key={item.name} className="flex flex-col rounded-xl border border-border bg-card p-5">
            <h3 className="font-medium">{item.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span key={tech} className="rounded-md bg-accent-soft px-2.5 py-1 text-xs text-accent-ink">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-5 text-sm">
              {item.soon ? (
                <span className="text-muted">{p.soon}</span>
              ) : item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  {p.viewCode} →
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}