"use client";

import { useState } from "react";
import { Reveal, TiltCard } from "@/components/motion";
import { 
  MapPin, 
  ShoppingBag, 
  Briefcase, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Check, 
  MessageSquare, 
  ShieldAlert,
  Building,
  GraduationCap,
  Calendar,
  Layers,
  Terminal,
  Utensils
} from "lucide-react";
import Link from "next/link";

interface StepOption {
  id: string;
  label: string;
  desc?: string;
  icon: any;
}

const goals: StepOption[] = [
  { id: "walkin", label: "Get Walk-in Customers", desc: "Drive offline traffic via local Google searches & Maps.", icon: MapPin },
  { id: "whatsapp", label: "WhatsApp Catalog / Ordering", desc: "Sell catalog products directly via WhatsApp checkout.", icon: ShoppingBag },
  { id: "portfolio", label: "Showcase Services & Credibility", desc: "Professional portfolio and services list to build client trust.", icon: Briefcase },
  { id: "booking", label: "Online Bookings & Leads", desc: "Let customers book appointments or submit lead signals.", icon: Clock },
];

const industries: StepOption[] = [
  { id: "clinic", label: "Clinic & Healthcare", icon: ShieldAlert },
  { id: "restaurant", label: "Restaurant & Cafe", icon: Utensils },
  { id: "retail", label: "Retail Boutique & Shop", icon: ShoppingBag },
  { id: "realestate", label: "Real Estate Broker", icon: Building },
  { id: "education", label: "Coaching & Institute", icon: GraduationCap },
  { id: "other", label: "Other Local Service", icon: Layers },
];

const timelines: StepOption[] = [
  { id: "urgent", label: "Super Urgent (< 3 days)", desc: "Need to launch campaigns or waitlists immediately.", icon: Clock },
  { id: "standard", label: "Standard (1-2 weeks)", desc: "Standard focused launch cycle with full discovery.", icon: Calendar },
  { id: "flexible", label: "Flexible", desc: "Complex custom build with specific iterative feedback.", icon: Terminal },
];

