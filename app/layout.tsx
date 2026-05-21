import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnitrixwebsolutions.com"),
  title: {
    default: "Omnitrix Web Solutions | Premium Full-Stack Agency",
    template: "%s | Omnitrix Web Solutions",
  },
  description:
    "Omnitrix Web Solutions builds scalable full-stack websites, SaaS platforms, dashboards, APIs, and premium digital products for ambitious startups.",
  keywords: [
    "Omnitrix Web Solutions",
    "full stack web development India",
    "startup websites",
    "SaaS development",
    "Next.js agency",
    "MongoDB backend",
  ],
  authors: [{ name: "Keshav Ladha" }],
  creator: "Omnitrix Web Solutions",
  openGraph: {
    title: "Omnitrix Web Solutions",
    description: "Engineering modern digital experiences. Vision beyond code.",
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
