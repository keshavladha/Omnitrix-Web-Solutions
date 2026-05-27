import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MagneticButton, Reveal, TiltCard } from "@/components/motion";
import { pricingPlans, addOns } from "@/lib/data";
import { Check, Crown, HelpCircle, Sparkles, Zap } from "lucide-react";

import CostCalculator from "@/components/cost-calculator";

export const metadata = {
  title: "Pricing - Website Design in Sirsa, Haryana",
  description: "Affordable website pricing for Sirsa and Ellenabad businesses. Business websites from ₹5,000. SEO, hosting, and maintenance packages available.",
};

export default function PricingPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400 font-semibold">
              <Crown className="h-4 w-4" aria-hidden />
              Transparent Pricing
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Affordable Websites in <span className="shimmer">Sirsa.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-350">
              Clear pricing for Sirsa and Ellenabad businesses. No hidden fees. Get online fast with a professional website that brings customers.
            </p>
          </Reveal>

          {/* Pricing Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3 overflow-visible">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={0.1 * index} className="overflow-visible">
                <TiltCard className="overflow-visible h-full">
                  <div
                    className={`glass-panel relative rounded-2xl p-6 lg:p-8 h-full flex flex-col justify-between overflow-visible transition duration-300 border border-white/5 hover:border-cyan-500/30 ${
                      plan.popular ? "bg-[#0a0e16]/80 border-cyan-500/40 ring-2 ring-cyan-500/10 shadow-xl shadow-cyan-500/5" : "bg-slate-950/40"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {plan.popular && (
                      <div 
                        className="absolute -top-3.5 right-6 pointer-events-none select-none z-20"
                        style={{ transform: "translateZ(90px)" }}
                      >
                        <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-cyan-450 px-3.5 py-1.5 text-xs font-black text-black shadow-lg shadow-cyan-500/20 border border-yellow-300 animate-pulse">
                          <Crown className="h-3.5 w-3.5 fill-black" />
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    
                    <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
                      <div className="mb-6">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 shadow-md">
                          <plan.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-white">
                          {plan.name}
                        </h3>
                        <p className="mt-2 text-sm text-slate-400">
                          {plan.description}
                        </p>
                      </div>
                      
                      <div className="mb-6 flex items-baseline">
                        <span className="font-display text-4xl font-extrabold text-white">
                          {plan.price}
                        </span>
                        {plan.price !== "Custom" && (
                          <span className="text-slate-400 text-sm ml-1.5">{plan.period}</span>
                        )}
                      </div>
                      
                      <ul className="mb-8 space-y-3.5">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                            <span className="text-sm text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="w-full mt-auto" style={{ transform: "translateZ(65px)", transformStyle: "preserve-3d" }}>
                      <MagneticButton
                        href={plan.price === "Custom" ? "/contact" : "/payments"}
                        variant={plan.popular ? "primary" : "secondary"}
                      >
                        {plan.cta === "Contact Us" ? plan.cta : "Pay & Get Started"}
                      </MagneticButton>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Interactive Cost & ROI Estimator */}
          <div className="mt-24 border-t border-slate-800 pt-20">
            <Reveal>
              <div className="text-center mb-12">
                 <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">Interactive Planner</p>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  Interactive Cost & ROI Estimator
                </h2>
                <p className="mt-4 text-slate-350 max-w-xl mx-auto">
                  Customize your pages, stack features, and add-ons to see an instant consultative quote and projected business growth.
                </p>
              </div>
            </Reveal>
            <CostCalculator />
          </div>

          {/* Add-ons */}
          <Reveal delay={0.4}>
            <div className="mt-24 border-t border-slate-850 pt-20">
              <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">
                Power-up Add-ons
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {addOns.map((addon) => (
                  <div
                    key={addon.name}
                    className="glass-panel rounded-xl p-5 transition border border-white/5 bg-slate-950/40 hover:border-cyan-500/30 hover:shadow-md"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60">
                      <addon.icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-white mb-1">{addon.name}</h4>
                    <p className="text-xs text-slate-400 mb-3">{addon.description}</p>
                    <span className="font-display text-lg font-semibold text-cyan-400">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-slate-900 bg-slate-950/20 py-20">
          <div className="container">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5">
                  <HelpCircle className="h-5 w-5 text-cyan-400" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-white">
                  Pricing FAQ
                </h2>
                <p className="mt-4 text-slate-350">
                  Common questions about our pricing and process.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 mx-auto max-w-3xl space-y-4">
              {[
                {
                  q: "What's included in the website price?",
                  a: "Design, development, testing, and deployment. Each package lists exactly what you get — no surprises. Domain and hosting sold separately or bundled."
                },
                {
                  q: "How many revisions do I get?",
                  a: "Basic: 1 round, Business: 2 rounds, Premium: 3 rounds. Need more? Extra revisions available at ₹500 each."
                },
                {
                  q: "Can I upgrade my package later?",
                  a: "Yes. Start with Basic and upgrade anytime. You only pay the difference between packages."
                },
                {
                  q: "What are the payment terms?",
                  a: "50% advance to start, 50% on completion. We accept UPI, bank transfer, and cash in Sirsa/Ellenabad. GST invoice provided."
                },
              ].map((faq, index) => (
                <Reveal key={index} delay={0.05 * index}>
                  <div className="glass-panel rounded-xl p-6 border border-white/5 bg-slate-950/40">
                    <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                    <p className="text-sm text-slate-400">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <Reveal>
            <div className="glass-panel relative overflow-hidden rounded-[40px] p-8 text-center lg:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/20 shadow-2xl">
              <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
              <Zap className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
              <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">
                Ready to Build Something Great?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-350">
                Let's discuss your project. We'll provide a detailed proposal within 24 hours.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <MagneticButton href="/payments">Pay & Get Started</MagneticButton>
                <MagneticButton href="/case-studies" variant="secondary">
                  View Our Work
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
