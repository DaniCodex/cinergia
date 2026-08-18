/**
 * app/nosotros/page.tsx — Página "Sobre nosotros" (misión, visión,
 * valores, equipo, partners). Refactor de nosotros/page.tsx original:
 * se agregó `metadata` propia (antes esta página no tenía ningún título
 * ni descripción SEO distinta de la home) y la nueva sección de equipo.
 */
import type { Metadata } from "next";
import { MisionVisionSection } from "@/components/sections/nosotros/MisionVisionSection";
import { PartnersSection } from "@/components/sections/nosotros/PartnersSection";
import { Portada } from "@/components/sections/nosotros/Portada";
import { TeamSection } from "@/components/sections/nosotros/TeamSection";
import { ValoresEstadisticasSection } from "@/components/sections/nosotros/ValoresEstadisticasSection";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la misión, visión, valores y estructura organizacional de CINERGIA, la asociación estudiantil de ingenierías de UCSUR.",
};

export default function NosotrosPage() {
  return (
    <>
      <Portada />
      <MisionVisionSection />
      <ValoresEstadisticasSection />
      <TeamSection />
      <PartnersSection />
    </>
  );
}
