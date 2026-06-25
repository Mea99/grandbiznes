"use client";

import { useEffect, useState } from "react";
import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import { systems } from "@/lib/systemsData";
import { getSandboxPkg, sandboxSummary } from "@/lib/sandboxPricing";
import type { DictKey } from "@/lib/i18n";

const FORM_ENDPOINT = "";

const PKG_NAMES: Record<string, DictKey> = {
  wizytowka: "sandbox.pkg.wizytowka",
  biznes: "sandbox.pkg.biznes",
  premium: "sandbox.pkg.premium",
};

export function Kontakt() {
  const { t, lang, sandboxModules } = useSite();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  // Pre-fill message when sandbox config arrives
  useEffect(() => {
    if (sandboxModules.length === 0) return;
    const pkg = getSandboxPkg(sandboxModules);
    if (!pkg) return;
    const titles = Object.fromEntries(
      systems.map((s) => [s.key, s.title[lang]])
    );
    const pkgName = t(PKG_NAMES[pkg.tier]);
    setMessage(sandboxSummary(sandboxModules, titles, pkgName, pkg.price));
  }, [sandboxModules, lang, t]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (FORM_ENDPOINT) {
      setSending(true);
      try {
        const data = new FormData(e.currentTarget);
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
      } catch {
        // best-effort
      } finally {
        setSending(false);
      }
    }
    setSent(true);
  }

  const pkg = getSandboxPkg(sandboxModules);

  return (
    <Reveal id="s-kontakt" className="gb-section">
      <span className="gb-eyebrow">{t("contact.eyebrow")}</span>
      <h2 className="gb-h2">{t("contact.title")}</h2>
      <p className="gb-sub">{t("contact.sub")}</p>

      <div className="gb-contact">
        <span className="orb" />

        {/* Sandbox config banner */}
        {sandboxModules.length > 0 && pkg && !sent && (
          <div className="gb-sandbox-cfg-banner">
            <div className="banner-top">
              <span className="gb-eyebrow">{t("sandbox.cfgLabel")}</span>
              <span className="banner-price">
                {t(PKG_NAMES[pkg.tier])} &mdash; {t("sandbox.from")}{" "}
                {pkg.price.toLocaleString("pl-PL")} zl
              </span>
            </div>
            <div className="banner-tags">
              {sandboxModules.map((key) => {
                const sys = systems.find((s) => s.key === key);
                return sys ? (
                  <span key={key} className="gb-tag">
                    {sys.icon} {sys.title[lang]}
                  </span>
                ) : null;
              })}
            </div>
            <p className="banner-note">{t("sandbox.cfgNote")}</p>
          </div>
        )}

        {sent ? (
          <div className="gb-success">
            <div className="check">&#10003;</div>
            <h3 style={{ fontFamily: "var(--fd)", margin: "0 0 6px" }}>
              {t("contact.okTitle")}
            </h3>
            <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 16px" }}>
              {t("contact.okSub")}
            </p>
            <button className="gb-btn-sm ghost" onClick={() => setSent(false)}>
              {t("contact.again")}
            </button>
          </div>
        ) : (
          <form className="gb-form" onSubmit={handleSubmit}>
            <div>
              <label className="gb-label" htmlFor="c-name">
                {t("contact.name")}
              </label>
              <input id="c-name" name="name" className="gb-input" required />
            </div>
            <div>
              <label className="gb-label" htmlFor="c-email">
                {t("contact.email")}
              </label>
              <input
                id="c-email"
                name="email"
                type="email"
                className="gb-input"
                required
              />
            </div>
            <div>
              <label className="gb-label" htmlFor="c-type">
                {t("contact.type")}
              </label>
              <select id="c-type" name="type" className="gb-input">
                <option>{t("contact.type1")}</option>
                <option>{t("contact.type2")}</option>
                <option>{t("contact.type3")}</option>
                <option>{t("contact.type4")}</option>
              </select>
            </div>
            <div>
              <label className="gb-label" htmlFor="c-msg">
                {t("contact.msg")}
              </label>
              <textarea
                id="c-msg"
                name="message"
                className="gb-input"
                placeholder={t("contact.msgph")}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ minHeight: message ? 120 : 88 }}
              />
            </div>
            <div className="gb-contact-submit-row">
              <button
                type="submit"
                className="gb-btn-primary"
                style={{ flex: 1, justifyContent: "center" }}
                disabled={sending}
              >
                {sending ? "..." : t("contact.send")}
              </button>
              <span className="gb-response-badge">
                &#9201; {t("contact.response")}
              </span>
            </div>
          </form>
        )}

        <div className="gb-contact-direct">
          <a href={`mailto:${site.email}`}>&#x2709; {site.email}</a>
          <a href={`tel:${site.phoneHref}`}>&#9990; {site.phone}</a>
        </div>
      </div>
    </Reveal>
  );
}
