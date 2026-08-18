/**
 * lib/fonts.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Configuración centralizada de las dos únicas fuentes del sitio.
 *
 * POR QUÉ ESTO ES MEJOR (punto B4 del brief — tipografía profesional y
 * coherente):
 * El proyecto original cargaba TRES familias tipográficas a la vez
 * (Inter, Montserrat y Outfit) definidas en app/font.ts, pero solo dos se
 * usaban realmente en el HTML (Montserrat como fuente global del body, y
 * Outfit suelta en un par de títulos) — Inter se importaba y nunca se
 * aplicaba a nada. Cada fuente de Google que se carga suma peticiones de
 * red y bytes de más, así que cargar una fuente sin usarla es puro costo
 * de performance sin ningún beneficio (punto A6 del brief).
 *
 * Se dejó exactamente UN par de fuentes con un rol claro cada una:
 *   - Outfit (geométrica, moderna): para títulos y elementos "display".
 *     Ya se usaba en el Hero original, así que se mantiene la identidad
 *     visual existente.
 *   - Inter: para todo el texto de cuerpo. Es una de las tipografías más
 *     legibles en pantalla que existen, y es el estándar de facto para
 *     interfaces (Wikipedia, GitHub, Vercel, etc la usan).
 *
 * `variable: "--font-inter"` (y equivalente para Outfit) le pide a
 * next/font que exponga la fuente como una CSS custom property, que
 * luego se conecta al sistema de theming de Tailwind en globals.css.
 * Esto evita el patrón antiguo de `className={inter.className}` repetido
 * en cada componente que necesitaba una fuente distinta a la del body.
 *
 * `display: "swap"` evita el "texto invisible" mientras carga la fuente
 * (FOIT): el navegador muestra una fuente de sistema de inmediato y la
 * reemplaza cuando la fuente real termina de cargar.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { Inter, Outfit } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});
