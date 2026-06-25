"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";

function BrandMark() {
  return (
    <div className="gb-about-img">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{
          position: "relative",
          width: 80,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            borderRadius: 22,
            transform: "rotate(45deg)",
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            boxShadow: "0 0 48px rgba(var(--accent-rgb), 0.45)",
          }} />
          <span style={{
            position: "relative",
            fontFamily: "var(--fd)",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: "-0.02em",
            color: "#0a0a12",
          }}>GB</span>
        </div>
        <div style={{
          fontFamily: "var(--fd)",
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: "0.18em",
          color: "var(--text)",
        }}>
          GRAND<span style={{ color: "var(--accent)" }}>BIZNES</span>
        </div>
        <div style={{
          fontFamily: "var(--fe)",
          fontSize: 9.5,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}>
          Studio stron internetowych
        </div>
      </div>
    </div>
  );
}

export function About() {
  const { t } = useSite();

  return (
    <Reveal id="s-about" className="gb-section">
      <div className="gb-card gb-about">
        <BrandMark />
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
