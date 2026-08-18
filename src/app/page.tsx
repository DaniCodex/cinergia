/**
 * app/page.tsx — Página de inicio (ruta "/").
 * Ensambla las secciones de la home en orden. Server Component por
 * defecto: cada sección decide individualmente si necesita "use client"
 * (Hero y NewsSection sí, por su interactividad; Metrics y Testimonials
 * no), así que esta página en sí no envía JS extra al navegador.
 */
import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { MetricsSection } from "@/components/sections/home/MetricsSection";
import { NewsSection } from "@/components/sections/home/NewsSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";

// Metadata específica de la home. `title` queda vacío porque el
// `template` del layout raíz ya arma "CINERGIA · UCSUR" para "/".
export const metadata: Metadata = {
  description:
    "CINERGIA es la asociación estudiantil de ingenierías de la Universidad Científica del Sur (UCSUR). Eventos, proyectos y una comunidad de más de 450 estudiantes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsSection />
      <NewsSection />
      <TestimonialsSection />
    </>
  );
}
