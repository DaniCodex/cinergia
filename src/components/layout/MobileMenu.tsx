"use client";

/**
 * components/layout/MobileMenu.tsx
 * ─────────────────────────────────────────────────────────────────────────
 * El menú desplegable de pantalla completa que aparece al tocar el botón
 * hamburguesa. Se separó de Navbar.tsx porque mezclaba dos
 * responsabilidades distintas (la barra fija de arriba y el overlay de
 * pantalla completa) en un mismo archivo de 250 líneas.
 *
 * `id="mobile-menu"` conecta con el `aria-controls` del botón en Navbar,
 * y `role="dialog"` + `aria-modal` le indican a lectores de pantalla que
 * este overlay reemplaza temporalmente el contenido de la página.
 * ─────────────────────────────────────────────────────────────────────────
 */
import Link from "next/link";
import { NAV_LINKS, PRIMARY_CTA } from "@/lib/constants";
import { Icon } from "@/components/ui";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      className="absolute left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-8 bg-brand-dark/95 backdrop-blur-lg md:hidden"
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="text-2xl font-bold text-white transition-colors hover:text-brand-orange"
        >
          {link.label}
        </Link>
      ))}

      <div aria-hidden="true" className="my-2 h-0.5 w-24 bg-brand-orange" />

      <Link
        href={PRIMARY_CTA.href}
        onClick={onClose}
        className="flex items-center gap-2 rounded-md bg-brand-orange px-10 py-3 text-xl font-bold text-white shadow-lg shadow-brand-orange/20"
      >
        {PRIMARY_CTA.label} <Icon name="arrow-right" className="h-5 w-5" />
      </Link>
    </div>
  );
}
