import type {
  PortfolioItem,
  PortfolioSectionGroup,
} from "@/types/portfolio";

export const portfolioSections: PortfolioSectionGroup[] = [
  {
    number: "01",
    slug: "website-design",
    title: "WEBSITE DESIGN",
    aspectRatio: "16/10",
    items: [
      {
        id: "neomr",
        slug: "neomr",
        title: "NeoMR",
        year: "2025",
        role: "UI Designer",
        tools: ["Figma"],
        thumbnailUrl: "/images/assets/recap/website-design/NeoMR.webp",
        description:
          "Interface concept for a modern real-estate listing site. Focused on clear property cards, readable price hierarchy, and a calm search flow.",
      },
      {
        id: "nojs",
        slug: "nojs",
        title: "NOJS",
        year: "2025",
        role: "Web Developer",
        tools: ["Figma", "React / TS"],
        thumbnailUrl: "/images/assets/recap/website-design/NOJS.webp",
        description:
          "Landing page for a developer tool brand. Built around a tight type scale, monospace labels, and a single primary call to action.",
      },
    ],
  },
  {
    number: "02",
    slug: "posters-infographics",
    title: "POSTERS & INFOGRAPHICS",
    aspectRatio: "3/4",
    items: [
      {
        id: "kesetaraan",
        slug: "kesetaraan",
        title: "Kesetaraan",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Canva", "Krita"],
        thumbnailUrl:
          "/images/assets/recap/posters-infographic-design/Kesetaraan.webp",
        description:
          "Campaign poster on equality and access to education. Uses bold display type and a limited two-color palette for print and social crops.",
      },
      {
        id: "multimedia",
        slug: "multimedia-poster",
        title: "Multimedia",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Canva"],
        thumbnailUrl:
          "/images/assets/recap/posters-infographic-design/Multimedia.webp",
        description:
          "Event poster for a multimedia course showcase. Layout balances a large title block with compact schedule details at the base.",
      },
      {
        id: "pendidikan",
        slug: "pendidikan",
        title: "Pendidikan",
        year: "2024",
        role: "Graphic Designer",
        tools: ["Canva", "Photoshop (Ps)"],
        thumbnailUrl:
          "/images/assets/recap/posters-infographic-design/Pendidikan.webp",
        description:
          "Education-themed poster exploring learning access. Built for A3 print with readable body copy at arm’s length.",
      },
      {
        id: "penelitian",
        slug: "penelitian",
        title: "Penelitian",
        year: "2024",
        role: "Graphic Designer",
        tools: ["Canva", "Krita"],
        thumbnailUrl:
          "/images/assets/recap/posters-infographic-design/Penelitian.webp",
        description:
          "Research-day poster with a structured data feel. Grid alignment keeps figures, titles, and institutional marks in order.",
      },
    ],
  },
  {
    number: "03",
    slug: "logo-design",
    title: "LOGO DESIGN",
    aspectRatio: "1/1",
    items: [
      {
        id: "logo-01",
        slug: "logo-concept-01",
        title: "Mark Study 01",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Figma", "Krita"],
        thumbnailUrl: "/images/assets/recap/logo-design/1.webp",
        description:
          "Geometric monogram study exploring single-weight strokes and a compact square lockup for small-size use.",
      },
      {
        id: "logo-02",
        slug: "logo-concept-02",
        title: "Mark Study 02",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Figma"],
        thumbnailUrl: "/images/assets/recap/logo-design/2.webp",
        description:
          "Wordmark exploration with tighter tracking and a custom terminal on the final letter for brand recall.",
      },
      {
        id: "logo-03",
        slug: "logo-concept-03",
        title: "Mark Study 03",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Krita"],
        thumbnailUrl: "/images/assets/recap/logo-design/3.webp",
        description:
          "Hand-drawn symbol refined into a clean vector mark. Tested at favicon size before the full lockup.",
      },
      {
        id: "logo-04",
        slug: "logo-concept-04",
        title: "Mark Study 04",
        year: "2024",
        role: "Graphic Designer",
        tools: ["Figma", "Canva"],
        thumbnailUrl: "/images/assets/recap/logo-design/4.webp",
        description:
          "Badge-style mark for community and campus orgs. Circular container holds up on merch and profile circles.",
      },
      {
        id: "logo-05",
        slug: "logo-concept-05",
        title: "Mark Study 05",
        year: "2024",
        role: "Graphic Designer",
        tools: ["Photoshop (Ps)"],
        thumbnailUrl: "/images/assets/recap/logo-design/5.webp",
        description:
          "Contrast-heavy mark pairing solid fills with open counters. Built for dark and light surface tests.",
      },
    ],
  },
  {
    number: "04",
    slug: "photography",
    title: "PHOTOGRAPHY",
    aspectRatio: "4/5",
    items: [
      {
        id: "danau",
        slug: "danau",
        title: "Danau",
        year: "2025",
        role: "Photographer",
        tools: ["Lightroom"],
        thumbnailUrl: "/images/assets/recap/photography/Danau.webp",
        description:
          "Lake landscape series shot at low sun. Kept the horizon quiet and let the water carry the frame.",
      },
      {
        id: "gunung",
        slug: "gunung",
        title: "Gunung",
        year: "2025",
        role: "Photographer",
        tools: ["Lightroom"],
        thumbnailUrl: "/images/assets/recap/photography/Gunung.webp",
        description:
          "Mountain ridgeline study with layered mist. Exposed for the highlights and lifted the shadows in post.",
      },
      {
        id: "kepanitiaan-photo",
        slug: "kepanitiaan-photo",
        title: "Kepanitiaan",
        year: "2025",
        role: "Photographer",
        tools: ["Lightroom"],
        thumbnailUrl: "/images/assets/recap/photography/Kepanitiaan.webp",
        description:
          "Documentary frames from campus committee work. Candid coverage of setup, briefing, and the event floor.",
      },
      {
        id: "matahari-cincin",
        slug: "matahari-cincin",
        title: "Matahari Cincin",
        year: "2024",
        role: "Photographer",
        tools: ["Lightroom"],
        thumbnailUrl:
          "/images/assets/recap/photography/matahari-cincin.webp",
        description:
          "Ring-sun moment captured during a partial eclipse window. Single exposure, minimal crop, natural color.",
      },
      {
        id: "pohon",
        slug: "pohon",
        title: "Pohon",
        year: "2024",
        role: "Photographer",
        tools: ["Lightroom"],
        thumbnailUrl: "/images/assets/recap/photography/Pohon.webp",
        description:
          "Tree silhouette study against an open sky. High contrast edit that keeps the branch structure readable.",
      },
    ],
  },
  {
    number: "05",
    slug: "social-media-carousel",
    title: "SOCIAL MEDIA & CAROUSEL DESIGN",
    aspectRatio: "1/1",
    items: [
      {
        id: "family-gathering",
        slug: "family-gathering",
        title: "Family Gathering",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Canva"],
        thumbnailUrl:
          "/images/assets/recap/social-media-carousel-design/family-gathering.webp",
        description:
          "Instagram carousel for a family event. Consistent header bar and type system across every slide.",
      },
      {
        id: "goosch",
        slug: "goosch",
        title: "Goosch",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Canva", "Figma"],
        thumbnailUrl:
          "/images/assets/recap/social-media-carousel-design/goosch.webp",
        description:
          "Product social set with square and story-safe crops. One accent color carries the whole sequence.",
      },
      {
        id: "inefest-2-0",
        slug: "inefest-2-0",
        title: "Inefest 2.0",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Canva", "Photoshop (Ps)"],
        thumbnailUrl:
          "/images/assets/recap/social-media-carousel-design/inefest-2-0.webp",
        description:
          "Carousel rollout for Inefest 2.0. Announcer slides, schedule cards, and speaker frames share one grid.",
      },
      {
        id: "kepanitiaan-social",
        slug: "kepanitiaan-social",
        title: "Kepanitiaan",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Canva"],
        thumbnailUrl:
          "/images/assets/recap/social-media-carousel-design/kepanitiaan.webp",
        description:
          "Committee announcement series for social. Short headlines, clear dates, and room for a photo insert.",
      },
      {
        id: "prototyping",
        slug: "prototyping",
        title: "Prototyping",
        year: "2024",
        role: "Graphic Designer",
        tools: ["Figma"],
        thumbnailUrl:
          "/images/assets/recap/social-media-carousel-design/prototyping.webp",
        description:
          "Educational carousel on prototyping basics. One idea per slide with numbered steps in mono type.",
      },
    ],
  },
  {
    number: "06",
    slug: "banner-design",
    title: "BANNER DESIGN",
    aspectRatio: "16/10",
    items: [
      {
        id: "banner-1",
        slug: "banner-01",
        title: "Banner 01",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Canva"],
        thumbnailUrl: "/images/assets/recap/banner-design/banner-1.webp",
        description:
          "Web banner for a campaign drop. Wide layout with a single message and a hard-edged CTA block.",
      },
      {
        id: "banner-2",
        slug: "banner-02",
        title: "Banner 02",
        year: "2025",
        role: "Graphic Designer",
        tools: ["Canva", "Photoshop (Ps)"],
        thumbnailUrl: "/images/assets/recap/banner-design/banner-2.webp",
        description:
          "Secondary banner in the same family as Banner 01, retargeted for a different placement size.",
      },
      {
        id: "royal-marshal-champion",
        slug: "royal-marshal-champion",
        title: "Royal Marshal Champion",
        year: "2024",
        role: "Graphic Designer",
        tools: ["Photoshop (Ps)", "Canva"],
        thumbnailUrl:
          "/images/assets/recap/banner-design/royal-marshal-champion.webp",
        description:
          "Winner announcement banner for a competition. Display type carries the title; details sit in a mono footer.",
      },
    ],
  },
];

export function getAllPortfolioItems(): PortfolioItem[] {
  return portfolioSections.flatMap((section) => section.items);
}

export function getPortfolioItemBySlug(
  slug: string
): { item: PortfolioItem; section: PortfolioSectionGroup } | null {
  for (const section of portfolioSections) {
    const item = section.items.find((entry) => entry.slug === slug);
    if (item) return { item, section };
  }
  return null;
}
