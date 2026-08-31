/**
 * lib/data/news.ts
 * ─────────────────────────────────────────────────────────────────────────
 * Noticias / eventos de CINERGIA. Es la MISMA información real que ya
 * existía en NewsCarousel.tsx — solo se migró de fechas "DD/MM/AAAA" a
 * formato ISO ("AAAA-MM-DD") porque ISO es ordenable como string y evita
 * ambigüedad (¿07/02 es 7 de febrero o 2 de julio?). También se le agregó
 * `category` tipada en vez de un string libre, para poder filtrar.
 *
 * Esta misma data alimenta tanto la vista previa en la home (NewsSection)
 * como la página completa /eventos.
 *
 * ⚠️ No se inventaron eventos nuevos: si no hay eventos "próximos" reales,
 * /eventos muestra un estado vacío honesto en vez de datos ficticios.
 * TODO(Joaquín): agregar aquí los próximos eventos confirmados.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { NewsItem } from "@/types";

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    image: "/noticia.visita.gloria.jpg",
    category: "Visita",
    date: "2026-03-01",
    title: "Visita Industrial Gloria",
  },
  {
    id: 2,
    image: "/sql.saturday.jpg",
    category: "Charla",
    date: "2026-02-07",
    title: "SQL Saturday Lima 2026",
  },
  {
    id: 3,
    image: "/noticia.asistencia.ia.battle.jpg",
    category: "Competencia",
    date: "2026-01-15",
    title: "Científica AI Battle 2026",
  },
  {
    id: 4,
    image: "/cronograma1.jpg",
    category: "Charla",
    date: "2026-01-05",
    title: "Cronograma SQL Saturday Lima 2026",
  },
];
