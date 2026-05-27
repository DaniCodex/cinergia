"use client";

import { useRef } from "react";
import Image from "next/image";
import {  outfit} from "../app/font";

// Datos de las noticias
const newsData = [
  {
    id: 1,
    image: "/noticia.visita.gloria.jpg",
    tag: "VISITA",
    date: "01/03/2026",
    title: "Visita Industrial Gloria",
  },
  {
    id: 2,
    image: "/sql.saturday.jpg",
    tag: "CHARLA",
    date: "07/02/2026",
    title: "SQL Saturday Lima 2026",
  },
  {
    id: 3,
    image: "/noticia.asistencia.ia.battle.jpg",
    tag: "COMPETENCIA",
    date: "15/01/2026",
    title: "Ven al Científica AI Battle 2026",
  },
  {
    id: 4,
    image: "/cronograma1.jpg",
    tag: "CHARLA",
    date: "05/01/2026",
    title: "Cronograma SQL Saturday Lima 2026",
  },
];

export default function NewsCarousel() {
  // Referencia al contenedor para controlar el scroll con los botones
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    // Fondo gris claro general
    <section className="w-full bg-[#f8f9fa] px-6 md:px-12 lg:px-20 pb-5 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenedor principal blanco con bordes redondeados */}
        <div className="bg-white rounded-[2rem] border border-zinc-200 p-6 md:p-10 shadow-sm">
          
          {/* =========================================
              CABECERA: Título y Flechas
              ========================================= */}
          <div className="flex items-center justify-between mb-8">
            <h2 className={`${outfit.className} text-4xl font-bold text-[#001830] tracking-tight`}>
              Últimas <span className="text-[#005bb5] ">noticias</span>
            </h2>

            {/* Flechas de navegación */}
            <div className="flex gap-3">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 hover:border-[#005bb5] hover:text-[#005bb5] transition-colors"
                aria-label="Noticias anteriores"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 hover:border-[#005bb5] hover:text-[#005bb5] transition-colors"
                aria-label="Siguientes noticias"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* =========================================
              CARRUSEL (Tarjetas)
              ========================================= */}
          <div 
            ref={carouselRef}
            // Utilidades para esconder la barra de scroll nativa pero mantener la funcionalidad
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {newsData.map((item) => (
              // Tarjeta individual
              <div 
                key={item.id} 
                className="max-w-[250px] md:max-w-[300px] flex-shrink-0 snap-start bg-[#f0f3f6] rounded-2xl overflow-hidden flex flex-col group cursor-pointer border border-zinc-100"
              >
                {/* Contenedor de la Imagen */}
                <div className="relative w-full h-90 overflow-hidden bg-zinc-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Etiqueta flotante */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-zinc-700 px-3 py-1 rounded-md tracking-wider">
                    {item.tag}
                  </div>
                </div>

                {/* Contenido de Texto */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[#005bb5] text-xs font-bold mb-2">
                    {item.date}
                  </span>
                  <h3 className={` text-xl font-bold text-[#001830] leading-snug group-hover:text-[#005bb5] transition-colors`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================
              INDICADORES (Puntos inferiores)
              ========================================= */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-6 h-2 bg-[#005bb5] rounded-full"></div>
            <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
            <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
            <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}