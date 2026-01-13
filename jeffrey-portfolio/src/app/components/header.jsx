
// src/components/Header.jsx

import Link from "next/link";

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    width: "100%",
    background: "#ffffff",       // white
    borderBottom: "2px solid #c4b5fd", // lavender accent
    backdropFilter: "blur(6px)",
  },
  wrapper: {
    maxWidth: 960,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color: "#2563eb",            // primary blue
    textDecoration: "none",
    fontWeight: 800,
    letterSpacing: "0.03em",
    fontSize: "1.05rem",
  },
  homeLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 12px",
    borderRadius: 8,
    background: "#c4b5fd",       // lavender accent
    color: "#2563eb",            // primary blue
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "0.02em",
    border: "1px solid #c4b5fd", // lavender border
    boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
    transition: "transform 120ms ease, background 120ms ease, color 120ms ease",
  },
};

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.wrapper}>
        {/* Site label (optional) */}
        <Link href="/" style={styles.brand} aria-label="Home">
          <span>Jeffrey Di Perna Portfolio</span>
        </Link>
        {/* Primary 'Home' button */}
        <nav aria-label="Primary">
          <Link href="/" style={styles.homeLink}>Home</Link>
        </nav>
      </div>
    </header>
  );
}