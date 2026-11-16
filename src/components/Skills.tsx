"use client";

import { useApp } from "@/components/Providers";

export function Skills() {
  const { t } = useApp();

  return (
    <section id="habilidades" className="mx-auto max-w-5xl scroll-mt-16 border-t border-border px-6 py-16">
      <h2 className="mb-8 text-xs tracking-widest text-accent">{t.skills.title}</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {t.skills.groups.map((group) => (
          <div key={group.name}>
            <p className="mb-3 text-sm font-medium">{group.name}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-accent-soft px-3 py-1 text-xs text-accent-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}