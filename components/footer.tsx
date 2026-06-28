import { detailedServices, socials } from "@/lib/data";
import { Aperture, ArrowUpRight, Award, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Custom Websites", href: "/services" },
    { label: "Local SEO & GMB", href: "/services" },
    { label: "E-commerce Solutions", href: "/services" },
    { label: "Hosting & Domains", href: "/services" },
  ],
  resources: [
    { label: "Interactive Calculator", href: "/pricing" },
    { label: "Pricing Packages", href: "/pricing" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const contactInfo = [
  { icon: Phone, label: "+91-70273-40360", href: "tel:+91-70273-40360" },
  { icon: Mail, label: "keshavladha24@gmail.com", href: "mailto:keshavladha24@gmail.com" },
  { icon: MapPin, label: "Ellenabad, Sirsa, HR", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950/20 pt-16">
      <div className="container pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-950/10 shadow-sm">
                <Aperture className="h-5 w-5 text-blue-400" aria-hidden />
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
                Omnitrix
              </span>
            </Link>
            <p className="max-w-xs text-sm text-slate-400 leading-relaxed">
              Premium websites, branding systems, and full-stack digital solutions for businesses that want to grow with a serious online presence.
            </p>
            <div className="flex gap-3">
              {socials.slice(0, 4).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-950/40 text-slate-400 transition hover:bg-slate-900/60 hover:text-blue-400"
                >
                  <social.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Connect</h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    <item.icon className="h-4 w-4 text-slate-400" />
                    <span className="truncate">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950/40">
        <div className="container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © 2026 Omnitrix Web Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-blue-400 font-semibold transition hover:text-blue-300"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
