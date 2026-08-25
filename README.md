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

One file per branch/language. `VUE_APP_LANG=fr npm run pdf cv-fr.pdf` picks up
`src/content.fr.js` if that file exists, otherwise falls back to `src/content.js`.

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
}
```

`subEntries` breaks one long entry into named blocks sharing a single date column — use it
for a several-year role covering distinct projects, instead of one flat 17-bullet list:

```js
subEntries: [
  {
    title: 'Project',
    subtitle: 'what it is',   // optional, printed after an em dash in lighter type
    date: '2022–2026',        // optional, right-aligned
    description: 'optional prose',
    tasks: ['optional bullets'],
  },
]
```

Sub-entries never split across a page break. `description`, then `subEntries`, then `tasks`
is the render order, so a trailing tech-stack bullet in `tasks` still lands last.

Set `break: true` on a block in `blocks[]` to force a page break before it.

## Layout notes

- `@page` has 0.3in vertical margins so text never runs to the paper edge on a break;
  horizontal margins stay 0. `--page-height` is the printable height, A4 minus those margins.
- The grey sidebar band is a gradient on `html`, not a background on `#sidebar` — a background
  on the sidebar box stopped at the first page break and left page 2 half white.
- Keep the sidebar shorter than one page: it is a single column with no continuation.
  `./scripts/measure.sh` prints where it ends.
- [Icons](https://fontawesome.com/icons?d=gallery) — FontAwesome 4.7, loaded from a CDN in
  `public/index.html`, so the first build after being offline will lose them.
