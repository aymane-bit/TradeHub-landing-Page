# Task 006 completion report

Date: 2026-09-21

Scope: **Task 006 — Demo-First Conversion, Closing CTA, Footer, and Disclaimer only**

Status: Complete for review. **Task 006 is not independently ready for public deployment because `/demo` is still a temporary development handoff, not the real interactive demo.**

## 1. Strategy migration

Migrated the approved Task 005 landing page from its superseded access-request narrative
to a public-demo narrative. **Try the Demo** is now the primary conversion in the
header, hero, and closing CTA, and every instance targets `/demo`. **See the Product**
links to the authentic showcase at `#showcase`.

The change distinguishes the working TradeHub product from the isolated public-demo
environment. The landing page remains static and the new `/demo` route is a truthful
technical handoff that prevents broken links without pretending the real demo has been
integrated.

The baseline was `main` at `2b1f429` with one coherent, documented, uncommitted Task 005
working-tree change. That exact Task 005 implementation, report, screenshots, portraits,
and provenance record were treated as the approved baseline. No conflicting or
unrelated edits were found.

## 2. Files added and modified

Added for Task 006:

- `src/components/ClosingDemo.astro`
- `src/components/SiteFooter.astro`
- `src/pages/demo.astro`
- `docs/DEMO_FIRST_DECISION.md`
- `docs/TASK_006_COMPLETION_REPORT.md`
- twelve PNG captures under `docs/screenshots/task-006/`

Modified for Task 006:

- `src/content/site.ts`
- `src/components/Hero.astro`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `README.md`
- `docs/CONTENT.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/PROJECT_BRIEF.md`

Task 005 files remain present in the same uncommitted working tree. Package, lockfile,
Docker, Astro, TypeScript, formatter, lint, token, authentic product asset, portrait,
achievement, founder, and product-showcase files did not change for Task 006.

## 3. Exact final Task 006 public copy

### Header and hero

- Header action: **Try the Demo** → `/demo`
- Eyebrow: **Interactive demo**
- H1: **Investing in Morocco, brought together.**
- Introduction: **TradeHub is a Morocco-first investing platform bringing market
  information, investing practice, portfolio tools, and investor community into one
  integrated experience.**
- Status: **A working TradeHub product already exists. Explore the experience through a
  controlled virtual demo built with simulated data.**
- Primary action: **Try the Demo** → `/demo`
- Secondary action: **See the Product** → `#showcase`
- Helper: **No registration required. Demo activity is simulated and does not execute
  real-money trades.**
- Boundary: **TradeHub currently provides a virtual investing environment. Real-money
  trade execution is not currently available.**

### Current stage

- Eyebrow: **Current stage**
- Heading: **Built for hands-on exploration.**
- Lead: **A working TradeHub platform already exists. Visitors can explore the product
  through an isolated virtual demo without creating an account.**
- Support: **The demo uses simulated balances, positions, transactions, watchlists, and
  community content so people can understand the experience without real-money
  execution.**
- **Built** — A working product brings the core TradeHub experience together.
- **Explore** — The public demo provides a controlled environment for hands-on product
  exploration.
- **Long-term direction** — TradeHub's broader vision is to connect more of the Moroccan
  retail-investing journey over time.

### Closing CTA

- Eyebrow: **Try TradeHub**
- Heading: **Explore the product for yourself.**
- Support: **Open a preloaded demo environment to explore market information, virtual
  investing, portfolio tools, and community features—without registration.**
- Action: **Try the Demo** → `/demo`
- Note: **All demo balances, positions, transactions, and activity are simulated. No
  real-money trades are executed.**

### Disclaimer and footer

Disclaimer:

> TradeHub currently provides a virtual investing environment. Demo balances,
> transactions, positions, and activity are simulated. TradeHub does not currently
> execute real-money trades. Financial and market information is provided for
> informational purposes and does not constitute personalized investment advice.

Footer copy and destinations:

- **TradeHub** wordmark → `#top`
- **Morocco-first investing platform.**
- **Product** → `#showcase`
- **Founders** → `#founders`
- **Try the Demo** → `/demo`
- **© 2026 TradeHub.**

### Temporary demo handoff

