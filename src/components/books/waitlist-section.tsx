import { ArrowUpRight } from "lucide-react";

interface WaitlistSectionProps {
  formUrl: string;
  price: string;
  discountNote: string;
}

// Embeds the Google Form directly for a native-feeling waitlist experience.
// The Google Form's /viewform URL is derived from the shortened forms.gle URL
// by appending "?embedded=true"; the shortened URL will 301 to the full form.
// A visible "open in a new tab" link is provided as a fallback if the iframe
// is blocked or fails to render.
export default function WaitlistSection({
  formUrl,
  price,
  discountNote,
}: WaitlistSectionProps) {
  // Use direct docs.google.com embed URL to bypass 302 redirect blocking in iframes
  const embedUrl = formUrl.includes("docs.google.com/forms")
    ? (formUrl.includes("embedded=true") ? formUrl : `${formUrl}?embedded=true`)
    : "https://docs.google.com/forms/d/e/1FAIpQLSdQi0TKzY7wucm4RRcb2_EIGbUIr_S8A82GCIFX-nhih1a70g/viewform?embedded=true";

  return (
    <div className="grid lg:grid-cols-5 gap-10 items-start">
      <div className="lg:col-span-2 space-y-6">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
          Join the waitlist
        </p>
        <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl text-secondary leading-tight break-words">
          Get first access and a launch discount.
        </h2>
        <p className="text-sm sm:text-base text-secondary/70 font-sans leading-relaxed break-words">
          The paperback is <span className="text-secondary font-medium">{price}</span>.{" "}
          {discountNote} Everyone on the waitlist hears about the release before
          the general audience.
        </p>
        <ul className="space-y-2 text-sm text-secondary/70 font-sans">
          <li className="flex gap-3">
            <span className="text-primary">→</span> First access when the book goes
            live.
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span> A launch-week discount off the
            paperback price.
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span> Occasional updates from Temitope
            while the book is being finished.
          </li>
        </ul>
        <a
          href={formUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-sans font-medium text-primary hover:text-primary transition-colors break-words"
        >
          Open the form in a new tab
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="lg:col-span-3">
        <div className="rounded-sm border border-secondary/10 bg-white overflow-hidden shadow-sm">
          <iframe
            src={embedUrl}
            title="Join the Evolve waitlist"
            className="w-full min-h-[720px] bg-white"
            loading="lazy"
          >
            Loading
          </iframe>
        </div>
      </div>
    </div>
  );
}
