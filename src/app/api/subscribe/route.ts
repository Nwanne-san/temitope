import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let email: string | undefined;
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!API_KEY || !AUDIENCE_ID || !SERVER_PREFIX) {
    return NextResponse.json(
      { error: "Newsletter is not configured" },
      { status: 500 }
    );
  }

  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({ message: "Subscription successful" });
    }

    if (result?.title === "Member Exists") {
      return NextResponse.json({ message: "You're already subscribed" });
    }

    return NextResponse.json(
      { error: result?.title || "Failed to subscribe" },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
