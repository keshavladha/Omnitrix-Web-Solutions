import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, TiltCard } from "@/components/motion";
import { blogPosts, categories } from "@/lib/data";
import { ArrowUpRight, BookOpen, Clock, Tag, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Blog & Insights",
  description: "Advice and ideas for building business websites, marketing funnels, and local online growth.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <BookOpen className="h-4 w-4" aria-hidden />
              Growth Blog
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Insights: <span className="shimmer">Build Smarter.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Tips on business websites, local marketing, WhatsApp sales, and growing your small business online.
            </p>
          </Reveal>

          {/* Featured Post */}
          <Reveal delay={0.24}>
            <div className="mt-12">
              <TiltCard className="glass glow-border group relative overflow-hidden rounded-2xl lg:grid lg:grid-cols-2">
                <div className="relative h-64 overflow-hidden lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-purple-500/20" />
                  <div className="flex h-full items-center justify-center">
                    <featuredPost.icon className="h-24 w-24 text-cyan-200/50" />
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-200">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white mb-4 lg:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/10"
                  >
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </TiltCard>
            </div>
          </Reveal>

          {/* Categories */}
          <Reveal delay={0.32}>
            <div className="mt-12 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-sm text-slate-400 mr-2">
                <Tag className="h-4 w-4" />
                Filter by:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-200/30 hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Post Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <Reveal key={post.title} delay={0.1 * index}>
                <article className="glass glow-border group relative overflow-hidden rounded-xl transition hover:border-cyan-200/30">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/10" />
                    <div className="flex h-full items-center justify-center">
                      <post.icon className="h-12 w-12 text-cyan-200/40" />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="text-cyan-200">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-cyan-200 transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                  <TrendingUp className="h-5 w-5 text-cyan-100" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-white">
                  Stay Ahead of the Curve
                </h2>
                <p className="mt-4 text-slate-300">
                  Get weekly insights on websites, local marketing, WhatsApp selling, and small business growth.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <form className="mt-8 flex flex-col gap-3 sm:flex-row" action="/api/contact" method="post">
                  <input type="hidden" name="name" value="Newsletter Subscriber" />
                  <input type="hidden" name="projectType" value="Newsletter subscription" />
                  <input type="hidden" name="message" value="Please add this email to the Omnitrix insights list." />
                  <input type="hidden" name="page" value="Blog newsletter" />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-slate-400 focus:border-cyan-200/30 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full border border-cyan-200/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/20"
                  >
                    Subscribe
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
