import Image from "next/image";
import { outfit } from "../app/font";

export default function PortadaNosotros() {
  return (
    <section >
      <div className="mb-12">
        <Image
          src="/nosotros/1.png"
          alt="Portada Cinergia"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="mb-8">
        <h1 className={`${outfit.className} text-[#001830] font-bold text-4xl md:text-5xl  uppercase leading-[1.1]`}>
          Cruza la meta<br />dejando huella
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Foto Izquierda (Almacén - Vertical) */}
        <div className="relative w-full h-[400px] md:h-[550px]">
          <Image
            src="/nosotros/almacen.jpeg" // Reemplaza con tu ruta
            alt="Visita al almacén"
            fill
            className="object-cover rounded-[2rem]"
          />
        </div>

        {/* Foto Derecha (Grupo - Horizontal) + Texto */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full h-[250px] md:h-[350px]">
            <Image
              src="/nosotros/grupo-estudiantes.jpeg" // Reemplaza con tu ruta
              alt="Grupo de estudiantes"
              fill
              className="object-cover rounded-[2rem]"
            />
          </div>
          <p className="text-[#002B5B] font-bold text-2xl md:text-3xl leading-snug pr-4">
            Asociación de estudiantes de ingenierías de la Universidad Científica del Sur.
          </p>
        </div>
        
      </div>

      {/* 3. SECCIÓN INFERIOR (MASCOTA Y BOTONES) */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        
        {/* Columna Izquierda de Carreras */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="bg-[#2b4279] text-white font-bold py-3 px-8 rounded-full text-center shadow-md whitespace-nowrap">
            Ing. Empr. y de Sist.
          </div>
          <div className="bg-[#2b4279] text-white font-bold py-3 px-8 rounded-full text-center shadow-md whitespace-nowrap md:-mr-10 z-10">
            Ing. Industrial
          </div>
        </div>

        {/* Mascota Central */}
        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] z-0">
          <Image
            src="/nosotros/mascota.png" // Reemplaza con tu ruta
            alt="Mascotas de Cinergia"
            fill
            className="object-contain"
          />
        </div>

        {/* Columna Derecha de Carreras */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <div className="bg-[#2b4279] text-white font-bold py-3 px-8 rounded-full text-center shadow-md whitespace-nowrap">
            Ing. IA y Ciencia de Datos
          </div>
          <div className="bg-[#2b4279] text-white font-bold py-3 px-8 rounded-full text-center shadow-md whitespace-nowrap md:-ml-10 z-10">
            Ing. Software
          </div>
        </div>
        
      </div>
      
    </section>
  );
}
