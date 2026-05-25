"use client";

import { useState, useEffect } from "react";
import { Reveal, TiltCard } from "@/components/motion";
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

export default function CostCalculator() {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("business");
  const [extraPages, setExtraPages] = useState<number>(0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["seo"]);
  const [totalPrice, setTotalPrice] = useState<number>(16500);
  const [projectedValue, setProjectedValue] = useState<string>("+35% inquiries");

  const planColors: Record<PlanKey, { text: string; border: string; bg: string; dot: string; hover: string }> = {
    basic: {
      text: "text-emerald-400 font-semibold",
      border: "border-emerald-500/40",
      bg: "bg-emerald-500/10",
      dot: "bg-emerald-400",
      hover: "hover:border-emerald-500/50 hover:bg-emerald-500/5"
    },
    business: {
      text: "text-teal-400 font-semibold",
      border: "border-teal-500/40",
      bg: "bg-teal-500/10",
      dot: "bg-teal-400",
      hover: "hover:border-teal-500/50 hover:bg-teal-500/5"
    },
    premium: {
      text: "text-cyan-400 font-semibold",
      border: "border-cyan-500/40",
      bg: "bg-cyan-500/10",
      dot: "bg-cyan-400",
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
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
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
                          : `border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-100/60 ${planColors[key].hover}`
                      }`}
                    >
                      <span className="font-display text-sm font-semibold text-slate-800">
                        {plan.name}
                      </span>
                      <span className={`mt-2 font-display text-2xl font-bold transition-colors ${isSelected ? planColors[key].text : "text-slate-500"}`}>
                        ₹{plan.basePrice.toLocaleString("en-IN")}
                      </span>
                      <span className="mt-1 text-xs text-slate-500">
                        {plan.basePages} {plan.basePages === 1 ? "page" : "pages"} included
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Plan Details */}
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {plans[selectedPlan].description}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {plans[selectedPlan].features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-600">
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
                <h3 className="font-display text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-400">
                    02
                  </span>
                  Add Extra Pages
                </h3>
                <span className="text-xs text-slate-400 bg-slate-900 border border-white/10 rounded-full px-3 py-1 font-semibold">
                  ₹1,500 per additional page
                </span>
              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="flex-1">
                  <p className="text-sm text-white font-semibold">
                    Total Project Pages: {plans[selectedPlan].basePages + extraPages}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {plans[selectedPlan].basePages} base pages + {extraPages} custom subpages
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setExtraPages(Math.max(0, extraPages - 1))}
                    disabled={extraPages === 0}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300 transition hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/40 disabled:opacity-30 font-semibold text-lg cursor-pointer shadow-sm"
                  >
                    -
                  </button>
                  <span className="font-display text-lg font-semibold text-white min-w-8 text-center">
                    {extraPages}
                  </span>
                  <button
                    onClick={() => setExtraPages(Math.min(20, extraPages + 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300 transition hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/40 font-semibold text-lg cursor-pointer shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Step 3: Add-on Powerups */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
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
                          ? "border-emerald-500/60 bg-emerald-500/10 shadow-sm"
                          : "border-white/5 bg-slate-950/40 hover:border-emerald-500/20 hover:bg-slate-900/50"
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-950">
                          {isChecked && <div className="h-2 w-2 rounded-full bg-emerald-400 animate-scale" />}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-slate-800">{addon.name}</p>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{addon.description}</p>
                          <p className="text-xs font-semibold text-amber-600 mt-2">
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
          <TiltCard className="glass sticky top-24 rounded-2xl p-6 border-slate-200 shadow-md overflow-hidden">
            {/* Google workspace colored line top accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
            
            <div className="border-b border-white/10 pb-6 text-center pt-2">
              <span className="flex mx-auto h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 mb-4">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </span>
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-400 font-bold">Project Estimate</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-slate-900">
                ₹{totalPrice.toLocaleString("en-IN")}
              </h2>
              <p className="mt-2 text-xs text-slate-500">All prices exclusive of 18% GST</p>
            </div>

            <div className="py-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Core Package</span>
                <span className={`font-semibold ${planColors[selectedPlan].text}`}>{plans[selectedPlan].name}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Pages Count</span>
                <span className="font-semibold text-slate-800">
                  {plans[selectedPlan].basePages + extraPages} Pages
                </span>
              </div>
              
              {selectedAddOns.length > 0 && (
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">Selected Add-ons</p>
                  <div className="space-y-2">
                    {selectedAddOns.map((id) => {
                      const addon = addOnsList.find((a) => a.id === id);
                      return addon ? (
                        <div key={id} className="flex justify-between items-center text-xs">
                          <span className="text-slate-600 truncate max-w-[200px]">{addon.name}</span>
                          <span className="font-semibold text-emerald-400">
                            +₹{addon.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              <div className="border-t border-white/10 pt-4">
                <div className="rounded-2xl bg-slate-950/40 border border-white/5 p-4">
                  <div className="flex gap-3">
                    <TrendingUp className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Consultant Projected ROI
                      </p>
                      <p className="text-sm font-bold text-white mt-1">
                        {projectedValue}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        Estimated walk-in / enquiry increase on mobile networks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-4">
                <div className="flex gap-3 items-center">
                  <Zap className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div className="text-xs">
                    <p className="text-slate-500">Estimated Delivery Timeline</p>
                    <p className="font-semibold text-white mt-1">
                      {plans[selectedPlan].timelineDays + (extraPages > 0 ? Math.ceil(extraPages / 2) : 0)} Days
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-4">
              <Link
                href={getHandoffUrl()}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 text-sm font-bold text-black transition hover:bg-emerald-400 shadow-md hover:shadow-emerald-500/20 cursor-pointer"
              >
                Lock In This Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-center text-[10px] text-slate-500 mt-3 leading-relaxed">
                Clicking lock-in transfers your choices directly to our contact planner to initiate priority discovery.
              </p>
            </div>

          </TiltCard>
        </Reveal>

      </div>
    </div>
  );
}
