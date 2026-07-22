import type { MetadataRoute } from "next";
import { servicePages } from "../data/servicePages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anvirocx.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/case-studies",
    "/industries",
    "/resources",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...servicePages.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
