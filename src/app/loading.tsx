/**
 * app/loading.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Estado de carga global, mostrado automáticamente por Next.js (vía React
 * Suspense) mientras el servidor prepara una página. No existía antes,
 * así que la navegación entre páginas podía sentirse "colgada" sin
 * ningún feedback visual durante la carga inicial de datos del servidor.
 * ─────────────────────────────────────────────────────────────────────────
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-20" role="status" aria-label="Cargando">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-blue-light border-t-brand-blue" />
    </div>
  );
}
