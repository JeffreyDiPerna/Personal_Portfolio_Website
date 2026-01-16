
// src/components/Header.jsx

'use client';

import Link from "next/link";

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    width: "100%",
    background: "rgba(10, 14, 39, 0.8)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    color: "#f8fafc",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "0.025em",
    fontSize: "1.15rem",
    transition: "color 0.2s ease",
  },
  homeLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 24px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    color: "#f8fafc",
    textDecoration: "none",
    fontWeight: 600,
    letterSpacing: "0.025em",
    border: "1px solid rgba(99, 102, 241, 0.3)",
    boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
    transition: "all 0.3s ease",
  },
};

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.wrapper}>
        {/* Site label */}
        <Link href="/" style={styles.brand} aria-label="Home" className="brand-link">
          <span>✨ Jeffrey Di Perna</span>
        </Link>
        {/* Primary 'Home' button */}
        <nav aria-label="Primary">
          <Link href="/" style={styles.homeLink} className="homeBtn">
            Home
          </Link>
        </nav>
      </div>
      
      <style jsx>{`
        .brand-link:hover {
          color: #818cf8 !important;
        }

        .homeBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5), 0 0 30px rgba(99, 102, 241, 0.3);
        }

        @media (hover: none) {
          .homeBtn:hover {
            transform: none;
          }
        }

        @media (max-width: 640px) {
          .brand-link span {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </header>
  );
}