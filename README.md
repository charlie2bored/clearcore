# Clear Core

> Marketing site for a fictional gluten-free protein bar brand — built as a portfolio piece exploring identity design, scroll-driven motion, and brand iteration in code.

**Live (local):** `npm run dev` → http://localhost:5173
**Repo:** [github.com/charlie2bored/clearcore](https://github.com/charlie2bored/clearcore)

---

## What it is

A multi-page React marketing site for **Clear Core**, a fictional gluten-free protein bar brand. The project started as a layout study and evolved into a full design exploration: I rewired the structure into real routes, then iterated the brand identity through two distinct directions (an editorial "Lab Notebook" pass, then a playful "Snack Mix" pass) to land on something that doesn't read as a clone of any single reference.

Every interactive element is wired to a real page. Every section has been touched at the identity layer at least twice — the iteration history is preserved in commits so the design journey is legible.

---

## Tech stack

| Concern | Choice | Why |
|---|---|---|
| Build tool | **Vite 8** | Fastest DX, ESM-native, painless React + TS setup |
| UI | **React 19 + TypeScript** | Strict types throughout |
| Routing | **React Router 7** | Real routes for every CTA, deep-linkable detail pages |
| Styling | **Tailwind CSS v4** with `@theme` tokens | Rapid iteration, design tokens in CSS instead of JS config |
| Component motion | **Framer Motion 12** | Spring physics, hover states, stagger reveal |
| Scroll motion | **GSAP 3 + ScrollTrigger** | Pinned sections + scrub-driven word reveals |
| Fonts | **Bricolage Grotesque** (display, variable), **Caveat** (handwritten accent), **Inter** (body) | Free Google Fonts; variable axes for character |

---

## Design system

### Palette — "Snack Mix"

| Token | Hex | Role |
|---|---|---|
| `cream` | `#fdf6e3` | Page background, light surfaces |
| `cream-2` | `#f4ebd0` | Secondary surface (e.g. About values band) |
| `ink` | `#1a1a1a` | Body text, dark sections, button outlines |
| `cherry` | `#e23e3e` | Primary brand accent — every "moment of attention" |
| `tangerine` | `#f59e2c` | Secondary accent — sticker fills, atmospheric blobs |
| `sky` | `#4ea0d6` | Tertiary accent — variety on stickers, links |
| `butter` | `#fbd97a` | Soft warm accent — sticker fills, hero blob |
| `mint` | `#c5e3c8` | Reserved soft pale (defined in `@theme`, not currently used) |
| `black` | `#0a0a0a` | Reserved deepest dark |

### Typography

- **Display:** Bricolage Grotesque (variable across `opsz` and `wght`) — chunky and friendly without being childish.
- **Script:** Caveat (handwritten) — used for eyebrow notes, accent words inside headlines, and decorative sparkles.
- **Body:** Inter — neutral and readable.
- **Wordmark:** Bricolage Grotesque italic semibold — replaces a script-font wordmark to feel custom without commissioning a logotype.

### Signature elements

Three recurring devices give the site its visual rhythm:

1. **Handwritten eyebrow notes** — short Caveat phrases above each major headline, rotated `~-3°`, springing in. Each section gets a different note so they read as handmade asides:
   - Hero: *psst — we made this ✦*
   - Products: *pick a snack ✦*
   - Flavors: *the whole lineup ✦*
   - Footer CTA: *okay one last thing ✦*

2. **Caveat accent words inside headlines** — one word per major headline lifts out in Caveat italic, cherry, rotated `-2°`. Positioned at the end of each headline so it lands as a punchline:
   *"finally tastes like **food.**"* / *"Three flavors, zero **gluten.**"* / *"Find a bar near **you.**"*

3. **Sticker badges** — chunky 3px ink border, bright fill (cherry / tangerine / sky / butter), offset hard shadow, and a small rotation. Spring-bounce in. Used in the hero around the product, and available as a `.sticker` utility in `index.css` for reuse.

### Motion principles

- **Springs over easings** for entrance — the snack-pack voice calls for bounce, not glide.
- **One pinned scroll section** (Reveal) — kept restrained so it doesn't dominate.
- **Hover states are physical** — buttons translate `-2px` and grow their offset shadow rather than lighten in color.
- **Atmospheric blur blobs** instead of pattern overlays — adds warmth to flat backgrounds without re-introducing the drip-splash motif common in the snack/beverage category.

---

## Features

### Pages & routing

| Path | Page | Notes |
|---|---|---|
| `/` | Home | Hero · Reveal · Products · Nutrition |
| `/flavors` | Flavors overview | 3-up grid + dual CTAs |
| `/flavors/:slug` | Flavor detail | Per-flavor hero, ingredient list, "try the others" cross-sell |
| `/stores` | Find In Stores | ZIP lookup against placeholder retailer list, Google Maps deep-links |
| `/about` | About | Story + values cards |
| `/contact` | Contact | Form (validates client-side) + wholesale/press emails |
| `*` | 404 | Fun copy + recovery CTAs |

### Functional details

- **Every button leads somewhere.** No dead `href="#"` links — audited end-to-end.
- **Scroll restoration** on route change (`<ScrollToTop />`).
- **Mobile menu drawer** with stagger-revealed nav links.
- **ZIP search** filters a hardcoded retailer list and renders Google Maps directions links per result.
- **Contact form** with topic select, validates email/required fields, shows a success state with reset.
- **404 page** with recovery CTAs back to home and flavors.
- **Responsive** at sm/md/lg breakpoints (mobile-first sizing on most components).

### Animation highlights

- **Hero stickers** spring in around the product with staggered delays + hover wobble.
- **Reveal section** uses GSAP ScrollTrigger to pin and scrub-reveal a word-by-word color animation.
- **Flavor cards** hover-tilt with image scale, label band color flip, and arrow rotation.
- **CTA buttons** translate + grow shadow on hover (no color change — keeps the brand color stable).

---

## Project structure

```
src/
├── App.tsx                  # Router shell (BrowserRouter + Routes)
├── main.tsx                 # Entry point
├── index.css                # Tailwind v4 import + @theme tokens + .sticker utility
│
├── components/
│   ├── Navbar.tsx           # Wordmark · hamburger toggle · Find In Stores CTA
│   ├── MobileMenu.tsx       # Full-screen menu drawer
│   ├── FlavorCard.tsx       # Reused on home + /flavors
│   └── ScrollToTop.tsx      # Scroll restoration on route change
│
├── sections/                # Composable home-page sections
│   ├── Hero.tsx             # Editorial split + sticker badges + handwritten eyebrow
│   ├── Reveal.tsx           # GSAP-pinned word-stagger reveal
│   ├── Products.tsx         # Three flavor cards in a grid
│   ├── Nutrition.tsx        # Big-callout pill + FDA-style facts panel
│   └── Footer.tsx           # CTA band + base nav (used site-wide)
│
├── pages/
│   ├── HomePage.tsx
│   ├── FlavorsPage.tsx
│   ├── FlavorDetailPage.tsx
│   ├── StoresPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
│
└── data/
    └── flavors.ts           # Single source of truth for flavor info
                             # (name, slug, image, accent, ingredients, etc.)

public/
├── products/
│   ├── chocolate.png
│   ├── vanilla.png
│   └── cookies-cream.png
└── favicon.svg
```

---

## Local development

```bash
# install
npm install

# dev server with HMR
npm run dev          # http://localhost:5173

# typecheck + production build
npm run build

# preview the production build
npm run preview      # http://localhost:4173

# lint
npm run lint
```

Node 20+ recommended.

---

## Design journey

The git history captures the project's iteration. Each commit was an intentional design pass — not just bug fixes — so the evolution is legible.

| Phase | Theme | What changed |
|---|---|---|
| 1 | **Foundation** | Vite + React + TS + Tailwind v4 + Framer Motion + GSAP scaffolded; layout structure mocked from a snack/beverage layout reference. |
| 2 | **Real product** | Pivoted to a gluten-free protein bar brand; replaced rendered visuals with actual product photography; rebuilt the nutrition section against the real product label. |
| 3 | **Wire it up** | Added React Router with deep-linkable pages, mobile menu drawer, scroll restoration, 404. Audited every button to ensure each goes somewhere real. |
| 4 | **Identity v1: "Lab Notebook"** | Swapped warm-brown palette for sage + bone + ink; replaced condensed sans display with Fraunces serif; rebuilt hero in an editorial split with thin spec-sheet annotation lines. |
| 5 | **Hero composition** | Killed the symmetric floating-products composition that read as derivative of the layout reference. New hero: asymmetric 5/7 grid, single product, annotation callouts. |
| 6 | **Identity v2: "Snack Mix"** | Pivoted again — Lab Notebook read too clinical for a snack brand. Bright multi-accent palette (cream + cherry + tangerine + sky + butter), Bricolage Grotesque + Caveat, sticker badges replacing annotation lines. |
| 7 | **Polish** | Cleaned remaining green/mint accents that read off-brand; applied the new headline treatment (handwritten eyebrow + Caveat accent word) to the Flavors section + footer CTA so the voice carries throughout. |

The takeaway from the iteration: most of the "feels like a copy" problem lived in the **identity layer** (palette + typography + signature element), not the structure. Two complete identity passes on the same wireframe produced two visually unrelated brands.

---

## Accessibility notes

- Semantic HTML throughout (`<nav>`, `<main>`, `<header>`, `<footer>`, `<section>` with `aria-hidden` on decorative SVG).
- Focus-visible rings on flavor cards (`focus:ring-cherry/60`).
- All interactive elements are real `<button>` / `<a>` (no clickable `<div>`s).
- Decorative emoji and SVG marked `aria-hidden`.
- Form fields are properly labeled (`<label>` with `htmlFor` or wrapping).
- Color contrast: cream-on-cherry, ink-on-cream, cream-on-ink all meet WCAG AA at body sizes.

**TODOs:** keyboard-navigable mobile menu close, reduced-motion media query for the spring-heavy hero, alt-text audit for product photography.

---

## What's still placeholder

A recruiter / designer reviewing this should know which parts are intentionally stubbed:

| Area | Status |
|---|---|
| Product photography | Background-removed PNG renders — production would use proper studio shots |
| Logo / wordmark | Pacifico-replacement: Bricolage italic semibold. A real logotype would replace this. |
| Contact form | Logs to console + shows success state. Needs backend (Resend / Formspree / custom). |
| Store data | 7 hardcoded sample retailers in `StoresPage.tsx`. Production: live retailer feed. |
| Email addresses | Placeholder `@clearcore.example` in the contact page. |
| Analytics | None wired up. Easy to add Plausible / PostHog / a tracking pixel. |
| Tests | None — would add Vitest + Testing Library for components, Playwright for the form flow and route navigation. |
| Bundle | ~510 kB unsplit JS. Code-splitting + dynamic imports of pages would cut the initial bundle ~40%. |

---

## For reviewers

**If you're a recruiter:** the headline takeaways are (a) the project is set up with production patterns from day one (TypeScript strict, real router, accessibility, design tokens, no magic), (b) the iteration history shows decisions and trade-offs being made deliberately, and (c) every interactive element actually goes somewhere — no demo dust.

**If you're a designer:** the design system is centralized in `src/index.css` (`@theme` block) and `src/data/flavors.ts`. Swapping palette / fonts is a single CSS edit. The signature elements (sticker, handwritten eyebrow, accent word) are reusable patterns rather than one-offs.

**If you're a mentor:** I'd love feedback on (a) where the pinned scroll motion in `Reveal.tsx` could be replaced with something more on-brand, (b) whether the heading rhythm (handwritten note → setup → punchline word) is doing too much work, and (c) sections of the site that still feel like inherited structure rather than original composition.

---

## License

This project is for portfolio purposes. Product photography belongs to the creator.
The brand "Clear Core" is fictional.
