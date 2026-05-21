import { Reveal, TiltCard } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { projects, reasons, services, socials, techStack, testimonials } from "@/lib/data";
import { ArrowUpRight, Mail, Send, ShieldCheck, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">About</p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            A young studio with a senior product instinct.
          </h2>
          <Link 
            href="/about" 
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            Learn more about us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <p className="text-lg leading-9 text-slate-300">
              Omnitrix Web Solutions is shaped by Keshav Ladha, a BCA student and full-stack builder focused on turning startup ideas into fast, scalable, visually premium digital products.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Product clarity", "Frontend craft", "Backend discipline"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="mb-4 h-px w-12 bg-cyan-200/70" />
                  <p className="font-display text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Services</p>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Full-stack execution for ambitious digital products.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              Every service is designed around modern startup needs: premium interfaces, clean architecture, fast delivery, and systems that can grow.
            </p>
          </div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.035}>
              <Link href="/services" className="block h-full">
                <TiltCard className="glass glow-border h-full rounded-xl p-5 transition duration-300 hover:-translate-y-1">
                  <service.icon className="h-6 w-6 text-cyan-200" aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{service.copy}</p>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const techStackItems = [
  { name: "Next.js", desc: "Fast, SEO-friendly websites" },
  { name: "React", desc: "Interactive UI components" },
  { name: "TypeScript", desc: "Reliable, error-free code" },
  { name: "Tailwind CSS", desc: "Beautiful responsive design" },
  { name: "Node.js", desc: "Scalable backend services" },
  { name: "MongoDB", desc: "Secure cloud database" },
];

export function TechStackSection() {
  return (
    <section id="stack" className="overflow-hidden py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Technology Stack</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Modern Tools, <span className="shimmer">Real Results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-slate-400">
              We use industry-leading technologies trusted by top companies worldwide to deliver fast, secure, and reliable websites.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          {/* Clean Grid Layout */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStackItems.map((tech, index) => (
              <div
                key={tech.name}
                className="glass group relative overflow-hidden rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-cyan-200/30 hover:bg-white/[0.04]"
              >
                {/* Top Row: Number + Name */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-200/10 text-sm font-semibold text-cyan-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors">
                    {tech.name}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {tech.desc}
                </p>

                {/* Subtle gradient line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Trust Indicators */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan-200" />
              <span>99% Performance Score</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-cyan-200" />
              <span>100% Mobile Responsive</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-cyan-200" />
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
    <section id="projects" className="py-24">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Projects</p>
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Cinematic product surfaces built for credibility.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              Representative builds that show the Omnitrix approach across SaaS, launch websites, and internal platforms.
            </p>
          </div>
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <Link href="/work" className="block h-full">
                <TiltCard className="glass glow-border h-full rounded-2xl p-5">
                  <div className="mb-5 aspect-[1.35] rounded-xl border border-white/10 bg-[radial-gradient(circle_at_35%_20%,rgba(64,232,255,0.26),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(47,125,255,0.08))] p-4">
                    <div className="h-full rounded-lg border border-cyan-200/15 bg-black/30 p-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-200" />
                        <span className="h-2 w-2 rounded-full bg-blue-300/70" />
                        <span className="h-2 w-2 rounded-full bg-white/45" />
                      </div>
                      <div className="mt-8 h-3 w-2/3 rounded-full bg-white/20" />
                      <div className="mt-3 h-3 w-1/2 rounded-full bg-cyan-200/30" />
                      <div className="mt-8 grid grid-cols-3 gap-2">
                        <span className="h-14 rounded-md bg-white/8" />
                        <span className="h-14 rounded-md bg-cyan-200/12" />
                        <span className="h-14 rounded-md bg-white/8" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/75">{project.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{project.copy}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                      View details <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title="A premium build standard without enterprise drag."
          copy="Lean execution, sharp visual taste, and engineering decisions made for actual startup momentum."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.label} delay={index * 0.04}>
              <div className="glass rounded-xl p-5">
                <div className="flex items-start justify-between">
                  <reason.icon className="h-6 w-6 text-cyan-200" aria-hidden />
                  <span className="font-display text-4xl font-semibold text-white/10">{reason.value}</span>
                </div>
                <p className="mt-8 font-display text-xl font-semibold text-white">{reason.label}</p>
              </div>
            </Reveal>
          ))}
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
              <div className="glass h-full rounded-2xl p-6">
                <p className="text-lg leading-8 text-slate-200">"{item.quote}"</p>
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
    <section id="contact" className="py-24">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Contact</p>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            Let's build something that feels inevitable.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Share the product, website, or platform you want to launch. Omnitrix will respond with a clear direction and build path.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-200/45 hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" aria-hidden />
              </Link>
            ))}
          </div>
          <Link 
            href="/contact" 
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            Or use our full contact form
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <form className="glass rounded-2xl p-5 sm:p-7" action="/api/contact" method="post">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Name</span>
                <input name="name" required className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-200/60" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <input name="email" type="email" required className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-200/60" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">Project type</span>
              <input name="projectType" className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-200/60" />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">Vision</span>
              <textarea name="message" required rows={5} className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-200/60" />
            </label>
            <button className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
              Send project signal <Send className="h-4 w-4" aria-hidden />
            </button>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Mail className="h-4 w-4 text-cyan-200" aria-hidden />
              hello@omnitrixwebsolutions.com
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
