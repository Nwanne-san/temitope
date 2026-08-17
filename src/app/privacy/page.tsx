import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Temitope Ruth Jacob",
  description:
    "How we collect, use, and protect your information on temitoperuthjacob.com.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "August 2026";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-10 py-12 xl:py-24 max-w-3xl">
        <header className="mb-10">
          <h1 className="font-serif text-3xl md:text-5xl text-secondary font-semibold">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-secondary-2 font-sans">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className="space-y-8 font-sans text-secondary-2 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-secondary mb-3">
              1. Who we are
            </h2>
            <p>
              This site (temitoperuthjacob.com) is operated by Temitope Ruth
              Jacob, a brand strategist based in Abuja, Nigeria. Questions about
              this policy can be sent to{" "}
              <a
                href="mailto:hi@temitoperuthjacob.com"
                className="text-primary hover:underline"
              >
                hi@temitoperuthjacob.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-secondary mb-3">
              2. What we collect
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Newsletter sign-ups:</strong> your email address, when
                you submit the subscription form. This is sent to Mailchimp so
                we can email you updates.
              </li>
              <li>
                <strong>Analytics:</strong> aggregated, anonymous usage data
                (pages visited, referrer, device type) via Vercel Analytics. No
                cookies are set that identify you personally.
              </li>
              <li>
                <strong>Direct contact:</strong> any information you choose to
                share when you email or message us.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-secondary mb-3">
              3. How we use it
            </h2>
            <p>
              We use your email address only to send you the updates you
              subscribed to. We use analytics to understand which pages are
              useful and to improve the site. We do not sell or rent personal
              information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-secondary mb-3">
              4. Third-party services
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Mailchimp</strong> &mdash; hosts our newsletter list. See
                the{" "}
                <a
                  href="https://mailchimp.com/legal/privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Mailchimp privacy policy
                </a>
                .
              </li>
              <li>
                <strong>Vercel</strong> &mdash; hosts the site and provides
                analytics. See the{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Vercel privacy policy
                </a>
                .
              </li>
              <li>
                <strong>External platforms</strong> (Selar, YouTube, Instagram,
                WhatsApp, LinkedIn, X/Twitter, TikTok, Facebook) &mdash; when
                you click out to these, their own privacy policies apply.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-secondary mb-3">
              5. Your rights
            </h2>
            <p>
              You can unsubscribe from the newsletter at any time using the link
              in any email we send, or by writing to us. You can also ask us to
              delete any personal information we hold about you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-secondary mb-3">
              6. Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. Material changes will
              be noted at the top of this page.
            </p>
          </section>

          <p className="pt-4 text-sm">
            <Link href="/" className="text-primary hover:underline">
              &larr; Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
