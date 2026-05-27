import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, TiltCard } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/data";
import { ArrowUpRight, BarChart3, Clock } from "lucide-react";

export const metadata = {
  title: "Case Studies",
  description: "Stories of local businesses that grew with Omnitrix websites, WhatsApp ordering, and marketing support.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400 font-semibold">
              <BarChart3 className="h-4 w-4" aria-hidden />
              Proven Results
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Case Studies: <span className="shimmer">Products That Performed.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-350">
              Real results from websites built for restaurants, clinics, retail stores, and local service providers.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study, index) => {
              const borders = ["border-t-2 border-t-cyan-500", "border-t-2 border-t-blue-500", "border-t-2 border-t-cyan-400", "border-t-2 border-t-blue-400"];
              const badgeColors = [
                "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
                "bg-blue-500/10 text-blue-400 border border-blue-500/20",
                "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
                "bg-blue-400/10 text-blue-400 border border-blue-400/20"
              ];
              const iconColors = ["text-cyan-500/20", "text-blue-500/20", "text-cyan-400/20", "text-blue-400/20"];
              const linkColors = ["text-cyan-400 hover:text-cyan-300", "text-blue-400 hover:text-blue-300", "text-cyan-300 hover:text-cyan-200", "text-blue-300 hover:text-blue-200"];
              return (
                <Reveal key={study.title} delay={0.1 * index}>
                  <TiltCard className={`glass-panel group relative overflow-hidden rounded-2xl border border-white/5 ${borders[index % borders.length]}`}>
                    <div className="relative h-56 overflow-hidden bg-slate-950/60">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                      <div className="flex h-full items-center justify-center">
                        <study.icon className={`h-20 w-20 ${iconColors[index % iconColors.length]}`} />
                      </div>
                    </div>
                    <div className="p-6 bg-slate-950/40">
                      <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColors[index % badgeColors.length]}`}>
                          {study.category}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          {study.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-white mb-3">
                        {study.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-4 text-sm">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                        {study.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className={`font-display text-xl font-semibold ${
                              index % 4 === 0 ? "text-cyan-400" : index % 4 === 1 ? "text-blue-400" : index % 4 === 2 ? "text-cyan-300" : "text-blue-300"
                            }`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-slate-400 font-medium">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <a
                        href={study.link ?? '#'}
                        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition ${linkColors[index % linkColors.length]}`}
                      >
                        Read full case study
                        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="border-t border-slate-900 bg-slate-950/20 py-20">
          <div className="container">
            <SectionHeading
              eyebrow="Client Impact"
              title="Teams We've Empowered"
              copy="Real results from real partnerships. Here's the measurable impact we've delivered."
            />
            <Reveal delay={0.1}>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { stat: "40%", label: "Avg. conversion increase" },
                  { stat: "2.1s", label: "Average load time" },
                  { stat: "99.9%", label: "Uptime delivered" },
                  { stat: "15+", label: "Business websites launched" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-panel rounded-xl p-6 text-center border border-white/5 bg-slate-950/40"
                  >
                    <div className="font-display text-4xl font-semibold text-white">
                      {item.stat}
                    </div>
                    <div className="mt-2 text-sm text-slate-400 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
