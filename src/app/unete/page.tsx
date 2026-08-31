/**
 * app/unete/page.tsx — Página de contacto / unirse a CINERGIA. Nueva: el
 * Navbar original ya enlazaba a "/unete" pero la ruta daba 404. Cumple el
 * punto C8 del brief (formulario funcional + redes sociales).
 */
import type { Metadata } from "next";
import { Container, Icon, PageHeader } from "@/components/ui";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Únete",
  description:
    "Escríbenos para unirte a CINERGIA, proponer una alianza o resolver cualquier consulta.",
};

export default function UnetePage() {
  return (
    <>
      <PageHeader
        eyebrow="Comunidad"
        title="Únete a CINERGIA"
        description="Cuéntanos qué te gustaría hacer con nosotros. Te respondemos a la brevedad."
      />

      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-brand-blue-light/30 p-8">
            <h2 className="font-display text-lg font-bold text-brand-dark">Otras formas de contacto</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Correo</p>
                  <a href={`mailto:${SITE.contactEmail}`} className="text-sm text-slate-600 hover:text-brand-blue">
                    {SITE.contactEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="map-pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                <div>
                  <p className="text-sm font-semibold text-brand-dark">Universidad</p>
                  <p className="text-sm text-slate-600">{SITE.university}, Lima, Perú</p>
                </div>
              </li>
            </ul>

            <h2 className="mt-8 font-display text-lg font-bold text-brand-dark">Síguenos</h2>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg border border-slate-300 bg-white p-3 text-brand-blue transition-colors hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                >
                  <Icon name={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </Container>
    </>
  );
}
