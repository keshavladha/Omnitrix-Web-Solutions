"use client";

import { useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Rocket,
  TrendingUp,
  Zap,
  Shield,
  Lock,
  CreditCard,
  Smartphone,
  Globe2,
  Loader2,
  AlertCircle,
  Star,
  IndianRupee,
  PenLine,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const packages = [
  {
    id: "basic",
    name: "Basic",
    subtitle: "Perfect for individuals & small shops",
    price: 5000,
    displayPrice: "₹5,000",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-200",
    activeBorder: "border-blue-500",
    bgActive: "bg-blue-50",
    features: [
      "Single-page landing website",
      "Mobile-friendly design",
      "WhatsApp integration",
      "Google Maps location",
      "Basic contact form",
      "2-3 days delivery",
    ],
  },
  {
    id: "business",
    name: "Business",
    subtitle: "Most popular for local businesses",
    price: 12000,
    displayPrice: "₹12,000",
    icon: TrendingUp,
    color: "from-blue-600 to-violet-600",
    borderColor: "border-slate-200",
    activeBorder: "border-blue-600",
    bgActive: "bg-blue-50",
    popular: true,
    features: [
      "5-page website",
      "WhatsApp chat & call buttons",
      "Photo gallery / portfolio",
      "Basic SEO setup",
      "Social media links",
      "5-7 days delivery",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Complete solution with all features",
    price: 20000,
    displayPrice: "₹20,000",
    icon: Zap,
    color: "from-violet-600 to-purple-600",
    borderColor: "border-slate-200",
    activeBorder: "border-violet-500",
    bgActive: "bg-violet-50",
    features: [
      "Up to 10 pages",
      "Online booking system",
      "Product catalog (50 items)",
      "WhatsApp ordering integration",
      "Payment link setup",
      "Advanced SEO optimization",
    ],
  },
];

const paymentMethods = [
  { icon: CreditCard, label: "Credit / Debit Card" },
  { icon: Smartphone, label: "UPI / QR Code" },
  { icon: Globe2, label: "Net Banking" },
];

export default function PaymentPageClient() {
  const [selectedPackage, setSelectedPackage] = useState(packages[1]);
  const [paymentMode, setPaymentMode] = useState<"package" | "custom">("package");
  const [customAmount, setCustomAmount] = useState("");
  const [customAmountError, setCustomAmountError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Compute the actual amount to charge in INR
  const chargeAmount =
    paymentMode === "custom"
      ? Math.round(parseFloat(customAmount) || 0)
      : Math.round(selectedPackage.price * 0.5);

  const packageLabel =
    paymentMode === "custom" ? `Custom Payment` : `${selectedPackage.name} Package (50% Advance)`;

  const handlePayment = async () => {
    setError("");

    // Validate custom amount
    if (paymentMode === "custom") {
      const val = parseFloat(customAmount);
      if (!customAmount || isNaN(val) || val < 1) {
        setCustomAmountError("Please enter a valid amount (minimum ₹1).");
        return;
      }
      setCustomAmountError("");
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: chargeAmount * 100, // paise
          currency: "INR",
          receipt: `omnitrix_${paymentMode === "custom" ? "custom" : selectedPackage.id}_${Date.now()}`,
          notes: {
            package: packageLabel,
            description: packageLabel,
          },
        }),
      });
      const data = await res.json();
      if (!data.ok || !data.order) {
        throw new Error(data.error ?? "Could not create payment order.");
      }
      const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!key) throw new Error("Payment system not configured.");
      if (!window.Razorpay) throw new Error("Payment script not loaded yet. Please try again.");
      const options = {
        key,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Omnitrix Web Solutions",
        description: packageLabel,
        order_id: data.order.id,
        handler: async (response: any) => {
          // Step 3: Verify signature on the server before marking as paid
          setVerifying(true);
          try {
            const verifyRes = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();
            if (!verifyData.ok) {
              throw new Error(verifyData.error ?? "Signature verification failed.");
            }
            // Verified — redirect to thank-you page
            router.push(
              `/payments/thank-you?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&package=${encodeURIComponent(packageLabel)}`
            );
          } catch (err: any) {
            setError(`Payment received but verification failed: ${err.message}. Please contact us.`);
            setVerifying(false);
            setLoading(false);
          }
        },
        prefill: { name: "", email: "", contact: "" },
        notes: { package: packageLabel },
        theme: { color: "#10b981" },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setError("Payment was cancelled. You can try again anytime.");
          },
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (resp: any) => {
        setError(`Payment failed: ${resp.error.description}`);
        setLoading(false);
      });
      rzp.open();
    } catch (err: any) {
      setError(err.message ?? "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

const advance = chargeAmount;

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      <div className="mx-auto max-w-5xl px-4 py-12 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
            <Lock className="h-3.5 w-3.5" />
            Secure Razorpay Checkout
          </div>
          <h1 className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
            Pay for Your Project
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Choose a package or enter a custom amount. Pay securely via Razorpay.
          </p>
        </div>

        {/* Mode Tab Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 gap-1">
            <button
              onClick={() => { setPaymentMode("package"); setError(""); }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                paymentMode === "package"
                  ? "bg-white text-blue-600 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Choose Package
            </button>
            <button
              onClick={() => { setPaymentMode("custom"); setError(""); }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                paymentMode === "custom"
                  ? "bg-white text-blue-600 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <PenLine className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
              Custom Amount
            </button>
          </div>
        </div>

        {/* Package Cards — shown only in package mode */}
        {paymentMode === "package" && (
          <div className="grid gap-4 sm:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const isSelected = selectedPackage.id === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`relative text-left rounded-2xl border-2 p-5 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? `${pkg.activeBorder} ${pkg.bgActive} shadow-md`
                    : `${pkg.borderColor} bg-white hover:border-slate-300 hover:shadow-sm`
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </span>
                )}
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${pkg.color}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-slate-900 text-base">{pkg.name}</h3>
                  {isSelected && <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                </div>
                <p className="text-xs text-slate-500 mb-3">{pkg.subtitle}</p>
                <p className="font-display text-2xl font-semibold text-slate-900">{pkg.displayPrice}</p>
                <ul className="mt-3 space-y-1.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
          </div>
        )}

        {/* Custom Amount Input — shown only in custom mode */}
        {paymentMode === "custom" && (
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-7 space-y-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                  <IndianRupee className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Custom Payment</h3>
                  <p className="text-xs text-slate-500">Pay any specific amount agreed with us</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Enter Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-lg">₹</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="e.g. 6000"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setCustomAmountError("");
                    }}
                    className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 py-3.5 text-lg font-semibold text-slate-900 placeholder:text-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                  />
                </div>
                {customAmountError && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {customAmountError}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Quick Select</p>
                <div className="flex flex-wrap gap-2">
                  {[1000, 2500, 5000, 6000, 10000].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setCustomAmount(amt.toString()); setCustomAmountError(""); }}
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold border transition ${
                        customAmount === amt.toString()
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600"
                      }`}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="font-display text-xl font-semibold text-slate-900">Order Summary</h2>
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Description</span>
                <span className="font-semibold text-slate-900">{packageLabel}</span>
              </div>
              {paymentMode === "package" && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Payment Terms</span>
                  <span className="text-slate-700">50% now · 50% on delivery</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-3 flex justify-between">
                <span className="font-semibold text-slate-900">Amount to Pay</span>
                <span className="font-display text-xl font-bold text-blue-600">
                  {advance > 0 ? `₹${advance.toLocaleString("en-IN")}` : <span className="text-slate-400 text-base">Enter amount</span>}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Included in {selectedPackage.name}
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {selectedPackage.features.map((f) => (
                  <div key={f} className="flex items-center gap-1.5 text-xs text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Accepted Payment Methods
              </p>
              <div className="flex gap-3 flex-wrap">
                {paymentMethods.map((m) => (
                  <div key={m.label} className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                    <m.icon className="h-3.5 w-3.5 text-blue-500" />
                    {m.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5 flex-1">
              <div className="space-y-1">
                <h2 className="font-display text-xl font-semibold text-slate-900">Pay Securely</h2>
                <p className="text-sm text-slate-500">
                  You will be redirected to Razorpay secure checkout portal.
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-5 text-center text-white">
                <p className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">
                  Amount Due Now
                </p>
                <p className="font-display text-4xl font-bold">
                  ₹{advance.toLocaleString("en-IN")}
                </p>
                <p className="text-xs opacity-70 mt-1">
                  50% advance - {selectedPackage.name} Package
                </p>
              </div>
              {error && (
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  {error}
                </div>
              )}
              <button
                onClick={handlePayment}
                disabled={loading || verifying}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all disabled:cursor-not-allowed disabled:opacity-60"
              >
                {verifying ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Verifying payment...
                  </>
                ) : loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Preparing checkout...
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Pay ₹{advance.toLocaleString("en-IN")} with Razorpay
                  </>
                )}
              </button>
              <div className="flex items-center gap-2 justify-center text-xs text-slate-400">
                <Shield className="h-3.5 w-3.5" />
                256-bit SSL encrypted - PCI DSS compliant
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center space-y-1">
              <p className="text-sm font-semibold text-slate-700">Need help choosing?</p>
              <p className="text-xs text-slate-500">
                Call or WhatsApp us at{" "}
                <a href="https://api.whatsapp.com/send?phone=+917027340360" className="text-blue-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                  +91 70273 40360
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
