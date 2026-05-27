"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { outfit } from "../app/font";

const slides = [
  {
    id: 1,
    image: "/fondo.cinergia.inicio.jpg", 
    eyebrow: "Asociación Estudiantil · UCSUR",
    titleWhite: "Cruza la meta",
    titleColor: "dejando huella",
    description: "Comunidad estudiantil de ingenierías que conecta talento con proyectos reales, investigación aplicada e industria.",
    buttonText: "Conoce CINERGIA →",
  },
  {
    id: 2,
    image: "/falabella.png", 
    eyebrow: "Eventos · 2025–2026",
    titleWhite: "Visitas industriales",
    titleColor: "que transforman",
    description: "Accede a las mejores industrias del Perú: Ferreyros, Gloria, Falabella y más. Experiencias que van más allá del aula.",
    buttonText: "Ver eventos →",
  },
  {
    id: 3,
    image: "/talks1.jpg", 
    eyebrow: "Formación · Comunidad",
    titleWhite: "Impulsa tu",
    titleColor: "Carrera ",
    description: "Cursos, bolsa de trabajo y una red de contactos que te abre puertas desde el primer ciclo de ingeniería.",
    buttonText: "Explorar Oportunidades →",
  },
  {
    id: 4,
    image: "/recofacu.jpg", 
    eyebrow: "Proyectos · Investigación",
    titleWhite: "De la idea",
    titleColor: "al impacto real",
    description: "Investigaciones aplicadas, papers y proyectos que trascienden el aula y generan valor para la industria y la sociedad.",
    buttonText: "Ver Proyectos →",
  }
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden flex items-center bg-[#001830]">
      
     {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full flex items-center ${
            index === currentSlide 
              // CAMBIA AQUÍ a duration-[1500ms]
              ? "opacity-100 z-20 transition-opacity duration-[2000ms] ease-in-out" 
              // CAMBIA AQUÍ a duration-[1500ms] y delay-[1500ms]
              : "opacity-0 z-10 transition-opacity duration-[2000ms] delay-[1500ms] pointer-events-none"
          }`}
        >
          {/* 1. IMAGEN DE FONDO Y ZOOM */}
          <div 
            className={`absolute inset-0 w-full h-full transition-transform ease-linear duration-[5000ms] ${
              index === currentSlide ? "scale-100" : "scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.titleWhite}
              fill
              className="object-cover object-center"
              priority={index === 0} 
            />
          </div>
          
          {/* 2. OVERLAY AZUL */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001830]/95 via-[#001830]/70 to-transparent"></div>

          {/* 3. CONTENIDO DE TEXTO (Ahora dentro del slide, se mueve a la misma velocidad que la imagen) */}
          <div className="relative z-30 w-full mx-auto px-6 md:px-12 lg:px-15 mt-20">
            <div className="max-w-2xl text-left">
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[2px] bg-amber-500"></div>
                <span className="text-amber-500 text-xs md:text-sm font-bold tracking-widest uppercase">
                  {slide.eyebrow}
                </span>
              </div>

              <h1 className="flex flex-col gap-1 leading-tight mb-6">
                <span className={`${outfit.className} text-5xl md:text-7xl font-bold text-white tracking-tight`}>
                  {slide.titleWhite}
                </span>
                <span className="text-4xl md:text-4xl font-extrabold text-amber-500  drop-shadow-md ">
                  {slide.titleColor}
                </span>
              </h1>

              <p className="text-zinc-200 text-lg md:text-xl font-medium mb-10 max-w-lg leading-relaxed">
                {slide.description}
              </p>

              <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg shadow-amber-500/20">
                {slide.buttonText}
              </button>

            </div>
          </div>
        </div>
      ))}

      {/* =========================================
          INDICADORES (PUNTOS ABAJO)
          ========================================= */}
      <div className="absolute bottom-10 right-10 md:right-20 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide 
                ? "w-8 h-2 bg-amber-500" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80" 
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>

    </header>
  );
}