import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/motion";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for working with Omnitrix Web Solutions.",
};

export default function TermsPage() {
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
                  <FileText className="h-6 w-6 text-cyan-100" />
                </div>
                <div>
                  <h1 className="font-display text-3xl font-semibold text-white">Terms of Service</h1>
                  <p className="text-sm text-slate-400">Last updated: January 2026</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 lg:p-10">
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300">
                    These Terms of Service govern your use of Omnitrix Web Solutions' services. By engaging our services, you agree to these terms.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">1. Services</h2>
                  <p className="text-slate-400">
                    Omnitrix Web Solutions provides web development, design, and related digital services. The specific deliverables, timeline, and pricing for each project will be outlined in a separate proposal or statement of work.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">2. Project Engagement</h2>
                  <p className="text-slate-400">
                    <strong className="text-slate-300">Proposal:</strong> Work begins after a signed proposal and initial payment.
                  </p>
                  <p className="text-slate-400 mt-2">
                    <strong className="text-slate-300">Payment:</strong> Our standard terms are 50% upfront and 50% upon completion. We accept UPI, NEFT/IMPS bank transfers, and Razorpay payments. All prices are exclusive of 18% GST.
                  </p>
                  <p className="text-slate-400 mt-2">
                    <strong className="text-slate-300">Timeline:</strong> Project timelines are estimates. Delays caused by client feedback, content delivery, or scope changes may extend deadlines.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">3. Intellectual Property</h2>
                  <p className="text-slate-400">
                    Upon full payment, you own all rights to the final deliverables we create specifically for your project. This includes:
                  </p>
                  <ul className="list-disc pl-5 text-slate-400 space-y-2 mt-2">
                    <li>Custom code written for your project</li>
                    <li>Design files and assets created for you</li>
                    <li>Documentation and content</li>
                  </ul>
                  <p className="text-slate-400 mt-4">
                    We retain rights to: reusable code libraries, frameworks, and our proprietary tools used in development.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">4. Client Responsibilities</h2>
                  <p className="text-slate-400">
                    You agree to:
                  </p>
                  <ul className="list-disc pl-5 text-slate-400 space-y-2 mt-2">
                    <li>Provide timely feedback and approvals</li>
                    <li>Supply necessary content, images, and assets</li>
                    <li>Provide access to required accounts and platforms</li>
                    <li>Review deliverables within agreed timeframes</li>
                  </ul>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">5. Revisions</h2>
                  <p className="text-slate-400">
                    Each service tier includes a specified number of revision rounds. Additional revisions beyond the included amount may be billed at our standard hourly rate.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">6. Confidentiality</h2>
                  <p className="text-slate-400">
                    We treat all client information as confidential. We may sign NDA agreements upon request. We may use completed projects in our portfolio unless otherwise agreed.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">7. Limitation of Liability</h2>
                  <p className="text-slate-400">
                    Omnitrix Web Solutions' liability is limited to the amount paid for the specific project. We are not liable for indirect, consequential, or incidental damages.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">8. Termination</h2>
                  <p className="text-slate-400">
                    Either party may terminate with 30 days written notice. Completed work will be delivered upon payment for services rendered up to the termination date.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">9. Governing Law & Taxes</h2>
                  <p className="text-slate-400">
                    These terms are governed by the laws of India. Any disputes will be resolved in the courts of Hisar, Haryana. All prices quoted are exclusive of applicable GST (currently 18%). GST invoices will be provided for all payments.
                  </p>

                  <h2 className="font-display text-xl font-semibold text-white mt-8 mb-4">10. Contact</h2>
                  <p className="text-slate-400">
                    Questions about these terms? Contact us at keshavladha24@gmail.com
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
