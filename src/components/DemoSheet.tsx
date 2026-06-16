"use client";

import { useEffect } from "react";
import { useSite } from "./SiteProvider";
import { systems, type SystemKey } from "@/lib/systemsData";
import { DemoContent } from "./demos";

export function DemoSheet() {
  const { activeDemo, setActiveDemo, lang } = useSite();

  useEffect(() => {
    if (!activeDemo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDemo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeDemo, setActiveDemo]);

  if (!activeDemo) return null;
  const meta = systems.find((s) => s.key === activeDemo);
  if (!meta) return null;

  return (
    <div
      className="gb-sheet-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) setActiveDemo(null);
      }}
    >
      <div className="gb-sheet" role="dialog" aria-modal="true" aria-label={meta.title[lang]}>
        <div className="gb-sheet-head">
          <span className="gb-sys-icon">{meta.icon}</span>
          <div className="meta">
            <div className="t">{meta.title[lang]}</div>
            <span className="live">
              <span className="blink" />
              {lang === "pl" ? "Demo na żywo" : "Live demo"}
            </span>
          </div>
          <button
            className="gb-sheet-close"
            onClick={() => setActiveDemo(null)}
            aria-label={lang === "pl" ? "Zamknij" : "Close"}
          >
            ✕
          </button>
        </div>
        <div className="gb-sheet-body">
          <DemoContent k={activeDemo as SystemKey} />
        </div>
      </div>
    </div>
  );
}
