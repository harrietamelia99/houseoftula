# House of Tula  -  colour pairing (quick reference)

This maps Emma’s identity sheet (**olive · warm brown · cream**) onto the tokens in **`tailwind.config.ts`** so copy, nav, and blocks stay intentional.

## Token cheatsheet

| Role on the sheet        | Tailwind tokens                    | Typical use                                      |
|-------------------------|------------------------------------|--------------------------------------------------|
| **Cream (lightest)**    | `almond` (#F9F8EB), `surface` (#DCD6BA) | Default page wash, headers over dark, calm cards |
| **Muted olive**         | `olive` (#9F9C6C), `forest` (#555439)*, **`forest-slab`** (#364132), **`forest-soft`** (#6D7056) | Accent + type on almond · **home hero** uses **`forest-soft`** (lighter slab); **`forest-slab`** still suits deep bands + marquee ribbon contrast |
| **Warm brown / tan**    | `sienna` (#9A7844), `forest-soft`, **`burnt-orange`** (#B9552E)    | Alternate ribbon, earthy CTAs, ticker bridge; **closing “Ready to pause?”** band |

**Note:** Section “blocks” (`bg-sienna`, `bg-surface`, `bg-forest-slab` on `#hero-section`, etc.) are independent of the sticky header. The header stays a **light almond bar** with dark text so it always contrasts the hero  -  it does not swap to a forest slab. If the whole page *looks* like one cream field, check section `bg-*` classes, not nav scroll state.

\*`forest` doubles as deep green for legible headings on almond (close to **olive-green on cream** in the guidelines).

---

## Pairings that work (from the sheet + build)

### 1. **Cream on olive / forest** (inverse panels)

Use **`text-almond`** (and almond-tint whites) on **`bg-forest-slab`** (hero + inverse header slabs), **`bg-forest`** (smaller fills), or **`bg-olive`**-leaning solids.

> Hero, inverted nav labels, marquee over dark green tones.

### 2. **Cream on sienna brown**

Use **`text-almond`** / **`border-almond/`*** on **`bg-sienna`**.

> Services ribbon, earthy blocks where you still want softness, not stark white.

### 2b. **Cream on burnt orange**

Use **`text-almond`** / **`text-almond/88`** on **`bg-burnt-orange`** with a light outline button (`border-almond`, ghost fill on hover).

> Home closing CTA ("Ready to pause?").

### 3. **Olive / forest on cream / linen**

Use **`text-forest`**, **`text-olive`**, **`border-forest/`** on **`bg-almond`** or **`bg-surface`**.

> Body copy zones, testimonials on linen (`surface`), footer, long-form readability.

---

## Rhythm on the homepage

Avoid stacking **two saturated blocks** back-to-back (e.g. sienna beside full olive).

- Prefer ** Almond / Raw Linen** between **sienna** and another strong hue.
- Alternate: **Forest hero** → **almond/light sections** → **sienna band** → **surface (linen)** → **closing blocks**.

---

## Navigation contrast (checklist)

The sticky header is always a **light almond bar** (`bg-almond/95`, subtle border) with **dark type** (`text-text` / `text-muted`) so it reads clearly over the **forest-slab hero** and other bands. Book uses the outlined olive CTA  -  no forest “inverse” nav slab.

| Element        | Classes / notes                                              |
|----------------|--------------------------------------------------------------|
| Logo + nav     | `text-text`, inactive `text-muted hover:text-text`         |
| Book (desktop) | `border-olive/45 text-olive-dark` pill                       |

---

## Emma’s onboarding preferences (design)

From the May 2026 form: **earthy, muted, linen-like texture**; feelings **calm, natural, spiritual**; avoid **bright colours and busy layouts**; photography **natural, slightly softened / faded**. Reference names submitted: *Yeva don world*, *Steffy White Yoga* (verify spellings / links with Emma).

---

## When in doubt

- **Lightest colour most:** `almond` + `surface` carry the longest scroll.
- **Use brown and deep green as bands**, not competing wallpaper.
- Keep **quotes and paragraphs** primarily **forest/text on almond or surface** unless you deliberately want an inverse slab.
