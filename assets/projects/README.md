# Supporting project photography

Add optimized WebP or JPEG files beneath one folder per real project: `renovations/<slug>/`, `exterior/<slug>/`, `sitework/<slug>/`, or `mechanical/<slug>/`. Folder organization inside a project is optional.

List each file in the matching project's `images` array in `projects.js` as `{ src, alt, caption?, stage? }`. Supported stages are `before`, `progress`, `finished`, and `detail`. Set `cover` to the strongest finished image when available; otherwise the page automatically uses the first finished image or the first project image. Do not use HEIC files directly on the site.
