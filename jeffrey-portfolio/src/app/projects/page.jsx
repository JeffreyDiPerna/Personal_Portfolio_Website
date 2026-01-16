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
      points: [
        "Developed a time-series forecasting pipeline that processes historical stock data using Python, PyTorch, and a long-short term memory architecture",
        "Trained the model to achieve an error < 4% to the actual stock price using Adam optimization",
      ]
    },
    {
      title: "HOOPP Cards",
      date: "Sep 2025 – Dec 2025",
      points: [
        "Built a full-stack fantasy basketball application, keeping interactions under 200ms using C++ and QT",
        "Created a responsive system to manage 70+ user accounts and data from 400+ NBA players with SQL",
      ]
    },
    {
      title: "Queen's Hyperloop Design Team Website",
      date: "Jan 2024 – Apr 2024",
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
          <h1 style={styles.title}>Projects</h1>

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
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={styles.contentWrapper}>
            <section style={styles.section}>
              <h2 style={styles.subtitle}>{projects[activeTab].title}</h2>
              <p style={styles.date}>{projects[activeTab].date}</p>
              <ul style={styles.list}>
                {projects[activeTab].points.map((point, index) => (
                  <li key={index} style={styles.listItem}>{point}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: 24,
    background: "#ffffff",
    color: "#2563eb",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 800,
    marginBottom: 24,
  },
  tabsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 24,
    borderBottom: "2px solid #e5e7eb",
    paddingBottom: 12,
  },
  tabButton: {
    padding: "12px 20px",
    fontSize: "1rem",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    borderRadius: "8px 8px 0 0",
  },
  tabButtonActive: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    borderBottom: "3px solid #1e40af",
  },
  tabButtonInactive: {
    backgroundColor: "#f3f4f6",
    color: "#2563eb",
  },
  contentWrapper: {
    flex: 1,
    display: "flex",
    minHeight: "400px",
  },
  section: {
    width: "100%",
    padding: "32px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
  },
  subtitle: {
    fontSize: "1.75rem",
    fontWeight: 700,
    marginBottom: 12,
    color: "#2563eb",
  },
  date: {
    fontSize: "1rem",
    color: "#6b7280",
    marginBottom: 16,
    fontWeight: 500,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "12px 0 12px 24px",
    position: "relative",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#374151",
  },
};
