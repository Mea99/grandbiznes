"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import { systems } from "@/lib/systemsData";

// Indeksy kafelkow ktore sa "wide" (2 kolumny) na desktopie
const WIDE_KEYS = new Set(["sklep", "rezerwacje", "mystery"]);

export function Systemy() {
  const { t, lang, setActiveDemo, goTo } = useSite();

  return (
    <Reveal id="s-sys" className="gb-section">
      <span className="gb-eyebrow">{t("sys.eyebrow")}</span>
      <h2 className="gb-h2">{t("sys.title")}</h2>
      <p className="gb-sub">{t("sys.sub")}</p>

      <div className="gb-bento">
        {systems.map((s) => {
          const isWide = WIDE_KEYS.has(s.key);
          return (
            <button
              key={s.key}
              className={`gb-bento-tile${isWide ? " gb-bento-tile--wide" : ""}`}
              onClick={() => setActiveDemo(s.key)}
              aria-label={`Demo: ${s.title[lang]}`}
            >
              <span className="gb-bento-icon">{s.icon}</span>
              <h3 className="t">{s.title[lang]}</h3>
              <p className="d">{s.desc[lang]}</p>
              <span className="more">{t("sys.demoMore")}</span>
              <span className="gb-bento-bar" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div className="gb-sys-footer">
        <p className="gb-sub" style={{ margin: 0 }}>{t("sys.cta")}</p>
        <button
          className="gb-btn-primary"
          style={{ marginTop: 14, alignSelf: "flex-start" }}
          onClick={() => goTo("s-sandbox")}
        >
          {t("sys.sandbox")}
        </button>
      </div>
    </Reveal>
  );
}
