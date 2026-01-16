'use client';

import Header from "../components/header.jsx";
import PageTransition from "../components/PageTransition";

// src/app/experiences/page.js
export default function ExperiencesPage() {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "QMIND",
      date: "Sep 2024 – Present",
      location: "Kingston, ON",
      icon: "🧠",
      points: [
        "Building RAG-driven instruction generation; piloted with 50+ patients in clinical use.",
        "Enabled clinician self-serve uploads and QR code delivery for scalable access.",
        "Synthesized generative AI responses with scientific literature and patient medical data to ensure optimal patient guidance, achieving 89% accuracy with physician recommendations"
      ]
    },
    {
      title: "Software Developer",
      company: "Engineering Society",
      date: "Sept 2025 – Present",
      location: "Kingston, ON",
      icon: "💻",
      points: [
        "Service to analyze resume structure/keywords, improving callback rates in testing.",
        "Applied NLP to enhance ATS effectiveness.",
        "Designed a secure database using MongoDB, yielding zero incidents throughout deployment"
      ]
    },
    {
      title: "External Relations Coordinator",
      company: "QMIND",
      date: "June 2025 – Present",
      location: "Kingston, ON",
      icon: "🤝",
      points: [
        "Expanded QMIND's external network by 25%.",
        "Built relationships with alumni, mentors, and industry stakeholders."
      ]
    },
    {
      title: "Systems Administrator",
      company: "Trillium Health Partners",
      date: "Jun 2025 – Aug 2025",
      location: "Mississauga, ON",
      icon: "🖥️",
      points: [
        "Built virtual data center models in Sunbird DCIM to monitor 20+ server racks in real time across multiple locations",
        "Executed hardware install/upgrade/decommission cycles to scale data centers for patient medical record storage",
        "Integrated environment sensors for temperature and voltage to improve response time for data center issues by 18%"
      ]
    }
  ];

  return (
    <PageTransition>
      <Header />
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.title}>Professional Experience</h1>

          <div style={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} style={styles.experienceCard} className="experience-card">
                <div style={styles.iconWrapper}>
                  <span style={styles.icon}>{exp.icon}</span>
                </div>
                <div style={styles.content}>
                  <div style={styles.header}>
                    <h2 style={styles.subtitle}>{exp.title}</h2>
                    <p style={styles.company}>{exp.company}</p>
                  </div>
                  <div style={styles.meta}>
                    <span style={styles.date}>📅 {exp.date}</span>
                    <span style={styles.location}>📍 {exp.location}</span>
                  </div>
                  <ul style={styles.list}>
                    {exp.points.map((point, idx) => (
                      <li key={idx} style={styles.listItem}>
                        <span style={styles.bullet}>▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Styled JSX */}
        <style jsx>{`
          .experience-card:hover {
            transform: translateX(8px);
            border-color: rgba(99, 102, 241, 0.5);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.2);
          }

          @media (hover: none) {
            .experience-card:hover {
              transform: none;
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
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: 800,
    marginBottom: "64px",
    textAlign: "center",
    background: "linear-gradient(135deg, #818cf8 0%, #06b6d4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  experienceCard: {
    display: "flex",
    gap: "24px",
    padding: "32px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    borderLeft: "4px solid #6366f1",
  },
  iconWrapper: {
    flexShrink: 0,
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)",
    borderRadius: "12px",
    border: "1px solid rgba(99, 102, 241, 0.3)",
  },
  icon: {
    fontSize: "2rem",
  },
  content: {
    flex: 1,
  },
  header: {
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: "4px",
    color: "#f8fafc",
  },
  company: {
    fontSize: "1.1rem",
    color: "#818cf8",
    fontWeight: 600,
    margin: 0,
  },
  meta: {
    display: "flex",
    gap: "24px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  date: {
    fontSize: "0.95rem",
    color: "#94a3b8",
    fontWeight: 500,
  },
  location: {
    fontSize: "0.95rem",
    color: "#94a3b8",
    fontWeight: 500,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "8px 0",
    position: "relative",
    fontSize: "1rem",
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
