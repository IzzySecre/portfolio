import type { Metadata } from "next";
import { Anton, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elhacaturrohman.example.com"),
  title: {
    default: "Elha Catur Rohman · Portfolio 2026",
    template: "%s | Elha Catur Rohman",
  },
  description:
    "Personal portfolio of Elha Catur Rohman, 5th-semester Informatics Engineering student at Universitas PGRI Ronggolawe Tuban, Founder & CDO of Klympos. UI/UX Designer, Web Developer, and Graphic Designer.",
  keywords: [
    "Elha Catur Rohman",
    "portfolio",
    "UI/UX designer",
    "web developer",
    "graphic designer",
    "Klympos",
    "Informatics Engineering",
    "Universitas PGRI Ronggolawe Tuban",
    "Next.js portfolio",
    "design systems",
  ],
  authors: [{ name: "Elha Catur Rohman" }],
  creator: "Elha Catur Rohman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elhacaturrohman.example.com",
    siteName: "Elha Catur Rohman | Portfolio 2026",
    title: "Elha Catur Rohman | Portfolio 2026",
    description:
      "UI/UX Designer • Web Developer • Graphic Designer. Founder & CDO of Klympos. Informatics Engineering student.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elha Catur Rohman | Portfolio 2026",
    description:
      "UI/UX Designer • Web Developer • Graphic Designer. Founder & CDO of Klympos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
