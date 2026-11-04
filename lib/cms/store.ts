import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { del, list, put } from "@vercel/blob";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import { emptyCms, type CmsData } from "./types";

/**
 * Storage for the editing area.
 * On Vercel this uses the project's Blob store. Live and preview keep separate copies,
 * so testing on a preview link never changes the live website.
 * Without a Blob token (local development) it falls back to a folder on disk.
 */

const useBlob = Boolean(process.env.BLOB_READ_WRITE_TOKEN);
const envFolder =
  process.env.VERCEL_ENV === "production" ? "live" : process.env.VERCEL_ENV === "preview" ? "preview" : "dev";
const prefix = `cms/${envFolder}/`;
const contentPrefix = `${prefix}content/`;
const localDir = path.join(process.cwd(), ".cms-local");
const localFile = path.join(localDir, "content.json");

/** How many earlier saves to keep, in case something needs rolling back. */
const KEEP_VERSIONS = 40;

function normalise(raw: unknown): CmsData {
  const base = emptyCms();
  if (!raw || typeof raw !== "object") return base;
  const r = raw as Partial<CmsData>;
  return {
    text: r.text && typeof r.text === "object" ? r.text : {},
    images: r.images && typeof r.images === "object" ? r.images : {},
    events: Array.isArray(r.events) ? r.events : [],
    updatedAt: r.updatedAt,
  };
}

/** Always reads the newest saved copy. Used by the editing area. */
export async function readCmsFresh(): Promise<CmsData> {
  try {
    if (!useBlob) {
      const file = await fs.readFile(localFile, "utf8").catch(() => "");
      return normalise(file ? JSON.parse(file) : null);
    }
    const { blobs } = await list({ prefix: contentPrefix, limit: 1000 });
    if (blobs.length === 0) return emptyCms();
    const newest = blobs.sort((a, b) => +new Date(b.uploadedAt) - +new Date(a.uploadedAt))[0];
    const res = await fetch(newest.url, { cache: "no-store" });
    if (!res.ok) return emptyCms();
    return normalise(await res.json());
  } catch (error) {
    console.error("[cms] read failed", error);
    return emptyCms();
  }
}

/**
 * Cached copy for the public website. Refreshed straight away whenever Emma saves,
 * so visitors see changes within a few seconds without slowing the site down.
 */
export const getCms = unstable_cache(readCmsFresh, ["tula-cms-data"], { tags: ["cms"] });

export async function writeCms(data: CmsData): Promise<void> {
  const body = JSON.stringify({ ...data, updatedAt: new Date().toISOString() }, null, 2);
  if (!useBlob) {
    await fs.mkdir(localDir, { recursive: true });
    await fs.writeFile(localFile, body, "utf8");
  } else {
    await put(`${contentPrefix}${Date.now()}.json`, body, {
      access: "public",
      addRandomSuffix: true,
      contentType: "application/json",
      cacheControlMaxAge: 60 * 60 * 24 * 365,
    });
    // Tidy up very old copies.
    try {
      const { blobs } = await list({ prefix: contentPrefix, limit: 1000 });
      const old = blobs
        .sort((a, b) => +new Date(b.uploadedAt) - +new Date(a.uploadedAt))
        .slice(KEEP_VERSIONS)
        .map((b) => b.url);
      if (old.length) await del(old);
    } catch (error) {
      console.error("[cms] tidy failed", error);
    }
  }
  revalidateTag("cms");
  revalidatePath("/", "layout");
}

/** Saves a photo and returns its web address. */
export async function storeImage(file: File): Promise<string> {
  const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const name = `${Date.now()}.${ext}`;
  if (!useBlob) {
    const dir = path.join(process.cwd(), "public", "cms-local");
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, name), Buffer.from(await file.arrayBuffer()));
    return `/cms-local/${name}`;
  }
  const blob = await put(`${prefix}images/${name}`, file, {
    access: "public",
    addRandomSuffix: true,
    contentType: file.type || "image/jpeg",
    cacheControlMaxAge: 60 * 60 * 24 * 365,
  });
  return blob.url;
}
