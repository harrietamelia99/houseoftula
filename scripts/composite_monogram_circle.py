#!/usr/bin/env python3
"""Composite forest H monogram centred inside a ring on a transparent square PNG."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageDraw

# forest @ ~35% on surface — readable ring matching `border-forest/35`
RING_RGBA = (85, 84, 57, 140)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ink", type=Path, required=True, help="Transparent H PNG")
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument("--size", type=int, default=200, help="Output square (px)")
    parser.add_argument("--ring-width", type=int, default=2)
    parser.add_argument("--padding", type=int, default=6)
    args = parser.parse_args()

    ink = Image.open(args.ink).convert("RGBA")
    size = args.size
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)

    inset = args.padding
    draw.ellipse(
        (inset, inset, size - inset - 1, size - inset - 1),
        outline=RING_RGBA,
        width=args.ring_width,
    )

    inner = size - 2 * inset - 2 * args.ring_width
    scale = min(inner / ink.width, inner / ink.height) * 0.52
    tw = max(1, int(round(ink.width * scale)))
    th = max(1, int(round(ink.height * scale)))
    ink_fit = ink.resize((tw, th), Image.Resampling.LANCZOS)

    x = (size - tw) // 2
    y = (size - th) // 2
    canvas.paste(ink_fit, (x, y), ink_fit)

    args.out.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(args.out, optimize=True)
    print(f"Wrote {args.out} ({size}×{size})")


if __name__ == "__main__":
    main()
