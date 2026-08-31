import type { NextConfig } from "next";

/**
 * next.config.ts
 * ─────────────────────────────────────────────────────────────────────────
 * Configuración de Next.js. El archivo original estaba vacío (config por
 * defecto). Se agregaron dos ajustes concretos:
 *
 * 1. `images.formats`: le indica a next/image que sirva WebP/AVIF cuando
 *    el navegador los soporte, en vez del formato original (muchas fotos
 *    en /public son .jpg/.png pesados). Esto es automático — no requiere
 *    convertir manualmente ninguna imagen — y reduce el peso de descarga
 *    en todas las páginas que usan <Image> (punto A6 del brief).
 * 2. `typedRoutes` se evaluó pero NO se activó: exige que cada `href` de
 *    <Link> sea un string literal conocido en tiempo de compilación, lo
 *    cual choca con el patrón (deliberado y mejor, ver lib/constants.ts)
 *    de tener los enlaces de navegación centralizados en un array de
 *    datos (`NAV_LINKS: NavLink[]`) en vez de escritos a mano en cada
 *    componente. Forzar `typedRoutes` hubiera significado esparcir casts
 *    `as Route` por todo el código, anulando el beneficio real de la
 *    regla. La protección equivalente contra rutas rotas ya la da tener
 *    una única fuente de verdad para los enlaces, más las páginas reales
 *    creadas para cada ruta del menú (antes, "/eventos", "/proyectos",
 *    "/impulsa" y "/unete" no existían y daban 404 — ver README).
 * ─────────────────────────────────────────────────────────────────────────
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
