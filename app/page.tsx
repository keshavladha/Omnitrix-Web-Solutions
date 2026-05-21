import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import {
  AboutSection,
  ContactSection,
  ProjectsSection,
  ServicesSection,
  TechStackSection,
  TestimonialsSection,
  WhySection,
} from "@/components/sections";
import { TrustSignalsSection, WhyOmnitrixSection } from "@/components/trust-signals";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <TrustSignalsSection />
        <AboutSection />
        <ServicesSection />
        <WhyOmnitrixSection />
        <TechStackSection />
        <ProjectsSection />
        <WhySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
