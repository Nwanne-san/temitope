import Navbar from "@/components/navbar";
import LogoCarousel from "@/components/logo-carousel";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Achievements from "@/components/achievements";
import Resources from "@/components/resources";

export default function Home() {
  return (
    <main className="m">
      <section className="bg-gray-200 ">
        <Navbar />
        <Hero />
      </section>
      <section className="mx-auto container px-10">
        <LogoCarousel />
      </section>
      <Achievements />
      <Testimonials />
      <Resources id="resources" />
      <Footer />
    </main>
  );
}
