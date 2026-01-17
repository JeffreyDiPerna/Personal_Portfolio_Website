'use client';

import { useState } from 'react';
import Header from "../components/header.jsx";
import PageTransition from "../components/PageTransition";

// src/app/projects/page.js
export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "AI‑Powered American Sign Language Recognition",
      date: "Sep 2024 – Mar 2025",
      icon: "🤖",
      githubLink: "https://github.com/JeffreyDiPerna/AI_ASL_Sign_Language_Translator",
      points: [
        "Engineered a deep-learning ASL gesture detection tool trained on 2000+ videos, achieving 90% accuracy",
        "Implemented Convolutional Neural Networks (CNNs) using Python, Hugging Face, and supervised learning",
        "Adapted 3D-to-2D CNN with temporal stacking, cutting the required compute by 62%",
        "First place at Microsoft Firm Day Hackathon",
        "Winner of the Social Impact Award at the Canadian Conference for Artificial Intelligence",
      ]
    },
    {
      title: "AI Stock Price Predictor",
      date: "Dec 2025 – Jan 2026",
      icon: "📈",
      githubLink: "https://github.com/JeffreyDiPerna/stock_price_predictor",
      points: [
        "Developed a time-series forecasting pipeline that processes historical stock data using Python, PyTorch, and a long-short term memory architecture",
        "Trained the model to achieve an error < 4% to the actual stock price using Adam optimization",
      ]
    },
    {
      title: "HOOP Cards",
      date: "Sep 2025 – Dec 2025",
      icon: "🏀",
      githubLink: "https://github.com/JeffreyDiPerna/Hoop_Cards",
      points: [
        "Built a full-stack fantasy basketball application, keeping interactions under 200ms using C++ and QT",
        "Created a responsive system to manage 70+ user accounts and data from 400+ NBA players with SQL",
      ]
    },
    {
      title: "Queen's Hyperloop Design Team Website",
      date: "Jan 2024 – Apr 2024",
      icon: "🚄",
      points: [
        "Collaborated on a secure site with login/logout, announcements, and profiles for 100+ users",
        "Contributed to front-end development, creating visual aspects of the site using HTML and CSS",
      ]
    }
  ];

  return (
    <PageTransition>
      <Header />
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.title}>My Projects</h1>

          {/* Tab Buttons */}
          <div style={styles.tabsWrapper}>
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === index ? styles.tabButtonActive : styles.tabButtonInactive),
                }}
                className="project-tab"
              >
                <span style={styles.tabIcon}>{project.icon}</span>
                <span style={styles.tabText}>{project.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={styles.contentWrapper}>
            <section style={styles.section} className="project-content">
              <div style={styles.projectHeader}>
                <span style={styles.projectIcon}>{projects[activeTab].icon}</span>
                <div style={{ flex: 1 }}>
                  <h2 style={styles.subtitle}>{projects[activeTab].title}</h2>
                  <p style={styles.date}>{projects[activeTab].date}</p>
                </div>
                {projects[activeTab].githubLink && (
                  <a 
                    href={projects[activeTab].githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.githubLink}
                    className="github-link"
                    aria-label="View on GitHub"
                  >
                    <span style={styles.githubText}>See the full project here</span>
                    <svg 
                      height="32" 
                      width="32" 
                      viewBox="0 0 16 16" 
                      fill="currentColor"
                      style={styles.githubIcon}
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                )}
              </div>
              <ul style={styles.list}>
                {projects[activeTab].points.map((point, index) => (
                  <li key={index} style={styles.listItem}>
                    <span style={styles.bullet}>▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Styled JSX */}
        <style jsx>{`
          .project-tab:hover {
            transform: translateY(-2px);
            border-color: rgba(99, 102, 241, 0.6);
          }

          .project-content {
            animation: fadeIn 0.4s ease-out;
          }

          .github-link:hover {
            transform: scale(1.15);
            color: #818cf8;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </main>
    </PageTransition>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: "48px 24px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: 800,
    marginBottom: "48px",
    textAlign: "center",
    color: "#000000",
    background: "linear-gradient(135deg, #818cf8 0%, #06b6d4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  tabsWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "16px",
    marginBottom: "40px",
  },
  tabButton: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 20px",
    fontSize: "1rem",
    fontWeight: 600,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
  },
  tabButtonActive: {
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    color: "#94a3b8",
    borderColor: "rgba(99, 102, 241, 0.5)",
    boxShadow: "0 8px 20px rgba(99, 102, 241, 0.4)",
  },
  tabButtonInactive: {
    color: "#94a3b8",
  },
  tabIcon: {
    fontSize: "1.5rem",
  },
  tabText: {
    textAlign: "left",
    flex: 1,
  },
  contentWrapper: {
    minHeight: "400px",
  },
  section: {
    width: "100%",
    padding: "40px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
  },
  projectHeader: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "24px",
    paddingBottom: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  projectIcon: {
    fontSize: "3rem",
  },
  subtitle: {
    fontSize: "1.75rem",
    fontWeight: 700,
    marginBottom: "8px",
    color: "#94a3b8",
  },
  githubLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#94a3b8",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },
  githubText: {
    fontSize: "0.95rem",
    fontWeight: 500,
  },
  githubIcon: {
    display: "block",
  },
  date: {
    fontSize: "1rem",
    color: "#94a3b8",
    fontWeight: 500,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "12px 0",
    position: "relative",
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#94a3b8",
    paddingLeft: "28px",
  },
  bullet: {
    position: "absolute",
    left: 0,
    color: "#06b6d4",
    fontSize: "1.5rem",
    lineHeight: "1.7",
  },
};
