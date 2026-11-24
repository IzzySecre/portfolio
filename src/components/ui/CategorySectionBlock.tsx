import type { PortfolioSectionGroup } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import styles from "./CategorySectionBlock.module.css";

interface CategorySectionBlockProps {
  section: PortfolioSectionGroup;
}

export function CategorySectionBlock({ section }: CategorySectionBlockProps) {
  const hasItems = section.items.length > 0;

  return (
    <section
      id={section.slug}
      className={styles.block}
      aria-labelledby={`${section.slug}-heading`}
    >
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <span className={`font-mono ${styles.number}`} aria-hidden="true">
            {section.number}.
          </span>
          <h3
            id={`${section.slug}-heading`}
            className={`font-display ${styles.title}`}
          >
            {section.title}
          </h3>
        </div>
        <div className={styles.headerDivider} aria-hidden="true" />
        <span className={`font-mono ${styles.count}`}>
          {String(section.items.length).padStart(2, "0")} ITEMS
        </span>
      </header>

      {hasItems ? (
        <ul className={styles.grid}>
          {section.items.map((item) => (
            <li key={item.id}>
              <ProjectCard item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.placeholder}>
          <p className={styles.placeholderText}>
            Portfolio Slot Ready: Add items in src/data/portfolio.ts
          </p>
        </div>
      )}
    </section>
  );
}
