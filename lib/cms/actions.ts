"use server";

import { redirect } from "next/navigation";
import { endSession, passwordMatches, requireSignIn, startSession } from "./auth";
import { defaults, getByPath } from "./content";
import { editablePhotos, findPage, type FieldKind } from "./fields";
import { readCmsFresh, storeImage, writeCms } from "./store";
import type { CmsEvent } from "./types";

/* ---------- Signing in ---------- */

export async function signIn(_prev: { error?: string } | undefined, formData: FormData) {
  const attempt = String(formData.get("password") ?? "");
  if (!passwordMatches(attempt)) {
    await new Promise((r) => setTimeout(r, 800));
    return { error: "That password didn’t work. Please try again." };
  }
  startSession();
  redirect("/admin");
}

export async function signOut() {
  endSession();
  redirect("/admin/login");
}

/* ---------- Wording ---------- */

function parseValue(raw: string, kind: FieldKind): string | string[] {
  const clean = raw.replace(/\r/g, "");
  if (kind === "text") return clean.replace(/\s*\n+\s*/g, " ").trim();
  return clean
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

function same(a: unknown, b: unknown) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export async function saveWording(formData: FormData) {
  requireSignIn();
  const slug = String(formData.get("page") ?? "");
  const page = findPage(slug);
  if (!page) redirect("/admin/wording");
  const resetPath = String(formData.get("reset") ?? "");

  const cms = await readCmsFresh();
  for (const group of page.groups) {
    for (const field of group.fields) {
      if (field.path === resetPath) {
        delete cms.text[field.path];
        continue;
      }
      const raw = formData.get(field.path);
      if (raw === null) continue;
      const value = parseValue(String(raw), field.kind);
      const original = getByPath(defaults, field.path);
      if (same(value, original)) delete cms.text[field.path];
      else cms.text[field.path] = value;
    }
  }
  await writeCms(cms);
  redirect(`/admin/wording/${slug}?saved=${resetPath ? "reset" : "1"}`);
}

/* ---------- Photos ---------- */

export async function uploadPhoto(formData: FormData): Promise<{ url?: string; error?: string }> {
  requireSignIn();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) return { error: "Please choose a photo." };
  if (!file.type.startsWith("image/")) return { error: "That file isn’t a photo." };
  if (file.size > 4 * 1024 * 1024) return { error: "That photo is too large. Please try a smaller one." };
  try {
    return { url: await storeImage(file) };
  } catch (error) {
    console.error("[cms] upload failed", error);
    return { error: "The photo couldn’t be saved. Please try again." };
  }
}

export async function setSitePhoto(key: string, url: string) {
  requireSignIn();
  if (!editablePhotos.some((p) => p.key === key)) return;
  const cms = await readCmsFresh();
  if (url) cms.images[key] = url;
  else delete cms.images[key];
  await writeCms(cms);
}

export async function resetSitePhoto(formData: FormData) {
  requireSignIn();
  await setSitePhoto(String(formData.get("key") ?? ""), "");
  redirect("/admin/photos?saved=reset");
}

/* ---------- Events ---------- */

function field(formData: FormData, name: string, max = 2000) {
  return String(formData.get(name) ?? "").trim().slice(0, max);
}

export async function saveEvent(_prev: { error?: string } | undefined, formData: FormData) {
  requireSignIn();
  const event: CmsEvent = {
    id: field(formData, "id", 64) || `ev-${Date.now().toString(36)}`,
    title: field(formData, "title", 140),
    date: field(formData, "date", 10),
    time: field(formData, "time", 80),
    location: field(formData, "location", 140),
    price: field(formData, "price", 40),
    description: field(formData, "description", 1200),
    image: field(formData, "image", 600),
  };
  if (!event.title) return { error: "Please give the event a name." };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(event.date)) return { error: "Please choose the date of the event." };

  const cms = await readCmsFresh();
  const i = cms.events.findIndex((e) => e.id === event.id);
  if (i >= 0) cms.events[i] = event;
  else cms.events.push(event);
  await writeCms(cms);
  redirect("/admin/events?saved=1");
}

export async function deleteEvent(formData: FormData) {
  requireSignIn();
  const id = String(formData.get("id") ?? "");
  const cms = await readCmsFresh();
  cms.events = cms.events.filter((e) => e.id !== id);
  await writeCms(cms);
  redirect("/admin/events?saved=deleted");
}
