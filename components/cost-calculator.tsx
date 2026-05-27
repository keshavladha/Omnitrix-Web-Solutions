"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal, TiltCard } from "@/components/motion";
import { GlowBorder } from "@/components/glow-border";
import { Check, Info, Sparkles, TrendingUp, Zap, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

type PlanKey = "basic" | "business" | "premium";

interface PlanDetails {
  name: string;
  basePrice: number;
  description: string;
  features: string[];
  timelineDays: number;
  basePages: number;
}

const plans: Record<PlanKey, PlanDetails> = {
  basic: {
    name: "Basic Plan",
    basePrice: 5000,
    description: "Perfect for local shops, clinics, and individual service portfolios.",
    basePages: 1,
    timelineDays: 3,
    features: [
      "Single-page landing website",
      "Mobile-friendly adaptive layout",
      "WhatsApp direct integration",
      "Google Maps local directions",
      "Basic lead capture form",
    ],
  },
  business: {
    name: "Business Plan",
    basePrice: 12000,
    description: "Most popular choice for established local businesses and boutiques.",
    basePages: 5,
    timelineDays: 6,
    features: [
      "5 Core Pages (Home, About, Services, Gallery, Contact)",
      "WhatsApp floating chat support",
      "Interactive image / catalog gallery",
      "Local SEO foundation setup",
      "Social media integration",
    ],
  },
  premium: {
    name: "Premium Plan",
    basePrice: 20000,
    description: "Complete full-featured marketing & booking machine for ambitious brands.",
    basePages: 10,
    timelineDays: 9,
    features: [
      "Up to 10 custom designed pages",
      "Online appointment / slot booking system",
      "Product catalog (up to 50 items)",
      "WhatsApp automated ordering flow",
      "Razorpay / UPI payment links",
    ],
  },
};

interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const addOnsList: AddOnOption[] = [
  {
    id: "priority",
    name: "Priority Delivery (24-48h)",
    price: 2000,
    description: "Guaranteed super-fast turnaround and rapid support.",
  },
  {
    id: "copywriting",
    name: "Professional Copywriting",
    price: 2000,
    description: "High-converting sales copy written for all of your pages.",
  },
  {
    id: "logo",
    name: "Custom Logo & Branding",
    price: 3000,
    description: "A sleek modern logo and professional visual branding guidelines.",
  },
  {
    id: "seo",
    name: "Advanced local SEO setup",
    price: 4500,
    description: "Complete local keyword mapping and GMB citation optimization.",
  },
];

function AnimatedPrice({ value }: { value: number }) {
  const [displayVal, setDisplayVal] = useState(value);

  useEffect(() => {
    let start = displayVal;
    const end = value;
    if (start === end) return;

    const duration = 500; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic formula
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeProgress);

      setDisplayVal(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <>{displayVal.toLocaleString("en-IN")}</>;
}

export default function CostCalculator() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("business");
  const [extraPages, setExtraPages] = useState<number>(0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["seo"]);
  const [totalPrice, setTotalPrice] = useState<number>(16500);
  const [projectedValue, setProjectedValue] = useState<string>("+35% inquiries");

  const planColors: Record<PlanKey, { text: string; border: string; bg: string; dot: string; hover: string }> = {
    basic: {
      text: "text-blue-400 font-semibold",
      border: "border-blue-500/40",
      bg: "bg-blue-500/10",
      dot: "bg-blue-400",
      hover: "hover:border-blue-500/50 hover:bg-blue-500/5"
    },
    business: {
      text: "text-blue-455 font-semibold",
      border: "border-blue-455/40",
      bg: "bg-blue-455/10",
      dot: "bg-blue-455",
      hover: "hover:border-blue-455/50 hover:bg-blue-455/5"
    },
    premium: {
      text: "text-cyan-455 font-semibold",
      border: "border-cyan-500/40",
      bg: "bg-cyan-500/10",
      dot: "bg-cyan-455",
      hover: "hover:border-cyan-500/50 hover:bg-cyan-500/5"
    }
  };

  useEffect(() => {
    const plan = plans[selectedPlan];
    let price = plan.basePrice;
    
    // Add extra pages (₹1,500 per page)
    price += extraPages * 1500;
    
    // Add selected add-ons
    selectedAddOns.forEach((addonId) => {
      const addon = addOnsList.find((a) => a.id === addonId);
      if (addon) price += addon.price;
    });

    setTotalPrice(price);

    // Calculate dynamic consulting ROI value
    let growth = 20;
    if (selectedPlan === "business") growth = 35;
    if (selectedPlan === "premium") growth = 60;
    if (selectedAddOns.includes("seo")) growth += 15;
    if (selectedAddOns.includes("copywriting")) growth += 10;
    
    setProjectedValue(`+${growth}% lead flow`);
  }, [selectedPlan, extraPages, selectedAddOns]);

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((addonId) => addonId !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const getHandoffUrl = () => {
    const plan = plans[selectedPlan];
    const addOnNames = selectedAddOns
      .map((id) => addOnsList.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");
    
    const pagesTotal = plan.basePages + extraPages;
    const addOnsText = addOnNames ? ` with Add-ons: ${addOnNames}` : "";
    const msg = `Hi Keshav, I ran the interactive Web Cost Estimator and would like to build a site! 
Selected Plan: ${plan.name} (${pagesTotal} pages total)${addOnsText}. 
Projected Budget Estimate: ₹${totalPrice.toLocaleString("en-IN")}. Please contact me to schedule a discovery call.`;

    let budgetRange = "25-50k";
    if (totalPrice < 10000) budgetRange = "25k-under"; // Handled client-side
    if (totalPrice >= 10000 && totalPrice < 20000) budgetRange = "25-50k"; 
    if (totalPrice >= 20000 && totalPrice < 50000) budgetRange = "50-100k";
    if (totalPrice >= 50000) budgetRange = "1-2L";

    return `/contact?projectType=${selectedPlan}&budget=${budgetRange}&message=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left Options Panel */}
        <div className="space-y-8">
          
          {/* Step 1: Select Plan */}
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
                  01
                </span>
                Choose Core Foundation Package
              </h3>
              
              <div className="grid gap-3 sm:grid-cols-3">
                {(Object.keys(plans) as PlanKey[]).map((key) => {
                  const plan = plans[key];
                  const isSelected = selectedPlan === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedPlan(key);
                        setExtraPages(0);
                      }}
                      className={`flex flex-col text-left rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? `${planColors[key].border} ${planColors[key].bg} shadow-sm`
                          : `border-white/5 bg-slate-950/40 hover:border-cyan-500/20 hover:bg-slate-900/40 ${planColors[key].hover}`
                      }`}
                    >
                      <span className="font-display text-sm font-semibold text-white">
                        {plan.name}
                      </span>
                      <span className={`mt-2 font-display text-2xl font-bold transition-colors ${isSelected ? planColors[key].text : "text-slate-400"}`}>
                        ₹{plan.basePrice.toLocaleString("en-IN")}
                      </span>
                      <span className="mt-1 text-xs text-slate-400">
                        {plan.basePages} {plan.basePages === 1 ? "page" : "pages"} included
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Plan Details */}
              <div className="mt-6 border-t border-white/5 pt-5">
                <p className="text-sm text-slate-350 leading-relaxed mb-4">
                  {plans[selectedPlan].description}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {plans[selectedPlan].features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-350">
                      <Check className={`h-3.5 w-3.5 flex-shrink-0 ${planColors[selectedPlan].text}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Step 2: Page Customization */}
           <Reveal delay={0.05}>
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center mb-4">
                <h3 className="font-display text-lg font-semibold text-white flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-400">
                    02
                  </span>
                  Add Extra Pages
                </h3>
                <span className="text-xs text-slate-400 bg-slate-950 border border-white/10 rounded-full px-3 py-1 font-semibold">
                  ₹1,500 per additional page
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-5">
                  <div className="flex-1">
                    <p className="text-sm text-white font-semibold">
                      Total Project Pages: {plans[selectedPlan].basePages + extraPages}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {plans[selectedPlan].basePages} base pages + {extraPages} custom subpages
                    </p>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <button
                      onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                      disabled={extraPages === 0}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-slate-400 transition hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/40 disabled:opacity-30 font-semibold text-lg cursor-pointer shadow-sm"
                      aria-label="Decrease extra pages"
                    >
                      -
                    </button>
                    <span className="font-display text-lg font-semibold text-white min-w-8 text-center">
                      {extraPages}
                    </span>
                    <button
                      onClick={() => setExtraPages(Math.min(20, extraPages + 1))}
                      disabled={extraPages >= 20}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-slate-400 transition hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/40 font-semibold text-lg cursor-pointer shadow-sm"
                      aria-label="Increase extra pages"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Cybernetic Custom Range Slider */}
                <div className="relative pt-2">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={extraPages}
                    onChange={(e) => setExtraPages(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-slate-900 border border-white/10 accent-cyan-400 outline-none"
                    style={{
                      background: `linear-gradient(to right, #40e8ff 0%, #40e8ff ${(extraPages / 20) * 100}%, #0a0e16 ${(extraPages / 20) * 100}%, #0a0e16 100%)`
                    }}
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                    <span>MIN (0)</span>
                    <span>10 PAGES</span>
                    <span>MAX (20)</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Step 3: Add-on Powerups */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400">
                  03
                </span>
                Enhance with Power-up Add-ons
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {addOnsList.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex text-left rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                        isChecked
                          ? "border-cyan-500/60 bg-cyan-500/10 shadow-sm"
                          : "border-white/5 bg-slate-950/40 hover:border-cyan-500/20 hover:bg-slate-950/50"
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-950">
                          {isChecked && <div className="h-2 w-2 rounded-full bg-cyan-400 animate-scale" />}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-white">{addon.name}</p>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">{addon.description}</p>
                          <p className="text-xs font-semibold text-cyan-400 mt-2">
                            +₹{addon.price.toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

        </div>

        {/* Right Summary Panel */}
        <Reveal delay={0.15}>
          <div className="relative overflow-visible">
            {/* Ambient Aura behind estimated card */}
            <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl blur-3xl scale-95 pointer-events-none" />
            
            <GlowBorder borderRadius={16} className="sticky top-24">
              <TiltCard className="glass rounded-2xl p-6 border border-white/5 bg-slate-950/70 shadow-xl overflow-visible">
                {/* Visual glow tracer colored line top accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 rounded-t-2xl" />
                
                <div className="border-b border-white/10 pb-6 text-center pt-2" style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
                  <span className="flex mx-auto h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 mb-4">
                    <Sparkles className="h-5 w-5 animate-pulse" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-400 font-bold">Project Estimate</p>
                  <h2 className="mt-3 font-display text-4xl font-extrabold text-white">
                    ₹<AnimatedPrice value={totalPrice} />
                  </h2>
                  <p className="mt-2 text-xs text-slate-400">All prices exclusive of 18% GST</p>
                </div>

                <div className="py-6 space-y-4" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Core Package</span>
                    <span className={`font-semibold ${planColors[selectedPlan].text}`}>{plans[selectedPlan].name}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 font-medium">Pages Count</span>
                    <span className="font-semibold text-white">
                      {plans[selectedPlan].basePages + extraPages} Pages
                    </span>
                  </div>
                  
                  {selectedAddOns.length > 0 && (
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold">Selected Add-ons</p>
                      <div className="space-y-2">
                        {selectedAddOns.map((id) => {
                          const addon = addOnsList.find((a) => a.id === id);
                          return addon ? (
                            <div key={id} className="flex justify-between items-center text-xs">
                              <span className="text-slate-350 truncate max-w-[200px]">{addon.name}</span>
                              <span className="font-semibold text-cyan-400">
                                +₹{addon.price.toLocaleString("en-IN")}
                              </span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  {/* Visual Project Scope & Pipeline Density Index */}
                  <div className="border-t border-white/10 pt-4" style={{ transform: "translateZ(35px)" }}>
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-slate-400 font-semibold uppercase tracking-wider">Architecture Scope Weight</span>
                      <span className="text-cyan-400 font-mono font-bold">
                        {Math.round(((plans[selectedPlan].basePages + extraPages + selectedAddOns.length * 3) / 36) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 rounded-full"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${Math.min(100, Math.round(((plans[selectedPlan].basePages + extraPages + selectedAddOns.length * 3) / 36) * 100))}%`
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 15 }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] text-slate-500 mt-1.5 font-mono">
                      <span>MICRO-SITE</span>
                      <span>STANDARD APP</span>
                      <span>ENTERPRISE PLATFORM</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4" style={{ transform: "translateZ(30px)" }}>
                    <div className="rounded-2xl bg-slate-950/40 border border-white/5 p-4">
                      <div className="flex gap-3">
                        <TrendingUp className="h-5 w-5 text-cyan-400 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                            Consultant Projected ROI
                          </p>
                          <p className="text-sm font-bold text-white mt-1">
                            {projectedValue}
                          </p>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            Estimated walk-in / enquiry increase on mobile networks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-4" style={{ transform: "translateZ(40px)" }}>
                    <div className="flex gap-3 items-center">
                      <Zap className="h-5 w-5 text-cyan-400 shrink-0" />
                      <div className="text-xs">
                        <p className="text-slate-400">Estimated Delivery Timeline</p>
                        <p className="font-semibold text-white mt-1">
                          {plans[selectedPlan].timelineDays + (extraPages > 0 ? Math.ceil(extraPages / 2) : 0)} Days
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-4" style={{ transform: "translateZ(50px)" }}>
                  <Link
                    href={getHandoffUrl()}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 text-sm font-bold text-black transition hover:bg-cyan-300 shadow-md hover:shadow-cyan-500/20 cursor-pointer"
                  >
                    Lock In This Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* FLOATING 3D CORES ON ROTATING PERSPECTIVE */}
                <div 
                  className="absolute -right-8 top-32 glass rounded-2xl p-3 shadow-2xl border border-cyan-500/30 w-36 pointer-events-none"
                  style={{ transform: "translateZ(65px)", transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-455 animate-ping" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-455">ROI Boost +150%</span>
                  </div>
                </div>

                <div 
                  className="absolute -left-10 bottom-24 glass rounded-2xl p-3 shadow-2xl border border-white/10 w-36 pointer-events-none"
                  style={{ transform: "translateZ(85px)", transformStyle: "preserve-3d" }}
                >
                  <p className="text-[8px] uppercase font-bold tracking-wider text-slate-400">Fast Delivery</p>
                  <p className="text-[10px] font-bold text-white mt-0.5">SLA Guaranteed</p>
                </div>
              </TiltCard>
            </GlowBorder>

            <p className="text-center text-[10px] text-slate-400 mt-3 leading-relaxed">
              Clicking lock-in transfers your choices directly to our contact planner to initiate priority discovery.
            </p>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
