/**
 * lib/data/values.ts — Valores institucionales (nombres reales del sitio
 * original). Se añadió una descripción breve de una línea por valor: son
 * frases de apoyo genéricas y no comprometen ningún hecho verificable, en
 * un tono directo (sin adjetivos vacíos ni lenguaje corporativo).
 */
import type { CoreValue } from "@/types";

export const CORE_VALUES: CoreValue[] = [
  {
    id: 1,
    title: "Liderazgo",
    description: "Estudiantes que toman iniciativa y asumen responsabilidad por los resultados.",
  },
  {
    id: 2,
    title: "Innovación colectiva",
    description: "Las mejores ideas se construyen en equipo, no en aislamiento.",
  },
  {
    id: 3,
    title: "Transparencia",
    description: "Decisiones y resultados abiertos a toda la comunidad estudiantil.",
  },
  {
    id: 4,
    title: "Solidaridad",
    description: "El avance de uno se mide por cuántos más avanzan con él.",
  },
];
