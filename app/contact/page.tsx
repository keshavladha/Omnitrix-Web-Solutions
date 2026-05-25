"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/motion";
import { contactMethods, officeLocations } from "@/lib/data";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const initProjectType = searchParams.get("projectType") || "";
  const initBudget = searchParams.get("budget") || "";
  const initMessage = searchParams.get("message") || "";

  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        {/* Hero */}
        <section className="container pb-20">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm text-emerald-400 font-semibold">
              <MessageSquare className="h-4 w-4" aria-hidden />
              Let's Talk
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Start Your <span className="shimmer">Project Today.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-slate-500">
              Tell us about your vision. We'll get back to you within 24 hours with a detailed proposal.
            </p>
          </Reveal>
        </section>

        {/* Contact Grid */}
        <section className="border-t border-slate-200 bg-slate-50/50 py-20">
          <div className="container">
            <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16">
              {/* Contact Form */}
              <Reveal>
                <div className="glass glow-border rounded-2xl p-6 lg:p-8">
                  <h2 className="font-display text-xl font-semibold text-slate-800 mb-6">
                    Tell Us About Your Project
                  </h2>
                  <form className="space-y-5" action="/api/contact" method="post">
                    <input type="hidden" name="page" value="Contact page" />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-655">
                          Name *
                        </label>
                        <input
                           name="name"
                           type="text"
                           required
                           placeholder="John Doe"
                           className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:bg-slate-900/60 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-655">
                          Email *
                        </label>
                        <input
                           name="email"
                           type="email"
                           required
                           placeholder="john@company.com"
                           className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:bg-slate-900/60 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-655">
                          Company
                        </label>
                        <input
                           name="company"
                           type="text"
                           placeholder="Acme Inc."
                           className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:bg-slate-900/60 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-655">
                          Budget Range
                        </label>
                        <select 
                          name="budget" 
                          defaultValue={initBudget}
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white focus:bg-slate-900/60 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none transition cursor-pointer"
                        >
                          <option value="" className="bg-slate-950 text-slate-200">Select budget</option>
                          <option value="25k-under" className="bg-slate-950 text-slate-200">Under ₹25,000</option>
                          <option value="25-50k" className="bg-slate-950 text-slate-200">₹25,000 - ₹50,000</option>
                          <option value="50-100k" className="bg-slate-950 text-slate-200">₹50,000 - ₹1,00,000</option>
                          <option value="1-2L" className="bg-slate-950 text-slate-200">₹1,00,000 - ₹2,00,000</option>
                          <option value="2L+" className="bg-slate-950 text-slate-200">₹2,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-655">
                        Project Type
                      </label>
                      <select 
                        name="projectType" 
                        defaultValue={initProjectType}
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white focus:bg-slate-900/60 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none transition cursor-pointer"
                      >
                        <option value="" className="bg-slate-950 text-slate-200">Select project type</option>
                        <option value="business" className="bg-slate-950 text-slate-200">Business Website</option>
                        <option value="website" className="bg-slate-950 text-slate-200">Website / Landing Page</option>
                        <option value="ecommerce" className="bg-slate-950 text-slate-200">E-commerce</option>
                        <option value="app" className="bg-slate-950 text-slate-200">Web Application</option>
                        <option value="redesign" className="bg-slate-950 text-slate-200">Redesign / Migration</option>
                        <option value="other" className="bg-slate-950 text-slate-200">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-655">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        defaultValue={initMessage}
                        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:bg-slate-900/60 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none resize-none transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-emerald-400 shadow-md hover:shadow-emerald-500/20 cursor-pointer"
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
                          className="flex items-center gap-4 rounded-lg border border-white/10 bg-slate-950/40 p-4 transition hover:border-emerald-500/30 hover:bg-slate-100/10 hover:shadow-sm"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                            <method.icon className="h-5 w-5 text-emerald-400" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500">{method.label}</p>
                            <p className="font-semibold text-white">{method.value}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-5 w-5 text-emerald-400" />
                      <h3 className="font-display font-semibold text-white">Availability</h3>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-slate-500 font-medium">Response Time</span>
                        <span className="text-slate-300 font-semibold">&lt; 4 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500 font-medium">Working Hours</span>
                        <span className="text-slate-300 font-semibold">IST (GMT+5:30)</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-slate-500 font-medium">Availability</span>
                        <span className="text-emerald-400 font-semibold">● Open for projects</span>
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
              <h2 className="font-display text-2xl font-semibold text-slate-900">
                Our Locations
              </h2>
              <p className="mt-4 text-slate-500">
                Serving clients globally from our base in India
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {officeLocations.map((office, index) => (
              <Reveal key={office.city} delay={0.1 * index}>
                <div className="glass rounded-xl p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    {office.city}
                  </h3>
                  <p className="text-sm text-emerald-400 font-semibold mb-3">{office.country}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{office.address}</p>
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

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-28 text-center text-slate-400">Loading Planner Context...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
