
// src/app/projects/page.js
export const metadata = {
  title: 'Projects | Jeffrey Di Perna',
  description: 'Selected projects — ASL recognition, Hyperloop team website, and more.',
};

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      <section>
        <h2>AI‑Powered American Sign Language Recognition</h2>
        <p>Sep 2024 – Mar 2025</p>
        <ul>
          <li>Engineered a deep-learning ASL gesture detection tool trained on 2000+ videos, achieving  90% accuracy</li>
          <li>Implemented Convolutional Neural Networks (CNNs) using Python, Hugging Face, and supervised learning</li>
          <li>Adapted 3D-to-2D CNN with temporal stacking, cutting the required compute by 62%</li>
          <li>First place at Microsoft Firm Day Hackathon</li>
          <li>Winner of the Social Impact Award at the Canadian Conference for Artificial Intelligence</li>

        </ul>
      </section>
      <section>
        <h2>HOOPP Cards</h2>
        <p>Sep 2025 – Dec 2025</p>
        <ul>
          <li>Built a full-stack fantasy basketball application, keeping interactions under 200ms using C++ and QT</li>
          <li>Created a responsive system to manage 70+ user accounts and data from 400+ NBA players with SQL</li>
        </ul>
      </section>
      <section>
        <h2>Queen’s Hyperloop Design Team Website</h2>
        <p>Jan 2024 – Apr 2024</p>
        <ul>
          <li>Built secure site with auth, announcements, and profiles for 100+ users.</li>
          <li>Contributed front‑end UI in HTML/CSS.</li>
        </ul>
      </section>
    </main>
  );
}
