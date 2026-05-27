import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MagneticButton, Reveal, TiltCard } from "@/components/motion";
import { detailedServices, industries } from "@/lib/data";
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400 font-semibold">
              <Sparkles className="h-4 w-4" aria-hidden />
              What We Do
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Websites, SEO, Hosting & <span className="shimmer">Digital Marketing.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-350">
              Complete web solutions for Sirsa and Ellenabad businesses: professional websites, local SEO, domain & hosting, WhatsApp integration, and ongoing support — all under one roof.
            </p>
          </Reveal>
        </section>

        {/* Services List */}
        <section className="border-t border-slate-900 bg-slate-950/20 py-20">
          <div className="container">
            <div className="space-y-16">
              {detailedServices.map((service, index) => (
                <Reveal key={service.title} delay={0.1 * index}>
                  <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-12">
                    {/* Left: Icon & Title */}
                    <div className="mb-6 lg:mb-0">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                        <service.icon className="h-7 w-7 text-cyan-400" />
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-white lg:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-slate-400 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <div className="mt-6">
                        <Link
                          href="/#contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                        >
                          Discuss your project
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Features & Deliverables */}
                    <div className="space-y-6">
                      <TiltCard className="glass-panel rounded-xl p-6 border border-white/5 bg-slate-950/40">
                        <h3 className="font-semibold text-white mb-4">What You Get</h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-455" />
                              <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </TiltCard>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass-panel rounded-xl p-4 text-center border border-white/5 bg-slate-950/40">
                          <div className="font-display text-2xl font-semibold text-white">
                            {service.timeline}
                          </div>
                          <div className="text-xs text-slate-400 font-medium">Typical Timeline</div>
                        </div>
                        <div className="glass-panel rounded-xl p-4 text-center border border-white/5 bg-slate-950/40">
                          <div className="font-display text-2xl font-semibold text-cyan-400">
                            {service.price}
                          </div>
                          <div className="text-xs text-slate-400 font-medium">Starting Price</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < detailedServices.length - 1 && (
                    <div className="my-16 border-t border-slate-900/50" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="border-t border-slate-900 bg-slate-950/20 py-20">
          <div className="container">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400 font-semibold">
                <Sparkles className="h-4 w-4" aria-hidden />
                Our Focus Areas
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Specialized Solutions for <span className="shimmer">Your Industry.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-2xl text-slate-400">
                We design and build with compliance, conversion, and local customer workflows in mind. See how we support your business model.
              </p>
            </Reveal>

            {/* Industries Grid */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-visible">
              {industries.map((industry, index) => {
                const colors = [
                  "from-orange-500/10 to-red-600/5 border-orange-500/20 text-orange-400",
                  "from-blue-500/10 to-cyan-600/5 border-blue-500/20 text-cyan-400",
                  "from-violet-500/10 to-pink-600/5 border-violet-500/20 text-pink-400",
                  "from-cyan-500/10 to-blue-600/5 border-cyan-500/20 text-cyan-400",
                  "from-yellow-500/10 to-orange-600/5 border-yellow-500/20 text-yellow-400",
                  "from-pink-500/10 to-purple-600/5 border-pink-500/20 text-pink-400",
                ];
                return (
                  <Reveal key={industry.name} delay={0.05 * index} className="overflow-visible">
                    <TiltCard className="glass-panel h-full rounded-2xl border border-white/5 p-6 bg-slate-950/40 shadow-sm transition-all duration-300 hover:shadow-md hover:border-cyan-500/30 flex flex-col justify-between">
                      <div>
                        {/* Header: Icon + Title */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`flex h-11 w-11 items-center justify-center rounded-xl border bg-gradient-to-br ${colors[index % colors.length]}`}>
                            <industry.icon className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="font-display text-lg font-bold text-white">
                              {industry.name}
                            </h3>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {industry.clients}+ sites delivered
                            </span>
                          </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed text-sm mb-4">
                          {industry.description}
                        </p>

                        <div className="mb-6">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                            Key Solutions
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {industry.solutions.map((sol) => (
                              <span key={sol} className="rounded-full bg-slate-900 border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                                {sol}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                        <div className="flex items-center gap-4">
                          {industry.metrics.map((metric) => (
                            <div key={metric.label}>
                              <div className="font-display text-[15px] font-bold text-cyan-455">
                                {metric.value}
                              </div>
                              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <Link
                          href="/contact"
                          className="text-xs font-bold text-slate-300 hover:text-cyan-400 transition flex items-center gap-1"
                        >
                          Book consultation
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tech Stack Summary */}
        <section className="container py-20">
          <Reveal>
            <div className="glass-panel rounded-2xl p-8 lg:p-12 border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900/60 to-cyan-950/20 shadow-lg">
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="mb-8 lg:mb-0">
                  <h2 className="font-display text-2xl font-semibold text-white mb-4">
                    Built with Modern Technology
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    We don't compromise on tech stack. Every project uses reliable, fast tools that help local businesses get online and start selling.
                  </p>
                  <MagneticButton href="/#stack">
                    See Full Tech Stack
                  </MagneticButton>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Node.js", "MongoDB", "PostgreSQL", "AWS"].map((tech) => (
                    <div key={tech} className="flex items-center gap-3 rounded-lg border border-white/10 bg-slate-900/40 px-4 py-3">
                      <Zap className="h-4 w-4 text-cyan-455" />
                      <span className="text-sm text-slate-300 font-medium">{tech}</span>
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
