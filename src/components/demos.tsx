"use client";

import { useEffect, useRef, useState } from "react";
import { useSite } from "./SiteProvider";
import type { Lang } from "@/lib/i18n";
import type { SystemKey } from "@/lib/systemsData";

const L = (lang: Lang, pl: string, en: string) => (lang === "pl" ? pl : en);

/* ---------------- 1. Sklep ---------------- */
function DemoSklep({ lang }: { lang: Lang }) {
  const products = [
    { id: "p1", name: L(lang, "Koszulka Premium", "Premium tee"), price: 89 },
    { id: "p2", name: L(lang, "Bluza z kapturem", "Hoodie"), price: 169 },
  ];
  const [cart, setCart] = useState<Record<string, number>>({});
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = products.reduce((s, p) => s + (cart[p.id] || 0) * p.price, 0);

  return (
    <div>
      {products.map((p) => (
        <div key={p.id} className="gb-demo-card gb-row">
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{p.name}</div>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>{p.price} zł</div>
          </div>
          <button
            className="gb-btn-sm"
            onClick={() => setCart((c) => ({ ...c, [p.id]: (c[p.id] || 0) + 1 }))}
          >
            {L(lang, "Dodaj", "Add")}
          </button>
        </div>
      ))}

      <div
        className="gb-demo-card"
        style={{ position: "sticky", bottom: 0, marginBottom: 0 }}
      >
        <div className="gb-row" style={{ marginBottom: 12 }}>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>
            {L(lang, "Koszyk", "Cart")} · {count}{" "}
            {L(lang, "szt.", "items")}
          </span>
          <strong style={{ fontFamily: "var(--fd)", fontSize: 18 }}>
            {total} zł
          </strong>
        </div>
        <button
          className="gb-btn-primary"
          style={{ width: "100%", justifyContent: "center", opacity: count ? 1 : 0.5 }}
          disabled={!count}
        >
          {L(lang, "Do kasy — Przelewy24 / BLIK", "Checkout — Przelewy24 / BLIK")}
        </button>
      </div>
    </div>
  );
}

/* ---------------- 2. Lojalność ---------------- */
function DemoLojalnosc({ lang }: { lang: Lang }) {
  const [pts, setPts] = useState(150);
  const goal = 500;
  const reached = pts >= goal;
  return (
    <div>
      <div className="gb-demo-card" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--fd)", fontSize: 46, color: "var(--accent)", lineHeight: 1 }}>
          {pts}
        </div>
        <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 4 }}>
          {L(lang, "Twoje punkty", "Your points")}
        </div>
        <div className="gb-progress" style={{ margin: "16px 0 8px" }}>
          <i style={{ width: `${Math.min(100, (pts / goal) * 100)}%` }} />
        </div>
        <div style={{ color: "var(--muted)", fontSize: 11 }}>
          {Math.min(pts, goal)} / {goal}
        </div>
      </div>

      {reached ? (
        <div className="gb-demo-card" style={{ textAlign: "center", borderColor: "var(--accent)" }}>
          <div style={{ fontSize: 30 }}>🎁</div>
          <div style={{ fontWeight: 700, margin: "6px 0 2px" }}>
            {L(lang, "Nagroda odblokowana!", "Reward unlocked!")}
          </div>
          <div style={{ color: "var(--muted)", fontSize: 13 }}>
            {L(lang, "Darmowa dostawa", "Free shipping")}
          </div>
        </div>
      ) : (
        <button
          className="gb-btn-primary"
          style={{ width: "100%", justifyContent: "center" }}
          onClick={() => setPts((p) => Math.min(goal, p + 50))}
        >
          + 50 {L(lang, "punktów", "points")}
        </button>
      )}
    </div>
  );
}

