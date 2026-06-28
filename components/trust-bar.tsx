import { Briefcase, Code2, Smartphone, Star, Zap, Sparkles, ShieldCheck, Database, Award } from "lucide-react";

export function TrustBar() {
  const items = [
    { text: "Fast Load speed (0.8s)", icon: Zap },
    { text: "Next.js 16 Production Ready", icon: Code2 },
    { text: "99% Lighthouse Speed", icon: Sparkles },
    { text: "Secure Payment Gateway", icon: ShieldCheck },
    { text: "WhatsApp Order Engine", icon: Smartphone },
    { text: "MongoDB Cloud Architecture", icon: Database },
    { text: "Local Sirsa & Haryana Support", icon: Award },
    { text: "Interactive Modern UI Layouts", icon: Briefcase },
  ];

  // Duplicate items array to make the infinite scrolling loop absolutely seamless!
  const doubledItems = [...items, ...items, ...items];

  return (
    <div className="border-y border-white/5 bg-slate-950/20 py-5 overflow-hidden relative">
      {/* Sleek shadow overlays to hide entry and exit edges - mapped to black canvas background */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050608] via-[#050608]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050608] via-[#050608]/80 to-transparent z-10 pointer-events-none" />
      
      <div className="w-full flex items-center">
        <div className="animate-marquee flex items-center gap-4 py-1">
          {doubledItems.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/4 px-5 py-3 text-[11px] font-bold shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 shrink-0"
            >
              <item.icon className="h-4 w-4 text-blue-400" aria-hidden />
              <span className="tracking-wider uppercase text-slate-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustBar;
