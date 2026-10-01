# Building Guide

Open `building-guide.html` locally. No build step or portfolio data is needed.

## Files

- `building-guide.html`: shared site header/footer, hero, guide containers, native detail dialog.
- `building-guide-data.js`: ordered categories and construction option records.
- `building-guide.js`: category index, compact option rows, previews, detail content, and dialog behavior.
- `building-guide.css`: page-only styles using the shared brand variables and responsive breakpoints.

## Adding content

The `categories` array controls section names and order. Every section renders all options whose `category` matches its `id`. Empty sections show an explicit content placeholder.

The four foundation records are populated with empty defaults using `.map()`. To add or fill an option, put its fields in the record; those fields override the defaults. Fields left empty display explicit placeholders; no construction advice is generated.

Set `costLevel` manually to the number `1`, `2`, or `3` to display `$`, `$$`, or `$$$`. Unset, null, or invalid values display “Relative cost: not yet set” only in revealed content. No ratings are currently assigned. Pricing is never shown on inactive rows, and there is no permanent legend. Revealed content includes the note: “Compared with the other options shown. Actual project pricing varies.”

Example record (replace bracketed editorial prompts before publishing):

```js
{
  id: 'unique-option-id', // unique across the entire guide
  category: 'foundations', // matches a categories[].id
  name: '[Option name]',
  costLevel: null, // Replace with 1, 2, or 3 only when approved.
  shortDescription: '[One short, approved sentence]',
  description: '[Approved detail text]',
  pros: ['[Approved benefit]'],
  considerations: ['[Approved consideration]'],
  applications: ['[Approved application]'],
  coverImage: 'assets/building-guide/example-cover.webp',
  coverAlt: '[Describe the actual cover photo]',
  images: [
    {
      src: 'assets/building-guide/example-01.webp',
      alt: '[Describe the actual example photo]',
      caption: '[Optional photo caption]'
    }
  ]
}
```

Add the record to `options` in `building-guide-data.js`; no HTML changes are necessary. Category IDs: `foundations`, `structure`, `roofing`, `exterior`, `envelope`, `mechanical`, `interior`.

Store approved Pointe photos under `assets/building-guide/` (create that directory when adding photos). Paths are relative to the page. Use descriptive alt text. Previews crop covers to their frame; detail images show the full image. Multiple example photos render in the scrollable detail view with captions. If `images` is empty but a cover is present, the detail view uses the cover. Missing or failed images display the photography placeholder. Preview images are created only when an option is first opened.

## Interaction and review

Rows are native buttons with expanded state and a linked preview region. On desktops wider than 900px with a fine hover-capable pointer, inactive rows show only option names. Hovering or focusing a row reveals its description, relative cost, note, and Learn more beneath its name, with a photograph beside the list. Tab from the row reaches Learn more. Keyboard focus takes priority over hover. Leaving the menu hides the preview unless focus remains inside it. Escape dismisses a preview and returns focus to its row.

At narrower widths or on devices without a fine hover-capable pointer, click/tap (or Enter/Space) toggles a preview directly below the row. Opening another row closes the previous preview across the guide. Focus alone does not expand touch-layout rows. Learn more opens the full native dialog in either layout. The dialog contains keyboard focus, makes the background inert, closes with Escape or Close, and returns focus to Learn more. Long content and multiple photos scroll inside the dialog. Reduced motion removes row transitions and smooth anchor scrolling.

In Live Server, review desktop hover, the pointer path into Learn more, keyboard Tab/Shift+Tab and Escape, and mobile tap-to-expand/collapse. Resize between layouts and confirm no horizontal overflow. Test an approved cost rating and photos when available. The other six sections, all four foundation descriptions, photos, pros, considerations, and applications intentionally remain placeholders; costs are unassigned.
