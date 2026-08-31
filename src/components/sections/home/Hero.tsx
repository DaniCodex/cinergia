"use client"; // Carrusel con estado (slide actual) y temporizador.

/**
 * components/sections/home/Hero.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ CAMBIÓ respecto a Header.tsx:
 *   - Los datos de los slides ahora viven en lib/data/hero.ts (mismo copy
 *     real), separando CONTENIDO de PRESENTACIÓN.
 *   - El CTA de cada slide ahora es un <Link> real con destino (antes era
 *     un <button> decorativo que no navegaba a ningún lado).
 *   - `priority` en next/image solo se aplica a la PRIMERA imagen (la que
 *     realmente es visible al cargar la página / afecta el LCP). Las
 *     demás usan carga normal, porque están ocultas (opacity-0) al
 *     cargar — cargarlas con prioridad desperdiciaría ancho de banda en
 *     el primer render (mejora de performance, punto A6 del brief).
 *   - Se agregó `role="region"` + `aria-roledescription="carrusel"` y
 *     `aria-label` en los controles, para que el carrusel sea entendible
 *     con lectores de pantalla (antes los puntos de navegación no
 *     comunicaban que eran parte de un carrusel).
 * ─────────────────────────────────────────────────────────────────────────
 */
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { HERO_SLIDES } from "@/lib/data/hero";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 7000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      role="region"
      aria-roledescription="carrusel"
      aria-label="Presentación de CINERGIA"
      className="relative flex h-screen w-full items-center overflow-hidden bg-brand-dark"
    >
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            // `inert` (soportado nativamente desde React 19) saca del slide
            // inactivo tanto el foco por teclado como los clics, sin tener
            // que propagar manualmente tabIndex=-1 a cada botón/enlace
            // interno. Es la forma moderna y correcta de "ocultar de verdad"
            // contenido duplicado en un carrusel para tecnología asistiva.
            inert={!isActive}
            className={cn(
              "absolute inset-0 flex h-full w-full items-center",
              isActive
                ? "z-20 opacity-100 transition-opacity duration-[2000ms] ease-in-out"
                : "z-10 opacity-0 transition-opacity delay-[1500ms] duration-[2000ms] pointer-events-none"
            )}
          >
            {/* Imagen de fondo con efecto "zoom" lento (Ken Burns) */}
            <div
              className={cn(
                "absolute inset-0 h-full w-full transition-transform duration-[5000ms] ease-linear",
                isActive ? "scale-100" : "scale-105"
              )}
            >
              <Image
                src={slide.image}
                alt="" // Decorativa: el contenido equivalente ya está en el texto del slide.
                fill
                className="object-cover object-center"
                priority={index === 0}
                quality={90}
                sizes="100vw"
              />
            </div>

            {/* Overlay degradado para asegurar contraste de texto (WCAG) sobre cualquier foto */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent" />

            {/* Contenido de texto */}
            <div className="relative z-30 mx-auto mt-20 w-full px-6 md:px-12 lg:px-16">
              <div className="max-w-2xl text-left">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-0.5 w-10 bg-brand-orange" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange md:text-sm">
                    {slide.eyebrow}
                  </span>
                </div>

                <h1 className="mb-6 flex flex-col gap-1 leading-tight">
                  <span className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
                    {slide.titleWhite}
                  </span>
                  <span className="text-4xl font-extrabold text-brand-orange drop-shadow-md">
                    {slide.titleAccent}
                  </span>
                </h1>

                <p className="mb-10 max-w-lg text-lg font-medium leading-relaxed text-slate-200 md:text-xl">
                  {slide.description}
                </p>

                <Button href={slide.ctaHref} variant="primary" size="lg">
                  {slide.ctaLabel} →
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Indicadores / controles del carrusel */}
      <div className="absolute bottom-10 right-10 z-40 flex gap-3 md:right-20">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}: ${slide.titleWhite} ${slide.titleAccent}`}
            aria-current={index === currentSlide ? "true" : undefined}
            className={cn(
              "cursor-pointer rounded-full transition-all duration-300",
              index === currentSlide ? "h-2 w-8 bg-brand-orange" : "h-2 w-2 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </header>
  );
}
