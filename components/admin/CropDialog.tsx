"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CropRatio } from "@/lib/cms/fields";
import { buttonClass, quietButtonClass } from "./styles";

type Props = {
  file: File;
  ratio: CropRatio;
  onCancel: () => void;
  /** Receives the cropped photo as a JPEG. */
  onDone: (blob: Blob) => void;
  busy?: boolean;
};

const MAX_ZOOM = 4;
/** Longest edge of the saved photo, in pixels. Plenty for a full-width banner. */
const MAX_OUTPUT_EDGE = 2400;

type View = { zoom: number; x: number; y: number };

/**
 * Shows the photo inside a box the same shape as its spot on the website.
 * Drag to move it, use the slider (or pinch / scroll) to zoom, then save.
 */
export function CropDialog({ file, ratio, onCancel, onDone, busy = false }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [error, setError] = useState("");
  const [frame, setFrame] = useState({ w: 0, h: 0 });
  const [view, setView] = useState<View>({ zoom: 1, x: 0, y: 0 });
  const drag = useRef<{ id: number; startX: number; startY: number; x: number; y: number } | null>(null);
  const pinch = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchStart = useRef<{ dist: number; zoom: number } | null>(null);

  // Load the chosen photo.
  useEffect(() => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => setImg(image);
    image.onerror = () => setError("That photo couldn’t be opened. Please try a JPEG or PNG photo.");
    image.src = url;
    return () => URL.revokeObjectURL(url);
  }, [file]);

  // Size the box to fit the screen while keeping the right shape.
  useEffect(() => {
    function measure() {
      const maxW = Math.min(window.innerWidth - 48, 640);
      const maxH = Math.min(window.innerHeight * 0.55, 560);
      let w = maxW;
      let h = (w * ratio.h) / ratio.w;
      if (h > maxH) {
        h = maxH;
        w = (h * ratio.w) / ratio.h;
      }
      setFrame({ w: Math.round(w), h: Math.round(h) });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [ratio]);

  /** Scale at which the photo exactly covers the box. */
  const baseScale = img && frame.w ? Math.max(frame.w / img.naturalWidth, frame.h / img.naturalHeight) : 1;

  const clamp = useCallback(
    (v: View): View => {
      if (!img) return v;
      const zoom = Math.min(MAX_ZOOM, Math.max(1, v.zoom));
      const s = baseScale * zoom;
      const minX = frame.w - img.naturalWidth * s;
      const minY = frame.h - img.naturalHeight * s;
      return { zoom, x: Math.min(0, Math.max(minX, v.x)), y: Math.min(0, Math.max(minY, v.y)) };
    },
    [img, baseScale, frame.w, frame.h],
  );

  // Start centred whenever the photo or box size changes.
  useEffect(() => {
    if (!img || !frame.w) return;
    const s = baseScale;
    setView({ zoom: 1, x: (frame.w - img.naturalWidth * s) / 2, y: (frame.h - img.naturalHeight * s) / 2 });
  }, [img, frame.w, frame.h, baseScale]);

  /** Zoom while keeping the point (cx, cy) in the box still. */
  const zoomTo = useCallback(
    (nextZoom: number, cx = frame.w / 2, cy = frame.h / 2) => {
      setView((v) => {
        const z = Math.min(MAX_ZOOM, Math.max(1, nextZoom));
        const k = z / v.zoom;
        return clamp({ zoom: z, x: cx - (cx - v.x) * k, y: cy - (cy - v.y) * k });
      });
    },
    [clamp, frame.w, frame.h],
  );

  function onPointerDown(e: React.PointerEvent) {
    e.currentTarget.setPointerCapture(e.pointerId);
    pinch.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch.current.size === 2) {
      const [a, b] = [...pinch.current.values()];
      pinchStart.current = { dist: Math.hypot(a.x - b.x, a.y - b.y), zoom: view.zoom };
      drag.current = null;
    } else {
      drag.current = { id: e.pointerId, startX: e.clientX, startY: e.clientY, x: view.x, y: view.y };
    }
  }

  function onPointerMove(e: React.PointerEvent) {
    if (pinch.current.has(e.pointerId)) pinch.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch.current.size === 2 && pinchStart.current) {
      const [a, b] = [...pinch.current.values()];
      const rect = frameRef.current?.getBoundingClientRect();
      const cx = (a.x + b.x) / 2 - (rect?.left ?? 0);
      const cy = (a.y + b.y) / 2 - (rect?.top ?? 0);
      zoomTo((pinchStart.current.zoom * Math.hypot(a.x - b.x, a.y - b.y)) / pinchStart.current.dist, cx, cy);
      return;
    }
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    setView((v) => clamp({ zoom: v.zoom, x: d.x + e.clientX - d.startX, y: d.y + e.clientY - d.startY }));
  }

  function onPointerUp(e: React.PointerEvent) {
    pinch.current.delete(e.pointerId);
    if (pinch.current.size < 2) pinchStart.current = null;
    if (drag.current?.id === e.pointerId) drag.current = null;
  }

  // Scroll wheel / trackpad zoom.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const rect = el!.getBoundingClientRect();
      setView((v) => {
        const z = Math.min(MAX_ZOOM, Math.max(1, v.zoom * Math.exp(-e.deltaY * 0.0015)));
        const cx = e.clientX - rect.left;
        const cy = e.clientY - rect.top;
        const k = z / v.zoom;
        return clamp({ zoom: z, x: cx - (cx - v.x) * k, y: cy - (cy - v.y) * k });
      });
    }
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [clamp]);

  // Escape closes the window.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && !busy) onCancel();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel, busy]);

  async function save() {
    if (!img) return;
    const s = baseScale * view.zoom;
    const sx = -view.x / s;
    const sy = -view.y / s;
    const sw = frame.w / s;
    const sh = frame.h / s;
    // Keep full detail from the original, up to a sensible size.
    const scaleOut = Math.min(1, MAX_OUTPUT_EDGE / Math.max(sw, sh));
    const outW = Math.max(1, Math.round(sw * scaleOut));
    const outH = Math.max(1, Math.round((outW * ratio.h) / ratio.w));
    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d");
    if (!ctx) return setError("Something went wrong. Please try again.");
    ctx.fillStyle = "#F9F8EB";
    ctx.fillRect(0, 0, outW, outH);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, outW, outH);
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.88));
    if (!blob) return setError("Something went wrong. Please try again.");
    onDone(blob);
  }

  const s = baseScale * view.zoom;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Position your photo"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-forest-slab/80 p-4"
    >
      <div className="w-full max-w-[44rem] rounded-2xl bg-almond p-5 shadow-2xl md:p-7">
        <h2 className="font-heading text-[1.9rem] font-light text-forest">Position your photo</h2>
        <p className="mt-1 text-[0.98rem] text-muted">
          Drag the photo to move it. Use the slider to zoom in. Whatever is inside the box will show on the website.
        </p>

        <div className="mt-5 flex justify-center">
          <div
            ref={frameRef}
            data-testid="crop-frame"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="relative cursor-grab touch-none select-none overflow-hidden rounded-md bg-surface outline outline-2 outline-offset-2 outline-sienna active:cursor-grabbing"
            style={{ width: frame.w || 300, height: frame.h || 300 }}
          >
            {img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img.src}
                alt=""
                draggable={false}
                className="pointer-events-none absolute left-0 top-0 max-w-none"
                style={{
                  width: img.naturalWidth * s,
                  height: img.naturalHeight * s,
                  transform: `translate(${view.x}px, ${view.y}px)`,
                }}
              />
            ) : (
              <p className="absolute inset-0 flex items-center justify-center text-sm text-muted">
                {error ? "" : "Opening photo…"}
              </p>
            )}
            {/* Thirds grid to help line things up */}
            <div aria-hidden className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="border border-white/25" />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-[26rem] items-center gap-3">
          <button
            type="button"
            aria-label="Zoom out"
            onClick={() => zoomTo(view.zoom - 0.25)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-xl text-forest"
          >
            &minus;
          </button>
          <input
            type="range"
            aria-label="Zoom"
            min={1}
            max={MAX_ZOOM}
            step={0.01}
            value={view.zoom}
            onChange={(e) => zoomTo(Number(e.target.value))}
            className="w-full accent-[#9A7844]"
          />
          <button
            type="button"
            aria-label="Zoom in"
            onClick={() => zoomTo(view.zoom + 0.25)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-xl text-forest"
          >
            +
          </button>
        </div>

        {error ? <p className="mt-4 text-center text-[0.95rem] text-[#9b3b22]">{error}</p> : null}

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          <button type="button" onClick={onCancel} disabled={busy} className={quietButtonClass}>
            Cancel
          </button>
          <button type="button" onClick={save} disabled={!img || busy} className={buttonClass}>
            {busy ? "Saving…" : "Save photo"}
          </button>
        </div>
      </div>
    </div>
  );
}
