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
  ProcessSection,
  CTASection,
} from "@/components/sections";
import { TrustSignalsSection, WhyOmnitrixSection } from "@/components/trust-signals";
import TrustBar from "@/components/trust-bar";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <TrustSignalsSection />
        <AboutSection />
        <ServicesSection />
        <WhyOmnitrixSection />
        <TechStackSection />
        <ProjectsSection />
        <ProcessSection />
        <CTASection />
        <WhySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
