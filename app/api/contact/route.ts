import { NextResponse } from "next/server";
import { enquiryTypes, replyMethods } from "@/content/contact";
import { site } from "@/content/site";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  enquiry?: string;
  reply?: string;
  message?: string;
  updates?: boolean;
};

function isEnquiry(value: string): value is (typeof enquiryTypes)[number] {
  return (enquiryTypes as readonly string[]).includes(value);
}

function isReply(value: string): value is (typeof replyMethods)[number] {
  return (replyMethods as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey || !from) {
    return NextResponse.json(
      { ok: false, error: "Sorry, the form isn't working just yet." },
      { status: 503 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const enquiry = String(body.enquiry ?? "").trim();
  const reply = String(body.reply ?? "").trim();
  const message = String(body.message ?? "").trim();
  const updates = Boolean(body.updates);

  if (!name || !email || !message || !isEnquiry(enquiry) || !isReply(reply)) {
    return NextResponse.json({ ok: false, error: "Please complete the form." }, { status: 400 });
  }

  if (reply === "WhatsApp" && !phone) {
    return NextResponse.json(
      { ok: false, error: "A phone number is needed for WhatsApp." },
      { status: 400 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "Phone: not given",
    `Enquiry: ${enquiry}`,
    `Preferred reply: ${reply}`,
    `Event updates: ${updates ? "yes" : "no"}`,
    "",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `House of Tula enquiry: ${enquiry}`,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "The message could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
