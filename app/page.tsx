import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SectionDivider } from "@/components/section-divider";
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

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <TrustSignalsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <WhyOmnitrixSection />
        <TechStackSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ProcessSection />
        <SectionDivider />
        <CTASection />
        <WhySection />
        <SectionDivider />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
