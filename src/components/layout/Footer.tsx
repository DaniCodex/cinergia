/**
 * components/layout/Footer.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ CAMBIÓ: el footer.tsx original era literalmente una línea:
 *
 *   <p className="text-center ">© 2026 CINERGIA · ...</p>
 *
 * Sin enlaces, sin redes, sin forma de contactar. Este componente lo
 * reemplaza por un footer completo, sin volverse "servidor de componentes
 * de más": sigue siendo un Server Component (no tiene "use client"; no
 * necesita estado ni efectos), lo cual es mejor para performance porque
 * su HTML se genera en el servidor sin enviar JS extra al navegador.
 *
 * El año del copyright se calcula con `new Date().getFullYear()` en vez
 * de estar escrito a mano como "2026" — así nunca queda desactualizado.
 * ─────────────────────────────────────────────────────────────────────────
 */
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui";
import { Container } from "@/components/ui";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        {/* Columna 1: identidad */}
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo-blanco-comprimido.jpeg"
              alt={`Logotipo de ${SITE.name}`}
              width={44}
              height={44}
              className="rounded-md"
            />
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {SITE.description}
          </p>
          <div className="mt-6 flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-md border border-white/15 p-2.5 text-white/80 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Columna 2: navegación */}
        <nav aria-label="Enlaces del pie de página">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
            Navegación
          </h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 hover:text-brand-orange">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/unete" className="text-sm text-white/80 hover:text-brand-orange">
                Únete
              </Link>
            </li>
          </ul>
        </nav>

        {/* Columna 3: contacto */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              <a href={`mailto:${SITE.contactEmail}`} className="hover:text-brand-orange">
                {SITE.contactEmail}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
              <span>{SITE.university}, Lima, Perú</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 md:flex-row">
          <p>
            © {currentYear} {SITE.name} · {SITE.fullName}
          </p>
          <p>{SITE.university}</p>
        </Container>
      </div>
    </footer>
  );
}
