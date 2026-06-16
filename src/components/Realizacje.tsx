"use client";

import { useSite } from "./SiteProvider";
import { Reveal } from "./Reveal";
import { projects } from "@/lib/site";
import type { DictKey } from "@/lib/i18n";

export function Realizacje() {
  const { t } = useSite();

  return (
    <Reveal id="s-real" className="gb-section">
      <span className="gb-eyebrow">{t("real.eyebrow")}</span>
      <h2 className="gb-h2">{t("real.title")}</h2>

      <div style={{ marginTop: 16 }}>
        {projects.map((p) => {
          const domain = p.url.replace(/^https?:\/\//, "");
          return (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gb-portfolio-card"
            >
              <div className="gb-browser">
                <div className="gb-browser-bar">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="url">{domain}</span>
                </div>
                <div className="gb-browser-shot">{p.name}</div>
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
            </a>
          );
        })}
      </div>
    </Reveal>
  );
}
