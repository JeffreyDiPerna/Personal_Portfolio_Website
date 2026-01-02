
// src/app/page.jsx
'use client';

import Image from "next/image";
import Link from "next/link";

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a", // slate-900
    color: "#e5e7eb",      // gray-200
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    padding: 24,
  },
  container: {
    width: "100%",
    maxWidth: 960,
    textAlign: "center",
  },
  imageWrapper: {
    margin: "0 auto 20px",
    width: 150,
    height: 150,
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid #1f2937",
    boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
  },
  title: {
    margin: 0,
    fontSize: "2.25rem",
    fontWeight: 800,
    letterSpacing: "0.02em",
  },
  subtitle: {
    marginTop: 8,
    fontSize: "1.1rem",
    opacity: 0.9,
  },
  blurb: {
    marginTop: 12,
    opacity: 0.85,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
    marginTop: 24,
  },
};

export default function Home() {
  return (
    <main style={styles.main}>
      <section style={styles.container}>
        {/* Profile image */}
        <div style={styles.imageWrapper}>
          <Image
            src="/Headshot.jpg" // ensure this file exists in /public
            alt="Jeffrey Di Perna"
            width={250}
            height={250}
          />
        </div>

        <h1 style={styles.title}>Jeffrey Di Perna</h1>
        <p style={styles.subtitle}>Computer Engineering @ Queen's University</p>
        <p style={styles.blurb}>Come explore my portfolio of projects, skills, and experiences.</p>

        {/* Navigation buttons */}
        <nav style={styles.grid}>
          <Link href="/about" className="btn" aria-label="About">About</Link>
          <Link href="/projects" className="btn" aria-label="Projects">Projects</Link>
          <Link href="/experiences" className="btn" aria-label="Experiences">Experiences</Link>
          <Link href="/contact" className="btn" aria-label="Contact">Contact</Link>
        </nav>

        {/* Hover styles via styled-jsx (requires 'use client' at top) */}
        <style jsx>{`
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 16px;
            border-radius: 10px;
            background: #1f2937; /* gray-800 */
            color: #e5e7eb;      /* gray-200 */
            text-decoration: none;
            font-weight: 700;
            letter-spacing: 0.02em;
            box-shadow: 0 1px 2px rgba(0,0,0,0.25);
            transition: transform 120ms ease, background 120ms ease, color 120ms ease;
          }
          .btn:hover {
            background: #3b82f6; /* blue-500 */
            color: #0f172a;      /* slate-900 */
            transform: translateY(-1px);
          }
          /* Disable hover effects on touch-only devices */
          @media (hover: none) {
            .btn:hover {
              background: #1f2937;
              color: #e5e7eb;
              transform: none;
            }
          }
        `}</style>
      </section>
    </main>
  );
}
``
