import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioGallerySection } from "@/components/sections/PortfolioGallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { profile } from "@/data/profile";
import { portfolioSections } from "@/data/portfolio";

export default function Home() {
  return (
    <div id="top">
      <FloatingNavbar />
      <main>
        <HeroSection
          name={profile.name}
          headline={profile.headline}
          roleBadge={profile.roleBadge}
        />
        <AboutSection profile={profile} />
        <PortfolioGallerySection sections={portfolioSections} />
        <ContactSection socials={profile.socials} />
      </main>
      <Footer />
    </div>
  );
}
