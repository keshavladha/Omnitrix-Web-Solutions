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
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

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
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    }, 150);
  };

  const isResourceActive = resourceDropdownItems.some(
    (item) => pathname === item.href
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#050608]/80 backdrop-blur-xl transition-all duration-300">
      <nav className="container flex h-16 items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Omnitrix Web Solutions home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-[#0a0d12] shadow-sm transition-colors duration-300 group-hover:border-blue-500/30 group-hover:bg-[#12161f]">
            <Aperture className="h-4.5 w-4.5 text-blue-400 transition-transform duration-500 group-hover:rotate-90" aria-hidden />
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.1em] text-white transition-colors group-hover:text-blue-400">
            Omnitrix
          </span>
        </Link>

        {/* Premium Desktop Navigation */}
        <div className="hidden items-center xl:flex">
          <div className="flex items-center gap-1 bg-[#0a0d12]/50 border border-white/5 rounded-full px-2 py-1.5 shadow-sm backdrop-blur-md">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-semibold tracking-wide rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? "text-white bg-white/10 shadow-sm" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label === "Pay Online" && <Wallet className="h-3.5 w-3.5" />}
                  {item.label}
                </Link>
              );
            })}

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-xs font-semibold tracking-wide rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-1.5 cursor-pointer outline-none ${
                  isResourceActive
                    ? "text-white bg-white/10 shadow-sm"
                    : dropdownOpen
                    ? "text-white bg-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Resources
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 rounded-2xl border border-white/10 bg-[#0a0d12] shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {resourceDropdownItems.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`group/item flex items-start gap-3 rounded-xl p-3 transition-all duration-200 ${
                          isSubActive
                            ? "bg-white/5"
                            : "hover:bg-white/5"
                        }`}
                      >
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-200 ${
                          isSubActive 
                            ? "border-blue-500/20 bg-blue-500/10 text-blue-400" 
                            : "border-white/5 bg-[#12161f] text-slate-400 group-hover/item:border-blue-500/20 group-hover/item:bg-blue-500/10 group-hover/item:text-blue-400"
                        }`}>
                          <DropdownIcon name={subItem.iconName} className="h-4.5 w-4.5" />
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-sm font-semibold transition-colors ${
                              isSubActive ? "text-white" : "text-slate-300 group-hover/item:text-white"
                            }`}>
                              {subItem.label}
                            </span>
                            <ArrowRight className="h-3 w-3 text-blue-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                          </div>
                          <p className="mt-1 text-xs text-slate-400 leading-relaxed">
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
        </div>

        {/* Action Buttons & Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-bold text-[#050608] shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] sm:flex"
          >
            Start Project
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#0a0d12] text-slate-400 hover:bg-[#12161f] hover:text-white xl:hidden transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/5 bg-[#050608]/95 backdrop-blur-xl xl:hidden animate-in fade-in duration-200">
          <div className="container max-h-[calc(100vh-4rem)] overflow-y-auto py-6">
            <div className="flex flex-col gap-2">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label === "Pay Online" && <Wallet className="h-4.5 w-4.5 text-slate-500" />}
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-2 h-px w-full bg-white/5" />

              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold tracking-wide text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
              >
                Resource Hub
                <ChevronDown className={`h-4.5 w-4.5 transition-transform duration-300 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {mobileResourcesOpen && (
                <div className="mb-2 grid gap-1 border-l-2 border-white/10 ml-6 pl-4">
                  {resourceDropdownItems.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          isSubActive
                            ? "text-white bg-white/5"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <DropdownIcon name={subItem.iconName} className={`h-4 w-4 ${isSubActive ? "text-blue-400" : "text-slate-500"}`} />
                        <span>{subItem.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 rounded-full bg-white px-6 py-4 text-center text-sm font-bold text-[#050608] transition-all hover:bg-slate-200"
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
