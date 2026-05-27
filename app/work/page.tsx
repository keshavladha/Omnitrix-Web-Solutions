import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, TiltCard } from "@/components/motion";
import { portfolioItems } from "@/lib/data";
import { ArrowUpRight, Eye, Grid3X3, Layers, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Work",
  description: "See the websites and marketing sites we've built for local businesses, clinics, restaurants, boutiques, and service providers.",
};

export default function WorkPage() {
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
              Portfolio
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Work That <span className="shimmer">Speaks.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-350">
              A selection of websites and marketing builds for local shops, clinics, restaurants, and small brands.
            </p>
          </Reveal>

          {/* Filter Tags */}
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <Grid3X3 className="h-4 w-4" />
                Filter:
              </span>
              {["All", "Business", "Restaurant", "Healthcare", "Retail", "Services"].map((filter, index) => {
                const hoverColors = [
                  "hover:border-cyan-500 hover:text-cyan-400",
                  "hover:border-blue-500 hover:text-blue-400",
                  "hover:border-cyan-400 hover:text-cyan-400",
                  "hover:border-blue-400 hover:text-blue-400"
                ];
                return (
                  <button
                    key={filter}
                    className={`rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-sm text-slate-400 transition cursor-pointer hover:bg-cyan-500/10 hover:shadow-sm ${hoverColors[index % hoverColors.length]}`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* Portfolio Grid */}
        <section className="border-t border-slate-900 bg-slate-950/20 py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-visible">
              {portfolioItems.map((item, index) => {
                const borders = ["border-t-2 border-t-cyan-500/50", "border-t-2 border-t-blue-500/50", "border-t-2 border-t-cyan-400/50", "border-t-2 border-t-blue-400/50"];
                const textColors = ["group-hover:text-cyan-400", "group-hover:text-blue-400", "group-hover:text-cyan-305", "group-hover:text-blue-305"];
                const badgeColors = [
                  "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
                  "bg-blue-500/10 text-blue-400 border border-blue-500/20",
                  "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
                  "bg-blue-400/10 text-blue-400 border border-blue-400/20"
                ];
                return (
                  <Reveal key={item.title} delay={0.05 * index} className="overflow-visible">
                    <TiltCard className={`glass-panel group relative overflow-visible rounded-xl h-full flex flex-col justify-between ${borders[index % borders.length]}`}>
                      <div className="w-full h-full flex flex-col justify-between overflow-visible" style={{ transformStyle: "preserve-3d" }}>
                        {/* Project Image/Preview */}
                        <div 
                          className={`relative h-56 overflow-hidden rounded-t-xl bg-gradient-to-br ${item.gradient} transition duration-300`}
                          style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <item.icon className="h-20 w-20 text-white/20" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-xs opacity-0 transition-opacity group-hover:opacity-100 z-10">
                            <Link
                              href={item.link}
                              className="flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-bold text-obsidian-lowest transition hover:bg-cyan-400 shadow-md"
                              style={{ color: "#02040a" }}
                            >
                              <Eye className="h-4 w-4" />
                              View Project
                            </Link>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div 
                          className="p-5 bg-slate-950/40 rounded-b-xl flex-grow flex flex-col justify-between"
                          style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
                        >
                          <div>
                            <div className="mb-3 flex items-center gap-2">
                              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColors[index % badgeColors.length]}`}>
                                {item.category}
                              </span>
                              <span className="text-xs text-slate-400 font-medium">{item.year}</span>
                            </div>
                            <h3 className={`font-display text-lg font-semibold text-white mb-2 transition ${textColors[index % textColors.length]}`}>
                              {item.title}
                            </h3>
                            <p className="text-sm text-slate-450 line-clamp-2 mb-4 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          
                          <div 
                            className="flex flex-wrap gap-1.5 mt-auto"
                            style={{ transform: "translateZ(80px)" }}
                          >
                            {item.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-slate-900 px-2 py-0.5 text-xs text-slate-300 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container py-20">
          <Reveal>
            <div className="glass-panel rounded-2xl p-8 lg:p-12 shadow-sm border border-white/5 bg-slate-950/40">
              <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "4.9★", label: "Average Rating" },
                  { value: "12+", label: "Countries Served" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container pb-20">
          <Reveal>
            <div className="glass-panel rounded-[40px] p-8 text-center lg:p-12 border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900/60 to-cyan-950/20 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 opacity-30 pointer-events-none" />
              <Layers className="mx-auto mb-4 h-10 w-10 text-cyan-405 relative z-10" />
              <h2 className="font-display text-2xl font-semibold text-white lg:text-3xl relative z-10">
                Have a Project in Mind?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-slate-350 relative z-10">
                Let's create something amazing together. We'd love to hear about your vision.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-obsidian-lowest px-8 py-3 text-sm font-bold shadow-[0_0_36px_rgba(64,232,255,0.28)] transition hover:brightness-110 cursor-pointer relative z-10"
                style={{ color: "#02040a" }}
              >
                Start a Conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
