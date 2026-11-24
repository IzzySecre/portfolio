# PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Project Name:** Personal Portfolio Website — Elha Catur Rohman  
**Course:** Multimedia Midterm Project (IF562528) — Option 2: Portfolio Website  
**Institution:** Universitas PGRI Ronggolawe Tuban | Lecturer: Suprapto, S.Kom., M.Kom.  
**Document Version:** 1.1 (English Edition)  
**Target Stack:** Next.js (App Router), React, TypeScript, CSS Custom Properties  

---

## 1. Executive Summary & Product Goals

### 1.1 Background
This personal portfolio website is engineered to fulfill **Option 2 (Portfolio Website)** of the Multimedia Midterm Project while serving as a production-grade digital showcase for **Elha Catur Rohman** (Informatics Engineering Student & Founder/CDO of Klympos).

### 1.2 Core Objectives
1. Present professional identity, software/technical proficiency levels, academic background, and leadership/agency experience in a cohesive, responsive dark-editorial layout.
2. Provide a modular **Next.js** portfolio gallery divided into **4 distinct category sections** where only section headers and empty placeholder containers are rendered initially, allowing the owner to populate portfolio items independently via a clean TypeScript data file.
3. Achieve full compliance with the Option 2 grading rubric: Visual Appeal (25 pts), Mobile-First Responsiveness (20 pts), Code Quality with Zero Hardcoded Values (20 pts), UX & Interactivity (15 pts), Performance $< 3\text{s}$ (10 pts), and Documentation/SEO (10 pts).

---

## 2. Next.js Technical Architecture

### 2.1 Directory Structure
```text
portfolio-elha-uts/
├── public/
│   ├── images/
│   │   ├── profile/            # Cutout portraits for Hero & About (WebP < 150KB)
│   │   └── portfolio/          # Dedicated folders for user-added assets
│   │       ├── website-design/
│   │       ├── posters-infographics/
│   │       ├── logo-design/
│   │       └── photography/
│   └── icons/                  # Custom SVG monogram & software skill icons
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, Google Fonts (next/font), & SEO Metadata
│   │   ├── page.tsx            # Main single-page experience (Hero, About, Gallery, Contact)
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx    # Dynamic project detail page (Option 2 requirement)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── FloatingNavbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PortfolioGallerySection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── SkillBadge.tsx
│   │       ├── CategorySectionBlock.tsx
│   │       ├── ProjectCard.tsx
│   │       └── ProjectDetailModal.tsx
│   ├── data/
│   │   ├── profile.ts          # Structured data for bio, 7 skills, experience, & languages
│   │   └── portfolio.ts        # 4 gallery sections with empty items: [] arrays
│   ├── styles/
│   │   ├── tokens.css          # All Design Tokens (:root CSS variables)
│   │   └── globals.css         # CSS reset, base typography, & responsive utilities
│   └── types/
│       └── portfolio.ts        # Strict TypeScript interfaces for profile & portfolio
├── README.md                   # Complete UTS documentation (setup, design decisions, QA)
├── next.config.ts              # Next.js image optimization configuration
└── package.json
```

### 2.2 Gallery Data Schema (`src/types/portfolio.ts` & `src/data/portfolio.ts`)
To ensure the gallery initially renders **only the 4 section titles** without pre-populated portfolio projects—while keeping the codebase ready for instant content expansion—the data model is structured as follows:

```typescript
// src/types/portfolio.ts
export type PortfolioCategorySlug =
  | 'website-design'
  | 'posters-infographics'
  | 'logo-design'
  | 'photography';

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  year: string;
  role: string;
  tools: string[];
  thumbnailUrl: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface PortfolioSectionGroup {
  number: string;
  slug: PortfolioCategorySlug;
  title: string;
  aspectRatio: '16/10' | '3/4' | '1/1' | '4/5';
  items: PortfolioItem[]; // Intentionally initialized as [] for manual user population
}
```

---

## 3. Functional Requirements

### FR-01: Floating Pill Navigation (`FloatingNavbar`)
* **Description:** Sticky pill-shaped navigation bar (`PROFILE`, `PROJECTS`, `CONTACT`) pinned near the top of the viewport across all screen sizes.
* **Acceptance Criteria:** Clicking any link smoothly scrolls to the corresponding section; active pill styling updates automatically based on scroll position using `IntersectionObserver`.

### FR-02: Homepage Hero Section (`HeroSection`)
* **Description:** Bold editorial opening inspired by the visual reference.
* **Required Elements:**
  * Geometric monogram logo at the top left.
  * Crimson-backed (`#9E1B24`) cutout portrait card on the left.
  * Display headline `PORTFOLIO 2026`, role subtitle `UI/UX DESIGNER • WEB DEVELOPER • GRAPHIC DESIGNER`, and 3 interactive navigation triggers (`EXPLORE WORK`, `ABOUT ME`, `CONTACT`).

