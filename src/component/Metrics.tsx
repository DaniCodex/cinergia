import { montserrat } from "../app/font";

// Definimos los datos fuera del componente para mantener el orden
const metricsData = [
  { id: 1, number: "14", label: "EVENTOS" },
  { id: 2, number: "+450", label: "COMUNIDAD ESTUDIANTIL" },
  { id: 3, number: "15", label: "RECURSOS" },
  { id: 4, number: "1", label: "ALIANZAS" },
];

export default function Metrics() {
  return (
    // El fondo #f8f9fa es el color gris súper clarito que se ve en tu diseño detrás de las tarjetas
    <section className="w-full bg-[#f8f9fa] py-16 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenedor Grid: 1 columna en móvil, 2 en tablet, 4 en PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {metricsData.map((metric) => (
            <div
              key={metric.id}
              // Diseño de la tarjeta: fondo blanco, bordes redondeados, sombra suave y borde sutil
              // Agregué un hover:-translate-y-1 para que la tarjeta "flote" un poquito al pasar el mouse
              className="bg-white rounded-2xl border border-zinc-200 shadow-sm py-10 px-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Número grande en azul */}
              <span className={`${montserrat.className} text-5xl md:text-6xl font-black text-[#005bb5] mb-2`}>
                {metric.number}
              </span>
              
              {/* Etiqueta gris en mayúsculas */}
              <span className="text-xs font-bold text-zinc-500 tracking-widest uppercase text-center">
                {metric.label}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}