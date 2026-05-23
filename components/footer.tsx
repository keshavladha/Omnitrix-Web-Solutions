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
    { label: "Startup Landing Pages", href: "/services" },
    { label: "E-Commerce Stores", href: "/services" },
    { label: "Web Applications", href: "/services" },
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
  { label: "WhatsApp chat", href: "https://api.whatsapp.com/send?phone=917027340360&text=Hi,%20I%20want%20to%20start%20a%20website%20project%20with%20Omnitrix.", icon: MessageSquare },
  { label: "github.com/omnitrix", href: "https://github.com", icon: Github },
  { label: "linkedin.com/in/omnitrix", href: "https://linkedin.com", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/50">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/8 shadow-sm">
                <Aperture className="h-5 w-5 text-blue-600" aria-hidden />
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-slate-800">
                Omnitrix
              </span>
            </Link>
            <p className="max-w-xs text-sm text-slate-600 leading-relaxed">
              Premium websites, branding systems, and full-stack digital solutions for businesses that want to grow with a serious online presence.
            </p>
            <div className="flex gap-3">
              {socials.slice(0, 4).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-600 transition hover:bg-slate-200/60 hover:text-slate-900"
                >
                  <social.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-800">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 transition hover:text-slate-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-800">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 transition hover:text-slate-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-800">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 transition hover:text-slate-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-slate-800">Connect</h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-950"
                  >
                    <item.icon className="h-4 w-4 text-slate-500" />
                    <span className="truncate">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200/80 bg-slate-100/50">
        <div className="container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © 2026 Omnitrix Web Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="transition hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-slate-900">
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-blue-600 font-semibold transition hover:text-blue-700"
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
