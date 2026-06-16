"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import type { DictKey } from "@/lib/i18n";

const REVIEWS = [
  { q: "rev.r1.q", name: "rev.r1.name", role: "rev.r1.role" },
  { q: "rev.r2.q", name: "rev.r2.name", role: "rev.r2.role" },
  { q: "rev.r3.q", name: "rev.r3.name", role: "rev.r3.role" },
];

export function Opinie() {
  const { t } = useSite();

  return (
    <Reveal id="s-opinie" className="gb-section">
      <span className="gb-eyebrow">{t("rev.eyebrow")}</span>
      <h2 className="gb-h2">{t("rev.title")}</h2>

      <div className="gb-reviews" style={{ marginTop: 16 }}>
        {REVIEWS.map((r) => {
          const name = t(r.name as DictKey);
          return (
            <div key={r.name} className="gb-review">
              <div className="gb-stars" aria-label="5/5">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} style={{ color: "var(--accent)" }}>
                    {s}
                  </span>
                ))}
              </div>
              <p className="quote">“{t(r.q as DictKey)}”</p>
              <div className="who">
                <span className="gb-avatar">{name.charAt(0)}</span>
                <div>
                  <div className="name">{name}</div>
                  <div className="role">{t(r.role as DictKey)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
