'use client';

import Image from "next/image";
import Header from "../components/header.jsx";
import PageTransition from "../components/PageTransition";

// src/app/contact/page.jsx

export default function ContactPage() {
  const contactLinks = [
    {
      name: "Email",
      href: "mailto:jeffrey.diperna@gmail.com",
      icon: "📧",
      color: "#ef4444",
      description: "Get in touch via email"
    },
    {
      name: "GitHub",
      href: "https://github.com/JeffreyDiPerna",
      icon: "/github.svg",
      color: "#333333",
      description: "View my code repositories",
      isImage: true
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jeffrey-di-perna-39ab101a3/",
      icon: "/linkedin.webp",
      color: "#0077B5",
      description: "Connect professionally",
      isImage: true
    },
    {
      name: "Resume",
      href: "/resume.pdf",
      icon: "📄",
      color: "#6366f1",
      description: "Download my resume"
    }
  ];

  return (
    <PageTransition>
      <Header /> 

      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.title}>Let's Connect</h1>
          <p style={styles.subtitle}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>

          <div style={styles.grid}>
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                style={styles.card}
                className="contact-card"
              >
                <div style={styles.iconWrapper}>
                  {link.isImage ? (
                    <Image
                      src={link.icon}
                      alt={`${link.name} logo`}
                      width={40}
                      height={40}
                      style={styles.iconImage}
                    />
                  ) : (
                    <span style={styles.icon}>{link.icon}</span>
                  )}
                </div>
                <h3 style={styles.cardTitle}>{link.name}</h3>
                <p style={styles.cardDescription}>{link.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Styled JSX */}
        <style jsx>{`
          .contact-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2);
            border-color: rgba(99, 102, 241, 0.5);
          }

          @media (hover: none) {
            .contact-card:hover {
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 24px",
  },
  container: {
    width: "100%",
    maxWidth: "1000px",
  },
  title: {
    margin: "0 0 16px 0",
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    fontWeight: 800,
    textAlign: "center",
    background: "linear-gradient(135deg, #818cf8 0%, #06b6d4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    fontSize: "1.15rem",
    color: "#94a3b8",
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto 64px",
    lineHeight: 1.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    textDecoration: "none",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  iconWrapper: {
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)",
    borderRadius: "50%",
    marginBottom: "20px",
    border: "2px solid rgba(99, 102, 241, 0.3)",
  },
  icon: {
    fontSize: "2.5rem",
  },
  iconImage: {
    objectFit: "contain",
  },
  cardTitle: {
    fontSize: "1.35rem",
    fontWeight: 700,
    color: "#f8fafc",
    marginBottom: "8px",
  },
  cardDescription: {
    fontSize: "0.95rem",
    color: "#94a3b8",
    textAlign: "center",
    margin: 0,
  },
};
``
