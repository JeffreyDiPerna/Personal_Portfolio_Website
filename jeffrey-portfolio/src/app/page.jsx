
// src/app/page.jsx
'use client';

import Image from "next/image";
import Link from "next/link";
import PageTransition from "./components/PageTransition";

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff", // white
    color: "#2563eb",      // primary blue
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    padding: 24,
  },
  container: {
    width: "100%",
    maxWidth: 960,
    textAlign: "center",
  },
  imageWrapper: {
    position: "relative",
    margin: "0 auto 20px",
    width: "min(40vw, 280px)", // responsive max size
    aspectRatio: "1 / 1",      // maintain perfect square
    borderRadius: "50%",
    overflow: "hidden",
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
    <PageTransition>
      <main style={styles.main}>
      <section style={styles.container}>
        {/* Fixed 300x300 circular profile image */}
        <div style={styles.imageWrapper}>
          <Image src="/Headshot.png" alt="Jeffrey Di Perna" width={300} height={250} />
        </div>

        <h1 style={styles.title}>Jeffrey Di Perna</h1>
        <p style={styles.subtitle}>Computer Engineering Student @ Queen&apos;s University</p>
        <p style={styles.blurb}>Come explore my portfolio of projects, skills, and experiences.</p>

        {/* Navigation buttons */}
        <nav style={styles.grid}>
          <Link href="/about" className="btn">About</Link>
          <Link href="/projects" className="btn">Projects</Link>
          <Link href="/experiences" className="btn">Experiences</Link>
          <Link href="/contact" className="btn">Contact</Link>
        </nav>

        {/* Hover styles via styled-jsx */}
        <style jsx>{`
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 16px;
            border-radius: 10px;
            background: #ffffff;
            color: #2563eb;
            border: 1px solid #2563eb;
            text-decoration: none;
            font-weight: 700;
            letter-spacing: 0.02em;
            box-shadow: 0 1px 2px rgba(0,0,0,0.25);
            transition: transform 120ms ease, background 120ms ease, color 120ms ease;
          }
          .btn:hover {
            background: #2563eb;
            color: #ffffff;
            transform: translateY(-1px);
          }
          @media (hover: none) {
            .btn:hover {
              background: #ffffff;
              color: #2563eb;
              transform: none;
            }
          }
        `}</style>
      </section>
    </main>
    </PageTransition>
  );
}
