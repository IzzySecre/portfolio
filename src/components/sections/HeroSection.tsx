import Image from "next/image";
import styles from "./HeroSection.module.css";

const JUMP_LINKS = [
  { label: "EXPLORE WORK", href: "#projects" },
  { label: "ABOUT ME", href: "#profile" },
  { label: "CONTACT", href: "#contact" },
] as const;

interface HeroSectionProps {
  name: string;
  headline: string;
  roleBadge: string;
}

export function HeroSection({ name, headline, roleBadge }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.topBar}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandText}>
            <span className={styles.brandName}>ELHA CATUR ROHMAN</span>
            <span className={styles.brandSub}>GRAPHIC DESIGNER</span>
          </span>
        </a>
        <span className={styles.yearStamp} aria-hidden="true">
          2026
        </span>
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.portraitCol}>
          <div className={styles.portraitCard}>
            <Image
              src="/images/assets/profile/profile-hero.webp"
              alt="Elha Catur Rohman"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              className={styles.portraitImage}
              priority
            />
            <span className={styles.portraitLabel}>{name}</span>
          </div>
        </div>

        <div className={styles.contentCol}>
          <p className={styles.roleBadge}>{roleBadge}</p>
          <h1 id="hero-heading" className={`font-display ${styles.headline}`}>
            {headline}
          </h1>
          <p className={styles.lede}>
            Dark editorial showcase of design systems, frontend engineering,
            and visual communication work.
          </p>
          <ul className={styles.jumps}>
            {JUMP_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.jumpBtn}>
                  <span>{link.label}</span>
                  <span className={styles.jumpArrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
