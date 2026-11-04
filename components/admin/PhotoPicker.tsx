"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { setSitePhoto, uploadPhoto } from "@/lib/cms/actions";
import type { CropRatio } from "@/lib/cms/fields";
import { CropDialog } from "./CropDialog";
import { buttonClass, quietButtonClass } from "./styles";

type Props = { ratio: CropRatio; label?: string } & (
  | { mode: "site"; photoKey: string }
  | { mode: "field"; name: string; initial?: string }
);

/**
 * "Choose a new photo" button.
 * After picking a photo, Emma positions it in a box the same shape as its spot on the site.
 * mode "site": swaps a photo on the website straight away.
 * mode "field": fills a hidden field in a form (used for event photos).
 */
export function PhotoPicker(props: Props) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState(props.mode === "field" ? props.initial ?? "" : "");

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = e.target.files?.[0];
    e.target.value = "";
    if (!picked) return;
    setError("");
    if (!picked.type.startsWith("image/") && !/\.(jpe?g|png|webp|heic|heif)$/i.test(picked.name)) {
      setError("That file isn’t a photo. Please choose a photo.");
      return;
    }
    setFile(picked);
  }

  async function onCropped(blob: Blob) {
    setBusy(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", new File([blob], "photo.jpg", { type: "image/jpeg" }));
      const result = await uploadPhoto(fd);
      if (!result.url) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      if (props.mode === "site") {
        await setSitePhoto(props.photoKey, result.url);
        setFile(null);
        router.replace("/admin/photos?saved=1");
        router.refresh();
      } else {
        setValue(result.url);
        setFile(null);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const ratioClass = { aspectRatio: `${props.ratio.w} / ${props.ratio.h}` };

  return (
    <div>
      {props.mode === "field" ? (
        <>
          <input type="hidden" name={props.name} value={value} />
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" style={ratioClass} className="mb-3 w-full max-w-[22rem] rounded-lg border border-border object-cover" />
          ) : (
            <p className="mb-3 text-sm text-muted">No photo chosen. The default event photo will be used.</p>
          )}
        </>
      ) : null}
      <input ref={input} type="file" accept="image/*" className="hidden" onChange={onPick} data-testid="photo-input" />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={() => input.current?.click()}
          className={props.mode === "site" ? buttonClass : quietButtonClass}
        >
          {props.label ?? "Choose a new photo"}
        </button>
        {props.mode === "field" && value ? (
          <button type="button" className="text-sm text-muted underline underline-offset-2" onClick={() => setValue("")}>
            Remove photo
          </button>
        ) : null}
      </div>
      {error && !file ? <p className="mt-2 text-sm text-[#9b3b22]">{error}</p> : null}
      {file ? (
        <CropDialog
          file={file}
          ratio={props.ratio}
          busy={busy}
          onCancel={() => {
            setFile(null);
            setError("");
          }}
          onDone={onCropped}
        />
      ) : null}
      {file && error ? (
        <p role="alert" className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-lg bg-[#9b3b22] px-4 py-2 text-sm text-almond">
          {error}
        </p>
      ) : null}
    </div>
  );
}
