"use client";

import { mainNavItems } from "@/lib/data";
import { Aperture, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-black/45 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Omnitrix Web Solutions home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8 shadow-[0_0_24px_rgba(64,232,255,0.18)]">
            <Aperture className="h-4 w-4 text-cyan-100" aria-hidden />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Omnitrix
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full border border-cyan-200/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/10 sm:block"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/8 bg-black/90 backdrop-blur-xl lg:hidden">
          <div className="container py-4">
            <div className="flex flex-col gap-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-full border border-cyan-200/20 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/10"
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
