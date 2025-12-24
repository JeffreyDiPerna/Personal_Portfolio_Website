
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
          <li>Engineered real‑time ASL gesture detection with ~90% accuracy.</li>
          <li>Implemented CNNs in Python; supervised learning pipeline.</li>
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
