/**
 * components/ui/SectionHeading.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Encabezado estándar de sección: eyebrow opcional + título (con la última
 * palabra o frase resaltada en naranja) + descripción opcional.
 *
 * Estandariza la jerarquía tipográfica (h2 en todas las secciones, nunca
 * h1 repetido — importante para accesibilidad y SEO, punto A7) y asegura
 * que el color de acento (naranja de marca) se use consistentemente para
 * resaltar, en vez de que cada sección decida su propio color de énfasis
 * (el sitio original mezclaba azul y ámbar de Tailwind sin un criterio
 * único).
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Fragmento del título a resaltar en color de acento (debe ser substring de `title`). */
  highlight?: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  // Si `highlight` viene definido, partimos el título en dos para pintar
  // solo esa parte en naranja, preservando el resto en el color de texto principal.
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-brand-blue">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
