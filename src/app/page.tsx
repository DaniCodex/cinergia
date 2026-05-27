import Header from "@/component/Header";
import Metrics from "@/component/Metrics";
import NewsCarousel from "@/component/NewsCarousel"
import Testimonials from "@/component/Testimonials";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <main className="bg-[#f8f9fa]">
      <Header />
      <Metrics />
      <NewsCarousel />
      <Testimonials />
      <Footer />
    </main>
  );
}