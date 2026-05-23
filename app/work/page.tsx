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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 font-semibold">
              <Sparkles className="h-4 w-4" aria-hidden />
              Portfolio
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Work That <span className="shimmer">Speaks.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-500">
              A selection of websites and marketing builds for local shops, clinics, restaurants, and small brands.
            </p>
          </Reveal>

          {/* Filter Tags */}
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-sm text-slate-500">
                <Grid3X3 className="h-4 w-4" />
                Filter:
              </span>
              {["All", "Business", "Restaurant", "Healthcare", "Retail", "Services"].map((filter, index) => {
                const hoverColors = [
                  "hover:border-blue-500 hover:text-blue-600",
                  "hover:border-red-500 hover:text-red-600",
                  "hover:border-yellow-500 hover:text-amber-600",
                  "hover:border-green-500 hover:text-green-600"
                ];
                return (
                  <button
                    key={filter}
                    className={`rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition cursor-pointer hover:bg-white hover:shadow-sm ${hoverColors[index % hoverColors.length]}`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* Portfolio Grid */}
        <section className="border-t border-slate-200 bg-slate-50/50 py-20">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, index) => {
                const borders = ["border-t-2 border-t-blue-500", "border-t-2 border-t-red-500", "border-t-2 border-t-yellow-500", "border-t-2 border-t-green-500"];
                const textColors = ["group-hover:text-blue-600", "group-hover:text-red-600", "group-hover:text-amber-600", "group-hover:text-green-600"];
                const badgeColors = [
                  "bg-blue-50 text-blue-600 border border-blue-100",
                  "bg-red-50 text-red-600 border border-red-100",
                  "bg-amber-50 text-amber-700 border border-amber-200",
                  "bg-green-50 text-green-600 border border-green-100"
                ];
                return (
                  <Reveal key={item.title} delay={0.05 * index}>
                    <TiltCard className={`glass group relative overflow-hidden rounded-xl ${borders[index % borders.length]}`}>
                       {/* Project Image/Preview */}
                      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <item.icon className="h-20 w-20 text-white/20" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-xs opacity-0 transition-opacity group-hover:opacity-100">
                          <Link
                            href={item.link}
                            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-md"
                          >
                            <Eye className="h-4 w-4" />
                            View Project
                          </Link>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-5 bg-white">
                        <div className="mb-3 flex items-center gap-2">
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColors[index % badgeColors.length]}`}>
                            {item.category}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">{item.year}</span>
                        </div>
                        <h3 className={`font-display text-lg font-semibold text-slate-800 mb-2 transition ${textColors[index % textColors.length]}`}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-650"
                            >
                              {tag}
                            </span>
                          ))}
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
            <div className="glass rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { value: "50+", label: "Projects Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "4.9★", label: "Average Rating" },
                  { value: "12+", label: "Countries Served" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl font-semibold text-slate-900">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container pb-20">
          <Reveal>
            <div className="glass rounded-2xl p-8 text-center lg:p-12 border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-green-50/30 shadow-sm">
              <Layers className="mx-auto mb-4 h-10 w-10 text-blue-600" />
              <h2 className="font-display text-2xl font-semibold text-slate-900 lg:text-3xl">
                Have a Project in Mind?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-slate-600">
                Let's create something amazing together. We'd love to hear about your vision.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-md hover:shadow-lg cursor-pointer"
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
