"use client"; // Estado local del filtro seleccionado.

/**
 * components/sections/proyectos/ProjectsGrid.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Grid de proyectos con filtro por área (punto C4 del brief: "Proyectos:
 * grid de proyectos destacados con filtros"). Sección completamente nueva
 * — el sitio original no tenía ninguna página de proyectos.
 *
 * El filtrado es 100% client-side (un `.filter()` sobre un array que ya
 * llegó completo desde el servidor). Para la cantidad de proyectos que
 * maneja una asociación estudiantil (decenas, no miles), esto es más
 * simple y más rápido que ir al servidor por cada filtro, y sigue
 * funcionando sin JavaScript en el primer render porque Next.js ya
 * renderizó el grid completo en el servidor (solo el filtrado interactivo
 * requiere JS).
 * ─────────────────────────────────────────────────────────────────────────
 */
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { PROJECTS, PROJECT_AREAS } from "@/lib/data/projects";
import { ProjectCard } from "@/components/sections/shared/ProjectCard";
import { EmptyState } from "@/components/ui";
import type { ProjectArea } from "@/types";

const ALL_FILTER = "Todos" as const;

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectArea | typeof ALL_FILTER>(ALL_FILTER);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_FILTER) return PROJECTS;
    return PROJECTS.filter((project) => project.area === activeFilter);
  }, [activeFilter]);

  const filters: (ProjectArea | typeof ALL_FILTER)[] = [ALL_FILTER, ...PROJECT_AREAS];

  return (
    <div>
      {/* Tabs de filtro */}
      <div role="group" aria-label="Filtrar proyectos por área" className="mb-10 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                isActive
                  ? "bg-brand-blue text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-brand-blue-light"
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <EmptyState
          title="No hay proyectos en esta área todavía"
          description="Prueba con otro filtro o vuelve pronto: se agregan proyectos cada ciclo académico."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
