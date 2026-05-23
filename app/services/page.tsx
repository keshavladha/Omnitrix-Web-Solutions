import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MagneticButton, Reveal, TiltCard } from "@/components/motion";
import { detailedServices } from "@/lib/data";
import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services - Website Design, SEO & Digital Marketing in Sirsa",
  description: "Complete web services in Sirsa and Ellenabad: business websites, SEO, Google My Business, domain hosting, WhatsApp integration, e-commerce, and website maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 font-semibold">
              <Sparkles className="h-4 w-4" aria-hidden />
              What We Do
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Websites, SEO, Hosting & <span className="shimmer">Digital Marketing.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-500">
              Complete web solutions for Sirsa and Ellenabad businesses: professional websites, local SEO, domain & hosting, WhatsApp integration, and ongoing support — all under one roof.
            </p>
          </Reveal>
        </section>

        {/* Services List */}
        <section className="border-t border-slate-200 bg-slate-50/50 py-20">
          <div className="container">
            <div className="space-y-16">
              {detailedServices.map((service, index) => (
                <Reveal key={service.title} delay={0.1 * index}>
                  <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-12">
                    {/* Left: Icon & Title */}
                    <div className="mb-6 lg:mb-0">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-blue-200 bg-blue-50">
                        <service.icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-slate-850 lg:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-slate-500 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/#contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-750"
                        >
                          Discuss your project
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Features & Deliverables */}
                    <div className="space-y-6">
                      <TiltCard className="glass rounded-xl p-6 bg-white">
                        <h3 className="font-semibold text-slate-800 mb-4">What You Get</h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                              <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </TiltCard>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass rounded-xl p-4 text-center bg-white">
                          <div className="font-display text-2xl font-semibold text-slate-900">
                            {service.timeline}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">Typical Timeline</div>
                        </div>
                        <div className="glass rounded-xl p-4 text-center bg-white">
                          <div className="font-display text-2xl font-semibold text-slate-900">
                            {service.price}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">Starting Price</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < detailedServices.length - 1 && (
                    <div className="my-16 border-t border-slate-200" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Summary */}
        <section className="container py-20">
          <Reveal>
            <div className="glass rounded-2xl p-8 lg:p-12 border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-green-50/30 shadow-sm">
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="mb-8 lg:mb-0">
                  <h2 className="font-display text-2xl font-semibold text-slate-900 mb-4">
                    Built with Modern Technology
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    We don't compromise on tech stack. Every project uses reliable, fast tools that help local businesses get online and start selling.
                  </p>
                  <MagneticButton href="/#stack">
                    See Full Tech Stack
                  </MagneticButton>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Node.js", "MongoDB", "PostgreSQL", "AWS"].map((tech) => (
                    <div key={tech} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                      <Zap className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
