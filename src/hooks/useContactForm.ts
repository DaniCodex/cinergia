"use client";

/**
 * hooks/useContactForm.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: Toda la lógica del formulario de contacto (estado de los campos,
 * validación en el cliente, estado de envío, manejo de errores) separada
 * del JSX que lo dibuja (components/sections/ContactForm.tsx).
 *
 * POR QUÉ ESTO ES MEJOR:
 * Separar la LÓGICA (este hook) de la PRESENTACIÓN (el componente) es el
 * patrón "container/presentational". Ventajas concretas acá:
 *   - El componente visual queda simple: solo pinta inputs y errores.
 *   - Si mañana se quiere el mismo formulario en un modal (ej. un botón
 *     flotante "Contáctanos"), se reusa el hook sin duplicar lógica.
 *   - Es más fácil de razonar: un solo lugar concentra "qué pasa cuando
 *     el usuario envía el formulario".
 *
 * MANEJO DE ERRORES (punto A8 del brief):
 *   - Valida en el cliente ANTES de enviar (feedback inmediato).
 *   - Si el fetch falla por red (usuario sin internet, servidor caído),
 *     se captura el error y se muestra un mensaje, no un crash.
 *   - Si el servidor responde 4xx (datos inválidos) se muestran los
 *     errores por campo que devuelve el API.
 *   - Si el servidor responde 5xx, se muestra un mensaje genérico sin
 *     exponer detalles internos del servidor al usuario.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { useState, type FormEvent } from "react";
import { contactFormSchema } from "@/lib/validations/contact";
import type { ContactApiResponse, ContactFormValues } from "@/types";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  reason: "unirme",
  message: "",
  company: "", // honeypot, siempre debe quedar vacío
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Limpiamos el error de ESE campo apenas el usuario vuelve a escribir,
    // en vez de esperar a un nuevo submit completo (mejor UX).
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage(null);

    // 1. Validación en el cliente: feedback inmediato sin round-trip al servidor.
    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const errors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        if (!errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      // El API siempre responde JSON, incluso en errores 4xx/5xx,
      // así que podemos parsear la respuesta de forma segura.
      const data = (await response.json()) as ContactApiResponse;

      if (!response.ok || !data.success) {
        setStatus("error");
        setServerMessage(
          data.message || "No pudimos enviar tu mensaje. Inténtalo nuevamente."
        );
        if (data.fieldErrors) {
          const errors: Partial<Record<keyof ContactFormValues, string>> = {};
          for (const [key, messages] of Object.entries(data.fieldErrors)) {
            if (messages?.[0]) errors[key as keyof ContactFormValues] = messages[0];
          }
          setFieldErrors(errors);
        }
        return;
      }

      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch {
      // Error de red (sin conexión, timeout, servidor caído): nunca dejamos
      // que esto rompa la página, mostramos un mensaje claro y accionable.
      setStatus("error");
      setServerMessage(
        "No pudimos conectar con el servidor. Revisa tu conexión e inténtalo de nuevo."
      );
    }
  }

  return { values, updateField, handleSubmit, fieldErrors, status, serverMessage };
}
