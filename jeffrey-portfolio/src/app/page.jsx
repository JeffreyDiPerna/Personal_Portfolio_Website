
// src/app/page.jsx
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <h1>Jeffrey Di Perna</h1>
      <Image
        src="/Headshot.jpg"
        alt="Jeffrey Di Perna"
        width={400}
        height={400}
      />
      <p>Computer Engineering Student @ Queen's University</p>
      <p>Come explore my portfolio of projects, skills, and experiences.</p>

      <ul className={styles.navList}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/experiences">Experiences</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </main>
  );
}
