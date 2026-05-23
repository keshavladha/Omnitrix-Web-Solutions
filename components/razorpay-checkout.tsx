"use client";

import { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Razorpay?: any;
  }
}

export function RazorpayCheckoutButton() {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 10000,
          currency: "INR",
          receipt: `service_deposit_${Date.now()}`,
          notes: {
            description: "Website design deposit",
          },
        }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error ?? "Failed to create Razorpay order.");
      }

      const order = payload.order;
      const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!key) {
        throw new Error("Missing NEXT_PUBLIC_RAZORPAY_KEY_ID.");
      }

      if (!window.Razorpay) {
        throw new Error("Razorpay checkout script not loaded.");
      }

      const options = {
        key,
        amount: order.amount,
        currency: order.currency,
        name: "Omnitrix Web Solutions",
        description: "Pay for website design services",
        order_id: order.id,
        handler: (response: any) => {
          setStatus("Payment successful. Thank you!");
          console.log("Razorpay payment succeeded", response);
        },
        modal: {
          ondismiss: () => {
            setStatus("Payment was cancelled.");
          },
        },
        theme: {
          color: "#2563eb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error: any) {
      console.error(error);
      setStatus(error?.message ?? "Unable to start payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900 mb-3">Pay with Razorpay</h2>
        <p className="text-sm text-slate-600 mb-4">
          This demo uses a secure server-side order creation route and Razorpay Checkout.
        </p>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Preparing payment…" : "Pay ₹100.00"}
        </button>
        {status ? <p className="mt-3 text-sm text-slate-700">{status}</p> : null}
      </div>
    </div>
  );
}
