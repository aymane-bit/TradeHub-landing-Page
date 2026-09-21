# Design foundations

Task 002 implements the header and hero with explicit fallbacks. Final visual values require approved TradeHub
identity assets. The intended character is professional, premium, calm, clean,
modern fintech, trustworthy, and product-focused. Typography, spacing, and authentic
product imagery carry the design. Use black, white, the existing neutral/beige,
and restrained red emphasis once exact brand values are verified.

## Tokens and responsive behavior

`src/styles/tokens.css` centralizes conservative black/white and system-font defaults
plus provisional spacing and content width. These are accessible implementation
fallbacks, not extracted or approved brand values. Red/beige and brand font tokens
are deliberately unset. TODO: obtain actual logo/wordmark, extract exact colors and
font information, and approve the final brand-specific type scale and visual values
in a later review. Do not infer final colors from unrelated institutional logos.

Mobile-first fluid widths, responsive heading size, wrapping text, and comfortable
44px link targets support the shell. Later product captures may use intentional crops
without hiding important information. Prevent overflow rather than hiding it.
Use generous whitespace, subtle borders, and limited motion only for orientation.
Avoid blobs, generic startup illustrations, excessive gradients, glassmorphism,
noisy card grids, fake charts/interfaces/statistics, crypto or aggressive trading imagery.

## Asset directory contract

Directories contain only `.gitkeep` until approved assets are supplied:

| Directory          | Intended content                                        | Outstanding input                                                              |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `public/brand/`    | TradeHub logo, wordmark, approved font/icon derivatives | Actual identity files and usage approval                                       |
| `public/founders/` | Optimized founder portraits                             | `noureddin-bg` and `aymane` originals                                          |
| `public/product/`  | Authentic approved product captures                     | Dashboard, market, portfolio, practice flow, community; leaderboard if current |
| `public/social/`   | Approved sharing image                                  | Final sharing composition and branding                                         |

Do not generate fake screenshots or founder portraits. Do not import assets from the
main application without approval. Preserve originals outside publicly served assets;
commit optimized derivatives rather than large raw exports. Prefer WebP/AVIF with
sensible fallbacks; set intrinsic dimensions/aspect ratios and useful alt text.
Redact private user data and clearly label simulated balances, transactions, and
positions. Keep guidance and private material outside `public/`, whose files are
copied into the build. Missing visuals must use neutral, explicitly labeled placeholders
when a later task needs them. No institutional logos without explicit approval.

## Accessibility and performance

Use semantic landmarks, one page h1 and logical section headings, English document
language, a visible skip link, labeled navigation, links for navigation and buttons
for actions, visible keyboard focus, adequate contrast, responsive text, and comfortable
targets. Hide decorative images from assistive technology; give meaningful images alt
text. Never rely on color alone. Respect `prefers-reduced-motion`. Keyboard-test menus,
tabs, and dialogs if introduced; content must remain usable without JavaScript.

Prefer static HTML, zero unnecessary hydration, optimized responsive images, stable
layout, and system fonts until approved brand fonts are available. No autoplay,
continuous rendering effects, or essential carousel-only content. Test desktop,
tablet, and mobile visually, keyboard navigation, overflow, browser console, and
basic accessibility. Static tooling alone is insufficient.

## Task 002 token and layout decisions

No approved identity assets, fonts, photos, or screenshots were found in this
repository: each public asset directory contains only `.gitkeep`. The existing
application's assets have not been approved for public-site use and were not imported.

All new presentation values are **provisional**, not extracted brand values:

- Semantic colors: background/on-action `#fff`, text/action/focus `#171717`, muted
  text `#595959`, neutral surface `#f4f4f4`, border `#d8d8d8`, hover `#383838`.
- System font stack only; fluid headline 2.625–4.625rem, lead 1.0625–1.1875rem;
  body line height 1.65 and headline 1.04. Supporting notes remain at least 13px.
- Spacing scale: 8, 12, 16, 24, 32, 48, 72px; fluid page gutters 20–64px;
  maximum container 80rem. These are layout choices, not asserted brand specifications.
- Control radius 6px; surface radius 12px; subtle 1px borders; no shadows.
- Motion token 120ms ease-out for hover background only; transitions disabled under
  reduced motion. No entrance animation, smooth scrolling, or continuous movement.
- 48px primary/link target heights; visible skip link at least 44px; 3px focus
  outline outside controls. Non-sticky header avoids anchor occlusion.

Desktop uses a two-column editorial hero; below 1024px content stacks naturally.
At narrow mobile sizes CTA buttons stack. The product placeholder reserves a 6:5
box with a minimum 18rem height; it contains only development labels, never fake UI.
All destinations exist and can receive native anchor focus. The minimal early-access
notice is inside the hero; no later closing CTA section is implemented. The original
development footer text is removed; the full footer remains deferred to Task 006.

Verified red/beige, final typography, the approved logo, and approved product imagery
remain missing. Do not mistake this fallback palette for final TradeHub branding.

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

## Task 003 section system

Task 003 extends the provisional Task 002 system without introducing a new palette,
font, radius, shadow, dependency, icon set, or motion behavior. Section headings use a
fluid 36–64px token, the existing spacing scale, and the established text and muted
colors.

- The challenge section uses an editorial two-column composition at desktop and a
  numbered ruled list. It stacks in document order at smaller widths.
- The approach section uses the existing neutral surface token as a full-width band.
  A static four-step matrix communicates Explore, Practice, Understand, and Connect.
- The product pillars use equal numbered rows on mobile and an equal two-by-two ruled
  grid at desktop. Investor Community has the same area and typographic weight as the
  other three pillars.
- Section introductions and body copy remain HTML text. No icons, decorative imagery,
  scripts, or interaction are required. The challenge introduction may stay visible
  while its list scrolls on desktop; reduced-motion behavior is unchanged.

The existing header and hero layout, wording, CTA destinations, skip-link behavior,
and approved product assets are preserved. The approved TradeHub WebP also serves as
the document icon, preventing the browser's implicit missing-favicon request without
introducing another asset.

## Task 004 product showcase

The showcase continues the existing editorial system with a strong introduction and
four numbered stories. On desktop, each story pairs large authentic product media with
concise copy and alternates its visual alignment. On smaller screens, every story keeps
the same logical copy-then-media document order in a single column. Ruled separators,
the existing neutral border, the established radius, and generous spacing provide
structure without browser chrome, device frames, shadows, overlaps, or animation.

Responsive `<picture>` markup lets browsers choose a smaller WebP for mobile or the
unchanged full-size WebP where additional detail is useful. Width and height attributes
reserve each image's aspect ratio. Showcase images use `loading="lazy"` and
`decoding="async"`; the above-the-fold hero behavior is unchanged. Captions remain
visible, and full-size links are available to keyboard and mobile users. Story text and
captions continue to communicate the product if images are blocked.

Asset source, public approval, privacy review, transformations, dimensions, sizes, and
hashes are recorded in [PRODUCT_ASSET_PROVENANCE.md](PRODUCT_ASSET_PROVENANCE.md).
No new visual token, dependency, icon, script, or interactive state was introduced.
