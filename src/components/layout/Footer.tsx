import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © 2026 Elha Catur Rohman. All rights reserved.
        </p>
        <p className={styles.tech}>
          Built with Next.js · React · TypeScript · CSS Custom Properties
        </p>
      </div>
    </footer>
  );
}
