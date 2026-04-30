import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BusinessHoursSection } from "@/components/sections/BusinessHoursSection";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <WhyChooseSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
        <BusinessHoursSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
