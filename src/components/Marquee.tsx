"use client";

const ITEMS = [
  "Strony",
  "Sklepy",
  "Rezerwacje",
  "Lojalność",
  "Newsletter",
  "Panel gracza",
  "AI",
];

export function Marquee() {
  // duplicated content for a seamless loop
  const seq = [...ITEMS, ...ITEMS];
  return (
    <div className="gb-marquee" aria-hidden="true">
      <div className="gb-marquee-track">
        {seq.map((it, i) => (
          <span key={i}>
            {it}
            <span className="sep" style={{ marginLeft: 14 }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
