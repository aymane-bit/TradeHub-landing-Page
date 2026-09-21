# Task 004 completion report

Date: 2026-09-21

Scope: **Task 004 — Real Product Showcase only**

## 1. Summary

Added one authentic product-showcase section directly after the Task 003 product
pillars. Four real TradeHub captures show market exploration, virtual investing
practice, portfolio understanding, and investor community. The presentation is a calm,
numbered editorial sequence with large product media rather than a gallery, carousel,
device mockup, or reconstructed interface.

The page remains static Astro with zero client JavaScript. No `/demo`, application
embedding, live service, later homepage section, deployment, or data collection was
implemented.

## 2. Files added and modified

Added:

- `src/components/ProductShowcase.astro`
- `docs/PRODUCT_ASSET_PROVENANCE.md`
- `docs/TASK_004_COMPLETION_REPORT.md`
- eight WebP files under `public/product/showcase/`
- four verification PNGs under `docs/screenshots/task-004/`

Modified:

- `src/pages/index.astro` — places the showcase after the pillars.
- `src/content/site.ts` — centralizes all showcase copy, image metadata, alt text,
  captions, and full-size link labels.
- `src/styles/global.css` — adds the responsive editorial showcase layout.
- `docs/CONTENT.md` — records the final Task 004 public copy and qualifications.
- `docs/DESIGN_SYSTEM.md` — records showcase presentation and image behavior.
- `docs/IMPLEMENTATION_PLAN.md` — records the Task 004 gate and Task 005 handoff.
- `docs/PROJECT_BRIEF.md` and `README.md` — update current milestone and repository
  structure descriptions.

No package, lockfile, token, Docker, Astro, TypeScript, formatting, or lint
configuration changed.

## 3. Exact final public copy

Eyebrow: **Inside TradeHub**

Heading: **A working product, not just an idea.**

Introduction:

> Explore real views from the TradeHub platform—from market discovery and virtual
> investing practice to portfolio understanding and investor community.

Qualification:

> Product views use simulated demo data. TradeHub does not currently execute real-money
> trades.

Stories:

1. **Market exploration — Explore the Moroccan market in context.** Move from a broad
   market view toward the companies and information you want to understand, within the
   wider TradeHub experience.
2. **Virtual investing practice — Practice decisions in a virtual environment.**
   Explore simulated buying and selling decisions without real-money trade execution,
   then see how those decisions affect the demo experience.
3. **Portfolio understanding — See the portfolio as a connected picture.** Review
   positions, allocation, performance, and investing activity together within the
   simulated TradeHub portfolio experience.
4. **Investor community — Connect tools with investor conversation.** Discuss
   companies, markets, investment ideas, and investing experiences through TradeHub's
   social and community functionality.

## 4. Selected captures and product stories

| Story                      | Supplied source     | Production file          | Purpose                                                                       |
| -------------------------- | ------------------- | ------------------------ | ----------------------------------------------------------------------------- |
| Market exploration         | `Market_board.webp` | `market-board.webp`      | Shows company and market discovery without repeating the hero dashboard       |
| Virtual investing practice | `trade-stock.webp`  | `virtual-investing.webp` | Shows a company view, chart, virtual trade panel, and simulated pending order |
| Portfolio understanding    | `Portfolio.webp`    | `portfolio.webp`         | Shows simulated portfolio summary, allocation, performance, and holdings      |
| Investor community         | `community.webp`    | `community.webp`         | Shows the community composer, approved demo posts, and approved demo profiles |

The hero continues to use `Market_overview_.webp`; it is not duplicated in the
showcase. `Leaderboard.webp` and `Profile.webp` were inspected and documented but not
used because the four core stories were already represented without redundant or more
identity-heavy screens.

## 5. Source, provenance, and public-use status

All captures came from `/home/akajjou/Desktop/landingPage/` and are authentic TradeHub
product exports supplied by the user. The user explicitly confirmed that the visible
names, avatars, email, posts, account figures, balances, positions, transactions, and
performance figures are demo data approved for public display.

