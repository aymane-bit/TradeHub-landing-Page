# TradeHub guided demo tour

## Purpose and boundary

The optional guided tour teaches the isolated `/demo` through its real controls. It
does not add a backend, production connection, account, analytics, cookie, third-party
tour service, or alternate fixture system. Demo mutations continue through
`src/scripts/demo.ts`; the tour observes typed browser events emitted only after the
demo state changes.

First-time visitors see a choice between **Start guided tour** and **Explore on my
own**. The choice and safe resumable progress use the session-only key
`tradehub:guided-tour:v1`. The persistent **Guided tour** help action remains available
in the desktop sidebar and top bar.

## Deterministic configuration

- Instrument: DYT / Disty Technologies (`dyt`).
- Fixed synthetic price: 355.05 MAD.
- Buy: 10 virtual shares, costing 3,550.50 MAD.
- Partial sell: 5 virtual shares, leaving 5.
- Community action: react to synthetic post `social-1`.
- Demo seed: `tradehub:isolated-demo:v2` and the existing `initialState()` reset.

DYT begins outside the watchlist and holdings, and the 10-share buy fits safely inside
the seeded 82,450 MAD virtual cash balance.

## Visitor-facing step map

| Step | Chapter      | Interface and completion                                                                                       |
| ---: | ------------ | -------------------------------------------------------------------------------------------------------------- |
|    1 | Introduction | Welcome choice; consent starts the tour.                                                                       |
|    2 | Discover     | Dashboard summary; **Next** confirms orientation.                                                              |
|    3 | Discover     | Real Market navigation control.                                                                                |
|    4 | Discover     | Real market search, then the DYT result control.                                                               |
|    5 | Discover     | DYT header and synthetic market context; **Next**.                                                             |
|    6 | Practice     | Real watchlist toggle; state must contain DYT.                                                                 |
|    7 | Practice     | Real Buy selector.                                                                                             |
|    8 | Practice     | Quantity 10 and real virtual confirmation; the matching buy transaction ID is stored.                          |
|    9 | Understand   | Real Portfolio navigation; DYT must be present.                                                                |
|   10 | Understand   | DYT position and portfolio result; **Next**.                                                                   |
|   11 | Understand   | Real Transactions navigation and the matching DYT buy row; **Next**.                                           |
|   12 | Practice     | Portfolio → DYT → Sell → quantity 5 → real virtual confirmation; the matching sell ID is stored.               |
|   13 | Practice     | Real Watchlist navigation and the DYT card; **Next**.                                                          |
|   14 | Connect      | Real Community navigation and a local reaction to synthetic post `social-1`.                                   |
|   15 | Connect      | Real Profile navigation and orientation to leaderboard, notifications, friends, and messages; **Finish tour**. |

The completion dialog leaves all tour-created state intact and offers **Explore
freely**, **Restart tour**, and **Back to TradeHub website**.

## State machine and event contract

`src/demo/tour.ts` contains the version, typed configuration, step definitions,
allowed states, events, and transition reducer. Status is one of `not-started`,
`active`, `paused`, `skipped`, `completed`, or `error`. Invalid events return the same
state and cannot advance the tour.

The demo emits these result events after real local-domain changes:

- `tradehub:view-changed`
- `tradehub:stock-opened`
- `tradehub:watchlist-changed`
- `tradehub:side-selected`
- `tradehub:quantity-set`
- `tradehub:trade-succeeded`
- `tradehub:community-reacted`
- `tradehub:state-changed`
- `tradehub:reset-complete`

The tour may request only `tradehub:tour-reset-requested` and
`tradehub:tour-open-instrument`. The demo owns both operations and applies its existing
validation and reset logic. A click alone does not prove watchlist, trade, or community
completion.

## Target registry

All targets use stable `data-tour-id` values. Dynamic IDs are emitted only for the
configured DYT position, matching transaction, watchlist card, and safe community post.

| Area                     | Target IDs                                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| Dashboard                | `dashboard-summary`                                                                                |
| Navigation               | `nav-market`, `nav-portfolio`, `nav-transactions`, `nav-watchlist`, `nav-community`, `nav-profile` |
| Market                   | `market-search`, `market-result-dyt`                                                               |
| Instrument and trade     | `stock-overview`, `watchlist-toggle`, `trade-buy`, `trade-sell`, `trade-quantity`, `trade-confirm` |
| Portfolio and activity   | `portfolio-summary`, `portfolio-position-dyt`, `transaction-dyt-buy`                               |
| Continuity and community | `watchlist-dyt`, `community-post-social-1`, `community-like-social-1`, `social-tools`              |

## Reset, skip, restart, and refresh

- Starting from the untouched seed begins immediately.
- Starting or restarting after any modification requires **Reset and start**.
- Canceling that confirmation preserves the current demo state.
- Skip never resets completed actions and suppresses the automatic welcome for the rest
  of that browser session.
- Escape pauses and opens a Resume/Exit choice.
- Completion does not reset the demo.
- Refresh resumes safe steps. Volatile form substates return to search or quantity entry
  so a stale value cannot be confirmed accidentally.
- Missing targets enter a recoverable local error with Retry and Skip; no diagnostic is
  transmitted.

## Accessibility and responsive behavior

Welcome, reset, pause, and completion use a focus-contained semantic dialog. Background
navigation becomes inert while a dialog is open. Coachmarks identify chapter, visible
progress, instruction, Back, Skip, and Next where appropriate. The highlighted real
control receives focus and `aria-describedby`; a polite live region announces step
changes. Escape pauses without discarding state.

At 768 pixels and below, the coachmark becomes a scrollable bottom sheet. The content
scroller gains temporary bottom space so highlighted controls remain above the sheet.
Desktop coachmarks use bounded target-relative placement. Focus, target outlines, zoom,
and reduced-motion preferences use the existing demo design language.

## Changing the tour safely

1. Add or update copy, route, placement, and typed target in `src/demo/tour.ts`.
2. Add one stable `data-tour-id` to the real control in `demo.astro` or its renderer.
3. Advance only from a typed event that proves the required domain state.
4. Add transition coverage to `tests/tour.test.mjs`.
5. Run the complete browser path at every required viewport and retest reset, refresh,
   skip, keyboard, storage fallback, and isolation.
6. Bump `TOUR_VERSION` if old session progress is incompatible.

To restart manually, select **Guided tour** in the sidebar or the **?** button in the
top bar. A changed session must be explicitly reset before the tour begins.
