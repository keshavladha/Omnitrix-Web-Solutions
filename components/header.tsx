"use client";
import { mainNavItems, resourceDropdownItems } from "@/lib/data";
import { 
  Aperture, 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  Layers, 
  HelpCircle, 
  Users, 
  ArrowRight,
  Wallet
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

// Helper to render dynamic icons by their string name
function DropdownIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "Layers":
      return <Layers className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "HelpCircle":
      return <HelpCircle className={className} />;
    case "Users":
      return <Users className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileResourcesOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150); // slight delay to prevent sudden disappearance
  };

  // Check if any dropdown item is active
  const isResourceActive = resourceDropdownItems.some(
    (item) => pathname === item.href
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.15)] transition-all duration-300">
      <nav className="container flex h-16 items-center justify-between">
        
        {/* Futuristic Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Omnitrix Web Solutions home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-950/5 shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-cyan-500/10 opacity-40 animate-pulse" />
            <Aperture className="h-4.5 w-4.5 text-cyan-400 group-hover:rotate-90 transition-transform duration-500" aria-hidden />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-white flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
            Omnitrix
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-450 inline-block animate-ping" />
          </span>
        </Link>

        {/* Simplified Premium Desktop Navigation Pill */}
        <div className="hidden items-center gap-1 xl:flex bg-black/60 border border-white/10 rounded-full px-4 py-1 shadow-2xl backdrop-blur-md">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-bold uppercase tracking-wider rounded-full px-4.5 py-2.5 transition-all duration-300 relative flex items-center gap-1 ${
                  isActive 
                    ? "text-cyan-400 bg-white/10 shadow-md border border-white/5 font-extrabold" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label === "Pay Online" && <Wallet className="h-3.5 w-3.5 text-cyan-400" />}
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-transparent via-cyan-455 to-transparent shadow-[0_0_14px_rgba(26,219,245,0.85)]" />
                )}
              </Link>
            );
          })}

          {/* Resources Hover Dropdown Pill */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-[11px] font-bold uppercase tracking-wider rounded-full px-4.5 py-2.5 transition-all duration-300 flex items-center gap-1.5 cursor-pointer outline-none relative ${
                isResourceActive
                  ? "text-cyan-400 bg-white/10 shadow-md border border-white/5 font-extrabold"
                  : dropdownOpen
                  ? "text-white bg-white/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Resources
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-350 ${dropdownOpen ? "rotate-180 text-cyan-450" : "text-slate-400"}`} />
              {isResourceActive && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-transparent via-cyan-455 to-transparent shadow-[0_0_14px_rgba(26,219,245,0.85)]" />
              )}
            </button>

            {/* Glowing Dropdown Panel */}
            {dropdownOpen && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-85 rounded-2xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-cyan-500/[0.02] to-transparent pointer-events-none" />
                
                {resourceDropdownItems.map((subItem) => {
                  const isSubActive = pathname === subItem.href;
                  return (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`group/item flex items-start gap-3 rounded-xl p-3 transition-all duration-200 ${
                        isSubActive
                          ? "bg-white/5 border border-white/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)]"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isSubActive 
                          ? "bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-sm" 
                          : "bg-white/5 border-white/5 text-slate-400 group-hover/item:bg-cyan-500 group-hover/item:border-cyan-400 group-hover/item:text-black group-hover/item:scale-105"
                      }`}>
                        <DropdownIcon name={subItem.iconName} className="h-4.5 w-4.5" />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[13px] font-bold tracking-tight transition-colors ${
                            isSubActive ? "text-cyan-450" : "text-slate-200 group-hover/item:text-cyan-400"
                          }`}>
                            {subItem.label}
                          </span>
                          <ArrowRight className="h-3 w-3 text-cyan-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                        </div>
                        <p className="mt-0.5 text-xs text-slate-400 leading-normal">
                          {subItem.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons & Hamburger Menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5.5 py-2.5 text-xs font-bold uppercase tracking-wider text-cyan-400 transition-all duration-300 hover:bg-cyan-600 hover:text-black hover:shadow-[0_4px_12px_rgba(64,232,255,0.15)] sm:block cursor-pointer"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white xl:hidden cursor-pointer transition-colors shadow-sm"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/5 bg-black/95 backdrop-blur-xl xl:hidden animate-in fade-in duration-200">
          <div className="container max-h-[calc(100vh-4rem)] overflow-y-auto py-6">
            <div className="flex flex-col gap-2.5">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 rounded-xl px-4.5 py-3.5 text-[13px] font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "bg-white/5 text-cyan-400 border border-white/10 font-extrabold shadow-sm"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label === "Pay Online" && <Wallet className="h-4.5 w-4.5 text-cyan-455" />}
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile Resources Collapsible Section */}
              <div className="border-t border-white/5 pt-3.5 mt-1">
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex w-full items-center justify-between px-4.5 py-3 text-[13px] font-bold uppercase tracking-wider text-slate-400 hover:text-white cursor-pointer"
                >
                  Resource Hub
                  <ChevronDown className={`h-4.5 w-4.5 transition-transform duration-300 ${mobileResourcesOpen ? "rotate-180 text-cyan-400" : ""}`} />
                </button>
                
                {mobileResourcesOpen && (
                  <div className="mt-2 ml-3 grid gap-2.5 border-l-2 border-white/5 pl-4 animate-in slide-in-from-top-1 duration-200">
                    {resourceDropdownItems.map((subItem) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                            isSubActive
                              ? "text-cyan-400 font-semibold"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          <DropdownIcon name={subItem.iconName} className={`h-4 w-4 ${isSubActive ? "text-cyan-455" : "text-slate-400"}`} />
                          <span>{subItem.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5.5 py-3.5 text-center text-[12px] font-bold uppercase tracking-wider text-cyan-400 transition hover:bg-cyan-600 hover:text-black"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
