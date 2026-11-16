"use client";

import { useApp } from "@/components/Providers";

export function Navbar() {
  const { t, lang, changeLang, theme, toggleTheme } = useApp();

  const links = [
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#habilidades", label: t.nav.skills },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-3 text-sm">
        <a href="#" className="mr-auto font-medium">
          Danna Vera
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-muted hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex overflow-hidden rounded-md border border-border">
          {(["es", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => changeLang(l)}
              className={
                lang === l
                  ? "bg-accent px-3 py-1 text-xs font-medium text-background"
                  : "px-3 py-1 text-xs text-muted hover:text-foreground"
              }
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          className="rounded-md border border-border px-2 py-1 text-muted hover:text-foreground"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}