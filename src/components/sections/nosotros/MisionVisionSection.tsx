/**
 * components/sections/nosotros/MisionVisionSection.tsx
 * Refactor de MisionVision.tsx: mismo grid asimétrico de imágenes y el
 * mismo copy real de misión/visión, con tokens de marca en vez de hex.
 */
import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

export function MisionVisionSection() {
  return (
    <section aria-label="Misión y visión de CINERGIA" className="py-16">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {/* === FILA 1: MISIÓN === */}
          <Reveal className="order-1 flex flex-col justify-center pr-0 text-right md:pr-4">
            <h2 className="mb-4 font-display text-4xl font-black uppercase text-brand-dark md:text-5xl">
              Misión
            </h2>
            <p className="text-lg font-bold leading-snug text-brand-dark">
              Desarrollar estudiantes capaces de aplicar lo que aprenden a contextos reales y
              conectarlos con el mundo laboral a través de eventos, proyectos y experiencias
              prácticas.
            </p>
          </Reveal>

          <Reveal delayMs={75} className="relative order-2 h-[300px] w-full md:h-[380px]">
            <Image
              src="/nosotros/N5.png"
              alt="Estudiantes de CINERGIA revisando un panel de trabajo"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-[2rem] object-cover"
            />
          </Reveal>

          <Reveal delayMs={150} className="relative order-3 h-[300px] w-full md:h-[380px]">
            <Image
              src="/nosotros/N6.jpeg"
              alt="Estudiantes de CINERGIA en una visita industrial"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-[2rem] object-cover"
            />
          </Reveal>

          {/* === FILA 2: VISIÓN === */}
          <Reveal className="relative order-4 h-[250px] w-full md:col-span-2 md:h-[380px]">
            <Image
              src="/nosotros/N7.png"
              alt="Foto grupal de la comunidad CINERGIA"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="rounded-[2rem] object-cover object-center"
            />
          </Reveal>

          <Reveal delayMs={75} className="order-5 flex flex-col justify-center pl-0 text-left md:pl-4">
            <h2 className="mb-4 font-display text-4xl font-black uppercase text-brand-dark md:text-5xl">
              Visión
            </h2>
            <p className="text-lg font-bold leading-snug text-brand-dark md:text-xl">
              Ser la comunidad universitaria referente en la formación práctica de ingenieros que
              aportan valor.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
