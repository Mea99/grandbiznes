export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a12",
      color: "#f4f3ff",
      fontFamily: "system-ui, sans-serif",
      padding: "24px",
      textAlign: "center",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}>
        <span style={{
          width: 14, height: 14, borderRadius: 3,
          transform: "rotate(45deg)", background: "#8b5cf6",
          display: "inline-block", flexShrink: 0,
        }} />
        <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "0.02em" }}>
          GRAND<span style={{ color: "#8b5cf6" }}>BIZNES</span>
        </span>
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: "clamp(28px, 6vw, 52px)",
        fontWeight: 700,
        lineHeight: 1.1,
        margin: "0 0 16px",
        letterSpacing: "-0.02em",
      }}>
        Strona w trakcie<br />tworzenia
      </h1>

      <p style={{
        color: "#a6a3c4",
        fontSize: 16,
        lineHeight: 1.6,
        maxWidth: 380,
        margin: "0 0 40px",
      }}>
        Pracujemy nad czymś nowym. W razie pytań — napisz lub zadzwoń.
      </p>

      {/* Contact */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
        <a href="mailto:kontakt@grandbiznes.pl" style={{
          color: "#8b5cf6",
          textDecoration: "none",
          fontSize: 15,
          fontWeight: 600,
        }}>
          kontakt@grandbiznes.pl
        </a>
        <a href="tel:+48787754147" style={{
          color: "#a6a3c4",
          textDecoration: "none",
          fontSize: 14,
        }}>
          +48 787 754 147
        </a>
      </div>
    </div>
  );
}
