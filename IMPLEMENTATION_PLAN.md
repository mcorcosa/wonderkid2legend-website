# W2L Facepack Website – Implementation Plan

Single-page, static marketing site for the W2L Facepack (Football Manager). No backend, no build step required for initial version; optional minimal tooling later (e.g. asset minification).

---

## 1. Goals and constraints

- **Single page**: One HTML document; all content in one file or loaded via same-origin assets.
- **Static**: No server-side rendering; can be hosted on any static host (GitHub Pages, Netlify, S3, etc.).
- **Sections (vertical, no separate pages)**  
  Order and purpose:
  1. **Hero** – Brand, tagline, primary CTA (download).
  2. **Download** – Clear download action and link to latest pack.
  3. **Examples** – In-game player faces gallery (proof of quality).
  4. **Instructions** – How to install the facepack in Football Manager.
  5. **Things to come** – Roadmap / upcoming features (or “What’s next”).
  6. **Footer** – Copyright, legal links (Privacy, Terms).

- **No horizontal scrolling**; vertical scrolling is acceptable (sections stack vertically). If “no scrolling” is interpreted as “all above the fold,” the plan can be adjusted to a fixed viewport with anchor navigation or a more compact layout.

---

## 2. Tech choices

| Concern            | Choice |
|--------------------|--------|
| Markup             | Semantic HTML5, one `index.html`. |
| Styling            | One or two CSS files; use CSS variables for theme (colors, spacing). Prefer **library via CDN** to avoid build (e.g. **Pico CSS** or **Water.css** for base, then overrides) or **Tailwind via CDN** if utility-first is preferred. |
| Fonts              | **Google Fonts** – **Oswald** (single `<link>`; no npm). |
| Icons              | **Lucide Icons** or **Heroicons** via CDN (SVG sprite or inline SVGs from a single script), or **Font Awesome** CDN. No custom icon assets. |
| Scripts            | Minimal vanilla JS only if needed (e.g. smooth scroll for anchor links, or mobile nav toggle). No framework. |
| Responsiveness     | Mobile-first; breakpoints for tablet/desktop so hero, cards, and gallery look good on all sizes. |

---

## 3. Folder structure (new folder in repo)

```
website/
├── index.html              # Single page, all sections
├── css/
│   └── style.css           # Main styles (variables, layout, components)
├── js/
│   └── main.js             # Optional: smooth scroll, nav highlight, etc.
├── assets/                 # Images and binary assets only
│   ├── logo.png            # W2L logo (added)
│   ├── header.jpg          # Hero / header background (added)
│   ├── players/            # Example faces by age bracket (5 brackets, multiple countries each)
│   │   ├── 16/             # Age 16 – multiple faces, different countries
│   │   ├── 22/             # Age 22
│   │   ├── 28/             # Age 28
│   │   ├── 32/             # Age 32
│   │   └── 36/             # Age 36
│   └── favicon.ico         # Optional
├── IMPLEMENTATION_PLAN.md  # This file
└── ASSET_LIST.md           # Asset list and sources
```

---

## 4. Page structure (sections)

1. **Header (sticky or static)**  
   Logo + nav: HOME (top), DOWNLOAD, INSTRUCTIONS, SUPPORT.  
   DOWNLOAD can be visually emphasized (e.g. pill/button style).  
   All links are in-page anchors (`#download`, `#examples`, `#instructions`, `#roadmap`, etc.).

2. **Hero**  
   Full-width split background image (pitch left, stadium right).  
   Overlay: logo, “W2L FACEPACK”, subtitle “High-Quality Facepack for Football Manager”, short intro paragraph, primary CTA button “DOWNLOAD NOW” → `#download`.

3. **Download**  
   Section id `download`.  
   Heading, short copy (“Get the latest version…”), prominent “DOWNLOAD” button (real link to file or landing page TBD).

4. **Examples**  
   Section id `examples`.  
   Heading “IN-GAME PLAYER FACES”.  
   Showcase **all 5 age brackets** (16, 22, 28, 32, 36) with **multiple faces from different countries** in each bracket. Layout: one row or block per age (e.g. “Age 16”, “Age 22”, … “Age 36”), each containing a horizontal (or grid) strip of face images for that age from varied nations. Responsive: collapse to fewer columns or scroll on small screens.  
   Caption: “Preview of in-game player portraits by age – multiple countries per bracket.”

5. **Instructions**  
   Section id `instructions`.  
   Heading, short copy (“Follow our step-by-step guide…”), “VIEW GUIDE” button (link to doc or anchor to an expandable/collapsible block on the same page TBD).

6. **Things to come / What’s next**  
   Section id `roadmap` (or `#coming-soon`).  
   Heading (“Things to come” or “What’s next”).  
   Simple list or card-based items (e.g. “More leagues”, “Staff faces”, “Mapper updates”) – content TBD; layout consistent with Instructions/Download cards.

7. **Footer**  
   Copyright “© 2024, W2L Facepack. All rights reserved.”  
   Links: “Privacy Policy | Terms of Service” (placeholders or real URLs TBD).

---

## 5. Design tokens (from reference)

- **Background / surface**: Dark blue–black (e.g. `#0f172a`).
- **Text**: White primary; light gray secondary (e.g. `#94a3b8` or `#cbd5e1`).
- **Accent / CTAs**: Blue gradient (e.g. `#3b82f6` → `#2563eb`); buttons rounded, optional subtle shadow.
- **Typography**: **Oswald** from Google Fonts; weights bold (headings), regular (body).
- **Cards**: Same dark surface, border or subtle contrast; icons + title + short text + button.

---

## 6. Implementation order (when implementing)

1. Create `website/` and `index.html` skeleton with all section IDs and nav links.
2. Add CSS variables and base layout (container, sections, vertical rhythm).
3. Implement Hero (background, logo, title, CTA).
4. Implement Download and Instructions blocks (card layout).
5. Implement Examples section: 5 age brackets (16, 22, 28, 32, 36), each with a grid/strip of multiple faces from different countries; responsive layout.
6. Implement “Things to come” section and Footer.
7. Add favicon and any final assets from asset list.
8. Optional: small JS for smooth scroll and nav state.
9. Test on mobile and desktop; fix contrast and touch targets.

---

## 7. Out of scope (for this plan)

- Backend or CMS.
- Multiple pages or client-side routing.
- Download analytics or sign-up forms (can be added later as static links or third-party embeds).
- Actual download URL and instruction content – to be wired when ready.

---

## 8. Hosting (later)

- GitHub Pages, Netlify, or Vercel: point at `website/` (or at built output if a build step is added later).  
- Custom domain and HTTPS as per host instructions.
