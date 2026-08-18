/**
 * lib/data/metrics.ts
 * ─────────────────────────────────────────────────────────────────────────
 * Datos reales (preservados del sitio original) para la sección de
 * métricas de la home. Se corrigió "1 ALIANZAS" → "1 ALIANZA" (concordancia
 * de número), único cambio de contenido; los valores numéricos no se
 * tocaron porque no son verificables desde el código.
 *
 * TODO(Joaquín): actualizar estos números cada ciclo académico.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { Metric } from "@/types";

export const METRICS: Metric[] = [
  { id: 1, value: "14", label: "Eventos" },
  { id: 2, value: "+450", label: "Comunidad estudiantil" },
  { id: 3, value: "15", label: "Recursos" },
  { id: 4, value: "1", label: "Alianza" },
];
