"use client";

import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import { systems } from "@/lib/systemsData";
import { getSandboxPkg, sandboxSummary } from "@/lib/sandboxPricing";
import type { DictKey } from "@/lib/i18n";

const PKG_KEYS: Record<string, DictKey> = {
  wizytowka: "sandbox.pkg.wizytowka",
  biznes: "sandbox.pkg.biznes",
  premium: "sandbox.pkg.premium",
};

export function Sandbox() {
  const { t, lang, goTo, sandboxModules, setSandboxModules } = useSite();

  const toggle = useCallback(
    (key: string) => {
      setSandboxModules(
        sandboxModules.includes(key)
          ? sandboxModules.filter((k) => k !== key)
          : [...sandboxModules, key]
      );
    },
    [sandboxModules, setSandboxModules]
  );

  const pkg = getSandboxPkg(sandboxModules);
  const pkgName = pkg ? t(PKG_KEYS[pkg.tier]) : "";

  const handleSend = () => {
    goTo("s-kontakt");
  };

  const nextTipKey: DictKey | null =
    pkg?.tier === "wizytowka"
      ? "sandbox.nextBiznes"
      : pkg?.tier === "biznes" && pkg.remaining === 1
      ? "sandbox.nextPremium1"
      : pkg?.tier === "biznes"
      ? "sandbox.nextPremium2"
      : null;

  return (
    <Reveal id="s-sandbox" className="gb-section">
      <span className="gb-eyebrow">{t("sandbox.eyebrow")}</span>
      <h2 className="gb-h2">{t("sandbox.title")}</h2>
      <p className="gb-sub">{t("sandbox.sub")}</p>

      <div className="gb-sandbox">
        {/* ── moduły do wyboru ── */}
        <div className="gb-sandbox-modules">
          {systems.map((s) => {
            const isOn = sandboxModules.includes(s.key);
            return (
              <motion.button
                key={s.key}
                className={`gb-sandbox-tile${isOn ? " gb-sandbox-tile--on" : ""}`}
                onClick={() => toggle(s.key)}
                whileTap={{ scale: 0.9 }}
                aria-pressed={isOn}
              >
                <span className="icon">{s.icon}</span>
                <span className="label">{s.title[lang]}</span>
                <motion.span
                  className="check"
                  initial={false}
                  animate={{ scale: isOn ? 1 : 0, opacity: isOn ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 28 }}
                  aria-hidden="true"
                >
                  ✓
                </motion.span>
              </motion.button>
            );
          })}
        </div>

        {/* ── podgląd + wycena ── */}
        <div className="gb-sandbox-right">
          {/* mockup */}
          <div className="gb-sandbox-mockup">
            <div className="gb-sandbox-mock-bar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="mock-url">grandbiznes.pl / twoja-strona</span>
            </div>
            <div className="gb-sandbox-mock-body">
              <div className="gb-sandbox-mock-hero">
                <span>{t("sandbox.preview")}</span>
              </div>

              <AnimatePresence initial={false}>
                {sandboxModules.map((key) => {
                  const sys = systems.find((s) => s.key === key);
                  if (!sys) return null;
                  return (
                    <motion.div
                      key={key}
                      className="gb-sandbox-mock-block"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <span className="block-icon">{sys.icon}</span>
                      <span className="block-label">{sys.title[lang]}</span>
                      <button
                        className="block-remove"
                        onClick={() => toggle(key)}
                        aria-label={`Usun ${sys.title[lang]}`}
                      >
                        ×
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {sandboxModules.length === 0 && (
                <div className="gb-sandbox-mock-empty">{t("sandbox.empty")}</div>
              )}
            </div>
          </div>

          {/* price card */}
          <div className="gb-sandbox-price">
            {pkg ? (
              <>
                <div className="price-header">
                  <div>
                    <div className="gb-eyebrow" style={{ marginBottom: 4 }}>
                      {pkgName}
                    </div>
                    <div className="price-row">
                      <span className="price-from">{t("sandbox.from")}</span>
                      <motion.span
                        key={pkg.price}
                        className="price-val"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        {pkg.price.toLocaleString("pl-PL")} zl
                      </motion.span>
                    </div>
                  </div>
                  {sandboxModules.length > 0 && (
                    <button
                      className="price-reset"
                      onClick={() => setSandboxModules([])}
                    >
                      {t("sandbox.reset")}
                    </button>
                  )}
                </div>

                {nextTipKey && (
                  <motion.p
                    key={nextTipKey}
                    className="price-tip"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t(nextTipKey)}
                  </motion.p>
                )}

                <p
                  style={{
                    fontSize: 10.5,
                    color: "var(--muted)",
                    margin: "6px 0 14px",
                    opacity: 0.7,
                  }}
                >
                  {t("price.note")}
                </p>

                <button
                  className="gb-btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={handleSend}
                >
                  {t("sandbox.send")} →
                </button>
                <p className="price-sub">{t("sandbox.sendSub")}</p>
              </>
            ) : (
              <div className="price-placeholder">
                <span style={{ fontSize: 22, opacity: 0.3 }}>&#8771;</span>
                <p style={{ color: "var(--muted)", fontSize: 12.5, margin: "8px 0 0" }}>
                  {t("sandbox.sub")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
