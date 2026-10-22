# Johan Grauslund Kjeldsen — Portfolio

Plain HTML/CSS/JS. No build step, no dependencies.

## Run

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Files

- `content.js` — **all text, CV data and projects.** The only file to edit for content.
- `styles.css` — design tokens (colors, type scale, spacing) at the top, then components.
- `main.js` — renders the home page and the project page from `content.js`.
- `index.html` — home (hero, work, about, contact).
- `project.html` — one template for every project (`project.html?p=<slug>`).
- `assets/img/` — images. `assets/cv.pdf` — downloadable CV.

## Add or edit a project

1. Put images in `assets/img/` (JPG/WebP, covers ~1600×1100, under ~300 KB).
2. In `content.js`, copy one object in `window.PROJECTS` and change `slug`, `title`, `category`, `year`, `role`, `tools`, `summary`, `cover`, `coverAlt`.
3. Build the page with `body` blocks: `text`, `image`, or `pair` (two images side by side).
4. Array order = order on the site. The slug must be unique.

Search for `[PLACEHOLDER]` in `content.js` to find everything left to replace.
