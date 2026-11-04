# BITS Oasis 2026 - reference notes

Source: https://www.bits-oasis.org/ (captured 2 Nov 2026 in the built-in browser, desktop ~990x953 and mobile 390x844).
Theme: "Oasis'26 - Dawn of the Djinns" (54th edition), an Arabian-nights illustrated world. Each page is its own painted scene.

> Screenshots were viewed during capture but could not be saved as PNGs (the built-in browser has no save-to-disk option). Re-run the capture with Claude in Chrome if you need image files.

## Site map and navigation

Top nav pill (desktop, top-right): **Home** `/`, **Events** `/events`, **About Us** `/aboutUs`, **Contact Us** `/contactus`.
Hamburger (top-left) opens a **treasure-chest menu** (lid lifts after a sand-dune wipe) with wooden-plank buttons:

| Item | URL |
|---|---|
| Media Partners | `/comingSoon` |
| Rocktaves | `https://rocktaves.bits-oasis.org/` (separate microsite) |
| Sponsors | `/sponsers` (spelled this way in the URL) |
| Gallery | `/comingSoon` |
| Developers | `/DevPage` |

Social links (Instagram, LinkedIn, YouTube, X) live in the chest menu area. There is no footer on any main page.
Inner pages drop the nav pill and show a round back-arrow button instead (top-left).

## Pages and sections

- **Home `/`** - single full-screen scene, no scroll. Starry night, giant moon, domed palace, desert with camels, Oasis'26 logo (white, bottom-left), cactus pair holding a carpet banner "REGISTER" (bottom-right). Loader screen with starfield and a "100%" counter appears first (~10 s total before the hero is ready).
- **Events `/events`** - mosaic-tile wall with a hanging wooden "EVENTS" sign and five clay vases acting as category buttons: Drama, Photography, Dance, Other, Music. Clicking a vase opens a modal carousel (see below). Photography opened no modal when tested (probably empty).
  - Drama (5): Sukhmanch, Street Play, Stage Play, Metamorphosis, Hypercut
  - Dance (5): Choreo, Street Dance, Desert Duel, Razzmatazz, Tandav
  - Music (8): Pitch Perfect, Swaranjali, Tarang, Andholika, Rap-wars, Axetacy, Drum Duels, Beat-Brawl
  - Other (1): FashP
- **Event detail (modal)** - smoky blue overlay; left: gold title, short description, optional location line with a small diamond bullet (e.g. "NAB Auditorium"), "Rulebook" link; right: square pixelated duotone photo; bottom: prev/next arrows with "1 / 8" counter; "x" close at top-right.
- **About Us `/aboutUs`** (~2.3 viewports) - dark blurred festival photo background, ornate purple/gold Arabesque corner, hanging lanterns, "About Us" in an orange gradient, one centered paragraph (Oasis since 1971, student-run, dance/drama/literature/comedy/fashion/music), "Scroll for video" prompt, then a gold-framed video player with cloud-shaped prev/pause/next controls over a bokeh background.
- **Contact Us `/contactus`** (1 viewport) - left: torn dark-brown parchment panel with title and a list of departments (Registrations and Correspondence; Website, App and Payments; Sponsorships and Company Collaborations; Logistics and Operations; Reception and Accommodation; Online Collaborations and Publicity; President, Students' Union; General Secretary, Students' Union). Right: illustrated treasure map; the selected department shows a polaroid-style card (photo, handwritten name, mail icon) pinned with a pink X.
- **Sponsors `/sponsers`** - starry background, fixed title "Sponsors" and round back button; inner scroll container (~6900 px). First a large white-card Title Sponsor, then a two-column grid of logo + name + role label ("Official ... Partner"). About 24 sponsors (fragrance, travel, beverages, skincare, banking, streaming partners, etc.).
- **Coming Soon `/comingSoon`** - desert caravan at night, "Coming Soon..." heading, small subtitle, "Go Home" ornate button.
- **Developers `/DevPage`** - embroidered velvet cushions with role words ("frontend", "backend"), banner "Developers" held by two hands.
- **Rocktaves (subdomain)** - separate grunge look: B&W drummer photo, multicolor splatter title, "About / Register / Contact" nav, long one-page scroll (~5700 px) with About, Rules (numbered list, magenta highlights), silhouettes of band members, Contact; URL changes (/home, /rules, /contact) as you scroll.

## Mobile (390 px)

