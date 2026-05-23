"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RazorpayButton({ amount }: { amount: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Create order on server
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount, // amount in paise (e.g., 50000 = ₹500)
          currency: "INR",
          receipt: `order_rcpt_${Date.now()}`,
        }),
      });
      const order = await res.json();

      if (!order.id) throw new Error("Failed to create Razorpay order");

      // Load Razorpay checkout script if not already loaded
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = async () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "", // public key
          amount: order.amount,
          currency: order.currency,
          name: "Omnitrix Web Solutions",
          description: "Premium Service Payment",
          order_id: order.id,
          handler: async function (response: any) {
            // Verify payment on server
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
            if (verifyData.status === "success") {
              router.push("/checkout/thank-you");
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          },
          prefill: {
            // optional prefill fields
            name: "", email: "", contact: "",
          },
          theme: {
            color: "#1a73e8", // Google blue
          },
        } as any;
        // @ts-ignore – Razorpay is loaded from script
        const rzp = new window.Razorpay(options);
        rzp.open();
        setLoading(false);
      };
    } catch (err) {
      console.error(err);
      alert("Unable to initiate payment. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
    >
      {loading ? "Processing…" : "Pay Now"}
    </button>
  );
}
