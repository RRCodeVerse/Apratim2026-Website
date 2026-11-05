# Apratim 2026 – Official Fest Website

An Arabian Nights themed interactive festival website for **Apratim 2026** (CCET Sector 26, Chandigarh), built with modern **React 18** and bundled with **Vite**.

---

## 🌟 Highlights & Features

- **Layered Desert Sky Parallax**: Interactive moon, drifting clouds, grand palace, camels, and rolling dunes with physics-eased multi-layer scroll parallax.
- **Cinematic SVG Stroke Draw**: Dynamic vector SVG stroke-dash reveal and luminous fill for fest branding.
- **Desert Portal Section Transitions**: Atmospheric sand-dune curtain wipe with drifting clouds and starry backdrop on navigation.
- **Interactive Events Modal Carousel**: Category-driven clay vase buttons (Drama, Dance, Music, Photography, Other) opening a rich modal carousel with event details, venue tags, rulebook links, and direct Google Form registration links.
- **Ambient Lighting & Decorations**: Hanging brass lanterns with physics-inspired pendulum swing and candle flicker.
- **Torn Parchment Contact Directory**: Department selection with interactive polaroid preview card featuring pinned style and handwritten typography.
- **Responsive Across All Viewports**: Custom layouts tailored for desktop, tablet, and mobile with safe-area insets and touch targets.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) (`react`, `react-dom`)
- **Bundler / Dev Server**: [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react`
- **Styling**: Modern CSS3 (CSS Variables, Flexbox, CSS Grid, 3D Keyframe Animations, Clip-path, Backdrop Filter)
- **Typography**: Google Fonts (*Cinzel Decorative*, *EB Garamond*)
- **Deployment**: [Vercel](https://vercel.com/) (Vite preset with SPA rewrites via `vercel.json`)

---

## 📁 Repository Structure

```
Apratim2026-Website/
├── public/
│   ├── assets/                # Static WebP backgrounds, characters, and decor
│   │   ├── about-bg.webp
│   │   ├── bg.webp
│   │   ├── camels.webp
│   │   ├── cloud1.webp
│   │   ├── cloud2.webp
│   │   ├── contact-bg.webp
│   │   ├── dune-back.webp
│   │   ├── dune-front.webp
│   │   ├── events-bg.webp
│   │   ├── lantern.webp
│   │   ├── moon.webp
│   │   ├── palace.webp
│   │   └── vase.webp
│   └── favicon.svg            # Fest theme SVG favicon
│
├── src/
│   ├── data/
│   │   ├── depts.js           # Fest organizing department contacts
│   │   └── events.js          # Categorized events and registration URLs
│   ├── App.jsx                # Core interactive React application
│   ├── main.jsx               # Application entry point and root mount
│   └── style.css              # Arabian Nights theme styles, tokens, and responsive queries
│
├── src-png/                   # High-resolution source renders
├── .gitignore                 # Git ignore rules (node_modules, dist, environments)
├── index.html                 # Root HTML entry point with metadata and fonts
├── package.json               # Root npm dependencies and scripts
├── package-lock.json          # Dependency lockfile
├── vercel.json                # Vercel SPA routing and framework configuration
├── vite.config.js             # Vite configuration with React plugin
├── NOTES.md                   # Reference notes and fest specifications
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended, tested on Node v22)
- npm (v9.0.0 or higher)

### 1. Installation

Install all required dependencies directly from the repository root:

```bash
npm install
```

### 2. Local Development

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build

Build the project for production into the `dist/` directory:

```bash
npm run build
```

### 4. Preview Production Build

Locally test the built production bundle:

```bash
npm run preview
```

Open the displayed URL (typically [http://localhost:4173](http://localhost:4173)).

---

## ☁️ Deployment (Vercel)

The repository is configured for direct root-level deployment on **Vercel**:

- **Framework Preset**: Vite
- **Root Directory**: `./`
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

The included `vercel.json` ensures all route requests fallback correctly to `/index.html` for single-page application handling:

```json
{
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🤝 Contribution Guidelines

1. Ensure the UI design tokens and Arabian Nights theme palette (`--bg`, `--gold`, `--sand`, `--peach`, `--plum`) remain consistent.
2. Place new static assets in `public/assets/` to ensure direct public resolution without bundler transformation overhead.
3. Keep animations performant by relying on `transform`, `opacity`, and CSS `translate` rather than triggering reflows.
4. Verify both desktop and mobile viewports before submitting pull requests.
