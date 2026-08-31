/**
 * components/ui/Container.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Contenedor de ancho máximo + padding horizontal responsivo, reutilizado
 * en TODAS las secciones. Antes, cada sección repetía manualmente
 * "max-w-7xl mx-auto px-6 md:px-12 lg:px-20" (o variantes ligeramente
 * distintas, ej. max-w-6xl en unos componentes y max-w-7xl en otros — una
 * inconsistencia real que existía en el código original). Un solo
 * componente garantiza que el grid horizontal sea consistente en todo el
 * sitio (punto B5 del brief: sistema de spacing y grid consistente).
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Elemento HTML a usar (por defecto "div"; útil pasar "section"). */
  as?: ElementType;
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16", className)}>
      {children}
    </Tag>
  );
}
