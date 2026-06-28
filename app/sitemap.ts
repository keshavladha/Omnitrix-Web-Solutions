import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://omnitrixwebsolutions.com";
  
  const routes = [
    "",
    "/services",
    "/work",
    "/case-studies",
    "/pricing",
    "/payments",
    "/process",
    "/blog",
    "/faq",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : route === "/contact" || route === "/payments" ? 0.9 : 0.8,
  }));
}
