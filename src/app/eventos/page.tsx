import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import { EventsGrid } from "@/components/sections/eventos/EventsGrid";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Charlas, visitas industriales y competencias organizadas por CINERGIA para estudiantes de ingeniería de UCSUR.",
};

export default function EventosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Comunidad"
        title="Eventos"
        description="Visitas industriales, charlas y competencias que van más allá del aula."
      />
      <Container className="py-16">
        <EventsGrid />
      </Container>
    </>
  );
}
