# Blip Design System

A designer-facing recreation of the **Blip** brand + **Blip DS** (blip-ds) component library, organized as portable guidelines, CSS tokens, brand assets, and a high-fidelity UI kit for prototyping Blip surfaces.

**Blip** (take.net / blip.ai) is a Brazilian conversational-AI platform for automating customer conversations on WhatsApp, Instagram, Messenger, webchat and voice. Blip's flagship product is **Blip Desk**, an agent console where human agents resolve tickets alongside chatbot flows — plus a Studio for authoring those flows and a Portal for managing channels/bots.

All visual tokens here were lifted directly from the open-source **[takenet/blip-ds](https://github.com/takenet/blip-ds)** Stencil repo (used by Blip's own products). Specifically:

- `src/tokens/_variables.global.scss` → colors, spacing, shadows, border-radius
- `src/tokens/_variables.typography.scss` → type scale
- `src/components/button/` · `input/` · `chip/` · `card/` · `avatar/` · `switch/` · `banner/` → component specs
- `src/assets/svg/` → brand illustrations
- `src/assets/icons/` → loading spinners

---

## Index

| File / folder | Purpose |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography |
| `SKILL.md` | Agent-Skills entrypoint (Claude Code compatible) |
| `colors_and_type.css` | CSS custom properties for color + type + spacing + radius + shadow |
| `bds-components.css` | Minimal portable recreation of BDS component styles (button, input, chip, card, avatar, switch, badge, banner) |
| `fonts/` | Nunito Sans (variable regular + italic) as WOFF2 |
| `assets/logos/` | Blip wordmark + speech-balloon mark (SVG) |
| `assets/illustrations/` | Speech-balloon illustrations + brand dot pattern |
| `assets/icons/` | Loading spinners from blip-ds |
| `preview/` | Small HTML cards rendered in the Design System tab |
| `ui_kits/blip-desk/` | React UI kit recreating Blip Desk (login → inbox → thread → contact panel) |

Start a new Blip design by copying `colors_and_type.css` + `bds-components.css` into your HTML, then borrow components from `ui_kits/blip-desk/`.

---

## Content fundamentals

**Voice.** Clear, warm, and direct — a partner, not a vendor. Blip's marketing copy leans on **outcomes** ("conversations that convert", "surprising experiences, impactful results") rather than features. Product copy is calm and imperative: *Save*, *Send*, *Transfer*, *Resolve*. Error states are matter-of-fact, never cute.

**Person.** Second person for product surfaces ("Your flow is live", "You'll receive a new tracking email"). Third person for marketing ("Blip's platform", "with Blip, businesses can…").

**Languages.** Blip is Brazilian; expect **pt-BR** and **en** side-by-side. Never localize brand terms (Blip, Desk, Studio, Portal). Dates `DD/MM/YYYY`, currency `R$`.

**Case.** Sentence case everywhere — titles, buttons, nav items. Only proper nouns and channel names get title-case (WhatsApp, Instagram, Messenger). Never ALL-CAPS except small uppercase labels with `letter-spacing: 0.04em` used for section markers in side panels.

**Emoji & punctuation.** Real customer messages carry emoji naturally — Blip never strips them from chat bubbles. Marketing copy avoids emoji. Ellipses are real `…` (U+2026); dashes are `—`. Product copy avoids exclamation points outside of success toasts.

**Vibe.** Optimistic, human, technical-but-not-cold. The brand tagline riff is *conversations that convert*. Illustrations use speech balloons and soft dots — the conversation metaphor shows up visually as often as it does verbally.

**Concrete snippets** (in this kit / on blip.ai):
- *"Conversations that convert, at scale."* — hero
- *"Surprising experiences and impactful results."* — pitch
- *"Updated ✓ You'll receive a new tracking email within 15 minutes."* — agent reply
- *"Saved. Your flow is live."* — success toast
- *"Review needed. 3 intents have low confidence."* — warn banner

---

## Visual foundations

**Color.** One loud brand blue (`#1E6BF1` primary · `#0096FA` brand / azure radiance · `#052F91` dark smalt) sits on a desaturated neutral ramp (`#F6F8FA` → `#292929`). Everything else — 8 named hues (watermelon, ocean, mango, tree, lemon, phoenix, cloud, milk) — is reserved for illustrations, tag chips and category pills. Product chrome stays monochrome + one blue; semantic color is rare and meaningful.

**Type.** **Nunito Sans** (variable) throughout. Weights 400/600/700/800. `-webkit-font-smoothing: antialiased` globally. Display sizes are letterspaced `-0.01em` from 32px up. Body stays at 14px `line-height: 1.5`; chat bubbles at 14/1.4. No serif or mono except inline `<code>`.

**Spacing.** 4-px base unit. Scale `4 / 8 / 12 / 16 / 24 / 32 / 40 / 64`. Most chrome lives on 16 and 24.

**Backgrounds.** Surfaces are flat white or `#F6F8FA`. Full-bleed gradients appear **only** on marketing hero and sign-in (the `ocean` gradient: `#052F91 → #1E6BF1`). A repeating speech-balloon/dot pattern (`assets/illustrations/pattern.svg`) is layered at ~18% opacity on those gradient panels — never on app chrome.

**Animation.** Cubic-bezier `(.4, 0, .2, 1)` at 200 ms for state changes; 300 ms for card hover lift. No bounce, no springs. The only idle animation is the loading spinner (1 s linear rotate).

**Hover states.** Solid buttons go 12% darker via `filter: brightness(0.88)`. Ghost/outline buttons paint an 8%-alpha overlay of their text color. List rows tint toward `#F6F8FA`. Cards lift to `scale(1.02)` with `shadow-1`.

**Press states.** Solid buttons `brightness(0.76)`. Ghost buttons 24%-alpha overlay. Cards keep the hover scale and add a 2-px focus ring.

**Focus.** All interactive elements get a 2-px `#C9DDFF` (color-info) ring. Never remove outlines without replacing them.

**Borders.** Hairlines only — `1px solid` from the 4-step neutral-border ramp (`#E8E8E8` down to `#F6F6F6`). Never use 2-px borders for decoration.

**Shadows.** Three soft-dark tiers, all at `rgba(0,16,36,0.12)` base:
- `shadow-1` — card/message bubble: `0 1px 2px`
- `shadow-2` — floating surface: `0 4px 8px`
- `shadow-3` — modal/popover: `0 8px 16px`

There are **no inner shadows** and **no protection gradients** — Blip isolates elements with borders + surface-color steps, not stacked shadows.

**Transparency & blur.** Essentially absent from the product. Overlays are a flat `rgba(0, 16, 36, 0.56)`. Blur (`backdrop-filter`) does not appear in blip-ds.

**Radii.** `8px` default for cards, inputs, buttons. `999px` for avatars, chips and badges. `10px` for grouped button clusters. Never mix `4px` and `8px` in the same card.

**Imagery.** Warm, colorful photography of real people on real phones — not moody, not b&w. Illustrations are simple flat-fill with a 2-px stroke and the brand palette; they are optimistic and reductive (a balloon, a mark, a dot pattern — never realistic).

**Cards.** White fill, `1px solid #F6F6F6` border, `border-radius: 8px`, `shadow-1` on hover only. Padding 16 — 20. Internal rhythm is **border-separated rows** (side-panel pattern), not card-in-card nesting.

**Layout rules.** Fixed 56-px top bar; fixed 64-px left product rail in brand blue; 320-px list column; 320-px contextual right panel. The middle column is fluid. Max content width on marketing pages is 1200 px.

---

## Iconography

**Primary system.** Blip ships its icons through **`@blip-ds/tokens`** and the **`takenet/blip-icons`** repo — a mixed set of 72×72 SVG symbol icons (strokes) plus bundled brand illustrations. Inside the blip-ds component repo, only three icons are committed as raw SVGs: `load-extra-small.svg`, `load-small.svg`, `load-standard.svg` (the loading spinners, copied into `assets/icons/` here).

**Substitution.** Because the full icon set isn't vendored in this kit, use **[Lucide](https://lucide.dev)** as the closest CDN match — same 24×24 grid, 1.5-px stroke, rounded caps. Register this substitution when shipping production code; designs made with Lucide will need a lift to Blip's custom set. **FLAG: icons swapped for Lucide, confirm with Blip team before prod.**

**Rules.**
- Icons are monochrome. They inherit `currentColor` — color them with CSS, never embed fills.
- Default size **24 px** (`16` for inline, `40+` for hero).
- Keep the 1.5-px stroke weight consistent with Lucide / Blip's own icons; never mix stroke and fill styles on the same screen.
- In product chrome, icons are `var(--color-content-ghost)` (default) → `var(--color-primary)` on hover/active.

**Unicode & emoji.** Emoji appears in **chat bubbles only** (real customer messages, reactions). Product chrome never uses emoji as UI affordance. Unicode glyphs stand in for icons in these previews (✉ ⌕ ⇋ ⚙ ✓✓) purely because the Lucide CDN wasn't wired into card HTML; replace with Lucide in real UIs.

**Logos.** Two brand lockups shipped in `assets/logos/`:
- `blip-logo.svg` — official lockup: azure-radiance balloon + black wordmark (color-on-light)
- `blip-logo-black.svg` — monochrome black variant (single-color print, mono UIs)
- `blip-logo-white.svg` — monochrome white variant (for dark/gradient/photo backgrounds)
- `blip-mark.svg` — balloon-only symbol (use at 24 px+; stays recognizable down to 16 px)

On brand blue or gradient backgrounds, apply `filter: brightness(0) invert(1)` to flip the mark to white. Never recolor the mark to anything other than `#1E6BF1` or `#FFFFFF`.

**Illustrations.** `assets/illustrations/` contains **144 official Blip DS illustrations** — empty states, hero spots, category markers, personas, objects. All flat-fill SVG, single color or duo-tone in brand blue + neutrals. Highlights: `welcome-blip`, `invite-blip`, `empty`, `error-empty`, `loading-error`, `new-feature`, `team-work`, `collaboration-1/2/3`, `professional-1…8`, `robot-1…6`, `chat-bank`, `chat-sales`, `delivery-chat`, `faq`, `management`, `rocket`, `idea`, `map`. Use the illustration + a short sentence of copy on empty states and zero-data screens; never use more than one illustration per viewport. Browse the full grid in the **Brand — Illustration gallery** preview card. The legacy `message-ballon.svg`, `notification-ballon.svg`, and `pattern.svg` from blip-ds/src/assets/svg remain in the same folder for backdrop/texture use.

---

## UI kits

| Kit | Product | Components | Preview |
|---|---|---|---|
| `ui_kits/blip-desk/` | Blip Desk agent console | `Rail`, `Topbar`, `Inbox`, `Thread`, `ContactPanel`, `Login` | Login → inbox → open conversation → send a message |

Each kit is a self-contained folder with an `index.html` entry and JSX component files. They cut corners on real logic (state is in-memory; no auth) but match the production visuals tightly.

---

## Caveats & next steps

- **Icons are substituted** — this kit uses Unicode glyphs in the previews and recommends Lucide for prototypes; production work should import `@blip-ds/tokens` icons.
- **Nunito Sans** is loaded from Google Fonts rather than a self-hosted WOFF2. For offline/print use, download the variable WOFF2 and drop it into `fonts/`.
- Blip's design team publishes a private Figma (`hmg-design.blip.ai`); no direct Figma link was attached, so the palette was triangulated from blip-ds SCSS tokens + brandfetch. If you have access, cross-check against Figma before shipping.
- Only one product (Blip Desk) was recreated; **Blip Studio** (flow builder) and **Blip Portal** (admin) are stubbed as rail items only.
