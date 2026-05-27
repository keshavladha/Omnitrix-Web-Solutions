import { MagneticButton, Reveal, TiltCard } from "@/components/motion";
import { GlowBorder } from "@/components/glow-border";
import { BarChart3, CheckCircle2, Gauge, MousePointer2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-20 pt-28">
      {/* Background Gradients */}
      <div className="absolute left-1/2 top-20 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(64,232,255,0.08),transparent_68%)]" />
      <div className="absolute right-[8%] top-32 hidden h-44 w-44 rounded-full border border-white/5 bg-slate-950/40 lg:block" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-400 font-semibold backdrop-blur">
              <Sparkles className="h-4 w-4" aria-hidden />
              Premium websites for growth-focused brands
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-7xl lg:text-8xl">
              We Build Fast, Modern Websites That Grow Businesses
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-350">
              Omnitrix Web Solutions helps businesses grow with premium websites, sharp branding, conversion-focused UX, and performance-first full-stack development.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact">Start a Project</MagneticButton>
            <MagneticButton href="/#projects" variant="secondary">View Work</MagneticButton>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400 font-medium">
              {["Fast", "SEO Optimized", "Mobile First", "Scalable"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/10 bg-cyan-950/20 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="relative mx-auto w-full max-w-[500px] h-[550px] flex items-center justify-center overflow-visible">
            {/* Ambient Glowing Aura */}
            <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl blur-3xl scale-95 pointer-events-none -z-10 animate-pulse" />
            
            <GlowBorder borderRadius={24} className="w-full h-full">
              <TiltCard className="glass-panel relative w-full h-full rounded-3xl p-6 border-white/10 shadow-2xl flex flex-col justify-between overflow-visible">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              
              {/* Background 3D Rotating Cyan Engine Mesh Core */}
              <div 
                className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none"
                style={{ transform: "translateZ(-30px) scale(0.9)" }}
              >
                <img 
                  src="/futuristic_3d_emerald_engine.png" 
                  alt="3D Tech Engine Core" 
                  className="w-[380px] h-[380px] object-contain animate-[spin_40s_linear_infinite] hue-rotate-[145deg] saturate-[180%]"
                />
              </div>

              {/* Base Dashboard Mockup Layout */}
              <div className="w-full h-full flex flex-col justify-between" style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
                {/* Header Mockup */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/40" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/40" />
                    <span className="h-3 w-3 rounded-full bg-cyan-500/40" />
                  </div>
                  <div className="h-5 w-40 rounded-full bg-white/5 border border-white/5" />
                </div>
                
                {/* Dashboard Chart Mockup */}
                <div className="flex-1 flex flex-col justify-between bg-slate-950/20 border border-white/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Performance Matrix</span>
                    <span className="font-bold text-cyan-400 uppercase tracking-widest text-[10px]">Growth Enabled</span>
                  </div>
                  <div className="mt-4 flex items-end justify-between h-28 gap-2">
                    {[45, 60, 35, 75, 50, 92, 70, 85].map((val, idx) => (
                      <div key={idx} className="flex-1 bg-gradient-to-t from-blue-950/60 to-cyan-500/30 rounded-t-lg border-t border-cyan-450/40 transition-all duration-500" style={{ height: `${val}%` }} />
                    ))}
                  </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["99%", "Speed"],
                    ["100%", "Mobile"],
                    ["24/7", "Secure"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl bg-slate-950/60 p-3 border border-white/5 shadow-md">
                      <div className="font-display text-lg font-bold text-white">{value}</div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FLOATING 3D LAYERS popping out at higher translateZ depths */}

              {/* Floating Layer 1 (Conversion Rate widget) */}
              <div 
                className="absolute -right-8 top-16 glass rounded-2xl p-4 shadow-2xl border border-cyan-500/30 w-44"
                style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <TrendingUp className="h-4.5 w-4.5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Conversions</p>
                    <p className="font-display text-base font-extrabold text-white mt-0.5">+48% growth</p>
                  </div>
                </div>
              </div>

              {/* Floating Layer 2 (Active Leads dialogue) */}
              <div 
                className="absolute -left-12 top-48 glass rounded-2xl p-4 shadow-2xl border border-white/10 w-48"
                style={{ transform: "translateZ(90px)", transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Strategy Active</span>
                </div>
                <h4 className="mt-2 text-[13px] font-bold text-white">B2B Lead Flow Optimized</h4>
                <p className="text-[10px] text-slate-400 mt-1">Core Web Vitals are fully optimized.</p>
              </div>

              {/* Floating Layer 3 (Secure payments chip) */}
              <div 
                className="absolute right-12 -bottom-6 glass rounded-2xl px-4 py-3 shadow-2xl border border-cyan-500/20 w-40 flex items-center gap-2"
                style={{ transform: "translateZ(120px)", transformStyle: "preserve-3d" }}
              >
                <div className="h-6 w-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Secure checkout</span>
              </div>

            </TiltCard>
          </GlowBorder>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
