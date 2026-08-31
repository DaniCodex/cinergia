"use client";

/**
 * components/ui/Reveal.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Envuelve cualquier contenido y lo anima con un fade-in + desplazamiento
 * sutil hacia arriba cuando entra en el viewport. Es la implementación
 * concreta del punto D2 del brief ("animaciones al scroll con
 * Intersection Observer"), construida sobre el hook `useInView`.
 *
 * POR QUÉ ES "no excesiva" (punto B6 del brief):
 *   - El desplazamiento es de solo 16px y la duración 500ms: perceptible
 *     pero no llamativo.
 *   - Respeta `prefers-reduced-motion`: si la persona activó esa
 *     preferencia de accesibilidad en su sistema operativo, el contenido
 *     aparece directo, sin animación (ver `motion-reduce:` en las clases).
 *   - `triggerOnce: true` (default del hook) evita que el elemento
 *     "parpadee" cada vez que se vuelve a cruzar el umbral al hacer
 *     scroll hacia arriba y abajo.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en milisegundos, útil para escalonar (stagger) varios elementos. */
  delayMs?: number;
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isInView ? `${delayMs}ms` : "0ms" }}
      className={cn(
        "transition-all duration-500 ease-out motion-reduce:transition-none",
        isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 motion-reduce:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}
