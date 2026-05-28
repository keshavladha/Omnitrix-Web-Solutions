import { Reveal, TiltCard, ThreeDReveal } from "@/components/motion";
import { GlowBorder } from "@/components/glow-border";
import { SectionHeading } from "@/components/section-heading";
import { projects, reasons, services, socials, testimonials, processSteps } from "@/lib/data";
import { ArrowUpRight, Mail, MessageSquare, Phone, Send, ShieldCheck, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">About</p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            A modern technology agency built around business outcomes.
          </h2>
          <Link 
            href="/about" 
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Learn more about us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <ThreeDReveal delay={0.08}>
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 bg-slate-950/40">
            <p className="text-lg leading-9 text-slate-350">
              Omnitrix Web Solutions creates premium websites, branding systems, and full-stack digital products for businesses that need trust, speed, and measurable growth online.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Conversion strategy", "Premium design", "Scalable systems"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-[#0a0e16]/60 p-4">
                  <div className="mb-4 h-px w-12 bg-cyan-500" />
                  <p className="font-display text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ThreeDReveal>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">Services</p>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Digital solutions built to earn trust and drive revenue.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-350">
              Strategy, design, development, and optimization for companies that need more than a template website.
            </p>
          </div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-visible">
          {services.map((service, index) => {
            const borders = ["border-t-2 border-t-cyan-500/50", "border-t-2 border-t-blue-500/50", "border-t-2 border-t-cyan-400/50", "border-t-2 border-t-blue-400/50"];
            const icons = ["text-cyan-400", "text-blue-400", "text-cyan-305", "text-blue-305"];
            return (
              <Reveal key={service.title} delay={index * 0.035} className="overflow-visible">
                <Link href="/services" className="block h-full">
                  <TiltCard className={`glass-panel h-full rounded-xl p-5 border border-white/5 transition-shadow duration-300 hover:shadow-md overflow-visible ${borders[index % borders.length]}`}>
                    <div style={{ transform: "translateZ(30px)" }}>
                      <service.icon className={`h-6 w-6 ${icons[index % icons.length]}`} aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white" style={{ transform: "translateZ(45px)" }}>{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400" style={{ transform: "translateZ(20px)" }}>{service.copy}</p>
                  </TiltCard>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const techStackItems = [
  { 
    name: "Next.js", 
    desc: "Fast, SEO-friendly web architecture", 
    insight: "Business outcome: Saves up to 40% bounce rate by loading your site in under 0.8s, crucial for local mobile networks in Haryana."
  },
  { 
    name: "React", 
    desc: "Interactive, responsive UI layouts", 
    insight: "Business outcome: Provides ultra-smooth transitions and animated menu cards, making your site feel incredibly premium."
  },
  { 
    name: "TypeScript", 
    desc: "Typecheck validated, reliable code", 
    insight: "Business outcome: Eliminates 99% of common client-side crashes and checkout form breaking errors in production."
  },
  { 
    name: "Tailwind CSS", 
    desc: "Mobile-first modern styling layouts", 
    insight: "Business outcome: Guarantees a perfectly aligned user experience across all smartphone sizes and tablets."
  },
  { 
    name: "Node.js", 
    desc: "High-concurrency secure backend", 
    insight: "Business outcome: Handles thousands of simultaneous WhatsApp order updates and reservation lookups with zero lag."
  },
  { 
    name: "MongoDB", 
    desc: "Robust cloud database systems", 
    insight: "Business outcome: Keeps patient data, catalog inventory, and contact form submissions securely encrypted and backed up."
  },
];

export function TechStackSection() {
  return (
    <section id="stack" className="overflow-hidden py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">Technology Stack</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Modern Tools, <span className="shimmer">Real Results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-slate-350">
              We use industry-leading technologies trusted by top companies worldwide to deliver fast, secure, and reliable websites.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          {/* Clean Grid Layout */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 overflow-visible">
            {techStackItems.map((tech, index) => {
              const textColors = ["group-hover:text-cyan-400", "group-hover:text-blue-400", "group-hover:text-cyan-305", "group-hover:text-blue-305"];
              const borderColors = ["group-hover:border-cyan-500", "group-hover:border-blue-500", "group-hover:border-cyan-400", "group-hover:border-blue-400"];
              const numberBgs = [
                "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
                "bg-blue-500/10 text-blue-400 border border-blue-500/20",
                "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
                "bg-blue-400/10 text-blue-400 border border-blue-400/20"
              ];
              return (
                <Reveal key={tech.name} delay={index * 0.05} className="overflow-visible">
                  <GlowBorder borderRadius={12} className="h-full">
                    <TiltCard
                      className={`glass-panel group relative overflow-visible rounded-xl border border-white/5 p-6 bg-slate-950/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between h-full ${borderColors[index % borderColors.length]}`}
                    >
                      <div style={{ transformStyle: "preserve-3d" }}>
                        {/* Top Row: Number + Name */}
                        <div className="mb-4 flex items-center gap-3">
                          <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold ${numberBgs[index % numberBgs.length]}`} style={{ transform: "translateZ(30px)" }}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className={`font-display text-lg font-semibold text-white transition-colors ${textColors[index % textColors.length]}`} style={{ transform: "translateZ(45px)" }}>
                            {tech.name}
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm text-slate-400 leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                          {tech.desc}
                        </p>
                      </div>

                      {/* Architect Consultative Review */}
                      <div className="mt-6 border-t border-white/10 pt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out" style={{ transform: "translateZ(40px)" }}>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-455 block mb-1">
                          Architect's Outcome Insight
                        </span>
                        <p className="text-xs text-slate-450 leading-relaxed">
                          {tech.insight}
                        </p>
                      </div>

                      {/* Subtle gradient line at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </TiltCard>
                  </GlowBorder>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        {/* Trust Indicators */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span>99% Performance Score</span>
            </div>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-cyan-400" />
              <span>100% Mobile Responsive</span>
            </div>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              <span>SSL Secured</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-slate-900/50">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">Projects</p>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Featured work with a case-study mindset.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-350">
              Representative digital products that show how we balance brand polish, conversion strategy, and technical performance.
            </p>
          </div>
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-6 overflow-visible">
          {projects.map((project, index) => {
            const borders = ["border-t-2 border-t-cyan-500/50", "border-t-2 border-t-blue-500/50", "border-t-2 border-t-cyan-400/50", "border-t-2 border-t-blue-400/50"];
            return (
              <Reveal 
                key={project.title} 
                delay={index * 0.08}
                className={`overflow-visible ${index === 0 ? "lg:col-span-4" : "lg:col-span-2"}`}
              >
                <Link href="/work" className="block h-full">
                  <GlowBorder borderRadius={16} className="h-full">
                    <TiltCard className={`glass-panel glow-border h-full rounded-2xl p-5 border border-white/5 bg-slate-950/40 overflow-visible ${borders[index % borders.length]}`}>
                      <div className="mb-5 aspect-[1.35] rounded-xl border border-white/10 bg-[radial-gradient(circle_at_35%_20%,rgba(64,232,255,0.06),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.8),rgba(64,232,255,0.02))] p-4" style={{ transform: "translateZ(30px)" }}>
                        <div className="h-full rounded-lg border border-cyan-500/10 bg-slate-900/40 p-4">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-cyan-500" />
                            <span className="h-2 w-2 rounded-full bg-blue-400" />
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />
                          </div>
                          <div className="mt-8 h-3 w-2/3 rounded-full bg-slate-800" />
                          <div className="mt-3 h-3 w-1/2 rounded-full bg-cyan-950/50" />
                          <div className="mt-8 grid grid-cols-3 gap-2">
                            <span className="h-14 rounded-md bg-slate-950" />
                            <span className="h-14 rounded-md bg-cyan-900/10" />
                            <span className="h-14 rounded-md bg-slate-950" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-455" style={{ transform: "translateZ(45px)" }}>{project.category}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white" style={{ transform: "translateZ(60px)" }}>{project.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400" style={{ transform: "translateZ(20px)" }}>{project.copy}</p>
                      <div className="mt-5 flex flex-wrap gap-2" style={{ transform: "translateZ(40px)" }}>
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-350">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex gap-3" style={{ transform: "translateZ(75px)" }}>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
                          View details <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                    </TiltCard>
                  </GlowBorder>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="why-us" className="py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built for speed, trust, and long-term growth."
          copy="The design looks premium, but the system underneath is practical: fast pages, clean code, secure flows, and flexible architecture."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const borders = ["border-t-2 border-t-cyan-500/50", "border-t-2 border-t-blue-500/50", "border-t-2 border-t-cyan-400/50", "border-t-2 border-t-blue-400/50"];
            const icons = ["text-cyan-455", "text-blue-400", "text-cyan-400", "text-blue-455"];
            return (
              <Reveal key={reason.label} delay={index * 0.04}>
                <div className={`glass-panel rounded-xl p-5 border border-white/5 bg-slate-950/40 ${borders[index % borders.length]}`}>
                  <div className="flex items-start justify-between">
                    <reason.icon className={`h-6 w-6 ${icons[index % icons.length]}`} aria-hidden />
                    <span className="font-display text-4xl font-semibold text-white/10">{reason.label}</span>
                  </div>
                  <p className="mt-8 font-display text-xl font-semibold text-white">{reason.value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Built for trust from the first interaction."
          copy="The Omnitrix experience is meant to feel calm, premium, and conversion-ready from the first screen."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <div className="glass-panel h-full rounded-2xl p-6 border border-white/5 bg-slate-950/40">
                <p className="text-lg leading-8 text-slate-350">"{item.quote}"</p>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-slate-900/50">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-455">Contact</p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Tell us what you want to build.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Share your website, brand, or app idea and we will respond with a clear project direction, timeline, and next steps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/40 text-slate-450 transition hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-900/60"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" aria-hidden />
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">
              <Phone className="h-4 w-4 text-cyan-400" aria-hidden />
              <span>+91 98966 66220</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">
              <MessageSquare className="h-4 w-4 text-cyan-400" aria-hidden />
              <span>WhatsApp support</span>
            </div>
          </div>
          <Link 
            href="/contact" 
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-455 transition hover:text-cyan-350"
          >
            Or use our full contact form
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <ThreeDReveal delay={0.1}>
          <form className="glass-panel rounded-2xl p-5 sm:p-7 border border-white/5 bg-slate-950/30" action="/api/contact" method="post">
            <input type="hidden" name="page" value="Homepage contact section" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-400">Name</span>
                <input name="name" required className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:bg-black/50 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-400">Email</span>
                <input name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:bg-black/50 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-slate-400">Project type</span>
              <input name="projectType" className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:bg-black/50 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50" />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-slate-400">Vision</span>
              <textarea name="message" required rows={5} className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:bg-black/50 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50" />
            </label>
            <button 
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-bold text-obsidian-lowest transition hover:bg-cyan-400 shadow-md hover:shadow-cyan-500/20 cursor-pointer"
              style={{ color: "#02040a" }}
            >
              Send project signal <Send className="h-4 w-4" aria-hidden />
            </button>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-450">
              <Mail className="h-4 w-4 text-cyan-400" aria-hidden />
              keshavladha24@gmail.com
            </p>
          </form>
        </ThreeDReveal>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">Our Process</p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">A focused process that ships results.</h2>
          <p className="mt-4 text-slate-350">Discovery to support, with enough structure to stay professional and enough speed to keep momentum.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <ThreeDReveal key={step.phase} delay={0.06 * index}>
              <div className="glass-panel h-full rounded-2xl p-6 transition border border-white/5 bg-slate-950/40 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-display text-lg font-semibold">{step.number}</div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{step.description}</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-white/10 pt-4 text-sm text-slate-455">
                  <strong className="text-white font-semibold">Deliverables:</strong>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {step.deliverables?.map((d) => (
                      <li key={d} className="rounded-full bg-slate-950 border border-white/5 px-3 py-1 text-xs text-slate-400">{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ThreeDReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <ThreeDReveal>
          <div className="glass-panel mx-auto max-w-4xl rounded-[40px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/20 p-8 text-center sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 opacity-30 pointer-events-none" />
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl relative z-10">Let's Build Something Amazing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-350 relative z-10">Start with a focused project inquiry. We will recommend the fastest path to a premium, high-converting website for your business.</p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center relative z-10">
              <a 
                href="/contact" 
                className="inline-flex min-h-12 items-center rounded-full bg-white text-obsidian-lowest px-8 py-3 text-sm font-bold shadow-[0_0_36px_rgba(64,232,255,0.28)] hover:brightness-110 hover:scale-[1.02] transition-all"
                style={{ color: "#02040a" }}
              >
                Start a project
              </a>
              <a href="https://api.whatsapp.com/send?phone=917027340360&text=Hi,%20I%20want%20to%20start%20a%20website%20project%20with%20Omnitrix." className="inline-flex min-h-12 items-center rounded-full border border-cyan-550/20 bg-cyan-500/5 px-8 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10 shadow-sm hover:scale-[1.02]">Chat on WhatsApp</a>
            </div>
          </div>
        </ThreeDReveal>
      </div>
    </section>
  );
}
