"use client"; // Obligatorio para usar useState

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  // Estado que controla el menú móvil
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const isDarkTheme = isScrolled || pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <nav className={`w-full bg-transparent absolute top-0 left-0 z-50 
                  ${isDarkTheme ? "bg-white shadow-md py-0" : "bg-transparent py-2"}`}>
      <div className="w-full px-6 md:px-12 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* =========================================
              GRUPO IZQUIERDO: Logo + Enlaces
              ========================================= */}
          {/* Añadimos z-50 aquí para que el logo siempre quede por encima del menú móvil */}
          <div className="flex items-center gap-8 z-50">
            
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src={isDarkTheme ? "/logoazul.png": "/logoblanco.png"}
                  alt='cinergia logo'
                  width={50}
                  height={50}
                  className='rounded-md'
                />
              </Link>
            </div>

            {/* Enlaces de Navegación (Ocultos en celular con 'hidden md:flex') */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { name: "Nosotros", path: "/nosotros" },
                { name: "Eventos", path: "/eventos" },
                { name: "Proyectos", path: "/proyectos" },
                { name: "Impulsa tu carrera", path: "/impulsa" }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  // AQUÍ ESTÁ LA MAGIA: Cambia de blanco a azul oscuro según la página o el scroll
                  className={`text-sm font-semibold transition-colors ${
                    isDarkTheme ? "text-[#005bb5] hover:text-amber-500" : "text-white hover:text-zinc-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Línea Divisoria Vertical (También cambia de color para que se vea en fondos blancos) */}
              <div className={`h-5 w-[1px] ml-2 transition-colors duration-300 ${
                isDarkTheme ? "bg-zinc-300" : "bg-white/20"
              }`}></div>
            </div>

          </div>

          {/* =========================================
              GRUPO DERECHO: Redes + Botones
              ========================================= */}
          {/* Añadimos z-50 para que el botón sándwich quede por encima del fondo oscuro */}
          <div className="flex items-center gap-5 z-50">
            
            {/* Contenedor de Escritorio (Oculto en celular) */}
            <div className="hidden md:flex items-center gap-5">
              {/* Icono Instagram */}
              <Link href="https://instagram.com" target="_blank" className="text-white hover:text-zinc-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>

              {/* Icono LinkedIn */}
              <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-zinc-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>

              {/* Botón Transparente (Estilo Glassmorphism) */}
             <Link 
                href="/unete" 
                className={`px-5 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                  isDarkTheme 
                    ? "bg-amber-500 hover:bg-amber-400 text-white shadow-md shadow-amber-500/20" 
                    : "bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm"
                }`}
              >
                Únete &rarr;
              </Link>
            </div>

            {/* Botón Hamburguesa (Solo visible en celular con 'md:hidden') */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 transition-colors ${
                isDarkTheme ? "text-[#001830]" : "text-white"
              }`}
            >
              {isOpen ? (
                // Ícono X (Cerrar)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Ícono Sándwich (Abrir)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>

          </div>

        </div>
      </div>

      {/* =========================================
          MENÚ DESPLEGABLE MÓVIL (Pantalla Completa)
          ========================================= */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#001830]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 z-40">
          
          <Link href="/nosotros" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold hover:text-amber-500 transition-colors">
            Nosotros
          </Link>
          <Link href="/eventos" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold hover:text-amber-500 transition-colors">
            Eventos
          </Link>
          <Link href="/proyectos" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold hover:text-amber-500 transition-colors">
            Proyectos
          </Link>
          <Link href="/impulsa" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold hover:text-amber-500 transition-colors">
            Impulsa tu carrera
          </Link>
          
          <div className="w-24 h-[2px] bg-amber-500 my-2"></div>
          
          <Link 
            href="/unete" 
            onClick={() => setIsOpen(false)} 
            className="bg-amber-500 text-white px-10 py-3 rounded-md text-xl font-bold transition-all shadow-lg shadow-amber-500/20"
          >
            Únete &rarr;
          </Link>

        </div>
      )}

    </nav>
  );
}