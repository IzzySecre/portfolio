export type SkillLevel = "Expert" | "Moderate" | "Basic";

export interface SkillItem {
  name: string;
  level: SkillLevel;
  icon: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
}

export interface LanguageItem {
  name: string;
  level: number;
}

export type PortfolioCategorySlug =
  | "website-design"
  | "posters-infographics"
  | "logo-design"
  | "photography"
  | "social-media-carousel"
  | "banner-design";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  year: string;
  role: string;
  tools: string[];
  thumbnailUrl: string;
  width: number;
  height: number;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface PortfolioSectionGroup {
  number: string;
  slug: PortfolioCategorySlug;
  title: string;
  items: PortfolioItem[];
}

export interface ProfileData {
  name: string;
  headline: string;
  roleBadge: string;
  bio: string;
  skills: SkillItem[];
  education: EducationItem;
  experience: ExperienceItem[];
  languages: LanguageItem[];
  socials: { label: string; href: string }[];
}
