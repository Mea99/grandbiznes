"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import type { DictKey } from "@/lib/i18n";

const PACKAGES = [
  {
    name: "price.p1.name" as DictKey,
    amt: "price.p1.amt" as DictKey,
    features: ["price.p1.f1", "price.p1.f2", "price.p1.f3"] as DictKey[],
  },
  {
    name: "price.p2.name" as DictKey,
    amt: "price.p2.amt" as DictKey,
    features: ["price.p2.f1", "price.p2.f2", "price.p2.f3", "price.p2.f4"] as DictKey[],
    hot: true,
  },
  {
    name: "price.p3.name" as DictKey,
    amt: "price.p3.amt" as DictKey,
    features: ["price.p3.f1", "price.p3.f2", "price.p3.f3"] as DictKey[],
  },
];

const GUARANTEES: DictKey[] = ["price.g1", "price.g2", "price.g3"];

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
            <div className="name">{t(p.name)}</div>
            <div className="amt">
              <small>{t("price.from")} </small>
              {t(p.amt)}
            </div>
            <ul>
              {p.features.map((f) => (
                <li key={f}>
                  <span className="tick">&#10003;</span>
                  {t(f)}
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

      {/* Guarantees row */}
      <div className="gb-price-guarantees">
        {GUARANTEES.map((g) => (
          <div key={g} className="gb-price-guarantee">
            <span className="guar-icon" aria-hidden="true">&#10003;</span>
            <span>{t(g)}</span>
          </div>
        ))}
      </div>

      {/* Sandbox CTA */}
      <div className="gb-price-sandbox-cta">
        <button
          className="gb-btn-sm ghost"
          onClick={() => goTo("s-sandbox")}
        >
          {t("price.sandbox")}
        </button>
      </div>

      <p
        className="gb-sub"
        style={{ marginTop: 12, marginBottom: 0, fontSize: 11.5, opacity: 0.7 }}
      >
        {t("price.note")}
      </p>
    </Reveal>
  );
}
