import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal, TiltCard } from "@/components/motion";
import { awards, companyStats, teamMembers, timeline } from "@/lib/data";
import { Award, Calendar, MapPin, Target, Users, Zap } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Meet the team behind Omnitrix Web Solutions. We're builders, designers, and engineers passionate about great products.",
};

export default function AboutPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <Target className="h-4 w-4" aria-hidden />
              Our Story
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Built by <span className="shimmer">Builders.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Omnitrix Web Solutions was founded on a simple belief: startups deserve agency-quality work without agency-level bureaucracy.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.24}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {companyStats.map((stat, index) => (
                <div key={stat.label} className="glass rounded-xl p-6 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <stat.icon className="h-6 w-6 text-cyan-200" />
                  </div>
                  <div className="font-display text-3xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Founder Story */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <Reveal>
                <div className="mb-10 lg:mb-0">
                  <div className="glass glow-border relative mx-auto w-full max-w-md rounded-2xl p-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                            <Users className="h-10 w-10 text-cyan-100" />
                          </div>
                          <p className="font-display text-xl font-semibold text-white">Keshav Ladha</p>
                          <p className="text-cyan-200">Founder & Lead Engineer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <h2 className="font-display text-3xl font-semibold text-white mb-6">
                    From Side Projects to Scaling Startups
                  </h2>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      I started Omnitrix while still in my BCA program, building websites for local businesses to pay for my education. What started as a side hustle quickly became an obsession with creating digital experiences that actually move the needle.
                    </p>
                    <p>
                      After working with dozens of startups, I noticed a pattern: they all wanted the polish of a funded SaaS company, but couldn't afford the $50K+ retainers of traditional agencies. They needed someone who understood both the technical architecture and the business goals.
                    </p>
                    <p>
                      That's what Omnitrix became. Not just a web development shop, but a technical partner that treats your product like our own. We've since helped launch 50+ startups, from MVPs that raised seed rounds to enterprise platforms processing millions in transactions.
                    </p>
                    <p className="text-cyan-200">
                      — Keshav Ladha, Founder
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container py-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-semibold text-white">
                Our Journey
              </h2>
              <p className="mt-4 text-slate-300">
                From first client to 50+ projects delivered.
              </p>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-200/50 via-cyan-200/20 to-transparent hidden lg:block" />
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <Reveal key={event.year} delay={0.1 * index}>
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:text-right lg:direction-ltr' : ''} mb-4 lg:mb-0`}>
                      <div className="glass inline-flex items-center gap-3 rounded-xl px-5 py-3">
                        <Calendar className="h-5 w-5 text-cyan-200" />
                        <span className="font-display text-xl font-semibold text-white">{event.year}</span>
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:direction-ltr' : ''}`}>
                      <div className="glass rounded-xl p-6">
                        <h3 className="font-display text-lg font-semibold text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-slate-400">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                  <Award className="h-5 w-5 text-cyan-100" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-white">
                  Awards & Recognition
                </h2>
                <p className="mt-4 text-slate-300">
                  Recognition from the design and startup community.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((award, index) => (
                <Reveal key={award.title} delay={0.1 * index}>
                  <div className="glass glow-border rounded-xl p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <award.icon className="h-8 w-8 text-cyan-200" />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-cyan-200 mb-1">
                      {award.year}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-sm text-slate-400">{award.organization}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="container py-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-semibold text-white">
                Core Team
              </h2>
              <p className="mt-4 text-slate-300">
                Small team, big impact. We partner with specialists when projects demand it.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={0.1 * index}>
                <TiltCard className="glass rounded-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                        <member.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cyan-200 mb-3">{member.role}</p>
                    <p className="text-sm text-slate-400">{member.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <Reveal>
              <div className="glass glow-border rounded-2xl p-8 lg:p-12">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  <div className="mb-8 lg:mb-0">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                      <MapPin className="h-5 w-5 text-cyan-100" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-white mb-4">
                      Based in India, <br />Working Globally
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      Our headquarters are in Hisar, Haryana, but our clients span from San Francisco to Singapore. We work across time zones to ensure seamless collaboration.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-display font-semibold text-white">50+</div>
                        <div className="text-sm text-slate-400">Projects Delivered</div>
                      </div>
                      <div>
                        <div className="text-2xl font-display font-semibold text-white">12+</div>
                        <div className="text-sm text-slate-400">Countries Served</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-400" />
                        <span className="text-sm text-slate-300">Available for new projects</span>
                      </div>
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-sm text-slate-400 mb-1">Response Time</p>
                        <p className="text-white font-semibold">Usually within 4 hours</p>
                      </div>
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-sm text-slate-400 mb-1">Working Hours</p>
                        <p className="text-white font-semibold">IST (GMT+5:30) / Flexible for US/EU</p>
                      </div>
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-sm text-slate-400 mb-1">Languages</p>
                        <p className="text-white font-semibold">English, Hindi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
