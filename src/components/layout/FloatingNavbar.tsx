"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingNavbar.module.css";

const NAV_ITEMS = [
  { label: "HOME", href: "#top" },
  { label: "PROFILE", href: "#profile" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
] as const;

const SECTION_ITEMS = NAV_ITEMS.filter((item) => item.href !== "#top");

export function FloatingNavbar() {
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const sections = SECTION_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter((el): el is Element => el !== null);

    const handleScroll = () => {
      if (window.scrollY < 80) setActive("#top");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (sections.length === 0) {
      return () => window.removeEventListener("scroll", handleScroll);
    }

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
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
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
