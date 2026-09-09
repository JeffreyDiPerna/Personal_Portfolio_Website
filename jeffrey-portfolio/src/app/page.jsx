
// src/app/page.jsx
'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import PageTransition from "./components/PageTransition";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.08,
    rotate: 2,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -8,
    boxShadow: "0 12px 40px rgba(3, 105, 161, 0.3)",
    transition: { duration: 0.3 },
  },
  tap: {
    scale: 0.95,
  },
};

export default function Home() {
  const navButtons = [
    { href: "/about", icon: "/about_icon.png", label: "About", color: '#0369a1' },
    { href: "/projects", icon: "/task-management.png", label: "Projects", color: '#06b6d4' },
    { href: "/experiences", icon: "/briefcase.png", label: "Experience", color: '#0891b2' },
    { href: "/contact", icon: "/mail.png", label: "Contact", color: '#0ea5e9' },
  ];

  return (
    <PageTransition>
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
          top: "-500px",
          right: "-500px",
          width: "1000px",
          height: "1000px",
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

        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{
            width: "100%",
            maxWidth: "900px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            style={{
              position: "relative",
              marginBottom: "48px",
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "0 auto 48px",
              boxShadow: "0 20px 50px rgba(3, 105, 161, 0.2)",
              border: "3px solid #e2e8f0",
              background: "linear-gradient(135deg, #f0f9ff 0%, #eff6ff 100%)",
            }}
            className="profile-image"
          >
            <Image 
              src="/Headshot.png" 
              alt="Jeffrey Di Perna" 
              width={140}
              height={140}
              style={{ width: "100%", height: "100%" }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            style={{
              margin: 0,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "8px",
            }}
          >
            Jeffrey Di Perna
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              margin: "0 0 12px 0",
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Computer Engineering Student @ Queen&apos;s University
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            style={{
              margin: "0 0 48px 0",
              fontSize: "1.1rem",
              color: "#475569",
              maxWidth: "650px",
              lineHeight: 1.8,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Building innovative AI-driven solutions and full-stack applications. 
            Passionate about machine learning, financial technology, and creating impactful software.
          </motion.p>

          {/* Navigation Grid */}
          <motion.nav
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "20px",
              marginTop: "48px",
              maxWidth: "700px",
              margin: "48px auto 0",
            }}
          >
            {navButtons.map((btn, i) => (
              <motion.div
                key={btn.href}
                custom={i}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href={btn.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    padding: "32px 20px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, rgba(3, 105, 161, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)",
                    border: "2px solid #e2e8f0",
                    color: "#0f172a",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className={`nav-btn nav-btn-${i}`}
                >
                  <span style={{
                    fontSize: "2.5rem",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {btn.icon.startsWith("/") ? (
                      <Image
                        src={btn.icon}
                        alt={`${btn.label} icon`}
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      btn.icon
                    )}
                  </span>
                  <span>{btn.label}</span>

                  <style jsx>{`
                    .nav-btn-${i} {
                      background: linear-gradient(135deg, rgba(3, 105, 161, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%);
                    }

                    .nav-btn-${i}:hover {
                      border-color: ${btn.color};
                      background: linear-gradient(135deg, rgba(3, 105, 161, 0.12) 0%, rgba(6, 182, 212, 0.12) 100%);
                      box-shadow: 0 12px 40px rgba(3, 105, 161, 0.2);
                    }
                  `}</style>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

        </motion.section>
      </main>
    </PageTransition>
  );
}
