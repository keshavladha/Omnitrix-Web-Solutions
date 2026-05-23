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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-600 font-semibold">
              <Target className="h-4 w-4" aria-hidden />
              Our Story
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Built by <span className="shimmer">Builders.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-500">
              Omnitrix Web Solutions was founded to help local businesses in Sirsa, Ellenabad and Haryana get online fast with affordable, high-quality websites and marketing support.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.24}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {companyStats.map((stat, index) => (
                <div key={stat.label} className="glass rounded-xl p-6 text-center bg-white">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="font-display text-3xl font-semibold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Founder Story */}
        <section className="border-t border-slate-200 bg-slate-50/50 py-20">
          <div className="container">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <Reveal>
                <div className="mb-10 lg:mb-0">
                  <div className="glass glow-border relative mx-auto w-full max-w-md rounded-2xl p-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                            <Users className="h-10 w-10 text-blue-600" />
                          </div>
                          <p className="font-display text-xl font-semibold text-slate-800">Keshav Ladha</p>
                          <p className="text-blue-600 font-semibold">Founder & Lead Engineer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <h2 className="font-display text-3xl font-semibold text-slate-900 mb-6">
                    From Side Projects to Local Business Growth
                  </h2>
                  <div className="space-y-4 text-slate-650 leading-relaxed text-sm">
                    <p>
                      I started Omnitrix while still in my BCA program, building websites for local businesses to pay for my education. What began as a small service for friends and neighbors quickly became a mission to help shops, clinics, and service brands get online fast.
                    </p>
                    <p>
                      After working with many local businesses, I noticed a pattern: they needed a professional website, easy customer contact, and an affordable partner who understood how to attract walk-in customers and online leads.
                    </p>
                    <p>
                      That's what Omnitrix became. Not just a web builder, but a business growth partner that treats every website as a sales tool. We've helped dozens of local businesses launch high-performing sites and WhatsApp-enabled contact systems.
                    </p>
                    <p className="text-blue-600 font-bold text-base mt-6">
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
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                Our Journey
              </h2>
              <p className="mt-4 text-slate-500">
                From first client to 50+ projects delivered.
              </p>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent hidden lg:block" />
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <Reveal key={event.year} delay={0.1 * index}>
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                    <div className={`${index % 2 === 1 ? 'lg:text-right lg:direction-ltr' : ''} mb-4 lg:mb-0`}>
                      <div className="glass inline-flex items-center gap-3 rounded-xl px-5 py-3 bg-white">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="font-display text-xl font-semibold text-slate-800">{event.year}</span>
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:direction-ltr' : ''}`}>
                      <div className="glass rounded-xl p-6 bg-white">
                        <h3 className="font-display text-lg font-semibold text-slate-800 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="border-t border-slate-200 bg-slate-50/50 py-20">
          <div className="container">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="font-display text-3xl font-semibold text-slate-900">
                  Awards & Recognition
                </h2>
                <p className="mt-4 text-slate-500">
                  Recognition from the local business and web design community.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((award, index) => (
                <Reveal key={award.title} delay={0.1 * index}>
                  <div className="glass rounded-xl p-6 text-center bg-white">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
                      <award.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-1">
                      {award.year}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-800 mb-2">
                      {award.title}
                    </h3>
                    <p className="text-sm text-slate-500">{award.organization}</p>
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
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                Core Team
              </h2>
              <p className="mt-4 text-slate-500">
                Small team, big impact. We partner with specialists when projects demand it.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Reveal key={member.name} delay={0.1 * index}>
                <TiltCard className="glass rounded-xl overflow-hidden bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white/80 backdrop-blur-xs">
                        <member.icon className="h-10 w-10 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-slate-850">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-650 font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-1">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 font-medium"
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
        <section className="border-t border-slate-200 bg-slate-50/50 py-20">
          <div className="container">
            <Reveal>
              <div className="glass rounded-2xl p-8 lg:p-12 bg-white shadow-sm">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  <div className="mb-8 lg:mb-0">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-slate-900 mb-4">
                      Based in India, <br />Working Globally
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Our headquarters are in Ellenabad, Sirsa, Haryana, but our clients span from San Francisco to Singapore. We work across time zones to ensure seamless collaboration.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-display font-semibold text-slate-900">50+</div>
                        <div className="text-sm text-slate-500 font-medium">Projects Delivered</div>
                      </div>
                      <div>
                        <div className="text-2xl font-display font-semibold text-slate-900">12+</div>
                        <div className="text-sm text-slate-500 font-medium">Countries Served</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-6 bg-slate-50">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-sm text-slate-700 font-semibold">Available for new projects</span>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-sm text-slate-500 mb-1">Response Time</p>
                        <p className="text-slate-800 font-bold">Usually within 4 hours</p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-sm text-slate-500 mb-1">Working Hours</p>
                        <p className="text-slate-800 font-bold">IST (GMT+5:30) / Flexible for US/EU</p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <p className="text-sm text-slate-500 mb-1">Languages</p>
                        <p className="text-slate-800 font-bold">English, Hindi</p>
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
