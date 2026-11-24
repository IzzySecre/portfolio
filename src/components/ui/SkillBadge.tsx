import Image from "next/image";
import type { SkillLevel } from "@/types/portfolio";
import styles from "./SkillBadge.module.css";

const LEVEL_CLASS: Record<SkillLevel, string> = {
  Expert: styles.expert,
  Moderate: styles.moderate,
  Basic: styles.basic,
};

interface SkillBadgeProps {
  name: string;
  level: SkillLevel;
  icon: string;
}

export function SkillBadge({ name, level, icon }: SkillBadgeProps) {
  return (
    <li className={styles.item}>
      <div className={styles.icon} aria-hidden="true">
        <Image
          src={icon}
          alt=""
          width={28}
          height={28}
          className={styles.iconImage}
        />
      </div>
      <div className={styles.meta}>
        <span className={styles.name}>{name}</span>
        <span
          className={`${styles.level} ${LEVEL_CLASS[level]}`}
          title={`Proficiency: ${level}`}
        >
          {level}
        </span>
      </div>
    </li>
  );
}
