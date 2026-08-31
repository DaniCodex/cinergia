"use client";

/**
 * hooks/useInView.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Detecta cuándo un elemento entra en el viewport, usando la API
 * nativa `IntersectionObserver` del navegador (no una librería externa).
 * Es la base de las animaciones "aparece al hacer scroll" que pide el
 * punto D2 del brief.
 *
 * POR QUÉ INTERSECTION OBSERVER Y NO UN LISTENER DE SCROLL:
 * Escuchar el evento "scroll" y calcular manualmente `getBoundingClientRect()`
 * en cada frame es costoso para el navegador (se ejecuta decenas de veces
 * por segundo). `IntersectionObserver` es asíncrono y nativo: el navegador
 * avisa solo cuando realmente cambia la intersección, sin bloquear el
 * hilo principal. Es la forma recomendada por web.dev para este caso.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Porcentaje del elemento que debe ser visible para disparar (0 a 1). */
  threshold?: number;
  /** Si es true, deja de observar después de la primera vez que aparece (ideal para animaciones de entrada, evita reejecutar en cada scroll). */
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.15, triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  // Si el navegador no soporta IntersectionObserver (muy poco probable hoy
  // en día), arrancamos directamente en "visible": la animación es
  // progresiva, no un requisito para ver el contenido. Este valor inicial
  // se calcula en el inicializador de useState (no dentro de un efecto)
  // a propósito: llamar a setState de forma síncrona dentro de un efecto
  // dispara un re-render en cascada innecesario (regla
  // react-hooks/set-state-in-effect) — acá no hace falta ningún efecto
  // para decidir este valor, así que evitamos el patrón por completo.
  const [isInView, setIsInView] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isInView };
}
