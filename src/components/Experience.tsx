"use client";

import { useApp } from "@/components/Providers";

export function Experience() {
  const { t } = useApp();

  return (
    <section id="experiencia" className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-16">
      <h2 className="mb-8 text-xs tracking-widest text-accent">{t.experience.title}</h2>

      <div className="space-y-10 border-l border-border pl-6">
        {t.experience.items.map((item) => (
          <article key={item.company} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent" />
            <h3 className="font-medium">{item.company}</h3>
            <p className="text-sm text-muted">
              {item.role} · {item.period}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}