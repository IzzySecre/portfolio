# DESIGN SYSTEM & UI ARCHITECTURE SPECIFICATION
**Project:** Personal Portfolio Website (Multimedia Midterm Project - Option 2)  
**Author:** Elha Catur Rohman  
**Tech Stack:** Next.js (App Router), React, TypeScript, CSS Custom Properties  
**Design Tool:** Penpot / Figma (Open Design Workflow)  
**Visual Direction:** Dark Editorial & Game-UI Inspired Tech Showcase  

---

## 1. Design Principles & Visual Direction

1. **Dark Editorial Atmosphere:** Adapts a deep navy-teal dark interface aesthetic featuring subtle radial lighting, sharp geometric framing, and bold condensed uppercase display typography.
2. **Zero Hardcoded Values (Token-Driven):** All color values, font scales, spacing units, and border radii are defined strictly as CSS Custom Properties inside a global token stylesheet (`src/styles/tokens.css`) to satisfy technical code quality standards.
3. **Mobile-First & Responsive Fluidity:** Components are engineered starting from mobile viewports (`375px`) scaling seamlessly to tablet (`768px`) and desktop (`1440px`) without horizontal overflow.
4. **WCAG Level AA Accessibility:** Text and interactive element contrast ratios are maintained at a minimum of $4.5:1$ for normal body text and $3:1$ for large display text and UI components.

---

## 2. Design Tokens (`src/styles/tokens.css`)

### 2.1 Color System
The color palette blends the dark obsidian-teal atmosphere from the visual reference with a crimson portrait accent in the Hero section and the signature **Klympos** brand colors (`#27629F` and `#A5D1E4`).

| Token Name | Value | Usage & Semantic Role | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#060B10` | Main canvas background (*Deep Obsidian*) | Base |
| `--bg-secondary` | `#0B1520` | Alternating subtle section background | Base |
| `--bg-radial-glow` | `radial-gradient(circle at 75% 25%, #0F293A 0%, #060B10 70%)` | Atmospheric radial spotlight for Hero & About sections | Base |
| `--surface-glass` | `rgba(15, 34, 49, 0.65)` | Card surfaces, floating pill navbar, and modals (`backdrop-blur`) | — |
| `--surface-card-hover` | `rgba(22, 48, 69, 0.85)` | Hover state background for interactive cards | — |
| `--accent-crimson` | `#9E1B24` | Hero portrait cutout card background | $5.2:1$ |
| `--accent-primary` | `#27629F` | Primary CTA buttons and active input focus rings | $4.8:1$ |
| `--accent-cyan` | `#A5D1E4` | Text highlights, hover borders, and active state indicators | $11.4:1$ |
| `--text-primary` | `#F8FAFC` | Primary headings, active pill tab text, high-contrast copy | $18.1:1$ |
| `--text-secondary` | `#94A3B8` | Bio descriptions, subtitles, and secondary metadata | $7.2:1$ |
| `--text-inverse` | `#060B10` | Text placed on top of bright buttons or active light pills | $18.1:1$ |
| `--border-subtle` | `rgba(165, 209, 228, 0.16)` | Card borders, column dividers, and pill capsule outlines | — |
| `--border-active` | `rgba(165, 209, 228, 0.55)` | Border highlight on hover or keyboard focus | — |
| `--status-error` | `#F87171` | Form validation error messages and invalid input borders | $7.5:1$ |
| `--status-success` | `#34D399` | Form submission success feedback | $9.8:1$ |

#### Skill Level Semantic Tokens
| Token Name | Background / Border | Text Color | Proficiency Level |
| :--- | :--- | :--- | :--- |
| `--skill-expert-bg` | `#A5D1E4` (solid) | `#060B10` | `Expert` |
| `--skill-moderate-bg` | `rgba(39, 98, 159, 0.45)` (`1px solid #27629F`) | `#F8FAFC` | `Moderate` |
| `--skill-basic-bg` | `rgba(148, 163, 184, 0.15)` (`1px solid #94A3B8`) | `#94A3B8` | `Basic` |

