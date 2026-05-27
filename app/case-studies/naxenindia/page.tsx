import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/motion";
import Link from "next/link";

export const metadata = {
  title: "NaXen India — Case Study",
  description: "Case study: NaXen India — corporate website build by Omnitrix Web Solutions.",
};

export default function NaXenCaseStudy() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container py-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              Case Study
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex-shrink-0 rounded-md bg-cyan-200/6 flex items-center justify-center text-cyan-200 font-display font-semibold">N</div>
              <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">NaXen India</h1>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg text-slate-300">Client: Narottam Agarwal</p>
              <p className="mt-4 text-slate-300">A corporate website built to showcase product lines and capture B2B enquiries. The site emphasizes clear product categories, fast navigation, and accessible contact methods.</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="glass rounded-xl p-4">
                  <div className="text-sm text-slate-400">Scope</div>
                  <div className="mt-2 font-display text-lg text-white">Website, Product Catalog, Contact Forms, Basic SEO</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="text-sm text-slate-400">Timeline</div>
                  <div className="mt-2 font-display text-lg text-white">5 days</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-xl font-semibold text-white">Highlights</h3>
                <ul className="mt-3 list-inside list-disc text-slate-300">
                  <li>Responsive product catalog with clear categories.</li>
                  <li>SEO-friendly structure and meta optimizations.</li>
                  <li>Fast load times and mobile-first design.</li>
                  <li>Contact forms routed to client email and WhatsApp for quick replies.</li>
                </ul>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold transition hover:bg-cyan-400 hover:shadow-cyan-500/20 hover:shadow-md cursor-pointer"
                  style={{ color: "#02040a" }}
                >
                  Start a project
                </Link>
                <a href="https://naxenindia.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-white/8 bg-white/5 px-5 py-3 text-sm font-semibold text-white">Visit live site</a>
              </div>
            </div>

            <div>
              <div className="glass rounded-2xl p-6">
                <div className="h-56 w-full overflow-hidden rounded-lg bg-black/40 relative">
                  <a href="https://naxenindia.com" target="_blank" rel="noreferrer" className="block h-full w-full">
                    <picture>
                      <source srcSet="/case-studies/naxen-preview.webp" type="image/webp" />
                    <source srcSet="/case-studies/naxen-preview.jpg" type="image/jpeg" />
                    <img
                      src="/case-studies/naxen-preview.jpg"
                      alt="NaXen India live preview"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    </picture>
                  </a>
                  <div className="absolute right-3 bottom-3 hidden items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-sm text-white sm:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-200" viewBox="0 0 24 24" fill="none"><path d="M13 7l5 5-5 5M4 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Open live site
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-400">Primary goal</div>
                      <div className="font-display text-lg text-white">Increase qualified enquiries</div>
                    </div>
                    <div className="text-sm text-slate-400">Status</div>
                  </div>

                    <div className="mt-4">
                      <div className="text-sm text-slate-400">Notes</div>
                      <p className="mt-2 text-slate-300">Client assets and performance metrics can be added here. I captured a live preview and embedded it above for quick reference. If you want, I can replace it with optimized screenshots and logos you provide.</p>
                    </div>
                    <script type="application/ld+json">
                      {`{
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "NaXen India — Case Study",
                        "url": "https://naxenindia.com/",
                        "publisher": {
                          "@type": "Organization",
                          "name": "NaXen Exim India"
                        },
                        "mainEntity": {
                          "@type": "CaseStudy",
                          "name": "NaXen India — Corporate Website",
                          "about": "Corporate website, product catalog, SEO, and contact flow improvements delivered by Omnitrix Web Solutions."
                        }
                      }`}
                    </script>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
