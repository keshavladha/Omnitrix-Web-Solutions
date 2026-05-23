import { Briefcase, Code2, Smartphone, Star, Zap } from "lucide-react";

export function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-slate-50/80 py-4">
      <div className="container flex flex-col items-start justify-between gap-4 text-sm text-slate-600 lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600 shadow-sm">
            <Zap className="h-4 w-4 text-blue-600" aria-hidden />
            Fast - SEO Optimized - Mobile First - Scalable
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-650 shadow-sm">
              <Briefcase className="h-4 w-4 text-blue-600" aria-hidden />
              30+ project systems
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-650 shadow-sm">
              <Smartphone className="h-4 w-4 text-blue-600" aria-hidden />
              Mobile First
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-655 shadow-sm">
              <Code2 className="h-4 w-4 text-blue-600" aria-hidden />
              Next.js - React - MongoDB
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Star className="h-4 w-4 text-blue-600" aria-hidden />
            Trusted by service brands and startups
          </div>
          <a href="/contact" className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 shadow-sm hover:shadow-md">
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrustBar;
