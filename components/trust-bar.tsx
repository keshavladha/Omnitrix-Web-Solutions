import { Briefcase, Code2, Smartphone, Star, Zap, Sparkles, ShieldCheck, Database, Award } from "lucide-react";

export function TrustBar() {
  const items = [
    { text: "Fast Load speed (0.8s)", icon: Zap, color: "text-emerald-600 bg-emerald-50/60 border-emerald-200/80" },
    { text: "Next.js 16 Production Ready", icon: Code2, color: "text-blue-600 bg-blue-50/60 border-blue-200/80" },
    { text: "99% Lighthouse Speed", icon: Sparkles, color: "text-amber-600 bg-amber-50/60 border-amber-200/80" },
    { text: "Secure Payment Gateway", icon: ShieldCheck, color: "text-teal-600 bg-teal-50/60 border-teal-200/80" },
    { text: "WhatsApp Order Engine", icon: Smartphone, color: "text-purple-600 bg-purple-50/60 border-purple-200/80" },
    { text: "MongoDB Cloud Architecture", icon: Database, color: "text-rose-600 bg-rose-50/60 border-rose-200/80" },
    { text: "Local Sirsa & Haryana Support", icon: Award, color: "text-indigo-600 bg-indigo-50/60 border-indigo-200/80" },
    { text: "Interactive Modern UI Layouts", icon: Briefcase, color: "text-pink-600 bg-pink-50/60 border-pink-200/80" },
  ];

  // Duplicate items array to make the infinite scrolling loop absolutely seamless!
  const doubledItems = [...items, ...items, ...items];

  return (
    <div className="border-y border-slate-200/80 bg-slate-50/50 py-5 overflow-hidden relative">
      {/* Sleek shadow overlays to hide entry and exit edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      <div className="w-full flex items-center">
        <div className="animate-marquee flex items-center gap-4 py-1">
          {doubledItems.map((item, idx) => (
            <div
              key={idx}
              className={`inline-flex items-center gap-2.5 rounded-full border px-5 py-3 text-[11px] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.02)] backdrop-blur-sm transition-all duration-300 hover:scale-105 shrink-0 ${item.color}`}
            >
              <item.icon className="h-4 w-4" aria-hidden />
              <span className="tracking-wider uppercase text-slate-800">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustBar;
