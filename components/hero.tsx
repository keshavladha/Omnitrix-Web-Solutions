import { MagneticButton, MotionDiv, Reveal, TiltCard } from "@/components/motion";
import { Code2, DatabaseZap, Orbit, ShieldHalf, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-20 pt-28">
      <div className="absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full border border-cyan-100/15 bg-cyan-400/5 blur-[1px]" />
      <div className="absolute left-1/2 top-36 h-7 w-24 -translate-x-1/2 rounded-full border border-cyan-100/35 bg-cyan-300/15 shadow-[0_0_70px_rgba(64,232,255,0.42)]" />
      <div className="container grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <Sparkles className="h-4 w-4" aria-hidden />
              Vision Beyond Code
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-7xl lg:text-8xl">
              Engineering Modern <span className="shimmer">Digital Experiences.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Omnitrix Web Solutions builds scalable full-stack websites, SaaS platforms, APIs, and cinematic product interfaces for startups that want to look inevitable.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <MagneticButton href="/contact">Build your product</MagneticButton>
            </Link>
            <Link href="/work">
              <MagneticButton href="/work" variant="secondary">View showcase</MagneticButton>
            </Link>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center">
              {[
                ["99", "Performance intent"],
                ["7+", "Core technologies"],
                ["24/7", "Startup mindset"],
              ].map(([value, label]) => (
                <div key={label} className="glass rounded-lg px-3 py-4">
                  <div className="font-display text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-1 text-xs text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <TiltCard className="glass glow-border relative mx-auto w-full max-w-[500px] rounded-2xl p-5">
            <div className="absolute -inset-10 -z-10 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Founder Console</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">Keshav Ladha</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950">
                <Orbit className="h-5 w-5" aria-hidden />
              </div>
            </div>
            <div className="grid gap-4 py-5">
              {[
                { icon: Code2, label: "BCA student turned full-stack builder", value: "Builder DNA" },
                { icon: DatabaseZap, label: "MongoDB-ready product architecture", value: "Scalable Core" },
                { icon: ShieldHalf, label: "Premium UI with reliable delivery", value: "Agency Mode" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-start gap-3">
                    <item.icon className="mt-1 h-5 w-5 text-cyan-200" aria-hidden />
                    <div>
                      <p className="font-semibold text-white">{item.value}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <MotionDiv
              className="rounded-xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/12 to-blue-500/8 p-5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">Current focus</span>
                <span className="h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(64,232,255,0.95)]" />
              </div>
              <p className="mt-3 font-display text-xl font-semibold text-white">
                Scalable experiences with cinematic precision.
              </p>
            </MotionDiv>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
