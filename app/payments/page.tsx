import { AmbientBackground } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import PaymentPageClient from "@/components/payment-client";

export const metadata = {
  title: "Pay Online - Omnitrix Web Solutions",
  description: "Securely pay for your website package via Razorpay. UPI, cards, net banking accepted.",
};

export default function PaymentsPage() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <PaymentPageClient />
      </main>
      <Footer />
    </>
  );
}
