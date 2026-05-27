import Image from "next/image";

export default function MisionVision() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 font-sans">
      
      {/* Contenedor Principal Grid (1 columna en móvil, 3 en escritorio) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        
        {/* === FILA 1 === */}
        
        {/* 1. Texto Misión */}
        <div className="flex flex-col justify-center text-right pr-0 md:pr-4 order-1">
          <h2 className="text-[#1b365d] text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
            Misión
          </h2>
          <p className="text-[#1b365d] font-bold text-lg leading-snug">
            Desarrollar estudiantes capaces de aplicar lo que aprenden a contextos
            reales y conectarlos con el mundo laboral a través de eventos, proyectos y
            experiencias prácticas.
          </p>
        </div>

        {/* 2. Imagen Misión 1 (Chica señalando) */}
        <div className="relative w-full h-[300px] md:h-[380px] order-2">
          <Image
            src="/nosotros/N5.png" // Reemplaza con tu ruta
            alt="Estudiantes revisando panel"
            fill
            className="object-cover rounded-[2rem]"
          />
        </div>

        {/* 3. Imagen Misión 2 (Visita Almacén) */}
        <div className="relative w-full h-[300px] md:h-[380px] order-3">
          <Image
            src="/nosotros/N6.jpeg" // Reemplaza con tu ruta
            alt="Visita industrial"
            fill
            className="object-cover rounded-[2rem]"
          />
        </div>

        {/* === FILA 2 === */}

        {/* 4. Imagen Visión (Foto grupal ancha - Ocupa 2 columnas) */}
        <div className="relative w-full h-[250px] md:h-[380px] md:col-span-2 order-4">
          <Image
            src="/nosotros/N7.png" // Reemplaza con tu ruta
            alt="Grupo Cinergia"
            fill
            className="object-cover rounded-[2rem] object-center"
          />
        </div>

        {/* 5. Texto Visión */}
        <div className="flex flex-col justify-center text-left pl-0 md:pl-4 order-5">
          <h2 className="text-[#1b365d] text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
            Visión
          </h2>
          <p className="text-[#1b365d] font-bold text-lg md:text-xl leading-snug">
            Ser la comunidad universitaria referente en la formación
            práctica de ingenieros que aportan valor.
          </p>
        </div>

      </div>
    </section>
  );
}