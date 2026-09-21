# TradeHub public website

Tasks 001–006 build the English-only static Astro/strict TypeScript website. The
homepage now presents the product narrative, authentic product captures, current stage,
verified founder evidence, founder profiles, a demo-first conversion, a visible
provisional disclaimer, and a concise footer. `/demo` is a temporary truthful handoff
page and must be replaced before public launch.

## Development

Use Node **24.21.0** from `.nvmrc` and npm 10 or newer.

```sh
npm ci
npm run dev
```

Open <http://localhost:4321>. The production checks are:

```sh
npm run format:check
npm run lint
npm run check
npm run build
docker compose config --quiet
docker compose build
```

The native Astro development server and Docker workflow are documented in `AGENTS.md`.
Astro produces static HTML with no client JavaScript on `/` or `/demo`.

## Current routes and conversion

- `/` — complete Task 006 landing page.
- `/demo` — development handoff only, with `noindex, nofollow`; it is not the final demo.
- Primary action: **Try the Demo** → `/demo`.
- Secondary action: **See the Product** → `#showcase`.

No registration, login, form, analytics, tracker, cookie, storage, authentication,
production service, or personal-information collection is present. The temporary demo
page has no interface or simulated interactions.

## Structure

- `src/pages/` contains the landing and demo routes.
- `src/components/` contains focused static sections.
- `src/content/site.ts` centralizes public copy and destinations.
- `src/styles/` contains provisional design tokens and responsive presentation.
- `public/` contains approved local assets.
- `docs/` contains the active product, content, design, implementation, provenance,
  decision, and historical completion records.

No dependencies were added in Task 006. Final demo integration begins only after the
Task 007 architecture audit. Production SEO, domain configuration, legal review, and
deployment remain later work.
