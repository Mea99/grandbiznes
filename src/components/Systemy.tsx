"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import { systems } from "@/lib/systemsData";

export function Systemy() {
  const { t, lang, setActiveDemo } = useSite();

  return (
    <Reveal id="s-sys" className="gb-section">
      <span className="gb-eyebrow">{t("sys.eyebrow")}</span>
      <h2 className="gb-h2">{t("sys.title")}</h2>
      <p className="gb-sub">{t("sys.sub")}</p>

      <div className="gb-sys-grid">
        {systems.map((s) => (
          <button
            key={s.key}
            className="gb-sys-tile"
            onClick={() => setActiveDemo(s.key)}
          >
            <span className="gb-sys-icon">{s.icon}</span>
            <h3 className="t">{s.title[lang]}</h3>
            <p className="d">{s.desc[lang]}</p>
            <span className="more">{t("sys.demoMore")}</span>
          </button>
        ))}
      </div>

      <div className="gb-sys-cta">{t("sys.cta")}</div>
    </Reveal>
  );
}
