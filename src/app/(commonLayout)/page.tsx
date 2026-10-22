import ProjectSection from "@/components/layouts/ProjectSection";
import HeroSection from "@/components/layouts/HeroSection";
import AboutSection from "@/components/layouts/AboutSection";
import SkillsSection from "@/components/layouts/SkillsSection";
import ExperienceSection from "@/components/layouts/ExperienceSection";
import ContactSection from "@/components/layouts/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. FEATURED PROJECTS SECTION */}
      <ProjectSection />

      {/* 3. SKILLS MATRIX SECTION */}
      <SkillsSection />

      {/* 4. PROFESSIONAL EXPERIENCE SECTION */}
      <ExperienceSection />

      {/* 5. ABOUT & EDUCATION SECTION */}
      <AboutSection />

      {/* 6. CONTACT CTA SECTION */}
      <ContactSection />
    </div>
  );
}
