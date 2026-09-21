# Controlled implementation plan

Tasks 001 and 002 are verified. Task 003 is authorized: the fragmentation problem,
integrated solution, and four product pillars. Stop after its completion report and
review. Later rows describe the sequence, not permission to execute.

| Task          | Bounded scope                                                                                                                        | Additional verification                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| 001           | Astro/strict TypeScript, minimal semantic shell, CSS placeholders, tooling, Docker, six required documents, asset directory guidance | Native server, Docker config/build/runtime, static output with no client JavaScript, shell browser checks                           |
| 002           | Design tokens with documented fallbacks, global layout, header, complete hero                                                        | Brand provenance, responsive hierarchy, keyboard/menu behavior                                                                      |
| 003           | Fragmentation problem, integrated solution, four product pillars                                                                     | Accurate claims, visible community pillar, responsive sections                                                                      |
| 004           | Real product showcase using approved captures                                                                                        | Authenticity, redaction, simulated labels, alt text, optimized images, no-JS usability                                              |
| 005           | Current stage, evidence, founders                                                                                                    | Exact approved bios/achievements, accurate team attribution, equal founder visual weight                                            |
| 006           | Early-access CTA, contact, footer, provisional disclaimer                                                                            | Approved destinations; no data collection without full approval; no fake contact details                                            |
| 007           | Responsive, accessibility, performance hardening                                                                                     | Device widths, keyboard, console, overflow, reduced motion, load and layout stability                                               |
| 008           | SEO, sharing, production configuration, release review                                                                               | Approved domain, canonical, social assets, robots/sitemap decisions, final legal review; publishing requires explicit authorization |
| Later project | Public interactive demo integration                                                                                                  | Separate scope and approval; no production backend coupling here                                                                    |

## Gate for every task

Run `npm run format:check`, `npm run lint`, `npm run check`, and `npm run build`.
Inspect the complete diff and all new/untracked files; run `git diff --check` and
`git status --short`. Confirm no unrelated changes, secrets, credentials, private
documents, or unapproved assets. Report exact failures or unavailable checks with
reasons rather than marking them passed.

For visual work (including Task 001's shell), inspect mobile, tablet, and desktop
in a browser; record viewport sizes, keyboard and skip-link behavior, focus,
overflow, browser console, and basic accessibility. Build success alone is insufficient.
Task 001 additionally requires native and Docker development servers to start and
serve the page. `docker compose config` or a successful image build alone does not
prove Docker runtime. Use the README commands and report any exact replacements.

## Task 001 completion report

Record foundation summary, files changed, dependencies and reasons, commands and
results, browser checks and dimensions, unresolved inputs/limitations, no deployment,
no analytics/collection, and no secrets/private/unrelated commits. Recommend Task 002's
focus but do not implement it. Keep incomplete acceptance criteria explicit.

## Inputs before later tasks

TODO: actual logo/wordmark; exact colors/fonts; approved product captures with private
data checked; founder photos; verified contact channel; approved early-access fields,
purpose, storage, access, retention/deletion, consent/privacy wording, security, and
Moroccan data-protection review; production domain; final disclaimer legal review;
Future `/demo` implementation audit. Missing inputs do not authorize invented substitutes.

## Future public interactive demo — explicit product requirement

Intended journey: **Landing page → Explore TradeHub → `/demo`**.
Task 002 only links to `#product-preview`; it does not create `/demo` or choose its
final data architecture. The future demo must:

- Require no registration or login and avoid collecting personal data merely for access.
- Reuse the real TradeHub frontend and visual identity where technically practical.
- Start with a preloaded demo profile and simulated balances, positions, transactions,
  watchlist items, and community content.
- Let visitors explore the market and simulate selected investing actions.
- Clearly label all financial activity as virtual and simulated; never execute real-money transactions.
- Isolate every demo action and dataset from production users and production records.
- Reset state by session or another approved reset strategy.
- Offer a route to request early access or create an account later.

Before implementation, audit the existing frontend, authentication, API dependencies,
WebSockets, market-data dependencies, and state management. Use that audit to decide
between browser-local mock data, a dedicated isolated demo API, or another controlled
architecture. No architecture choice, production connection, or frontend copying is
authorized by Task 002.

## Task 002 verification and handoff

Run `npm ci`, formatting, lint, Astro/TypeScript checks, static build, Docker config
and build, and full Git/new-file review. Verify in a browser at 320×568, 390×844,
768×1024, and 1440×900, including both CTAs, header link, skip link, keyboard focus,
no overflow, console errors, reduced motion, and no-JavaScript rendering. Save mobile
and desktop screenshots with the completion report. Confirm no collection, deployment,
new dependencies, later sections, or demo implementation. Task 003 should focus on the
fragmented experience, integrated solution, and four product pillars after review.

## Task 003 verification and handoff

Run `npm ci`, formatting, lint, Astro/TypeScript checks, static build, Docker config
and build, and full Git/new-file review. Verify the complete page in a browser at
320×568, 390×844, 768×1024, and 1440×900. Check the three new sections, balanced
pillars, headings and landmarks, keyboard skip link and existing anchors, overflow,
console and request errors, reduced motion, no-JavaScript rendering, and basic
accessibility. Save mobile and desktop screenshots with the completion report.

Confirm that the approved Task 002 header, hero wording, CTA behavior, and assets are
preserved; no dependencies, collection, deployment, later homepage sections, or
`/demo` implementation are introduced. After review, Task 004 may add the authentic
product showcase using only the supplied and approved captures with clear simulated
data labeling and useful alternative text.
