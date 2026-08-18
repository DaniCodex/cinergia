"use client";

/**
 * hooks/useScrolled.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Devuelve `true` cuando el usuario hizo scroll más allá de un umbral
 * (por defecto, la altura de la ventana). Se usa en el Navbar para saber
 * cuándo cambiar de "transparente sobre el Hero" a "sólido con sombra".
 *
 * POR QUÉ ESTO ES MEJOR:
 * La lógica de `window.addEventListener("scroll", ...)` vivía inline
 * dentro de Navbar.tsx. Extraerla a un hook:
 *   1. Permite reusarla en otros componentes si hace falta (ej. un botón
 *      "volver arriba" que aparece al hacer scroll).
 *   2. Aísla el efecto secundario (listener del DOM) del componente
 *      visual, que es más fácil de leer y testear.
 *   3. Se agrega un `passive: true` al listener, una optimización de
 *      performance que evita que el navegador bloquee el scroll
 *      esperando a que el listener termine de ejecutarse.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { useEffect, useState } from "react";

export function useScrolled(thresholdPx?: number): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Si no se pasa un umbral fijo, usamos la altura de la ventana
    // (mismo comportamiento que tenía el Navbar original: cambia de
    // estilo cuando el Hero de pantalla completa queda atrás).
    const threshold = thresholdPx ?? window.innerHeight;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll(); // Estado inicial correcto si la página ya carga con scroll (ej. al recargar).
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [thresholdPx]);

  return isScrolled;
}
