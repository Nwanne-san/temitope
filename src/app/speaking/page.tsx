import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ComingSoon from "@/components/coming-soon";

export default function SpeakingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ComingSoon
        kicker="Speaking"
        title="Book Temitope to speak."
        intro={
          <>
            <p>
              Signature talks on personal branding, African brand identity, and
              the shift from execution to influence. Past stages include
              TEDxSamaru, NECCI PR Roundtable, PerformX Summit, the Upgrade
              Marketing Conference, and MYFICON.
            </p>
            <p className="text-sm text-ink/50">
              The full page &mdash; signature topics, reel, downloadable
              one-sheet, and a booking form &mdash; is coming shortly. In the
              meantime, reach out directly.
            </p>
          </>
        }
        ctas={[
          { href: "/contact", label: "Enquire about speaking" },
          { href: "/about", label: "About Temitope", variant: "outline" },
        ]}
      />
      <Footer />
    </div>
  );
}