### 2.2 Typography System (`next/font/google`)
Fonts are loaded via `next/font/google` in `src/app/layout.tsx` to eliminate Cumulative Layout Shift (CLS) and optimize web font delivery.

* **`--font-display` (`Anton`):** Used exclusively for large display headers (`PORTFOLIO 2026`, `ABOUT ME`, `RECAP PROJECT 2026`, gallery category titles, and `THANK YOU 2026`). `text-transform: uppercase`, `letter-spacing: 0.03em`.
* **`--font-sans` (`Plus Jakarta Sans`):** Used for narrative bio copy, navigation links, form labels, and project descriptions.
* **`--font-mono` (`JetBrains Mono`):** Used for year stamps (`2026`), section index numbers (`01`, `02`, `03`, `04`), skill proficiency pills, and language percentages.

| Scale Token | Desktop Size | Mobile Size | Font Family | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| `--text-hero` | `5.5rem` (`88px`) | `3.25rem` (`52px`) | `--font-display` | `0.95` |
| `--text-h1` | `3rem` (`48px`) | `2rem` (`32px`) | `--font-display` | `1.05` |
| `--text-h2` | `1.75rem` (`28px`) | `1.375rem` (`22px`) | `--font-display` | `1.15` |
| `--text-h3` | `1.25rem` (`20px`) | `1.125rem` (`18px`) | `--font-sans` (700) | `1.3` |
| `--text-body` | `1rem` (`16px`) | `0.9375rem` (`15px`) | `--font-sans` (400) | `1.6` |
| `--text-caption` | `0.75rem` (`12px`) | `0.75rem` (`12px`) | `--font-mono` (600) | `1.4` |

### 2.3 Spacing, Grid & Radius Tokens
* **Spacing Scale ($8\text{px}$ Base Unit):**
  * `--space-xs`: `0.25rem` (`4px`)
  * `--space-sm`: `0.5rem` (`8px`)
  * `--space-md`: `1rem` (`16px`)
  * `--space-lg`: `1.5rem` (`24px`)
  * `--space-xl`: `3rem` (`48px`)
  * `--space-2xl`: `5rem` (`80px`)
* **Border Radius:**
  * `--radius-pill`: `9999px` (Floating Pill Navbar & Category Filter Tabs)
  * `--radius-card`: `16px` (Crimson Portrait Card, Gallery Containers & Contact Form Card)
  * `--radius-badge`: `8px` (Software Skill Icons & Form Input Fields)
* **Responsive Grid Breakpoints:**
  * Mobile (`< 640px`): 4 columns, `20px` side padding, `16px` gutter.
  * Tablet (`640px – 1023px`): 8 columns, `32px` side padding, `20px` gutter.
  * Desktop (`>= 1024px`): 12 columns, `max-width: 1200px`, `24px` gutter.

---

## 3. UI Component Specifications (`src/components/`)

### 3.1 `FloatingNavbar`
* **Structure:** Centered floating capsule at the top of the viewport (`position: sticky; top: 20px; z-index: 50`) styled with `--surface-glass`, `backdrop-filter: blur(12px)`, and `--border-subtle`.
* **Navigation Items:** `PROFILE` | `PROJECTS` | `CONTACT`.
* **Active State:** Highlighted with `--text-primary` (`#F8FAFC`) background and `--text-inverse` (`#060B10`) text, dynamically tracked via `IntersectionObserver` on scroll.

### 3.2 `HeroSection`
* **Top Header Bar:** Custom geometric monogram logo (`ECR` / `Klympos`) positioned at the top-left corner.
* **Main Layout:** Asymmetric 2-column grid:
  * **Left Column:** Vertical portrait card (`--radius-card`) with `--accent-crimson` (`#9E1B24`) fill and a rounded top-right corner housing the cutout profile image.
  * **Right Column:** Massive display headline `PORTFOLIO 2026`, role badge `UI/UX DESIGNER • WEB DEVELOPER • GRAPHIC DESIGNER`, and 3 vertical interactive quick-jump actions (`EXPLORE WORK`, `ABOUT ME`, `CONTACT`).

