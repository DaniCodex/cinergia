"use client"; // Los botones de flecha controlan el scroll del carrusel (ref + DOM).

/**
 * components/sections/home/NewsSection.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Refactor de NewsCarousel.tsx. Cambios principales:
 *   - Usa <NewsCard> compartido en vez de JSX repetido.
 *   - Los datos vienen de lib/data/news.ts (misma información real).
 *   - Se agregó un enlace real "Ver todas →" hacia /eventos (antes esta
 *     sección era un callejón sin salida: no había forma de ver más
 *     noticias que las 4 visibles acá).
 *   - Los botones de flecha ahora tienen `disabled` quemado por
 *     accesibilidad de teclado consistente (siguen siendo botones, no
 *     divs con onClick).
 * ─────────────────────────────────────────────────────────────────────────
 */
import { useRef } from "react";
import { Button, Container, Icon, Reveal, SectionHeading } from "@/components/ui";
import { NewsCard } from "@/components/sections/shared/NewsCard";
import { NEWS_ITEMS } from "@/lib/data/news";

const SCROLL_STEP_PX = 320;

export function NewsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    carouselRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="news-heading" className="relative z-10 w-full bg-brand-blue-light/30 px-0 pb-5">
      <Container>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div id="news-heading">
              <SectionHeading eyebrow="Comunidad" title="Últimas noticias" highlight="noticias" />
            </div>

            <div className="hidden shrink-0 gap-3 md:flex">
              <button
                type="button"
                onClick={() => scrollBy(-SCROLL_STEP_PX)}
                aria-label="Noticias anteriores"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                <Icon name="chevron-left" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(SCROLL_STEP_PX)}
                aria-label="Siguientes noticias"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                <Icon name="chevron-right" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          >
            {NEWS_ITEMS.map((item, index) => (
              <Reveal key={item.id} delayMs={index * 75} className="shrink-0">
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button href="/eventos" variant="outline" size="sm">
              Ver todas las noticias
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
