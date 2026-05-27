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
          color: "#40e8ff",
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

      <div className="rounded-3xl border border-white/5 bg-slate-950/40 p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-white mb-3">Pay with Razorpay</h2>
        <p className="text-sm text-slate-400 mb-4">
          This demo uses a secure server-side order creation route and Razorpay Checkout.
        </p>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-obsidian-lowest transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 shadow-md hover:shadow-cyan-500/20 cursor-pointer"
          style={{ color: "#02040a" }}
        >
          {loading ? "Preparing payment…" : "Pay ₹100.00"}
        </button>
        {status ? <p className="mt-3 text-sm text-slate-400">{status}</p> : null}
      </div>
    </div>
  );
}
