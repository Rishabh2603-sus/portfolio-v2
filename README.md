# Portfolio

A minimalist, single-page portfolio built with React, TypeScript, and Vite. No UI libraries — just plain CSS using design tokens, so it's easy to reskin.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

The `dist/` folder from `npm run build` can be deployed anywhere that serves static files (Vercel, Netlify, GitHub Pages, etc.).

## Structure

```
src/
  data/content.ts       ← all your real content lives here (name, bio, projects, skills, experience)
  components/
    NavRail.tsx          ← the side index nav (desktop) / top bar (mobile)
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Experience.tsx
    Contact.tsx
    Reveal.tsx           ← scroll fade-in wrapper (IntersectionObserver based)
  hooks/useScrollSpy.ts   ← tracks which section is active for the nav
  index.css               ← design tokens (colors, fonts) and global styles
```

## Swap in your real content

Everything you'll want to edit lives in **`src/data/content.ts`**:

- `profile` — name, role, tagline, email, social links
- `about` — bio paragraphs
- `projects` — your project list (title, year, summary, tags, link)
- `skillGroups` — grouped skill tags
- `experience` — your work history timeline

No need to touch the component files unless you want to change layout or behavior.

## Design tokens

Colors, fonts, and spacing are defined as CSS variables at the top of `src/index.css`:

```css
--bg: #ece3d5;        /* page background, warm oatmeal */
--accent: #5b6b4c;    /* moss green accent */
--accent-brick: #9c4b32; /* secondary accent, used sparingly */
--font-display: "Fraunces", ...;
--font-body: "Inter", ...;
--font-mono: "IBM Plex Mono", ...;
```

Change these and the whole site updates — nothing else hardcodes colors or fonts.

## Deploy

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

(Create the empty repo on GitHub first, without a README or .gitignore, then run the commands above.)

### Deploy on Render

1. [render.com](https://render.com) → **New** → **Static Site**
2. Connect the GitHub repo you just pushed
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Create Static Site — Render gives you a live URL and redeploys on every push to `main`

## Notes

- **Resume button**: the hero has a "Download resume" link pointing to `public/resume.pdf`. Replace that file with your real resume (keep the filename `resume.pdf`) and the button just works — no code changes needed.
- Smooth scrolling is handled with native CSS (`scroll-behavior: smooth`) plus scroll-triggered fade/rise reveals via `IntersectionObserver` — no scroll-jacking libraries, so it stays fast and works well with trackpads, mouse wheels, and touch.
- `prefers-reduced-motion` is respected — reveals and smooth scroll are disabled for users who've asked for reduced motion at the OS level.
- Fully responsive: the left index nav collapses into a horizontal top bar under 860px.
