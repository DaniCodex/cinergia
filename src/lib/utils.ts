/**
 * lib/utils.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Funciones utilitarias pequeñas y sin estado, reutilizadas en
 * distintos componentes.
 *
 * POR QUÉ ESTO ES MEJOR:
 * En el código original, las clases condicionales de Tailwind se armaban
 * a mano con template strings, por ejemplo:
 *
 *   className={`text-sm ${isDarkTheme ? "text-blue-900" : "text-white"}`}
 *
 * Esto funciona para casos simples, pero se vuelve frágil cuando:
 *   - Hay espacios de más o de menos (errores invisibles).
 *   - Dos utilidades de Tailwind chocan (ej. "px-4" y "px-6" a la vez),
 *     porque Tailwind aplica la que aparece última en el CSS final, no la
 *     que aparece última en el string — un bug clásico y difícil de ver.
 *
 * `cn()` combina `clsx` (para armar la lista de clases condicionalmente,
 * aceptando booleanos/objetos) y `tailwind-merge` (que sabe resolver
 * conflictos de utilidades de Tailwind automáticamente). Es el patrón
 * estándar en proyectos profesionales de Next.js + Tailwind.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combina clases de Tailwind resolviendo conflictos automáticamente. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formatea una fecha ISO ("2026-03-01") a un formato legible en español,
 * ej. "1 de marzo de 2026". Se usa en tarjetas de noticias/eventos.
 *
 * Recibe un string y no un Date ya guardado en los datos porque los
 * strings ISO son más fáciles de tipar, ordenar (sort) y serializar.
 */
export function formatDateEs(isoDate: string): string {
  try {
    const date = new Date(`${isoDate}T00:00:00`);
    return new Intl.DateTimeFormat("es-PE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    // Si la fecha viene mal formada, no rompemos la UI: mostramos el string crudo.
    return isoDate;
  }
}

/** Determina si una fecha ISO ya pasó respecto a hoy. Usado para separar eventos pasados/próximos. */
export function isPastDate(isoDate: string): boolean {
  const date = new Date(`${isoDate}T23:59:59`);
  return date.getTime() < Date.now();
}
