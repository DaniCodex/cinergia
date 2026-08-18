"use client"; // Necesario: usa useState (menú móvil) y usePathname (link activo).

/**
 * components/layout/Navbar.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * QUÉ CAMBIÓ respecto al Navbar.tsx original:
 *   1. El array de enlaces ya no vive hardcodeado acá: viene de
 *      `lib/constants.ts` (NAV_LINKS), una sola fuente para desktop y
 *      móvil.
 *   2. La lógica de "¿cambié de tema oscuro a claro?" se extrajo al hook
 *      `useScrolled` (hooks/useScrolled.ts).
 *   3. Accesibilidad (punto A7 del brief):
 *      - El botón de menú ahora tiene `aria-expanded` y `aria-controls`,
 *        para que lectores de pantalla sepan si el menú está abierto.
 *      - Los enlaces usan `aria-current="page"` cuando corresponden a la
 *        ruta activa (antes no había forma de saber, ni visual ni
 *        semánticamente, en qué página estabas).
 *      - `<nav>` tiene `aria-label` porque hay más de una región de
 *        navegación en la página (nav principal + footer).
 *   4. El logo usa `priority` implícito de Next/Image al estar en el LCP
 *      (Largest Contentful Paint) de casi todas las páginas.
 * ─────────────────────────────────────────────────────────────────────────
 */
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/ui";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_LINKS, PRIMARY_CTA, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrolled();
  const pathname = usePathname();

  // "Tema oscuro" del navbar = fondo blanco con texto azul. Se activa al
  // hacer scroll O si no estamos en la home (las páginas internas no
  // tienen un Hero de pantalla completa detrás para justificar transparencia).
  const isSolid = isScrolled || pathname !== "/";

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        isSolid ? "bg-white py-0 shadow-md" : "bg-transparent py-2"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        {/* ============ IZQUIERDA: Logo + enlaces de escritorio ============ */}
        <div className="z-50 flex items-center gap-8">
          <Link href="/" className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue" aria-label={`${SITE.name} — Inicio`}>
            <Image
              src={isSolid ? "/logo-azul-comprimido.jpeg" : "/logo-blanco-comprimido.jpeg"}
              alt={`Logotipo de ${SITE.name}`}
              width={48}
              height={48}
              className="rounded-md"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue",
                    isSolid
                      ? isActive
                        ? "text-brand-blue"
                        : "text-brand-dark hover:text-brand-orange"
                      : isActive
                        ? "text-brand-orange"
                        : "text-white hover:text-white/70"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div
              aria-hidden="true"
              className={cn(
                "ml-2 h-5 w-px transition-colors duration-300",
                isSolid ? "bg-slate-300" : "bg-white/20"
              )}
            />
          </div>
        </div>

        {/* ============ DERECHA: Redes + CTA + botón hamburguesa ============ */}
        <div className="z-50 flex items-center gap-5">
          <div className="hidden items-center gap-5 md:flex">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={cn(
                  "transition-colors hover:opacity-70",
                  isSolid ? "text-slate-400" : "text-white"
                )}
              >
                <Icon name={social.icon} className="h-5 w-5" />
              </a>
            ))}

            <Link
              href={PRIMARY_CTA.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-5 py-2 text-sm font-bold shadow-md transition-all",
                isSolid
                  ? "bg-brand-orange text-white shadow-brand-orange/20 hover:bg-brand-orange/90"
                  : "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              )}
            >
              {PRIMARY_CTA.label} <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Botón hamburguesa: solo visible en móvil/tablet */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className={cn("p-2 transition-colors md:hidden", isSolid ? "text-brand-dark" : "text-white")}
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} className="h-8 w-8" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
}
