"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { setSitePhoto, uploadPhoto } from "@/lib/cms/actions";
import { buttonClass, quietButtonClass } from "./styles";

/** Shrinks big phone photos before they are uploaded, so saving is quick. */
async function shrink(file: File, maxEdge = 2400): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const keepPng = file.type === "image/png" && file.size < 3_000_000;
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, keepPng ? "image/png" : "image/jpeg", 0.86),
    );
    return blob ?? file;
  } catch {
    return file;
  }
}

type Props =
  | { mode: "site"; photoKey: string; label?: string }
  | { mode: "field"; name: string; initial?: string; label?: string };

/**
 * "Choose a new photo" button.
 * mode "site": swaps a photo on the website straight away.
 * mode "field": fills a hidden field in a form (used for event photos).
 */
export function PhotoPicker(props: Props) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState(props.mode === "field" ? props.initial ?? "" : "");

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setError("");
    setBusy(true);
    try {
      const small = await shrink(file);
      const fd = new FormData();
      const type = small.type || "image/jpeg";
      fd.append("file", new File([small], type === "image/png" ? "photo.png" : "photo.jpg", { type }));
      const result = await uploadPhoto(fd);
      if (!result.url) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      if (props.mode === "site") {
        await setSitePhoto(props.photoKey, result.url);
        router.replace("/admin/photos?saved=1");
        router.refresh();
      } else {
        setValue(result.url);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      {props.mode === "field" ? (
        <>
          <input type="hidden" name={props.name} value={value} />
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="mb-3 aspect-[4/3] w-full max-w-[22rem] rounded-lg border border-border object-cover" />
          ) : (
            <p className="mb-3 text-sm text-muted">No photo chosen. The default event photo will be used.</p>
          )}
        </>
      ) : null}
      <input ref={input} type="file" accept="image/*" className="hidden" onChange={onPick} />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={() => input.current?.click()}
          className={props.mode === "site" ? buttonClass : quietButtonClass}
        >
          {busy ? "Uploading…" : props.label ?? "Choose a new photo"}
        </button>
        {props.mode === "field" && value ? (
          <button type="button" className="text-sm text-muted underline underline-offset-2" onClick={() => setValue("")}>
            Remove photo
          </button>
        ) : null}
      </div>
      {error ? <p className="mt-2 text-sm text-[#9b3b22]">{error}</p> : null}
    </div>
  );
}
