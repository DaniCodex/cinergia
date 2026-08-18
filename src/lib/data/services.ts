/**
 * lib/data/services.ts — Contenido de la página "/impulsa" (Impulsa tu
 * carrera). Deriva directamente de la copy ya existente en el slide 3 del
 * Hero original ("Cursos, bolsa de trabajo y una red de contactos..."),
 * desglosada en tarjetas de servicio concretas.
 */
import type { ServiceArea } from "@/types";

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 1,
    title: "Bolsa de trabajo",
    description: "Prácticas y convocatorias filtradas para estudiantes de ingeniería.",
    icon: "briefcase",
  },
  {
    id: 2,
    title: "Cursos y talleres",
    description: "Formación práctica en herramientas que no siempre entran en la malla curricular.",
    icon: "book",
  },
  {
    id: 3,
    title: "Red de contactos",
    description: "Acceso a una comunidad de +450 estudiantes, egresados y profesionales de industria.",
    icon: "users",
  },
  {
    id: 4,
    title: "Visitas industriales",
    description: "Experiencia directa en plantas y operaciones de empresas como Ferreyros, Gloria y Falabella.",
    icon: "target",
  },
  {
    id: 5,
    title: "Proyectos con impacto",
    description: "Participa en investigación aplicada y proyectos que trascienden el aula.",
    icon: "chart",
  },
  {
    id: 6,
    title: "Mentoría entre pares",
    description: "Acompañamiento de estudiantes de ciclos avanzados a quienes recién empiezan.",
    icon: "handshake",
  },
];
