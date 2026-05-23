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

  const result = getResultPlan();

  return (
    <div className="mx-auto max-w-3xl glass rounded-2xl p-6 sm:p-8 border-slate-200 shadow-md overflow-hidden relative">
      {/* Top Google accent indicator */}
      {step === 4 && (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
      )}
      
      {/* Header and Step Indicators */}
      {step < 4 && (
        <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <span className={`text-xs uppercase font-bold tracking-wider ${
              step === 1 ? "text-blue-600" : step === 2 ? "text-red-600" : "text-amber-600"
            }`}>
              Omnitrix Strategic Discovery
            </span>
            <h3 className="font-display text-xl font-semibold text-slate-900 mt-1">
              {step === 1 && "What is your primary website goal?"}
              {step === 2 && "Which industry niche matches your business?"}
              {step === 3 && "What is your target launch schedule?"}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
              step === 1 ? "bg-blue-50 text-blue-600 border border-blue-200" : step === 2 ? "bg-red-55 text-red-600 border border-red-200" : "bg-amber-50 text-amber-600 border border-amber-200"
            }`}>
              {step}
            </span>
            <span className="text-sm font-semibold text-slate-500">of 3</span>
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
                    className="flex text-left items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-blue-500 hover:bg-blue-50/30 hover:shadow-sm group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-slate-800 group-hover:text-blue-600 transition">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
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
                    className="flex flex-col text-left items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-red-500 hover:bg-red-50/30 hover:shadow-sm group cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-100 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display font-semibold text-slate-800 group-hover:text-red-600 transition">
                      {item.label}
                    </h4>
                  </button>
                );
              })}
            </div>
            
            <div className="mt-8 flex justify-start">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition rounded-full border border-slate-200 bg-white px-4 py-2 cursor-pointer hover:bg-slate-50 shadow-sm"
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
                    className="flex flex-col text-left items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-amber-500 hover:bg-amber-50/30 hover:shadow-sm group h-full cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-100 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-slate-800 group-hover:text-amber-600 transition">
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
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
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition rounded-full border border-slate-200 bg-white px-4 py-2 cursor-pointer hover:bg-slate-50 shadow-sm"
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
              <span className="flex mx-auto h-12 w-12 items-center justify-center rounded-full border border-green-500/20 bg-green-500/8 text-green-600 mb-4">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </span>
              <p className="text-xs uppercase tracking-[0.24em] text-green-600 font-bold">
                Strategic Website Blueprint
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-slate-900">
                Personalized Blueprint Ready
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                We mapped your goal, industry niche, and launch timeline to construct a highly performant engineering roadmap.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 text-left">
              
              {/* Left Column: Blueprint specs */}
              <div className="space-y-4">
                <div className="glass rounded-2xl p-5 border-slate-200 bg-blue-50/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                  <span className="text-[10px] uppercase font-bold text-blue-600 block pl-2">
                    Recommended Technical Stack
                  </span>
                  <h4 className="font-display text-lg font-bold text-slate-800 mt-1 pl-2">
                    Next-Gen Headless System
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed pl-2">
                    Powered by <strong className="text-slate-900">{result.stack}</strong>. Built for sub-second responses and zero bounce rate on Haryana local networks.
                  </p>
                </div>

                <div className="glass rounded-2xl p-5 border-slate-200 bg-red-50/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                  <span className="text-[10px] uppercase font-bold text-red-600 block pl-2">
                    Suggested Pricing Package
                  </span>
                  <div className="flex justify-between items-center mt-2 pl-2">
                    <h4 className="font-display text-lg font-bold text-slate-800">
                      {result.planName}
                    </h4>
                    <span className="font-display text-xl font-bold text-red-600">
                      {result.planPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Suggested features */}
              <div className="glass rounded-2xl p-5 border-slate-200 bg-amber-50/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                <span className="text-[10px] uppercase font-bold text-amber-600 block pl-2">
                  Recommended Core Features Checklist
                </span>
                <div className="mt-4 space-y-3 pl-2">
                  {result.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center border-t border-slate-200 pt-6">
              <button
                onClick={() => setStep(1)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 cursor-pointer shadow-sm"
              >
                Reset Wizard
              </button>
              
              <Link
                href={getHandoffUrl()}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-xs font-semibold text-white transition hover:bg-blue-700 shadow-sm hover:shadow-md cursor-pointer"
              >
                Apply This Blueprint To Contact
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            
            <p className="text-center text-[10px] text-slate-500 mt-4 leading-relaxed max-w-md mx-auto">
              Applying pre-fills all contact form fields (goals, stack, timeline) dynamically so Keshav can immediately prepare your proposal scope.
            </p>
          </Reveal>
        )}

      </div>
    </div>
  );
}
