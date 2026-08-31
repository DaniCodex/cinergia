"use client"; // Los error boundaries de Next.js siempre deben ser Client Components.

/**
 * app/error.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Error boundary global (punto A8 del brief). Captura cualquier error de
 * renderizado no controlado en una página y muestra una UI de emergencia
 * en vez de una pantalla en blanco o el overlay de error crudo de Next.js
 * en producción.
 *
 * ⚠️ NOTA TÉCNICA IMPORTANTE (Next.js 16): la prop para reintentar renderizar
 * ya NO se llama `reset` como en versiones anteriores de Next.js — se
 * renombró a `unstable_retry`. Se confirmó leyendo la documentación
 * incluida en node_modules/next/dist/docs de este proyecto (indicado por
 * AGENTS.md) antes de escribir este archivo, precisamente para no arrastrar
 * una API vieja por costumbre.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { useEffect } from "react";
import { Button, Container } from "@/components/ui";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // En una app real, este es el lugar para reportar el error a un
    // servicio externo (Sentry, etc). Por ahora, queda en consola del
    // servidor/navegador para no depender de un servicio no configurado.
    console.error("[error.tsx] Error no controlado:", error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <h1 className="font-display text-2xl font-bold text-brand-dark md:text-3xl">
        Algo salió mal
      </h1>
      <p className="mt-3 max-w-md text-slate-500">
        Ocurrió un error inesperado al cargar esta página. Puedes intentarlo de nuevo.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={() => unstable_retry()}>Intentar de nuevo</Button>
        <Button href="/" variant="outline">
          Volver al inicio
        </Button>
      </div>
    </Container>
  );
}
