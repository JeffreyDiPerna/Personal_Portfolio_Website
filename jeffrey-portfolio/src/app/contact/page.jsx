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
    y: -12,
    scale: 1.05,
    boxShadow: "0 20px 50px rgba(3, 105, 161, 0.2)",
    transition: { duration: 0.3 },
  },
};

export default function ContactPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contactLinks = [
    {
      name: "Email",
      href: "mailto:jeffrey.diperna@gmail.com",
      icon: "📧",
      color: "#0369a1",
      description: "Get in touch directly",
      type: "Primary"
    },
    {
      name: "GitHub",
      href: "https://github.com/JeffreyDiPerna",
      icon: "💻",
      color: "#06b6d4",
      description: "View my repositories",
      type: "Portfolio"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jeffrey-di-perna-39ab101a3/",
      icon: "🤝",
      color: "#0891b2",
      description: "Connect professionally",
      type: "Network"
    },
    {
      name: "Resume",
      href: "/resume.pdf",
      icon: "📄",
      color: "#0ea5e9",
      description: "Download my CV",
      type: "Document"
    }
  ];

  return (
    <PageTransition>
      <Header />

      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: "absolute",
          top: "-400px",
          right: "-400px",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(3, 105, 161, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-300px",
          left: "-300px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <motion.div
          style={{
            width: "100%",
            maxWidth: "1000px",
            position: "relative",
            zIndex: 1,
          }}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.h1
            variants={itemVariants}
            style={{
              margin: "0 0 12px 0",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800,
              textAlign: "center",
              background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's Connect
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.1rem",
              color: "#475569",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 48px",
              lineHeight: 1.8,
            }}
          >
            I'm always excited to discuss new opportunities, collaborate on innovative projects, 
            or simply chat about technology and AI. Reach out through any of the channels below!
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            style={{
              width: "60px",
              height: "4px",
              background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
              borderRadius: "2px",
              margin: "0 auto 48px",
            }}
          />

          {/* Contact Grid */}
          <motion.div
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px 24px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, rgba(248, 250, 252, 0.9) 0%, rgba(240, 249, 255, 0.9) 100%)",
                  border: "2px solid #e2e8f0",
                  textDecoration: "none",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="contact-card"
              >
                {/* Background gradient on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${link.color}08 0%, transparent 100%)`,
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Type badge */}
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.7,
                    y: hoveredIndex === index ? 0 : -10
                  }}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: `${link.color}15`,
                    color: link.color,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    border: `1px solid ${link.color}35`,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    zIndex: 10,
                  }}
                >
                  {link.type}
                </motion.span>

                {/* Icon */}
                <motion.div
                  style={{
                    width: "72px",
                    height: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${link.color}15`,
                    borderRadius: "50%",
                    marginBottom: "20px",
                    border: `2px solid ${link.color}35`,
                    fontSize: "2.5rem",
                    transition: "all 0.3s ease",
                    zIndex: 5,
                  }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1.15 : 1,
                    rotate: hoveredIndex === index ? 10 : 0,
                  }}
                >
                  {link.icon}
                </motion.div>

                {/* Title */}
                <h3 style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: link.color,
                  marginBottom: "8px",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 5,
                }}>
                  {link.name}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: "0.95rem",
                  color: "#64748b",
                  textAlign: "center",
                  margin: 0,
                  position: "relative",
                  zIndex: 5,
                }}>
                  {link.description}
                </p>

                <style jsx>{`
                  .contact-card {
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                  }

                  .contact-card:hover {
                    border-color: ${link.color};
                    box-shadow: 0 12px 30px ${link.color}20;
                  }

                  @media (hover: none) {
                    .contact-card:hover {
                      transform: none;
                      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    }
                  }
                `}</style>
              </motion.a>
            ))}
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            variants={itemVariants}
            style={{
              textAlign: "center",
              padding: "40px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(3, 105, 161, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)",
              border: "2px solid #e2e8f0",
            }}
          >
            <p style={{
              fontSize: "1rem",
              color: "#475569",
              margin: "0 0 12px 0",
              fontWeight: 600,
            }}>
              Prefer a different way to connect?
            </p>
            <p style={{
              fontSize: "0.95rem",
              color: "#64748b",
              margin: 0,
            }}>
              Send me an email at{" "}
              <a
                href="mailto:jeffrey.diperna@gmail.com"
                style={{
                  color: "#0369a1",
                  fontWeight: 700,
                  textDecoration: "none",
                  borderBottom: "2px solid #0369a1",
                  transition: "all 0.3s ease",
                }}
                className="email-link"
              >
                jeffrey.diperna@gmail.com
              </a>
              {" "}and I'll get back to you as soon as possible!
            </p>

            <style jsx>{`
              .email-link:hover {
                color: #06b6d4;
                border-bottom-color: #06b6d4;
              }
            `}</style>
          </motion.div>
        </motion.div>
      </main>
    </PageTransition>
  );
}
``
