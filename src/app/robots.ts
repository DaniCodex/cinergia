/**
 * app/robots.ts — Genera /robots.txt. Permite indexar todo el sitio
 * público y apunta al sitemap generado en app/sitemap.ts.
 */
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
