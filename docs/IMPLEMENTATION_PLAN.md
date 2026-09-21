# Controlled implementation plan

Tasks 001–005 are the approved baseline. Task 006 implements the demo-first conversion,
closing CTA, provisional disclaimer, concise footer, and temporary `/demo` handoff.
Stop after Task 006 for review. Later rows describe sequence, not authorization.

| Task | Bounded scope                                                          | Gate                                                               |
| ---- | ---------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 001  | Repository foundation and documentation                                | Static Astro, strict TypeScript, Docker runtime                    |
| 002  | Design foundation, header, hero                                        | Responsive and keyboard verification                               |
| 003  | Problem, integrated approach, pillars                                  | Accurate claims and visible community                              |
| 004  | Authentic product showcase                                             | Approved local captures and simulation labels                      |
| 005  | Current stage, achievements, founders                                  | Exact attribution and approved portraits                           |
| 006  | Demo-first conversion, closing CTA, disclaimer, footer, handoff route  | Both routes static, truthful, accessible, and non-collecting       |
| 007  | Existing TradeHub application and demo architecture audit              | Audit only; choose and document the safest architecture            |
| 008  | Isolated demo environment and seeded data                              | Production isolation, deterministic seed/reset                     |
| 009  | Interactive TradeHub demo experience                                   | Scoped simulated interactions using approved architecture          |
| 010  | Demo integration, security, privacy, resilience, responsive validation | Replace handoff; protect production boundaries                     |
| 011  | Whole-site accessibility, performance, cross-page hardening            | Keyboard, semantics, responsive and performance budgets            |
| 012  | SEO, production configuration, legal/content review, release readiness | Domain, metadata, legal outcomes; deployment separately authorized |

## Task 006 verification gate

Run `npm ci`, formatting, lint, Astro/TypeScript checks, production build, Docker config
and build, `git diff --check`, complete diff/status review, and confidentiality review.
Inspect built HTML for `/demo` and fragment links, no forms/scripts/external assets, one
H1 per page, robots metadata, and disclaimer meaning.

Verify `/` and `/demo` at 320×568, 390×844, 768×1024, and 1440×900. Check overflow,
CTA wrapping, direct `/demo` navigation and refresh, skip-link focus, keyboard focus,
heading order, JavaScript-disabled completeness, reduced motion, automated
accessibility, console/page/request failures, and external requests. Capture the four
homepage widths plus closing/footer and demo desktop/mobile views.

## Binding real-demo contract

Tasks 007–010 must preserve no-registration access, an isolated preloaded profile,
seeded simulated cash/positions/orders/transactions/watchlist/history/community data,
a visible demo state, no production data read/write, no real-money execution, no
browser secret, reset behavior, no unapproved per-visit market-data request, graceful
failure, and a landing-page return path. Task 007 audits before architecture selection.

Task 006 is not independently ready for public deployment because `/demo` is only a
technical handoff page. Final legal review of the provisional disclaimer remains
required. Deployment is outside this task.
