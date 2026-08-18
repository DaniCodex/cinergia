/**
 * lib/data/hero.ts — Slides del Hero de la home. Es el mismo copy real que
 * ya existía en Header.tsx (no se inventó texto nuevo). Se agregó
 * `ctaHref` para que los botones, que antes no hacían nada (<button> sin
 * acción), ahora lleven a la página correspondiente y real del sitio.
 */
import type { HeroSlide } from "@/types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/fondo.cinergia.inicio.jpg",
    eyebrow: "Asociación Estudiantil · UCSUR",
    titleWhite: "Cruza la meta",
    titleAccent: "dejando huella",
    description:
      "Comunidad estudiantil de ingenierías que conecta talento con proyectos reales, investigación aplicada e industria.",
    ctaLabel: "Conoce CINERGIA",
    ctaHref: "/nosotros",
  },
  {
    id: 2,
    image: "/falabella.png",
    eyebrow: "Eventos · 2025–2026",
    titleWhite: "Visitas industriales",
    titleAccent: "que transforman",
    description:
      "Accede a las mejores industrias del Perú: Ferreyros, Gloria, Falabella y más. Experiencias que van más allá del aula.",
    ctaLabel: "Ver eventos",
    ctaHref: "/eventos",
  },
  {
    id: 3,
    image: "/talks1.jpg",
    eyebrow: "Formación · Comunidad",
    titleWhite: "Impulsa tu",
    titleAccent: "carrera",
    description:
      "Cursos, bolsa de trabajo y una red de contactos que te abre puertas desde el primer ciclo de ingeniería.",
    ctaLabel: "Explorar oportunidades",
    ctaHref: "/impulsa",
  },
  {
    id: 4,
    image: "/recofacu.jpg",
    eyebrow: "Proyectos · Investigación",
    titleWhite: "De la idea",
    titleAccent: "al impacto real",
    description:
      "Investigaciones aplicadas, papers y proyectos que trascienden el aula y generan valor para la industria y la sociedad.",
    ctaLabel: "Ver proyectos",
    ctaHref: "/proyectos",
  },
];
