# Task 002 — Design Foundation, Header, and Hero

Date: 2026-09-21

Status: Complete; original report below retained as the initial delivery record.
See the approved-asset follow-up at the end for the current header/hero and refreshed screenshots.
Task 003 and `/demo` are not implemented.

Repository: `/home/akajjou/Desktop/TradeHub-landing-Page`

## 1. Visual milestone

Replaced the Task 001 status shell with a responsive header and complete hero.
The layout uses a text wordmark, clear typographic hierarchy, a desktop two-column
composition, stacked mobile content, restrained monochrome surfaces, and an honest
product-image placeholder. A small early-access notice inside the hero provides a
working destination without collecting data. No later homepage sections were built.
The old development-footer message was removed; the actual footer remains Task 006.

## 2. Files added and modified

Modified relative to the captured Task 001 baseline:

- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/content/site.ts`
- `src/styles/global.css`
- `src/styles/tokens.css`
- `docs/CONTENT.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/PROJECT_BRIEF.md`
- `README.md` — current scope and component/content structure; commands unchanged.

Added:

- `src/components/Header.astro`
- `src/components/Hero.astro`
- `docs/TASK_002_COMPLETION_REPORT.md`
- Four PNG screenshots in `docs/screenshots/task-002/` (linked below).

Package files, lockfile, Docker files, Astro configuration, TypeScript/lint/formatter
configuration, `AGENTS.md`, asset directories, and the historical Task 001 report
are unchanged. The existing files were untracked at preflight, so baseline comparison
and explicit new-file review were used in addition to ordinary Git diff commands.

## 3. Exact content implemented

Eyebrow: **Preparing for early users**

Headline:

> Investing in Morocco, brought together.

Supporting copy:

> TradeHub is a Morocco-first investing platform bringing market information, investing practice, portfolio tools, and investor community into one integrated experience.

Product status:

> A working TradeHub platform is already built. We're preparing to open it to early users.

Clarity note:

> TradeHub currently provides a virtual investing environment. Real-money trade execution is not currently available.

CTA labels: **Request Early Access** and **Explore TradeHub**.

Temporary action explanation:

> Explore TradeHub currently opens the product preview on this page.

Early-access notice:

> Early-access requests are not open on this page yet. No information is collected here.

Visible text is centralized in `src/content/site.ts`. No capability, date, traction,
partnership, endorsement, or financial claim was invented.

## 4. Asset inventory

`public/brand/`, `public/founders/`, `public/product/`, and `public/social/` each
contain only their existing `.gitkeep`. No approved logo, font, founder portrait,
or product screenshot was available in the landing-page repository.

Used the specified **TradeHub** text wordmark fallback. The visual reads
**Development placeholder** and **Approved TradeHub product screenshot required.**
Its caption says **An authentic product view will appear here once approved.**
No fake charts, controls, balances, market data, portraits, or AI imagery were created.
No main-application assets were imported. Screenshot failure is not a current
runtime case: there is no product image request, and all placeholder text is HTML.

## 5. Design tokens

All presentation values remain explicitly **provisional**, not verified brand values:

- White background, `#171717` primary text/actions, `#595959` muted text,
  `#f4f4f4` neutral surface, `#d8d8d8` border, `#383838` action hover.
- System font stack; headline 2.625–4.625rem; responsive lead text; readable body
  and notes. No external font or unverified red/beige palette.
- Semantic spacing scale, fluid gutters, 80rem container, 6px control and 12px
  surface radii, subtle borders, and an explicit no-shadow token.
- 48px action targets, at least 44px skip link, and 3px high-contrast focus outlines.
- Only a 120ms hover-background transition; reduced-motion disables transitions.

The header is not sticky, so it cannot cover anchor targets. There is only one nav
link, making a collapsed menu unnecessary. The reserved placeholder uses a 6:5
aspect ratio, explicit full available width, and a minimum 18rem height.

## 6. CTA behavior and future demo

- Header and hero **Request Early Access** links move to `#early-access`, an existing
  focusable notice. They do not submit, store, or transmit information.