/* ---------------- 3. Newsletter ---------------- */
function DemoNewsletter({ lang }: { lang: Lang }) {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(1248);
  return (
    <div>
      {done ? (
        <div className="gb-success">
          <div className="check">✓</div>
          <div style={{ fontWeight: 700 }}>{L(lang, "Zapisano!", "Subscribed!")}</div>
          <p style={{ color: "var(--muted)", fontSize: 13 }}>
            {L(lang, "Sprawdź skrzynkę e-mail.", "Check your inbox.")}
          </p>
        </div>
      ) : (
        <form
          className="gb-demo-card"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
            setCount((c) => c + 1);
          }}
        >
          <label className="gb-label">{L(lang, "Twój e-mail", "Your e-mail")}</label>
          <input className="gb-input" type="email" required placeholder="ty@email.pl" />
          <button className="gb-btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 12 }}>
            {L(lang, "Zapisz się", "Subscribe")}
          </button>
        </form>
      )}
      <div style={{ textAlign: "center", color: "var(--muted)", fontSize: 12 }}>
        <strong style={{ color: "var(--accent)" }}>{count.toLocaleString("pl-PL")}</strong>{" "}
        {L(lang, "subskrybentów", "subscribers")}
      </div>
    </div>
  );
}

/* ---------------- 4. Rezerwacje ---------------- */
function DemoRezerwacje({ lang }: { lang: Lang }) {
  const slots = ["10:00", "11:30", "13:00", "15:30", "17:00"];
  const [picked, setPicked] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <div className="gb-success">
        <div className="check">✓</div>
        <div style={{ fontWeight: 700 }}>{L(lang, "Rezerwacja potwierdzona", "Booking confirmed")}</div>
        <p style={{ color: "var(--muted)", fontSize: 13 }}>
          {L(lang, "Strzyżenie męskie", "Men's haircut")} · {picked}
        </p>
        <button className="gb-btn-sm ghost" onClick={() => { setConfirmed(false); setPicked(null); }}>
          {L(lang, "Zarezerwuj ponownie", "Book again")}
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="gb-demo-card gb-row">
        <div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>
            {L(lang, "Strzyżenie męskie", "Men's haircut")}
          </div>
          <div style={{ color: "var(--muted)", fontSize: 12.5 }}>45 min · 100 zł</div>
        </div>
      </div>
      <label className="gb-label">{L(lang, "Wybierz termin", "Pick a time")}</label>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 14 }}>
        {slots.map((s) => (
          <button
            key={s}
            className="gb-btn-sm ghost"
            style={picked === s ? { borderColor: "var(--accent)", color: "var(--accent)" } : undefined}
            onClick={() => setPicked(s)}
          >
            {s}
          </button>
        ))}
      </div>
      <button
        className="gb-btn-primary"
        style={{ width: "100%", justifyContent: "center", opacity: picked ? 1 : 0.5 }}
        disabled={!picked}
        onClick={() => setConfirmed(true)}
      >
        {L(lang, "Zarezerwuj", "Book now")}
      </button>
    </div>
  );
}

