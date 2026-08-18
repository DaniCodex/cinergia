import Image from "next/image";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { CORE_VALUES } from "@/lib/data/values";

export function ValoresEstadisticasSection() {
  return (
    <section aria-label="Valores y estadísticas de CINERGIA" className="pb-16">
      {/* === NUESTROS VALORES === */}
      <div className="mb-16">
        <Container>
          <SectionHeading title="Nuestros Valores" highlight="Valores" align="center" className="mb-8" />
        </Container>

        <div className="relative h-[300px] w-full md:h-[450px]">
          <Image
            src="/nosotros/N8.jpeg"
            alt="Equipo de CINERGIA en un evento institucional"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>

        <Container>
          <div className="relative z-10 -mt-8 md:-mt-12">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {CORE_VALUES.map((value, index) => (
                <Reveal key={value.id} delayMs={index * 75}>
                  <div className="flex h-24 flex-col items-center justify-center rounded-xl bg-brand-dark p-4 text-center shadow-lg md:h-28 md:rounded-2xl">
                    <span className="text-sm font-black leading-tight text-white md:text-base">
                      {value.title.toUpperCase()}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Descripciones de cada valor, debajo de las tarjetas (contenido
                nuevo respecto al original, que solo tenía las 4 etiquetas sin
                explicación alguna). */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CORE_VALUES.map((value) => (
                <p key={value.id} className="text-center text-sm text-slate-500 sm:text-left">
                  {value.description}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* === ESTADÍSTICAS === */}
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <Reveal className="relative h-[350px] w-full md:h-auto md:min-h-[400px]">
            <Image
              src="/nosotros/N9.jpeg"
              alt="Certificado institucional de CINERGIA"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-[2rem] object-cover"
            />
          </Reveal>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <Reveal delayMs={75}>
                <div className="flex h-[180px] flex-col items-center justify-center rounded-[2rem] bg-brand-dark p-6 text-center shadow-lg">
                  <span className="font-display text-4xl font-black text-brand-orange md:text-5xl">
                    +500
                  </span>
                  <span className="mt-2 text-sm font-bold leading-tight text-white md:text-base">
                    Comunidad
                    <br />
                    estudiantil
                  </span>
                </div>
              </Reveal>

              <Reveal delayMs={150}>
                <div className="flex h-[180px] flex-col items-center justify-center rounded-[2rem] bg-brand-dark p-6 text-center shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-4xl font-black text-brand-orange md:text-5xl">
                      +15
                    </span>
                    <span className="text-left text-xs font-bold leading-tight text-white md:text-sm">
                      Charlas
                      <br />
                      Visitas
                      <br />
                      Jornadas
                    </span>
                  </div>
                  <span className="mt-3 text-xs font-bold text-white">2025-2</span>
                </div>
              </Reveal>
            </div>

            <Reveal delayMs={225} className="relative min-h-[200px] flex-grow">
              <Image
                src="/nosotros/N10.jpeg"
                alt="Visita técnica de estudiantes de CINERGIA"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-[2rem] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
