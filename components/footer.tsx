import { mainNavItems, socials } from "@/lib/data";
import { Aperture, ArrowUpRight, Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Business Websites", href: "/services" },
    { label: "WhatsApp Integration", href: "/services" },
    { label: "SEO Services", href: "/services" },
    { label: "Hosting & Support", href: "/services" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Tech Stack", href: "/#stack" },
  ],
};

const contactInfo = [
  { label: "keshavladha24@gmail.com", href: "mailto:keshavladha24@gmail.com", icon: Mail },
  { label: "+91 70273 40360", href: "tel:+917027340360", icon: Phone },
  { label: "WhatsApp chat", href: "https://api.whatsapp.com/send?phone=+917027340360&text=Hi,%20I%20need%20a%20business%20website%20quote.", icon: MessageSquare },
  { label: "github.com/omnitrix", href: "https://github.com", icon: Github },
  { label: "linkedin.com/in/omnitrix", href: "https://linkedin.com", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                <Aperture className="h-5 w-5 text-cyan-100" aria-hidden />
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white">
                Omnitrix
              </span>
            </Link>
            <p className="max-w-xs text-sm text-slate-400 leading-relaxed">
              Building business websites, local marketing, and WhatsApp-friendly growth systems for shops, clinics, and service brands.
            </p>
            <div className="flex gap-3">
              {socials.slice(0, 4).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-200/30 hover:text-white"
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
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
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
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
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
                  <Link href={link.href} className="text-sm text-slate-400 transition hover:text-white">
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
                    className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="truncate">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © 2026 Omnitrix Web Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-cyan-200 transition hover:text-white"
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
