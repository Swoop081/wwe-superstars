"""Regenerate display assets from untouched PNG masters (requires Pillow)."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]

def main():
    masters = sorted((ROOT / 'assets/superstars').glob('*.png'))
    total = 0
    for path in masters:
        with Image.open(path) as source:
            image = ImageOps.exif_transpose(source).convert('RGBA')
            image.thumbnail((720, 1056), Image.Resampling.LANCZOS)
            output = path.with_suffix('.webp')
            image.save(output, 'WEBP', quality=88, method=6)
            total += output.stat().st_size
    original = sum(path.stat().st_size for path in masters)
    print(f'{len(masters)} assets: {original:,} PNG bytes -> {total:,} WebP bytes ({1-total/original:.1%} smaller)')

if __name__ == '__main__':
    main()
