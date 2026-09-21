# TradeHub public website

Task 002 builds on the English-only static Astro/strict TypeScript foundation.
The homepage implements the header and hero with approved logo/product imagery and provisional styling.
The main TradeHub application, backend, and future interactive demo are separate projects.

## Native development

Use Node **24.21.0** (pinned in `.nvmrc`) and npm 10 or newer. The system's Node 20 is insufficient.
With nvm installed, run `nvm install` then `nvm use`. No environment secrets are required.

```sh
npm install
npm run dev
```

Open <http://localhost:4321>. After initial setup, prefer `npm ci` to reproduce the lockfile.
Stop a foreground server with Ctrl+C. Astro may run in the background when invoked
by an agent; use `npm run dev -- stop` to stop that instance before starting Docker.
Astro's development server may inject development-only tooling; production output contains no client JavaScript.

## Docker development

Requires Docker Engine and Docker Compose with permission to access the Docker daemon.
From this repository:

```sh
docker compose config
docker compose build
docker compose up
```

Open <http://localhost:4321>. Source, public assets, Astro config, and TypeScript config are
mounted read-only with live reload. Dependencies and generated files stay in the container.
The host port binds only to loopback. Stop with Ctrl+C, then `docker compose down`.
For background use, `docker compose up -d` and `docker compose logs web`.
Rebuild with `docker compose up --build` after dependency or Dockerfile changes.
Stop the native server first: both workflows use port 4321.
This is a development image, not a production hosting service.

## Validation

```sh
npm run format:check
npm run lint
npm run check
npm run build
```

`npm run format` applies formatting. `check` runs Astro diagnostics and TypeScript's
no-emit compiler. `npm run preview` serves the generated static output locally.
Without native Node, use `docker compose run --rm web npm run build` (and similarly
for each validation script); output from a one-off container is not written to host `dist/`.

Also inspect all changes, including untracked files, run `git diff --check`, and
check `git status --short`. Visual work requires browser checks at mobile, tablet,
and desktop sizes, keyboard navigation, overflow, console, and accessibility checks.

## Structure

- `src/pages/index.astro`: header/hero homepage route.
- `src/layouts/BaseLayout.astro`: language, metadata, landmarks, visible skip link.
- `src/content/site.ts`: centralized hero text, temporary CTA targets, and future demo path.
- `src/styles/`: global foundations and explicitly provisional tokens.
- `public/{brand,founders,product,social}/`: approved assets; founder/social destinations reserved for later tasks.
- `docs/`: product, copy, visual rules, and bounded implementation plan.

`src/components/Header.astro` and `Hero.astro` hold the focused visual components. Asset guidance
lives in `docs/DESIGN_SYSTEM.md`, outside the publicly served asset directories.

## Tooling dependencies

- `astro`: static page generation and local development.
- `typescript` and `@astrojs/check`: strict TypeScript and Astro diagnostics.
- `prettier` and `prettier-plugin-astro`: formatting including Astro templates.
- `eslint` and `@eslint/js`: JavaScript checks using flat recommended configuration.
- `eslint-plugin-astro`: Astro-aware parsing and recommended rules.
- `typescript-eslint`: recommended TypeScript lint rules and parser for Astro frontmatter.

These are build/development tools; no component framework or client library is added.
Versions are pinned in `package.json` and the npm lockfile. Setup follows the
[Astro editor guidance](https://docs.astro.build/en/editor-setup/) and
[Astro ESLint plugin guide](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/).

## Build and future hosting

`npm run build` writes static HTML and assets to `dist/`. The intended host is
Cloudflare Pages, with build command `npm run build`, output directory `dist`, and
the pinned Node version. No server adapter is needed for this static foundation.
No deployment is configured or performed in Task 001. Production domain, canonical,
sharing metadata, icons, and launch SEO remain TODOs for Task 008. The shell has
`noindex, nofollow`; revisit this deliberately during release review.

## Scope and inputs

Read [AGENTS.md](AGENTS.md), [project brief](docs/PROJECT_BRIEF.md),
[approved content](docs/CONTENT.md), [design system](docs/DESIGN_SYSTEM.md), and
[implementation plan](docs/IMPLEMENTATION_PLAN.md).
No backend connection, forms, analytics, cookies, or trackers are included.
Approved logo, brand values, photos, product captures, contact, CTA destinations,
privacy method, legal wording, and production domain remain explicit TODOs.
Task 002 uses `#early-access` and `#product-preview` as honest temporary targets.
The future no-registration `/demo` is specified in `docs/PROJECT_BRIEF.md`; no demo
route exists yet.
