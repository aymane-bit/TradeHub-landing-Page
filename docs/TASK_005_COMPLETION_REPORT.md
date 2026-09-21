# Task 005 completion report

Date: 2026-09-21

Scope: **Task 005 — Current Stage, Verified Achievements, and Founders only**

## 1. Summary

Added three connected sections after the approved Task 004 product showcase:

1. a current-stage section separating the working product, early-user preparation,
   and long-term direction;
2. two precisely attributed founder achievements with a visible no-endorsement note;
   and
3. two equal founder profiles using approved, locally hosted portraits, exact bios,
   roles, and LinkedIn URLs.

The page remains static Astro with zero client JavaScript. No closing CTA, contact,
footer, final disclaimer, release SEO, `/demo`, deployment, or external integration was
implemented.

## 2. Files added and modified

Added:

- `src/components/CurrentStage.astro`
- `src/components/Credibility.astro`
- `src/components/Founders.astro`
- `docs/FOUNDER_AND_ACHIEVEMENT_PROVENANCE.md`
- `docs/TASK_005_COMPLETION_REPORT.md`
- four responsive portrait WebPs under `public/founders/`
- six verification PNGs under `docs/screenshots/task-005/`

Modified:

- `src/pages/index.astro` — appends the three Task 005 sections after the showcase.
- `src/content/site.ts` — centralizes all Task 005 copy, attribution, founder metadata,
  portrait metadata, alt text, and LinkedIn links.
- `src/styles/global.css` — adds the responsive stage, evidence, and founder layouts.
- `docs/CONTENT.md` — records exact Task 005 content and scope.
- `docs/DESIGN_SYSTEM.md` — records the Task 005 visual and image decisions.
- `docs/IMPLEMENTATION_PLAN.md` — records the Task 005 gate and Task 006 handoff.
- `docs/PROJECT_BRIEF.md` and `README.md` — update the current milestone and implemented
  page description.

No package, lockfile, token, Docker, Astro, TypeScript, formatter, lint, layout, or
metadata configuration changed.

## 3. Exact final public copy

### Current stage

Eyebrow: **Current stage**

Heading: **Built and preparing for early users.**

Lead:

> A working TradeHub platform already exists. We're preparing to open it to early
> users, beginning with a virtual investing experience.

Support:

> Today, TradeHub brings market exploration, simulated investing activity, portfolio
> tools, and investor community into one working product experience.

Sequence:

1. **Built** — A working platform brings the core TradeHub experience together.
2. **Preparing** — TradeHub is preparing to welcome early users and learn from real
   product usage.
3. **Long-term direction** — TradeHub's broader vision is to connect more of the
   Moroccan retail-investing journey over time.

### Relevant experience

Eyebrow: **Relevant experience**

Heading: **Experience shaped by markets and product building.**

Introduction:

> The founders bring complementary experience in software, product building, investing,
> and market-oriented competitions.

Achievement 1:

- **2nd Place — Casablanca Stock Exchange Trading Competition, 2025**
- **Nour-Eddine Ait Bouguarri**
- This achievement belongs to Nour-Eddine and is not presented as a TradeHub award.

Achievement 2:

- **2nd Place — CIH Bank & StartGate UM6P Embedded Finance Hackathon, 2026**
- **Nour-Eddine Ait Bouguarri and Aymane Kajjou**
- Both TradeHub co-founders were members of the team awarded second place.

Clarification:

> These achievements describe founder participation and do not represent institutional
> partnerships or endorsements of TradeHub.

### Founders

Eyebrow: **Founders**

Heading: **Meet the people building TradeHub.**

Introduction:

> TradeHub is being built by two co-founders shaped by project-based learning at the
> 1337 / 42 Network and a shared focus on turning ideas into working products.

**Nour-Eddine Ait Bouguarri — Co-founder**

> Software engineer from the 1337 / 42 Network focused on backend systems,
> infrastructure, financial technology, and market-oriented products. He combines
> technical experience with a strong interest in investing and trading and is helping
> build TradeHub around the needs of Moroccan retail investors.

Link: **View Nour-Eddine on LinkedIn**

**Aymane Kajjou — Co-founder**

