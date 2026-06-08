# Launch templates

Copy-paste and customize before posting.

---

## Twitter / X

```
I got tired of writing sm md lg for grids.

So I built a tiny utility that makes grids responsive based on container width — not viewport size.

No breakpoints. Just this:

grid({ min: 250 })

npm: https://www.npmjs.com/package/fitgrid

Feedback welcome 👇
```

---

## Dev.to article outline

**Title:** Stop Using Breakpoints for Grids (Use This Instead)

**Sections:**

1. **The pain** — sidebar layouts breaking with `md:grid-cols-3`
2. **Why breakpoints fail** — viewport ≠ container
3. **The CSS pattern** — `repeat(auto-fit, minmax())` explained simply
4. **The solution** — `fitgrid` with `grid({ min: 250 })` and `grid.auto(250)`
5. **Tailwind integration** — `twGrid.tailwind({ min: 250 })`
6. **Try it** — link to npm + GitHub demo

**CTA:** `npm install fitgrid`

---

## Reddit (r/webdev, r/reactjs)

**Title:** I kept struggling with responsive grids inside sidebars, so I built a tiny utility

**Body:**

```
Hey everyone — I kept running into the same issue: Tailwind breakpoint grids (sm/md/lg) work on viewport width, but break inside sidebars, modals, and nested panels.

CSS Grid's auto-fit + minmax pattern solves this, but I got tired of typing it everywhere. So I wrapped it in a small library:

grid({ min: 250, gap: 16 })

Columns adapt to the container's width automatically. No media queries.

It's zero-deps, under 1KB, TypeScript-first. Would love feedback if anyone tries it.

npm: https://www.npmjs.com/package/fitgrid
github: https://github.com/EsmailKhaleel/fitgrid
```

Tone: helpful, not salesy.

---

## GitHub repo description

```
Container-based responsive grid without breakpoints. Zero deps, TypeScript, works with React and Tailwind.
```

Topics: `css-grid`, `responsive-design`, `tailwindcss`, `react`, `typescript`, `layout`

---

## Demo

Local demo: `cd frontend && npm run dev`

Optional: deploy `frontend/dist` to Netlify/Vercel or link a StackBlitz project.
