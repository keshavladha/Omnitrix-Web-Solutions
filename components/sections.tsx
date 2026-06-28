"use client";

import { Reveal, TiltCard, ThreeDReveal } from "@/components/motion";
import { GlowBorder } from "@/components/glow-border";
import { SectionHeading } from "@/components/section-heading";
import { BrowserFrame } from "@/components/browser-frame";
import { projects, reasons, services, socials, testimonials, processSteps } from "@/lib/data";
import { ArrowUpRight, Mail, MessageSquare, Phone, Send, ShieldCheck, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0d12]/50 to-transparent" />
      <div className="container relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">About</p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            A modern technology agency built around business outcomes.
          </h2>
          <Link 
            href="/about" 
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Learn more about us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <ThreeDReveal delay={0.08}>
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 bg-slate-950/40 shadow-xl">
            <p className="text-lg leading-9 text-slate-350">
              Omnitrix Web Solutions creates premium websites, branding systems, and full-stack digital products for businesses that need trust, speed, and measurable growth online.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Conversion strategy", "Premium design", "Scalable systems"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-slate-900/60 p-4">
                  <div className="mb-4 h-px w-12 bg-blue-500" />
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
    <section id="services" className="py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Services</p>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Digital solutions built to earn trust and drive revenue.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Strategy, design, development, and optimization for companies that need more than a template website.
            </p>
          </div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <Link href="/services" className="block h-full group">
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0a0d12] p-8 transition-colors duration-500 hover:bg-[#12161f]">
                    {/* Hover Light Sweep */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />
                    
                    {/* Accent bar */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500/0 transition-colors duration-300 group-hover:bg-blue-500/50" />
                    
                    <div>
                      <service.icon className="h-7 w-7 text-blue-400 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110" aria-hidden />
                      <h3 className="mt-6 font-display text-xl font-semibold text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{service.copy}</p>
                    </div>
                  </div>
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
  { name: "Next.js", desc: "Fast, SEO-friendly web architecture" },
  { name: "React", desc: "Interactive, responsive UI layouts" },
  { name: "TypeScript", desc: "Typecheck validated, reliable code" },
  { name: "Tailwind CSS", desc: "Mobile-first modern styling layouts" },
  { name: "Node.js", desc: "High-concurrency secure backend" },
  { name: "MongoDB", desc: "Robust cloud database systems" },
];

export function TechStackSection() {
  return (
    <section id="stack" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0d12]/50 to-transparent" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Modern Tools, Real Results."
          copy="We use industry-leading technologies trusted by top companies worldwide to deliver fast, secure, and reliable websites."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStackItems.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 0.05}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-full border border-white/10 bg-slate-900/50 p-6 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-slate-900/80">
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{tech.name}</h3>
                    <p className="mt-1 text-sm text-slate-400">{tech.desc}</p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust Indicators */}
        <Reveal delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-400" />
              <span>99% Performance Score</span>
            </div>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-blue-400" />
              <span>100% Mobile Responsive</span>
            </div>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
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
    <section id="projects" className="py-32 relative">
      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Projects</p>
            <h2 
              className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 4px 12px rgba(255,255,255,0.1)" }}
            >
              Featured work with a case-study mindset.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Representative digital products that show how we balance brand polish, conversion strategy, and technical performance.
            </p>
          </div>
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {projects.slice(0, 4).map((project, index) => (
            <ThreeDReveal key={project.title} delay={index * 0.1}>
              <Link href="/work" className="group block h-full">
                <div className="flex h-full flex-col">
                  {/* Browser Frame Presentation */}
                  <div className="aspect-[16/10] w-full">
                    <BrowserFrame url={`https://${project.title.toLowerCase().replace(/\s+/g, '')}.com`}>
                      {/* Abstract App Mockup inside Browser */}
                      <div className="flex h-full flex-col p-4 sm:p-6 opacity-70 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="flex items-center gap-3">
                          <div className="h-6 w-6 rounded-full bg-blue-500/20" />
                          <div className="h-3 w-32 rounded-full bg-white/10" />
                        </div>
                        <div className="mt-8 flex gap-4">
                          <div className="h-48 w-1/3 rounded-xl bg-slate-900/50 border border-white/5 p-4 flex flex-col gap-3">
                            <div className="h-2 w-full rounded-full bg-white/5" />
                            <div className="h-2 w-4/5 rounded-full bg-white/5" />
                            <div className="h-2 w-5/6 rounded-full bg-white/5" />
                          </div>
                          <div className="h-48 flex-1 rounded-xl bg-slate-900/50 border border-white/5 p-4 relative overflow-hidden">
                            {/* Animated Chart Bars */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2 h-24">
                              {[40, 70, 45, 90, 60, 100].map((h, i) => (
                                <div 
                                  key={i} 
                                  className="flex-1 bg-blue-500/20 rounded-t-sm transition-all duration-700 ease-out origin-bottom"
                                  style={{ 
                                    height: `${h}%`,
                                    transform: "scaleY(0.3)",
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </BrowserFrame>
                  </div>
                  
                  {/* Project Meta */}
                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">{project.category}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{project.copy}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-[#0a0d12] px-3 py-1 text-xs text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </ThreeDReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Progress line height
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0d12]/50 to-transparent" />
      <div className="container relative" ref={containerRef}>
        <SectionHeading
          eyebrow="Our Process"
          title="A focused process that ships results."
          copy="Discovery to support, with enough structure to stay professional and enough speed to keep momentum. We treat the process like an engineering pipeline."
        />

        <div className="mt-20 mx-auto max-w-4xl relative">
          {/* Vertical Timeline Track */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
          
          {/* Active Progress Line with Glow */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-blue-500 origin-top -translate-x-1/2 shadow-[0_0_16px_rgba(59,130,246,0.8),0_0_2px_rgba(255,255,255,1)]" 
            style={{ scaleY }}
          />
          
          {/* Traveling Light Flare */}
          <motion.div
            className="absolute left-8 md:left-1/2 w-4 h-12 bg-blue-400 rounded-full blur-[10px] mix-blend-screen -translate-x-1/2"
            style={{ 
              top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
            }}
          />

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              // Calculate when this step should be active based on scroll
              const stepTrigger = index / (processSteps.length - 1);
              const isActive = useTransform(scrollYProgress, (v) => v >= stepTrigger - 0.1);
              
              return (
                <div key={step.phase} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Node - Illuminates when active */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 -translate-x-1/2 z-10 transition-colors duration-500"
                    style={{
                      backgroundColor: isActive ? "#3b82f6" : "#050608",
                      borderColor: isActive ? "#93c5fd" : "rgba(255,255,255,0.2)",
                      boxShadow: isActive ? "0 0 20px rgba(59,130,246,0.8)" : "none"
                    }}
                  />
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2" />
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Reveal delay={0.1}>
                      <div className="rounded-2xl border border-white/10 bg-[#0a0d12] p-8 shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-[#12161f]">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="font-display text-sm font-semibold text-blue-400">Step {step.number}</span>
                          <div className="h-px flex-1 bg-white/10" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-white">{step.title}</h3>
                        <p className="mt-3 text-slate-400 leading-relaxed">{step.description}</p>
                        
                        <div className="mt-6 pt-6 border-t border-white/5">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Deliverables</p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables?.map((d) => (
                              <span key={d} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="why-us" className="py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built for speed, trust, and long-term growth."
          copy="The design looks premium, but the system underneath is practical: fast pages, clean code, secure flows, and flexible architecture."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            return (
              <Reveal key={reason.label} delay={index * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-[#0a0d12] p-8">
                  <reason.icon className="h-6 w-6 text-blue-400" aria-hidden />
                  <div className="mt-12">
                    <p className="font-display text-4xl font-semibold text-white">{reason.value}</p>
                    <p className="mt-2 text-sm font-medium text-slate-400">{reason.label}</p>
                  </div>
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
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0d12]/50 to-transparent" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Built for trust from the first interaction."
          copy="The Omnitrix experience is meant to feel calm, premium, and conversion-ready from the first screen."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-[#0a0d12] p-8 shadow-lg">
                <p className="text-lg leading-relaxed text-slate-300">"{item.quote}"</p>
                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="font-display text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.role}</p>
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
    <section id="contact" className="py-32 relative">
      <div className="container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Contact</p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Tell us what you want to build.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Share your website, brand, or app idea and we will respond with a clear project direction, timeline, and next steps.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a0d12] text-slate-400 transition hover:border-blue-500 hover:text-blue-400 hover:bg-slate-900"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" aria-hidden />
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 text-sm text-slate-400 sm:flex-row">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/5 bg-[#0a0d12] px-5 py-2.5">
              <Phone className="h-4 w-4 text-blue-400" aria-hidden />
              <span>+91 98966 66220</span>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/5 bg-[#0a0d12] px-5 py-2.5">
              <MessageSquare className="h-4 w-4 text-blue-400" aria-hidden />
              <span>WhatsApp support</span>
            </div>
          </div>
        </Reveal>
        
        <ThreeDReveal delay={0.1}>
          <form className="rounded-2xl border border-white/10 bg-[#0a0d12] p-6 sm:p-8 shadow-2xl relative" action="/api/contact" method="post">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <input type="hidden" name="page" value="Homepage contact section" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block group">
                <span className="mb-2 block text-sm font-medium text-slate-400 transition-colors group-focus-within:text-blue-400">Name</span>
                <input name="name" required className="w-full rounded-xl border border-white/10 bg-[#050608] px-4 py-3.5 text-white outline-none transition focus:border-blue-500/50 focus:bg-slate-900/50" />
              </label>
              <label className="block group">
                <span className="mb-2 block text-sm font-medium text-slate-400 transition-colors group-focus-within:text-blue-400">Email</span>
                <input name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-[#050608] px-4 py-3.5 text-white outline-none transition focus:border-blue-500/50 focus:bg-slate-900/50" />
              </label>
            </div>
            <label className="mt-5 block group">
              <span className="mb-2 block text-sm font-medium text-slate-400 transition-colors group-focus-within:text-blue-400">Project type</span>
              <input name="projectType" className="w-full rounded-xl border border-white/10 bg-[#050608] px-4 py-3.5 text-white outline-none transition focus:border-blue-500/50 focus:bg-slate-900/50" />
            </label>
            <label className="mt-5 block group">
              <span className="mb-2 block text-sm font-medium text-slate-400 transition-colors group-focus-within:text-blue-400">Vision</span>
              <textarea name="message" required rows={4} className="w-full resize-none rounded-xl border border-white/10 bg-[#050608] px-4 py-3.5 text-white outline-none transition focus:border-blue-500/50 focus:bg-slate-900/50" />
            </label>
            <button 
              className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition hover:bg-blue-400 hover:shadow-[0_0_24px_rgba(59,130,246,0.3)] cursor-pointer"
            >
              Send project signal <Send className="h-4 w-4" aria-hidden />
            </button>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Mail className="h-4 w-4" aria-hidden />
              keshavladha24@gmail.com
            </p>
          </form>
        </ThreeDReveal>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container">
        <ThreeDReveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0d12] p-10 text-center sm:p-16 shadow-2xl">
            {/* Soft radial light */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[80px]" />
            </div>
            
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl relative z-10">
              Ready to engineer your digital presence?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 relative z-10">
              Start with a focused project inquiry. We will recommend the fastest path to a premium, high-converting website for your business.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center relative z-10">
              <Link 
                href="/contact" 
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[#050608] shadow-[0_0_24px_rgba(59,130,246,0.15)] transition hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(59,130,246,0.25)] w-full sm:w-auto"
              >
                Start a project
              </Link>
              <a 
                href="https://api.whatsapp.com/send?phone=917027340360&text=Hi,%20I%20want%20to%20start%20a%20website%20project%20with%20Omnitrix." 
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-white transition hover:bg-white/10 w-full sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </ThreeDReveal>
      </div>
    </section>
  );
}
