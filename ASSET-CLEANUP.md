# Deployment asset cleanup - October 1, 2026

## Size

- Before: 28,838,054 bytes (28.84 MB).
- After: 18,018,950 bytes (18.02 MB), including this report.
- Reduction: 10.82 MB (37.52%).
- Sizes include all project files except .git. Git history was left untouched (30,000,471 bytes); it is not part of the website deployment.
- MB uses decimal units (1,000,000 bytes).

## Converted images and updated references

| Original | Replacement | Dimensions | Before | After | Treatment |
| --- | --- | --- | ---: | ---: | --- |
| assets/cta.jpg | assets/cta.webp | 1920 x 700 | 238,538 bytes | 103,634 bytes | WebP quality 85; orientation normalized; metadata stripped |
| assets/logo.png | assets/logo.webp | 1192 x 437 | 87,910 bytes | 56,206 bytes | Lossless WebP, including transparency |

Updated all HTML logo references and both CSS CTA references. Updated the Greenhurst gallery's photo-17 reference to assets/homepage-hero-finished-exterior.webp: the original files had identical SHA-256 hashes. Gallery order, image counts, captions, lightbox logic, page copy, and layout rules were retained.

No referenced image required resizing: all gallery widths are at most 1600px and the widest background is 1920px. Existing gallery images are generally 1350 x 1800 or 1024 x 768. The homepage hero is already 1024 x 768; it was not upscaled because upscaling does not add detail. The deck and staircase photos are 1600 x 2133; their widths already satisfy the requested gallery limit. Unused oversized originals were removed rather than converted into additional unused files.

Trial high-quality WebP recompression of larger existing WebP files produced little benefit or larger outputs. Those existing files were retained to avoid unnecessary generational quality loss.

## Removed files (27)

The first group below contains unreferenced photos, legacy placeholders, source/export images, unused directory markers, and a development log. CTA and logo originals were replaced; Greenhurst photo-17 was deduplicated after updating its reference.

- `assets/craft.jpg`
- `assets/detail-1.jpg`
- `assets/detail-2.jpg`
- `assets/detail-3.jpg`
- `assets/hero.jpg`
- `assets/IMG_1582.HEIC`
- `assets/IMG_1582.webp`
- `assets/IMG_2839.JPG`
- `assets/IMG_4345.JPG`
- `assets/IMG_4601.JPG`
- `assets/IMG_5033.JPG`
- `assets/IMG_5134.JPG`
- `assets/IMG_5377.jpeg`
- `assets/work-1.jpg`
- `assets/work-2.jpg`
- `assets/work-3.jpg`
- `assets/projects/corning/before/.gitkeep`
- `assets/projects/corning/before/img_2068.webp`
- `assets/projects/corning/details/.gitkeep`
- `assets/projects/corning/during/.gitkeep`
- `assets/projects/corning/during/img_4653.webp`
- `assets/projects/corning/finished/.gitkeep`
- `assets/projects/corning/video/.gitkeep`
- `debug.log`
- `assets/cta.jpg`
- `assets/logo.png`
- `assets/projects/greenhurst/photo-17.webp`

## Largest remaining assets

| Asset | Size | Reason retained |
| --- | ---: | --- |
| assets/corning-back-deck-yardwork.webp | 1,049,046 bytes | Referenced homepage photo; 1600px width; detailed scene. High-quality recompression did not materially reduce size. |
| assets/projects/corning/before/img_1556.webp | 784,040 bytes | Referenced gallery/lightbox photo, already 1350 x 1800. |
| assets/projects/corning/before/img_1288.webp | 632,864 bytes | Referenced gallery/lightbox photo, already 1350 x 1800. |
| assets/projects/corning/during/img_1967.webp | 601,684 bytes | Referenced gallery/lightbox photo, already 1350 x 1800. |

No remaining asset exceeds 1.05 MB. No videos, MP4s, PDFs, or screenshot/temp files were found beyond the unused originals and development log listed above. Supporting Markdown documentation was retained.

## Validation

- Scanned the entire assets tree and all HTML, CSS, JavaScript, and Markdown for references before removing assets, using decoded file contents.
- All executable asset references resolve. The only nonexistent path found is assets/job-cover.webp in a pre-existing, commented documentation example in projects.js.
- Every remaining image decodes successfully with ImageMagick.
- No exact duplicate assets or unreferenced image files remain.
- Gallery/lightbox JavaScript behavior was not modified; only the identical-image reference in projects.js changed.
- Browser interaction was not exercised in this environment; validation was static plus image decoding.
- Nothing was committed, pushed, or deployed.