### FR-03: Profile & Capabilities Section (`AboutSection`)
* **Description:** Displays academic background, agency leadership, software/technical proficiency levels, and communication languages.
* **Required Data:**
  1. **Identity & Bio:** `HELLO, I AM ELHA CATUR ROHMAN` — 5th-semester B.Sc. Informatics Engineering student at Universitas PGRI Ronggolawe Tuban and Founder & CDO of Klympos.
  2. **Software & Tech Skills (7 Items with Proficiency Badges):**
     * `Figma` — **Expert**
     * `Canva` — **Expert**
     * `Krita` — **Expert**
     * `React / TS` — **Expert**
     * `Next.js` — **Moderate**
     * `CapCut` — **Basic**
     * `Photoshop (Ps)` — **Basic**
  3. **Education:** `2024 – Present` | Universitas PGRI Ronggolawe Tuban — B.Sc. in Informatics Engineering.
  4. **Experience:**
     * `2026 – Present` | **Founder & CDO (Chief Design Officer) of Klympos**
     * `2026` | **CO Sie DEKDOK (INEFEST) & Coordinator 1 of Cadre Development Department (HIMA-TIF)**
  5. **Language `[COMMUNICATION]`:**
     * `INDONESIA`: `100%`
     * `JAWA`: `100%`
     * `ENGLISH`: `70%`

### FR-04: 4-Section Portfolio Gallery (`PortfolioGallerySection`)
* **Description:** Displays the main header `RECAP PROJECT 2026` followed by **4 distinct category section headers** with empty placeholder containers (`items: []`), allowing the user to add their own portfolio entries later.
* **Mandatory Section Headers:**
  1. `01. WEBSITE DESIGN`
  2. `02. POSTERS & INFOGRAPHICS`
  3. `03. LOGO DESIGN`
  4. `04. PHOTOGRAPHY`
* **UI Behavior:**
  * Includes quick-jump anchor buttons at the top of the gallery to scroll smoothly to any of the 4 sections.
  * Renders clean empty-state placeholder cards when `items.length === 0` so no broken images or dummy projects appear.
  * Automatically renders interactive `ProjectCard` grids linked to `/projects/[slug]` as soon as items are added to `src/data/portfolio.ts`.

### FR-05: Interactive Contact Form & Footer (`ContactSection` & `Footer`)
* **Description:** Closing section (`THANK YOU 2026`) featuring social links, archive cards (`PORTFOLIO 2024` & `ARCHIVE 2025`), a validated contact form, and a footer.
* **Client-Side Validation Rules:**
  * `Name`: Required, minimum 2 characters.
  * `Email`: Required, must match standard email regex pattern.
  * `Category`: Required dropdown selection (`Website Design`, `Poster & Infographic`, `Logo Design`, `Photography`, `Other`).
  * `Message`: Required, minimum 10 characters.
  * Displays accessible inline error messages (`aria-live="polite"`) and a confirmation banner upon valid submission.

---

## 4. Non-Functional Requirements & Grading Rubric Alignment

| Evaluation Criteria (Option 2) | Weight | Technical Implementation Target |
| :--- | :--- | :--- |
| **Design & Visual Appeal** | 25 pts | Strict adherence to `tokens.css`, `Anton` + `Plus Jakarta Sans` typography hierarchy, and dark editorial contrast. |
| **Responsive Implementation** | 20 pts | Mobile-first CSS grid/flexbox layouts verified at `375px` (Mobile), `768px` (Tablet), and `1440px` (Desktop). |
| **Code Quality & Organization** | 20 pts | Modular Next.js App Router architecture, strict TypeScript interfaces, and **zero hardcoded values** for colors, fonts, or spacing. |
| **User Experience & Interactivity** | 15 pts | Scroll-spy pill navigation, smooth scrolling, tactile hover transitions, and real-time contact form validation. |
| **Performance & Technical** | 10 pts | Optimized WebP assets via `next/image` with lazy loading, $< 3\text{s}$ initial load time, and zero console errors. |
| **Documentation & SEO** | 10 pts | Next.js Metadata API (`title`, `description`, OpenGraph, `alt` attributes), meaningful Git commits, and detailed `README.md`. |
| **Bonus Opportunities** | +9 pts | **WCAG Level AA** compliance via WAVE (+2), **Google Lighthouse 95+** performance score (+2), and optional 10-min Live Presentation (+5). |