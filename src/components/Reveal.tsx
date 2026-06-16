"use client";

import { useEffect, useRef } from "react";

export function Reveal({
  children,
  id,
  className,
  as: Tag = "section",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  as?: "section" | "div";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-shown", "");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag with ref
    <Tag id={id} ref={ref} data-reveal className={className}>
      {children}
    </Tag>
  );
}
