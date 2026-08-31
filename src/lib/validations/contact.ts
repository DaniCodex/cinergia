/**
 * lib/validations/contact.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Un único esquema de Zod que define qué es un envío válido del
 * formulario de contacto.
 *
 * POR QUÉ ESTO ES MEJOR:
 * El sitio original no tenía ningún formulario funcional. Al construir uno
 * desde cero, un error común es duplicar las reglas de validación: una
 * versión "a mano" en el componente del formulario (para mostrar errores
 * en la UI) y otra versión distinta en el servidor (para no confiar en el
 * cliente). Si alguien actualiza una y no la otra, quedan inconsistentes.
 *
 * Este archivo se importa TANTO desde el hook `useContactForm` (cliente)
 * COMO desde `app/api/contact/route.ts` (servidor). Una sola fuente de
 * verdad para las reglas de validación.
 *
 * El campo `company` es un "honeypot": es un input invisible para
 * personas (oculto con CSS), pero los bots que llenan formularios
 * automáticamente sí lo completan. Si llega con contenido, se descarta el
 * envío silenciosamente. Es una técnica anti-spam simple que no requiere
 * CAPTCHA ni servicios externos.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre completo.")
    .max(100, "El nombre es demasiado largo."),
  email: z
    .string()
    .trim()
    .min(1, "Ingresa un correo electrónico.")
    .email("Ingresa un correo electrónico válido."),
  reason: z.enum(["unirme", "alianza", "prensa", "otro"], {
    error: "Selecciona un motivo de contacto.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres).")
    .max(2000, "El mensaje es demasiado largo (máximo 2000 caracteres)."),
  // Honeypot: debe llegar vacío. No se muestra en la UI real.
  company: z.string().max(0, "Envío inválido.").optional().default(""),
});

/** Tipo inferido automáticamente del esquema: siempre queda sincronizado con las reglas de arriba. */
export type ContactFormSchema = z.infer<typeof contactFormSchema>;
