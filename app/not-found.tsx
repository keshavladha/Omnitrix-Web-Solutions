import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MagneticButton, Reveal } from "@/components/motion";
import { Home, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist. Let's get you back on track.",
};

export default function NotFoundPage() {
  const suggestedLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/#services", icon: Search },
    { label: "Case Studies", href: "/case-studies", icon: Search },
    { label: "Pricing", href: "/pricing", icon: Search },
  ];

  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container flex flex-col items-center justify-center py-20 text-center lg:py-32">
          <Reveal>
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
              <span className="font-display text-5xl font-bold text-cyan-200">404</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Page Not Found
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 max-w-lg text-lg text-slate-300">
              Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </MagneticButton>
              <MagneticButton href="/#contact" variant="secondary">
                Contact Support
              </MagneticButton>
            </div>
          </Reveal>

          {/* Suggested Links */}
          <Reveal delay={0.4}>
            <div className="mt-16">
              <p className="mb-6 text-sm text-slate-400">Or try these popular pages:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {suggestedLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-cyan-200/30 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Decorative Grid */}
          <Reveal delay={0.5}>
            <div className="mt-20 grid grid-cols-3 gap-4 opacity-30">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-cyan-200"
                  style={{ opacity: Math.random() * 0.5 + 0.2 }}
                />
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
