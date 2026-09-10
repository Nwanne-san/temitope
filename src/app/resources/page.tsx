import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ResourcesHub from "@/components/resources/resources-hub";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 max-w-4xl">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-4">
            Resources
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-secondary font-semibold leading-tight mb-6">
            Free tools to build your personal brand.
          </h1>
          <p className="text-base sm:text-lg text-secondary/70 font-sans leading-relaxed max-w-3xl">
            The BrandUp Accelerator, videos from Temitope&rsquo;s YouTube, her
            published essays, past talks, and the upcoming podcast. All in one
            place.
          </p>
        </div>
      </section>

      <ResourcesHub />

      <Footer />
    </div>
  );
}
