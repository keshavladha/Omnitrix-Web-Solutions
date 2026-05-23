import { MagneticButton, Reveal, TiltCard } from "@/components/motion";
import { BarChart3, CheckCircle2, Gauge, MousePointer2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-20 pt-28">
      <div className="absolute left-1/2 top-20 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(26,115,232,0.06),transparent_68%)]" />
      <div className="absolute right-[8%] top-32 hidden h-44 w-44 rounded-full border border-slate-200 bg-slate-50/50 lg:block" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 font-semibold backdrop-blur">
              <Sparkles className="h-4 w-4" aria-hidden />
              Premium websites for growth-focused brands
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[1.02] text-slate-900 sm:text-7xl lg:text-8xl">
              We Build Fast, Modern Websites That Grow Businesses
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Omnitrix Web Solutions helps businesses grow with premium websites, sharp branding, conversion-focused UX, and performance-first full-stack development.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact">Start a Project</MagneticButton>
            <MagneticButton href="/#projects" variant="secondary">View Work</MagneticButton>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600 font-medium">
              {["Fast", "SEO Optimized", "Mobile First", "Scalable"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <TiltCard className="glass relative mx-auto w-full max-w-[500px] overflow-hidden rounded-2xl p-5 shadow-md">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-blue-600 font-bold">Growth System</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-slate-900">Website Conversion Engine</h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                  <TrendingUp className="h-5 w-5" aria-hidden />
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {[
                  { icon: MousePointer2, label: "Visitor to enquiry journey", value: "Clear CTA Flow" },
                  { icon: Gauge, label: "Core Web Vitals focused build", value: "Performance First" },
                  { icon: ShieldCheck, label: "Trust sections, proof, and secure forms", value: "Credibility Layer" },
                ].map((item) => (
                  <div key={item.value} className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="flex items-start gap-3">
                      <item.icon className="mt-1 h-5 w-5 text-blue-600" aria-hidden />
                      <div>
                        <p className="font-semibold text-slate-800">{item.value}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{item.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-100/70 p-5">
                <div className="flex items-center justify-between text-sm text-slate-600 font-medium">
                  <span>Launch readiness</span>
                  <span className="font-bold text-blue-600">Premium</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["90+", "Speed"],
                    ["100%", "Responsive"],
                    ["24/7", "Online"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-lg bg-white p-3 border border-slate-200/60 shadow-[0_2px_6px_rgba(0,0,0,0.02)]">
                      <div className="font-display text-xl font-bold text-slate-800">{value}</div>
                      <div className="mt-1 text-xs text-slate-500 font-medium">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                <BarChart3 className="h-5 w-5 text-blue-600" aria-hidden />
                <p className="mt-4 text-sm font-semibold text-slate-800">Analytics-ready</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                <ShieldCheck className="h-5 w-5 text-blue-600" aria-hidden />
                <p className="mt-4 text-sm font-semibold text-slate-800">Secure forms</p>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
