import type { PortfolioSectionGroup } from "@/types/portfolio";
import { CategorySectionBlock } from "@/components/ui/CategorySectionBlock";
import styles from "./PortfolioGallerySection.module.css";

interface PortfolioGallerySectionProps {
  sections: PortfolioSectionGroup[];
}

export function PortfolioGallerySection({
  sections,
}: PortfolioGallerySectionProps) {
  return (
    <section
      id="projects"
      className={`section ${styles.gallery}`}
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        <header className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>SELECTED WORK</p>
            <h2
              id="gallery-heading"
              className={`font-display ${styles.title}`}
            >
              RECAP PROJECT 2026
            </h2>
          </div>
          <nav className={styles.anchors} aria-label="Category quick jumps">
            {sections.map((section) => (
              <a
                key={section.slug}
                href={`#${section.slug}`}
                className={styles.anchorPill}
              >
                <span className={styles.anchorNumber}>{section.number}.</span>
                <span>{section.title}</span>
              </a>
            ))}
          </nav>
        </header>

        <div className={styles.sections}>
          {sections.map((section) => (
            <CategorySectionBlock key={section.slug} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
