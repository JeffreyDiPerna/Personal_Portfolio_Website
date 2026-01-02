
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
          <li>Building RAG-driven instruction generation; piloted with 50+ patients in clinical use.</li>
          <li>Enabled clinician self-serve uploads and QR code delivery for scalable access.</li>
          <li>Synthesized generative AI responses with scientific literature and patient medical data to ensure optimal patient guidance, achieving 89% accuracy with physician recommendations</li>
        </ul>
      </section>

      <section>
        <h2>Software Developer — Engineering Society</h2>
        <p>Sept 2025 – Present, Kingston, ON</p>
        <ul>
          <li>Service to analyze resume structure/keywords, improving callback rates in testing.</li>
          <li>Applied NLP to enhance ATS effectiveness.</li>
          <li>Designed a secure database using MongoDB, yielding zero incidents throughout deployment</li>
        </ul>
      </section>

      <section>
        <h2>External Relations Coordinator — QMIND</h2>
        <p>June 2025 – Present, Kingston, ON</p>
        <ul>
          <li>Expanded QMIND’s external network by 25%.</li>
          <li>Built relationships with alumni, mentors, and industry stakeholders.</li>
          <li>Integrated environment sensors for temperature and voltage to improve response time for data center issues by 18%</li>
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

      <section>
        <h2>Technical Skills </h2>
        <ul>
          <li>Languages: Python, C, C++,   HTML, CSS, Java, JavaScript, Assembly, MATLAB</li>
          <li>Libraries: NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Matplotlib, Hugging Face, Mongoose</li>
          <li>Frameworks: React.js, Next.js, Flask, Qt, .NET</li>
          <li>Developer Tools:  Git, Docker, Linux, MongoDB, REST APIs, SQL, Node.js</li>
        </ul>
      </section>
    </main>
  );
}
