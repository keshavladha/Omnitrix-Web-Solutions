import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, TiltCard } from "@/components/motion";
import { portfolioItems } from "@/lib/data";
import { ArrowUpRight, Eye, Grid3X3, Layers, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Work",
  description: "Explore our portfolio of web applications, SaaS platforms, and digital products built for ambitious startups.",
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
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
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              A selection of projects we've delivered for startups, enterprises, and everything in between.
            </p>
          </Reveal>

          {/* Filter Tags */}
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <Grid3X3 className="h-4 w-4" />
                Filter:
              </span>
              {["All", "SaaS", "E-commerce", "Healthcare", "Fintech", "Enterprise"].map((filter) => (
                <button
                  key={filter}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-200/30 hover:text-white"
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Portfolio Grid */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, index) => (
                <Reveal key={item.title} delay={0.05 * index}>
                  <TiltCard className="glass glow-border group relative overflow-hidden rounded-xl">
                    {/* Project Image/Preview */}
                    <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <item.icon className="h-20 w-20 text-white/30" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-[#02040a]/80 opacity-0 transition-opacity group-hover:opacity-100">
                        <Link
                          href={item.link}
                          className="flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                        >
                          <Eye className="h-4 w-4" />
                          View Project
                        </Link>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-500">{item.year}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-cyan-200 transition">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container py-20">
          <Reveal>
            <div className="glass rounded-2xl p-8 lg:p-12">
              <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "4.9★", label: "Average Rating" },
                  { value: "12+", label: "Countries Served" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container pb-20">
          <Reveal>
            <div className="glass glow-border rounded-2xl p-8 text-center lg:p-12">
              <Layers className="mx-auto mb-4 h-10 w-10 text-cyan-200" />
              <h2 className="font-display text-2xl font-semibold text-white lg:text-3xl">
                Have a Project in Mind?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-slate-300">
                Let's create something amazing together. We'd love to hear about your vision.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/20"
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
