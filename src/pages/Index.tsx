import TerminalHeader from "@/components/TerminalHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => (
  <div className="min-h-screen bg-background">
    <CursorGlow />
    <TerminalHeader />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ExperienceSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
