"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

// Gdy pojawia sie prawdziwa opinia, dodaj tutaj:
// const REVIEWS = [
//   { quote: "...", name: "Jan Kowalski", role: "Firma XYZ", url: "https://firmaxyz.pl" },
// ];

export function Opinie() {
  const { t } = useSite();

  return (
    <Reveal id="s-opinie" className="gb-section">
      <span className="gb-eyebrow">{t("rev.eyebrow")}</span>
      <h2 className="gb-h2">{t("rev.title")}</h2>

      <div style={{ marginTop: 20 }}>
        <div
          className="gb-review"
          style={{ textAlign: "center", padding: "32px 20px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 4,
              fontSize: 22,
              marginBottom: 16,
              opacity: 0.35,
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} style={{ color: "var(--accent)" }}>
                &#9733;
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--fd)",
              fontWeight: 700,
              fontSize: 15,
              margin: "0 0 8px",
              color: "var(--text)",
            }}
          >
            {t("rev.emptyTitle")}
          </p>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 13,
              lineHeight: 1.6,
              margin: "0 0 18px",
            }}
          >
            {t("rev.empty")}
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="gb-btn-ghost"
            style={{ display: "inline-flex", fontSize: 13 }}
          >
            {site.instagramHandle}
          </a>
        </div>
      </div>
    </Reveal>
  );
}
