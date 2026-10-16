"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  contactPage,
  enquiryTypeFromQuery,
  enquiryTypes,
  type EnquiryType,
  type ReplyMethod,
} from "@/content/contact";

const inputClass =
  "mt-3 w-full border border-border bg-almond px-4 py-3 font-body font-light text-text caret-olive transition-[border-color,box-shadow] duration-layout ease-out-soft focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive/35";

const labelClass = "font-tag block font-body text-[0.6875rem] uppercase tracking-[0.28em] text-muted";

export function ContactForm() {
  const params = useSearchParams();
  const initialEnquiry = useMemo<EnquiryType>(() => {
    const fromUrl = params.get("type");
    if (fromUrl && enquiryTypeFromQuery[fromUrl]) return enquiryTypeFromQuery[fromUrl];
    return "General";
  }, [params]);

  const [enquiry, setEnquiry] = useState<EnquiryType>(initialEnquiry);
  const [reply, setReply] = useState<ReplyMethod>(initialEnquiry === "Wellness at Work" ? "Email" : "WhatsApp");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setEnquiry(initialEnquiry);
    setReply(initialEnquiry === "Wellness at Work" ? "Email" : "WhatsApp");
  }, [initialEnquiry]);

  const wellness = enquiry === "Wellness at Work";
  const phoneRequired = reply === "WhatsApp" && !wellness;

  function onEnquiryChange(next: EnquiryType) {
    setEnquiry(next);
    setReply(next === "Wellness at Work" ? "Email" : "WhatsApp");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setError("");

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      enquiry,
      reply: wellness ? "Email" : reply,
      message: String(fd.get("message") ?? ""),
      updates: fd.get("updates") === "yes",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error || "The message could not be sent. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("The message could not be sent. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="font-heading text-h3 font-light text-forest" role="status">
        {contactPage.success}
      </p>
    );
  }

  return (
    <form className="max-w-xl space-y-8" onSubmit={handleSubmit} autoComplete="on">
      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input className={inputClass} id="name" name="name" autoComplete="name" required />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input className={inputClass} type="email" id="email" name="email" autoComplete="email" required />
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone {phoneRequired ? "" : "(optional)"}
        </label>
        <input
          className={inputClass}
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          required={phoneRequired}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="enquiry">
          What&apos;s your enquiry about?
        </label>
        <select
          className={inputClass}
          id="enquiry"
          name="enquiry"
          value={enquiry}
          onChange={(event) => onEnquiryChange(event.target.value as EnquiryType)}
          required
        >
          {enquiryTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className={labelClass}>How would you prefer we reply?</legend>
        <div className="mt-4 flex flex-col gap-3">
          {(["WhatsApp", "Email"] as const).map((method) => (
            <label key={method} className="flex items-center gap-3 font-body font-light text-text">
              <input
                type="radio"
                name="reply"
                value={method}
                checked={wellness ? method === "Email" : reply === method}
                disabled={wellness && method === "WhatsApp"}
                onChange={() => setReply(method)}
              />
              {method}
            </label>
          ))}
        </div>
        {wellness ? (
          <p className="mt-4 font-body text-sm font-light text-muted">{contactPage.wellnessReplyNote}</p>
        ) : null}
      </fieldset>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          className={`${inputClass} min-h-[180px] resize-y leading-[1.7]`}
          id="message"
          name="message"
          rows={8}
          required
        />
      </div>

      <label className="flex items-start gap-3 font-body text-sm font-light leading-relaxed text-muted">
        <input className="mt-1" type="checkbox" name="updates" value="yes" />
        <span>{contactPage.updatesLabel}</span>
      </label>

      {status === "error" ? (
        <p className="font-body text-sm font-light text-text" role="alert">
          {error} {contactPage.fallback}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-olive px-10 py-3 font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-olive transition-[background-color,border-color,color,transform] duration-layout ease-out-soft hover:border-olive-dark hover:bg-olive hover:text-almond hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 motion-reduce:hover:translate-y-0"
      >
        {status === "sending" ? "Sending" : contactPage.submitLabel}
      </button>
    </form>
  );
}
