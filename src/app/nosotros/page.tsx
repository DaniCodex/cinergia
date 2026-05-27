import PortadaNosotros from "@/component/PortadaNosotros";
import MisionVision from "@/component/MisionVision";
import ValoresEstadisticas from "@/component/ValoresEstadisticas";
import PartnersCTA from "@/component/PartnersCTA"

export default function NosotrosPage() {
  return (
    <main className="w-full min-h-screen bg-[#f8f9fa] pt-32 px-6 md:px-12 lg:px-20">
      <PortadaNosotros />
      <MisionVision />
      <ValoresEstadisticas />
      <PartnersCTA />
    </main>
  );
}