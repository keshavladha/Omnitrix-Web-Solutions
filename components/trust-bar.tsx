import { Briefcase, Code2, Smartphone, Star, Zap, Sparkles, ShieldCheck, Database, Award } from "lucide-react";

export function TrustBar() {
  const items = [
    { text: "Fast Load speed (0.8s)", icon: Zap, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
    { text: "Next.js 16 Production Ready", icon: Code2, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { text: "99% Lighthouse Speed", icon: Sparkles, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { text: "Secure Payment Gateway", icon: ShieldCheck, color: "text-teal-400 bg-teal-500/10 border-teal-500/20" },
    { text: "WhatsApp Order Engine", icon: Smartphone, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
    { text: "MongoDB Cloud Architecture", icon: Database, color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
    { text: "Local Sirsa & Haryana Support", icon: Award, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
    { text: "Interactive Modern UI Layouts", icon: Briefcase, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
  ];

  // Duplicate items array to make the infinite scrolling loop absolutely seamless!
  const doubledItems = [...items, ...items, ...items];

  return (
    <div className="border-y border-white/5 bg-slate-950/20 py-5 overflow-hidden relative">
      {/* Sleek shadow overlays to hide entry and exit edges - mapped to black canvas background */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030303] via-[#030303]/80 to-transparent z-10 pointer-events-none" />
      
      <div className="w-full flex items-center">
        <div className="animate-marquee flex items-center gap-4 py-1">
          {doubledItems.map((item, idx) => (
            <div
              key={idx}
              className={`inline-flex items-center gap-2.5 rounded-full border px-5 py-3 text-[11px] font-bold shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 shrink-0 ${item.color}`}
            >
              <item.icon className="h-4 w-4 animate-pulse" aria-hidden />
              <span className="tracking-wider uppercase text-slate-200">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustBar;
