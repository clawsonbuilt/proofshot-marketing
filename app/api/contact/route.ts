import { NextResponse } from "next/server";
import { CONTACT_EMAIL, MAIL_FROM } from "@/lib/site";

/**
 * Contact form handler.
 *
 * Sends through Resend's REST API directly rather than the SDK — this is the only
 * server-side network call on the site, and a raw fetch keeps the dependency list at six.
 *
 * RESEND_API_KEY is server-only and must never be exposed as NEXT_PUBLIC_*.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const FROM = MAIL_FROM;
const TO = CONTACT_EMAIL;

const SUBJECT_LABELS: Record<string, string> = {
  general: "General Inquiry",
  support: "Support",
  sales: "Sales",
  partnership: "Partnership",
};

const LIMITS = { name: 100, email: 254, message: 5000 };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = (payload ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 }
    );
  }

  if (
    cleanName.length > LIMITS.name ||
    cleanEmail.length > LIMITS.email ||
    cleanMessage.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "One or more fields is too long." }, { status: 400 });
  }

  // Deliberately permissive — real addresses fail strict regexes more often than
  // spam passes loose ones. Resend rejects genuinely malformed addresses.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const subjectKey = typeof subject === "string" ? subject : "general";
  const subjectLabel = SUBJECT_LABELS[subjectKey] ?? SUBJECT_LABELS.general;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fail loudly. Silently accepting mail we cannot send is the bug this replaces.
    console.error("[contact] RESEND_API_KEY is not set — cannot send message.");
    return NextResponse.json(
      { error: `Contact form is not configured. Please email ${CONTACT_EMAIL}.` },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: cleanEmail,
        subject: `[${subjectLabel}] ${cleanName}`,
        text: [
          `Name:    ${cleanName}`,
          `Email:   ${cleanEmail}`,
          `Subject: ${subjectLabel}`,
          "",
          cleanMessage,
        ].join("\n"),
        html: [
          `<p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>`,
          `<p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>`,
          "<hr />",
          `<p style="white-space:pre-wrap">${escapeHtml(cleanMessage)}</p>`,
        ].join(""),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(`[contact] Resend responded ${response.status}: ${detail}`);
      return NextResponse.json(
        { error: `We couldn't send your message. Please email ${CONTACT_EMAIL}.` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Request to Resend failed:", error);
    return NextResponse.json(
      { error: `We couldn't send your message. Please email ${CONTACT_EMAIL}.` },
      { status: 502 }
    );
  }
}
