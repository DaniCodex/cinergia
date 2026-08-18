/**
 * app/impulsa/page.tsx — Página nueva "Impulsa tu carrera" (servicios de
 * CINERGIA, punto C6 del brief). Server Component: el grid es estático,
 * no necesita interactividad, así que no se envía JS extra al navegador.
 */
import type { Metadata } from "next";
import { Button, Container, PageHeader } from "@/components/ui";
import { ServiceCard } from "@/components/sections/shared/ServiceCard";
import { SERVICE_AREAS } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Impulsa tu carrera",
  description:
    "Cursos, bolsa de trabajo, mentoría y una red de contactos que te abre puertas desde el primer ciclo de ingeniería en UCSUR.",
};

export default function ImpulsaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formación · Comunidad"
        title="Impulsa tu carrera"
        description="Cursos, bolsa de trabajo y una red de contactos que te abre puertas desde el primer ciclo de ingeniería."
      />
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center rounded-2xl bg-brand-blue-light/40 px-6 py-12 text-center">
          <h2 className="font-display text-2xl font-bold text-brand-dark">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-2 max-w-md text-slate-600">
            Únete a CINERGIA y accede a todas estas oportunidades desde tu primer ciclo.
          </p>
          <Button href="/unete" size="lg" className="mt-6">
            Únete a CINERGIA →
          </Button>
        </div>
      </Container>
    </>
  );
}
