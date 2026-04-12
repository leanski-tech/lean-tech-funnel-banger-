# 🔥 Lean Tech Funnel Banger

> **A simple, beginner-friendly online sales funnel creator with drag-and-drop builder and built-in analytics.**

Build, visualise, and analyse your sales funnels right in the browser — no account, no backend, no installation required beyond the one-time setup below.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🏗️ **Drag-and-Drop Builder** | Add funnel steps from a palette and reorder them by dragging |
| 📊 **Funnel Analyzer** | Visualise drop-off with funnel charts, bar charts, and a detailed metrics table |
| 📋 **5 Example Templates** | Lead Magnet, Product Launch, Webinar, Tripwire, and Quiz funnels ready to use |
| 💾 **Auto-Save** | All funnels saved automatically in your browser's localStorage |
| 📖 **How-To Guide** | Step-by-step instructions built right into the app |
| 🎨 **10 Step Types** | Landing page, opt-in, sales page, order form, upsell, downsell, thank-you, webinar, VSL, quiz |

---

## 🚀 Quick Start (Setup Guide)

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or higher** (includes npm)

Check your version:
```bash
node --version   # should print v18.x.x or higher
npm --version
```

### 1 — Clone the repository

```bash
git clone https://github.com/leanski-tech/lean-tech-funnel-banger-.git
cd lean-tech-funnel-banger-
```

### 2 — Install dependencies

```bash
npm install
```

This installs React, Vite, the drag-and-drop library (`@dnd-kit`), the charting library (`recharts`), and other dependencies.

### 3 — Start the development server

```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser. The app will hot-reload whenever you save a file.

### 4 — Build for production

```bash
npm run build
```

The optimised static files are output to the `dist/` folder. You can host them on any static web server (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

### 5 — Preview the production build locally

```bash
npm run preview
```

Opens a local server at **[http://localhost:4173](http://localhost:4173)** serving the production build.

---

## 🗂 Project Structure

```
lean-tech-funnel-banger-/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── FunnelBuilder.jsx      # Drag-and-drop canvas + DndContext
│   │   ├── FunnelStep.jsx         # Individual step card (view + edit modes)
│   │   ├── FunnelAnalyzer.jsx     # Charts and metrics table
│   │   ├── HowToGuide.jsx         # Step-by-step guide
│   │   ├── Sidebar.jsx            # Navigation + funnel list
│   │   ├── StepTypePalette.jsx    # Clickable palette of step types
│   │   └── TemplatesGallery.jsx   # Pre-built funnel templates
│   ├── data/
│   │   └── templates.js           # Template definitions and step-type metadata
│   ├── hooks/
│   │   └── useFunnels.js          # State management with localStorage persistence
│   ├── App.jsx                    # Root component + tab routing
│   ├── App.css                    # All application styles
│   ├── index.css                  # Base/reset styles
│   └── main.jsx                   # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧭 How to Use the App

### Step 1 — Create a funnel
Click **+ New** in the sidebar, or pick a ready-made template from the **Templates** tab.

### Step 2 — Add steps
In the **Builder** tab, click any step type in the left palette (Landing Page, Opt-In, Sales Page, etc.) to add it to your funnel canvas.

### Step 3 — Drag to reorder
Grab the ⠿ handle on the left of any step and drag it up or down to reorder.

### Step 4 — Edit step details
Click **✏️ Edit** on a step to set its name, estimated visitor count, and conversion count.

### Step 5 — Analyse
Switch to the **Analyzer** tab for:
- **Summary cards** — total visitors, conversions, overall rate, and drop-off percentage
- **Funnel chart** — visual representation of traffic flowing through each step
- **Bar chart** — side-by-side comparison of visits vs. conversions per step
- **Metrics table** — per-step conversion rates colour-coded green/amber/red

### Step 6 — Use templates to learn
The **Templates** tab has five pre-built funnels. Click **Use Template** to load a copy, then customise it.

### Step 7 — Manage multiple funnels
Use the sidebar to switch between funnels, rename them (✏️), or delete them (🗑️). All data persists in your browser's localStorage automatically.

---

## 🛠 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimised production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all source files |

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `@dnd-kit/core` + `@dnd-kit/sortable` | Drag-and-drop functionality |
| `recharts` | Charts (funnel chart, bar chart) |
| `uuid` | Unique IDs for funnels and steps |
| `vite` | Build tool and dev server |

---

## 🚢 Deploying to GitHub Pages

1. Install the deployment helper:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Set the `base` option in `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/lean-tech-funnel-banger-/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## 💡 Pro Tips

- **Identify bottlenecks:** The step with the biggest drop-off (conversion rate below 25%) is your highest-leverage optimisation opportunity.
- **Benchmark rates:** A good cold-traffic landing page converts at 20–40%. Below 10% means the headline or offer needs work.
- **One change at a time:** When testing improvements, change a single element so you know what drove the result.
- **Upsell benchmark:** Upsells typically convert 20–30% of buyers. Below 10% — review the offer relevance and price.

---

## 📄 Licence

MIT — free to use, modify, and distribute.
