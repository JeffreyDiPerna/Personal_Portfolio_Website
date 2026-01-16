'use client';

import Header from "../components/header.jsx";
import PageTransition from "../components/PageTransition";

// src/app/about/page.js
export default function AboutPage() {
  return (
    <PageTransition>
      <Header />
      <main style={styles.main}>
        <div style={styles.container}>
          {/* About Section */}
          <section style={styles.heroSection}>
            <h1 style={styles.title}>About Me</h1>
            <p style={styles.text}>
              I'm Jeffrey Di Perna — Computer Engineering student at Queen's University. I build
              ML-driven and full‑stack tools with experience in several AI projects. I aspire to combine 
              my technical skills in AI with my love for financial markets.
            </p>
          </section>

          {/* Skills Section */}
          <section style={styles.skillsSection}>
            <h2 style={styles.subtitle}>Technical Skills</h2>
            
            <div style={styles.skillsGrid}>
              <div style={styles.skillCard} className="skill-card">
                <div style={styles.skillIcon}>💻</div>
                <h3 style={styles.skillCategory}>Languages</h3>
                <p style={styles.skillText}>🐍 Python, ⚙️ C/C++, ☕ Java, 🟨 JavaScript, 🌐 HTML/CSS, 🔧 Assembly, 🧮 MATLAB</p>
              </div>

              <div style={styles.skillCard} className="skill-card">
                <div style={styles.skillIcon}>📚</div>
                <h3 style={styles.skillCategory}>Libraries</h3>
                <p style={styles.skillText}>📊 NumPy, 🐼 Pandas, 🤖 Scikit-learn, 🧠 TensorFlow, 🔥 PyTorch, 📈 Matplotlib, 🤗 Hugging Face, 🍃 Mongoose</p>
              </div>

              <div style={styles.skillCard} className="skill-card">
                <div style={styles.skillIcon}>🔧</div>
                <h3 style={styles.skillCategory}>Frameworks</h3>
                <p style={styles.skillText}>⚛️ React.js, ▶️ Next.js, 🧪 Flask, 🎯 Qt</p>
              </div>

              <div style={styles.skillCard} className="skill-card">
                <div style={styles.skillIcon}>🛠️</div>
                <h3 style={styles.skillCategory}>Developer Tools</h3>
                <p style={styles.skillText}>📚 Git, 🐳 Docker, 🐧 Linux, 🍂 MongoDB, 🔌 REST APIs, 🗄️ SQL, 📓 Jupyter</p>
              </div>
            </div>
          </section>
        </div>

        {/* Styled JSX for hover effects */}
        <style jsx>{`
          .skill-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2);
            border-color: rgba(99, 102, 241, 0.5);
          }

          @media (hover: none) {
            .skill-card:hover {
              transform: none;
            }
          }
        `}</style>
      </main>
    </PageTransition>
  )
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: "48px 24px",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  heroSection: {
    marginBottom: "64px",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: 800,
    marginBottom: "24px",
    background: "linear-gradient(135deg, #818cf8 0%, #06b6d4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: 1.8,
    color: "#94a3b8",
    maxWidth: "800px",
    margin: "0 auto",
  },
  skillsSection: {
    marginTop: "48px",
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "32px",
    textAlign: "center",
    color: "#f8fafc",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  skillCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  skillIcon: {
    fontSize: "2.5rem",
    marginBottom: "16px",
  },
  skillCategory: {
    fontSize: "1.35rem",
    fontWeight: 700,
    marginBottom: "12px",
    color: "#818cf8",
  },
  skillText: {
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#94a3b8",
  },
};
