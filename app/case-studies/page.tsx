import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, TiltCard } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/data";
import { ArrowUpRight, BarChart3, Clock, Users } from "lucide-react";

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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 font-semibold">
              <BarChart3 className="h-4 w-4" aria-hidden />
              Proven Results
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Case Studies: <span className="shimmer">Products That Performed.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-500">
              Real results from websites built for restaurants, clinics, retail stores, and local service providers.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study, index) => {
              const borders = ["border-t-2 border-t-blue-500", "border-t-2 border-t-red-500", "border-t-2 border-t-yellow-500", "border-t-2 border-t-green-500"];
              const badgeColors = [
                "bg-blue-50 text-blue-600 border border-blue-100",
                "bg-red-50 text-red-650 border border-red-100",
                "bg-amber-50 text-amber-700 border border-amber-200",
                "bg-green-50 text-green-600 border border-green-100"
              ];
              const iconColors = ["text-blue-500/20", "text-red-500/20", "text-amber-500/20", "text-green-500/20"];
              const linkColors = ["text-blue-600 hover:text-blue-750", "text-red-600 hover:text-red-750", "text-amber-600 hover:text-amber-750", "text-green-600 hover:text-green-750"];
              return (
                <Reveal key={study.title} delay={0.1 * index}>
                  <TiltCard className={`glass group relative overflow-hidden rounded-2xl ${borders[index % borders.length]}`}>
                    <div className="relative h-56 overflow-hidden bg-slate-50">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-200/20 to-transparent" />
                      <div className="flex h-full items-center justify-center">
                        <study.icon className={`h-20 w-20 ${iconColors[index % iconColors.length]}`} />
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColors[index % badgeColors.length]}`}>
                          {study.category}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          {study.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-slate-800 mb-3">
                        {study.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed mb-4 text-sm">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-650"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-4">
                        {study.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className={`font-display text-xl font-semibold ${
                              index % 4 === 0 ? "text-blue-600" : index % 4 === 1 ? "text-red-600" : index % 4 === 2 ? "text-amber-600" : "text-green-600"
                            }`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-slate-500 font-medium">{metric.label}</div>
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

        <section className="border-t border-slate-200 bg-slate-50/50 py-20">
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
                    className="glass rounded-xl p-6 text-center bg-white"
                  >
                    <div className="font-display text-4xl font-semibold text-slate-900">
                      {item.stat}
                    </div>
                    <div className="mt-2 text-sm text-slate-500 font-medium">{item.label}</div>
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
