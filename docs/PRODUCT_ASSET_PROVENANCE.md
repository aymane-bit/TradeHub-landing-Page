# Product capture provenance

Task 004 inventory date: 2026-09-21

Source directory: `/home/akajjou/Desktop/landingPage/`

The user supplied these captures and explicitly confirmed that the visible names,
avatars, email, posts, account figures, balances, positions, transactions, and
performance figures are demo data approved for public display. The captures were
inspected at full resolution. None exposes authentication tokens, credentials, private
messages, browser developer tools, internal URLs, or real financial account data.

Public-use approval for a demo screenshot does not establish authorization to
redistribute third-party market information. Market-data publication rights remain
unverified. Captions therefore describe market screens as captured illustrations,
never as live, official, licensed, comprehensive, or exchange-provided data.

## Complete product-capture inventory

| Original                | Dimensions |      Size | Visible data                                                                                                                    | Intended role                   | Public-use status                            | Task 004 decision                                              |
| ----------------------- | ---------: | --------: | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------- | -------------------------------------------------------------- |
| `Market_overview_.webp` |   1024×987 | 127,094 B | Simulated portfolio totals and performance; market movers, heatmap, indices, calendar, and captured news                        | Broad dashboard / hero          | Approved by user; already public in Task 002 | Retained in hero; not repeated                                 |
| `Market_board.webp`     |   1024×987 | 130,398 B | Company names and symbols, captured prices and changes, sectors, timestamps, and pagination                                     | Market exploration              | Approved by user                             | Selected                                                       |
| `trade-stock.webp`      |   1024×940 |  95,734 B | Company detail, captured chart and quote values, virtual buy/sell controls, simulated pending order and share balance           | Virtual investing practice      | Approved by user                             | Selected                                                       |
| `Portfolio.webp`        |   1024×867 |  86,056 B | Simulated balance, performance, allocation, positions, quantities, values, and sell controls                                    | Portfolio understanding         | Approved by user                             | Selected                                                       |
| `community.webp`        |    701×768 | 137,540 B | Approved demo profile names, avatars, email, composer, posts, engagement counts, and an external article URL inside a demo post | Investor community              | Approved by user                             | Selected                                                       |
| `Leaderboard.webp`      |    569×768 |  55,654 B | Approved demo usernames, simulated returns, profit/loss, rankings, and win rates                                                | Community / engagement evidence | Approved by user                             | Not selected; four core stories already represented            |
| `Profile.webp`          |    954×686 |  46,774 B | Approved demo avatar, username, email, bio, progress, badges, and social counts                                                 | Profile / community evidence    | Approved by user                             | Not selected; more identity-heavy than needed for this section |

The logo and two founder portraits in the supplied directory are not product captures
and are outside this inventory. The Task 002 logo remains public; founder portraits
remain deferred to Task 005.

## Selected production assets and transformations

Originals remain unchanged in the supplied source directory. Full-size production
files are byte-for-byte copies with descriptive names. Mobile derivatives were resized
proportionally with Pillow 10.2.0 using Lanczos resampling and WebP quality 82, method 6.
There was no crop, redaction, color adjustment, compositing, figure edit, or upscale.

| Source              | Full-size production file | Full dimensions / size | Mobile derivative            | Mobile dimensions / size |
| ------------------- | ------------------------- | ---------------------: | ---------------------------- | -----------------------: |
| `Market_board.webp` | `market-board.webp`       |   1024×987 / 130,398 B | `market-board-640.webp`      |       640×617 / 18,090 B |
| `trade-stock.webp`  | `virtual-investing.webp`  |    1024×940 / 95,734 B | `virtual-investing-640.webp` |       640×588 / 16,990 B |
| `Portfolio.webp`    | `portfolio.webp`          |    1024×867 / 86,056 B | `portfolio-640.webp`         |       640×542 / 15,748 B |
| `community.webp`    | `community.webp`          |    701×768 / 137,540 B | `community-480.webp`         |       480×526 / 18,254 B |

Total added production-image weight is **518,810 bytes** across eight files. Browsers
select one candidate per story: the four mobile derivatives total **69,082 bytes**;
the four full-size files total **449,728 bytes**. Every image is below the Task 004
quality-guide limits. Full-size links preserve access to the interface detail.

## Source hashes

```text
047fb78233221a096631a37049eb8e5bbf48b752cef20f7827a83bd143fc99a4  Market_board.webp
be54ff237a1b1fe48b3b968f52d1a8127843dad4d68c4feebf569bd3b4ecc592  trade-stock.webp
e3cabbcf12603fc108a3c31daca91d6b5d68f5f51c42bbe239554558f91d0ef4  Portfolio.webp
099ef72705ae5f32380fa085e6919b76f2f9e0845d86be07d25db6c62367de9c  community.webp
```
