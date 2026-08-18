/**
 * components/ui/Icon.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Un único componente `<Icon name="linkedin" />` que centraliza todos
 * los SVG usados en el sitio.
 *
 * POR QUÉ ESTO ES MEJOR:
 * En el código original, cada ícono (Instagram, LinkedIn, flechas del
 * carrusel, X de cerrar menú...) era un bloque `<svg>...</svg>` completo
 * copiado y pegado dentro de Navbar.tsx, Testimonials.tsx y NewsCarousel.tsx.
 * Si mañana se quiere cambiar el grosor de línea de todos los íconos, hay
 * que tocar 6 archivos distintos y es fácil olvidarse de uno.
 *
 * Con este componente:
 *   - Un solo lugar define cada ícono.
 *   - `aria-hidden="true"` se aplica automáticamente: los íconos son
 *     decorativos (el texto/aria-label del elemento padre ya describe la
 *     acción), así que no deben ser anunciados dos veces por un lector
 *     de pantalla — mejora de accesibilidad (punto A7 del brief).
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { SVGProps } from "react";

export type IconName =
  | "instagram"
  | "linkedin"
  | "tiktok"
  | "facebook"
  | "whatsapp"
  | "menu"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "arrow-right"
  | "briefcase"
  | "book"
  | "users"
  | "chart"
  | "target"
  | "handshake"
  | "mail"
  | "phone"
  | "map-pin"
  | "check-circle"
  | "alert-circle";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

/** Envoltorio con los atributos SVG comunes a todos los íconos (stroke-based, estilo "lucide"). */
function Base({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case "instagram":
      return (
        <Base {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </Base>
      );
    case "linkedin":
      return (
        <Base {...props} fill="currentColor" stroke="none">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </Base>
      );
    case "tiktok":
      return (
        <Base {...props} fill="currentColor" stroke="none">
          <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
        </Base>
      );
    case "facebook":
      return (
        <Base {...props} fill="currentColor" stroke="none">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </Base>
      );
    case "whatsapp":
      return (
        <Base {...props} fill="currentColor" stroke="none">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.85 11.85 0 0 0 5.64 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.42zM12.05 21.4a9.5 9.5 0 0 1-4.85-1.33l-.35-.21-3.6.95.96-3.5-.23-.36a9.48 9.48 0 0 1-1.46-5.09c0-5.25 4.28-9.53 9.54-9.53 2.55 0 4.94.99 6.74 2.79a9.47 9.47 0 0 1 2.79 6.75c0 5.26-4.28 9.53-9.54 9.53zm5.22-7.14c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38 0 1.4 1.02 2.76 1.16 2.95.14.19 2.01 3.07 4.88 4.3.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
        </Base>
      );
    case "menu":
      return (
        <Base {...props}>
          <path d="M3 12h18M3 6h18M3 18h18" />
        </Base>
      );
    case "close":
      return (
        <Base {...props}>
          <path d="M6 18L18 6M6 6l12 12" />
        </Base>
      );
    case "chevron-left":
      return (
        <Base {...props}>
          <path d="M15.75 19.5L8.25 12l7.5-7.5" />
        </Base>
      );
    case "chevron-right":
      return (
        <Base {...props}>
          <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </Base>
      );
    case "arrow-right":
      return (
        <Base {...props}>
          <path d="M4.5 12h15m0 0l-6.5-6.5M19.5 12l-6.5 6.5" />
        </Base>
      );
    case "briefcase":
      return (
        <Base {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </Base>
      );
    case "book":
      return (
        <Base {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </Base>
      );
    case "users":
      return (
        <Base {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </Base>
      );
    case "chart":
      return (
        <Base {...props}>
          <path d="M3 3v18h18" />
          <path d="M18 17V9M13 17V5M8 17v-4" />
        </Base>
      );
    case "target":
      return (
        <Base {...props}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        </Base>
      );
    case "handshake":
      return (
        <Base {...props}>
          <path d="M8 12l3 3 6-6" />
          <path d="M3 12l4-4 4 2 4-2 4 4-3 3-3-2-4 2-3-1z" />
        </Base>
      );
    case "mail":
      return (
        <Base {...props}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 6-10 7L2 6" />
        </Base>
      );
    case "phone":
      return (
        <Base {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </Base>
      );
    case "map-pin":
      return (
        <Base {...props}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </Base>
      );
    case "check-circle":
      return (
        <Base {...props}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </Base>
      );
    case "alert-circle":
      return (
        <Base {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </Base>
      );
    default:
      return null;
  }
}
