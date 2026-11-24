"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingNavbar.module.css";

const NAV_ITEMS = [
  { label: "PROFILE", href: "#profile" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
] as const;

export function FloatingNavbar() {
  const [active, setActive] = useState<string>("#profile");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>
      <nav
        className={styles.pill}
        aria-label="Primary section navigation"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              aria-current={isActive ? "true" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
