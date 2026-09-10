"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [review, setReview] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !review.trim()) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, organization, review }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data?.message || "Your review has been received.");
        setName("");
        setOrganization("");
        setReview("");
      } else {
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-sm bg-lightGray p-8 sm:p-10">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-3">
          Thank you
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl text-secondary mb-3">
          Your review has been received.
        </h3>
        <p className="text-secondary/70 font-sans max-w-lg">
          Temitope reads every submission personally. If yours is a fit for the
          book page, it may be quoted here after review.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center uppercase tracking-widest text-xs font-sans font-medium text-primary hover:text-primary transition-colors"
        >
          Submit another review
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-secondary/60 font-sans">
            Your name <span className="text-primary">*</span>
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "loading"}
            className="mt-2 block w-full bg-transparent border-b border-secondary/20 focus:border-primary focus:outline-none py-2 font-sans text-secondary placeholder:text-secondary/30 transition-colors"
            placeholder="First and last name"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-secondary/60 font-sans">
            Organization
          </span>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            disabled={status === "loading"}
            className="mt-2 block w-full bg-transparent border-b border-secondary/20 focus:border-primary focus:outline-none py-2 font-sans text-secondary placeholder:text-secondary/30 transition-colors"
            placeholder="Company or role"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-secondary/60 font-sans">
          Your review <span className="text-primary">*</span>
        </span>
        <textarea
          required
          value={review}
          onChange={(e) => setReview(e.target.value)}
          disabled={status === "loading"}
          rows={5}
          maxLength={2000}
          className="mt-2 block w-full bg-transparent border border-secondary/15 rounded-sm focus:border-primary focus:outline-none p-3 font-sans text-secondary placeholder:text-secondary/30 transition-colors resize-y"
          placeholder="What has the book meant to you?"
        />
        <span className="mt-1 block text-right text-xs text-secondary/40 font-sans">
          {review.length} / 2000
        </span>
      </label>

      {status === "error" && message && (
        <p role="alert" className="text-sm text-primary font-sans">
          {message}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "loading" || !name.trim() || !review.trim()}
          className="w-full sm:w-auto inline-flex items-center justify-center uppercase tracking-widest text-xs sm:text-sm bg-primary text-white font-sans font-medium px-6 py-3 rounded-tl-3xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending" : "Submit review"}
        </button>
        <p className="text-xs text-secondary/50 font-sans">
          Reviews are moderated before they appear on the site.
        </p>
      </div>
    </form>
  );
}
