"use client";

import { FormEvent } from "react";
import { contactPage, site } from "@/data/content";

export function ContactForm() {
  const interests = [...contactPage.interests];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phoneRaw = fd.get("phone");
    const phone = typeof phoneRaw === "string" ? phoneRaw.trim() : "";
    const interest = String(fd.get("interest") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = [
      `${name ? `Note from ${name}` : `A quiet hello`}`,
      interest ? `( ${interest} )` : "",
    ].join(" ");

    const bodyLines = [
      `Submitted via House of Tula contact form`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      ``,
      `Interest: ${interest}`,
      ``,
      `Message`,
      ``,
      message,
    ].filter(Boolean);

    const mailtoHref = [
      `mailto:${site.email}`,
      `?subject=${encodeURIComponent(subject)}`,
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`,
    ].join("");

    window.location.href = mailtoHref;
  }

  const inputClass =
    "mt-3 w-full border border-border bg-almond px-4 py-3 font-body font-light text-text caret-olive focus:border-olive focus:outline-none";

  const labelClass =
    "font-tag block font-body text-[0.6875rem] uppercase tracking-[0.28em] text-muted";

  return (
    <form className="max-w-xl space-y-10" onSubmit={handleSubmit} autoComplete="on">
      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input
          className={inputClass}
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Alex"
          required
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          className={inputClass}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.co.uk"
          required
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone optional
        </label>
        <input
          className={`${inputClass} placeholder:text-muted/70`}
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          placeholder={`e.g. ${site.phoneDisplay}`}
          inputMode="tel"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="interest">
          What are you interested in?
        </label>
        <select
          className={inputClass}
          id="interest"
          name="interest"
          required
          defaultValue=""
        >
          <option value="" disabled hidden>
            Select one softly
          </option>
          {interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          className={`${inputClass} min-h-[220px] resize-y leading-[1.7]`}
          id="message"
          name="message"
          placeholder='Share whatever feels truthful  -  nerves are welcome.'
          rows={10}
          required
        />
      </div>

      <p className="font-body text-xs font-light italic text-muted">{contactPage.formNotes}</p>

      <button
        type="submit"
        className="border border-olive px-10 py-3 font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-olive transition-colors hover:border-olive-dark hover:bg-olive hover:text-almond"
      >
        Submit
      </button>
    </form>
  );
}
