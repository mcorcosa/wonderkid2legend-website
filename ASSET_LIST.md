# W2L Facepack Website – Asset List

Use libraries and CDN where possible to minimise custom assets and keep the site static and easy to maintain.

---

## 1. Images (custom – to be placed in `website/assets/`)

| Asset | Purpose | Source / notes |
|-------|--------|----------------|
| **Logo** | Header and hero: W2L Facepack logo. | **Added.** Place at `website/assets/logo.png` (PNG, transparent background for overlay). |
| **Header / hero background** | Hero section background (e.g. pitch + stadium). | **Added.** Place at `website/assets/header.jpg` (or `hero-bg.jpg`). Optimise for web (e.g. 1920×800; compress). |
| **Player face examples (5 ages)** | Examples section: showcase **all 5 age brackets** with **multiple faces from different countries** per bracket. | **Added.** Use folder `website/assets/players/` with **5 subfolders** named by bracket age (matching facepack generator): `16/`, `22/`, `28/`, `32/`, `36/`. In each subfolder, add multiple face images (different countries). Any consistent naming per folder (e.g. `brazil.jpg`, `england.jpg`, … or `01.jpg`, `02.jpg`, …). |
| **Favicon** | Browser tab icon. | Optional: extract from logo or create 32×32 ICO; place as `website/assets/favicon.ico` (or `website/favicon.ico`). |

---

## 2. Fonts (library – CDN)

| Asset | Purpose | Source |
|-------|--------|--------|
| **Oswald** | All headings and body text. | **Google Fonts** – single link, e.g. `https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap`. |

No local font files required if using Google Fonts.

---

## 3. Icons (library – CDN or inline)

| Icon | Use | Source |
|------|-----|--------|
| Download (arrow down) | Download CTA buttons. | **Lucide Icons** (https://lucide.dev) or **Heroicons** (https://heroicons.com) – embed inline SVG or use a single sprite/script from CDN (e.g. Lucide’s CDN or copy a few SVGs into the HTML). |
| List / document | Instructions card. | Same library. |
| Arrow right | “View guide” button. | Same library. |
| Optional: menu (hamburger) | Mobile nav toggle. | Same library. |

Recommendation: pick one icon set (e.g. Lucide), use 4–6 icons only, inline as SVG in HTML to avoid extra requests.

---

## 4. CSS (library + custom)

| Asset | Purpose | Source |
|-------|--------|--------|
| **Base / reset** | Normalise defaults and simple layout primitives. | **Pico CSS** (https://picocss.com) or **Water.css** (https://watercss.kognise.dev) via CDN – minimal, class-light or no classes. Or **Tailwind CSS** via CDN (https://tailwindcss.com/docs/installation/play-cdn) if utility-first is preferred. |
| **Custom theme and layout** | Colors, typography, hero, cards, gallery, footer. | Single file `website/css/style.css`: CSS variables for palette, section layout, card and grid styles. No extra image assets. |

---

## 5. Scripts (optional, minimal)

| Asset | Purpose | Source |
|-------|--------|--------|
| **Smooth scroll / nav** | Smooth scroll for anchor links; optional nav highlight on scroll. | Vanilla JS in `website/js/main.js`; no library. Optional: **minimal** script from a CDN only if we add something like a lightweight “active section” highlighter later. |

No npm or build step required for this asset list.

---

## 6. Summary checklist

- [x] **Logo**: Added at `website/assets/logo.png`.
- [x] **Header / hero background**: Added at `website/assets/header.jpg` (or `hero-bg.jpg`).
- [x] **Player images**: Added under `website/assets/players/` with **5 age subfolders** `16/`, `22/`, `28/`, `32/`, `36/`, each containing multiple faces from different countries.
- [ ] **Favicon**: Optional; add `website/assets/favicon.ico` or `website/favicon.ico`.
- [ ] **Fonts**: Add one Google Fonts `<link>` in `index.html`.
- [ ] **Icons**: Choose Lucide or Heroicons; inline 4–6 SVGs (download, list, arrow, optional menu).
- [ ] **CSS**: One CDN link (Pico, Water, or Tailwind) + `css/style.css`.
- [ ] **JS**: Optional `js/main.js` for smooth scroll / nav.

All other “assets” are text content and layout defined in HTML/CSS.