export default function DiscoveryPlanner() {
  const [step, setStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");

  const handleNext = (val: string) => {
    if (step === 1) {
      setSelectedGoal(val);
      setStep(2);
    } else if (step === 2) {
      setSelectedIndustry(val);
      setStep(3);
    } else if (step === 3) {
      setSelectedTimeline(val);
      setStep(4);
    }
  };

  const handleBack = () => {
    setStep(Math.max(1, step - 1));
  };

  const getResultPlan = () => {
    let planName = "Business Plan";
    let planPrice = "₹12,000";
    let stack = "Next.js 16 + Tailwind CSS 4 + WhatsApp Lead Capture";
    let features: string[] = ["Mobile-first layout", "GMB Location Integration", "Social links"];

    if (selectedGoal === "walkin") {
      planName = "Business Plan";
      planPrice = "₹12,000";
      features = ["Google Maps setup", "WhatsApp quick contact", "Local SEO tags", "Interactive service lists"];
    } else if (selectedGoal === "whatsapp") {
      planName = "Premium Plan";
      planPrice = "₹20,000";
      stack = "Next.js 16 + React 19 + MongoDB Cloud + WhatsApp Ordering API";
      features = ["Interactive product catalog", "Cart & checkout", "WhatsApp direct order details", "UPI / Razorpay links"];
    } else if (selectedGoal === "booking") {
      planName = "Premium Plan";
      planPrice = "₹20,000";
      stack = "Next.js 16 + Tailwind v4 + Integrated Scheduling Portal";
      features = ["Online slot booker", "Instant WhatsApp lead signals", "Pre-fill booking form", "Auto-responsive timetables"];
    } else if (selectedGoal === "portfolio") {
      planName = "Basic Plan";
      planPrice = "₹5,000";
      features = ["Single-page landing portfolio", "WhatsApp chat integration", "Detailed services grid", "Resume / case study download"];
    }

    if (selectedIndustry === "restaurant") {
      features.push("Visual food catalog / menu categories");
    } else if (selectedIndustry === "clinic") {
      features.push("Doctor profiles & credibility testimonials");
    } else if (selectedIndustry === "realestate") {
      features.push("Property photo galleries & contact grids");
    }

    if (selectedTimeline === "urgent") {
      features.push("Priority Delivery upgrade (+₹2,000)");
    }

    return { planName, planPrice, stack, features };
  };

  const getHandoffUrl = () => {
    const res = getResultPlan();
    const goalLabel = goals.find((g) => g.id === selectedGoal)?.label || "";
    const indLabel = industries.find((i) => i.id === selectedIndustry)?.label || "";
    const timeLabel = timelines.find((t) => t.id === selectedTimeline)?.label || "";
    
    const msg = `Hi Keshav, I ran your online Discovery Planner! Here is my project criteria:
Primary Business Goal: ${goalLabel}
Industry Sector: ${indLabel}
Launch Timeframe: ${timeLabel}
Recommended Strategy Blueprint: ${res.planName} (${res.stack})
Please schedule a discovery call to review my requirements!`;

    let budgetVal = "25-50k";
    if (res.planPrice.includes("5,000")) budgetVal = "25k-under"; // Basic 
    if (res.planPrice.includes("12,000")) budgetVal = "25-50k"; // Business
    if (res.planPrice.includes("20,000")) budgetVal = "50-100k"; // Premium

    return `/contact?projectType=${selectedGoal === "whatsapp" ? "ecommerce" : selectedGoal === "booking" ? "app" : "business"}&budget=${budgetVal}&message=${encodeURIComponent(msg)}`;
  };

  const getWhatsAppUrl = () => {
    const res = getResultPlan();
    const goalLabel = goals.find((g) => g.id === selectedGoal)?.label || "";
    const indLabel = industries.find((i) => i.id === selectedIndustry)?.label || "";
    const timeLabel = timelines.find((t) => t.id === selectedTimeline)?.label || "";
    
    const msg = `*OMNITRIX PROJECT DISCOVERY BRIEF* 🚀\n-------------------------------------------\n👤 *Primary Goal:* ${goalLabel}\n🏢 *Industry Sector:* ${indLabel}\n📅 *Timeline:* ${timeLabel}\n🛠️ *Strategy Blueprint:* ${res.planName}\n📦 *Recommended Stack:* ${res.stack}\n-------------------------------------------\nPlease schedule a discovery call to review my requirements!`;

    return `https://api.whatsapp.com/send?phone=+917027340360&text=${encodeURIComponent(msg)}`;
  };

  const result = getResultPlan();

  return (
    <div className="mx-auto max-w-3xl glass rounded-2xl p-6 sm:p-8 border-slate-200 shadow-md overflow-hidden relative">
      {/* Top indicator bar */}
      {step === 4 && (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 via-cyan-400 to-blue-400" />
      )}
      
      {/* Header and Step Indicators */}
      {step < 4 && (
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className={`text-xs uppercase font-bold tracking-wider ${
              step === 1 ? "text-cyan-400" : step === 2 ? "text-blue-400" : "text-cyan-400"
            }`}>
              Omnitrix Strategic Discovery
            </span>
            <h3 className="font-display text-xl font-semibold text-white mt-1">
              {step === 1 && "What is your primary website goal?"}
              {step === 2 && "Which industry niche matches your business?"}
              {step === 3 && "What is your target launch schedule?"}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
              step === 1 
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                : step === 2 
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
            }`}>
              {step}
            </span>
            <span className="text-sm font-semibold text-slate-400">of 3</span>
          </div>
        </div>
      )}

      {/* Wizard Steps */}
      <div>
        
        {/* Step 1: Goals */}
        {step === 1 && (
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {goals.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNext(item.id)}
                    className="flex text-left items-start gap-4 rounded-2xl border border-white/5 bg-slate-950/40 p-5 transition duration-300 hover:border-cyan-500/40 hover:bg-slate-900/40 hover:shadow-sm group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-455 group-hover:bg-cyan-500/20 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white group-hover:text-cyan-455 transition">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* Step 2: Industry */}
        {step === 2 && (
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-3">
              {industries.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNext(item.id)}
                    className="flex flex-col text-left items-start gap-3 rounded-2xl border border-white/5 bg-slate-950/40 p-5 transition duration-300 hover:border-blue-500/40 hover:bg-slate-900/40 hover:shadow-sm group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-semibold text-white group-hover:text-blue-400 transition">
                      {item.label}
                    </h4>
                  </button>
                );
              })}
            </div>
            
            <div className="mt-8 flex justify-start">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition rounded-full border border-white/10 bg-slate-950 px-4 py-2 cursor-pointer hover:bg-cyan-500/10 shadow-sm"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back
              </button>
            </div>
          </Reveal>
        )}

        {/* Step 3: Timeline */}
        {step === 3 && (
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {timelines.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNext(item.id)}
                    className="flex flex-col text-left items-start gap-4 rounded-2xl border border-white/5 bg-slate-950/40 p-5 transition duration-300 hover:border-cyan-500/40 hover:bg-slate-900/40 hover:shadow-sm group h-full cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white group-hover:text-cyan-400 transition">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex justify-start">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition rounded-full border border-white/10 bg-slate-950 px-4 py-2 cursor-pointer hover:bg-cyan-500/10 shadow-sm"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back
              </button>
            </div>
          </Reveal>
        )}

        {/* Step 4: Results Display */}
        {step === 4 && (
          <Reveal>
            <div className="text-center pt-2">
              <span className="flex mx-auto h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-455 mb-4">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </span>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-400 font-bold">
                Strategic Website Blueprint
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white">
                Personalized Blueprint Ready
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                We mapped your goal, industry niche, and launch timeline to construct a highly performant engineering roadmap.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 text-left overflow-visible">
              
              {/* Left Column: Blueprint specs */}
              <div className="space-y-4 overflow-visible">
                <TiltCard className="overflow-visible">
                  <div className="glass rounded-2xl p-5 border-white/5 bg-slate-950/40 relative overflow-visible h-full group" style={{ transformStyle: "preserve-3d" }}>
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                    
                    {/* Floating 3D blueprint metrics chip popped at translateZ(60px) */}
                    <div 
                      className="absolute -top-3 -right-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg backdrop-blur-md pointer-events-none"
                      style={{ transform: "translateZ(60px)" }}
                    >
                      🚀 Latency &lt; 80ms
                    </div>
                    
                    <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                      <span className="text-[10px] uppercase font-bold text-cyan-400 block pl-2">
                        Recommended Technical Stack
                      </span>
                      <h4 className="font-display text-lg font-bold text-white mt-1 pl-2">
                        Next-Gen Headless System
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed pl-2">
                        Powered by <strong className="text-white">{result.stack}</strong>. Built for sub-second responses and zero bounce rate on Haryana local networks.
                      </p>
                    </div>
                  </div>
                </TiltCard>

                <TiltCard className="overflow-visible">
                  <div className="glass rounded-2xl p-5 border-white/5 bg-slate-950/40 relative overflow-visible group" style={{ transformStyle: "preserve-3d" }}>
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                    
                    {/* Floating 3D metric chip */}
                    <div 
                      className="absolute -top-3 -right-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg backdrop-blur-md pointer-events-none"
                      style={{ transform: "translateZ(65px)" }}
                    >
                      ⚡ Best ROI
                    </div>

                    <div className="flex justify-between items-center mt-2 pl-2" style={{ transform: "translateZ(30px)" }}>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-blue-400 block mb-0.5">
                          Suggested Pricing Package
                        </span>
                        <h4 className="font-display text-lg font-bold text-white">
                          {result.planName}
                        </h4>
                      </div>
                      <span className="font-display text-xl font-bold text-blue-400">
                        {result.planPrice}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Right Column: Suggested features */}
              <TiltCard className="overflow-visible h-full">
                <div className="glass rounded-2xl p-5 border-white/5 bg-slate-950/40 relative overflow-visible h-full group" style={{ transformStyle: "preserve-3d" }}>
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                  
                  {/* Floating blueprint metric chip */}
                  <div 
                    className="absolute -top-3 -right-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg backdrop-blur-md pointer-events-none"
                    style={{ transform: "translateZ(60px)" }}
                  >
                    🎯 100% Custom
                  </div>

                  <div className="h-full flex flex-col" style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d" }}>
                    <span className="text-[10px] uppercase font-bold text-cyan-400 block pl-2 mb-4">
                      Recommended Core Features Checklist
                    </span>
                    <div className="space-y-3.5 pl-2 flex-grow">
                      {result.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-400 transition duration-300 hover:text-white">
                          <Check className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center border-t border-white/10 pt-6">
              <button
                onClick={() => setStep(1)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-slate-950 px-6 text-xs font-semibold text-slate-300 transition hover:bg-slate-900 hover:text-slate-100 cursor-pointer shadow-sm"
              >
                Reset Wizard
              </button>
              
              <Link
                href={getHandoffUrl()}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-slate-950 px-6 text-xs font-semibold text-slate-300 transition hover:bg-white/5 hover:border-cyan-500/30 hover:text-cyan-400 cursor-pointer shadow-sm"
              >
                Apply to Contact Form
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-xs font-bold text-obsidian-lowest transition hover:bg-cyan-400 shadow-sm hover:shadow-cyan-500/20 cursor-pointer"
                style={{ color: "#02040a" }}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Send Brief via WhatsApp
              </a>
            </div>
            
            <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed max-w-lg mx-auto">
              Choose to **Send via WhatsApp** to instantly message Keshav your formatted blueprint brief, or **Apply to Contact Form** to pre-fill the local project inquiry form.
            </p>
          </Reveal>
        )}

      </div>
    </div>
  );
}
