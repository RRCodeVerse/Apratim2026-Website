# AGENTS.md — Apratim 2026 Website Working Agreement

Shared rules for every teammate **and** every AI coding assistant (Claude Code, Cursor, Copilot, Antigravity…) working in this repo. Read this before you touch code.

---

## What We're Building

**Apratim 2026** is the official annual fest website for CCET Sector 26, Chandigarh. The website is an immersive, Arabian Nights-themed interactive single-page application built with **React 18** and **Vite**, featuring physics-eased desert sky parallax, dynamic SVG stroke animations, atmospheric curtain transitions, an interactive event modal carousel with real registration links, and an authentic parchment/polaroid contact directory.

```
Visitor Browser
      │
      ├──► Hero Parallax Scene (Moon, Palace, Camels, Dunes, Clouds, SVG Draw)
      │
      ├──► Section Portal Transition (Sand-dune wipe + APRATIM 2K26 celestial banner)
      │
      ├──► Events Scene (Clay Vases ──► Modal Carousel ──► Google Form Registration)
      │
      ├──► About Us (Swinging Lanterns + Live Milestone Counter Stats)
      │
      ├──► Contact Us (Torn Parchment Department List ──► Interactive Polaroid Card)
      │
      └──► Sponsors Page / Showcase
```

---

## Team & Ownership

Work only inside your assigned area on your dedicated branch. Anything marked under **Shared Contracts** requires approval from Devesh Vaidya before opening or merging a PR.

| Area | Scope & Paths | Owners | Branch Prefix |
|---|---|---|---|
| **Contact Us, About Us & Sponsors** | About section copy, milestone stats counters, swinging lanterns, contact parchment directory, polaroid preview card, and Sponsors page layout/data (`src/data/depts.js`, About/Contact sections in `src/App.jsx`, Sponsor components/styles) | **Himender Sharma & Jayant**<br>*(CSE 2nd Year)* | `feat/about-contact-…`<br>`feat/sponsors-…` |
| **Events Hub & Modal Carousel** | Category clay vases, event data models, modal viewer, rulebook integration, registration Google Form links, keyboard nav (`src/data/events.js`, Event & Modal logic in `src/App.jsx`) | **Riya Rawat & Jayant**<br>*(ECE 3rd Year)* | `feat/events-…` |
| **Home Page & Organizers Experience** | Hero atmosphere, layered desert parallax, SVG stroke-draw animation, registration CTA with sweep effect, preloader/starfield tracker, and section transition curtain portal (`#home`, `#loader`, `#curtain` in `src/App.jsx`) | **Neeraj & Yash Bansal**<br>*(Organizers)* | `feat/home-hero-…` |
| **All-Round Management, Architecture & Deployment** | Repo architecture, PR review & merge, build pipeline (`vite.config.js`), root deployment (`vercel.json`), global styling system tokens, shared component refactoring, final QA | **Devesh Vaidya**<br>*(Lead / Maintainer)* | `feat/core-…`<br>`chore/release-…` |

---

## How the Team Collaborates

1. **Events Team (Riya & Jayant)** manages all fest event details in `src/data/events.js`. Whenever registration links, rules, or schedules arrive from clubs, they update the dataset and test the modal carousel behavior.
2. **About & Contact Team (Himender & Jayant)** maintains organizing committee details in `src/data/depts.js`, verifies contact emails, polishes the About Us story and stats, and scaffolds the upcoming Sponsors section.
3. **Home Team (Neeraj & Yash)** ensures first-load performance, preloader timing, hero visual fidelity across screens, and smooth transition wipes between sections.
4. **Lead (Devesh)** reviews all pull requests, verifies cross-browser responsiveness (mobile, tablet, desktop), ensures zero asset 404s, and manages production deployments to Vercel.

---

## Shared Contracts (Heads-Up & Approval Required)

The following files affect the entire application. **Do not modify them in isolation** without coordinating with Devesh:

- `src/style.css` — Global CSS variables (`--bg`, `--gold`, `--sand`, `--peach`, `--plum`, `--ease`), typography tokens, and mobile breakpoints (`@media (max-width: 700px)`). Component-specific styling must not override global tokens without team discussion.
- `src/data/events.js` & `src/data/depts.js` — Data schemas:
  - Event tuple schema: `[title, description, venue/location, optionalRegistrationUrl]`
  - Department tuple schema: `[departmentName, contactPerson, contactEmail]`
- `index.html` & `public/favicon.svg` — Root HTML metadata, Google Font preconnects, Open Graph cards, and favicon references.
- `package.json` & `vite.config.js` — Adding third-party packages or modifying Vite build output. Keep dependencies minimal.
- `vercel.json` — Deployment routing rules.

---

## Git Workflow (No Merge Conflicts)

1. **`main` is always production-ready and deployable.** Never push directly to `main`.
2. **Branch from latest `main`**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/your-feature-name
   ```
3. **Keep PRs focused**: One feature or section per PR.
4. **Rebase before opening PR**:
   ```bash
   git pull --rebase origin main
   ```
5. **PR Review**: Devesh reviews and approves before squash-merging.
6. **Never commit**: `node_modules/`, `dist/`, `.env`, `.DS_Store`, or local editor settings.

### Commit Convention
Format: `area: short descriptive summary in lowercase`
- `events: add esports console tournament to other category`
- `contact: update publicity head email address`
- `hero: polish cloud drift speed on mobile viewports`
- `about: add fest video embed modal`

---

## Engineering Conventions

### React & Vite
- Keep state local where possible (`useState`, `useEffect`, `useRef`).
- Always clean up event listeners (`window.removeEventListener`) and observers (`io.disconnect()`) in `useEffect` return functions.
- Do not introduce heavy UI component libraries (no Tailwind, Bootstrap, or Material UI) — preserve the custom Arabian Nights handcrafted aesthetic.

### Styling & Theme Tokens
- Respect the core fest palette:
  - Background Base: `#080A18` (`--bg`)
  - Accent Gold: `#E5AD2F` (`--gold`)
  - Desert Sand: `#EED8AF` (`--sand`)
  - Warm Peach: `#F0CBB3` (`--peach`)
  - Plum Night: `#3D3364` (`--plum`)
- Typography:
  - Headings & Branding: `"Cinzel Decorative", serif`
  - Body & Descriptions: `"EB Garamond", Georgia, serif`
- Always verify mobile viewports (≤ 700px) with touch targets of at least 44px × 44px.

### Assets & Media
- Store all public runtime images in `public/assets/` as optimized **WebP** files.
- Reference assets with stable root paths (e.g., `/assets/moon.webp`, `/assets/vase.webp`).
- High-res source PNGs remain in `src-png/` for graphic design archival.

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# -> http://localhost:5173

# 3. Test production build
npm run build
npm run preview
# -> http://localhost:4173
```

---

## For AI Assistants (Claude, Cursor, Copilot, Antigravity)

1. Stay strictly within the assigned area requested by the human; do not perform unsolicited refactoring on other teammates' files.
2. Never redesign existing UI sections or alter the color palette.
3. If a task requires modifying a **Shared Contract** (`src/style.css` tokens, `index.html`, `package.json`), explicitly ask the user for confirmation first.
4. Always run `npm run build` to verify there are zero build errors and no broken imports before finishing.
5. Do not push to remote branches without explicit user instruction.
