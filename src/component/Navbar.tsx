"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "./HomeIcon";
import logoBlue from "../../public/home/logo-blue.webp";

const links = [
  { label: "Inicio", hash: "inicio" },
  { label: "Nosotros", hash: "nosotros" },
  { label: "Eventos", hash: "impacto" },
  { label: "Proyectos", hash: "principios" },
  { label: "Cursos", hash: "carreras" },
];

function SectionLink({ hash, className, children, onClick, isHome, ariaLabel }: { hash: string; className: string; children: ReactNode; onClick?: () => void; isHome: boolean; ariaLabel?: string }) {
  return isHome
    ? <a href={`#${hash}`} className={className} onClick={onClick} aria-label={ariaLabel}>{children}</a>
    : <Link href={`/#${hash}`} className={className} onClick={onClick} aria-label={ariaLabel}>{children}</Link>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isHome = usePathname() === "/";

  return <header className="sticky top-0 z-50 bg-white shadow-[0_2px_12px_rgba(0,36,78,.08)]">
    <nav aria-label="Navegación principal" className="mx-auto flex h-[64px] max-w-[1320px] items-center justify-between gap-6 px-5 min-[820px]:h-[82px] min-[820px]:px-8 lg:px-12">
      <SectionLink hash="inicio" isHome={isHome} onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-1.5 text-[#063368]" ariaLabel="CINERGIA, inicio">
        <Image src={logoBlue} alt="" width={48} height={48} className="h-[40px] w-[40px] object-contain min-[820px]:h-[48px] min-[820px]:w-[48px]" />
        <span className="text-[17px] font-extrabold tracking-[.035em] min-[820px]:text-[18px]">INERGIA</span>
      </SectionLink>
      <div className="hidden items-center gap-5 min-[820px]:flex lg:gap-8">
        {links.map(link => <SectionLink key={link.label} hash={link.hash} isHome={isHome} className="text-[14px] font-extrabold text-[#083568] transition-colors hover:text-[#ff9d11]">{link.label}</SectionLink>)}
      </div>
      <div className="hidden items-center gap-4 min-[820px]:flex">
        <a href="https://www.instagram.com/cinergia.ucsur/" target="_blank" rel="noopener noreferrer" className="hidden text-[#083568] transition-colors hover:text-[#ff9d11] lg:inline-flex" aria-label="Instagram de CINERGIA"><HomeIcon name="instagram" size={20} /></a>
        <a href="https://www.linkedin.com/company/cinergiaucsur/" target="_blank" rel="noopener noreferrer" className="hidden text-[#083568] transition-colors hover:text-[#ff9d11] lg:inline-flex" aria-label="LinkedIn de CINERGIA"><HomeIcon name="linkedin" size={20} /></a>
        <SectionLink hash="contacto" isHome={isHome} className="inline-flex h-[46px] items-center gap-2 rounded-xl bg-[#ff9d11] px-6 text-[14px] font-extrabold text-white shadow-[0_5px_13px_rgba(255,157,17,.25)] transition-colors hover:bg-[#ed900d]">Únete <HomeIcon name="arrow" size={18} /></SectionLink>
      </div>
      <button type="button" className="grid h-11 w-11 place-items-center rounded-lg text-[#063368] min-[820px]:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
        <HomeIcon name={open ? "close" : "menu"} size={25} />
      </button>
    </nav>
    {open && <div className="flex flex-col gap-1 border-t border-[#e5ebf2] bg-white px-5 pb-5 pt-3 min-[820px]:hidden">
      {links.map(link => <SectionLink key={link.label} hash={link.hash} isHome={isHome} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-bold text-[#063368] hover:bg-[#eef5fc]">{link.label}</SectionLink>)}
      <SectionLink hash="contacto" isHome={isHome} onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-[#ff9d11] px-3 py-3 text-center text-sm font-bold text-white">Únete a CINERGIA</SectionLink>
    </div>}
  </header>;
}