- **Explore TradeHub** moves to the existing focusable `#product-preview` figure.
  A visible note explains that this behavior is temporary.
- The brand returns to `#top`; the visible skip link moves focus to `#main`.
- No links point to future homepage sections or a nonexistent `/demo` route.

The project brief, content document, and implementation plan now specify:
**Landing page → Explore TradeHub → `/demo`**. The future experience requires no
registration/login, reuses the real frontend where practical, begins with a preloaded
profile, uses simulated financial/community data, allows market exploration and
selected simulated actions, and never executes real-money transactions. It must be
isolated from production records, reset state through an approved strategy, avoid
personal-data collection for access, and offer a later early-access/account route.

The required audit covers frontend, authentication, APIs, WebSockets, market data,
and state management before choosing browser-local mocks, an isolated demo API,
or another controlled architecture. No final demo architecture was chosen here.

## 7. Dependencies

No repository dependencies were added or changed. Node 24.21.0, Playwright, and
Axe tooling were prepared under `/tmp/tradehub-task002-tools` for verification only;
none were added to `package.json` or the lockfile.

## 8. Commands and results

| Command/check                                        | Result                                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| `npm ci`                                             | Passed; installed the unchanged lockfile; npm reported zero vulnerabilities   |
| `npm run format`                                     | Passed                                                                        |
| `npm run format:check`                               | Passed                                                                        |
| `npm run lint`                                       | Passed with zero warnings allowed                                             |
| `npm run check`                                      | Passed; Astro: 8 files, zero errors/warnings/hints; TypeScript passed         |
| `npm run build`                                      | Passed; one static homepage                                                   |
| `docker compose config --quiet`                      | Passed                                                                        |
| `docker compose build`                               | Passed, including a rebuild after final source changes                        |
| `npm run preview -- --port 4322`                     | Passed; browser verification used production output                           |
| Temporary Playwright/Axe verification script         | Passed at all four required viewports                                         |
| `git diff`, `git diff --check`, `git status --short` | Reviewed alongside the untracked-file baseline and per-file whitespace checks |

Native commands used the isolated Node 24.21.0 runtime and
`ASTRO_TELEMETRY_DISABLED=1`. Production inspection confirmed no script tags, no
JavaScript files, no form elements, and retained `noindex, nofollow` metadata.
Docker runtime was not retested for this visual-only task; the requested Docker
configuration and image-build checks passed and Docker tooling is unchanged.

During verification, a 320px overflow caused by the placeholder's intrinsic sizing
was corrected with an explicit width. The Axe harness initially required an explicit
browser context; this tooling setup was corrected and the final scan passed. No
acceptance check remains blocked.

## 9. Browser and accessibility verification

Inspected real Chromium screenshots and tested at:

| Viewport   | Visual/overflow | Axe WCAG 2 A/AA and 2.1 AA | Keyboard/anchors | Console/page errors |
| ---------- | --------------- | -------------------------- | ---------------- | ------------------- |
| 320 × 568  | Pass            | 0 violations               | Pass             | None                |
| 390 × 844  | Pass            | 0 violations               | Pass             | None                |
| 768 × 1024 | Pass            | 0 violations               | Pass             | None                |
| 1440 × 900 | Pass            | 0 violations               | Pass             | None                |

Confirmed exactly one H1, header/nav/main landmarks, readable hierarchy, stable
placeholder layout, existing destinations, and focus movement after activating
all links. Keyboard order: skip link, wordmark, header early-access action, hero
early-access action, Explore TradeHub. Visible focus and reduced-motion behavior
passed. No external network requests occurred. JavaScript-disabled rendering and
both hero CTAs passed at 390 × 844. No images or fonts are required to understand
the page. Automated checks supplement screenshot inspection; this is not a
screen-reader or cross-browser certification.

## 10. Saved screenshots

These are full-page captures taken at the listed viewport sizes; image heights
include content below the viewport. They are outside the public/build directories.

