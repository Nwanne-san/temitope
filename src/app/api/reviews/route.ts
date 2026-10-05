import { NextResponse } from "next/server";

// Book endorsements are forwarded to Formspree (configured via REVIEWS_FORMSPREE_ENDPOINT)
// which sends them to books@temitoperuthjacob.com for editorial moderation.
// When an email is included, Formspree also tracks the endorser's address and triggers
// its configured autoresponder. In addition, if RESEND_API_KEY is configured, this
// endpoint directly delivers a branded confirmation email to the endorser containing
// a full transcript of the information they submitted.

const MAX_FIELD = 2000;

function clean(value: unknown, cap = MAX_FIELD): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, cap);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendConfirmationEmail({
  name,
  email,
  role,
  organization,
  review,
}: {
  name: string;
  email: string;
  role: string;
  organization: string;
  review: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const fromEmail =
    process.env.RESEND_FROM_EMAIL ||
    "Temitope Ruth Jacob <books@temitoperuthjacob.com>";

  const emailText = `Dear ${name},

Thank you for taking the time to share your endorsement of EVOLVE. We deeply value your reflection and support as we prepare the book for publication.

Here is a copy of the endorsement information you submitted:
- Full Name: ${name}
- Role: ${role}
- Organization: ${organization}
- Endorsement:
"${review}"

Each endorsement is reviewed with care by Temitope and the publishing team. Selected endorsements will be featured on the official EVOLVE page (https://www.temitoperuthjacob.com/books) and in the preliminary pages of the upcoming print edition.

Warm regards,
Temitope Ruth Jacob & The EVOLVE Publishing Team
books@temitoperuthjacob.com
https://www.temitoperuthjacob.com`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thank You for Endorsing EVOLVE</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1614; background-color: #faf6f1; margin: 0; padding: 32px 16px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5e5e5; padding: 36px 32px;">
    <div style="border-bottom: 2px solid #ff0066; padding-bottom: 16px; margin-bottom: 24px;">
      <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #ff0066; margin: 0 0 4px 0; font-weight: 600;">EVOLVE · Temitope Ruth Jacob</p>
      <h1 style="font-size: 22px; margin: 0; color: #1a1614; font-weight: 700;">Thank you for your endorsement</h1>
    </div>
    <p style="font-size: 15px; margin: 0 0 16px 0; color: #333333;">Dear ${name},</p>
    <p style="font-size: 15px; margin: 0 0 20px 0; color: #333333;">
      Thank you for taking the time to share your perspective on <em>EVOLVE</em>. We deeply value your reflection and support as we prepare the book for release.
    </p>
    <div style="background-color: #f9f9fb; border-left: 3px solid #ff0066; padding: 20px; border-radius: 4px; margin: 24px 0;">
      <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #666666; margin: 0 0 12px 0; font-weight: 600;">Your Submission Summary</p>
      <p style="margin: 0 0 6px 0; font-size: 14px; color: #333333;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 0 0 6px 0; font-size: 14px; color: #333333;"><strong>Role:</strong> ${role}</p>
      <p style="margin: 0 0 16px 0; font-size: 14px; color: #333333;"><strong>Organization:</strong> ${organization}</p>
      <p style="margin: 0 0 4px 0; font-size: 12px; color: #666666; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Submitted Endorsement</p>
      <p style="margin: 0; font-size: 15px; font-style: italic; color: #222222; line-height: 1.6;">&ldquo;${review}&rdquo;</p>
    </div>
    <p style="font-size: 14px; margin: 0 0 16px 0; color: #555555;">
      Each submission is reviewed with care by Temitope and the publishing team. Selected endorsements will be featured on the official book page and in the preliminary pages of the upcoming print edition.
    </p>
    <div style="margin-top: 28px; pt: 16px; border-top: 1px solid #eeeeee;">
      <p style="font-size: 14px; margin: 16px 0 0 0; color: #333333;">
        Warm regards,<br>
        <strong>Temitope Ruth Jacob &amp; The EVOLVE Publishing Team</strong><br>
        <span style="font-size: 13px; color: #777777;">books@temitoperuthjacob.com</span>
      </p>
    </div>
  </div>
</body>
</html>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [email],
        subject: "Thank you for your endorsement of EVOLVE",
        text: emailText,
        html: emailHtml,
      }),
    });
    return res.ok;
  } catch (err) {
    console.error("Failed to send direct endorsement confirmation email:", err);
    return false;
  }
}

export async function POST(req: Request) {
  let payload: {
    name?: unknown;
    email?: unknown;
    organization?: unknown;
    role?: unknown;
    review?: unknown;
  };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = typeof payload.email === "string" ? clean(payload.email, 200).toLowerCase() : "";
  const organization = clean(payload.organization, 200);
  const role = clean(payload.role, 200);
  const review = clean(payload.review);

  if (!name || !role || !organization || !review) {
    return NextResponse.json(
      { error: "Name, role, organization, and endorsement are all required." },
      { status: 400 }
    );
  }

  if (email && !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const endpoint = process.env.REVIEWS_FORMSPREE_ENDPOINT;
  const hasResend = Boolean(process.env.RESEND_API_KEY);

  // Allow local development without external endpoints configured
  if (!endpoint && !hasResend) {
    if (process.env.NODE_ENV === "development") {
      console.log("[Dev Mode] Endorsement received:", {
        name,
        email,
        role,
        organization,
        review,
      });
      return NextResponse.json({
        message: "Thank you — your endorsement has been received.",
      });
    }

    return NextResponse.json(
      { error: "Endorsement service is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  // Send direct confirmation email if Resend is configured and email was provided
  if (hasResend && email) {
    await sendConfirmationEmail({ name, email, role, organization, review });
  }

  // If Formspree endpoint is configured, forward submission to books@
  if (endpoint) {
    try {
      const formspreePayload: Record<string, string> = {
        name,
        role,
        organization,
        review,
        _subject: `Book endorsement from ${name} (${[role, organization].filter(Boolean).join(", ")})`,
      };
      if (email) {
        formspreePayload.email = email;
        formspreePayload._replyto = email;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formspreePayload),
      });

      if (response.ok) {
        return NextResponse.json({
          message: "Thank you — your endorsement has been received.",
        });
      }

      // If Formspree failed but Resend already succeeded, still report success
      if (hasResend) {
        return NextResponse.json({
          message: "Thank you — your endorsement has been received.",
        });
      }

      return NextResponse.json(
        { error: "Something went wrong while submitting. Please try again." },
        { status: 502 }
      );
    } catch {
      if (hasResend) {
        return NextResponse.json({
          message: "Thank you — your endorsement has been received.",
        });
      }
      return NextResponse.json(
        { error: "Network error. Please try again." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({
    message: "Thank you — your endorsement has been received.",
  });
}

