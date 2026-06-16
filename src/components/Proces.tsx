"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import type { DictKey } from "@/lib/i18n";

const STEPS = [
  { n: "01", t: "proc.s1.t", d: "proc.s1.d" },
  { n: "02", t: "proc.s2.t", d: "proc.s2.d" },
  { n: "03", t: "proc.s3.t", d: "proc.s3.d" },
  { n: "04", t: "proc.s4.t", d: "proc.s4.d", hot: true },
];

export function Proces() {
  const { t } = useSite();

  return (
    <Reveal id="s-proc" className="gb-section">
      <span className="gb-eyebrow">{t("proc.eyebrow")}</span>
      <h2 className="gb-h2">{t("proc.title")}</h2>

      <div className="gb-steps" style={{ marginTop: 16 }}>
        {STEPS.map((s) => (
          <div key={s.n} className={`gb-step${s.hot ? " hot" : ""}`}>
            <span className="n">{s.n}</span>
            <div>
              <h3>{t(s.t as DictKey)}</h3>
              <p>{t(s.d as DictKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
