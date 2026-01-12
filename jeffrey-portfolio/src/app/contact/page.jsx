import Header from "../components/header.jsx";
// src/app/contact/page.jsx

export default function ContactPage() {
  return (
    <>
      <Header /> 

      <main style={styles.main}>
        <section style={styles.section}>
          <h1 style={styles.title}>Contact</h1>

          <div style={styles.buttonContainer}>
            <a
              href="mailto:jeffrey.diperna@gmail.com"
              style={styles.button}
              aria-label="Email Jeffrey Di Perna"
            >
              Email
            </a>
            <a
              href="https://github.com/JeffreyDiPerna"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
              aria-label="Visit GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeffrey-di-perna-39ab101a3/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
              aria-label="Visit LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              type="application/pdf"
              style={styles.button}
              aria-label="Open Jeffrey Di Perna's Resume"
            >
              Resume
            </a>
          </div>
        </section>
      </main>
    </> 
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff", // white
    color: "#0f172a",      // deep slate
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    padding: 24,
  },
  section: {
    width: "100%",
    maxWidth: 720,
  },
  title: {
    margin: "0 0 12px 0",
    fontSize: "2rem",
    fontWeight: 800,
    letterSpacing: "0.02em",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 8,
    background: "#ffffff", // white
    color: "#0f172a",      // deep slate
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "0.02em",
    border: "1px solid #0f172a", // outline
    boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
    transition: "transform 120ms ease, background 120ms ease, color 120ms ease",
  },
};
``
