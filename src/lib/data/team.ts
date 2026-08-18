/**
 * lib/data/team.ts
 * ─────────────────────────────────────────────────────────────────────────
 * Estructura organizacional de CINERGIA, mostrada en /nosotros.
 *
 * Se muestran únicamente CARGOS (roles genéricos y estándar en una
 * asociación estudiantil), sin asignar nombres ni fotos de personas
 * reales, porque no hay confirmación en el repo de quién ocupa cada
 * cargo actualmente. Inventar nombres o usar fotos de stock haciéndolas
 * pasar por miembros reales sería engañoso en un sitio institucional.
 *
 * TODO(Joaquín): si quieres mostrar personas (no solo cargos), reemplaza
 * `name` por el nombre real, agrega `image` (foto real) y quita
 * `isPlaceholder`. El componente TeamSection ya soporta ambos casos.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { TeamMember } from "@/types";

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: "Presidencia", role: "Dirección general y representación institucional", image: "", isPlaceholder: true },
  { id: 2, name: "Dirección de Proyectos", role: "Investigación aplicada y alianzas con industria", image: "", isPlaceholder: true },
  { id: 3, name: "Dirección de Comunicaciones", role: "Contenido, redes y relación con la comunidad", image: "", isPlaceholder: true },
  { id: 4, name: "Tesorería", role: "Gestión de recursos y logística de eventos", image: "", isPlaceholder: true },
];