- Home: nav pill hidden, only the hamburger remains; scene is re-stacked (bigger moon, castle lower, logo centered, register carpet at bottom).
- Events: wall becomes a portrait scene with the sign at top and vases in a 2 + 3 grid; still one viewport.

## Colors

| Use | Value |
|---|---|
| Page/background base | `#080A18` |
| Sand/cream body text | `#EED8AF` |
| Peach accent (nav border, ornaments, vase text) | `#F0CBB3` |
| Nav pill fill | `#3D3364` at 67% opacity |
| Modal title / links (gold) | `#E5AD2F` |
| Modal body text (cream) | `#F5EEE3` |
| Scene palettes | indigo-night and plum, desert orange/brown, teal-and-purple mosaic, parchment brown, burgundy and gold ornament |

## Fonts (all self-hosted @font-face, loaded on demand)

- **Ramadhan** (alias "Lentera Ramadhan") - nav links, page titles; Arabic-style display face
- **Almalik** - default body font
- **Syamsiah** - event modal titles
- **EB Garamond** - paragraph copy (About, modal text, contact list)
- **Montserrat** - small subtitles (Coming Soon)
- Also declared: Amita, Arabian Night, Cinzel, Dancing Script, Aladin

## Animation and interaction behavior

- **Loader**: starfield with glowing comet trails and percentage counter, then fades to the hero.
- **Page transitions**: curtain/dune wipes (`curtainFromLeft`, `curtainFromRight`); a sand-dune layer sweeps up before the chest menu appears, then the chest lid opens and items fade in.
- **Hero**: clouds drift horizontally (`cloudDrift`, translate -8vw to 20vw, repeating); logo uses a stroke-draw reveal (`drawLogo`, stroke-dashoffset to 0); REGISTER carpet has a light sweep (`regBtnSweep`, gradient moves across with fade) and a pop on select (`bannerSelected`, scale .94 to 1.07 to 1.04).
- **Lanterns**: `flicker` (opacity 0.6-0.95), `idle` (rotate +/-0.7deg), `swing` (rotate -2 to 3deg, translateY -6px).
- **Events**: `spotlightShrinkTablet` (1 s, cubic-bezier(.65,0,.35,1)) on load; vase hover brightens; modal open = overlay fade (`eventsOverlayIn`) plus card rising (`eventsModalIn`: translateY 25px and scale .96 to 1, opacity 0 to 1); `eventAppear` / `eventSelected` for slides.
- **Hover states**: nav links scale 1.1; close button scale 1.15 and lighter gold; modal arrows scale 1.2; back button nudges 3px left with brightness 1.15; social icons scale 1.12 and shift color.
- No parallax library detected (no GSAP, Lenis or Three.js globals). Page is a React/Vite single-page app with CSS-module class names; scroll effects are minimal because most pages are fixed scenes. Cloudflare analytics, Google Analytics and a Google sign-in script are loaded (registration likely uses Google login; not tested).

## Asset URLs worth downloading as visual reference

- Hero layers: `https://www.bits-oasis.org/assets/bg-Ce5acHRY.jpg`, `.../sandAbove-DYdWpMFG.png`, `.../sandBottom-BdNPi9pe.png`, `.../oasis26logo-ocjSTg0M.png`
- Cloudinary (res.cloudinary.com/bhfhuzru/image/upload/): `castlefinal2.png`, `Moon.webp`, `sandfinal.webp`, `cloudSmall.svg`, `cloudBig.svg`, `cloudThree.svg`, `regCactus.png`, `regCarpet.png`, `camel1.svg`, `camel2.svg`
- Chest menu: `.../assets/lidInner-GUzw1LgU.png`, `lidEdge-eRj8kp96.png`, `chestBase-CyJpyvCi.png`, `trunkStuff-z8aILBSi.png`, `guitarBook-BrVkLoJ4.png`, `board-Db4E9oSv.png`, `chestWell-Cff2CttE.png`, `lidDome-152_MfbX.png`
- Event photos: `.../assets/<name>-<hash>.webp` (e.g. `sukhmanch-e9MWFsfW.webp`, `pitchPerfect-CFNtQtAi.webp`, `rapWars-CcwsS16H.webp`)

## What was not covered

Register/login flow (Google sign-in, not touched per instructions), Gallery and Media Partners (both "Coming Soon"), per-event rulebook PDFs, and the Photography vase (opened nothing).
