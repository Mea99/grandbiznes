"use client";

import { useEffect, useRef } from "react";
import { useSite } from "./SiteProvider";
import { CountUp } from "./CountUp";

function splitChars(text: string) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="gb-hero-char"
      style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
    >
      {char === " " ? " " : char}
    </span>
  ));
}

export function Hero() {
  const { t, goTo } = useSite();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll<HTMLElement>(".gb-hero-anim, .gb-hero-char").forEach(
        (n) => { n.style.opacity = "1"; n.style.transform = "none"; }
      );
      return;
    }

    import("gsap").then(({ gsap }) => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          ".gb-hero-badge",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55 }
        )
          .fromTo(
            ".gb-hero-char",
            { opacity: 0, y: "60%", rotateX: -30 },
            { opacity: 1, y: 0, rotateX: 0, duration: 0.65, stagger: 0.025 },
            "-=0.25"
          )
          .fromTo(
            ".gb-hero-anim.lead",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.35"
          )
          .fromTo(
            ".gb-hero-anim.cta",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.55 },
            "-=0.4"
          )
          .fromTo(
            ".gb-stat",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.1 },
            "-=0.35"
          );
      }, el);

      return () => ctx.revert();
    });
  }, []);

  const title1 = t("hero.title1");
  const title2 = t("hero.title2");

  return (
    <section
      id="s-top"
      className="gb-hero"
      data-reveal
      data-shown
      ref={heroRef as React.RefObject<HTMLElement>}
    >
      <span className="gb-orb a" />
      <span className="gb-orb b" />

      <span className="gb-hero-badge">
        <span className="pulse" />
        <span className="gb-eyebrow" style={{ color: "var(--muted)" }}>
          {t("hero.eyebrow")}
        </span>
      </span>

      <h1 className="gb-h1" style={{ perspective: "600px" }}>
        <span style={{ display: "block" }}>{splitChars(title1)}</span>
        <span className="grad" style={{ display: "block" }}>
          {splitChars(title2)}
        </span>
      </h1>

      <p className="gb-hero-anim lead">{t("hero.lead")}</p>

      <div className="gb-cta-row gb-hero-anim cta">
        <button className="gb-btn-primary" onClick={() => goTo("s-kontakt")}>
          {t("hero.cta1")}
        </button>
        <button className="gb-btn-ghost" onClick={() => goTo("s-real")}>
          {t("hero.cta2")}
        </button>
      </div>

      <div className="gb-stats">
        <div className="gb-stat">
          <span className="num">
            <CountUp to={3} />+
          </span>
          <span className="lbl">{t("hero.stat1")}</span>
        </div>
        <div className="gb-stat">
          <span className="num">
            <CountUp to={12} />
          </span>
          <span className="lbl">{t("hero.stat2")}</span>
        </div>
        <div className="gb-stat">
          <span className="num">
            <CountUp to={100} suffix="%" />
          </span>
          <span className="lbl">{t("hero.stat3")}</span>
        </div>
      </div>
    </section>
  );
}
