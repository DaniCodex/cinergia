import Image from "next/image";
import { Button, Container, Reveal, SectionHeading } from "@/components/ui";
import { PARTNERS } from "@/lib/data/partners";

export function PartnersSection() {
  return (
    <section aria-label="Partners y llamado a la acción" className="overflow-hidden py-16">
      <Container>
        {/* === PARTNERS === */}
        <div className="mb-24 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
          <Reveal className="relative h-[250px] w-[200px] shrink-0 md:h-[300px] md:w-[250px]">
            <Image src="/nosotros/COOPER1.png" alt="Mascota de CINERGIA junto a los partners" fill sizes="250px" className="object-contain" />
          </Reveal>

          <Reveal delayMs={75} className="flex w-full max-w-3xl flex-col items-center gap-6 md:items-end">
            <div className="flex flex-wrap justify-center gap-4 md:justify-end md:gap-6">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="relative h-24 w-24 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm md:h-32 md:w-32"
                >
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain p-2" sizes="128px" />
                </div>
              ))}
            </div>
            <SectionHeading title="Nuestros Partners" align="center" className="w-full md:text-right" />
          </Reveal>
        </div>

        {/* === CTA FINAL ===
            El original dejaba este bloque vacío (solo la mascota, sin botón
            ni texto de invitación), a pesar del comentario en el código que
            indicaba que debía tener un CTA. Se completa acá. */}
        <Reveal className="flex flex-col items-center text-center">
          <div className="relative h-[280px] w-[280px] md:h-[420px] md:w-[420px]">
            <Image src="/nosotros/COOPER2.png" alt="Mascota de CINERGIA invitando a unirse" fill sizes="420px" className="object-contain" />
          </div>
          <h2 className="mt-2 font-display text-3xl font-black uppercase text-brand-dark md:text-4xl">
            ¿Qué esperas, inge?
          </h2>
          <p className="mt-3 max-w-md text-slate-600">
            Súmate a la comunidad estudiantil de ingenierías más activa de UCSUR.
          </p>
          <Button href="/unete" size="lg" className="mt-8">
            Únete a CINERGIA →
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
