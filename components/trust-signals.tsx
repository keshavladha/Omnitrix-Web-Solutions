"use client";

import { MagneticButton, Reveal } from "@/components/motion";
import { BadgeCheck, Code2, Lock, Rocket, ShieldCheck, TrendingUp } from "lucide-react";

const industries = ["SaaS", "Healthcare", "E-Commerce", "Education", "Services", "Real Estate"];

const differentiators = [
  {
    title: "Business-first strategy",
    description: "We design around trust, clarity, and conversion before touching visual polish.",
    icon: TrendingUp,
  },
  {
    title: "Modern stack only",
    description: "Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, and MongoDB-ready architecture.",
    icon: Code2,
  },
  {
    title: "Fast launch cycles",
    description: "Lean execution with clean milestones, focused reviews, and no bloated agency process.",
    icon: Rocket,
  },
  {
    title: "Secure ownership",
    description: "No vendor lock-in. You get a scalable system that can be extended as the business grows.",
    icon: Lock,
  },
];

export function TrustSignalsSection() {
  return (
    <section className="border-y border-white/5 bg-slate-950/20 py-12">
      <div className="container">
        <Reveal>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Built for modern businesses across high-trust industries
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-full border border-white/5 bg-slate-950/40 px-5 py-2.5 text-sm font-medium text-slate-300 shadow-sm hover:border-cyan-500/20 transition-all duration-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {[
              { label: "Conversion focused", icon: BadgeCheck },
              { label: "Secure forms", icon: ShieldCheck },
              { label: "Performance first", icon: Rocket },
              { label: "Scalable codebase", icon: Code2 },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                <badge.icon className="h-4 w-4 text-cyan-455" aria-hidden />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyOmnitrixSection() {
  return (
    <section className="container py-20">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400 font-semibold">
            Agency standard
          </div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
            Premium design with product-grade engineering.
          </h2>
          <p className="mt-4 text-slate-350">
            Omnitrix combines clean SaaS aesthetics, conversion strategy, and scalable full-stack execution for businesses that need a serious digital presence.
          </p>
          <div className="mt-6">
            <MagneticButton href="/contact" variant="secondary">
              Discuss your project
            </MagneticButton>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {differentiators.map((item, index) => (
          <Reveal key={item.title} delay={0.06 * index}>
            <div className="glass relative h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-md">
              <item.icon className="h-6 w-6 text-cyan-400" aria-hidden />
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
