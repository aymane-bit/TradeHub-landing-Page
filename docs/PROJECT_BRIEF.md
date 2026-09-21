# Product and scope

Task 006 establishes a demo-first public website for TradeHub, a Morocco-first
investing platform bringing market information, virtual investing practice, portfolio
tools, and investor community into one integrated experience.

A working TradeHub product exists. The website directs visitors to a no-registration,
isolated demo using simulated data. TradeHub does not currently execute real-money
trades. Broader integrations remain long-term direction without promised dates.

## Conversion and audience

Primary action: **Try the Demo** → `/demo`.
Secondary action: **See the Product** → `#showcase`.

The audience includes Moroccan retail investors, young professionals, finance clubs,
investing communities, competition participants, accelerators, investors, potential
partners, and financial-sector stakeholders.

## Public-demo boundary

The Task 006 `/demo` route is a truthful development handoff, not the finished demo. It
contains no fake dashboard, interaction, data, registration, login, iframe, third-party
service, or collection. It must be replaced before public launch.

The real demo contract for Tasks 007–010 requires:

- no registration or login and no personal information collected merely to enter;
- a preloaded demo profile and isolated seeded data;
- simulated cash, positions, orders, transactions, watchlist, portfolio history, and
  selected community content;
- a persistent “Demo environment” state and no real-money execution;
- no production data reads or writes and no browser-shipped production credentials;
- deterministic reset or another approved session-reset strategy;
- no unapproved external market-data request on each visit;
- graceful unavailable-service behavior and a clear landing-page return path.

Task 007 must audit the real application, authentication boundaries, REST APIs,
WebSockets, market-data dependencies, state management, infrastructure, security, and
deployment before choosing an architecture. Task 006 does not integrate or modify the
separate TradeHub application.

## Guardrails

Never imply brokerage, licensing, regulatory approval, official market-data rights,
institutional endorsement, guaranteed outcomes, real-money execution, or personalized
investment advice. Do not invent traction, contacts, legal destinations, integrations,
launch dates, partnerships, testimonials, or performance. No analytics, tracking,
cookies, forms, authentication, backend coupling, production secrets, or deployment.

The visible disclaimer is provisional and requires final legal review before public
launch. `noindex, nofollow` remains on both routes during development.
