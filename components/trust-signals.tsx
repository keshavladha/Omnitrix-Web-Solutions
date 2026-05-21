"use client";

import { MagneticButton, Reveal } from "@/components/motion";
import { clientIndustries, trustBadges } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

export function TrustSignalsSection() {
  return (
    <section className="border-y border-white/8 bg-white/[0.02] py-12">
      <div className="container">
        <Reveal>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Trusted by innovative teams across industries
          </p>
        </Reveal>

        {/* Client Industries Marquee */}
        <div className="relative mb-10 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#02040a] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#02040a] to-transparent" />
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...clientIndustries, ...clientIndustries, ...clientIndustries, ...clientIndustries].map(
              (industry, index) => (
                <div
                  key={`${industry}-${index}`}
                  className="flex-shrink-0 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-300"
                >
                  {industry}
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* Trust Badges */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm text-slate-400">
                <badge.icon className="h-4 w-4 text-cyan-200" />
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
  const differentiators = [
    {
      title: "Modern Stack Only",
      description: "No WordPress. No outdated PHP. We build with Next.js 16, React 19, and modern tools that scale.",
      competitor: "Traditional agencies still using legacy CMS",
    },
    {
      title: "Startup Speed",
      description: "1-2 weeks for landing pages, 4-6 for full products. We move at startup pace, not agency speed.",
      competitor: "3-6 month project timelines",
    },
    {
      title: "Founder Mindset",
      description: "We think like product owners, not just developers. Your success metrics become our goals.",
      competitor: "Ticket-based task execution",
    },
    {
      title: "Transparent Pricing",
      description: "Fixed-price packages with clear deliverables. No hidden fees, no scope creep surprises.",
      competitor: "Hourly billing with unpredictable costs",
    },
    {
      title: "You Own Everything",
      description: "Full code ownership, clean documentation, no vendor lock-in. Deploy anywhere.",
      competitor: "Proprietary platforms you can't leave",
    },
    {
      title: "Direct Communication",
      description: "Talk directly to your engineer on Slack. No account managers, no delays.",
      competitor: "Multiple layers of account management",
    },
  ];

  return (
    <section className="container py-20">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
            Why Choose Us
          </div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
            Not Your Typical <span className="shimmer">Web Agency.</span>
          </h2>
          <p className="mt-4 text-slate-300">
            We're engineers who design, not designers who dabble in code. Here's how we're different.
          </p>
          <div className="mt-6">
            <Link href="/about">
              <MagneticButton href="/about" variant="secondary">
                Learn more about our approach
              </MagneticButton>
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {differentiators.map((item, index) => (
          <Reveal key={item.title} delay={0.1 * index}>
            <div className="glass glow-border relative rounded-xl p-6">
              <div className="mb-4">
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300">{item.description}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs text-slate-500">
                  vs. <span className="text-slate-400">{item.competitor}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
