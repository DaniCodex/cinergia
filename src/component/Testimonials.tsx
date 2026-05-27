"use client";

import Image from "next/image";
import Link from "next/link";
import { outfit } from "../app/font";

const testimonialsData = [
  {
    id: 1,
    name: "Hernando Zurita Calderon",
    role: "Decano de las Carreras de Ingeniería",
    university: "Universidad Científica del Sur",
    quote: "Cita de Zurita",
    image: "/zurita.jpg", // Asegúrate de tener esta imagen en /public
    linkedin: "https://linkedin.com",
    bgClass: "bg-[#f3f6fa]", // Gris/Celeste pastel
    borderClass: "border-[#e2e8f0]"
  },
  {
    id: 2,
    name: "Sandra Flores Ganoza",
    role: "Directora de las Carreras de Ingeniería",
    university: "Universidad Científica del Sur",
    quote: "Iniciativas estudiantiles como Cinergia enriquecen la formación universitaria al crear espacios donde los estudiantes pueden participar, colaborar y acceder a nuevas oportunidades más allá del aula. Al impulsar becas, cursos y actividades lideradas por ellos mismos, se fortalece el liderazgo, la innovación y una visión más amplia de su desarrollo profesional.",
    image: "/sandra.jpg", // Asegúrate de tener esta imagen en /public
    linkedin: "https://linkedin.com",
    bgClass: "bg-[#fdf2f6]", // Rosado pastel
    borderClass: "border-[#fce7f3]"
  },
  {
    id: 3,
    name: "Elmer Pisfil Languasco",
    role: "Gerente de Proyectos en ASESUME S.A.C.",
    university: "Universidad Científica del Sur",
    quote: "Estimo que lo primero y lo más significativo es que un excelente equipo de estudiantes esté dispuesto a invertir tiempo con un solo objetivo: Ayudar a otros estudiantes a subir los primeros escalones hacia la obtención del mejor grado académico: Ingeniero.",
    image: "/Pisfil.png", // Asegúrate de tener esta imagen en /public
    linkedin: "https://linkedin.com",
    bgClass: "bg-[#f2fbf5]", // Verde pastel
    borderClass: "border-[#dcfce7]"
  }
];

export default function Testimonials() {
  return (
    // Fondo general gris clarito de la página
    <section className="w-full bg-[#f8f9fa] py-16 px-6 md:px-12 lg:px-20">
      
      {/* EL CONTENEDOR BLANCO PRINCIPAL */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] border border-zinc-200 p-8 md:p-12 shadow-sm">
        
        {/* Título (Dentro del contenedor blanco) */}
        <h2 className={`${outfit.className} text-4xl font-bold text-[#001830] tracking-tight mb-10`}>
          Respaldo <span className="text-[#005bb5]">Institucional</span>
        </h2>

        {/* Cuadrícula de 3 columnas para las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div 
              key={item.id} 
              // Diseño de cada tarjeta individual con sus colores pastel
              className={`relative rounded-2xl border ${item.borderClass} ${item.bgClass} p-8 flex flex-col items-center text-center`}
            >
              
              {/* Botón LinkedIn (Igual al diseño: cuadrito celeste claro con ícono azul) */}
              <Link 
                href={item.linkedin} 
                target="_blank"
                className="absolute top-5 right-5 text-[#0077b5] bg-[#e6f0f9] p-1.5 rounded-md hover:bg-[#d0e4f5] transition-colors"
                aria-label={`LinkedIn de ${item.name}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>

              {/* Avatar (Foto) */}
              <div className="w-24 h-24 rounded-[1.25rem] overflow-hidden shadow-sm mb-5 relative bg-white border border-zinc-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Textos: Nombre, Cargo, Universidad */}
              <h3 className="font-bold text-base md:text-lg text-[#001830] mb-1">{item.name}</h3>
              <p className="text-[11px] md:text-xs text-zinc-500 mb-0.5">{item.role}</p>
              <p className="text-[11px] md:text-xs text-zinc-400 mb-6">{item.university}</p>

              {/* Cita */}
              <p className="text-[13px] md:text-sm text-zinc-700 leading-relaxed">
                {item.quote}
              </p>

            </div>
          ))}
        </div>

        {/* =========================================
            CONTROLES INFERIORES (Paginación)
            ========================================= */}
        <div className="flex items-center justify-center gap-4 mt-10">
          
          {/* Flecha Izquierda */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 bg-white hover:border-[#005bb5] hover:text-[#005bb5] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Puntos de estado */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-2 bg-[#005bb5] rounded-full"></div> {/* Punto activo (Línea) */}
            <div className="w-2 h-2 bg-zinc-300 rounded-full"></div> {/* Punto inactivo */}
            <div className="w-2 h-2 bg-zinc-300 rounded-full"></div> {/* Punto inactivo */}
          </div>

          {/* Flecha Derecha */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-300 bg-white hover:border-[#005bb5] hover:text-[#005bb5] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}