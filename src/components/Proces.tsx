"use client";

import { useEffect, useRef } from "react";
import { useSite } from "./SiteProvider";
import type { DictKey } from "@/lib/i18n";

const STEPS = [
  { n: "01", icon: "📋", t: "proc.s1.t", d: "proc.s1.d" },
  { n: "02", icon: "✏️", t: "proc.s2.t", d: "proc.s2.d" },
  { n: "03", icon: "⚡", t: "proc.s3.t", d: "proc.s3.d" },
  { n: "04", icon: "🚀", t: "proc.s4.t", d: "proc.s4.d", hot: true },
];

export function Proces() {
  const { t } = useSite();
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stepsEl = stepsRef.current;
    if (!section || !stepsEl) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stepsEl.querySelectorAll<HTMLElement>(".gb-step").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const steps = Array.from(stepsEl.querySelectorAll<HTMLElement>(".gb-step"));

      // set initial state
      gsap.set(steps, { opacity: 0, y: 28 });

      // staggered reveal per step
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stepsEl,
          start: "top 80%",
          once: true,
        },
      });
      tl.to(steps, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
      });

      // desktop progress bar (fill left→right while scrolling through section)
      const fill = fillRef.current;
      if (fill && window.innerWidth >= 768) {
        gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });
        ScrollTrigger.create({
          trigger: section,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
          onUpdate: (self) => {
            gsap.set(fill, { scaleX: self.progress });
          },
        });
      }

      cleanup = () => {
        tl.scrollTrigger?.kill();
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === section || st.trigger === stepsEl) st.kill();
        });
      };
    })();

    return () => cleanup?.();
  }, []);

  return (
    <section id="s-proc" className="gb-section" ref={sectionRef}>
      <span className="gb-eyebrow">{t("proc.eyebrow")}</span>
      <h2 className="gb-h2">{t("proc.title")}</h2>

      {/* Desktop progress track */}
      <div className="gb-proc-track" aria-hidden="true">
        <div className="gb-proc-fill" ref={fillRef} />
      </div>

      <div className="gb-steps" style={{ marginTop: 16 }} ref={stepsRef}>
        {STEPS.map((s) => (
          <div key={s.n} className={`gb-step${s.hot ? " hot" : ""}`}>
            <span className="n" aria-hidden="true">{s.n}</span>
            <span className="proc-icon" aria-hidden="true">{s.icon}</span>
            <div>
              <h3>{t(s.t as DictKey)}</h3>
              <p>{t(s.d as DictKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
