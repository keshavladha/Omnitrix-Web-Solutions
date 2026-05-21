import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnitrixwebsolutions.com"),
  title: {
    default: "Website Design Hisar | Omnitrix Web Solutions - SEO & Digital Marketing",
    template: "%s | Omnitrix Web Solutions",
  },
  description:
    "Best website design company in Hisar, Haryana. We build affordable business websites, SEO, Google My Business, domain hosting, and WhatsApp integration for local shops, clinics, restaurants & schools.",
  keywords: [
    "website design Hisar",
    "web development Hisar",
    "SEO Hisar",
    "digital marketing Haryana",
    "business website Hisar",
    "website design company Hisar",
    "web design Haryana",
    "Google My Business Hisar",
    "WhatsApp website Hisar",
    "affordable website Hisar",
    "domain hosting Hisar",
    "restaurant website Hisar",
    "clinic website Hisar",
    "school website Hisar",
    "Omnitrix Web Solutions",
  ],
  authors: [{ name: "Keshav Ladha" }],
  creator: "Omnitrix Web Solutions",
  openGraph: {
    title: "Website Design & SEO in Hisar, Haryana | Omnitrix Web Solutions",
    description: "Affordable business websites, local SEO, and digital marketing for Hisar businesses. Get found online today.",
    type: "website",
    locale: "en_IN",
    siteName: "Omnitrix Web Solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#02040a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
