"use client";

import { mainNavItems } from "@/lib/data";
import { Aperture, Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-xl shadow-sm">
      <nav className="container flex h-16 items-center justify-between">
        
        {/* Google Workspace-Style Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Omnitrix Web Solutions home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/8 shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Dynamic four-colored Google dot conceptual logo inside */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-red-500/5 to-green-500/10 opacity-40" />
            <Aperture className="h-4 w-4 text-blue-600 group-hover:rotate-45 transition-transform duration-300" aria-hidden />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-slate-800 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
            Omnitrix
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 inline-block animate-pulse" />
          </span>
        </Link>

        {/* Desktop Navigation with Google Material Pill Aesthetics */}
        <div className="hidden items-center gap-2 xl:flex bg-slate-100/80 border border-slate-200/60 rounded-full px-5 py-1.5">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-wider text-slate-600 rounded-full px-4 py-2 transition-all duration-200 hover:bg-slate-200/60 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Material Action Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-md sm:block"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-800 xl:hidden cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl xl:hidden">
          <div className="container max-h-[calc(100vh-4rem)] overflow-y-auto py-4">
            <div className="flex flex-col gap-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
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
