# Design journey

The Clear Core marketing site went through seven deliberate phases. Each
phase was a real decision, captured in a single git commit so the iteration
is legible end-to-end. The site you see today is the product of two
complete identity rebuilds on top of an evolving structure.

> **TL;DR** — Most of the "feels like a copy" problem lived in the
> *identity layer* (palette + typography + signature element), not the
> structure. Two full identity passes on the same wireframe produced two
> visually unrelated brands.

---

## Phase 1 — Foundation

**Commit:** `a2803a9` — *Scaffold clearcore: Vite + React + TS + Tailwind v4 + Framer Motion + GSAP*

Vite + React 19 + TypeScript scaffolded into an empty repo. Tailwind v4
configured with `@theme` design tokens (so the entire color + font system
lives in one CSS block). Framer Motion + GSAP/ScrollTrigger added for
component motion and scroll-driven sections.

Layout structure mocked from a snack/beverage layout reference: hero with
floating products + parallax, pinned word-stagger reveal, horizontal
product carousel, FDA-style nutrition section, big footer CTA band. A
brand-neutral palette (warm browns + cream) and Antonio + Pacifico fonts
were used as a starting point.

> *At this point the site looked like the reference. That was the goal —
> get the structure working, then iterate the identity.*

---

## Phase 2 — Real product

**Commit:** `c0d73c8` — *Pivot to Clear Core gluten-free protein bar brand*

Pivoted from a placeholder beverage concept to the actual project: a
fictional gluten-free protein bar brand called Clear Core. Three real
product images (Chocolate, Vanilla, Cookies & Cream) replaced the SVG
mock-ups. The horizontal scroll carousel was simplified to a 3-up grid
since there are only three SKUs. The Nutrition section was rebuilt around
the real product label values (220 cal, 20g protein, 5g fiber, etc.) with
a proper FDA-style facts panel.

All copy was rewritten for a protein-bar context — no more "drink" or
"can" language anywhere on the site.

---

## Phase 3 — Wire it up

**Commit:** `5380699` — *Wire up router with real pages — every button leads somewhere*

Added React Router 7 with proper routes for every CTA on the site. No
more dead `href="#"` placeholders.

| Path | Page |
|---|---|
| `/` | Home |
| `/flavors` | Flavors overview |
| `/flavors/:slug` | Per-flavor detail |
| `/stores` | ZIP-search store locator |
| `/about` | Brand story + values |
| `/contact` | Form with topic select |
| `*` | 404 with recovery CTAs |

Also added: a full-screen `MobileMenu` drawer triggered by the navbar
hamburger, scroll restoration on route change, and a `<FlavorCard>`
component extracted as the single source of truth for the flavor grid
(used on both the home page and `/flavors`).

`data/flavors.ts` introduced as the single source of truth for flavor
information (name, slug, image, accent color, ingredients).

> *Every interactive element was audited end-to-end at this phase.
> Nothing on the site is a dead link.*

---

## Phase 4 — Identity v1: "Lab Notebook"

**Commit:** `4115559` — *Identity refresh: Lab Notebook palette + Fraunces serif*

The first identity pass. Goal: pull the site as far away from the
warm-brown + condensed-sans reference as possible to test how much of the
"feels like a copy" problem was identity vs. structure.

**Palette swap** (warm browns → cool sage):

| Old | New |
|---|---|
| `#faeade` cream | `#f4f1ea` bone |
| `#a26833` cocoa | `#5e7050` deep sage |
| `#523122` dark brown | `#1a1a1a` ink |
| `#a02128` muted red | `#c8553d` clay |

**Typography swap** (heavy condensed display → editorial serif):

- Display: **Fraunces** (variable serif with optical-sizing axis)
- Body: Inter (kept)
- Wordmark: Fraunces italic semibold (replaced the script-font wordmark)
- Added JetBrains Mono for nutrition numerals

The structure was left completely intact. Same sections, same composition,
same animations — only the identity layer moved.

> *Result: the site felt clinically different but the hero composition
> (symmetric floating products with parallax) still gave away the
> reference. Identity helped; structure was still doing damage.*

---

## Phase 5 — Hero rebuild

**Commit:** `de7ad42` — *Rebuild Hero: editorial split, no floating products*

Surgical strike on the most copyable element: the hero composition.

**Killed:**
- 4 floating background bars with parallax
- Symmetric left + right foreground bars
- Centered tilted-block headline with all-caps condensed display
- Center-stacked composition

**Replaced with:**
- Asymmetric 5/12 + 7/12 grid (off-balance on purpose)
- Single product photo on the right
- Mixed-case Fraunces serif headline with one italic accent word
- Spec-sheet annotation callouts with thin lines pointing to the
  product (a Clear Core-specific signature)
