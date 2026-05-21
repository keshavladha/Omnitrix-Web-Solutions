import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/motion";
import { contactMethods, officeLocations } from "@/lib/data";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Omnitrix Web Solutions. Let's discuss your next project.",
};

export default function ContactPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-100/16 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
              <MessageSquare className="h-4 w-4" aria-hidden />
              Let's Talk
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Start Your <span className="shimmer">Project Today.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Tell us about your vision. We'll get back to you within 24 hours with a detailed proposal.
            </p>
          </Reveal>
        </section>

        {/* Contact Grid */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="container">
            <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              {/* Contact Form */}
              <Reveal>
                <div className="glass glow-border rounded-2xl p-6 lg:p-8">
                  <h2 className="font-display text-xl font-semibold text-white mb-6">
                    Tell Us About Your Project
                  </h2>
                  <form className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-200/30 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-200/30 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Acme Inc."
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-200/30 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                          Budget Range
                        </label>
                        <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-cyan-200/30 focus:outline-none">
                          <option value="" className="bg-[#02040a]">Select budget</option>
                          <option value="25-50k" className="bg-[#02040a]">₹25,000 - ₹50,000</option>
                          <option value="50-100k" className="bg-[#02040a]">₹50,000 - ₹1,00,000</option>
                          <option value="1-2L" className="bg-[#02040a]">₹1,00,000 - ₹2,00,000</option>
                          <option value="2L+" className="bg-[#02040a]">₹2,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Project Type
                      </label>
                      <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-cyan-200/30 focus:outline-none">
                        <option value="" className="bg-[#02040a]">Select project type</option>
                        <option value="saas" className="bg-[#02040a]">SaaS Platform</option>
                        <option value="website" className="bg-[#02040a]">Website / Landing Page</option>
                        <option value="ecommerce" className="bg-[#02040a]">E-commerce</option>
                        <option value="app" className="bg-[#02040a]">Web Application</option>
                        <option value="redesign" className="bg-[#02040a]">Redesign / Migration</option>
                        <option value="other" className="bg-[#02040a]">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Project Details *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-200/30 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      We'll get back to you within 24 hours. Your information is kept confidential.
                    </p>
                  </form>
                </div>
              </Reveal>

              {/* Contact Info */}
              <Reveal delay={0.2}>
                <div className="mt-10 lg:mt-0 space-y-6">
                  <div className="glass rounded-xl p-6">
                    <h3 className="font-display text-lg font-semibold text-white mb-4">
                      Other Ways to Reach Us
                    </h3>
                    <div className="space-y-4">
                      {contactMethods.map((method) => (
                        <a
                          key={method.label}
                          href={method.href}
                          className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-200/30"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                            <method.icon className="h-5 w-5 text-cyan-200" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-400">{method.label}</p>
                            <p className="font-medium text-white">{method.value}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-5 w-5 text-cyan-200" />
                      <h3 className="font-display font-semibold text-white">Availability</h3>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-slate-400">Response Time</span>
                        <span className="text-white">&lt; 4 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-400">Working Hours</span>
                        <span className="text-white">IST (GMT+5:30)</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-400">Availability</span>
                        <span className="text-green-400">● Open for projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="container py-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl font-semibold text-white">
                Our Locations
              </h2>
              <p className="mt-4 text-slate-300">
                Serving clients globally from our base in India
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officeLocations.map((office, index) => (
              <Reveal key={office.city} delay={0.1 * index}>
                <div className="glass rounded-xl p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <MapPin className="h-5 w-5 text-cyan-200" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {office.city}
                  </h3>
                  <p className="text-sm text-cyan-200 mb-3">{office.country}</p>
                  <p className="text-sm text-slate-400">{office.address}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
