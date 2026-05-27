import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, TiltCard } from "@/components/motion";
import { ArrowUpRight, BarChart3, Calendar, Check, Clock, Globe, MapPin, Sparkles, Stethoscope, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sirsa Dental Clinic — Case Study",
  description: "Read how Omnitrix Web Solutions built a premium appointment booking website for Sirsa Dental Clinic, increasing local bookings by 180%.",
};

export default function SirsaDentalCaseStudy() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <section className="container">
          {/* Header breadcrumb pill */}
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400 font-semibold shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden />
              Success Story
            </div>
          </Reveal>

          {/* Title & Eyebrow */}
          <Reveal delay={0.08}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-display font-semibold">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                Sirsa Dental <span className="shimmer">Clinic</span>
              </h1>
            </div>
          </Reveal>

          {/* Narrative Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] overflow-visible">
            
            {/* Left Narrative Column */}
            <div className="space-y-8">
              <Reveal delay={0.12}>
                <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 bg-slate-950/40 space-y-6">
                  <h2 className="font-display text-2xl font-semibold text-white">The Challenge</h2>
                  <p className="text-slate-350 leading-relaxed">
                    Sirsa Dental Clinic, led by Dr. Rahul Mehta, is one of the premier dental practices in Sirsa, Haryana. However, their digital footprint was practically non-existent. Patients struggled to find their location, check service pricing, or book consultations online. All bookings had to go through manual phone calls, leading to a high drop-off rate, especially during busy clinic hours.
                  </p>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="glass-panel rounded-xl p-4 bg-[#0a0e16]/60 border border-white/5">
                      <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Client</span>
                      <p className="mt-1 text-sm font-semibold text-white">Dr. Rahul Mehta, Director</p>
                    </div>
                    <div className="glass-panel rounded-xl p-4 bg-[#0a0e16]/60 border border-white/5">
                      <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Timeline</span>
                      <p className="mt-1 text-sm font-semibold text-white">6 Days (Ideation to Launch)</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 bg-slate-950/40 space-y-6">
                  <h2 className="font-display text-2xl font-semibold text-white">The Digital Strategy</h2>
                  <p className="text-slate-350 leading-relaxed">
                    Omnitrix designed a light, crisp, yet high-performance clinical platform optimized to capture local search visibility and drive direct patient appointments. We focused on three core pillars:
                  </p>

                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 mt-0.5">
                        <Check className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">WhatsApp Patient Coordinator</p>
                        <p className="text-xs text-slate-400 mt-1 leading-normal">
                          Built a pre-filled WhatsApp scheduling layout that packages patient details, service type, and preferred slot directly to the clinic coordinator.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 mt-0.5">
                        <Check className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Local Sirsa SEO Optimization</p>
                        <p className="text-xs text-slate-400 mt-1 leading-normal">
                          Structured clinical service pages with precise local schema (LocalBusiness) to rank Sirsa Dental Clinic #1 in Google Maps search for dental services in Sirsa and Ellenabad.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="h-6 w-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 mt-0.5">
                        <Check className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Sub-0.6s Core Web Vital Loading</p>
                        <p className="text-xs text-slate-400 mt-1 leading-normal">
                          Optimized surgical images and service cards inside Next.js to compile pages into statically generated assets, allowing seamless loads even on slow cellular networks.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3.5 text-sm font-bold shadow-md hover:bg-cyan-400 hover:shadow-cyan-500/20 transition-all cursor-pointer"
                    style={{ color: "#02040a" }}
                  >
                    Start a project with us
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://sirsadentalclinic.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-950 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:bg-slate-900/40 hover:text-white transition-all cursor-pointer"
                  >
                    <Globe className="h-4 w-4" />
                    Visit Live Site
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Metric Column */}
            <div className="space-y-6">
              <Reveal delay={0.12}>
                <TiltCard className="glass-panel rounded-2xl p-6 border border-white/5 bg-slate-950/40 space-y-6 overflow-visible">
                  <h3 className="font-display text-lg font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                    <BarChart3 className="h-5 w-5 text-cyan-455" />
                    Measurable ROI Metrics
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider block">Patient Growth</span>
                      <p className="font-display text-4xl font-semibold text-white mt-1">+180%</p>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        Increase in qualified appointment bookings within the first 30 days of launch.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider block">Local Search Rank</span>
                      <p className="font-display text-4xl font-semibold text-white mt-1">#1 Spot</p>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        Ranked #1 for localized search keywords on Google Maps in Sirsa and surrounding regions.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <span className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider block">Technical Performance</span>
                      <p className="font-display text-4xl font-semibold text-white mt-1">0.45s</p>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        Average mobile page loading speeds, leading to virtually 0% drop-offs.
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-slate-950/40 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-cyan-455" />
                    <h4 className="font-semibold text-white">Sirsa Market Influence</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    By listing surgical service packages openly with transparent pricing models, the clinic gained immense digital authority. Local patients now book treatments securely, knowing exactly what to expect before stepping foot in the clinic.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* Structured JSON-LD Local Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sirsa Dental Clinic — Case Study",
              "description": "How Omnitrix Web Solutions built a premium appointment booking website for Sirsa Dental Clinic, increasing local bookings by 180%.",
              "publisher": {
                "@type": "Organization",
                "name": "Omnitrix Web Solutions",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://omnitrixweb.com/logo.png"
                }
              },
              "mainEntity": {
                "@type": "CaseStudy",
                "name": "Sirsa Dental Clinic Local Patient Acquisition",
                "about": "Comprehensive dental service catalog, local SEO schema, WhatsApp coordinator, and sub-0.6s loading optimizations delivered by Omnitrix."
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  );
}
