"use client";

import { useState } from "react";
import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

// Aby podłączyć realną wysyłkę: ustaw FORM_ENDPOINT (np. Formspree)
// i odkomentuj fetch() w handleSubmit.
const FORM_ENDPOINT = "";

export function Kontakt() {
  const { t } = useSite();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

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
        // best-effort; pokaż sukces mimo to
      } finally {
        setSending(false);
      }
    }
    setSent(true);
  }

  return (
    <Reveal id="s-kontakt" className="gb-section">
      <span className="gb-eyebrow">{t("contact.eyebrow")}</span>
      <h2 className="gb-h2">{t("contact.title")}</h2>
      <p className="gb-sub">{t("contact.sub")}</p>

      <div className="gb-contact">
        <span className="orb" />
        {sent ? (
          <div className="gb-success">
            <div className="check">✓</div>
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
              />
            </div>
            <button
              type="submit"
              className="gb-btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              disabled={sending}
            >
              {sending ? "…" : t("contact.send")}
            </button>
          </form>
        )}

        <div className="gb-contact-direct">
          <a href={`mailto:${site.email}`}>✉ {site.email}</a>
          <a href={`tel:${site.phoneHref}`}>☎ {site.phone}</a>
        </div>
      </div>
    </Reveal>
  );
}
