import Image from "next/image";

export default function PartnersCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 font-sans overflow-hidden">
      
      {/* ==========================================
          SECCIÓN 1: NUESTROS PARTNERS
          ========================================== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-24">
        
        {/* Mascota Izquierda (Punto de apoyo) */}
        <div className="relative w-[200px] md:w-[250px] h-[250px] md:h-[300px] flex-shrink-0">
          <Image
            src="/nosotros/COOPER1.png" // Reemplaza con tu ruta
            alt="Mascota Partners"
            fill
            className="object-contain"
          />
        </div>

        {/* Bloque de Logos y Título */}
        <div className="flex flex-col items-center md:items-end gap-6 w-full max-w-3xl">
          
          {/* Grilla/Fila de Logos */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            {/* Logo 1 */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-sm bg-white">
              <Image src="/nosotros/1-lead-UCSUR.jpg" fill className="object-contain p-2" alt="Partner 1" />
            </div>
            {/* Logo 2 */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-sm bg-white border border-gray-100">
              <Image src="/nosotros/ELECTRONICA.jpg" fill className="object-contain p-2" alt="Partner 2" />
            </div>
            {/* Logo 3 */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-sm bg-white">
              <Image src="/nosotros/3-AIESEC.jpg" fill className="object-cover" alt="Partner 3" />
            </div>
            {/* Logo 4 (Si aplica, según la imagen parece cortado) */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shadow-sm bg-white">
              <Image src="/nosotros/4-NUCLEO.jpg" fill className="object-contain p-2" alt="Partner 4" />
            </div>
          </div>

          {/* Título Partners */}
          <h2 
            className="text-[#1b365d] text-3xl md:text-4xl font-black uppercase text-center md:text-right w-full mt-2"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            Nuestros Partners
          </h2>
        </div>
      </div>


      {/* ==========================================
          SECCIÓN 2: CTA FINAL Y REDES (QUÉ ESPERAS INGE!!!)
          ========================================== */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center w-full mt-20 md:mt-32">

        {/* Bloque Central: Mascota y Redes */}
        <div className="flex flex-col items-center relative">
          
          {/* Mascota Central (Brazos abiertos) */}
          <div className="relative w-[280px] md:w-[480px] h-[300px] md:h-[500px] z-10">
            <Image
              src="/nosotros/COOPER2.png" // Reemplaza con tu ruta
              alt="Únete a Cinergia"
              fill
              className="object-contain"
            />
          </div>

      

        </div>

      </div>

    </section>
  );
}