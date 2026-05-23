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
            <div className="h-24 w-24 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
              Payment Successful!
            </h1>
            <p className="text-lg text-slate-500">
              Thank you! Your payment for the{" "}
              <span className="font-semibold text-slate-800">{pkg} Package</span> has been received.
            </p>
          </div>

          {paymentId && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2">
                Payment Reference
              </p>
              <p className="font-mono text-sm text-slate-700 break-all">{paymentId}</p>
            </div>
          )}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm space-y-4">
            <h2 className="font-display text-lg font-semibold text-slate-900">What happens next?</h2>
            <div className="space-y-3">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-3">
                  <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              Message Us on WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            Questions? Call us at{" "}
            <a href="tel:+917027340360" className="text-blue-600 hover:underline font-medium">
              +91 70273 40360
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
