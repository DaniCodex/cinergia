/**
 * components/sections/shared/ServiceCard.tsx — Tarjeta para la página
 * /impulsa (servicios/áreas de CINERGIA, punto C6 del brief).
 */
import { Icon } from "@/components/ui";
import type { ServiceArea } from "@/types";

export function ServiceCard({ service }: { service: ServiceArea }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="font-display text-lg font-bold text-brand-dark">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.description}</p>
    </div>
  );
}
