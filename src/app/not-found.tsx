/**
 * app/not-found.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Página 404 personalizada (punto A8 del brief: manejo de edge cases).
 * El sitio original no tenía ninguna — Next.js mostraba su 404 genérica
 * en inglés y sin ningún estilo del sitio. Se aprovecha para redirigir a
 * las secciones reales, ya que varios enlaces internos (antes de este
 * refactor) apuntaban a rutas que no existían.
 * ─────────────────────────────────────────────────────────────────────────
 */
import Link from "next/link";
import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <p className="font-display text-8xl font-black text-brand-blue-light">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-brand-dark md:text-3xl">
        No encontramos esta página
      </h1>
      <p className="mt-3 max-w-md text-slate-500">
        Puede que el enlace esté roto o que la página se haya movido. Prueba desde el inicio.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Volver al inicio</Button>
        <Link
          href="/unete"
          className="inline-flex items-center justify-center rounded-lg border-2 border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue-light/60"
        >
          Contáctanos
        </Link>
      </div>
    </Container>
  );
}
