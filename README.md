# Elha Catur Rohman — Portfolio 2026

Production-grade personal portfolio website built with **Next.js (App Router)**, **React**, **TypeScript**, and **CSS Custom Properties**, following `design.md` and `prd.md`.

## Project Overview

A dark editorial & game-UI inspired portfolio for **Elha Catur Rohman** — 5th-semester Informatics Engineering student at Universitas PGRI Ronggolawe Tuban and Founder & CDO of Klympos. The site presents professional identity, skill proficiency, education/experience, a modular 4-category project gallery, and a validated contact form.

**Live Demo:** _deployment URL placeholder_

## Tech Stack

| Layer        | Choice                                      |
| ------------ | ------------------------------------------- |
| Framework    | Next.js 16 (App Router, Cache Components)   |
| UI Library   | React 19                                    |
| Language     | TypeScript (strict)                         |
| Styling      | CSS Modules + CSS Custom Properties         |
| Fonts        | `next/font/google` (Anton, Plus Jakarta Sans, JetBrains Mono) |
| Linting      | ESLint (`eslint-config-next`)               |

## Design System Decisions

- **Zero hardcoded values in component stylesheets** — every color, font family, type scale, spacing unit, border radius, and effect lives in `src/styles/tokens.css` as `:root` custom properties. Components only reference `var(--*)`.
- **Token-driven skill levels** — `Expert`, `Moderate`, and `Basic` map to semantic background/border/text token triples.
- **Responsive type scale** — hero/h1/h2 tokens re-scale at `640px` and `1024px` breakpoints to match the design spec (mobile → desktop).
- **Font roles** — `--font-display` (Anton) for uppercase display headers; `--font-sans` (Plus Jakarta Sans) for body/UI copy; `--font-mono` (JetBrains Mono) for year stamps, section indices, pills, and percentages.
- **Empty gallery by design** — all four category sections start with `items: []`. The UI renders dashed architectural placeholders instead of dummy projects; adding objects to `src/data/portfolio.ts` auto-activates `ProjectCard` grids and `/projects/[slug]`.

## Folder Architecture

```text
public/
  images/
    profile/
    portfolio/{website-design,posters-infographics,logo-design,photography}/
  icons/
src/
  app/
    layout.tsx                 # Root layout, Google Fonts, SEO metadata
    page.tsx                   # Single-page experience
    projects/[slug]/page.tsx   # Dynamic project detail route
  components/
    layout/
      FloatingNavbar.tsx(.module.css)
      Footer.tsx(.module.css)
    sections/
      HeroSection.tsx(.module.css)
      AboutSection.tsx(.module.css)
      PortfolioGallerySection.tsx(.module.css)
      ContactSection.tsx(.module.css)
    ui/
      SkillBadge.tsx(.module.css)
      CategorySectionBlock.tsx(.module.css)
      ProjectCard.tsx(.module.css)
      ProjectDetailModal.tsx(.module.css)
  data/
    profile.ts                 # Bio, 7 skills, education, experience, languages
    portfolio.ts               # 4 category groups with items: []
  styles/
    tokens.css                 # All design tokens (:root)
    globals.css                # Reset, base typography, utilities
  types/
    portfolio.ts               # Strict TypeScript interfaces
design.md
prd.md
next.config.ts
```

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Adding Portfolio Items

1. Place assets under `public/images/portfolio/<category>/`.
2. Append objects to the matching `items` array in `src/data/portfolio.ts`:

```ts
{
  id: "wd-01",
  slug: "example-site",
  title: "Example Site",
  year: "2026",
  role: "UI/UX + Frontend",
  tools: ["Figma", "Next.js"],
  thumbnailUrl: "/images/portfolio/website-design/example.webp",
  description: "Case study summary…",
  liveUrl: "https://example.com",
}
```

3. Cards and `/projects/example-site` activate automatically.

## Accessibility & Performance Notes

- **WCAG AA targets** — high-contrast token pairs (`--text-primary` on `--bg-primary` ≈ 18:1, secondary ≈ 7:1); focus-visible outlines using `--accent-cyan`.
- **Semantics** — landmark regions, labelled form controls, `aria-invalid` / `role="alert"` inline errors, `aria-live="polite"` status region, progressbar roles for language levels, `aria-current` on active nav pills.
- **Motion** — `prefers-reduced-motion: reduce` disables smooth scroll and transitions.
- **Fonts** — self-hosted via `next/font` with `display: swap` (no CLS from font swap).
- **Images** — gallery uses lazy-loaded `<img>` until real assets exist; switch to `next/image` when adding production WebP assets under 150KB.
- **Nav** — sticky glass pill with `IntersectionObserver` scroll-spy; native anchor smooth scrolling.
- **Form** — pure client-side validation (name ≥ 2, email regex, category required, message ≥ 10) with accessible error messaging.

## Course Info

Multimedia Midterm Project (IF562528) — Option 2: Portfolio Website  
Universitas PGRI Ronggolawe Tuban · Lecturer: Suprapto, S.Kom., M.Kom.
