# vue-cv

Vue 2 CV generator. All content lives in `src/content.js`; the components only lay it out.
Output is A4, print-first — the browser view is the deliverable, the PDF is printed from it.

## Setup

```
npm install
```

Node 17+ needs `--openssl-legacy-provider` for webpack 4. The npm scripts set it already;
if you run `vue-cli-service` directly, set `NODE_OPTIONS=--openssl-legacy-provider` yourself.
Sass is dart-sass (`sass`), not node-sass — node-sass 4.x does not build on modern Node.

## Commands

| | |
|---|---|
| `npm run dev` | dev server, hot reload |
| `npm run build` | production build into `dist/` |
| `npm run pdf [out.pdf]` | build, serve `dist/`, print to PDF with headless Chrome |
| `./scripts/measure.sh` | after a build: where each section ends, in px, and how full the last page is |
| `swift scripts/pdf-to-png.swift cv.pdf preview [scale]` | rasterise every PDF page to `preview-p1.png`, … to eyeball the pagination |

`npm run pdf` needs Chrome at the default macOS path; override with `CHROME=/path/to/chrome`.
Do not print from the browser's own dialog — it adds headers and its own margins.

## Content format — `src/content.js`

Two locales are bundled: `src/content.js` (en) and `src/content-fr.js` (fr). They have the
same shape; edit both, or they drift.

`VUE_APP_LANG=fr npm run pdf cv-fr.pdf` sets the language the build starts in — that is how a
PDF of one language is printed. In the browser, the **language toggle** in the top-left corner
switches at runtime: it is invisible until hovered, absolutely positioned so it never affects
layout, and `display: none` when printing. `src/mixins/content.js` holds the locale map and a
`Vue.observable` language, so flipping it re-renders everything.

Adding a locale means adding the file, importing it in the mixin's `locales` map, and writing
the translation — the toggle picks up the extra button on its own.

An entry in `blocks[].entries[]`:

```js
{
  title: 'Employer',
  place: 'Role',            // left of the header meta row
  location: 'Town (VD)',    // right of it; location and url no longer collide when long
  url: 'example.ch',
  fromDate: '2026',         // NB: fromDate is the LATER year — it prints on top
  toDate: '2021',
  description: 'Prose paragraph, HTML allowed.',
  subEntries: [ … ],        // optional, see below
  tasks: ['bullet', 'bullet'],
  stack: 'Python, Django, Vue',  // optional accent line, see below
}
```

`stack` is a plain accent-coloured line closing the entry, printed after `subEntries` and
`tasks` with no bullet. Use it for the entry's technologies; don't hand-roll
`<b class='accent'>…</b>` as a trailing bullet, which is what it replaced.

`subEntries` breaks one long entry into named blocks sharing a single date column — use it
for a several-year role covering distinct projects, instead of one flat 17-bullet list:

```js
subEntries: [
  {
    title: 'Project',
    subtitle: 'what it is',   // optional, printed after an em dash in lighter type
    date: '2022–2026',        // optional, right-aligned
    url: 'example.ch',        // optional, right-aligned with a link icon
    description: 'optional prose',
    tasks: ['optional bullets'],
  },
]
```

Put a `url` on the sub-entry rather than the entry when the address belongs to one project
(a freelance entry covering three sites has three urls, and none of them belongs to the header).

Sub-entries never split across a page break. `description`, then `subEntries`, then `tasks`
is the render order, so a trailing tech-stack bullet in `tasks` still lands last.

Set `break: true` on a block in `blocks[]` to force a page break before it.

## Sidebar — `sidebar` in `src/content.js`

`sidebar.contactSection.entries[]` is the CONTACT INFO block: `{ icon: 'fa-phone', value: '…' }`,
rendered monospace with a FontAwesome icon per line. It is only rendered when non-empty.

`sidebar.blocks[]` are the remaining sections (LANGUAGES, TECH STACK). Each has a `name`
(the uppercase heading) and `entries[]` of labelled groups:

```js
{ label: 'Back-end', items: 'Django, Celery, pytest' }
```

`label` prints on its own line in the body colour; `items` prints beneath it, indented,
lighter and greyer. This replaced the older `{ value, complement }` pair, where the second
line was a continuation rather than a list under a heading — which produced lists that read
as if a comma were missing at the line end.

Three type sizes only: section heading 10pt, label and items 8pt, contact lines 8pt monospace.
Group labels and items are distinguished by weight and colour, never by size.

A long section flows across the page break (`break-inside` is set on the individual group, not
on the block) — otherwise TECH STACK jumps whole to page 2 and leaves page 1's sidebar half
empty. `./scripts/measure.sh` reports where the sidebar ends against the one-page limit; keep
it under that, since the sidebar is a single column with no second column to continue into.

## Layout notes

- `@page` has 0.3in vertical margins so text never runs to the paper edge on a break;
  horizontal margins stay 0. `--page-height` is the printable height, A4 minus those margins.
- The grey sidebar band is a gradient on `html`, not a background on `#sidebar` — a background
  on the sidebar box stopped at the first page break and left page 2 half white.
- Keep the sidebar shorter than one page: it is a single column with no continuation.
  `./scripts/measure.sh` prints where it ends. It measures `#contact` and `.side-block-element`,
  not `.side-block` — the latter matches the empty `#disclamer`, which `margin-top: auto` pins to
  the bottom of the page, so it reported a constant regardless of content.
- Vertical rhythm is a ladder, each level wider than the one it contains: inside a sub-entry
  ~4px, between sub-entries ~12px, between entries ~14px (as `padding-bottom` on `.details`,
  not a margin — the timeline is the decorator's `border-left` and only spans its own row, so a
  margin between rows shows up as a break in the line), between sections ~27px.
- `.blocks:last-child .decorator` has no bottom margin. It used to be `0.25in` to taper the
  timeline, which now cuts it off above the `stack` line at the foot of an entry.
- An entry's header is kept with what follows (`break-after: avoid` on `.details > header`), so a
  title is never stranded at the foot of a page. Do **not** put `break-inside: avoid` on `.blocks`:
  an entry taller than one page (Arcanite in French) is then pushed whole to the next page instead
  of splitting, which empties the first page and costs a third one.
- Check both languages after any layout change — French runs ~10% longer than English and hits
  page limits first: `npm run pdf cv-en.pdf && VUE_APP_LANG=fr npm run pdf cv-fr.pdf`.
- **Printing from Chrome's own dialog needs "Background graphics" ticked.** The grey sidebar band
  is a gradient background, and the timeline dots are background-coloured pseudo-elements; without
  it the band disappears and the white masking circle leaves gaps in the timeline. `npm run pdf`
  prints backgrounds and is the supported path.
- [Icons](https://fontawesome.com/icons?d=gallery) — FontAwesome 4.7, loaded from a CDN in
  `public/index.html`, so the first build after being offline will lose them.
