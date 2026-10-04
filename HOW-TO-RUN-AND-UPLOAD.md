# Itzfizz Scroll Hero — Run & Upload Guide

This is the complete source code of the scroll-driven hero animation
(car driving across a road, "WELCOMEITZFIZZ" reveal, animated stat cards)
built with React, TypeScript, GSAP, Tailwind CSS and TanStack Start.

---

## STEP 1 — Run it on your computer (VS Code)

You need **Node.js** first (version 20 or newer). Download the "LTS" installer
from https://nodejs.org and install it.

Then:

1. Unzip this folder anywhere (for example `Documents/itzfizz`).
2. Open VS Code → **File → Open Folder** → choose the unzipped folder.
3. Open the terminal inside VS Code (**Terminal → New Terminal**).
4. Install the dependencies (one time only):

   ```
   npm install
   ```

5. Start the app:

   ```
   npm run dev
   ```

6. Hold **Ctrl** (or Cmd on Mac) and click the `http://localhost:3000` link
   that appears in the terminal. The page opens in your browser.
   Scroll slowly and watch the car animation.

To stop the server, click inside the terminal and press **Ctrl + C**.

---

## STEP 2 — Upload to GitHub (from VS Code)

1. Go to https://github.com and sign in (create a free account if needed).
2. Click the **+** icon (top right) → **New repository**.
   - Name it something like `itzfizz-scroll-hero`
   - Keep it **Public** (your teacher needs to see it)
   - Do NOT tick "Add a README" (this folder already has one)
   - Click **Create repository**
3. In VS Code, click the **Source Control** icon in the left sidebar
   (third icon, looks like a branch).
4. Click **Initialize Repository**, then type a message like `first version`
   in the message box and click **Commit**.
5. Click **Publish Branch**. VS Code will ask you to **Sign in to GitHub** —
   a browser window opens, click **Authorize**.
6. Back in VS Code, choose your account, then pick the repository you just
   created. Your code is now on GitHub.
7. Copy the repository link from your browser
   (it looks like `https://github.com/your-username/itzfizz-scroll-hero`)
   — this is the **GitHub repository link** for your submission form.

---

## STEP 3 — Get a live link (for the "Live page link" field)

Easiest: open this project in Lovable (https://lovable.dev) and click
**Publish** — you get a free public web address to submit.

Alternative with GitHub Pages: GitHub Pages needs static files, but this
project is a full-stack app, so the Lovable publish link is the simplest
reliable option.

---

## What's inside

| File / folder | What it does |
| --- | --- |
| `src/components/ScrollHero.tsx` | **Main file** — all the animation: car movement, text reveal, stat cards |
| `src/routes/index.tsx` | Home page — shows ScrollHero and sets the page title/SEO tags |
| `src/routes/__root.tsx` | App shell — fonts, styles, 404 and error pages |
| `src/styles.css` | Colors and theme (orange car theme) |
| `src/assets/car.png` | The car image |
| `src/components/ui/` | Ready-made UI pieces (mostly unused, part of the template) |
| `package.json` | List of libraries the project needs |
| `vite.config.ts`, `tsconfig.json` | Build tool settings — no need to touch |

To change the headline text: open `src/components/ScrollHero.tsx` and edit the
`HEADLINE` value on line 6. To change the stats: edit the `STATS` list on
lines 8–13.
