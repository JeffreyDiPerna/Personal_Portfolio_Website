
// src/app/page.jsx
'use client';

import Image from "next/image";
import Link from "next/link";
import PageTransition from "./components/PageTransition";

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
  },
  container: {
    width: "100%",
    maxWidth: "1000px",
    textAlign: "center",
  },
  imageWrapper: {
    position: "relative",
    margin: "0 auto 32px",
    width: "min(280px, 40vw)",
    aspectRatio: "1 / 1",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(99, 102, 241, 0.4), 0 0 40px rgba(139, 92, 246, 0.3)",
    border: "4px solid rgba(99, 102, 241, 0.3)",
    transition: "all 0.4s ease",
  },
  title: {
    margin: "0 0 12px 0",
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    background: "linear-gradient(135deg, #818cf8 0%, #06b6d4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    marginTop: "12px",
    fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
    color: "#cbd5e1",
    lineHeight: 1.6,
    fontWeight: 500,
  },
  blurb: {
    marginTop: "16px",
    fontSize: "1.05rem",
    color: "#94a3b8",
    maxWidth: "600px",
    margin: "16px auto 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginTop: "48px",
    maxWidth: "800px",
    margin: "48px auto 0",
  },
};

export default function Home() {
  return (
    <PageTransition>
      <main style={styles.main}>
        <section style={styles.container}>
          {/* Profile image with premium styling */}
          <div style={styles.imageWrapper} className="profile-image">
            <Image src="/Headshot.png" alt="Jeffrey Di Perna" width={300} height={250} />
          </div>

          <h1 style={styles.title}>Jeffrey Di Perna</h1>
          <p style={styles.subtitle}>
            <b>Computer Engineering Student @ Queen&apos;s University</b>
          </p>
          <p style={styles.blurb}>
            <b>Explore my portfolio of projects, skills, and experiences in AI, full-stack development, and engineering.</b>
          </p>

          {/* Navigation buttons */}
          <nav style={styles.grid}>
            <Link href="/about" className="nav-btn">
              <span className="nav-icon">👤</span>
              <span>About</span>
            </Link>
            <Link href="/projects" className="nav-btn">
              <span className="nav-icon">🚀</span>
              <span>Projects</span>
            </Link>
            <Link href="/experiences" className="nav-btn">
              <span className="nav-icon">💼</span>
              <span>Experiences</span>
            </Link>
            <Link href="/contact" className="nav-btn">
              <span className="nav-icon">📧</span>
              <span>Contact</span>
            </Link>
          </nav>

          {/* Styled-jsx for component-specific styles */}
          <style jsx>{`
            .profile-image:hover {
              transform: scale(1.05);
              box-shadow: 0 25px 70px rgba(99, 102, 241, 0.5), 0 0 50px rgba(139, 92, 246, 0.4);
            }

            .nav-btn {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 12px;
              padding: 32px 24px;
              border-radius: 16px;
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: #cbd5e1;
              text-decoration: none;
              font-weight: 600;
              font-size: 1.1rem;
              letter-spacing: 0.025em;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
              overflow: hidden;
            }

            .nav-btn::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent);
              transition: left 0.5s ease;
            }

            .nav-btn:hover::before {
              left: 100%;
            }

            .nav-btn:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.3);
              border-color: rgba(99, 102, 241, 0.5);
              background: rgba(99, 102, 241, 0.1);
              color: #f8fafc;
            }

            .nav-icon {
              font-size: 2rem;
            }

            @media (hover: none) {
              .nav-btn:hover {
                transform: none;
              }
              .profile-image:hover {
                transform: none;
              }
            }
          `}</style>
        </section>
      </main>
    </PageTransition>
  );
}
