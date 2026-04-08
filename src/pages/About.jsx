import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.heading}>About This Blog</h1>
      <p className={styles.paragraph}>
        This blog is dedicated to thoughtful living, femininity, and intentional
        storytelling.
      </p>
      <h2 className={styles.heading}>Our Writers</h2>
      <p className={styles.paragraph}>We are a group of women passionate about sharing meaningful content.</p>
    </section>
  );
}