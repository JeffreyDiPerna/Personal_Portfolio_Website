
// src/app/contact/page.jsx

export default function ContactPage() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <h1 style={styles.title}>Contact</h1>

        <ul style={styles.list}>
          <li style={styles.item}>
            Email:{" "}
            <a href="mailto:jeffrey.diperna@gmail.com" style={styles.link}>
              jeffrey.diperna@gmail.com
            </a>
          </li>

          <li style={styles.item}>
            Phone:{" "}
            <a href="tel:+19056161978" style={styles.link}>
              +1 (905) 616-1978
            </a>
          </li>

          <li style={styles.item}>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jeffrey-di-perna-39ab101a3/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              LinkedIn
            </a>
          </li>

          <li style={styles.item}>
            GitHub:{" "}
            <a
              href="https://github.com/JeffreyDiPerna"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              GitHub
            </a>
          </li>

          <li style={styles.item}>
            {" "}
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
          </li>
        </ul>
      </section>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a", // slate-900
    color: "#e5e7eb",      // gray-200
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
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 12,
  },
  item: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
  },
  link: {
    color: "#93c5fd", // blue-300
    textDecoration: "none",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 8,
    background: "#1f2937", // gray-800
    color: "#e5e7eb",      // gray-200
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: "0.02em",
    boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
    transition: "transform 120ms ease, background 120ms ease, color 120ms ease",
  },
};
``
