"use client";

import { useSite } from "./SiteProvider";
import { site } from "@/lib/site";

export function Footer() {
  const { t, goTo } = useSite();
  const year = 2026;

  return (
    <footer className="gb-footer">
      <div className="brand">
        <span className="diamond" style={{
          width: 16,
          height: 16,
          borderRadius: 4,
          transform: "rotate(45deg)",
          background: "linear-gradient(135deg,var(--accent),var(--accent2))",
          boxShadow: "0 0 16px rgba(var(--accent-rgb),.6)",
          display: "inline-block",
        }} />
        <span>
          GRAND<span style={{ color: "var(--accent)" }}>BIZNES</span>
        </span>
      </div>
      <p>{t("footer.desc")}</p>

      <div className="gb-footer-links">
        <button onClick={() => goTo("s-real")}>{t("footer.work")}</button>
        <button onClick={() => goTo("s-sys")}>{t("footer.systems")}</button>
        <button onClick={() => goTo("s-price")}>{t("footer.pricing")}</button>
        <button onClick={() => goTo("s-kontakt")}>{t("footer.contact")}</button>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">
          {t("footer.ig")}
        </a>
      </div>

      <div className="copy">
        © {year} GrandBiznes. {t("footer.rights")}
      </div>
    </footer>
  );
}
