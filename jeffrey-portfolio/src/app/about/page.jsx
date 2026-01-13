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

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Skills</h2>
          
          <div style={styles.skillGroup}>
            <h3 style={styles.skillCategory}>Languages</h3>
            <p style={styles.skillText}>Python, C/C++, Java, JavaScript, HTML/CSS, Assembly, MATLAB</p>
          </div>

          <div style={styles.skillGroup}>
            <h3 style={styles.skillCategory}>Libraries</h3>
            <p style={styles.skillText}>NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Matplotlib, Hugging Face, Mongoose</p>
          </div>

          <div style={styles.skillGroup}>
            <h3 style={styles.skillCategory}>Frameworks</h3>
            <p style={styles.skillText}>React.js, Next.js, Flask, Qt</p>
          </div>

          <div style={styles.skillGroup}>
            <h3 style={styles.skillCategory}>Developer Tools</h3>
            <p style={styles.skillText}>Git, Docker, Linux, MongoDB, REST APIs, SQL, Jupyter</p>
          </div>
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
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: 16,
    marginTop: 32,
  },
  skillGroup: {
    marginBottom: 20,
  },
  skillCategory: {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: 8,
    marginTop: 0,
  },
  skillText: {
    fontSize: "1rem",
    lineHeight: 1.6,
    marginTop: 4,
  },
};