/* ---------------- 5. Panel użytkownika ---------------- */
function DemoPanel({ lang }: { lang: Lang }) {
  const [logged, setLogged] = useState(false);
  const orders = [
    { id: "#1042", v: "189 zł", s: L(lang, "Wysłane", "Shipped") },
    { id: "#1039", v: "89 zł", s: L(lang, "Dostarczone", "Delivered") },
  ];
  if (!logged) {
    return (
      <form
        className="gb-demo-card"
        onSubmit={(e) => {
          e.preventDefault();
          setLogged(true);
        }}
      >
        <label className="gb-label">{L(lang, "E-mail", "E-mail")}</label>
        <input className="gb-input" type="email" defaultValue="jan@email.pl" required />
        <label className="gb-label" style={{ marginTop: 12 }}>
          {L(lang, "Hasło", "Password")}
        </label>
        <input className="gb-input" type="password" defaultValue="******" required />
        <button className="gb-btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 14 }}>
          {L(lang, "Zaloguj się", "Log in")}
        </button>
      </form>
    );
  }
  return (
    <div>
      <div className="gb-demo-card">
        <div style={{ fontWeight: 700, fontSize: 15 }}>
          {L(lang, "Cześć, Jan 👋", "Hi, Jan 👋")}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: 12 }}>
          {[
            ["450", L(lang, "punktów", "points")],
            ["8", L(lang, "zamówień", "orders")],
            ["2", L(lang, "kupony", "coupons")],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center", padding: 10, borderRadius: 12, background: "var(--panel)", border: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "var(--fd)", fontSize: 20, color: "var(--accent)" }}>{n}</div>
              <div style={{ fontSize: 10, color: "var(--muted)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <label className="gb-label">{L(lang, "Ostatnie zamówienia", "Recent orders")}</label>
      {orders.map((o) => (
        <div key={o.id} className="gb-demo-card gb-row">
          <span style={{ fontWeight: 700 }}>{o.id}</span>
          <span style={{ color: "var(--muted)", fontSize: 13 }}>{o.v}</span>
          <span className="gb-pill">{o.s}</span>
        </div>
      ))}
      <button className="gb-btn-sm ghost" style={{ width: "100%" }} onClick={() => setLogged(false)}>
        {L(lang, "Wyloguj", "Log out")}
      </button>
    </div>
  );
}

/* ---------------- 6. Blog ---------------- */
function DemoBlog({ lang }: { lang: Lang }) {
  const posts = [
    {
      date: "12.06.2026",
      title: L(lang, "5 błędów na stronie firmowej", "5 mistakes on a business site"),
      body: L(
        lang,
        "Wolne ładowanie, brak mobile, słabe CTA… Sprawdź, czy Twoja strona ich nie popełnia i jak je naprawić w godzinę.",
        "Slow loading, no mobile, weak CTA… See if your site makes them and how to fix them in an hour."
      ),
    },
    {
      date: "03.06.2026",
      title: L(lang, "Po co sklepowi lojalność?", "Why a store needs loyalty"),
      body: L(
        lang,
        "Punkty i nagrody potrafią podnieść powracalność klientów o kilkadziesiąt procent. Oto jak to wdrożyć z głową.",
        "Points and rewards can lift returning customers by tens of percent. Here's how to do it right."
      ),
    },
    {
      date: "28.05.2026",
      title: L(lang, "Mobile-first w praktyce", "Mobile-first in practice"),
      body: L(
        lang,
        "Większość ruchu to telefony. Pokazuję, jak projektować od najmniejszego ekranu i nie żałować później.",
        "Most traffic is phones. I show how to design from the smallest screen up."
      ),
    },
  ];
  const [open, setOpen] = useState<number | null>(null);

  if (open !== null) {
    const p = posts[open];
    return (
      <div>
        <button className="gb-btn-sm ghost" style={{ marginBottom: 14 }} onClick={() => setOpen(null)}>
          ← {L(lang, "Wróć do listy", "Back to list")}
        </button>
        <div style={{ color: "var(--muted)", fontSize: 11, marginBottom: 6 }}>{p.date}</div>
        <h3 style={{ fontFamily: "var(--fd)", fontSize: 20, margin: "0 0 12px" }}>{p.title}</h3>
        <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>{p.body}</p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((p, i) => (
        <button
          key={i}
          className="gb-demo-card"
          style={{ display: "block", width: "100%", textAlign: "left", cursor: "pointer" }}
          onClick={() => setOpen(i)}
        >
          <div style={{ color: "var(--muted)", fontSize: 11, marginBottom: 4 }}>{p.date}</div>
          <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 6 }}>{p.title}</div>
          <span className="gb-sys-tile" style={{ all: "unset", color: "var(--accent)", fontFamily: "var(--fe)", fontSize: 11 }}>
            {L(lang, "Czytaj →", "Read →")}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ---------------- 7. Kody rabatowe ---------------- */
function DemoKody({ lang }: { lang: Lang }) {
  const [val, setVal] = useState("");
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);
  const [left, setLeft] = useState(360); // 6:00

  useEffect(() => {
    if (!ok) return;
    const id = setInterval(() => setLeft((l) => (l > 0 ? l - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [ok]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  function check() {
    if (val.trim().toUpperCase() === "MUNDIAL") {
      setOk(true);
      setErr(false);
      setLeft(360);
    } else {
      setErr(true);
      setOk(false);
    }
  }

  if (ok) {
    return (
      <div className="gb-demo-card" style={{ textAlign: "center", borderColor: "var(--accent)" }}>
        <div style={{ fontFamily: "var(--fd)", fontSize: 40, color: "var(--accent)" }}>−10%</div>
        <div style={{ color: "var(--muted)", fontSize: 13, margin: "4px 0 12px" }}>
          {L(lang, "Kod aktywny — rabat naliczony", "Code active — discount applied")}
        </div>
        <div className="gb-pill" style={{ fontSize: 13 }}>
          ⏱ {mm}:{ss}
        </div>
      </div>
    );
  }

  return (
    <div className="gb-demo-card">
      <label className="gb-label">{L(lang, "Kod rabatowy", "Discount code")}</label>
      <input
        className="gb-input"
        placeholder={L(lang, "Wpisz kod (np. MUNDIAL)", "Enter code (e.g. MUNDIAL)")}
        value={val}
        onChange={(e) => { setVal(e.target.value); setErr(false); }}
      />
      {err && (
        <div style={{ color: "#ff7a7a", fontSize: 12, marginTop: 8 }}>
          {L(lang, "Nieprawidłowy kod. Spróbuj „MUNDIAL”.", "Invalid code. Try “MUNDIAL”.")}
        </div>
      )}
      <button className="gb-btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 12 }} onClick={check}>
        {L(lang, "Aktywuj", "Apply")}
      </button>
    </div>
  );
}

/* ---------------- 8. Śledzenie ruchu ---------------- */
function DemoRuch({ lang }: { lang: Lang }) {
  const [online, setOnline] = useState(23);
  const [visits, setVisits] = useState(1487);
  const days = lang === "pl"
    ? ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"]
    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const series = [42, 58, 49, 71, 66, 88, 95];

  useEffect(() => {
    const id = setInterval(() => {
      setOnline((o) => Math.max(8, o + Math.floor(Math.random() * 7) - 3));
      setVisits((v) => v + Math.floor(Math.random() * 3));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const max = Math.max(...series);

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
        <div className="gb-demo-card" style={{ margin: 0, textAlign: "center" }}>
          <div style={{ fontFamily: "var(--fd)", fontSize: 30, color: "var(--accent)" }}>{online}</div>
          <div style={{ fontSize: 11, color: "var(--muted)" }}>
            <span className="gb-pill" style={{ padding: "2px 8px" }}>● {L(lang, "Teraz online", "Online now")}</span>
          </div>
        </div>
        <div className="gb-demo-card" style={{ margin: 0, textAlign: "center" }}>
          <div style={{ fontFamily: "var(--fd)", fontSize: 30 }}>{visits.toLocaleString("pl-PL")}</div>
          <div style={{ fontSize: 11, color: "var(--muted)" }}>{L(lang, "Odwiedzin dziś", "Visits today")}</div>
        </div>
      </div>
      <div className="gb-demo-card" style={{ margin: 0 }}>
        <div className="gb-bars">
          {series.map((v, i) => (
            <div key={i} style={{ flex: 1 }}>
              <div className="bar" style={{ height: `${(v / max) * 100}%` }} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 7, marginTop: 6 }}>
          {days.map((d) => (
            <div key={d} className="lbl" style={{ flex: 1, fontSize: 9, color: "var(--muted)", textAlign: "center" }}>
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- 9. Live powiadomienia ---------------- */
function DemoLive({ lang }: { lang: Lang }) {
  const [on, setOn] = useState(false);
  const [notifs, setNotifs] = useState<{ id: number; name: string; product: string }[]>([]);
  const idRef = useRef(0);

  const names = ["Anna", "Piotr", "Kasia", "Marek", "Ola", "Tomek"];
  const products = lang === "pl"
    ? ["Koszulkę Premium", "Bluzę", "Voucher", "Mystery Box"]
    : ["a Premium tee", "a Hoodie", "a Voucher", "a Mystery Box"];

  useEffect(() => {
    if (!on) return;
    const push = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      idRef.current += 1;
      const id = idRef.current;
      setNotifs((n) => [{ id, name, product }, ...n].slice(0, 4));
    };
    push();
    const iv = setInterval(push, 2600);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, lang]);

  return (
    <div>
      <button
        className={on ? "gb-btn-sm ghost" : "gb-btn-primary"}
        style={{ width: "100%", justifyContent: "center", marginBottom: 14 }}
        onClick={() => { setOn(!on); if (on) setNotifs([]); }}
      >
        {on ? L(lang, "Wyłącz demo", "Stop demo") : L(lang, "Włącz demo", "Start demo")}
      </button>
      <div>
        {notifs.map((n) => (
          <div key={n.id} className="gb-notif">
            <span className="gb-avatar" style={{ width: 30, height: 30, fontSize: 13 }}>
              {n.name.charAt(0)}
            </span>
            <div style={{ fontSize: 12.5 }}>
              <strong>{n.name}</strong>{" "}
              {L(lang, "właśnie kupił(a)", "just bought")} <strong>{n.product}</strong>
              <div style={{ color: "var(--muted)", fontSize: 10.5 }}>
                {L(lang, "przed chwilą", "just now")}
              </div>
            </div>
          </div>
        ))}
        {on && notifs.length === 0 && (
          <div style={{ color: "var(--muted)", fontSize: 12, textAlign: "center" }}>…</div>
        )}
      </div>
    </div>
  );
}

/* ---------------- 10. Mystery Box ---------------- */
function DemoMystery({ lang }: { lang: Lang }) {
  const rewards = lang === "pl"
    ? ["−15% rabatu", "Darmowa dostawa", "Voucher 50 zł", "Gratis do zamówienia", "100 punktów"]
    : ["−15% off", "Free shipping", "50 zł voucher", "Free gift", "100 points"];
  const [spin, setSpin] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  function open() {
    if (spin) return;
    setSpin(true);
    setResult(null);
    setTimeout(() => {
      setSpin(false);
      setResult(rewards[Math.floor(Math.random() * rewards.length)]);
    }, 950);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div className="gb-box" data-spin={spin} onClick={open} role="button">
        {spin ? "🎁" : result ? "✨" : "📦"}
      </div>
      {spin && <div style={{ color: "var(--muted)", fontSize: 13 }}>{L(lang, "Otwieram…", "Opening…")}</div>}
      {result && !spin && (
        <div className="gb-demo-card" style={{ borderColor: "var(--accent)" }}>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>{L(lang, "Wygrałeś:", "You won:")}</div>
          <div style={{ fontFamily: "var(--fd)", fontSize: 22, color: "var(--accent)", margin: "4px 0" }}>
            {result}
          </div>
        </div>
      )}
      {!spin && (
        <button className="gb-btn-primary" style={{ marginTop: 8 }} onClick={open}>
          {result ? L(lang, "Otwórz ponownie", "Open again") : L(lang, "Otwórz box", "Open box")}
        </button>
      )}
    </div>
  );
}

/* ---------------- 11. Opinie ---------------- */
function DemoOpinie({ lang }: { lang: Lang }) {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [reviews, setReviews] = useState<{ r: number; t: string; who: string }[]>([
    { r: 5, t: L(lang, "Super obsługa, polecam!", "Great service, recommended!"), who: "Ewa" },
  ]);

  function add() {
    if (!rating || !text.trim()) return;
    setReviews((rv) => [{ r: rating, t: text.trim(), who: L(lang, "Ty", "You") }, ...rv]);
    setText("");
    setRating(0);
  }

  return (
    <div>
      <div className="gb-demo-card">
        <label className="gb-label">{L(lang, "Twoja ocena", "Your rating")}</label>
        <div className="gb-stars">
          {[1, 2, 3, 4, 5].map((s) => (
            <button key={s} data-on={s <= rating} onClick={() => setRating(s)} aria-label={`${s}`}>
              ★
            </button>
          ))}
        </div>
        <textarea
          className="gb-input"
          style={{ marginTop: 10, minHeight: 60, resize: "vertical" }}
          placeholder={L(lang, "Napisz opinię…", "Write a review…")}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="gb-btn-primary"
          style={{ width: "100%", justifyContent: "center", marginTop: 10, opacity: rating && text.trim() ? 1 : 0.5 }}
          onClick={add}
          disabled={!rating || !text.trim()}
        >
          {L(lang, "Dodaj opinię", "Add review")}
        </button>
      </div>

      {reviews.map((rv, i) => (
        <div key={i} className="gb-demo-card">
          <div className="gb-stars" style={{ fontSize: 15 }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} style={{ color: s <= rv.r ? "var(--accent)" : "var(--muted)" }}>★</span>
            ))}
          </div>
          <div style={{ fontSize: 13, margin: "8px 0 6px" }}>{rv.t}</div>
          <div style={{ color: "var(--muted)", fontSize: 11 }}>— {rv.who}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- 12. Wielojęzyczność ---------------- */
function DemoJezyki() {
  const [l, setL] = useState<"pl" | "en" | "de">("pl");
  const data = {
    pl: { t: "Witaj w naszym sklepie", s: "Najlepsze produkty w jednym miejscu", c: "Kup teraz" },
    en: { t: "Welcome to our store", s: "The best products in one place", c: "Buy now" },
    de: { t: "Willkommen in unserem Shop", s: "Die besten Produkte an einem Ort", c: "Jetzt kaufen" },
  };
  const d = data[l];
  return (
    <div>
      <div className="gb-seg" style={{ marginBottom: 14 }}>
        {(["pl", "en", "de"] as const).map((k) => (
          <button key={k} data-active={l === k} onClick={() => setL(k)}>
            {k.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="gb-demo-card" style={{ textAlign: "center", padding: 22 }}>
        <h3 style={{ fontFamily: "var(--fd)", fontSize: 20, margin: "0 0 8px" }}>{d.t}</h3>
        <p style={{ color: "var(--muted)", fontSize: 13, margin: "0 0 16px" }}>{d.s}</p>
        <button className="gb-btn-primary" style={{ justifyContent: "center" }}>{d.c}</button>
      </div>
    </div>
  );
}

/* ---------------- Router ---------------- */
export function DemoContent({ k }: { k: SystemKey }) {
  const { lang } = useSite();
  switch (k) {
    case "sklep":
      return <DemoSklep lang={lang} />;
    case "lojalnosc":
      return <DemoLojalnosc lang={lang} />;
    case "newsletter":
      return <DemoNewsletter lang={lang} />;
    case "rezerwacje":
      return <DemoRezerwacje lang={lang} />;
    case "panel":
      return <DemoPanel lang={lang} />;
    case "blog":
      return <DemoBlog lang={lang} />;
    case "kody":
      return <DemoKody lang={lang} />;
    case "ruch":
      return <DemoRuch lang={lang} />;
    case "live":
      return <DemoLive lang={lang} />;
    case "mystery":
      return <DemoMystery lang={lang} />;
    case "opinie":
      return <DemoOpinie lang={lang} />;
    case "jezyki":
      return <DemoJezyki />;
    default:
      return null;
  }
}
