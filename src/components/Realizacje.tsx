"use client";

import { useEffect, useRef } from "react";
import { useSite } from "./SiteProvider";
import { projects } from "@/lib/site";
import type { DictKey } from "@/lib/i18n";

export function Realizacje() {
  const { t } = useSite();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = el.querySelectorAll<HTMLElement>(".gb-real-card");

        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 70 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              delay: i * 0.08,
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );

          const shot = card.querySelector<HTMLElement>(".gb-real-img");
          if (shot) {
            gsap.fromTo(
              shot,
              { scale: 1.08 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.6,
                },
              }
            );
          }
        });
      }, el);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup?.();
  }, []);

  return (
    <section
      id="s-real"
      className="gb-section"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <span className="gb-eyebrow">{t("real.eyebrow")}</span>
      <h2 className="gb-h2">{t("real.title")}</h2>

      <div className="gb-portfolio-grid" style={{ marginTop: 20 }}>
        {projects.map((p) => {
          const domain = p.url.replace(/^https?:\/\//, "");
          return (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gb-portfolio-card gb-real-card"
            >
              <div className="gb-browser">
                <div className="gb-browser-bar">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="url">{domain}</span>
                </div>
                <div className="gb-browser-shot" style={{ overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="gb-real-img"
                    src={p.shot}
                    alt={`Podglad strony ${p.name}`}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="body">
                <h3 className="title">{p.name}</h3>
                <p className="desc">{t(p.descKey as DictKey)}</p>
                <div className="gb-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="gb-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="gb-real-arrow">&#x2192;</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
