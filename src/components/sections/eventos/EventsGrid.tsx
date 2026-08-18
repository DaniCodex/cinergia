"use client"; // Estado de la pestaña activa.

/**
 * components/sections/eventos/EventsGrid.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * Página /eventos nueva (el Navbar original ya enlazaba a "/eventos" pero
 * la ruta no existía → 404). Reusa el mismo `NewsCard` y la misma data
 * (`NEWS_ITEMS`) que la vista previa de la home, evitando una segunda
 * fuente de verdad para las noticias.
 *
 * "Próximos" se calcula dinámicamente con `isPastDate()` en vez de un
 * campo fijo `isPast: true/false` en los datos — así la clasificación
 * sigue siendo correcta automáticamente a medida que pasa el tiempo, sin
 * que alguien tenga que ir actualizando el flag a mano cada evento.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { useMemo, useState } from "react";
import { NEWS_ITEMS } from "@/lib/data/news";
import { NewsCard } from "@/components/sections/shared/NewsCard";
import { EmptyState, Button } from "@/components/ui";
import { isPastDate, cn } from "@/lib/utils";

type Tab = "todos" | "proximos" | "pasados";

const TABS: { id: Tab; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "proximos", label: "Próximos" },
  { id: "pasados", label: "Pasados" },
];

export function EventsGrid() {
  const [activeTab, setActiveTab] = useState<Tab>("todos");

  const filteredItems = useMemo(() => {
    if (activeTab === "todos") return NEWS_ITEMS;
    if (activeTab === "proximos") return NEWS_ITEMS.filter((item) => !isPastDate(item.date));
    return NEWS_ITEMS.filter((item) => isPastDate(item.date));
  }, [activeTab]);

  return (
    <div>
      <div role="tablist" aria-label="Filtrar eventos" className="mb-10 flex gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              activeTab === tab.id
                ? "bg-brand-blue text-white"
                : "bg-slate-100 text-slate-600 hover:bg-brand-blue-light"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <EmptyState
          title="Aún no hay eventos programados"
          description="Síguenos en Instagram para enterarte primero de los próximos eventos de CINERGIA."
          action={
            <Button href="https://instagram.com/cinergia.ucsur" external variant="outline" size="sm">
              Ver Instagram
            </Button>
          }
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
