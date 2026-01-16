
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
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
    marginTop: "48px",
    maxWidth: "700px",
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
              gap: 16px;
              padding: 48px 32px;
              border-radius: 20px;
              background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 3px solid #6366f1;
              color: #f8fafc;
              text-decoration: none;
              font-weight: 700;
              font-size: 1.25rem;
              letter-spacing: 0.025em;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 
                          inset 0 1px 0 rgba(255, 255, 255, 0.1),
                          0 0 20px rgba(99, 102, 241, 0.5);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
              overflow: hidden;
              cursor: pointer;
            }

            .nav-btn::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
              transition: left 0.5s ease;
            }

            .nav-btn::after {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: 20px;
              padding: 2px;
              background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5));
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              opacity: 0;
              transition: opacity 0.3s ease;
            }

            .nav-btn:hover::before {
              left: 100%;
            }

            .nav-btn:hover::after {
              opacity: 1;
            }

            .nav-btn:hover {
              transform: translateY(-6px) scale(1.02);
              box-shadow: 0 20px 50px rgba(99, 102, 241, 0.5), 
                          0 0 40px rgba(99, 102, 241, 0.6),
                          inset 0 1px 0 rgba(255, 255, 255, 0.2);
              border-color: #818cf8;
              background: linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.25) 100%);
            }

            .nav-btn:active {
              transform: translateY(-2px) scale(0.98);
              box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4), 
                          inset 0 2px 4px rgba(0, 0, 0, 0.3);
            }

            .nav-icon {
              font-size: 3rem;
              filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
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
