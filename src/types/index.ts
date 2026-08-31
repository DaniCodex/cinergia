/**
 * types/index.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Este archivo centraliza todos los "contratos" de datos (interfaces
 * y types) que se usan en distintos componentes del sitio de CINERGIA.
 *
 * POR QUÉ ESTO ES MEJOR:
 * Antes, cada componente definía sus propios arrays de datos "sueltos"
 * (ej. `const slides = [...]` dentro de Header.tsx) sin ningún tipo
 * explícito. Eso funciona, pero tiene riesgos:
 *   1. Si alguien agrega un objeto al array y olvida una propiedad
 *      (ej. el `alt` de una imagen), TypeScript no lo detecta.
 *   2. Los mismos "shapes" de datos (ej. una noticia) se repetían en
 *      varios archivos sin relación entre sí.
 *   3. No hay una única fuente de verdad para saber qué campos tiene
 *      cada entidad del contenido (evento, testimonio, proyecto, etc).
 *
 * Centralizar los tipos aquí significa que:
 *   - `lib/data/*.ts` (los datos reales) se validan contra estos tipos.
 *   - Los componentes reciben props tipadas y explícitas.
 *   - Si mañana se agrega un campo (ej. "video" a un evento), TypeScript
 *     avisa en TODOS los lugares que falten actualizarse.
 * ─────────────────────────────────────────────────────────────────────────
 */

/** Un enlace de navegación (usado en Navbar y Footer). */
export interface NavLink {
  /** Texto visible del enlace. */
  label: string;
  /** Ruta interna de Next.js (ej. "/nosotros"). */
  href: string;
}

/** Un enlace a una red social, con su ícono representado como clave. */
export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "tiktok" | "facebook" | "whatsapp";
}

/** Una diapositiva del carrusel principal (Hero) de la home. */
export interface HeroSlide {
  id: number;
  /** Ruta de la imagen de fondo, relativa a /public. */
  image: string;
  /** Texto pequeño en mayúsculas arriba del título (categoría/contexto). */
  eyebrow: string;
  /** Primera línea del título, en color blanco. */
  titleWhite: string;
  /** Segunda línea del título, en color de acento (naranja). */
  titleAccent: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

/** Una métrica destacada (ej. "14 eventos"). */
export interface Metric {
  id: number;
  /** Valor a mostrar, como string para permitir prefijos como "+450". */
  value: string;
  label: string;
}

/** Categorías usadas para clasificar noticias / eventos. */
export type NewsCategory = "Visita" | "Charla" | "Competencia" | "Taller" | "Comunidad";

/** Una noticia o evento (pasado o próximo) de CINERGIA. */
export interface NewsItem {
  id: number;
  image: string;
  category: NewsCategory;
  /** Fecha en formato ISO (YYYY-MM-DD) para poder ordenar y formatear. */
  date: string;
  title: string;
  /** Breve descripción opcional, usada en /eventos. */
  description?: string;
  /** Si es false, el evento se muestra en la sección "Próximos". */
  isPast?: boolean;
}

/** Un testimonio institucional (autoridad, aliado, etc). */
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  quote: string;
  image: string;
  linkedin?: string;
}

/** Áreas/categorías usadas para filtrar proyectos. */
export type ProjectArea =
  | "Datos y BI"
  | "Procesos y Mejora Continua"
  | "Innovación y Transformación Digital"
  | "Investigación Aplicada";

/** Un proyecto estudiantil destacado. */
export interface Project {
  id: number;
  title: string;
  /** true = contenido de ejemplo pendiente de reemplazar por data real. */
  isPlaceholder?: boolean;
  area: ProjectArea;
  summary: string;
  image: string;
  /** Enlace externo opcional (repo, paper, case study). */
  href?: string;
}

/** Un servicio / área de acción de CINERGIA (sección "Impulsa tu carrera"). */
export interface ServiceArea {
  id: number;
  title: string;
  description: string;
  /** Nombre de ícono (ver components/ui/Icon.tsx). */
  icon: "briefcase" | "book" | "users" | "chart" | "target" | "handshake";
}

/** Un valor institucional (ej. "Liderazgo"). */
export interface CoreValue {
  id: number;
  title: string;
  description: string;
}

/** Un partner o aliado institucional. */
export interface Partner {
  id: number;
  name: string;
  logo: string;
}

/** Un miembro del equipo/directiva de CINERGIA. */
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  /** true = contenido de ejemplo pendiente de reemplazar por data real. */
  isPlaceholder?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────
// Formulario de contacto
// ─────────────────────────────────────────────────────────────────────────

/** Los motivos posibles de contacto, usados como <select> en el formulario. */
export type ContactReason =
  | "unirme"
  | "alianza"
  | "prensa"
  | "otro";

/** Forma de los datos que viajan del formulario al API route. */
export interface ContactFormValues {
  name: string;
  email: string;
  reason: ContactReason;
  message: string;
  /** Campo "honeypot" anti-spam: debe llegar vacío. Ver lib/validations/contact.ts */
  company: string;
}

/** Respuesta estándar del API route /api/contact. */
export interface ContactApiResponse {
  success: boolean;
  message: string;
  /** Errores de validación por campo, presentes solo si success = false. */
  fieldErrors?: Partial<Record<keyof ContactFormValues, string[]>>;
}
