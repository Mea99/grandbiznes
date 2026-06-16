"use client";

import { useSite } from "./SiteProvider";
import { CountUp } from "./CountUp";

export function Hero() {
  const { t, goTo } = useSite();

  return (
    <section id="s-top" className="gb-hero" data-reveal data-shown>
      <span className="gb-orb a" />
      <span className="gb-orb b" />

      <span className="gb-hero-badge">
        <span className="pulse" />
        <span className="gb-eyebrow" style={{ color: "var(--muted)" }}>
          {t("hero.eyebrow")}
        </span>
      </span>

      <h1 className="gb-h1">
        {t("hero.title1")}
        <br />
        <span className="grad">{t("hero.title2")}</span>
      </h1>

      <p>{t("hero.lead")}</p>

      <div className="gb-cta-row">
        <button className="gb-btn-primary" onClick={() => goTo("s-kontakt")}>
          {t("hero.cta1")}
        </button>
        <button className="gb-btn-ghost" onClick={() => goTo("s-real")}>
          {t("hero.cta2")}
        </button>
      </div>

      <div className="gb-stats">
        <div className="gb-stat">
          <span className="num">
            <CountUp to={3} />
          </span>
          <span className="lbl">{t("hero.stat1")}</span>
        </div>
        <div className="gb-stat">
          <span className="num">
            <CountUp to={12} />
          </span>
          <span className="lbl">{t("hero.stat2")}</span>
        </div>
        <div className="gb-stat">
          <span className="num">
            <CountUp to={100} suffix="%" />
          </span>
          <span className="lbl">{t("hero.stat3")}</span>
        </div>
      </div>
    </section>
  );
}
