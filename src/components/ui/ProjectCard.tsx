import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/types/portfolio";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  item: PortfolioItem;
}

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/projects/${item.slug}`} className={styles.link}>
        <div className={styles.thumb}>
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className={styles.image}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.metaRow}>
            <span className={styles.year}>{item.year}</span>
            <span className={styles.role}>{item.role}</span>
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          <ul className={styles.tools}>
            {item.tools.map((tool) => (
              <li key={tool} className={styles.tool}>
                {tool}
              </li>
            ))}
          </ul>
          <span className={styles.cta} aria-hidden="true">
            VIEW CASE STUDY →
          </span>
        </div>
      </Link>
    </article>
  );
}
