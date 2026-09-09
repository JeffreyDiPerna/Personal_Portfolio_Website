'use client';

import { useState } from 'react';
import Image from "next/image";
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    x: 8,
    boxShadow: "0 20px 50px rgba(3, 105, 161, 0.2)",
    transition: { duration: 0.3 },
  },
};

export default function ExperiencesPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      title: "Enterprise Portfolio Analyst Intern",
      company: "Geotab",
      date: "Sep 2026 - Present",
      location: "Oakville, ON",
      icon: "/geotab_logo.jpeg",
      color: "#0369a1",
      type: "AI/ML/Data",
      points: [
      ]
    },
    {
      title: "AI Co-op",
      company: "4AG Robotics",
      date: "May-2026 – Aug-2026",
      location: "Salmon Arm, BC",
      icon: "/4ag_robotics_logo.jpeg",
      color: "#0369a1",
      type: "AI/ML",
      points: [
        "Trained an object detection and classification model on approximately 2,000 images using transfer learning, achieving over 97% classification accuracy for a robotic mushroom-harvesting system",
        "Enhanced an internal annotation tool using Python and Qt, increasing labeling speed by 31% and accelerating supervised learning dataset preparation",
        "Managed and quality-checked annotated datasets using Roboflow, improving label consistency and reducing storage credit usage by 17% by migrating data to local hard drives",
        "Prepared real-mushroom measurement data used to create representative test objects, enabling realistic performance testing"
      ]
    },


    {
      title: "Machine Learning Engineer",
      company: "QMIND",
      date: "Sep 2024 – April 2026",
      location: "Kingston, ON",
      icon: "/qmind.ico",
      color: "#0369a1",
      type: "AI/ML",
      points: [
        "Building RAG-driven instruction generation; piloted with 50+ patients in clinical use.",
        "Enabled clinician self-serve uploads and QR code delivery for scalable access.",
        "Synthesized generative AI responses with scientific literature and patient medical data to ensure optimal patient guidance, achieving 89% accuracy with physician recommendations"
      ]
    },
    {
      title: "Software Developer",
      company: "Engineering Society",
      date: "Sept 2025 – April 2026",
      location: "Kingston, ON",
      icon: "/ENGSOC.webp",
      color: "#06b6d4",
      type: "Backend/AI/ML",
      points: [
        "Trained an object detection and classification model on approximately 2,000 images using transfer learning, achieving over 97% classification accuracy for a robotic mushroom-harvesting system",
        "Enhanced an internal annotation tool using Python and Qt, increasing labeling speed by 31% and accelerating supervised learning dataset preparation",
        "Managed and quality-checked annotated datasets using Roboflow, improving label consistency and reducing storage credit usage by 17% by migrating data to local hard drives",
        "Prepared real-mushroom measurement data used to create representative test objects, enabling realistic performance testing"
      ]
    },
    {
      title: "External Relations Coordinator",
      company: "QMIND",
      date: "June 2025 – April 2026",
      location: "Kingston, ON",
      icon: "/qmind.ico",
      color: "#0891b2",
      type: "Leadership",
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
      icon: "/THP.jpeg",
      color: "#0ea5e9",
      type: "Infrastructure",
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
      <main style={{
        minHeight: "100vh",
        padding: "60px 24px",
      }}>
        <motion.div
          style={{
            maxWidth: "1000px",
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
            Experience
          </motion.h1>
          <motion.div
            variants={itemVariants}
            style={{
              width: "60px",
              height: "4px",
              background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
              borderRadius: "2px",
              marginBottom: "48px",
            }}
          />

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              position: "relative",
            }}
          >
            {/* Decorative line */}
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "40px",
                bottom: "40px",
                width: "2px",
                background: "linear-gradient(to bottom, #0369a1 0%, #06b6d4 50%, #0ea5e9 100%)",
                opacity: 0.3,
                pointerEvents: "none",
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  gap: "24px",
                  padding: "28px",
                  background: "linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(240, 249, 255, 0.9) 100%)",
                  border: "2px solid #e2e8f0",
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  borderLeft: `4px solid ${exp.color}`,
                  position: "relative",
                  zIndex: 2,
                }}
                className="experience-card"
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-46px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    border: `3px solid ${exp.color}`,
                    boxShadow: `0 0 0 4px rgba(${parseInt(exp.color.slice(1,3), 16)}, ${parseInt(exp.color.slice(3,5), 16)}, ${parseInt(exp.color.slice(5,7), 16)}, 0.1)`,
                  }}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                  style={{
                    flexShrink: 0,
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${exp.color}15`,
                    borderRadius: "12px",
                    border: `2px solid ${exp.color}35`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Image
                    src={exp.icon}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  {/* Header */}
                  <div style={{ marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                      <h2 style={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        marginBottom: 0,
                        color: "#0f172a",
                      }}>
                        {exp.title}
                      </h2>
                      <span style={{
                        padding: "4px 12px",
                        borderRadius: "20px",
                        background: `${exp.color}15`,
                        color: exp.color,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        border: `1px solid ${exp.color}35`,
                        textTransform: "uppercase",
                        letterSpacing: "0.03em",
                      }}>
                        {exp.type}
                      </span>
                    </div>
                    <p style={{
                      fontSize: "1.1rem",
                      color: exp.color,
                      fontWeight: 600,
                      margin: 0,
                    }}>
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta */}
                  <div style={{
                    display: "flex",
                    gap: "24px",
                    marginBottom: "16px",
                    flexWrap: "wrap",
                    fontSize: "0.95rem",
                    color: "#64748b",
                    fontWeight: 500,
                  }}>
                    <span>{exp.date}</span>
                    <span>{exp.location}</span>
                  </div>

                  {/* Points */}
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}>
                    {exp.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 1,
                          x: 0 
                        }}
                        transition={{ delay: idx * 0.05 }}
                        style={{
                          padding: "8px 0",
                          position: "relative",
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          color: "#475569",
                          paddingLeft: "24px",
                        }}
                      >
                        <span style={{
                          position: "absolute",
                          left: 0,
                          color: exp.color,
                          fontSize: "1.2rem",
                          lineHeight: 1.7,
                          fontWeight: 700,
                        }}>
                          ▹
                        </span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <style jsx>{`
          @media (max-width: 640px) {
            .experience-card {
              flex-direction: column;
            }
          }

          @media (hover: none) {
            .experience-card {
              transform: none !important;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
            }
          }
        `}</style>
      </main>
    </PageTransition>
  );
}
