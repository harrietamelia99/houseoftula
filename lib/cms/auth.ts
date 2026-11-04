import "server-only";
import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "tula_edit";
const THIRTY_DAYS = 60 * 60 * 24 * 30;

function secret(): string {
  return process.env.CMS_SECRET || "local-dev-secret-change-me";
}

export function cmsPassword(): string {
  return process.env.CMS_PASSWORD || (process.env.VERCEL ? "" : "tula-dev");
}

function sign(value: string): string {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function passwordMatches(attempt: string): boolean {
  const real = cmsPassword();
  if (!real) return false;
  // Compare hashes so the check takes the same time whatever is typed.
  return safeEqual(sign(`pw:${attempt.trim()}`), sign(`pw:${real}`));
}

export function startSession() {
  const expires = Math.floor(Date.now() / 1000) + THIRTY_DAYS;
  cookies().set(COOKIE, `${expires}.${sign(String(expires))}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: THIRTY_DAYS,
  });
}

export function endSession() {
  cookies().delete(COOKIE);
}

export function isSignedIn(): boolean {
  const raw = cookies().get(COOKIE)?.value;
  if (!raw) return false;
  const [expires, sig] = raw.split(".");
  if (!expires || !sig) return false;
  if (Number(expires) < Date.now() / 1000) return false;
  return safeEqual(sig, sign(expires));
}

/** Use at the top of every editing page and action. */
export function requireSignIn() {
  if (!isSignedIn()) redirect("/admin/login");
}