- Label: **Development handoff — not the final public demo**
- H1: **TradeHub demo environment**
- Status: **The isolated interactive demo is being connected to the TradeHub product
  experience. It will use simulated data and will not execute real-money trades.**
- Return action: **Back to the TradeHub website** → `/`

Task 003 problem/solution/pillar copy, Task 004 showcase copy and screenshots, and Task
005 achievements/founder copy remain unchanged and continue to render in the approved
order.

## 4. Removed elements and obsolete migration

Removed from rendered/public source:

- the **Request Early Access** header and hero actions;
- the **Preparing for early users** hero eyebrow;
- the old preparation status sentence;
- the **Explore TradeHub** temporary action and explanatory note;
- the `#early-access` target;
- the entire availability strip and its “not open”/collection message;
- the Task 005 stage heading, lead, support, and **Preparing** sequence entry;
- all active-source access-request and invitation terminology.

Searches over `src` and `public`, and separately over rebuilt `dist`, returned zero
obsolete matches. Active documentation retains the terms only in the required decision
record explaining the superseded direction. Historical Task 001–005 reports remain
unchanged as audit records.

## 5. Demo handoff behavior and metadata

Direct navigation and refresh at `/demo` both return HTTP 200. The page uses the local
wordmark and existing design tokens, one H1, a clear development-handoff label, a
normal return link, `noindex, nofollow`, and zero client JavaScript.

It contains no dashboard, balances, positions, transactions, controls, application
iframe, third-party service, external asset, form, authentication, storage, or invented
product behavior. It cannot reasonably be mistaken for the finished demo and is
explicitly documented for replacement before public launch.

## 6. Collection, destinations, fake UI, and dependencies

Nothing is collected. Neither route contains a form, account field, login,
registration, analytics, tracker, cookie, local-storage use, service worker, API call,
or production integration.

No email, telephone number, address, contact destination, privacy page, terms page,
cookie page, legal destination, social account, or institutional logo was invented.
Founder LinkedIn links remain the approved Task 005 links.

No fake interface was created. Existing authentic TradeHub captures remain the only
product interfaces shown. No repository dependency, framework, configuration, or
lockfile entry was added or changed.

## 7. Commands and results

| Command/check                                         | Result                                                                      |
| ----------------------------------------------------- | --------------------------------------------------------------------------- |
| Branch, commit, full status, and diff preflight       | Confirmed `main` at `2b1f429`; coherent Task 005 working baseline           |
| Initial host `npm ci` / Astro checks                  | Host Node 20 correctly rejected by Node 24 engine; no completion claim made |
| `PATH=/tmp/node-v24.21.0-linux-x64/bin:$PATH npm ci`  | Passed with 378 packages, zero vulnerabilities                              |
| `npm run format` / `npm run format:check`             | Passed                                                                      |
| `npm run lint`                                        | Passed with zero warnings allowed                                           |
| `npm run check`                                       | Passed: 18 Astro files, zero errors, warnings, or hints; TypeScript passed  |
| `npm run build`                                       | Passed; static `/` and `/demo` generated                                    |
| `docker compose config --quiet`                       | Passed                                                                      |
| `docker compose build`                                | Passed                                                                      |
| `git diff --check`                                    | Passed                                                                      |
| Active-source and built-output obsolete-copy searches | Zero rendered/public source matches                                         |
| Built HTML and browser inspection                     | No forms, scripts, external assets, failed links, or missing routes         |
| Playwright Chromium and Axe verification              | Passed at all required viewports; zero WCAG A/AA violations                 |

All successful native commands used the repository-pinned Node 24.21.0 and npm 11.19.0
from the existing isolated `/tmp` runtime. Temporary Playwright Core and Axe packages
from prior verification tooling were reused outside the repository.

## 8. Responsive, keyboard, accessibility, and request verification

Tested `/` and `/demo` at 320×568, 390×844, 768×1024, and 1440×900.

| Viewport | Homepage overflow | Demo overflow | Axe violations | Console/page/request errors |
| -------- | ----------------: | ------------: | -------------: | --------------------------- |
| 320×568  |              0 px |          0 px |              0 | None                        |
| 390×844  |              0 px |          0 px |              0 | None                        |
| 768×1024 |              0 px |          0 px |              0 | None                        |
| 1440×900 |              0 px |          0 px |              0 | None                        |