### 3.3 `AboutSection` (`PROFILE`)
Asymmetric 2-column layout (40% Left Visual Identity, 60% Right Biographical & Skill Matrix):
* **Left Column:**
  * Eyebrow subtitle `HELLO, I AM` + Display title `ELHA CATUR ROHMAN`.
  * Secondary cutout portrait photo with subtle cyan-blue rim lighting blending seamlessly into `--bg-radial-glow`.
* **Right Column:**
  * **Biography (`ABOUT ME`):** Concise summary highlighting background as a 5th-semester Informatics Engineering student at Universitas PGRI Ronggolawe Tuban and Founder & CDO of Klympos.
  * **Software & Tech Skills:** Responsive 7-item badge grid. Each item displays a `44px × 44px` icon container paired with a semantic proficiency pill underneath:
    1. `Figma` — `Expert`
    2. `Canva` — `Expert`
    3. `Krita` — `Expert`
    4. `React / TS` — `Expert`
    5. `Next.js` — `Moderate`
    6. `CapCut` — `Basic`
    7. `Photoshop (Ps)` — `Basic`
  * **2-Column Sub-Grid (Education & Experience):**
    * *Education:* `2024 – Present` | Universitas PGRI Ronggolawe Tuban — B.Sc. in Informatics Engineering.
    * *Experience:*
      1. `2026 – Present` | **Founder & CDO (Chief Design Officer) of Klympos**
      2. `2026` | **CO Sie DEKDOK (INEFEST) & Coordinator 1 of Cadre Development Department (HIMA-TIF)**
  * **Language `[COMMUNICATION]`:** Horizontal progress bars for `INDONESIA (100%)`, `JAWA (100%)`, and `ENGLISH (70%)`.

### 3.4 `PortfolioGallerySection` (`RECAP PROJECT 2026`)
* **Section Header:** Display title `RECAP PROJECT 2026` paired with quick-jump category anchor pills.
* **4-Section Category Architecture (Headers & Empty Placeholders Only):**
  The gallery is organized into 4 sequential category blocks. Each block renders its **Section Number & Category Title**, a subtle horizontal divider, and a modular responsive grid container ready for manual population by the user:
  1. **`01. WEBSITE DESIGN`** — Landscape grid container (`16:10` aspect ratio) for UI/UX and web development showcases.
  2. **`02. POSTERS & INFOGRAPHICS`** — Portrait grid container (`3:4` aspect ratio) for poster campaigns and information design.
  3. **`03. LOGO DESIGN`** — Square grid container (`1:1` aspect ratio) for vector marks and brand identities.
  4. **`04. PHOTOGRAPHY`** — Flexible editorial grid container (`4:5` / `16:9` aspect ratio) for curated photography.
* **Empty State Behavior:** Because the initial `items` array for each section is intentionally empty (`[]`), each section displays a clean, dashed architectural placeholder frame (`1px dashed var(--border-subtle)`, `min-height: 220px`) labeled `"Portfolio Slot Ready — Add items in src/data/portfolio.ts"` so the visual hierarchy remains intact.
* **Ready-to-Use Detail Infrastructure:** `ProjectCard`, `ProjectDetailModal`, and the dynamic Next.js route `/projects/[slug]` are fully wired so that adding objects to `src/data/portfolio.ts` automatically activates interactive cards and detail views.

### 3.5 `ContactSection` & `Footer`
* **Left Column (`CONTACT ME`):** Circular profile avatar surrounded by social links (GitHub, LinkedIn, Instagram, Email) plus 2 mini archive cards (`PORTFOLIO 2024` and `ARCHIVE 2025`).
* **Right Column (`THANK YOU 2026` + Contact Form):** Display headline `THANK YOU 2026` paired with an interactive contact form (`Full Name`, `Email Address`, `Project Category`, `Message`, and `SEND MESSAGE` button with real-time client-side validation).
* **Footer:** Minimalist copyright and technical attribution bar at the bottom of the page.