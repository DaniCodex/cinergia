/**
 * components/sections/shared/NewsCard.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Tarjeta individual de noticia/evento. Antes vivía "en línea" dentro del
 * .map() de NewsCarousel.tsx (más de 30 líneas de JSX repetidas ahí
 * mismo). Extraerla a su propio componente permite reusarla en /eventos
 * sin duplicar el markup, y hace que NewsSection.tsx sea legible de un
 * vistazo (un simple .map con esta tarjeta).
 * ─────────────────────────────────────────────────────────────────────────
 */
import Image from "next/image";
import { Badge } from "@/components/ui";
import { formatDateEs } from "@/lib/utils";
import type { NewsItem } from "@/types";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex w-full max-w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
      <div className="relative h-72 w-full overflow-hidden bg-slate-200">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 80vw, 300px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <Badge tone="neutral" className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm">
          {item.category}
        </Badge>
      </div>
      <div className="flex flex-grow flex-col p-5">
        <time dateTime={item.date} className="mb-2 text-xs font-bold text-brand-blue">
          {formatDateEs(item.date)}
        </time>
        <h3 className="font-display text-xl font-bold leading-snug text-brand-dark transition-colors group-hover:text-brand-blue">
          {item.title}
        </h3>
        {item.description && (
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
        )}
      </div>
    </article>
  );
}
