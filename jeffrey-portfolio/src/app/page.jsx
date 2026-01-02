
// src/app/page.jsx

import Link from "next/link";

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#e5e7eb",      // gray-200
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: 720,
    padding: 24,
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "2.25rem",
    fontWeight: 800,
    letterSpacing: "0.02em",
    color: "#ebe6faff", //
  },
  subtitle: {
    marginTop: 8,
    fontSize: "1.1rem",
    opacity: 0.9,
  },
  blurb: {
    marginTop: 12,
    opacity: 0.8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
    marginTop: 24,
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 16px",
    borderRadius: 10,
    background: "#1f2937", // gray-800
    color: "#e5e7eb",      // gray-200
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "0.02em",
    boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
    transition: "transform 120ms ease, background 120ms ease",
  },
};

export default function Home() {
  return (
    <main style={styles.main}>
      <section style={styles.container}>
        <img 
        src="/Headshot.jpg" 
        alt="Profile Picture" 
        width={300} 
        height={300} 
        />
        <h1 style={styles.title}>Jeffrey Di Perna</h1>
        <p style={styles.subtitle}>Computer Engineering Student @ Queen&apos;s University</p>
        <p style={styles.blurb}>Come explore my portfolio of projects, skills, and experiences.</p>

        <nav style={styles.grid}>
          <Link href="/about" style={styles.button} aria-label="About">
            About
          </Link>
          <Link href="/projects" style={styles.button} aria-label="Projects">
            Projects
          </Link>
          <Link href="/experiences" style={styles.button} aria-label="Experiences">
            Experiences
          </Link>
          <Link href="/contact" style={styles.button} aria-label="Contact">
            Contact
          </Link>
        </nav>
      </section>
    </main>
  );
}
