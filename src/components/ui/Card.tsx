/**
 * components/ui/Card.tsx — Contenedor "tarjeta blanca" base (fondo blanco,
 * borde sutil, esquinas redondeadas, sombra suave). Reemplaza el patrón
 * `className="bg-white rounded-2xl border border-zinc-200 shadow-sm"` que
 * se repetía, con variaciones sutiles e inconsistentes, en Metrics,
 * NewsCarousel y Testimonials del sitio original.
 */
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Si es true, agrega hover de elevación (usado en tarjetas clickeables). */
  interactive?: boolean;
}

export function Card({ className, interactive, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
        className
      )}
      {...props}
    />
  );
}
