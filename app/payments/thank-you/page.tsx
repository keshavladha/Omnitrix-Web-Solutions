import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Payment Successful - Omnitrix Web Solutions",
  description: "Thank you for your payment. We will start building your website immediately.",
};

const steps = [
  {
    step: "1",
    title: "We confirm your order",
    desc: "You will receive a WhatsApp or email confirmation within 1 hour.",
  },
  {
    step: "2",
    title: "Discovery call",
    desc: "We will schedule a quick call to discuss your requirements and brand preferences.",
  },
  {
    step: "3",
    title: "Design begins",
    desc: "Our team starts designing your website immediately. You will get a preview to review.",
  },
  {
    step: "4",
    title: "Launch and final payment",
    desc: "After your approval, we go live and you pay the remaining balance.",
  },
];

// Next.js 15+ requires searchParams to be awaited
export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ payment_id?: string; order_id?: string; package?: string }>;
}) {
  const params = await searchParams;
  const pkg = params.package ?? "your";
  const paymentId = params.payment_id ?? "";
  const waText = encodeURIComponent(
    `Hi, I just paid for the ${pkg} package. Payment ID: ${paymentId}`
  );
  const waHref = `https://api.whatsapp.com/send?phone=+917027340360&text=${waText}`;

  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-2xl px-4 py-12 text-center space-y-8">
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-cyan-500/10 border-4 border-cyan-500/20 flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-cyan-400" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Payment Successful!
            </h1>
            <p className="text-lg text-slate-400">
              Thank you! Your payment for the{" "}
              <span className="font-semibold text-white">{pkg} Package</span> has been received.
            </p>
          </div>

          {paymentId && (
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/40 p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                Payment Reference
              </p>
              <p className="font-mono text-sm text-slate-300 break-all">{paymentId}</p>
            </div>
          )}

          <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6 text-left shadow-sm space-y-4">
            <h2 className="font-display text-lg font-semibold text-white">What happens next?</h2>
            <div className="space-y-3">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="h-7 w-7 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 text-xs font-bold text-obsidian-lowest" style={{ color: "#02040a" }}>
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold transition-colors cursor-pointer hover:bg-cyan-400 shadow-md hover:shadow-cyan-500/20"
              style={{ color: "#02040a" }}
            >
              <MessageSquare className="h-4 w-4" />
              Message Us on WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-950 px-6 py-3 text-sm font-semibold text-slate-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
            >
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            Questions? Call us at{" "}
            <a href="tel:+917027340360" className="text-cyan-400 hover:underline font-medium">
              +91 70273 40360
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
