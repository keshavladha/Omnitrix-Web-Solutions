import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MagneticButton, Reveal } from "@/components/motion";
import { pricingPlans, addOns } from "@/lib/data";
import { Check, Crown, HelpCircle, Sparkles, Zap } from "lucide-react";

export const metadata = {
  title: "Pricing - Website Design in Hisar, Haryana",
  description: "Affordable website pricing for Hisar businesses. Business websites from ₹5,000. SEO, hosting, and maintenance packages available.",
};

export default function PricingPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <Crown className="h-4 w-4" aria-hidden />
              Transparent Pricing
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Affordable Websites in <span className="shimmer">Hisar.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Clear pricing for Hisar businesses. No hidden fees. Get online fast with a professional website that brings customers.
            </p>
          </Reveal>

          {/* Pricing Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={0.1 * index}>
                <div
                  className={`glass relative overflow-hidden rounded-2xl p-6 lg:p-8 ${
                    plan.popular ? "border-cyan-200/30" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute right-4 top-4">
                      <span className="flex items-center gap-1 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-200">
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <plan.icon className="h-6 w-6 text-cyan-200" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {plan.description}
                    </p>
                  </div>
                  <div className="mb-6">
                    <span className="font-display text-4xl font-semibold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-slate-400">{plan.period}</span>
                    )}
                  </div>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-200" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full">
                    <MagneticButton
                      href="#contact"
                      variant={plan.popular ? "primary" : "secondary"}
                    >
                      {plan.cta}
                    </MagneticButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Add-ons */}
          <Reveal delay={0.4}>
            <div className="mt-16">
              <h2 className="font-display text-2xl font-semibold text-white mb-8 text-center">
                Power-up Add-ons
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {addOns.map((addon) => (
                  <div
                    key={addon.name}
                    className="glass rounded-xl p-5 transition hover:border-cyan-200/30"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <addon.icon className="h-5 w-5 text-cyan-200" />
                    </div>
                    <h4 className="font-semibold text-white mb-1">{addon.name}</h4>
                    <p className="text-xs text-slate-400 mb-3">{addon.description}</p>
                    <span className="font-display text-lg font-semibold text-cyan-200">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                  <HelpCircle className="h-5 w-5 text-cyan-100" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-white">
                  Pricing FAQ
                </h2>
                <p className="mt-4 text-slate-300">
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
                  a: "50% advance to start, 50% on completion. We accept UPI, bank transfer, and cash in Hisar. GST invoice provided."
                },
              ].map((faq, index) => (
                <Reveal key={index} delay={0.05 * index}>
                  <div className="glass rounded-xl p-6">
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
            <div className="glass glow-border relative overflow-hidden rounded-2xl p-8 text-center lg:p-12">
              <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              <Zap className="mx-auto mb-4 h-10 w-10 text-cyan-200" />
              <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">
                Ready to Build Something Great?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Let's discuss your project. We'll provide a detailed proposal within 24 hours.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <MagneticButton href="#contact">Get Custom Quote</MagneticButton>
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
