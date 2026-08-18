import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ComingSoon from "@/components/coming-soon";

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ComingSoon
        kicker="Books"
        title="Your Authentic Signature."
        intro={
          <>
            <p>
              A personal branding handbook &mdash; a guide to discovering,
              defining and communicating your unique brand.
            </p>
            <p className="text-sm text-ink/50">
              The dedicated book page (synopsis, table of contents, sample
              chapter, endorsements) is being built. The handbook itself is
              already available.
            </p>
          </>
        }
        ctas={[
          {
            href: "https://selar.com/1v4g42",
            label: "Download the handbook",
            external: true,
          },
          {
            href: "/about",
            label: "About the author",
            variant: "outline",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
