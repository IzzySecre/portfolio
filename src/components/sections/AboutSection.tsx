import Image from "next/image";
import type { ProfileData } from "@/types/portfolio";
import { SkillBadge } from "@/components/ui/SkillBadge";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  profile: ProfileData;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section
      id="profile"
      className={`section ${styles.about}`}
      aria-labelledby="about-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.visualCol}>
          <p className={styles.eyebrow}>HELLO, I AM</p>
          <h2 id="about-heading" className={`font-display ${styles.title}`}>
            {profile.name}
          </h2>
          <div className={styles.portraitFrame}>
            <Image
              src="/images/assets/profile/about.webp"
              alt="Elha Catur Rohman"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className={styles.portraitImage}
            />
          </div>
        </div>

        <div className={styles.dataCol}>
          <div className={styles.block}>
            <h3 className={`font-display ${styles.blockTitle}`}>ABOUT ME</h3>
            <div className={styles.divider} aria-hidden="true" />
            <p className={styles.bio}>{profile.bio}</p>
          </div>

          <div className={styles.block}>
            <h3 className={`font-display ${styles.blockTitle}`}>
              SOFTWARE & TECH SKILLS
            </h3>
            <div className={styles.divider} aria-hidden="true" />
            <ul className={styles.skillGrid}>
              {profile.skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </ul>
          </div>

          <div className={styles.subGrid}>
            <div className={styles.block}>
              <h3 className={`font-display ${styles.blockTitle}`}>
                EDUCATION
              </h3>
              <div className={styles.divider} aria-hidden="true" />
              <article className={styles.entry}>
                <span className={styles.period}>{profile.education.period}</span>
                <p className={styles.entryRole}>
                  {profile.education.institution}
                </p>
                <p className={styles.entryMeta}>{profile.education.degree}</p>
              </article>
            </div>

            <div className={styles.block}>
              <h3 className={`font-display ${styles.blockTitle}`}>
                EXPERIENCE
              </h3>
              <div className={styles.divider} aria-hidden="true" />
              <ul className={styles.entryList}>
                {profile.experience.map((exp) => (
                  <li key={`${exp.period}-${exp.role}`} className={styles.entry}>
                    <span className={styles.period}>{exp.period}</span>
                    <p className={styles.entryRole}>{exp.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={`font-display ${styles.blockTitle}`}>
              LANGUAGE{" "}
              <span className={styles.tag}>[COMMUNICATION]</span>
            </h3>
            <div className={styles.divider} aria-hidden="true" />
            <ul className={styles.langList}>
              {profile.languages.map((lang) => (
                <li key={lang.name} className={styles.langItem}>
                  <div className={styles.langHeader}>
                    <span className={styles.langName}>{lang.name}</span>
                    <span className={styles.langPct}>{lang.level}%</span>
                  </div>
                  <div
                    className={styles.track}
                    role="progressbar"
                    aria-valuenow={lang.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${lang.name} proficiency`}
                  >
                    <div
                      className={styles.fill}
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
