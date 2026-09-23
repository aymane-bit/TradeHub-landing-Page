# Landing V2 design system

The active public-page direction is a bold technology startup identity using TradeHub's verified near-black, warm-white, sand, and restrained red visual language. System fonts keep the build local and fast. Authentic screenshots and founder portraits remain the only photographic/product media.

## Tokens

`src/styles/tokens.css` centralizes color, typography, spacing, radius, target, shadow, and motion values. Key roles are Ink `#0c0f0d`, Paper `#fbfaf6`, Sand `#c7b69d`, and Signal `#bd3933`. Muted foregrounds meet the intended contrast roles on their paired surfaces. Final brand extraction and legal review remain outside this implementation.

Display type is fluid and high contrast; body measure stays near 60–70 characters. Section spacing is disciplined rather than report-like. Technical grid lines, small status marks, and restrained red/sand accents support orientation without generic finance illustration, fake data, browser chrome, perspective distortion, or neon styling.

## Components and responsive behavior

The dark sticky header begins as part of the hero composition and gains a denser surface, border, and shadow after scrolling. Desktop shows all destinations. Below 768px, progressive enhancement turns the same links into an accessible sheet with scroll lock, focus entry, focus containment, Escape handling, link-close behavior, and focus return. Without JavaScript, links remain visible in the document.

The hero uses an asymmetric desktop grid and a copy-first mobile stack. The authentic dashboard is the central product object. Product tabs use semantic `tablist`, `tab`, and `tabpanel` roles with roving focus and arrow/Home/End controls. With JavaScript disabled, every panel stays visible. Screenshots retain dimensions, responsive candidates, captions, alt text, and full-size links.

How it works becomes a four-column flow on wide screens and a vertical stepper on mobile. Why TradeHub uses one statement, a compact flow line, and a status panel. Credibility remains factual and editorial. Founder cards preserve equal weight and authentic portraits. The closing CTA uses abstract code-native bars only; it does not recreate product UI or invent data.

## Motion and accessibility

Motion is limited to a one-time hero reveal, short navbar/menu/tab transitions, button feedback, and small image emphasis. There is no parallax, autoplay, continuous loop, carousel, counter, cursor effect, or animation dependency. `prefers-reduced-motion` reduces animation and disables smooth scrolling.

The page has one H1, logical headings, semantic landmarks, a focus-visible skip link, 44px targets, visible focus on light and dark surfaces, intrinsic media dimensions, anchor scroll margins, responsive text, and no horizontal overflow. Essential content never depends on animation or hover.
