import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ComingSoon from "@/components/coming-soon";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ComingSoon
        kicker="Programs"
        title="Programs from Brand Xperience."
        intro={
          <>
            <p>
              Five named programs are being consolidated here: <strong>SPROUT</strong>{" "}
              (a personal branding conversation), <strong>BrandUp</strong> (a
              personal branding course), <strong>Resonance Blueprint</strong> (a
              strategy masterclass), <strong>Own Your Name</strong> (a university
              tour), and <strong>The Influence Code</strong> (a conference).
            </p>
            <p className="text-sm text-ink/50">
              While the full hub is being built, the current Brand Experience
              Initiative page is still available.
            </p>
          </>
        }
        ctas={[
          { href: "/branding", label: "Current Brand Experience page" },
          {
            href: "https://www.brandxperience.org",
            label: "Visit Brand Xperience",
            external: true,
            variant: "outline",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
