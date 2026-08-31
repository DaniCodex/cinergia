/**
 * components/sections/home/TestimonialsSection.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ CAMBIÓ respecto a Testimonials.tsx:
 *   1. Se eliminaron las flechas y los puntos de "paginación" del final:
 *      en el componente original no tenían ningún `onClick` ni cambiaban
 *      nada al hacer clic — eran controles falsos. Con solo 3 testimonios
 *      que ya caben en una grilla de 3 columnas, no hace falta paginar
 *      nada; se prefiere quitar el control roto a dejar una interfaz que
 *      finge ser interactiva.
 *   2. Es Server Component (sin "use client"): no había ninguna razón
 *      real para que este componente enviara JavaScript al navegador.
 *   3. El ícono de LinkedIn ahora es opcional (`testimonial.linkedin`),
 *      así el componente no rompe si algún testimonio no tiene ese dato.
 * ─────────────────────────────────────────────────────────────────────────
 */
import Image from "next/image";
import { Container, Reveal, SectionHeading, Icon } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="w-full bg-brand-blue-light/30 py-16">
      <Container>
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div id="testimonials-heading" className="mb-10">
            <SectionHeading title="Respaldo Institucional" highlight="Institucional" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => {
              // El placeholder original ("Cita de Zurita") se reemplazó por un
              // TODO explícito en lib/data/testimonials.ts. Lo detectamos acá
              // para darle un estilo visual distinto (itálica + gris tenue)
              // y que sea obvio, incluso sin leer el código, que ese testimonio
              // todavía no tiene contenido real antes de publicar.
              const isPlaceholderQuote = testimonial.quote.startsWith("[Pendiente");
              return (
                <Reveal key={testimonial.id} delayMs={index * 100}>
                  <figure className="relative flex h-full flex-col items-center rounded-2xl border border-slate-100 bg-brand-blue-light/20 p-8 text-center">
                    {testimonial.linkedin && (
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Perfil de LinkedIn de ${testimonial.name}`}
                        className="absolute right-5 top-5 rounded-md bg-brand-blue-light p-1.5 text-brand-blue transition-colors hover:bg-brand-blue/20"
                      >
                        <Icon name="linkedin" className="h-4 w-4" />
                      </a>
                    )}

                    <div className="relative mb-5 h-24 w-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>

                    <figcaption>
                      <p className="mb-1 text-base font-bold text-brand-dark md:text-lg">{testimonial.name}</p>
                      <p className="mb-0.5 text-xs text-slate-500 md:text-xs">{testimonial.role}</p>
                      <p className="mb-6 text-xs text-slate-400">{testimonial.organization}</p>
                    </figcaption>

                    <blockquote
                      className={cn(
                        "text-[13px] leading-relaxed md:text-sm",
                        isPlaceholderQuote ? "italic text-slate-400" : "text-slate-700"
                      )}
                    >
                      {testimonial.quote}
                    </blockquote>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
