/**
 * app/proyectos/page.tsx — Página nueva (no existía en el sitio
 * original, aunque el Navbar ya enlazaba a "/proyectos" y daba 404).
 */
import type { Metadata } from "next";
import { Container, Badge } from "@/components/ui";
import { PageHeader } from "@/components/ui";
import { ProjectsGrid } from "@/components/sections/proyectos/ProjectsGrid";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de investigación aplicada y transformación digital desarrollados por estudiantes de CINERGIA.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investigación aplicada"
        title="Proyectos"
        description="De la idea al impacto real: proyectos que trascienden el aula y generan valor para la industria y la sociedad."
      />
      <Container className="py-16">
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <Badge tone="warning">Nota</Badge>
          <p className="text-sm text-amber-800">
            Las tarjetas marcadas como <strong>&quot;Ejemplo&quot;</strong> son contenido de
            muestra para probar el diseño del grid y el filtro. Reemplázalas con los proyectos
            reales de CINERGIA en <code className="rounded bg-amber-100 px-1">lib/data/projects.ts</code>.
          </p>
        </div>
        <ProjectsGrid />
      </Container>
    </>
  );
}
