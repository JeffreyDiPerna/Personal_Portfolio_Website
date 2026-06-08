
// src/components/Header.jsx

'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experiences' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        background: isScrolled 
          ? "rgba(255, 255, 255, 0.95)" 
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: isScrolled 
          ? "1px solid rgba(30, 41, 59, 0.15)" 
          : "1px solid transparent",
        boxShadow: isScrolled 
          ? "0 10px 30px rgba(30, 41, 59, 0.1)" 
          : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Brand */}
        <Link 
          href="/" 
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#0369a1",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.2rem",
            letterSpacing: "-0.02em",
            transition: "all 0.3s ease",
          }}
          className="brand-link"
        >
          <span style={{ fontSize: "1.5rem" }}>◆</span>
          <span>Jeffrey</span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                style={{
                  color: isActive(item.href) ? "#0369a1" : "#64748b",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  position: "relative",
                  transition: "color 0.3s ease",
                  paddingBottom: "4px",
                  borderBottom: isActive(item.href) 
                    ? "2px solid #0369a1" 
                    : "2px solid transparent",
                  display: "inline-block",
                }}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Resume CTA */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "10px 24px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #0369a1 0%, #06b6d4 100%)",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            border: "1px solid rgba(3, 105, 161, 0.3)",
            boxShadow: "0 4px 15px rgba(3, 105, 161, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          className="resume-btn"
        >
          Resume
        </motion.a>
      </div>

      <style jsx>{`
        .nav-link {
          background: linear-gradient(to right, #0369a1 0%, #06b6d4 100%);
          background-size: 200% 2px;
          background-position: 200% 100%;
          background-repeat: no-repeat;
          transition: all 0.3s ease;
        }

        .nav-link:hover:not(.active) {
          background-position: 0% 100%;
        }

        .resume-btn:hover {
          box-shadow: 0 8px 25px rgba(3, 105, 161, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .resume-btn {
            display: none;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;