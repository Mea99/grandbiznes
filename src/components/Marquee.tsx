"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  "Strony",
  "Sklepy",
  "Rezerwacje",
  "Lojalność",
  "Newsletter",
  "Panel gracza",
  "AI",
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastY = window.scrollY;
    let currentDuration = 20;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      const targetDuration = Math.max(6, 20 - Math.abs(delta) * 0.7);
      currentDuration += (targetDuration - currentDuration) * 0.1;
      track.style.animationDuration = `${currentDuration.toFixed(1)}s`;

      if (Math.abs(delta) > 1) {
        track.style.animationDirection = delta < 0 ? "reverse" : "normal";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const seq = [...ITEMS, ...ITEMS];

  return (
    <div className="gb-marquee" aria-hidden="true">
      <div className="gb-marquee-track" ref={trackRef}>
        {seq.map((it, i) => (
          <span key={i}>
            {it}
            <span className="sep" style={{ marginLeft: 14 }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