- Numbered "Fig. 01 / Chocolate" and "No. 01" lab-notebook flourishes
- Two-tier CTA: filled primary + ghost text-link

This was the moment the site stopped looking like the reference.

---

## Phase 6 — Identity v2: "Snack Mix"

**Commit:** `05f1106` — *Snack Mix identity: bright palette + chunky display + sticker signature*

After living with Lab Notebook briefly, it became clear it read *too*
clinical for a snack brand. The clean utilitarian aesthetic worked but
felt cold. Pivoted in the opposite direction.

**Palette swap** (sage → bright multi-accent):

| Token | Hex | Role |
|---|---|---|
| `cream` | `#fdf6e3` | Page background |
| `cherry` | `#e23e3e` | Primary brand accent |
| `tangerine` | `#f59e2c` | Secondary accent |
| `sky` | `#4ea0d6` | Tertiary |
| `butter` | `#fbd97a` | Soft warm accent |
| `ink` | `#1a1a1a` | Text + dark sections |

**Typography swap** (Fraunces serif → chunky variable sans):

- Display: **Bricolage Grotesque** (variable, friendly without being childish)
- Script: **Caveat** (handwritten — eyebrows, accent words, doodles)
- Body: Inter (kept)
- Dropped: Fraunces, JetBrains Mono

**Hero rebuild #2:**

The editorial split structure stayed, but the voice flipped:

- Spec-sheet annotation lines → **chunky sticker badges** (3px ink
  border, bright fill, offset hard shadow, rotation, spring-bounce
  entrance, hover wobble)
- Mono caps eyebrow → **handwritten Caveat** *"psst — we made this ✦"*
- Italic accent word → **Caveat** in cherry, rotated `-2°`
- Atmospheric blur blobs (tangerine + butter) added warmth to the cream
  background without re-introducing the reference's drip-splash motif
- Sparkle/asterisk doodles float between the stickers

A `.sticker` utility class was added to `index.css` so the badge
treatment can be reused anywhere on the site.

---

## Phase 7 — Polish

**Commits:** `86b21b9`, `ffaed5d`, `9febbe9`, `db78aed`

A series of small passes to carry the Snack Mix voice across the rest of
the site.

| Commit | What it did |
|---|---|
| `86b21b9` | Replaced remaining green/mint accents that read off-brand (FlavorCard hovers, CTA states, the 404 number, etc.) with cherry. |
| `ffaed5d` | Applied the Hero's headline treatment (handwritten eyebrow + Caveat accent word) to the Flavors section h2 and the FlavorsPage h1. |
| `9febbe9` | Same treatment for the Footer CTA band — added the chunky bordered button with cherry offset shadow to match the Hero CTA. |
| `db78aed` | Shifted the Caveat accent word in three headlines from middle to end (`tastes` → `food`, `zero` → `gluten`, `near` → `you`) so each headline reads with a "punchline at the end" rhythm. |

The handwritten eyebrow notes were intentionally varied per section so
they read like a real human scribbling asides:

- Hero: *psst — we made this ✦*
- Products: *pick a snack ✦*
- Flavors page: *the whole lineup ✦*
- Footer CTA: *okay one last thing ✦*

---

## What's still on the old signature

Three sections still use the original tilted-color-block treatment
(`inline-block bg-cherry text-cream -rotate-[2deg]`) for their headlines:

- About hero → *who eat them.*
- Stores hero → *near you.*
- Reveal section → *no shortcuts*

These were left intentionally as "section-anchor" headlines — visually
distinguishable from the "flavor-cluster" headlines that now use the
Caveat accent treatment. Whether that mix is intentional rhythm or
remaining work is a question for the next pass.

---

## Takeaways

1. **Identity is high-leverage; structure is structural.** Two complete
   identity rebuilds (Lab Notebook → Snack Mix) on the same wireframe
   produced two unrelated brands. But the single hero rebuild (Phase 5)
   was the moment the site stopped looking derivative — structure carries
   real signal too.

2. **Sed-rename design tokens.** Because the entire palette lives in
   `@theme` and uses semantic class names (`bg-sage`, `text-clay`),
   palette swaps were one bash command followed by a build verify.
   Running an identity pass took ~15 minutes of code time.

3. **One signature is better than three.** The reference site uses three
   stacked signatures (drip texture + tilted color blocks + parallax
   floating products). Each one is identifiable on its own. Clear Core
   uses one signature per layer (sticker badges for callouts,
   handwritten eyebrows for sections, Caveat accent words for headlines)
   and they don't compete.

4. **Track the journey in commits, not in `// TODO` comments.** Each
   commit message in this repo describes a design *decision*, not a code
   change. That's what makes the iteration legible to someone reading
   the repo cold.