The complete seven-capture inventory, visible-data review, approval state, source
hashes, and selection rationale are in
[PRODUCT_ASSET_PROVENANCE.md](PRODUCT_ASSET_PROVENANCE.md). Market-data publication
rights remain unverified; public-use approval for demo screens does not establish
third-party redistribution authorization.

## 6. Privacy and demo-data review

Every candidate was inspected at full resolution. The selected captures contain no
authentication tokens, credentials, private messages, developer tools, internal URLs,
or real financial account data. The community screen includes the approved demo email,
demo avatars, demo names, demo posts, engagement counts, and an article URL inside a
demo post. The market, practice, and portfolio screens contain captured market values
and simulated account activity.

No private data required redaction. Captions consistently identify simulated financial
activity, and the community caption states that demo content is product illustration,
not investment advice or endorsement.

## 7. Image transformations

The four full-size production files are byte-for-byte copies of the supplied sources
with descriptive filenames. Pillow 10.2.0 created one proportional mobile derivative
per image using Lanczos resampling and WebP quality 82, method 6.

No image was cropped, redacted, upscaled, recolored, composited, or altered to change a
figure, user, post, price, balance, chart, order, position, or result. Originals remain
unchanged in the supplied source directory.

## 8. Dimensions, sizes, and total weight

| Production family | Full-size dimensions / size | Mobile dimensions / size |
| ----------------- | --------------------------: | -----------------------: |
| Market board      |        1024×987 / 130,398 B |       640×617 / 18,090 B |
| Virtual investing |         1024×940 / 95,734 B |       640×588 / 16,990 B |
| Portfolio         |         1024×867 / 86,056 B |       640×542 / 15,748 B |
| Community         |         701×768 / 137,540 B |       480×526 / 18,254 B |

Total added production-image weight is **518,810 bytes** across eight files. A browser
selects one candidate per story: the four mobile derivatives total **69,082 bytes**,
and the four full-size files total **449,728 bytes**. Every individual output is below
the Task 004 quality-guide limits.

## 9. Alt text and caption strategy

Alt text identifies the relevant product surface and its primary structure without
repeating every visible field. Visible captions carry the regulatory and data-status
context:

- Market board alt: **TradeHub market board listing Moroccan market symbols with
  prices, changes, sectors, and captured update times.** Caption states that the
  information is captured for illustration and is not a live, official, or
  exchange-provided feed.
- Virtual-investing alt: **TradeHub company view with a price chart, virtual trade
  panel, and simulated pending order.** Caption identifies all prices, orders, holdings,
  and results as demo data and states that no real-money trade is executed.
- Portfolio alt: **TradeHub simulated portfolio with summary values, a performance
  chart, asset allocation, and holdings.** Caption identifies balances, positions, and
  results as demo data.
- Community alt: **TradeHub community feed with a post composer, demo posts, and
  suggested demo profiles.** Caption identifies approved demo content and excludes
  advice or endorsement.

Each figure has a descriptive **Open the full … screenshot** link. Essential context is
never hover-only or contained only in an image.

## 10. Responsive layout and image behavior

Desktop alternates copy and large product media across two columns. Tablet and mobile
use the consistent semantic order of label, heading, explanation, image, caption, and
full-size link. There is no horizontal strip or carousel.

Each `<picture>` supplies a mobile and full-size WebP with an explicit `srcset` and
`sizes`. The `<img>` fallback carries intrinsic width and height, `loading="lazy"`, and
`decoding="async"`. Browser checks confirmed proportional rendering and zero overflow
at all required widths. The existing above-the-fold hero loading behavior was not
changed.

## 11. Dependencies

No repository dependency was added or changed. Node 24.21.0 and npm 11.19.0 were used
from the existing isolated `/tmp` runtime because the host default is Node 20. Pillow
10.2.0 was already available as one-time system tooling for image resizing. Temporary
Playwright Core and Axe packages under `/tmp/tradehub-task003-tools` were reused for
verification and are not part of the repository.

## 12. Commands and results

