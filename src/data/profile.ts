import type { ProfileData } from "@/types/portfolio";

export const profile: ProfileData = {
  name: "ELHA CATUR ROHMAN",
  headline: "PORTFOLIO 2026",
  roleBadge: "UI/UX DESIGNER • WEB DEVELOPER • GRAPHIC DESIGNER",
  bio: "5th-semester Informatics Engineering student at Universitas PGRI Ronggolawe Tuban and Founder & CDO of Klympos, bridging UI/UX design systems, frontend engineering, and visual communication into cohesive digital experiences.",
  skills: [
    { name: "Figma", level: "Expert", icon: "/images/assets/software/figma.webp" },
    { name: "Canva", level: "Expert", icon: "/images/assets/software/canva.webp" },
    { name: "Krita", level: "Expert", icon: "/images/assets/software/krita.webp" },
    {
      name: "React / TS",
      level: "Moderate",
      icon: "/images/assets/software/react.webp",
    },
    {
      name: "Next.js",
      level: "Moderate",
      icon: "/images/assets/software/nextjs.webp",
    },
    { name: "CapCut", level: "Basic", icon: "/images/assets/software/capcut.webp" },
    {
      name: "Photoshop (Ps)",
      level: "Basic",
      icon: "/images/assets/software/photoshop.webp",
    },
  ],
  education: {
    period: "2024–Present",
    institution: "Universitas PGRI Ronggolawe Tuban",
    degree: "B.Sc. in Informatics Engineering (Faculty of Engineering)",
  },
  experience: [
    {
      period: "2026–Present",
      role: "Founder & CDO (Chief Design Officer) of Klympos",
    },
    {
      period: "2026",
      role: "CO Sie DEKDOK (INEFEST) & Coordinator 1 of Cadre Development Department (HIMA-TIF)",
    },
  ],
  languages: [
    { name: "INDONESIA", level: 100 },
    { name: "JAWA", level: 100 },
    { name: "ENGLISH", level: 70 },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
};