> Student at 1337 Coding School, UM6P / 42 Network, interested in technology, product
> building, and entrepreneurship. He focuses on turning ideas into practical products
> and exploring how technology can solve meaningful real-world problems.

Link: **View Aymane on LinkedIn**

## 4. Achievement attribution

The Casablanca Stock Exchange competition result is attributed only to Nour-Eddine.
Aymane is absent from that entry. The embedded-finance hackathon result is attributed to
both founders as members of the awarded team; the copy does not suggest they were the
only team members.

Neither result is described as a TradeHub award. No project name, jury comment, prize
value, participant count, event statistic, founder title, or responsibility was
invented.

## 5. No endorsement or partnership implication

The section includes the required visible clarification that founder participation does
not represent institutional partnerships or endorsements of TradeHub. No institutional
logo, “trusted by,” “backed by,” “supported by,” partnership, affiliation, sponsorship,
employment, licensing, or regulatory-approval claim appears.

Institution names occur only inside the exact approved achievement names or factual
founder background. The page does not imply endorsement by the Casablanca Stock
Exchange, CIH Bank, StartGate, UM6P, 1337, or the 42 Network.

## 6. Portrait provenance, approval, and transformations

Both portraits were supplied by the user in `/home/akajjou/Desktop/landingPage/` for
the public TradeHub website and are correctly associated by their descriptive source
filenames:

- `noureddin-bg.webp` — Nour-Eddine Ait Bouguarri;
- `aymane.webp` — Aymane Kajjou.

Both are approved for public website use. Originals remain unchanged. Public
derivatives were rebuilt as RGB WebPs without EXIF, ICC, or XMP payloads using Pillow
10.2.0, Lanczos resampling, quality 84, and method 6.

Nour-Eddine's 615×768 source used a square crop from `(0, 20)` to `(615, 635)`, removing
lower-torso space while preserving the full head, chin, face, clothing, arms, and
identity. Aymane's 400×400 source was not cropped. There was no generative editing,
retouching, face or body alteration, background replacement, compositing, color change,
or upscale.

Detailed hashes and provenance are in
[FOUNDER_AND_ACHIEVEMENT_PROVENANCE.md](FOUNDER_AND_ACHIEVEMENT_PROVENANCE.md).

## 7. Portrait dimensions, sizes, and total weight

| Founder     |            Original | Full production output |      Mobile output |
| ----------- | ------------------: | ---------------------: | -----------------: |
| Nour-Eddine | 615×768 / 409,564 B |     600×600 / 23,398 B | 320×320 / 10,094 B |
| Aymane      |   400×400 / 7,156 B |      400×400 / 7,512 B |  320×320 / 5,898 B |

Total added portrait weight is **46,902 bytes** across four files. Browsers load one
candidate per founder. Both images carry intrinsic dimensions, accurate approved alt
text, `loading="lazy"`, and `decoding="async"`.

## 8. Founder presentation and responsive behavior

Both founders receive the same square aspect ratio, maximum 400px rendered width,
border treatment, role style, heading level, bio width, spacing, link style, and desktop
column width. Desktop presents two equal columns. Tablet and mobile use the logical
order Nour-Eddine followed by Aymane in one column.

Portrait backgrounds remain authentic. A neutral CSS frame and consistent crop create
visual balance without altering either person. Names and bios wrap without overflow at
all required widths.

## 9. LinkedIn behavior and accessibility

The exact approved URLs are used without tracking parameters:

- `https://www.linkedin.com/in/nour-eddin-ait-bouguarri`
- `https://www.linkedin.com/in/aymane-kajjou`

Links use clear founder-specific text, no logo or embed, and no forced new tab. They
remain at least 44px high and receive the existing visible 3px keyboard focus outline.
Browser verification did not navigate to LinkedIn and made no external requests.

## 10. Dependencies

No repository dependency was added or changed. Node 24.21.0 and npm 11.19.0 were used
from the existing isolated `/tmp` runtime because the host default is Node 20. Pillow
10.2.0 was existing one-time image tooling. Temporary Playwright Core and Axe packages
under `/tmp/tradehub-task003-tools` were reused for verification and are not repository
dependencies.

## 11. Commands and results

