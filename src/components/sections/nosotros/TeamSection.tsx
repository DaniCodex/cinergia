/**
 * components/sections/nosotros/TeamSection.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Sección nueva (punto C5 del brief: "Equipo: miembros con roles, si
 * aplica"). No existía nada equivalente en el sitio original.
 *
 * Se muestran los CARGOS de la estructura organizacional, no personas con
 * nombre y foto — ver la nota completa en lib/data/team.ts sobre por qué
 * (no había ninguna fuente verificable de quién ocupa cada cargo hoy, y
 * un sitio institucional no debería mostrar información inventada).
 * ─────────────────────────────────────────────────────────────────────────
 */
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/ui";
import { TEAM_MEMBERS } from "@/lib/data/team";

export function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-brand-blue-light/30 py-16">
      <Container>
        <div id="team-heading">
          <SectionHeading
            eyebrow="Estructura"
            title="Cómo nos organizamos"
            highlight="organizamos"
            description="La directiva de CINERGIA se organiza por áreas de responsabilidad. Cada ciclo, estudiantes de distintas ingenierías rotan por estos cargos."
            className="mb-10"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal key={member.id} delayMs={index * 75}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
                  <Icon name="users" className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-brand-dark">{member.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
