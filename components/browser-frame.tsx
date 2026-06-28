import type { ReactNode } from "react";

export function BrowserFrame({
  children,
  url,
}: {
  children: ReactNode;
  url?: string;
}) {
  return (
    <div 
      className="group relative flex h-full flex-col overflow-hidden rounded-xl shadow-2xl transition-all duration-700 hover:scale-[1.02]"
      style={{
        // Machined Aluminum Base (Dark Mode)
        background: "linear-gradient(180deg, #2A2D34 0%, #1A1C23 100%)",
        // Simulate chamfered metal edge highlights
        boxShadow: "0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2), 0 20px 40px -10px rgba(0,0,0,0.5)",
      }}
    >
      {/* Title Bar (Brushed Metal) */}
      <div 
        className="flex h-11 w-full items-center justify-between px-4"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
          borderBottom: "1px solid rgba(0,0,0,0.4)",
          boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.05)"
        }}
      >
        {/* Traffic Lights */}
        <div className="flex gap-2">
          {/* Subtle inset shadows on the dots to make them feel drilled into the metal */}
          <div className="h-2.5 w-2.5 rounded-full bg-slate-600 transition-colors duration-300 group-hover:bg-[#ff5f56] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-600 transition-colors duration-300 group-hover:bg-[#ffbd2e] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-600 transition-colors duration-300 group-hover:bg-[#27c93f] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />
        </div>

        {/* URL Bar (Etched into the metal) */}
        <div 
          className="flex h-6 flex-1 items-center justify-center mx-4 rounded-md px-3 text-[10px] text-slate-400 font-medium font-mono"
          style={{
            background: "rgba(0,0,0,0.3)",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)"
          }}
        >
          {url || "https://omnitrixwebsolutions.com"}
        </div>

        {/* Empty space for balance */}
        <div className="w-11" />
      </div>

      {/* Content Area (Glass Display) */}
      <div 
        className="relative flex-1"
        style={{
          // Deep screen background
          background: "#030406",
          // Bezel depth shadow
          boxShadow: "inset 0 4px 12px rgba(0,0,0,0.6)",
        }}
      >
        {/* Anti-glare glass reflection */}
        <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
          <div 
            className="absolute -inset-[100%] top-[-50%] -rotate-45 opacity-0 transition-opacity duration-700 group-hover:opacity-10"
            style={{
              background: "linear-gradient(90deg, transparent 40%, rgba(255,255,255,1) 50%, transparent 60%)",
            }}
          />
        </div>
        
        <div className="relative z-10 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
