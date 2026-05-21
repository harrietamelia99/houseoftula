#!/usr/bin/env python3
"""
Remove solid brand-background from the H monogram raster and save a white-on-transparent
PNG suitable for CSS mask-image (luminance) + fill colour in ServicesBand.

Usage (from repo root, with Pillow on PYTHONPATH):
  PYTHONPATH=scripts/.python-lib python3 scripts/remove_monogram_bg.py \\
    --src /path/to/screenshot.png \\
    --out public/images/site/monogram-h.png
"""

from __future__ import annotations

import argparse
import math
from pathlib import Path

from PIL import Image


def corner_bg_rgb(img: Image.Image) -> tuple[float, float, float]:
    px = img.load()
    w, h = img.size
    corners = (px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1])
    return (
        sum(c[0] for c in corners) / 4,
        sum(c[1] for c in corners) / 4,
        sum(c[2] for c in corners) / 4,
    )


def dist_rgb(
    r: int, g: int, b: int, br: float, bg: float, bb: float
) -> float:
    return math.sqrt((r - br) ** 2 + (g - bg) ** 2 + (b - bb) ** 2)


def luminance(r: int, g: int, b: int) -> float:
    return 0.299 * r + 0.587 * g + 0.114 * b


def smoothstep(x: float, lo: float, hi: float) -> float:
    """Map x from [lo, hi] to [0, 1] with clamping (linear; enough for soft edges)."""
    if x <= lo:
        return 0.0
    if x >= hi:
        return 1.0
    return (x - lo) / max(hi - lo, 1e-6)


def ink_rgb_from_bright_pixels(img: Image.Image) -> tuple[int, int, int]:
    """Median cream/white from the brightest opaque samples."""
    px = img.load()
    w, h = img.size
    bright: list[tuple[int, int, int]] = []
    for j in range(h):
        for i in range(w):
            r, g, b, a = px[i, j]
            if a > 200 and luminance(r, g, b) > 210:
                bright.append((r, g, b))
    if not bright:
        return (249, 247, 234)
    bright.sort(key=lambda c: sum(c))
    mid = bright[len(bright) // 2]
    return mid


def decontaminate_edges(
    img: Image.Image,
    *,
    ink_cutoff: float = 145.0,
    edge_blend_hi: float = 215.0,
) -> Image.Image:
    """Drop dark keying halos; soften remaining fringe onto solid ink colour."""
    out = img.copy()
    px = out.load()
    w, h = out.size
    ink = ink_rgb_from_bright_pixels(out)

    for j in range(h):
        for i in range(w):
            r, g, b, a = px[i, j]
            if a == 0:
                continue
            l = luminance(r, g, b)
            if l < ink_cutoff:
                px[i, j] = (0, 0, 0, 0)
                continue
            if l < edge_blend_hi:
                t = smoothstep(l, ink_cutoff, edge_blend_hi)
                px[i, j] = (ink[0], ink[1], ink[2], int(round(a * t)))
            else:
                px[i, j] = (ink[0], ink[1], ink[2], a)

    return out


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--src", type=Path, required=True)
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument(
        "--dist-soft-low",
        type=float,
        default=26.0,
        help="Colour distance fully transparent below this (default: 26)",
    )
    parser.add_argument(
        "--dist-soft-high",
        type=float,
        default=40.0,
        help="Colour distance fully opaque above this (default: 40)",
    )
    parser.add_argument(
        "--luma-soft-low",
        type=float,
        default=138.0,
        help="Luminance fully transparent below this on tan fields (default: 138)",
    )
    parser.add_argument(
        "--luma-soft-high",
        type=float,
        default=150.0,
        help="Luminance fully opaque above this for cream/white ink (default: 150)",
    )
    parser.add_argument(
        "--max-width",
        type=int,
        default=1024,
        help="Resize so width <= this after crop (0 = no resize)",
    )
    parser.add_argument(
        "--preserve-color",
        action="store_true",
        help="Keep source RGB; default writes white ink for CSS masks",
    )
    args = parser.parse_args()

    img = Image.open(args.src).convert("RGBA")
    br, bg, bb = corner_bg_rgb(img)
    px = img.load()
    w, h = img.size
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    opx = out.load()

    d_lo, d_hi = args.dist_soft_low, args.dist_soft_high
    l_lo, l_hi = args.luma_soft_low, args.luma_soft_high

    for j in range(h):
        for i in range(w):
            r, g, b, _ = px[i, j]
            d = dist_rgb(r, g, b, br, bg, bb)
            l = luminance(r, g, b)
            # Distance alone keyed out low-contrast vertical strokes; blend with luminance.
            a = int(
                round(
                    255
                    * max(
                        smoothstep(d, d_lo, d_hi),
                        smoothstep(l, l_lo, l_hi),
                    )
                )
            )
            if a:
                ink = (r, g, b, a) if args.preserve_color else (255, 255, 255, a)
                opx[i, j] = ink
            else:
                opx[i, j] = (0, 0, 0, 0)

    bbox = out.getbbox()
    if bbox:
        out = out.crop(bbox)

    if args.max_width and out.width > args.max_width:
        ratio = args.max_width / out.width
        nw = args.max_width
        nh = max(1, int(round(out.height * ratio)))
        out = out.resize((nw, nh), Image.Resampling.LANCZOS)

    if args.preserve_color:
        out = decontaminate_edges(out)

    args.out.parent.mkdir(parents=True, exist_ok=True)
    out.save(args.out, optimize=True)
    print(
        f"Wrote {args.out} ({out.size[0]}×{out.size[1]}) "
        f"bg ref=({br:.1f},{bg:.1f},{bb:.1f}) "
        f"dist={d_lo}..{d_hi} luma={l_lo}..{l_hi}"
    )


if __name__ == "__main__":
    main()
