import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, TiltCard } from "@/components/motion";
import { processSteps, values } from "@/lib/data";
import { ArrowRight, GitBranch, MessageSquare, Rocket, Target } from "lucide-react";

import DiscoveryPlanner from "@/components/discovery-planner";

export const metadata = {
  title: "Our Process - How We Build Websites in Sirsa",
  description: "Simple 5-step process for launching your Sirsa/Ellenabad business website. From discovery to go-live in under 2 weeks.",
};

export default function ProcessPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        {/* Hero Section */}
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <GitBranch className="h-4 w-4" aria-hidden />
              How We Work
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Process: <span className="shimmer">Precision in Motion.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Our simple 5-step process for launching fast, professional websites that drive customers and inquiries.
            </p>
          </Reveal>

          {/* Process Steps */}
          <div className="mt-16 space-y-8">
            {processSteps.map((step, index) => (
              <Reveal key={step.phase} delay={0.1 * index}>
                <div className="glass glow-border relative overflow-hidden rounded-2xl lg:grid lg:grid-cols-[180px_1fr] lg:gap-8">
                  <div className="relative h-32 overflow-hidden lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/10" />
                    <div className="flex h-full flex-col items-center justify-center p-6 lg:p-8">
                      <span className="font-display text-5xl font-bold text-cyan-200/30 lg:text-6xl">
                        {step.number}
                      </span>
                      <span className="mt-1 text-sm font-semibold uppercase tracking-wider text-cyan-200">
                        {step.phase}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div className="hidden h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:flex">
                        <step.icon className="h-6 w-6 text-cyan-200" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable) => (
                            <span
                              key={deliverable}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 z-10 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-200/30 bg-[#02040a] text-cyan-200 lg:flex">
                      <ArrowRight className="h-4 w-4 -rotate-90" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Interactive Discovery Planner Section */}
        <section className="border-t border-white/8 bg-white/[0.01] py-20">
          <div className="container">
            <Reveal>
              <div className="text-center mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Interactive Planner</p>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  Conversational Discovery Planner
                </h2>
                <p className="mt-4 text-slate-300 max-w-xl mx-auto">
                  Answer 3 simple questions about your goals, industry, and timeframe to generate a tailored technical architecture blueprint for your business.
                </p>
              </div>
            </Reveal>
            <DiscoveryPlanner />
          </div>
        </section>

        {/* Values Section */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                  <Target className="h-5 w-5 text-cyan-100" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-white">
                  Our Core Values
                </h2>
                <p className="mt-4 text-slate-300">
                  Principles that guide every decision we make.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={0.1 * index}>
                  <TiltCard className="glass rounded-xl p-6 h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <value.icon className="h-6 w-6 text-cyan-200" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-slate-400">{value.description}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Communication Section */}
        <section className="container py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <Reveal>
              <div className="mb-8 lg:mb-0">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
                  <MessageSquare className="h-4 w-4" aria-hidden />
                  Communication
                </div>
                <h2 className="font-display text-3xl font-semibold text-white mb-4">
                  Transparent. Collaborative. Fast.
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We believe great products are built through constant communication. You'll never wonder about project status.
                </p>
                <ul className="space-y-4">
                  {[
                    "Weekly progress updates with live demos",
                    "Slack/Discord integration for real-time chat",
                    "Figma access for design collaboration",
                    "GitHub repository access from day one",
                    "Direct access to your dedicated team",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-cyan-200" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass glow-border rounded-2xl p-8">
                <div className="space-y-6">
                  {[
                    { label: "Response Time", value: "< 4 hours", icon: MessageSquare },
                    { label: "Weekly Updates", value: "Every Friday", icon: Rocket },
                    { label: "Meeting Availability", value: "India / US timezone", icon: Target },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                          <stat.icon className="h-5 w-5 text-cyan-200" />
                        </div>
                        <span className="text-slate-300">{stat.label}</span>
                      </div>
                      <span className="font-display font-semibold text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-semibold text-white">
                  Typical Timelines
                </h2>
                <p className="mt-4 text-slate-300">
                  How long projects usually take from kickoff to launch.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { type: "Landing Page", duration: "1-2 weeks", complexity: "Low" },
                { type: "Business Website", duration: "2-4 weeks", complexity: "Medium" },
                { type: "WhatsApp Marketing Site", duration: "4-6 weeks", complexity: "Medium" },
              ].map((timeline, index) => (
                <Reveal key={timeline.type} delay={0.1 * index}>
                  <div className="glass rounded-xl p-6 text-center">
                    <div className="font-display text-3xl font-semibold text-cyan-200 mb-2">
                      {timeline.duration}
                    </div>
                    <div className="font-semibold text-white mb-1">{timeline.type}</div>
                    <div className="text-sm text-slate-400">Complexity: {timeline.complexity}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
