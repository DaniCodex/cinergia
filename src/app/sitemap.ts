/**
 * app/sitemap.ts
 * ─────────────────────────────────────────────────────────────────────────
 * Genera /sitemap.xml automáticamente a partir de las rutas reales del
 * sitio (punto D4 del brief: SEO). No existía antes. Ayuda a que Google y
 * otros buscadores descubran todas las páginas sin depender de que las
 * encuentren solo siguiendo enlaces.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/nosotros", "/eventos", "/proyectos", "/impulsa", "/unete"];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
