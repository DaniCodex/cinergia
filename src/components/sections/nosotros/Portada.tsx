/**
 * components/sections/nosotros/Portada.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Refactor de PortadaNosotros.tsx. Mismo contenido e imágenes reales;
 * cambios: tokens de color de marca en vez de hex sueltos ("#2b4279" →
 * `bg-brand-dark`), `<h1>` real usando la fuente display, y `Reveal` para
 * animación de entrada consistente con el resto del sitio.
 * ─────────────────────────────────────────────────────────────────────────
 */
import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const CARRERAS = [
  "Ing. Empresarial y de Sistemas",
  "Ing. Industrial",
  "Ing. IA y Ciencia de Datos",
  "Ing. de Software",
];

export function Portada() {
  return (
    <section aria-labelledby="portada-heading" className="pt-32">
      <div className="relative mb-12 h-[45vh] w-full overflow-hidden md:h-[60vh]">
        <Image
          src="/nosotros/1.png"
          alt="Comunidad CINERGIA reunida en un evento"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <Container>
        <Reveal>
          <h1
            id="portada-heading"
            className="mb-8 font-display text-4xl font-bold uppercase leading-[1.1] text-brand-dark md:text-5xl"
          >
            Cruza la meta
            <br />
            dejando huella
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <Reveal className="relative h-[400px] w-full md:h-[550px]">
            <Image
              src="/nosotros/almacen.jpeg"
              alt="Estudiantes de CINERGIA en visita a un almacén industrial"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-[2rem] object-cover"
            />
          </Reveal>

          <Reveal delayMs={100} className="flex flex-col gap-6">
            <div className="relative h-[250px] w-full md:h-[350px]">
              <Image
                src="/nosotros/grupo-estudiantes.jpeg"
                alt="Grupo de estudiantes miembros de CINERGIA"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-[2rem] object-cover"
              />
            </div>
            <p className="pr-4 text-2xl font-bold leading-snug text-brand-dark md:text-3xl">
              Asociación de estudiantes de ingenierías de la Universidad Científica del Sur.
            </p>
          </Reveal>
        </div>

        <Reveal
          delayMs={150}
          className="mt-20 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12"
        >
          <ul className="flex w-full flex-col gap-4 md:w-auto" aria-label="Carreras representadas en CINERGIA">
            {CARRERAS.slice(0, 2).map((carrera) => (
              <li
                key={carrera}
                className="whitespace-nowrap rounded-full bg-brand-dark px-8 py-3 text-center font-bold text-white shadow-md"
              >
                {carrera}
              </li>
            ))}
          </ul>

          <div className="relative z-0 h-[300px] w-[300px] shrink-0 md:h-[350px] md:w-[350px]">
            <Image
              src="/nosotros/mascota.png"
              alt="Mascota de CINERGIA"
              fill
              sizes="350px"
              className="object-contain"
            />
          </div>

          <ul className="flex w-full flex-col gap-4 md:w-auto" aria-label="Más carreras representadas en CINERGIA">
            {CARRERAS.slice(2).map((carrera) => (
              <li
                key={carrera}
                className="whitespace-nowrap rounded-full bg-brand-dark px-8 py-3 text-center font-bold text-white shadow-md"
              >
                {carrera}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
