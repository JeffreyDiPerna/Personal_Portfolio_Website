import Header from "../components/header.jsx";
// src/app/experiences/page.js
export const metadata = {
  title: 'Experiences | Jeffrey Di Perna',
  description: 'Professional and club experiences',
};

export default function ExperiencesPage() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.title}>Experiences</h1>

          <section style={styles.section}>
            <h2 style={styles.subtitle}>Machine Learning Engineer — QMIND</h2>
        <p>Sep 2024 – Present, Kingston, ON</p>
        <ul>
          <li>Building RAG-driven instruction generation; piloted with 50+ patients in clinical use.</li>
          <li>Enabled clinician self-serve uploads and QR code delivery for scalable access.</li>
          <li>Synthesized generative AI responses with scientific literature and patient medical data to ensure optimal patient guidance, achieving 89% accuracy with physician recommendations</li>
        </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subtitle}>Software Developer — Engineering Society</h2>
        <p>Sept 2025 – Present, Kingston, ON</p>
        <ul>
          <li>Service to analyze resume structure/keywords, improving callback rates in testing.</li>
          <li>Applied NLP to enhance ATS effectiveness.</li>
          <li>Designed a secure database using MongoDB, yielding zero incidents throughout deployment</li>
        </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subtitle}>External Relations Coordinator — QMIND</h2>
        <p>June 2025 – Present, Kingston, ON</p>
        <ul>
          <li>Expanded QMIND’s external network by 25%.</li>
          <li>Built relationships with alumni, mentors, and industry stakeholders.</li>
          <li>Integrated environment sensors for temperature and voltage to improve response time for data center issues by 18%</li>
        </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subtitle}>Systems Administrator — Trillium Health Partners</h2>
        <p>Jun 2025 – Aug 2025, Mississauga, ON</p>
        <ul>
          <li>Modeled virtual data centers in Sunbird DCIM; monitored 20+ racks across sites.</li>
          <li>Installed, upgraded, and removed hardware to maintain/scale data centers.</li>
        </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.subtitle}>Technical Skills</h2>
        <ul>
          <li>Languages: Python, C, C++,   HTML, CSS, Java, JavaScript, Assembly, MATLAB</li>
          <li>Libraries: NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Matplotlib, Hugging Face, Mongoose</li>
          <li>Frameworks: React.js, Next.js, Flask, Qt, .NET</li>
          <li>Developer Tools:  Git, Docker, Linux, MongoDB, REST APIs, SQL, Node.js</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    padding: 24,
    background: "#ffffff",
    color: "#2563eb",
  },
  container: {
    maxWidth: 960,
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 800,
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    marginBottom: 8,
  },
};
