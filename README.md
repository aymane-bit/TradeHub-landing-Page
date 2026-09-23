# TradeHub public website

This repository contains TradeHub's English-only public website and isolated interactive demo. The static Astro homepage presents TradeHub as a Morocco-first investing platform through a concise startup-style product story, authentic product captures, verified founder experience, and a direct path into the demo.

## Development

Use Node **24.21.0** from `.nvmrc` and npm 10 or newer.

```sh
npm ci
npm run dev
```

Open <http://localhost:4321>. Production checks:

```sh
npm run format:check
npm run lint
npm run check
npm run test:tour
npm run build
docker compose config --quiet
docker compose build
```

## Routes

- `/` — responsive landing page with full navigation, product tabs, founder evidence, and demo-first conversion.
- `/demo` — isolated browser-local product simulation with an optional guided tour.

The homepage progressively enhances its mobile menu and product tabs with about 1KB gzip of local JavaScript. With JavaScript disabled, all navigation remains available and all four product experiences render in sequence.

The demo uses reviewed synthetic fixtures and one versioned `localStorage` record. It does not call the real TradeHub application, a production API, analytics, tracking, authentication, or live market-data services.

## Structure

- `src/pages/` — landing and demo routes.
- `src/components/` — focused landing sections.
- `src/content/site.ts` — approved public copy, links, and asset metadata.
- `src/scripts/landing.ts` — progressive landing navigation and tabs.
- `src/demo/`, `src/scripts/demo.ts`, `src/scripts/tour.ts` — isolated demo and guided tour.
- `src/styles/` — shared tokens and route-specific presentation.
- `public/` — approved local brand, product, and founder assets.
- `docs/` — product, design, provenance, architecture, verification, and completion records.

Both routes remain `noindex, nofollow` during development. Legal review, final domain configuration, deployment, and public indexing remain later work.