- [Desktop — 1440 × 900 viewport](screenshots/task-002/desktop.png)
- [Mobile — 390 × 844 viewport](screenshots/task-002/mobile.png)
- [Small mobile — 320 × 568 viewport](screenshots/task-002/mobile-small.png)
- [Tablet — 768 × 1024 viewport](screenshots/task-002/tablet.png)

## 11. Limitations and missing inputs

Approved identity files, exact brand values/fonts, and a publicly approved real
product screenshot remain missing. Founder images, final contact, collection and
privacy method, domain, and legal review remain later inputs. The current placeholder
is not product evidence; replace it with an approved authentic capture when available.
Early access cannot be requested yet, and the demo is not implemented. The page is
not ready for public launch. Browser verification is Chromium only.

## 12. Git, confidentiality, and scope confirmation

Reviewed the Task 002 changes against the captured 29-file Task 001 baseline,
including untracked additions that ordinary `git diff` omits. Only the listed source,
documentation, report, and screenshots changed. No secrets, credentials, private
user data, private documents, or unapproved assets were added. No commits were made.
No deployment, analytics, cookies, forms, tracking, backend connections, external
scripts, or APIs were introduced. The separate main TradeHub repository was not
modified by this task. No later homepage section or interactive demo was implemented.

## 13. Recommended Task 003

After reviewing this milestone, implement the fragmented investor experience,
integrated solution, and four product pillars, preserving Morocco-first positioning,
the visible community dimension, and the virtual-investing limitations. Obtain
approved brand and product assets as available. Task 003 has not been started.

## Approved asset follow-up — 2026-09-21

The user supplied ten WebP images and explicitly confirmed that visible names,
avatars, email, posts, and account figures are demo data approved for public display.
This supersedes the earlier missing-asset inventory for Task 002.

- `tradehub.webp` (768×768, 210,180 bytes) is used in the header. CSS frames the
  existing wordmark to exclude excess surrounding whitespace; the file is unchanged.
- `Market_overview_.webp` (1024×987, 127,094 bytes) is used as
  `public/product/market-overview.webp`. The full authentic view is preserved without
  redrawing data. Its caption identifies account figures as simulated and market
  information as a captured view, not a live feed. The image links to its full-size
  version for readable inspection on small screens. Intrinsic dimensions reserve space.
- `aymane.webp`, `noureddin-bg.webp`, `community.webp`, `Leaderboard.webp`,
  `Market_board.webp`, `Portfolio.webp`, `Profile.webp`, and `trade-stock.webp`
  remain at the supplied source location for later milestones; they are not rendered
  or copied into the public directory in this follow-up.

Sources remain unchanged at `/home/akajjou/Desktop/landingPage/`. Existing WebP
files are delivered directly (337,274 bytes total); no raster editing or new image
library was introduced. Full-resolution files preserve screenshot detail. The image
has meaningful alternative text and a persistent explanatory caption if loading fails.
Global presentation tokens remain provisional; the supplied logo carries the brand's
actual visual identity without claiming an extracted final font or palette.

Only the existing header/hero asset integration changed. The temporary CTA behavior,
future `/demo` requirements, no-collection policy, and Task 003 boundary are unchanged.

### Asset follow-up verification

Formatting, lint, Astro/TypeScript checks (zero diagnostics), static build, Docker
configuration/build, and Git/new-file whitespace review passed again. No new dependencies
or tooling changes. The two public assets match their supplied source files byte for byte.
The static output still contains zero client JavaScript.

Refreshed all four linked screenshots after waiting for image decoding. Chromium
checks at 320×568, 390×844, 768×1024, and 1440×900 passed with zero Axe violations,
no horizontal overflow, and no console/page errors or external requests. Image loading,
full-size image keyboard navigation, reduced motion, JavaScript-disabled behavior,
and meaningful content with image requests deliberately blocked were verified.
Keyboard users can additionally reach the screenshot link and the full-size text link.
The screenshot itself is a compact overview; its full-size link preserves readable detail.
