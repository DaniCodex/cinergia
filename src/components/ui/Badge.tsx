/**
 * components/ui/Badge.tsx — Etiqueta pequeña (categoría, estado). Usada en
 * tarjetas de noticias/eventos ("VISITA"), proyectos ("Ejemplo") y el
 * "eyebrow" del Hero.
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "orange" | "blue" | "neutral" | "warning";

const TONE_STYLES: Record<BadgeTone, string> = {
  orange: "bg-brand-orange/10 text-brand-orange",
  blue: "bg-brand-blue/10 text-brand-blue",
  neutral: "bg-slate-100 text-slate-600",
  warning: "bg-amber-100 text-amber-700",
};

export function Badge({
  children,
  tone = "blue",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
        TONE_STYLES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
