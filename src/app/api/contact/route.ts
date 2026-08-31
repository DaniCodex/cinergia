import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import type { ContactApiResponse } from "@/types";

/**
 * app/api/contact/route.ts
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ: El endpoint que recibe el formulario de contacto (punto E2/E3 del
 * brief: validación con Zod + manejo de errores 4xx/5xx). No existía
 * ningún API route en el proyecto original.
 *
 * POR QUÉ SE VALIDA DE NUEVO ACÁ (y no solo en el cliente):
 * La validación del cliente (en `useContactForm`) es solo para dar
 * feedback rápido a una persona usando el formulario normalmente.
 * CUALQUIERA puede mandarle un POST a este endpoint directamente (con
 * curl, Postman, un bot) saltándose completamente el formulario y el
 * JavaScript del navegador. Si el servidor no revalida, no hay ninguna
 * garantía real sobre los datos. Esta es la regla de oro de validación
 * en aplicaciones web: "nunca confíes en el cliente".
 *
 * ⚠️ ESTADO ACTUAL DEL ENVÍO DE CORREO (léelo antes de publicar):
 * Este endpoint valida correctamente el envío y, si está configurada la
 * variable de entorno `RESEND_API_KEY`, intenta enviar el correo usando
 * la API de Resend (https://resend.com, tiene plan gratuito). Si esa
 * variable NO está configurada, el mensaje se registra únicamente en los
 * logs del servidor (visibles en el dashboard de Vercel bajo "Logs"), no
 * llega a ningún correo, y el formulario igual responde con éxito al
 * usuario. Esto es intencional para que el sitio compile y funcione de
 * inmediato sin credenciales, pero significa que NO deberías publicar el
 * sitio en producción sin configurar `RESEND_API_KEY` y `CONTACT_EMAIL_TO`
 * (ver .env.example), o los mensajes de contacto se perderán.
 * ─────────────────────────────────────────────────────────────────────────
 */

/** Envía el correo de notificación vía la API HTTP de Resend (sin SDK adicional). */
async function sendContactEmail(data: {
  name: string;
  email: string;
  reason: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    // Fallback honesto: sin proveedor configurado, dejamos constancia en
    // los logs del servidor en vez de fingir que se envió un correo real.
    console.info("[contacto] Proveedor de correo no configurado. Mensaje recibido:", data);
    return { delivered: false as const };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // TODO(Joaquín): usar un dominio verificado en Resend en vez de este remitente de pruebas.
      from: "CINERGIA Web <onboarding@resend.dev>",
      to: [to],
      reply_to: data.email,
      subject: `[Contacto web] ${data.reason} — ${data.name}`,
      text: `Nombre: ${data.name}\nCorreo: ${data.email}\nMotivo: ${data.reason}\n\nMensaje:\n${data.message}`,
    }),
  });

  if (!response.ok) {
    // No exponemos el detalle del proveedor externo al cliente (podría
    // filtrar información interna); lo dejamos en logs del servidor y
    // lanzamos para que el catch de POST() lo convierta en un 500 genérico.
    const errorBody = await response.text();
    console.error("[contacto] Resend respondió con error:", response.status, errorBody);
    throw new Error("email_provider_failed");
  }

  return { delivered: true as const };
}

export async function POST(request: Request) {
  // 1. El body puede no ser JSON válido (cliente malformado, ataque, etc).
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json<ContactApiResponse>(
      { success: false, message: "El cuerpo de la solicitud no es JSON válido." },
      { status: 400 }
    );
  }

  // 2. Validación de forma y contenido con el mismo esquema que usa el cliente.
  const parsed = contactFormSchema.safeParse(rawBody);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: "Revisa los campos marcados e inténtalo nuevamente.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const { company, ...data } = parsed.data;

  // 3. Honeypot: si el campo invisible llegó lleno, es casi con certeza un
  // bot. Respondemos éxito (para no darle pistas de que fue detectado)
  // pero sin procesar el envío de verdad.
  if (company && company.length > 0) {
    return NextResponse.json<ContactApiResponse>({
      success: true,
      message: "Mensaje recibido.",
    });
  }

  // 4. Intentar notificar por correo. Cualquier error inesperado del
  // proveedor externo se atrapa acá y se traduce en un 500 genérico,
  // sin filtrar detalles internos al cliente.
  try {
    await sendContactEmail(data);
  } catch {
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: "No pudimos procesar tu mensaje en este momento. Inténtalo más tarde.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json<ContactApiResponse>({
    success: true,
    message: "¡Gracias! Tu mensaje fue enviado correctamente.",
  });
}