| Command/check                                                                | Result                                                                          |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Git branch, commit, status, diff, and log inspection                         | Initial tree clean on `main` at `98eb56f`                                       |
| Full-resolution capture inspection and SHA-256 inventory                     | Passed; seven product candidates documented                                     |
| `npm ci`                                                                     | Passed; 378 packages installed, zero vulnerabilities                            |
| `npm run format` / `npm run format:check`                                    | Passed                                                                          |
| `npm run lint`                                                               | Passed with zero warnings allowed                                               |
| `npm run check`                                                              | Passed; Astro: 12 files, zero errors/warnings/hints; TypeScript passed          |
| `npm run build`                                                              | Passed; one static homepage                                                     |
| `docker compose config --quiet`                                              | Passed                                                                          |
| `docker compose build`                                                       | Passed                                                                          |
| Production HTML/image inspection                                             | Passed; four pictures/srcsets, dimensions, lazy loading, no scripts or JS files |
| Temporary Playwright/Axe harness                                             | Passed at all four required viewports                                           |
| `git diff --check`, complete diff, asset, confidentiality, and status review | Passed                                                                          |

## 13. Browser, keyboard, accessibility, and resilience verification

| Viewport   | Visual / overflow | Responsive media     | Axe WCAG 2 A/AA and 2.1 A/AA | Errors |
| ---------- | ----------------- | -------------------- | ---------------------------- | ------ |
| 320 × 568  | Pass / 0px        | Mobile derivatives   | 0 violations                 | None   |
| 390 × 844  | Pass / 0px        | Mobile derivatives   | 0 violations                 | None   |
| 768 × 1024 | Pass / 0px        | Full-size candidates | 0 violations                 | None   |
| 1440 × 900 | Pass / 0px        | Full-size candidates | 0 violations                 | None   |

Confirmed one H1, logical H2/H3 hierarchy, four semantic articles and figures, four
associated captions, four full-size links, stable aspect ratios, and visible 3px focus
on image links. The skip link stays clipped until the first Tab, becomes visible at
about 189×52px, and moves focus to `main` on Enter.

JavaScript-disabled rendering retained all four stories, qualifications, images, and
links. A separate test blocked every showcase image request; all headings, descriptions,
captions, qualifications, and links remained available. Reduced-motion emulation
matched and disabled the existing transition. There were no console errors, page
errors, missing assets, failed requests, external requests, forms, scripts, or
horizontal overflow in the final normal-load runs.

Automated checks supplement full-page and full-resolution Chromium inspection; this is
not a screen-reader or cross-browser certification.

## 14. Verification screenshots

All captures are full-page screenshots from the production preview:

- [Desktop — 1440 × 900 viewport](screenshots/task-004/desktop.png)
- [Tablet — 768 × 1024 viewport](screenshots/task-004/tablet.png)
- [Mobile — 390 × 844 viewport](screenshots/task-004/mobile.png)
- [Small mobile — 320 × 568 viewport](screenshots/task-004/mobile-small.png)

## 15. Git, confidentiality, and scope confirmation

The initial working tree was clean and tracked at commit `98eb56f`. The final diff and
all added binary files were reviewed against that baseline. Changes are limited to the
Task 004 showcase, its approved assets, responsive presentation, documentation, report,
and verification captures. No commit was created.

No secret, credential, private document, analytics, tracking, cookie, form, collection,
backend connection, external script, API, WebSocket, authentication flow, or database
integration was added. The separate TradeHub application was not modified. The
approved header, hero, Task 003 copy, existing CTA behavior, and noindex metadata remain
unchanged.

## 16. Limitations

Third-party market-data publication rights remain unverified, so the showcase does not
claim that captured information is live, official, licensed, comprehensive, or
exchange-provided. Browser verification used Chromium only. Final brand colors and
typography remain later inputs. The public page remains a development build and was not
deployed.

## 17. Recommended Task 005

After review, implement current-stage positioning, the two verified achievements, and
equal founder profiles using the approved bios and portraits. Preserve accurate team
attribution and avoid institutional endorsement or partnership implications. Task 005
has not been started.