Each route has one H1 and logical headings. Header and footer links wrap cleanly; touch
targets remain comfortable. The first Tab reveals the clipped skip link at about
189×52px and Enter moves focus to `main` on both routes. Visible focus uses the existing
3px outline. Reduced-motion emulation matched. JavaScript-enabled and JavaScript-disabled
runs both retained the closing CTA, footer, four `/demo` links, demo H1, and landing
return path.

The homepage contains four `/demo` links and two `#showcase` links. Direct `/demo`
navigation and refresh passed. Normal runs produced no console errors, page errors,
failed requests, external requests, forms, or scripts. Automated checks supplement
manual full-page and focused visual inspection in Chromium; this is not a screen-reader
or cross-browser certification.

## 9. Screenshots

Full-page homepage captures:

- [Desktop — 1440×900 viewport](screenshots/task-006/desktop.png)
- [Tablet — 768×1024 viewport](screenshots/task-006/tablet.png)
- [Mobile — 390×844 viewport](screenshots/task-006/mobile.png)
- [Small mobile — 320×568 viewport](screenshots/task-006/mobile-small.png)

Focused closing surfaces:

- [Closing CTA — desktop](screenshots/task-006/closing-desktop.png)
- [Closing CTA — mobile](screenshots/task-006/closing-mobile.png)
- [Disclaimer — desktop](screenshots/task-006/disclaimer-desktop.png)
- [Disclaimer — mobile](screenshots/task-006/disclaimer-mobile.png)
- [Footer — desktop](screenshots/task-006/footer-desktop.png)
- [Footer — mobile](screenshots/task-006/footer-mobile.png)

Temporary demo handoff:

- [Demo handoff — desktop](screenshots/task-006/demo-desktop.png)
- [Demo handoff — mobile](screenshots/task-006/demo-mobile.png)

## 10. Documentation and milestone sequence

Updated README, project brief, current content reference, design system, and
implementation plan. Added the demo-first decision record. The active documents now
record the binding demo behavior contract and the revised order:

1. Task 007 — real application and demo architecture audit;
2. Task 008 — isolated demo environment and seeded data;
3. Task 009 — interactive TradeHub demo experience;
4. Task 010 — integration, security, privacy, resilience, and responsive validation;
5. Task 011 — whole-site accessibility, performance, and cross-page hardening;
6. Task 012 — SEO, production configuration, legal/content review, and release readiness.

Historical completion reports were not rewritten.

## 11. Deviations and limitations

There are no content or scope deviations. Focused visual evidence is split into
separate closing CTA, disclaimer, and footer images so each remains readable at its
native rendered size.

The host's default Node 20 cannot run this pinned Astro project; validation used the
existing isolated Node 24.21.0 runtime. Browser verification used Chromium only. The
provisional disclaimer still requires final legal review. No deployment was attempted.

## 12. Git and confidentiality review

The full Task 005-plus-Task 006 working-tree diff, added files, screenshots, local
assets, and final status were reviewed. Task 006 source changes are limited to the
approved migration, static handoff, closing surfaces, documentation, report, and
screenshots. No secret, credential, private document, new external asset, production
endpoint, unapproved founder or market claim, or unrelated application change was
introduced. No commit was created.

## 13. Required public-deployment warning

**Do not deploy Task 006 as the finished public demo.** `/demo` is a temporary handoff
page. The real demo has not been architected, isolated, integrated, security-reviewed,
or resilience-tested. The provisional disclaimer also awaits final legal review.

## 14. Recommended Task 007 audit scope

Task 007 should audit the real TradeHub frontend, route structure, authentication and
authorization boundaries, REST APIs, WebSockets, market-data dependencies, state
management, write paths, production data boundaries, secrets/configuration,
infrastructure, deployment model, and failure behavior. It should map the safest way to
provide an isolated preloaded profile, deterministic seeded data and reset behavior,
visible demo state, and zero production reads/writes. It should choose and document the
architecture without beginning broad integration or implementation.
