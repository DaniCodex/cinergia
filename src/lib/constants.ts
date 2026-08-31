/**
 * lib/constants.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Datos globales y estables del sitio (nombre, descripción, links de
 * navegación, redes sociales, info de contacto).
 *
 * POR QUÉ ESTO ES MEJOR:
 * Antes, el array de enlaces del menú vivía hardcodeado DENTRO de
 * Navbar.tsx, y se repetía casi igual en la versión de escritorio y en la
 * versión del menú móvil (dos listas separadas para mantener). Además,
 * el año del copyright, el nombre de la universidad y los links de
 * Instagram/LinkedIn ("https://instagram.com" sin usuario real) estaban
 * repetidos o incompletos en distintos archivos.
 *
 * Con esto:
 *   - Un solo lugar para editar el menú (afecta desktop + mobile a la vez).
 *   - Un solo lugar para actualizar el link real de Instagram/LinkedIn.
 *   - `SITE.name`, `SITE.university`, etc. se reusan en metadata SEO,
 *     footer, y datos estructurados (JSON-LD), evitando inconsistencias.
 *
 * ⚠️ IMPORTANTE PARA JOAQUÍN: reemplaza los valores marcados con TODO
 * (usuarios reales de redes sociales, correo de contacto, teléfono) antes
 * de publicar. Se dejaron placeholders razonables para que el sitio
 * compile y se vea completo mientras tanto.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { NavLink, SocialLink } from "@/types";

export const SITE = {
  name: "CINERGIA",
  fullName: "CINERGIA — Asociación Estudiantil de Ingenierías",
  university: "Universidad Científica del Sur",
  universityShort: "UCSUR",
  description:
    "Comunidad estudiantil de ingenierías de la Universidad Científica del Sur que conecta talento con proyectos reales, investigación aplicada e industria.",
  // Lee la URL real de la variable de entorno NEXT_PUBLIC_SITE_URL (ver
  // .env.example) para no tener que editar código cada vez que cambie el
  // dominio (ej. de un subdominio de Vercel a un dominio propio).
  // TODO(Joaquín): configurar NEXT_PUBLIC_SITE_URL en Vercel una vez tengas el dominio final.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cinergia-ucsur.vercel.app",
  // TODO(Joaquín): correo institucional real para recibir el formulario de contacto.
  contactEmail: "contacto@cinergia-ucsur.pe",
  locale: "es_PE",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Eventos", href: "/eventos" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Impulsa tu carrera", href: "/impulsa" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  // TODO(Joaquín): reemplazar por los usuarios reales de Instagram/LinkedIn de CINERGIA.
  { label: "Instagram", href: "https://instagram.com/cinergia.ucsur", icon: "instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/cinergia-ucsur", icon: "linkedin" },
];

/** Enlace principal de conversión (CTA), reutilizado en Navbar, Footer y Hero. */
export const PRIMARY_CTA: NavLink = { label: "Únete", href: "/unete" };
