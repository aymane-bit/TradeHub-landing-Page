# TradeHub public website

This repository contains TradeHub's English-only public website. The static Astro homepage presents TradeHub as a Morocco-first investing platform through a concise startup-style product story, authentic product captures, and verified founder experience.

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
npm run build
docker compose config --quiet
docker compose build
```

## Route

- `/` — responsive landing page with full navigation, an auto-scrolling product carousel, and founder evidence.

The homepage progressively enhances its mobile menu and Product carousel with local JavaScript. With JavaScript disabled, all navigation remains available and all four product experiences render in sequence.

## Structure

- `src/pages/` — landing route.
- `src/components/` — focused landing sections.
- `src/content/site.ts` — approved public copy, links, and asset metadata.
- `src/scripts/landing.ts` — progressive navigation and Product carousel behavior.
- `src/styles/` — shared tokens and page presentation.
- `public/` — approved local brand, product, and founder assets.
- `docs/` — product, design, provenance, verification, and completion records.

The route remains `noindex, nofollow` during development. Legal review, final domain configuration, deployment, and public indexing remain later work.
