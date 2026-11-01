# ludmila-and-gabriel

Wedding website, based on the [shyamjos/wedding-website](https://github.com/shyamjos/wedding-website) template (Bootstrap 3 + jQuery), wired up with [Vite](https://vite.dev) for a modern dev workflow.

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev
```

Starts a dev server with live reload and on-the-fly SCSS compilation.

## Build

```bash
npm run build
```

Outputs a production-ready static site to `dist/` (minified CSS, compiled SCSS). Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, etc.) at the root of a domain.

```bash
npm run preview
```

Serves the `dist/` build locally to sanity-check before deploying.

## Structure

- `index.html` — page markup
- `src/sass/` — SCSS source (`style.scss` theme styles, `bootstrap.scss` Bootstrap 3 build), compiled by Vite
- `public/` — static assets served as-is: `css/` (vendor CSS with no SCSS source), `js/` (jQuery + plugins, loaded as plain scripts), `fonts/`, `images/`, favicons

## Content to customize

- Names, dates, copy, map embeds, event details: `index.html`
- Countdown target date/timezone: `public/js/clock.js`
- Colors/fonts/spacing: `src/sass/style.scss`
- Photos: `public/images/`
