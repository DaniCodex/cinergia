/**
 * lib/data/partners.ts — Logos de partners/alianzas ya presentes en
 * /public/nosotros. Los nombres se infieren directamente del nombre de
 * archivo original; no se inventó ninguna alianza nueva.
 * TODO(Joaquín): confirmar el nombre completo y correcto de cada partner.
 */
import type { Partner } from "@/types";

export const PARTNERS: Partner[] = [
  { id: 1, name: "Lead UCSUR", logo: "/nosotros/1-lead-UCSUR.jpg" },
  { id: 2, name: "Electrónica UCSUR", logo: "/nosotros/ELECTRONICA.jpg" },
  { id: 3, name: "AIESEC", logo: "/nosotros/3-AIESEC.jpg" },
  { id: 4, name: "Núcleo", logo: "/nosotros/4-NUCLEO.jpg" },
];
