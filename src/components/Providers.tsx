"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content } from "@/lib/content";

export type Lang = "es" | "en";
type Theme = "light" | "dark";

type AppContextType = {
  lang: Lang;
  t: (typeof content)["es"];
  changeLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "es" || savedLang === "en") setLang(savedLang);

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) setTheme("dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function changeLang(next: Lang) {
    setLang(next);
    localStorage.setItem("lang", next);
  }

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  }

  return (
    <AppContext.Provider value={{ lang, t: content[lang], changeLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de Providers");
  return ctx;
}