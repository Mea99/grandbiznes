"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hide system cursor only after our cursor is ready
    document.documentElement.classList.add("gb-cursor-active");
    dot.style.opacity = "1";
    ring.style.opacity = reduced ? "0" : "1";

    if (reduced) {
      const onMove = (e: MouseEvent) => {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => {
        window.removeEventListener("mousemove", onMove);
        document.documentElement.classList.remove("gb-cursor-active");
      };
    }

    let ringX = -100;
    let ringY = -100;
    let targetX = -100;
    let targetY = -100;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      ringX = lerp(ringX, targetX, 0.1);
      ringY = lerp(ringY, targetY, 0.1);
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [role='button']")) {
        ring.classList.add("gb-cursor-ring--active");
      } else {
        ring.classList.remove("gb-cursor-ring--active");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("gb-cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="gb-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="gb-cursor-ring" aria-hidden="true" />
    </>
  );
}
