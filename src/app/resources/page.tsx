import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ComingSoon from "@/components/coming-soon";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ComingSoon
        kicker="Resources"
        title="Free tools to build your personal brand."
        intro={
          <>
            <p>
              A filterable library &mdash; free downloads, articles, podcast
              episodes, videos, and community links &mdash; is being built. In
              the meantime, the current selection is featured on the home page,
              and the personal branding handbook is available to download.
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
            href: "https://temitoperuthjacob.medium.com",
            label: "Read the articles",
            external: true,
            variant: "outline",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
