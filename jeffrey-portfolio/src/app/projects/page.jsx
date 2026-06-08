'use client';

import { useState, useEffect } from 'react';
import Header from "../components/header.jsx";
import PageTransition from "../components/PageTransition";
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "RAG Agent",
      icon: "🔍",
      color: "#0369a1",
      date: "2025",
      githubLink: "https://github.com/JeffreyDiPerna/RAG_Agent",
      description: "Intelligent document analysis system",
      points: [
        "Created RAG agent to answer questions about submitted documents using Python, Docker and REST API's",
        "Developed a chunking and overlap strategy to increase context hit rate, using load_and_chunk_pdf (tunable sizes + overlap); raised hit@k by +18pp and reduced average tokens retrieved by ~22%.",
        "Implemented scheduled refresh jobs to keep embeddings current, using Inngest recurring events with datetime windows; maintained <24h staleness on document updates with 0 missed refreshes over 4 weeks.",
      ]
    },
    {
      title: "AI‑Powered ASL Recognition",
      date: "Sep 2024 – Mar 2025",
      icon: "🤖",
      color: "#06b6d4",
      description: "Deep-learning ASL gesture detection",
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
      color: "#0891b2",
      description: "Time-series forecasting with LSTM",
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
      color: "#0ea5e9",
      description: "Fantasy basketball full-stack app",
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
      color: "#06b6d4",
      description: "Secure team portal with user management",
      points: [
        "Collaborated on a secure site with login/logout, announcements, and profiles for 100+ users",
        "Contributed to front-end development, creating visual aspects of the site using HTML and CSS",
      ]
    }
  ];

  return (
    <PageTransition>
      <Header />
      <main style={{
        minHeight: "100vh",
        padding: "60px 24px",
      }}>
        <motion.div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "12px",
              background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Projects
          </motion.h1>
          <motion.div
            variants={itemVariants}
            style={{
              width: "60px",
              height: "4px",
              background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
              borderRadius: "2px",
              marginBottom: "32px",
            }}
          />

          {/* Tab Buttons */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "14px 20px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: activeTab === index ? project.color : "#e2e8f0",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  borderRadius: "12px",
                  background: activeTab === index 
                    ? `${project.color}15`
                    : "rgba(248, 250, 252, 0.8)",
                  color: activeTab === index ? project.color : "#475569",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: activeTab === index ? `0 8px 20px ${project.color}25` : "none",
                }}
                className="project-tab"
              >
                <span style={{ fontSize: "1.2rem" }}>{project.icon}</span>
                <span style={{ display: "none" }}>{project.title}</span>
                <span style={{ display: "block" }}>{project.title.split(" ")[0]}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div style={{ minHeight: "500px" }}>
            <AnimatePresence mode="wait">
              {mounted && (
                <motion.section
                  key={activeTab}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    width: "100%",
                    padding: "40px",
                    background: "linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(240, 249, 255, 0.9) 100%)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    border: "2px solid #e2e8f0",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  }}
                  className="project-content"
                >
                  {/* Project Header */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "28px",
                    paddingBottom: "20px",
                    borderBottom: "2px solid #e2e8f0",
                  }}>
                    <span style={{
                      fontSize: "3rem",
                      lineHeight: 1,
                    }}>
                      {projects[activeTab].icon}
                    </span>
                    <div style={{ flex: 1 }}>
                      <h2 style={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        marginBottom: "4px",
                        color: projects[activeTab].color,
                      }}>
                        {projects[activeTab].title}
                      </h2>
                      <p style={{
                        fontSize: "1rem",
                        color: "#64748b",
                        margin: 0,
                        fontWeight: 500,
                      }}>
                        {projects[activeTab].description}
                      </p>
                      {projects[activeTab].date && (
                        <p style={{
                          fontSize: "0.9rem",
                          color: "#94a3b8",
                          margin: "4px 0 0 0",
                          fontWeight: 500,
                        }}>
                          {projects[activeTab].date}
                        </p>
                      )}
                    </div>
                    {projects[activeTab].githubLink && (
                      <motion.a
                        href={projects[activeTab].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: `${projects[activeTab].color}15`,
                          color: projects[activeTab].color,
                          border: `2px solid ${projects[activeTab].color}35`,
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          fontSize: "1.3rem",
                        }}
                        aria-label="View on GitHub"
                      >
                        🔗
                      </motion.a>
                    )}
                  </div>

                  {/* Project Points */}
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}>
                    {projects[activeTab].points.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        style={{
                          padding: "14px 0",
                          position: "relative",
                          fontSize: "1.05rem",
                          lineHeight: 1.7,
                          color: "#475569",
                          paddingLeft: "28px",
                        }}
                      >
                        <span style={{
                          position: "absolute",
                          left: 0,
                          color: projects[activeTab].color,
                          fontSize: "1.5rem",
                          lineHeight: 1.7,
                          fontWeight: 700,
                        }}>
                          ▹
                        </span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <style jsx>{`
          @media (min-width: 768px) {
            .project-tab span {
              display: inline;
            }
          }

          @media (hover: none) {
            .project-tab:hover {
              transform: none;
            }
          }
        `}</style>
      </main>
    </PageTransition>
  );
}
