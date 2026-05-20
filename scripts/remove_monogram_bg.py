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


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--src", type=Path, required=True)
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument(
        "--edge-low",
        type=float,
        default=28.0,
        help="Distance below this: fully transparent (default: 28)",
    )
    parser.add_argument(
        "--edge-high",
        type=float,
        default=36.0,
        help="Distance above this: fully opaque white (default: 36)",
    )
    parser.add_argument(
        "--max-width",
        type=int,
        default=1024,
        help="Resize so width <= this after crop (0 = no resize)",
    )
    args = parser.parse_args()

    img = Image.open(args.src).convert("RGBA")
    br, bg, bb = corner_bg_rgb(img)
    px = img.load()
    w, h = img.size
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    opx = out.load()

    lo, hi = args.edge_low, args.edge_high
    span = max(hi - lo, 1e-6)

    for j in range(h):
        for i in range(w):
            r, g, b, _ = px[i, j]
            d = dist_rgb(r, g, b, br, bg, bb)
            if d <= lo:
                a = 0
            elif d >= hi:
                a = 255
            else:
                a = int(round(255 * (d - lo) / span))
            if a:
                opx[i, j] = (255, 255, 255, a)
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

    args.out.parent.mkdir(parents=True, exist_ok=True)
    out.save(args.out, optimize=True)
    print(
        f"Wrote {args.out} ({out.size[0]}×{out.size[1]}) "
        f"bg ref=({br:.1f},{bg:.1f},{bb:.1f}) edges={lo}..{hi}"
    )


if __name__ == "__main__":
    main()
