/**
 * lib/data/projects.ts
 * ─────────────────────────────────────────────────────────────────────────
 * ⚠️ CONTENIDO DE EJEMPLO — NO HAY DATA REAL DE PROYECTOS EN EL REPO
 * ORIGINAL. El sitio anterior no tenía ninguna sección de proyectos, así
 * que no existía nada verificable que "migrar".
 *
 * En vez de inventar títulos y descripciones de proyectos reales de
 * CINERGIA (lo cual sería publicar información falsa en un sitio
 * institucional), se dejaron 3 tarjetas de ejemplo con `isPlaceholder:
 * true`. La UI (ver components/ui/Badge y ProjectCard) muestra un aviso
 * visible de "Ejemplo" sobre estas tarjetas para que no se publiquen así
 * por error.
 *
 * TODO(Joaquín): reemplaza este array completo con los proyectos reales
 * (título, área, resumen de 1-2 líneas, imagen en /public, y opcionalmente
 * un link a repo/paper/case study). Una vez tengas la data real, quita
 * `isPlaceholder` de cada entrada.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nombre del proyecto (ejemplo)",
    isPlaceholder: true,
    area: "Datos y BI",
    summary: "Resumen breve de una a dos líneas sobre el problema y el enfoque del proyecto.",
    image: "/case.study.jpg",
  },
  {
    id: 2,
    title: "Nombre del proyecto (ejemplo)",
    isPlaceholder: true,
    area: "Procesos y Mejora Continua",
    summary: "Resumen breve de una a dos líneas sobre el problema y el enfoque del proyecto.",
    image: "/instegra1.png",
  },
  {
    id: 3,
    title: "Nombre del proyecto (ejemplo)",
    isPlaceholder: true,
    area: "Innovación y Transformación Digital",
    summary: "Resumen breve de una a dos líneas sobre el problema y el enfoque del proyecto.",
    image: "/collague.png",
  },
];

/** Lista de áreas únicas, derivada de PROJECTS, usada para armar los filtros. */
export const PROJECT_AREAS = Array.from(new Set(PROJECTS.map((p) => p.area)));
