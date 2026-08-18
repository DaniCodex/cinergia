/**
 * components/ui/StatCard.tsx — Tarjeta de métrica numérica ("14 EVENTOS").
 * Extraída de Metrics.tsx original para poder reusarla también en
 * ValoresEstadisticasSection (que tenía su propia versión, con estilos
 * oscuros, de la misma idea).
 */
import { cn } from "@/lib/utils";

export function StatCard({
  value,
  label,
  tone = "light",
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1",
        tone === "light"
          ? "border-slate-200 bg-white shadow-sm hover:shadow-md"
          : "border-transparent bg-brand-dark shadow-lg"
      )}
    >
      <span
        className={cn(
          "font-display text-4xl font-black md:text-5xl",
          tone === "light" ? "text-brand-blue" : "text-brand-orange"
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "mt-2 text-xs font-bold uppercase tracking-widest",
          tone === "light" ? "text-slate-500" : "text-white/90"
        )}
      >
        {label}
      </span>
    </div>
  );
}
