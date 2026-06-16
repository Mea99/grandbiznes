"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useSite();

  return (
    <Reveal id="s-about" className="gb-section">
      <div className="gb-card gb-about">
        <div className="gb-about-img">{t("about.imgph")}</div>
        <div className="gb-about-text">
          <span className="gb-eyebrow">{t("about.eyebrow")}</span>
          <h2 className="gb-h2" style={{ fontSize: 24 }}>
            {t("about.title")}
          </h2>
          <p>{t("about.body")}</p>
        </div>
      </div>
    </Reveal>
  );
}