| Command/check                                                                    | Result                                                                 |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Branch, commit, log, status, and diff inspection                                 | Initial tree clean on `main` at committed Task 004 baseline `2b1f429`  |
| Portrait existence, dimensions, metadata, hashes, and full-resolution inspection | Passed for both approved portraits                                     |
| `npm ci`                                                                         | Passed; 378 packages installed, zero vulnerabilities                   |
| `npm run format` / `npm run format:check`                                        | Passed                                                                 |
| `npm run lint`                                                                   | Passed with zero warnings allowed                                      |
| `npm run check`                                                                  | Passed; Astro: 15 files, zero errors/warnings/hints; TypeScript passed |
| `npm run build`                                                                  | Passed; one static homepage                                            |
| `docker compose config --quiet`                                                  | Passed                                                                 |
| `docker compose build`                                                           | Passed                                                                 |
| Production HTML, external-link, image metadata, and script inspection            | Passed                                                                 |
| Temporary Playwright/Axe harness                                                 | Passed at all four required viewports                                  |
| `git diff --check`, complete diff, binary, confidentiality, and status review    | Passed                                                                 |

## 12. Browser, keyboard, accessibility, and resilience verification

| Viewport   | Visual / overflow | Portrait treatment | Axe WCAG 2 A/AA and 2.1 A/AA | Errors |
| ---------- | ----------------- | ------------------ | ---------------------------- | ------ |
| 320 × 568  | Pass / 0px        | 280×280 each       | 0 violations                 | None   |
| 390 × 844  | Pass / 0px        | 350×350 each       | 0 violations                 | None   |
| 768 × 1024 | Pass / 0px        | 400×400 each       | 0 violations                 | None   |
| 1440 × 900 | Pass / 0px        | 400×400 each       | 0 violations                 | None   |

Confirmed one H1, logical section order and H2/H3 hierarchy, three stage entries, two
achievements, two founder articles, two accurate portrait alts, and two exact LinkedIn
links. Current functionality, preparation, and long-term direction remain distinct.

The skip link stays clipped until the first Tab, expands to about 189×52px, and moves
focus to `main` on Enter. The first LinkedIn link displays the 3px focus outline.
JavaScript-disabled rendering retained all sections and links. A separate run blocked
both portrait families; names, roles, bios, and links remained complete. Reduced-motion
emulation matched and disabled the existing transition.

Final normal-load runs had no console errors, page errors, missing assets, failed
requests, external requests, forms, scripts, or horizontal overflow. Automated checks
supplement full-page and founder close-up inspection in Chromium; this is not a
screen-reader or cross-browser certification.

## 13. Verification screenshots

Full-page production-preview captures:

- [Desktop — 1440 × 900 viewport](screenshots/task-005/desktop.png)
- [Tablet — 768 × 1024 viewport](screenshots/task-005/tablet.png)
- [Mobile — 390 × 844 viewport](screenshots/task-005/mobile.png)
- [Small mobile — 320 × 568 viewport](screenshots/task-005/mobile-small.png)

Founder close-ups:

- [Founder section — desktop](screenshots/task-005/founders-desktop.png)
- [Founder section — mobile](screenshots/task-005/founders-mobile.png)

## 14. Deviations

No navigation link was added. The optional Founders link would crowd the approved
compact header at 320px and 390px, so full navigation remains deferred to the later
global-polish task. The achievement entries include short factual attribution notes to
make the required ownership and team context unmistakable. No required copy or
behavior was weakened.

## 15. Baseline, Git, confidentiality, and scope

The initial tree was clean at the committed Task 004 baseline `2b1f429`. The final diff
and every added binary file were reviewed against it. The header, hero, Task 003 copy,
Task 004 copy, product assets, component markup, CTA behavior, and noindex metadata are
unchanged. Shared page composition, centralized content, and global CSS changed only to
append and style Task 005.

No secret, credential, private document, analytics, tracker, cookie, form, collection,
API, backend, WebSocket, authentication flow, LinkedIn embed, remote image, or database
integration was added. No commit or deployment was made. The separate TradeHub
application was not modified.

## 16. Recommended Task 006

After review, implement the closing early-access CTA, approved contact behavior,
footer, and provisional disclaimer only when the required destinations and contact,
privacy, and legal inputs are available. Task 006 has not been started.
