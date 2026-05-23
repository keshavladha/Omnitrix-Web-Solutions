import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MagneticButton, Reveal } from "@/components/motion";
import { faqCategories } from "@/lib/data";
import { ChevronRight, HelpCircle, Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about working with Omnitrix Web Solutions.",
};

export default function FAQPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <HelpCircle className="h-4 w-4" aria-hidden />
              Got Questions?
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Frequently Asked <span className="shimmer">Questions.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Everything you need to know about working with us. Can't find what you're looking for? Just ask.
            </p>
          </Reveal>

          {/* Category Tabs */}
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-3">
              {faqCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-200/30 hover:text-white"
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                  <ChevronRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </Reveal>

          {/* FAQ Sections */}
          <div className="mt-16 space-y-16">
            {faqCategories.map((category, catIndex) => (
              <section key={category.id} id={category.id}>
                <Reveal delay={0.1 * catIndex}>
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-200/25 bg-cyan-200/8">
                      <category.icon className="h-6 w-6 text-cyan-100" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-white">
                        {category.name}
                      </h2>
                      <p className="text-sm text-slate-400">{category.description}</p>
                    </div>
                  </div>
                </Reveal>
                <div className="grid gap-4 lg:grid-cols-2">
                  {category.questions.map((faq, index) => (
                    <Reveal
                      key={index}
                      delay={0.05 * (catIndex + index)}
                    >
                      <div className="glass glow-border rounded-xl p-6 transition hover:border-cyan-200/30">
                        <h3 className="font-semibold text-white mb-3 flex items-start gap-3">
                          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-200">
                            Q
                          </span>
                          {faq.q}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed pl-9">
                          {faq.a}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <Reveal>
              <div className="mx-auto max-w-3xl">
                <div className="glass glow-border rounded-2xl p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                      <MessageCircle className="h-6 w-6 text-cyan-100" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-white">
                      Still Have Questions?
                    </h2>
                    <p className="mt-4 text-slate-300">
                      Can't find the answer you're looking for? Reach out and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <a
                      href="mailto:keshavladha24@gmail.com"
                      className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-cyan-200/30"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <Mail className="h-5 w-5 text-cyan-200" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Email Us</div>
                        <div className="text-sm text-slate-400">keshavladha24@gmail.com</div>
                      </div>
                    </a>
                    <a
                      href="/contact"
                      className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-cyan-200/30"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        <HelpCircle className="h-5 w-5 text-cyan-200" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Quick Contact</div>
                        <div className="text-sm text-slate-400">Fill out a simple form</div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-8 text-center">
                    <MagneticButton href="/contact">
                      Schedule a Call
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Quick Links */}
        <section className="container py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-white mb-8 text-center">
              Explore More
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Our Process", href: "/process", desc: "How we build" },
                { title: "Pricing", href: "/pricing", desc: "Transparent rates" },
                { title: "Case Studies", href: "/case-studies", desc: "Proven results" },
                { title: "Blog", href: "/blog", desc: "Business growth tips" },
              ].map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="glass group flex items-center justify-between rounded-xl p-5 transition hover:border-cyan-200/30"
                >
                  <div>
                    <div className="font-semibold text-white group-hover:text-cyan-200 transition">
                      {link.title}
                    </div>
                    <div className="text-sm text-slate-400">{link.desc}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-200 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </Reveal>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqCategories.flatMap((cat) =>
                cat.questions.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              )
            })
          }}
        />
      </main>
      <Footer />
    </>
  );
}
