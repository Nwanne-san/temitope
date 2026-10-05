"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

interface SubmittedPayload {
  name: string;
  role: string;
  organization: string;
  review: string;
}

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [organization, setOrganization] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<SubmittedPayload | null>(
    null
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanRole = role.trim();
    const cleanOrg = organization.trim();
    const cleanReview = review.trim();

    if (!cleanName || !cleanRole || !cleanOrg || !cleanReview) {
      setStatus("error");
      setMessage("Please complete all required fields.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          role: cleanRole,
          organization: cleanOrg,
          review: cleanReview,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setSubmittedData({
          name: cleanName,
          role: cleanRole,
          organization: cleanOrg,
          review: cleanReview,
        });
        setMessage(
          data?.message || "Thank you — your endorsement has been received."
        );
        setName("");
        setRole("");
        setOrganization("");
        setReview("");
      } else {
        setStatus("error");
        setMessage(
          data?.error || "Unable to submit your endorsement. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "A network error occurred. Please check your connection and try again."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setMessage("");
    setSubmittedData(null);
  };

  if (status === "success" && submittedData) {
    return (
      <div className="rounded-xl bg-lightGray/70 border border-primary/20 p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2.5 text-primary">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <p className="text-xs font-semibold tracking-[0.2em] uppercase font-sans">
            Endorsement received
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-medium">
            Thank you for sharing your reflection.
          </h3>
          <p className="text-secondary/80 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
            We are truly grateful for your time and thoughtful words. Temitope
            and the publishing team reads every submission with care, your
            endorsements will be featured on this page and in upcoming print
            editions.
          </p>
        </div>

        {/* Submitted Information Summary */}
        <div className="bg-white/80 rounded-lg p-5 sm:p-6 border border-secondary/10 space-y-3 font-sans text-sm">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary/60">
            Summary of your submission
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-secondary">
            <div>
              <span className="text-xs text-secondary/60 block">Full Name</span>
              <span className="font-medium">{submittedData.name}</span>
            </div>
            <div>
              <span className="text-xs text-secondary/60 block">
                Role &amp; Organization
              </span>
              <span className="font-medium">
                {submittedData.role}, {submittedData.organization}
              </span>
            </div>
          </div>
          <div className="pt-2 border-t border-secondary/10">
            <span className="text-xs text-secondary/60 block mb-1">
              Endorsement
            </span>
            <p className="font-serif italic text-secondary text-sm sm:text-base leading-relaxed">
              &ldquo;{submittedData.review}&rdquo;
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center uppercase tracking-widest text-xs font-sans font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
        >
          Submit another endorsement
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <label className="block">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-secondary/70 font-sans">
          Full name <span className="text-primary">*</span>
        </span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "loading"}
          className="mt-2 block w-full bg-transparent border-b border-secondary/20 focus:border-primary focus:outline-none py-2 font-sans text-secondary placeholder:text-secondary/35 transition-colors"
          placeholder="First and last name"
        />
      </label>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-secondary/70 font-sans">
            Role or title <span className="text-primary">*</span>
          </span>
          <input
            type="text"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={status === "loading"}
            className="mt-2 block w-full bg-transparent border-b border-secondary/20 focus:border-primary focus:outline-none py-2 font-sans text-secondary placeholder:text-secondary/35 transition-colors"
            placeholder="e.g. Chief Executive Officer, Founder"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-secondary/70 font-sans">
            Organization <span className="text-primary">*</span>
          </span>
          <input
            type="text"
            required
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            disabled={status === "loading"}
            className="mt-2 block w-full bg-transparent border-b border-secondary/20 focus:border-primary focus:outline-none py-2 font-sans text-secondary placeholder:text-secondary/35 transition-colors"
            placeholder="Company or institution"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-secondary/70 font-sans">
          Endorsement <span className="text-primary">*</span>
        </span>
        <textarea
          required
          value={review}
          onChange={(e) => setReview(e.target.value)}
          disabled={status === "loading"}
          rows={5}
          maxLength={2000}
          className="mt-2 block w-full bg-transparent border border-secondary/20 rounded-md focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none p-3.5 font-sans text-secondary placeholder:text-secondary/35 transition-colors resize-y leading-relaxed"
          placeholder="Share 2–3 sentences on what you think about EVOLVE, its core message, or its relevance."
        />
        <span className="mt-1 block text-right text-xs text-secondary/40 font-sans">
          {review.length} / 2000
        </span>
      </label>

      {status === "error" && message && (
        <p role="alert" className="text-sm text-primary font-sans font-medium">
          {message}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={
            status === "loading" ||
            !name.trim() ||
            !role.trim() ||
            !organization.trim() ||
            !review.trim()
          }
          className="w-full sm:w-auto inline-flex items-center justify-center uppercase tracking-widest text-xs sm:text-sm bg-primary text-white font-sans font-medium px-6 py-3 rounded-tl-3xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          {status === "loading" ? "Submitting..." : "Submit endorsement"}
        </button>
      </div>
    </form>
  );
}
