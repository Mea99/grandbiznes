"use client";

import { useSite, type Theme } from "./SiteProvider";

const NAV_LINKS: { id: string; key: Parameters<ReturnType<typeof useSite>["t"]>[0] }[] = [
  { id: "s-real", key: "nav.work" },
  { id: "s-sys", key: "nav.systems" },
  { id: "s-proc", key: "nav.process" },
  { id: "s-price", key: "nav.pricing" },
  { id: "s-faq", key: "nav.faq" },
];

const THEME_DOTS: Record<Theme, string> = {
  aurora: "#8b5cf6",
  acid: "#c6ff4a",
  aurum: "#f5c451",
};

export function Nav() {
  const { t, lang, setLang, menuOpen, setMenuOpen, goTo, theme, setTheme } =
    useSite();

  return (
    <>
      <header className="gb-nav">
        <button className="gb-logo" onClick={() => goTo("s-top")} aria-label="GrandBiznes">
          <span className="diamond" />
          <span>
            GRAND<span className="accent">BIZNES</span>
          </span>
        </button>

        <div className="gb-nav-right">
          <div className="gb-lang" role="group" aria-label="Język">
            <button
              data-active={lang === "pl"}
              onClick={() => setLang("pl")}
              aria-pressed={lang === "pl"}
            >
              PL
            </button>
            <button
              data-active={lang === "en"}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
            className="gb-burger"
            data-open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="gb-menu">
          <nav>
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => goTo(l.id)}>
                {t(l.key)}
              </button>
            ))}
            <button className="cta" onClick={() => goTo("s-kontakt")}>
              {t("nav.quote")}
            </button>
          </nav>

          <div className="themes" role="group" aria-label={t("nav.theme")}>
            {(Object.keys(THEME_DOTS) as Theme[]).map((th) => (
              <button
                key={th}
                className="gb-theme-btn"
                data-active={theme === th}
                onClick={() => setTheme(th)}
                aria-pressed={theme === th}
              >
                <span
                  className="dot"
                  style={{
                    background: THEME_DOTS[th],
                    boxShadow: `0 0 9px ${THEME_DOTS[th]}`,
                  }}
                />
                {th.charAt(0).toUpperCase() + th.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
