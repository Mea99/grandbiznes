"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { dict, type Lang, type DictKey } from "@/lib/i18n";

export type Theme = "aurora" | "acid" | "aurum";

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  activeDemo: string | null;
  setActiveDemo: (k: string | null) => void;
  goTo: (id: string) => void;
};

const SiteContext = createContext<Ctx | null>(null);

const THEMES: Theme[] = ["aurora", "acid", "aurum"];

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("aurora");
  const [lang, setLangState] = useState<Lang>("pl");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  // hydrate persisted prefs
  useEffect(() => {
    try {
      const st = localStorage.getItem("gb-theme") as Theme | null;
      if (st && THEMES.includes(st)) setThemeState(st);
      const sl = localStorage.getItem("gb-lang") as Lang | null;
      if (sl === "pl" || sl === "en") setLangState(sl);
    } catch {}
  }, []);

  // apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // reflect language on <html lang>
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // lock scroll when a demo sheet is open
  useEffect(() => {
    document.body.style.overflow = activeDemo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDemo]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("gb-theme", t);
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("gb-lang", l);
    } catch {}
  }, []);

  const t = useCallback(
    (key: DictKey) => dict[lang][key] ?? dict.pl[key] ?? key,
    [lang]
  );

  const goTo = useCallback((id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <SiteContext.Provider
      value={{
        theme,
        setTheme,
        lang,
        setLang,
        t,
        menuOpen,
        setMenuOpen,
        activeDemo,
        setActiveDemo,
        goTo,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
