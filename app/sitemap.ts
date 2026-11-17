import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://anvirocx.com";return ["","/about","/services","/services/customer-support","/contact","/faq","/privacy-policy","/terms","/cookie-policy"].map(route=>({url:base+route,lastModified:new Date(),changeFrequency:"monthly" as const,priority:route===""?1:0.7}));}
