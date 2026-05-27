import Image from "next/image";

export default function ValoresEstadisticas() {
  return (
    <section className="w-full pb-16 font-sans">
      
      {/* === SECCIÓN 1: NUESTROS VALORES === */}
      <div className="mb-16">
        {/* Título */}
        <h2 
          className="text-[#1b365d] text-4xl md:text-5xl font-black uppercase text-center mb-8"
          style={{ fontFamily: 'Impact, sans-serif' }}
        >
          Nuestros Valores
        </h2>

        {/* Imagen Principal de Valores (Ancho completo) */}
        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src="/nosotros/N8.jpeg" // Reemplaza con tu ruta
            alt="Equipo Cinergia"
            fill
            className="object-cover object-bottom"
          />
        </div>

        {/* Tarjetas de Valores Superpuestas */}
        <div className="max-w-6xl mx-auto px-4 -mt-8 md:-mt-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Tarjeta 1 */}
            <div className="bg-[#1f2e4d] text-white font-black text-sm md:text-lg rounded-xl md:rounded-2xl flex items-center justify-center p-4 text-center shadow-lg h-20 md:h-24">
              LIDERAZGO
            </div>
            
            {/* Tarjeta 2 */}
            <div className="bg-[#1f2e4d] text-white font-black text-sm md:text-base rounded-xl md:rounded-2xl flex items-center justify-center p-4 text-center shadow-lg h-20 md:h-24 leading-tight">
              INNOVACIÓN<br />COLECTIVA
            </div>
            
            {/* Tarjeta 3 */}
            <div className="bg-[#1f2e4d] text-white font-black text-sm md:text-lg rounded-xl md:rounded-2xl flex items-center justify-center p-4 text-center shadow-lg h-20 md:h-24">
              TRANSPARENCIA
            </div>
            
            {/* Tarjeta 4 */}
            <div className="bg-[#1f2e4d] text-white font-black text-sm md:text-lg rounded-xl md:rounded-2xl flex items-center justify-center p-4 text-center shadow-lg h-20 md:h-24">
              SOLIDARIDAD
            </div>

          </div>
        </div>

        {/* Indicadores del Carrusel (Puntos) */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-8 h-3 rounded-full bg-[#0066cc]"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>
      </div>

      {/* === SECCIÓN 2: ESTADÍSTICAS E IMÁGENES === */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Columna Izquierda (Certificado) */}
        <div className="relative w-full h-[350px] md:h-auto min-h-[400px]">
          <Image
            src="/nosotros/N9.jpeg" // Reemplaza con tu ruta
            alt="Certificado Cinergia"
            fill
            className="object-cover rounded-[2rem]"
          />
        </div>

        {/* Columna Derecha (Estadísticas y Foto Cascos) */}
        <div className="flex flex-col gap-6">
          
          {/* Fila de Tarjetas de Estadísticas */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Estadística 1 */}
            <div className="bg-[#1f2e4d] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center shadow-lg h-[180px]">
              <span className="text-[#f59e0b] text-4xl md:text-5xl font-black">
                +500
              </span>
              <span className="text-white font-bold text-sm md:text-base mt-2 leading-tight">
                Comunidad<br />estudiantil
              </span>
            </div>

            {/* Estadística 2 */}
            <div className="bg-[#1f2e4d] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center shadow-lg h-[180px]">
              <div className="flex items-center gap-2">
                <span className="text-[#f59e0b] text-4xl md:text-5xl font-black">
                  +15
                </span>
                <span className="text-white font-bold text-xs md:text-sm text-left leading-tight">
                  Charlas<br />Visitas<br />Jornadas
                </span>
              </div>
              <span className="text-white font-bold text-xs mt-3">
                2025-2
              </span>
            </div>

          </div>

          {/* Imagen Inferior Derecha (Visita Cascos) */}
          <div className="relative w-full flex-grow min-h-[200px]">
            <Image
              src="/nosotros/N10.jpeg" // Reemplaza con tu ruta
              alt="Visita técnica"
              fill
              className="object-cover rounded-[2rem]"
            />
          </div>

        </div>

      </div>

    </section>
  );
}