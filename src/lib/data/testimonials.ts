/**
 * lib/data/testimonials.ts
 * ─────────────────────────────────────────────────────────────────────────
 * Testimonios institucionales reales. Se preservan nombres, cargos e
 * imágenes originales. Se corrigió la ruta "/sandra.jpg" → "/Sandra.jpg"
 * (bug de mayúsculas, ver nota en el resumen de cambios).
 *
 * ⚠️ El testimonio de Zurita en el sitio original era el placeholder
 * literal "Cita de Zurita" (no una cita real). NO se inventó una cita para
 * reemplazarlo — poner palabras falsas en boca de una persona real sería
 * una falta de precisión grave para un sitio institucional. Se deja
 * marcado con TODO explícito.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { Testimonial } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Hernando Zurita Calderón",
    role: "Decano de las Carreras de Ingeniería",
    organization: "Universidad Científica del Sur",
    // TODO(Joaquín): reemplazar por la cita real y autorizada por Zurita. No usar texto de relleno en producción.
    quote: "[Pendiente: cita real pendiente de confirmación con el Decano].",
    image: "/zurita.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Sandra Flores Ganoza",
    role: "Directora de las Carreras de Ingeniería",
    organization: "Universidad Científica del Sur",
    quote:
      "Iniciativas estudiantiles como Cinergia enriquecen la formación universitaria al crear espacios donde los estudiantes pueden participar, colaborar y acceder a nuevas oportunidades más allá del aula. Al impulsar becas, cursos y actividades lideradas por ellos mismos, se fortalece el liderazgo, la innovación y una visión más amplia de su desarrollo profesional.",
    image: "/Sandra.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Elmer Pisfil Languasco",
    role: "Gerente de Proyectos en ASESUME S.A.C.",
    organization: "Universidad Científica del Sur",
    quote:
      "Estimo que lo primero y lo más significativo es que un excelente equipo de estudiantes esté dispuesto a invertir tiempo con un solo objetivo: ayudar a otros estudiantes a subir los primeros escalones hacia la obtención del mejor grado académico: Ingeniero.",
    image: "/Pisfil.png",
    linkedin: "https://linkedin.com",
  },
];
