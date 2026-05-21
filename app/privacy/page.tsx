import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/motion";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "How Omnitrix Web Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28">
        <section className="container py-12">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/8">
                  <Shield className="h-6 w-6 text-cyan-100" />
                </div>
                <div>
                  <h1 className="font-display text-3xl font-semibold text-white">Privacy Policy</h1>
                  <p className="text-sm text-slate-400">Last updated: January 2026</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 lg:p-10">
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300">
                    At Omnitrix Web Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
                  <p className="text-slate-400">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-5 text-slate-400 space-y-2 mt-2">
                    <li>Fill out our contact form</li>
                    <li>Request a quote or proposal</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                  <p className="text-slate-400 mt-4">
                    This information may include your name, email address, phone number, company name, and project details.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                  <p className="text-slate-400">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-5 text-slate-400 space-y-2 mt-2">
                    <li>Respond to your inquiries and provide our services</li>
                    <li>Send you project proposals and quotes</li>
                    <li>Communicate project updates and milestones</li>
                    <li>Send occasional newsletters (with opt-out)</li>
                    <li>Improve our website and services</li>
                  </ul>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">3. Information Sharing</h2>
                  <p className="text-slate-400">
                    We do not sell, trade, or rent your personal information to third parties. We may share information with:
                  </p>
                  <ul className="list-disc pl-5 text-slate-400 space-y-2 mt-2">
                    <li>Team members directly involved in your project</li>
                    <li>Service providers who assist our operations (under confidentiality agreements)</li>
                    <li>Legal authorities when required by law</li>
                  </ul>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
                  <p className="text-slate-400">
                    We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">5. Your Rights</h2>
                  <p className="text-slate-400">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-5 text-slate-400 space-y-2 mt-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">6. Cookies</h2>
                  <p className="text-slate-400">
                    We use cookies to enhance your browsing experience. You can set your browser to refuse cookies, but some features may not function properly.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">7. Contact Us</h2>
                  <p className="text-slate-400">
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-slate-300 mt-2">
                    Email: keshavladha24@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
