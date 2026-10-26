# Ridhima — Portfolio (Next.js version)

My portfolio rebuilt with **Next.js + React + TypeScript**, with interactive features inspired by studio sites:

- **Dive into the "i"** — scroll and the name zooms into the gold *i* of Ridhima, then a welcome panel appears
- **⚙ Settings** — Dark / Light / System theme, text size, Lite / Full motion, live FPS check
- **"+ Add to message"** — pick work areas you'd like to discuss; they're pre-filled into the contact form
- **A page for every work area** — `/work/technology-transfer/` etc., made from one template
- **Scroll-in animations**, swipeable work cards, topic chips, live news ticker, floating help button
- Contact form still sends to the same Google Form

---

## Where things are

```
data/site.ts          ← ALL the text and links. Edit this to change content.
app/page.tsx          ← The home page: the list of sections, in order
app/work/[slug]/      ← The template that makes one page per work area
app/layout.tsx        ← Fonts, page title, the frame around every page
app/globals.css       ← All styling. Colours are at the top.
components/           ← One file per section (Hero, WorkGrid, Contact…)
.github/workflows/    ← Builds and publishes the site to GitHub Pages
```

---

## Put it online (no laptop setup needed)

**Try it in a new repo first, so your current site stays live.**

1. On GitHub, create a new repository called **`portfolio-next`** (public).
2. Click **"uploading an existing file"**, drag in everything from this folder
   (including the hidden `.github` folder — on a phone, upload the zip contents
   from a computer or use GitHub's web editor to create
   `.github/workflows/deploy.yml` and paste its contents).
3. Go to **Settings → Pages → Build and deployment → Source** and pick **GitHub Actions**.
4. Open the **Actions** tab and watch the build (2–3 minutes).
5. Your site appears at **https://ridhimaw.github.io/portfolio-next/**

When you're happy, replace the files in your `portfolio` repo with these
(delete the old `index.html` and `static.yml`). The address stays
`ridhimaw.github.io/portfolio/` — the workflow picks up the repo name automatically.

---

## Run it on your laptop (for learning)

1. Install **Node.js** (LTS) from nodejs.org
2. Open this folder in VS Code → Terminal → run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000 — every save updates the page instantly.

---

## Things to try changing (good practice)

| Try this | Where |
|---|---|
| Change the gold colour | `--gold` at the top of `app/globals.css` |
| Add a new work card (and its page) | add an item to `work` in `data/site.ts` |
| Add a curiosity topic | add to `topics` in `data/site.ts` |
| Make the dive longer or shorter | `.dive { height: 320vh }` in `globals.css` |
| Reorder the home page | move lines in `app/page.tsx` |
| Change the welcome words | bottom of `components/Hero.tsx` |
