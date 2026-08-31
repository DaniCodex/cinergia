/**
 * components/ui/PageHeader.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Banda de encabezado para páginas internas que no tienen un Hero de
 * carrusel a pantalla completa (Eventos, Proyectos, Impulsa, Únete). Como
 * el Navbar es `fixed`, todo el contenido debajo necesita un padding-top
 * que lo compense — `pt-40` en vez de repetir ese cálculo mágico en cada
 * página, se centraliza acá una sola vez.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="bg-brand-dark pb-16 pt-40">
      <Container>
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
