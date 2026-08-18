"use client";

/**
 * components/sections/ContactForm.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: El formulario de contacto funcional que pide el punto C8/D1 del
 * brief. No existía ningún formulario en el sitio original.
 *
 * DECISIONES DE ACCESIBILIDAD Y UX:
 *   - Cada <input> está asociado a su <label> por `id`/`htmlFor` (no
 *     placeholders usados como si fueran labels, un anti-patrón común de
 *     accesibilidad porque el placeholder desaparece al escribir).
 *   - Los errores de campo usan `aria-invalid` y `aria-describedby`
 *     apuntando al mensaje de error, para que un lector de pantalla
 *     anuncie el error al enfocar el campo.
 *   - El estado de "enviando" deshabilita el botón (evita doble-envío) y
 *     cambia su texto, en vez de solo mostrar un spinner que podría
 *     pasar desapercibido.
 *   - El campo honeypot (`company`) está oculto con las clases `sr-only`
 *     más `tabIndex={-1}` y `autoComplete="off"`: invisible y no
 *     alcanzable por teclado para personas, pero los bots que rellenan
 *     formularios por DOM sí lo completan.
 * ─────────────────────────────────────────────────────────────────────────
 */
import { useContactForm } from "@/hooks/useContactForm";
import { Button, Icon } from "@/components/ui";
import type { ContactReason } from "@/types";

const REASON_OPTIONS: { value: ContactReason; label: string }[] = [
  { value: "unirme", label: "Quiero unirme a CINERGIA" },
  { value: "alianza", label: "Propuesta de alianza / partner" },
  { value: "prensa", label: "Prensa / medios" },
  { value: "otro", label: "Otro" },
];

export function ContactForm() {
  const { values, updateField, handleSubmit, fieldErrors, status, serverMessage } = useContactForm();

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center"
      >
        <Icon name="check-circle" className="h-10 w-10 text-emerald-600" />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-dark">¡Mensaje enviado!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Gracias por escribirnos. El equipo de CINERGIA te responderá pronto a tu correo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot anti-spam: invisible para personas, visible para bots. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">No completar este campo</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => updateField("company", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-brand-dark">
          Nombre completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={(e) => updateField("name", e.target.value)}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        />
        {fieldErrors.name && (
          <p id="name-error" className="mt-1.5 text-xs font-medium text-red-600">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-dark">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={(e) => updateField("email", e.target.value)}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        />
        {fieldErrors.email && (
          <p id="email-error" className="mt-1.5 text-xs font-medium text-red-600">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="reason" className="mb-1.5 block text-sm font-semibold text-brand-dark">
          Motivo de contacto
        </label>
        <select
          id="reason"
          name="reason"
          value={values.reason}
          onChange={(e) => updateField("reason", e.target.value as ContactReason)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        >
          {REASON_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-dark">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-brand-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1.5 text-xs font-medium text-red-600">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {status === "error" && serverMessage && (
        <div role="alert" className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
          <Icon name="alert-circle" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
          <p className="text-sm text-red-700">{serverMessage}</p>
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}
