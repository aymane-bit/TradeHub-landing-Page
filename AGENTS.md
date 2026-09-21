# Repository operating instructions

Scope: TradeHub's English-only public website, static Astro with strict TypeScript.
Execute only the approved bounded task, report verification, and stop for review.
Do not modify the separate TradeHub application, connect its backend, implement
the interactive demo, or deploy without an explicit later task.

Read [PROJECT_BRIEF](docs/PROJECT_BRIEF.md), [CONTENT](docs/CONTENT.md),
[DESIGN_SYSTEM](docs/DESIGN_SYSTEM.md), and [IMPLEMENTATION_PLAN](docs/IMPLEMENTATION_PLAN.md).

## Structure and commands

`src/pages` holds routes; `src/layouts` document structure; `src/content` editable
copy; `src/styles` tokens and global CSS; `public` approved assets; `docs` project rules.
Add `src/components` only when reusable components are needed.
Node 24.21.0; npm lockfile is authoritative. Run `npm ci`, `npm run dev`;
Docker: `docker compose build`, `docker compose up`, `docker compose down`.
Formatting: `npm run format` / `npm run format:check`; lint: `npm run lint`;
Astro/TypeScript: `npm run check`; production: `npm run build`; preview: `npm run preview`.

## Conventions and constraints

Use semantic Astro templates, typed props, centralized copy, CSS custom properties,
and the repository formatter. Prefer static HTML and zero client JavaScript;
any later interaction must progressively enhance usable HTML.
Keep dependencies minimal. Additional frameworks, UI kits, animation/icon libraries,
CMS, forms services, analytics, or state management need demonstrated need and approval.
No localization infrastructure in V1.
Build mobile-first with readable text, comfortable targets, no horizontal overflow,
visible focus, a skip link, logical headings, labeled navigation, meaningful alt text,
sufficient contrast, and reduced-motion support. Verify these in the browser.
Use only approved authentic assets; preserve originals, redact private data, and
optimize derivatives. Do not invent brand colors, fonts, imagery, domains, or contacts.
No analytics, tracking, cookies, data collection, secrets, or production integrations.
No real-money execution, brokerage, licensing, endorsement, guaranteed outcomes,
market-data authorization, fake statistics, or invented traction claims.
Keep simulated investing explicit and community visible in later content.

## Completion gate

Run formatting, lint, Astro/TypeScript checks, production build, `git diff --check`,
full diff review (including added/untracked files), and `git status --short`.
Check for unrelated changes, secrets, private documents, and unapproved assets.
Verify native and Docker runtime for foundation/tooling work; config or image build
alone is not a Docker runtime pass. For visual work inspect mobile/tablet/desktop,
keyboard/skip link, focus, overflow, console, and basic accessibility in a browser.
Report exact commands, outcomes, viewport sizes, limitations, and checks not run
with reasons. Never claim completion if a required acceptance criterion is unverified.
