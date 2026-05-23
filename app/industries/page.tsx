import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MagneticButton, Reveal, TiltCard } from "@/components/motion";
import { industries } from "@/lib/data";
import { ArrowUpRight, Building2, Globe, Sparkles } from "lucide-react";

export const metadata = {
  title: "Industries We Serve",
  description: "Web design and marketing websites for restaurants, clinics, retailers, saloons, and local service businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <Building2 className="h-4 w-4" aria-hidden />
              Specialized Expertise
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Solutions for <span className="shimmer">Every Industry.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              We build business websites for restaurants, clinics, retail shops, coaching centers, real estate brokers, and service brands.
            </p>
          </Reveal>

          {/* Industries Grid */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delay={0.1 * index}>
                <TiltCard className="glass glow-border group relative overflow-hidden rounded-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`} />
                    <div className="absolute inset-0 bg-[#02040a]/40" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur">
                          <industry.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
                            {industry.clients}+ Clients
                          </span>
                          <h3 className="font-display text-2xl font-semibold text-white">
                            {industry.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Solutions
                      </span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {industry.solutions.map((solution) => (
                          <span
                            key={solution}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                          >
                            {solution}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex items-center gap-4">
                        {industry.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="font-display text-lg font-semibold text-cyan-200">
                              {metric.value}
                            </div>
                            <div className="text-xs text-slate-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <a
                        href="/#contact"
                        className="flex items-center gap-1 text-sm font-semibold text-white transition group-hover:text-cyan-200"
                      >
                        Discuss Your Project
                        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Why Industry Expertise Matters */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                  <Sparkles className="h-5 w-5 text-cyan-100" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-white">
                  Why Industry Expertise Matters
                </h2>
                <p className="mt-4 text-slate-300">
                  Generic agencies build generic solutions. We understand your compliance requirements, user expectations, and competitive landscape.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Compliance Ready", desc: "HIPAA, PCI-DSS, SOC 2, GDPR - we build with regulations in mind." },
                { title: "User Research", desc: "We understand your users' specific pain points and workflows." },
                { title: "Competitive Intel", desc: "We study your competitors to position you ahead." },
                { title: "Faster Delivery", desc: "Reusable patterns from past projects accelerate timelines." },
              ].map((item, index) => (
                <Reveal key={item.title} delay={0.1 * index}>
                  <div className="glass rounded-xl p-6">
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-20">
          <Reveal>
            <div className="glass glow-border relative overflow-hidden rounded-2xl p-8 text-center lg:p-12">
              <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              <Globe className="mx-auto mb-4 h-10 w-10 text-cyan-200" />
              <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">
                Serving Local Businesses with Impact
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                From Sirsa to Haryana and beyond, we deliver modern business websites and marketing systems that help local businesses grow.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <MagneticButton href="/#contact">Start Your Project</MagneticButton>
                <MagneticButton href="/case-studies" variant="secondary">
                  View Case Studies
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
