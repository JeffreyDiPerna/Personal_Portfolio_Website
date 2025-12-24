
// src/app/experiences/page.js
export const metadata = {
  title: 'Experiences | Jeffrey Di Perna',
  description: 'Professional and club experiences',
};

export default function ExperiencesPage() {
  return (
    <main>
      <h1>Experiences</h1>

      <section>
        <h2>Machine Learning Engineer — QMIND</h2>
        <p>Sep 2024 – Present, Kingston, ON</p>
        <ul>
          <li>Built RAG-driven instruction generation; piloted with 50+ patients in clinical use.</li>
          <li>Enabled clinician self-serve uploads and QR code delivery for scalable access.</li>
        </ul>
      </section>

      <section>
        <h2>Software Developer — Engineering Society</h2>
        <p>Sept 2025 – Present, Kingston, ON</p>
        <ul>
          <li>Service to analyze resume structure/keywords, improving callback rates in testing.</li>
          <li>Applied NLP to enhance ATS effectiveness.</li>
        </ul>
      </section>

      <section>
        <h2>External Relations Coordinator — QMIND</h2>
        <p>June 2025 – Present, Kingston, ON</p>
        <ul>
          <li>Expanded QMIND’s external network by 25%.</li>
          <li>Built relationships with alumni, mentors, and industry stakeholders.</li>
        </ul>
      </section>

      <section>
        <h2>Systems Administrator — Trillium Health Partners</h2>
        <p>Jun 2025 – Aug 2025, Mississauga, ON</p>
        <ul>
          <li>Modeled virtual data centers in Sunbird DCIM; monitored 20+ racks across sites.</li>
          <li>Installed, upgraded, and removed hardware to maintain/scale data centers.</li>
        </ul>
      </section>
    </main>
  );
}
