import { NextResponse } from "next/server";

// Reviews are forwarded to Formspree, which sends them to Temitope's inbox for
// moderation. Approved reviews are added to a data file and displayed on
// /books. Configure by setting REVIEWS_FORMSPREE_ENDPOINT to the Formspree
// JSON endpoint (e.g. https://formspree.io/f/xxxxxxxx). This mirrors the
// /api/subscribe pattern — the route stays functional even if unconfigured,
// returning a friendly error instead of crashing.

const MAX_FIELD = 2000;

function clean(value: unknown, cap = MAX_FIELD): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, cap);
}

export async function POST(req: Request) {
  let payload: { name?: unknown; organization?: unknown; review?: unknown };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const organization = clean(payload.organization, 200);
  const review = clean(payload.review);

  if (!name || !review) {
    return NextResponse.json(
      { error: "Name and review are required." },
      { status: 400 }
    );
  }

  const endpoint = process.env.REVIEWS_FORMSPREE_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json(
      { error: "Reviews are not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        organization,
        review,
        _subject: `New review from ${name}${organization ? " (" + organization + ")" : ""}`,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Thank you — your review has been received." });
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { error: "Network error. Please try again." },
      { status: 500 }
    );
  }
}
