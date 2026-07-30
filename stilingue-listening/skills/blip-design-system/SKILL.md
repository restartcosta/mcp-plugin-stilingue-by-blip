---
name: blip-design-system
description: Use this skill to generate well-branded interfaces and assets for Blip (blip.ai / take.net) — a Brazilian conversational-AI platform for WhatsApp, Instagram, Messenger and webchat. Use for production UI or throwaway prototypes/mocks/slides. Contains Blip's colors, type (Nunito Sans), brand assets, BDS-flavored component CSS, and a Blip Desk UI kit.
user-invocable: true
---

Read the `README.md` file within this skill first — it covers brand context, content fundamentals, visual foundations, and iconography. Then explore the other files:

- `colors_and_type.css` — drop into any HTML for the full token set
- `bds-components.css` — portable Blip-styled buttons, inputs, chips, cards, avatars, switches, banners
- `assets/logos/`, `assets/illustrations/`, `assets/icons/` — real Blip SVGs
- `ui_kits/blip-desk/` — React components for the agent console (Rail, Topbar, Inbox, Thread, ContactPanel, Login)
- `preview/` — small HTML specimens showing every token/component in context

If creating visual artifacts (slides, mocks, throwaway prototypes), copy the assets out and produce static HTML that links the two CSS files and the required SVGs. If working on production code, read the rules here to become an expert in designing with Blip's brand — then apply them in your target framework.

If the user invokes this skill without further guidance, ask what they want to build or design, ask a few targeted questions (product surface? marketing or product? which channels?), and act as an expert designer who outputs HTML artifacts or production code depending on the need.

**One exception**: if the artifact is being made *for* a Stilingue/Blip client (a report, dashboard, or one-pager representing their brand — not Blip's own product surfaces like Desk/Studio/Portal), don't assume this design system automatically applies. Ask first, using the word "tema" (not "design system" — many clients won't recognize that term): *"Should this use the Stilingue by Blip theme, or would you like something custom to match your own brand?"* If they want custom, design a bespoke visual identity yourself instead of using these tokens — a client's own report shouldn't necessarily wear Blip's colors. The `one-page-report` skill's §1 has a worked example of this branch if you need a reference for how to structure the choice.
