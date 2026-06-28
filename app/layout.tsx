import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnitrixwebsolutions.com"),
  title: {
    default: "Omnitrix Web Solutions — Premium Web & Digital Experiences",
    template: "%s | Omnitrix Web Solutions",
  },
  description: 
    "Omnitrix Web Solutions builds premium, high-converting websites, branding, and digital products for businesses. Performance-first, mobile-first, and conversion-focused.",
  keywords: [
    "website design Sirsa",
    "website design Ellenabad",
    "website design Sirsa Haryana",
    "website design Ellenabad Sirsa",
    "web development Ellenabad",
    "web development Sirsa",
    "web development Sirsa Haryana",
    "web development Ellenabad Sirsa",
    "SEO Sirsa",
    "SEO Ellenabad",
    "digital marketing Haryana",
    "business website Sirsa",
    "business website Ellenabad",
    "website design company Sirsa",
    "website design company Ellenabad",
    "web design Haryana",
    "Google My Business Sirsa",
    "Google My Business Ellenabad",
    "WhatsApp website Sirsa",
    "WhatsApp website Ellenabad",
    "affordable website Sirsa",
    "affordable website Ellenabad",
    "domain hosting Sirsa",
    "domain hosting Ellenabad",
    "restaurant website Sirsa",
    "restaurant website Ellenabad",
    "clinic website Sirsa",
    "clinic website Ellenabad",
    "school website Sirsa",
    "school website Ellenabad",
    "Omnitrix Web Solutions",
  ],
  authors: [{ name: "Keshav Ladha" }],
  creator: "Omnitrix Web Solutions",
  openGraph: {
    title: "Omnitrix Web Solutions — Premium Web & Digital Experiences",
    description: "Premium websites, brand systems, and scalable digital products focused on conversion, speed, and growth.",
    type: "website",
    locale: "en-US",
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
  themeColor: "#050608",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined' && (window.location.search.includes('app=true') || window.self !== window.top)) {
                  document.documentElement.classList.add('is-app');
                }
              })();
            `
          }}
        />

        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white/6 focus:px-3 focus:py-2 focus:text-white">Skip to content</a>

        <main id="main" className="relative z-10">{children}</main>

        {/* Sticky WhatsApp CTA */}
        <div className="pointer-events-none">
          <a
            href="https://api.whatsapp.com/send?phone=+917027340360&text=Hi,%20I%27d%20like%20to%20start%20a%20project"
            className="pointer-events-auto fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 shadow-lg backdrop-blur-md hover:scale-105 hover:bg-white/6 transition-all duration-300"
            aria-label="Chat on WhatsApp"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-cyan-200">
              <path d="M20 14.5a5.5 5.5 0 0 1-4.5 4.5L14 20.5l-1.5-.5A7.5 7.5 0 1 1 20 14.5z" stroke="currentColor" strokeWidth="0" fill="currentColor" />
            </svg>
            <span className="hidden truncate text-sm font-semibold text-white sm:inline">Start a project</span>
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Omnitrix Web Solutions",
              "image": "https://omnitrixwebsolutions.com/og-image.jpg",
              "@id": "https://omnitrixwebsolutions.com/#organization",
              "url": "https://omnitrixwebsolutions.com",
              "telephone": "+91 70273 40360",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ellenabad",
                "addressLocality": "Sirsa",
                "addressRegion": "Haryana",
                "postalCode": "125102",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.4478,
                "longitude": 74.6592
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "sameAs": [
                "https://github.com",
                "https://linkedin.com"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
