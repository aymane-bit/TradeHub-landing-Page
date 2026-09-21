# Product and scope

Source: the founder-supplied TradeHub Public Website master brief; Task 002 is the current authorized milestone.
This is a distilled working reference, not a new set of product claims.

TradeHub is a Morocco-first investing platform bringing market information,
investing practice, portfolio tools, and investor community into one integrated experience.
A working product exists and is preparing to open to early users. Today it offers
virtual investing, market information, portfolio functionality, and community.
It does not execute real-money trades. Virtual investing is the current validation
and learning stage, not the entire long-term identity. Broader financial integrations
are only a future possibility; do not promise dates or availability. News is being
finalized internally and should not be emphasized as unfinished publicly.

## Audiences and goals

Primary: Moroccan retail investors and young professionals, people interested in
the Casablanca Stock Exchange, finance clubs, investing communities, and competition
participants. Secondary: accelerators, investors, potential partners, and financial-sector stakeholders.
Explain the integrated Morocco-first product quickly, show authentic product proof,
keep community visible, explain the simulated stage, establish founder credibility,
and provide a clear early-access route. Be fast and usable on slow mobile connections.

Primary action: **Request Early Access**. Secondary: **Explore TradeHub** or
**Experience TradeHub**. Task 002 uses honest on-page destinations; the future
secondary destination is the no-registration `/demo` described below.

## Guardrails

Every claim must trace to approved brief content or new founder approval. Never imply
real-money execution, brokerage, licensing, regulatory approval, institutional
endorsement/affiliation, market-data redistribution authorization, personalized
investment advice, or guaranteed financial outcomes. Do not invent user counts,
AUM, volumes, waitlist size, growth, testimonials, partnerships, performance metrics,
launch dates, or capabilities. Competition recognition is founder evidence, not a
TradeHub partnership, customer relationship, sponsorship, or endorsement.

Do not use institutional logos without explicit approval. Do not disparage Moroccan
institutions or claim that no alternatives exist. No private data or secrets in source,
assets, filenames, or generated output.

No analytics, pixels, session recording, nonessential cookies, form processors, or
custom collection backend without discussion and approval. Before any collection,
approve fields and purpose, storage, access, retention/deletion, consent and privacy
notice, security, and applicable Moroccan data-protection requirements.

## Delivery

Static-first Astro, strict TypeScript, minimal progressive JavaScript, Docker local
workflow, intended Cloudflare Pages hosting. No backend coupling, interactive demo,
localization, or deployment in Task 002. Follow the bounded milestones in
[IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md), with review between tasks.

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
