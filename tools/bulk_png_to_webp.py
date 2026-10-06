#!/usr/bin/env python3
"""Bulk PNG -> WebP converter for WWE Superstars.

Usage:
    python tools/bulk_png_to_webp.py [folder] [--quality 90] [--delete-png] [--overwrite]

If no folder is supplied, the script prompts for one. Conversion is recursive.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow is not installed. Run: py -m pip install Pillow")
    sys.exit(2)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Recursively convert PNG images to WebP.")
    parser.add_argument("folder", nargs="?", help="Folder containing PNG files")
    parser.add_argument("--quality", type=int, default=90, help="WebP quality 1-100 (default: 90)")
    parser.add_argument("--delete-png", action="store_true", help="Delete each PNG after a successful conversion")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing WebP files")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    folder_text = args.folder or input("Folder containing PNG files: ").strip().strip('"')
    root = Path(folder_text).expanduser().resolve()

    if not root.is_dir():
        print(f"ERROR: Folder not found: {root}")
        return 1
    if not 1 <= args.quality <= 100:
        print("ERROR: --quality must be between 1 and 100.")
        return 1

    pngs = sorted(p for p in root.rglob("*") if p.is_file() and p.suffix.lower() == ".png")
    if not pngs:
        print(f"No PNG files found under: {root}")
        return 0

    print(f"Found {len(pngs)} PNG file(s).")
    print(f"Quality: {args.quality} | Recursive: yes | Preserve transparency: yes")
    print(f"Delete PNGs: {'yes' if args.delete_png else 'no'} | Overwrite WebP: {'yes' if args.overwrite else 'no'}\n")

    converted = skipped = failed = 0
    png_bytes = webp_bytes = 0

    for src in pngs:
        dst = src.with_suffix(".webp")
        if dst.exists() and not args.overwrite:
            print(f"SKIP  {src.relative_to(root)} (WebP already exists)")
            skipped += 1
            continue

        try:
            before = src.stat().st_size
            with Image.open(src) as image:
                image.load()
                # Preserve alpha. Convert palette/grayscale images safely.
                if "A" in image.getbands() or image.mode in ("P", "LA"):
                    image = image.convert("RGBA")
                else:
                    image = image.convert("RGB")
                image.save(dst, "WEBP", quality=args.quality, method=6)

            after = dst.stat().st_size
            png_bytes += before
            webp_bytes += after
            converted += 1
            saving = (1 - after / before) * 100 if before else 0
            print(f"OK    {src.relative_to(root)} -> {dst.name} ({saving:.1f}% smaller)")

            if args.delete_png:
                src.unlink()
        except Exception as exc:
            failed += 1
            print(f"FAIL  {src.relative_to(root)}: {exc}")

    print("\n--- Conversion complete ---")
    print(f"Converted: {converted}")
    print(f"Skipped:   {skipped}")
    print(f"Failed:    {failed}")
    if converted and png_bytes:
        saved = png_bytes - webp_bytes
        pct = (saved / png_bytes) * 100
        print(f"Converted files: {png_bytes / 1048576:.2f} MB -> {webp_bytes / 1048576:.2f} MB ({pct:.1f}% smaller)")

    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
