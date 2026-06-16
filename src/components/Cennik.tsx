"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import type { DictKey } from "@/lib/i18n";

const PACKAGES = [
  {
    name: "price.p1.name",
    amt: "price.p1.amt",
    features: ["price.p1.f1", "price.p1.f2", "price.p1.f3"],
  },
  {
    name: "price.p2.name",
    amt: "price.p2.amt",
    features: ["price.p2.f1", "price.p2.f2", "price.p2.f3", "price.p2.f4"],
    hot: true,
  },
  {
    name: "price.p3.name",
    amt: "price.p3.amt",
    features: ["price.p3.f1", "price.p3.f2", "price.p3.f3"],
  },
];

export function Cennik() {
  const { t, goTo } = useSite();

  return (
    <Reveal id="s-price" className="gb-section">
      <span className="gb-eyebrow">{t("price.eyebrow")}</span>
      <h2 className="gb-h2">{t("price.title")}</h2>

      <div className="gb-prices" style={{ marginTop: 20 }}>
        {PACKAGES.map((p) => (
          <div key={p.name} className={`gb-price${p.hot ? " hot" : ""}`}>
            {p.hot && <span className="badge">{t("price.badge")}</span>}
            <div className="name">{t(p.name as DictKey)}</div>
            <div className="amt">
              <small>{t("price.from")} </small>
              {t(p.amt as DictKey)}
            </div>
            <ul>
              {p.features.map((f) => (
                <li key={f}>
                  <span className="tick">✓</span>
                  {t(f as DictKey)}
                </li>
              ))}
            </ul>
            <button
              className={p.hot ? "gb-btn-primary" : "gb-btn-ghost"}
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => goTo("s-kontakt")}
            >
              {t("price.cta")}
            </button>
          </div>
        ))}
      </div>

      <p
        className="gb-sub"
        style={{ marginTop: 16, marginBottom: 0, fontSize: 11.5, opacity: 0.8 }}
      >
        {t("price.note")}
      </p>
    </Reveal>
  );
}
