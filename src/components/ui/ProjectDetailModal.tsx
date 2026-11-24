"use client";

import { useState } from "react";
import type { PortfolioItem } from "@/types/portfolio";
import styles from "./ProjectDetailModal.module.css";

interface ProjectDetailModalProps {
  item: PortfolioItem;
}

export function ProjectDetailModal({ item }: ProjectDetailModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
      >
        Quick Preview
      </button>

      {open && (
        <div
          className={styles.overlay}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Close project preview"
            >
              ✕
            </button>
            <p className={styles.year}>{item.year}</p>
            <h2 id="project-modal-title" className={styles.title}>
              {item.title}
            </h2>
            <p className={styles.role}>{item.role}</p>
            <p className={styles.description}>{item.description}</p>
            <ul className={styles.tools}>
              {item.tools.map((tool) => (
                <li key={tool} className={styles.tool}>
                  {tool}
                </li>
              ))}
            </ul>
            <div className={styles.links}>
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Live Demo
                </a>
              )}
              {item.repoUrl && (
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
