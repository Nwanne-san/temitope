import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ComingSoon from "@/components/coming-soon";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ComingSoon
        kicker="Contact"
        title="Let's talk."
        intro={
          <>
            <p>
              A routed contact form (Speak &middot; Consult &middot; Media
              &middot; Other) is on its way. Until then, the fastest ways to
              reach Temitope are below.
            </p>
          </>
        }
        ctas={[
          {
            href: "mailto:hi@temitoperuthjacob.com",
            label: "Email Temitope",
          },
          {
            href: "https://wa.link/dtys70",
            label: "WhatsApp",
            external: true,
            variant: "outline",
          },
        ]}
      >
        <dl className="border-t border-secondary/10 pt-8 grid gap-6 sm:grid-cols-2 text-sm font-sans">
          <div>
            <dt className="text-secondary/50 uppercase tracking-widest text-xs mb-2">
              Email
            </dt>
            <dd className="text-secondary break-all sm:break-normal">hi@temitoperuthjacob.com</dd>
          </div>
          <div>
            <dt className="text-secondary/50 uppercase tracking-widest text-xs mb-2">
              Phone
            </dt>
            <dd className="text-secondary">+(234) 904 404 4138</dd>
          </div>
          <div>
            <dt className="text-secondary/50 uppercase tracking-widest text-xs mb-2">
              Based in
            </dt>
            <dd className="text-secondary">Abuja, Nigeria</dd>
          </div>
          <div>
            <dt className="text-secondary/50 uppercase tracking-widest text-xs mb-2">
              On the web
            </dt>
            <dd className="text-secondary">
              <a
                href="https://ng.linkedin.com/in/temitoperuthjacob"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>{" "}
              &middot;{" "}
              <a
                href="https://www.instagram.com/brandingqueen2"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Instagram
              </a>{" "}
              &middot;{" "}
              <a
                href="https://x.com/thebrand_queen"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                X
              </a>
            </dd>
          </div>
        </dl>
      </ComingSoon>
      <Footer />
    </div>
  );
}
