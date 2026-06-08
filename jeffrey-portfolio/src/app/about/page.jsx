'use client';

import { useState } from 'react';
import Header from "../components/header.jsx";
import PageTransition from "../components/PageTransition";
import { motion } from 'framer-motion';

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 50px rgba(3, 105, 161, 0.2)",
    transition: { duration: 0.3 },
  },
};

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "C/C++", "Java", "JavaScript", "HTML/CSS", "Assembly", "MATLAB"],
    color: "#0369a1"
  },
  {
    title: "Libraries & Frameworks",
    icon: "📚",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib", "Hugging Face", "React.js", "Next.js"],
    color: "#06b6d4"
  },
  {
    title: "Backend & Tools",
    icon: "🔧",
    skills: ["Flask", "Qt", "Git", "Docker", "Linux", "MongoDB", "REST APIs", "SQL", "Jupyter"],
    color: "#0891b2"
  },
  {
    title: "Specializations",
    icon: "🧠",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Full-Stack Dev", "AI/ML Engineering", "Data Analysis"],
    color: "#0ea5e9"
  },
];

export default function AboutPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <PageTransition>
      <Header />
      <main style={{
        minHeight: "100vh",
        padding: "60px 24px",
        background: "inline-gradient(135deg, rgba(3, 105, 161, 0.02) 0%, rgba(6, 182, 212, 0.02) 100%)",
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
          {/* Header Section */}
          <motion.section
            variants={itemVariants}
            style={{
              marginBottom: "64px",
              textAlign: "center",
            }}
          >
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "24px",
              background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              About Me
            </h1>
            <p style={{
              fontSize: "1.15rem",
              lineHeight: 1.8,
              color: "#475569",
              maxWidth: "750px",
              margin: "0 auto",
            }}>
              I'm a Computer Engineering student at Queen&apos;s University passionate about building 
              intelligent solutions that combine machine learning, software engineering, and financial technology. 
              I thrive at the intersection of innovation and practical implementation.
            </p>
          </motion.section>

          {/* About Content - Two Column */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              marginBottom: "64px",
            }}
          >
            <motion.div
              variants={itemVariants}
              style={{
                padding: "32px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(3, 105, 161, 0.06) 0%, rgba(6, 182, 212, 0.06) 100%)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                marginBottom: "12px",
                color: "#0369a1",
              }}>🎓 Education</h3>
              <p style={{ color: "#475569", lineHeight: 1.7 }}>
                Computer Engineering at Queen&apos;s University, focusing on AI, Machine Learning, 
                and Full-Stack Development with practical experience in real-world projects.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{
                padding: "32px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(6, 182, 212, 0.06) 0%, rgba(14, 165, 233, 0.06) 100%)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3 style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                marginBottom: "12px",
                color: "#06b6d4",
              }}>🚀 Passion</h3>
              <p style={{ color: "#475569", lineHeight: 1.7 }}>
                Driven by the intersection of AI and fintech. I build intelligent systems that solve 
                real-world problems and create meaningful impact through technology.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} style={{ marginBottom: "32px" }}>
            <h2 style={{
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: "12px",
              color: "#0f172a",
            }}>Technical Expertise</h2>
            <div style={{
              width: "60px",
              height: "4px",
              background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
              borderRadius: "2px",
              marginBottom: "32px",
            }} />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setExpandedCard(index)}
                onMouseLeave={() => setExpandedCard(null)}
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(240, 249, 255, 0.8) 100%)",
                  border: "2px solid #e2e8f0",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="skill-card"
              >
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "16px",
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "16px",
                  color: category.color,
                }}>
                  {category.title}
                </h3>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}>
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: expandedCard === index ? 1 : 0.6 }}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: `${category.color}15`,
                        color: category.color,
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        border: `1px solid ${category.color}35`,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <style jsx>{`
                  .skill-card:hover {
                    box-shadow: 0 20px 50px rgba(3, 105, 161, 0.15);
                  }

                  @media (hover: none) {
                    .skill-card:hover {
                      transform: none;
                      box-shadow: none;
                    }
                  }
                `}</style>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: "64px",
              textAlign: "center",
              padding: "40px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(3, 105, 161, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)",
              border: "2px solid #e2e8f0",
            }}
          >
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "16px",
              color: "#0f172a",
            }}>Interested in collaborating?</h3>
            <p style={{
              color: "#475569",
              marginBottom: "24px",
            }}>
              Let&apos;s build something amazing together!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-block",
                padding: "12px 32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 600,
                border: "1px solid rgba(3, 105, 161, 0.3)",
                boxShadow: "0 4px 15px rgba(3, 105, 161, 0.2)",
                transition: "all 0.3s ease",
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </main>
    </PageTransition>
  );
}
