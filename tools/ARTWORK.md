# Superstar display artwork — v0.7.72

All 80 PNG masters remain unchanged. The game uses matching WebP display copies
at 720 × 1056 pixels (Pillow, Lanczos resize, quality 88, method 6). This supports
the 360px card viewer at 2× resolution without changing the authored aspect ratio.

Combined artwork size: 139,065,226 bytes of PNG masters → 10,815,190 bytes of WebP
display assets (92.2% reduction). PNGs remain in the repository and release ZIP
for editing and fallback; the game downloads them only when WebP loading fails.

Cards and career thumbnails share versioned URLs, asynchronous decoding and a
WebP → PNG → accessible placeholder error path. Collection and selection grids
use native lazy loading. Match and welcome-pack art preload immediately;
background roster warming starts after 1.5 seconds, prioritizes owned cards,
loads two at a time during idle periods, pauses while hidden, and skips data-saver
or 2G connections. Preload requests are deduplicated; failed requests can retry.
The browser HTTP cache reuses the same URLs across screens. No service worker or
new persistent offline cache was introduced.

App, boot, CSS and JS versions are synchronized to 0.7.72. Artwork URLs use the
same app version so later artwork updates invalidate stale cached display files.

To regenerate after editing PNG masters:

    python tools/optimize_artwork.py

Requires Pillow with WebP support. To verify using Playwright with Chromium:

    node tools/verify_artwork.cjs

Verification decodes all 160 artwork URLs, checks mobile game screens, tests PNG
fallback and a missing-art placeholder, and fails on unexpected broken paths or
script errors. This was tested in Chromium at a 390 × 844 viewport; physical
iPhone/Safari testing remains a device check.
