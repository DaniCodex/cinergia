/**
 * components/sections/home/MetricsSection.tsx
 * Refactor de Metrics.tsx: mismo contenido y layout, ahora usando
 * <StatCard> del sistema de diseño y <Reveal> para la animación de
 * entrada. Es un Server Component (sin "use client"): no necesita
 * interactividad, así que no debe enviar JS al navegador.
 */
import { Container, Reveal } from "@/components/ui";
import { StatCard } from "@/components/ui";
import { METRICS } from "@/lib/data/metrics";

export function MetricsSection() {
  return (
    <section aria-label="Cifras de CINERGIA" className="relative z-10 w-full bg-brand-blue-light/30 py-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, index) => (
            <Reveal key={metric.id} delayMs={index * 75}>
              <StatCard value={metric.value} label={metric.label} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
