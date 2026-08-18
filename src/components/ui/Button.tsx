/**
 * components/ui/Button.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: El botón base de todo el sistema de diseño. Todas las llamadas a la
 * acción (CTAs) del sitio deberían usar este componente en vez de escribir
 * `className="bg-amber-500 hover:bg-amber-400 ..."` cada vez.
 *
 * POR QUÉ ESTO ES MEJOR (puntos B2 y B9 del brief — design system y
 * componentes reutilizables):
 *   1. Un solo lugar define "cómo se ve un botón primario de CINERGIA".
 *      Si mañana cambia el color de marca, se edita UNA vez acá, no en
 *      cada archivo que tenga un botón (en el sitio original, el color
 *      naranja "amber-500" de Tailwind estaba hardcodeado en al menos
 *      4 componentes distintos).
 *   2. Es POLIMÓRFICO: acepta `href` (renderiza un <Link> de Next.js) o
 *      no lo acepta (renderiza un <button> nativo). Esto importa para
 *      accesibilidad: un <button> que navega con `onClick={() => router.push(...)}`
 *      no se puede abrir en una pestaña nueva con Cmd/Ctrl+click, no
 *      aparece como "enlace" para lectores de pantalla, y no funciona sin
 *      JavaScript. Un <Link> sí. El Hero original usaba `<button>` para
 *      "Conoce CINERGIA →" sin ninguna acción real — ahora es un enlace
 *      real y funcional.
 * ─────────────────────────────────────────────────────────────────────────
 */
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  // Naranja de marca: reservado para la acción principal de cada vista (punto B3).
  primary:
    "bg-brand-orange text-white shadow-sm hover:bg-brand-orange/90 focus-visible:outline-brand-orange",
  // Azul principal de marca: acciones secundarias importantes.
  secondary:
    "bg-brand-blue text-white shadow-sm hover:bg-brand-blue/90 focus-visible:outline-brand-blue",
  // Contorno azul sobre fondo claro: usado sobre secciones blancas.
  outline:
    "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue-light/60 focus-visible:outline-brand-blue",
  // Transparente, para usar sobre fondos oscuros (ej. sobre el Hero).
  ghost:
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:outline-white",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

const BASE_STYLES =
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

/** Props cuando el botón es un enlace de navegación. */
interface LinkButtonProps extends SharedProps {
  href: string;
  /** Abre en una pestaña nueva (ej. redes sociales, WhatsApp). */
  external?: boolean;
}

/** Props cuando el botón dispara una acción en la misma página (submit, onClick, etc). */
interface ActionButtonProps
  extends SharedProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

/** Type guard: distingue en runtime si las props corresponden a la variante "enlace". */
function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], SIZE_STYLES[size], className);

  // Caso 1: es un enlace → <Link> real de Next.js (navegación, prefetch, accesible).
  if (isLinkButton(props)) {
    const { href, external } = props;
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  // Caso 2: es una acción (ej. submit de un formulario) → <button> nativo.
  // Solo pasamos al DOM los atributos nativos de <button> (type, onClick,
  // disabled, form, aria-*, etc.), nunca las props visuales (variant/size),
  // para evitar el warning de React "unknown DOM attribute". Se
  // deshabilita la regla de "variable no usada" en esta única línea a
  // propósito: es el patrón estándar de TypeScript para "omitir" claves de
  // un objeto vía destructuring (las variables _variant, etc. existen solo
  // para sacarlas de `nativeButtonProps`, nunca se leen después).
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _variant, size: _size, className: _className, children: _children, ...nativeButtonProps } =
    props as ActionButtonProps;
  return (
    <button className={classes} {...nativeButtonProps}>
      {children}
    </button>
  );
}
