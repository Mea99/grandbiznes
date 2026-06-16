"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import type { DictKey } from "@/lib/i18n";

const ITEMS = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
];

export function Faq() {
  const { t } = useSite();

  return (
    <Reveal id="s-faq" className="gb-section">
      <span className="gb-eyebrow">{t("faq.eyebrow")}</span>
      <h2 className="gb-h2">{t("faq.title")}</h2>

      <div className="gb-faq" style={{ marginTop: 16 }}>
        {ITEMS.map((it) => (
          <details key={it.q}>
            <summary>
              <span>{t(it.q as DictKey)}</span>
              <span className="arrow">+</span>
            </summary>
            <div className="answer">{t(it.a as DictKey)}</div>
          </details>
        ))}
      </div>
    </Reveal>
  );
}
