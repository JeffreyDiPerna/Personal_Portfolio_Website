
// src/app/page.jsx
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Jeffrey Di Perna</h1>
      <p>Personal portfolio — About, Projects, Experiences, Contact.</p>

      <ul className={styles.navList}>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/experiences">
            Experiences
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </main>
  );
}
