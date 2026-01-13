'use client';

import Header from "../components/header.jsx";
import PageTransition from "../components/PageTransition";

// src/app/about/page.js
export default function AboutPage() {
  return (
    <PageTransition>
      <Header />
      <main style={styles.main}>
        <section style={styles.section}>
          <h1 style={styles.title}>About</h1>
          <p style={styles.text}>
            I'm Jeffrey Di Perna — Computer Engineering student at Queen's University. I build
            ML-driven and full‑stack tools with experience in several AI projects. I aspire to combine 
            my technical skills in AI with my love for financial markets.
          </p>
        </section>
      </main>
    </PageTransition>
  )
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: 24,
    background: "#ffffff",
    color: "#2563eb",
  },
  section: {
    maxWidth: 960,
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 800,
    marginBottom: 16,
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: 1.6,
  },
};
