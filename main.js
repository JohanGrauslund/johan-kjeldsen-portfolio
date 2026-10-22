// Renders pages from content.js. No build step.
const S = window.SITE, P = window.PROJECTS;
const $ = (sel) => document.querySelector(sel);
const num = (i) => String(i + 1).padStart(2, "0");
const img = (src, alt, cls = "", eager = false, style = "") =>
  `<img src="${src}" alt="${alt}" class="${cls}" style="${style}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" width="1600" height="1100">`;
const isHome = document.body.dataset.page === "home";
// Per-project colours: theme { accent, tile } become CSS variables
// coverFit: "contain" shows the whole cover (for drawings); default crops to fill
const fit = (p) =>
  (p.coverFit ? `object-fit:${p.coverFit};background:#fff;` : "") + (p.coverPosition ? `object-position:${p.coverPosition};` : "");
// Cards and links only take the accent; full themes (paper/ink) apply on the project page itself
const vars = (p) => (p.theme ? `--accent:${p.theme.accent}` : "");

function shell() {
  $("#header").innerHTML = `
    <nav class="tiles" aria-label="Main">
      <a class="tile tile--name" href="index.html">${S.name}</a>
      <a class="tile" href="index.html#work" ${isHome ? "" : 'aria-current="true"'}><span>Work</span><span>${num(P.length - 1)}</span></a>
      <a class="tile" href="index.html#about"><span>About</span></a>
      <a class="tile" href="index.html#contact"><span>Contact</span></a>
      <a class="tile" href="${S.cvFile}" download><span>CV</span><span aria-hidden="true">↓</span></a>
    </nav>`;
  $("#footer").innerHTML = `<span>© ${new Date().getFullYear()} ${S.name}</span><span>${S.location}</span>`;
}

function home() {
  $("#hero").innerHTML = `
    <h1 class="hero__text">${S.intro}</h1>`;

  $("#work-grid").innerHTML = P.map((p, i) => `
    <a class="sheet s-${i % 4}" style="${vars(p)}" href="project.html?p=${p.slug}">
      <div class="sheet__media reveal">${img(p.cover, p.coverAlt, "", false, fit(p))}<span class="sheet__cta mono">Open project ↗</span></div>
      <div class="sheet__side">
        <span class="sheet__num" aria-hidden="true">${num(i)}</span>
        <div class="tb">
          <p class="tb__spine" aria-hidden="true">${S.shortName} · ${S.role}</p>
          <div class="tb__cell"><span class="tb__k">Project</span><h3 class="tb__title">${p.title}</h3></div>
          <p class="tb__cell tb__sum">${p.summary}</p>
          <div class="tb__row">
            <div class="tb__cell"><span class="tb__k">Dwg. no.</span>JGK–A–${num(i)}</div>
            <div class="tb__cell"><span class="tb__k">Year</span>${p.year}</div>
            <div class="tb__cell"><span class="tb__k">Sheet</span>${num(i)}/${num(P.length - 1)}</div>
          </div>
          <div class="tb__row">
            <div class="tb__cell"><span class="tb__k">Type</span>${p.category}</div>
            <div class="tb__cell"><span class="tb__k">Tools</span>${p.tools}</div>
            <div class="tb__cell tb__north" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor"><circle cx="16" cy="16" r="12"/><path d="M16 5l5 15-5-3-5 3z" fill="currentColor"/><text x="16" y="31" font-size="6" text-anchor="middle" fill="currentColor" stroke="none">N</text></svg></div>
          </div>
          <div class="tb__cell" aria-hidden="true"><span class="tb__k">Scale 1:100</span><span class="tb__bar"></span><span class="tb__ticks"><span>0</span><span>5</span><span>10 m</span></span></div>
          <div class="tb__hatch" aria-hidden="true"></div>
        </div>
      </div>
    </a>`).join("");

  $("#work-index").innerHTML = P.map((p, i) => `
    <a class="row" style="${vars(p)}" href="project.html?p=${p.slug}" data-cover="${p.cover}">
      <span class="mono">${num(i)}</span><h3 class="row__title">${p.title}</h3>
      <span class="row__cat mono">${p.category}</span><span class="mono">${p.year}</span>
    </a>`).join("");

  // Grid / Index toggle
  const views = { grid: $("#work-grid"), index: $("#work-index") };
  document.querySelectorAll("[data-view]").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("[data-view]").forEach((x) => x.setAttribute("aria-pressed", x === b));
    for (const k in views) views[k].hidden = k !== b.dataset.view;
  }));

  // Cursor-follow cover preview in Index view
  const peek = $("#peek");
  $("#work-index").addEventListener("mousemove", (e) => {
    const row = e.target.closest(".row");
    peek.classList.toggle("is-on", !!row);
    if (!row) return;
    if (peek.getAttribute("src") !== row.dataset.cover) peek.src = row.dataset.cover;
    peek.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - peek.offsetHeight / 2}px)`;
  });
  $("#work-index").addEventListener("mouseleave", () => peek.classList.remove("is-on"));

  // CV entry: "years | title" on one line, then organisation, then an optional note
  const list = (items) => `<ul>${items.map((e) => `<li><p class="cv__head"><span class="mono">${e.years}</span><span class="cv__sep" aria-hidden="true">|</span><strong>${e.title}</strong></p><small>${e.place}</small>${e.note ? `<small class="cv__note">${e.note}</small>` : ""}</li>`).join("")}</ul>`;
  $("#about-body").innerHTML = `
    <div>${img(S.portrait, S.portraitAlt, "about__img reveal")}</div>
    <div>
      <div class="about__bio">${S.bio.map((b) => `<p>${b}</p>`).join("")}</div>
      <div class="cv" style="margin-top:var(--s-5)">
        <div><h3 class="mono">Education</h3>${list(S.education)}</div>
        <div><h3 class="mono">Professional experience</h3>${list(S.experience)}</div>
        <div><h3 class="mono">Skills</h3>${S.skills.map((g) => `<p class="cv__skill-l mono">${g.label}</p><ul class="chips mono">${g.items.map((x) => `<li>${x}</li>`).join("")}</ul>`).join("")}</div>
      </div>
    </div>`;

  $("#contact").innerHTML = `
    <h2 class="mono" id="contact-title">Contact</h2>
    <a class="contact__big" href="mailto:${S.email}">${S.email}</a>
    <div class="tiles">
      <a class="tile" href="mailto:${S.email}"><span>Email</span><span>↗</span></a>
      <a class="tile" href="tel:${S.phone.replace(/\s/g, "")}"><span>${S.phone}</span></a>
      ${S.links.map((l) => `<a class="tile" href="${l.url}" target="_blank" rel="noopener"><span>${l.label}</span><span>↗</span></a>`).join("")}
      <a class="tile" href="${S.cvFile}" download><span>Download CV</span><span>↓</span></a>
    </div>`;
}

const cap = (c) => (c ? `<figcaption class="fig-cap">${c}</figcaption>` : "");
// Each image in a pair can carry its own caption, shown directly under that image
const item = (m) => `<div class="fig-item"><div class="reveal">${img(m.src, m.alt)}</div>${m.caption ? `<p class="fig-cap">${m.caption}</p>` : ""}</div>`;
const blocks = {
  // text: with a heading it starts a section (listed in the side menu); without one it is a paragraph group.
  // `text` may be a string or an array of paragraphs.
  text: (b) => {
    const ps = [].concat(b.text || []).map((t) => `<p>${t}</p>`).join("");
    return b.heading ? `<section class="block-text" id="sec-${b.n}"><h2 class="sec-title">${b.heading}</h2>${ps}</section>` : `<div class="block-note">${ps}</div>`;
  },
  image: (b) => `<figure class="block-fig"><div class="reveal">${img(b.src, b.alt)}</div>${cap(b.caption)}</figure>`,
  pair: (b) => `<figure class="block-fig"><div class="block-pair">${b.images.map(item).join("")}</div>${cap(b.caption)}</figure>`,
  // Diagrams rebuilt in the site style instead of screenshots
  // steps: vertical flow of pills, as on the original slides. kind: "ai" | "core" | "out"; numbered: "1 · label"
  steps: (b) => `<figure class="block-diagram"><ol class="steps">${b.items.map((it, k) => {
    const { label, kind = "" } = typeof it === "string" ? { label: it } : it;
    return `<li class="step ${kind}">${b.numbered ? `${k + 1} · ` : ""}${label}</li>`;
  }).join("")}</ol>${b.note ? `<p class="steps__note">${b.note}</p>` : ""}${cap(b.caption)}</figure>`,
  // stats: { items: [{ value, label }] }
  stats: (b) => `<div class="stats">${b.items.map((it) => `<div class="stat"><p class="stat__v">${it.value}</p><p class="stat__l mono">${it.label}</p></div>`).join("")}</div>`,
  // bars: { unit, max, groups: [{ label, bars: [{ label, value }] }], caption }
  bars: (b) => `<figure class="block-diagram"><div class="bars">${b.groups.map((g) => `<div class="bars__g"><p class="mono">${g.label}</p>${g.bars.map((x) =>
    `<div class="brow"><span class="mono">${x.label}</span><span class="brow__t"><span class="brow__f" style="width:${(x.value / b.max) * 100}%"></span></span><span class="brow__v">${x.value}${b.unit}</span></div>`).join("")}</div>`).join("")}</div>${cap(b.caption)}</figure>`,
  // table: { head: [...], rows: [[...]], caption }
  table: (b) => `<figure class="block-diagram"><div class="tbl-wrap"><table class="tbl"><thead><tr>${b.head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${cap(b.caption)}</figure>`,
};

function project() {
  const slug = new URLSearchParams(location.search).get("p");
  const i = Math.max(0, P.findIndex((p) => p.slug === slug));
  const p = P[i], next = P[(i + 1) % P.length];
  document.title = `${p.title} — ${S.name}`;
  for (const [k, v] of Object.entries(p.theme || {})) document.documentElement.style.setProperty(`--${k}`, v);
  const secs = p.body.filter((b) => b.type === "text" && b.heading);
  secs.forEach((b, k) => (b.n = k + 1));
  $("#project").innerHTML = `
    <header class="p-head wrap${p.headerBlock ? " p-head--block" : ""}">
      <p class="mono">Project ${num(i)} / ${num(P.length - 1)}</p>
      <h1 class="p-title">${p.title}</h1>
      ${p.subtitle ? `<p class="p-sub">${p.subtitle}</p>` : ""}
      <dl class="p-meta mono">
        <div><dt>Category</dt><dd>${p.category}</dd></div>
        ${p.school ? `<div><dt>Context</dt><dd>${p.school}</dd></div>` : ""}
        <div><dt>Year</dt><dd>${p.year}</dd></div>
        ${p.role ? `<div><dt>Role</dt><dd>${p.role}</dd></div>` : ""}
        <div><dt>Tools</dt><dd>${p.tools}</dd></div>
        ${p.team ? `<div><dt>Project by</dt><dd>${p.team}</dd></div>` : ""}
      </dl>
    </header>
    <div class="wrap">${img(p.cover, p.coverAlt, "p-cover", true, fit(p))}</div>
    <div class="wrap p-body">
      ${secs.length ? `<nav class="p-toc" aria-label="Project sections"><ol>${secs
        .map((b) => `<li><a href="#sec-${b.n}"><span class="mono">${num(b.n - 1)}</span>${b.heading}</a></li>`).join("")}</ol></nav>` : ""}
      <div class="p-content">
        <p class="p-summary">${p.summary}</p>
        ${p.body.map((b) => blocks[b.type](b)).join("")}
      </div>
    </div>
    <a class="next" style="${vars(next)}" href="project.html?p=${next.slug}"><span class="mono">Next project — ${num((i + 1) % P.length)}</span><p class="next__title">${next.title} →</p></a>`;

  // Section list: sticky on the left (top bar on phones); jumps to each main title, marks the current one
  if (!secs.length) return;
  const tabs = [...document.querySelectorAll(".p-toc a")];
  const heads = secs.map((b) => document.getElementById(`sec-${b.n}`));
  const setHdr = () => document.documentElement.style.setProperty("--hdr", $("#header").offsetHeight + 16 + "px");
  const bar = document.querySelector(".p-toc ol");
  let current = -2;
  const mark = () => {
    let k = -1;
    heads.forEach((h, j) => { if (h.getBoundingClientRect().top < innerHeight * 0.4) k = j; });
    if (k === current) return;
    current = k;
    tabs.forEach((t, j) => (j === k ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current")));
    // Phones: the bar scrolls sideways, so slide the active title into the middle of it
    const t = tabs[Math.max(k, 0)].parentElement;
    if (bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: t.offsetLeft - (bar.clientWidth - t.offsetWidth) / 2, behavior: "smooth" });
  };
  // Images above a section change the page height as they load. Load them first, then scroll once,
  // so the jump lands exactly on the title instead of being nudged afterwards.
  const ready = (el) => Promise.all([...document.querySelectorAll("#project img")]
    .filter((im) => im.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING)
    .map((im) => { im.loading = "eager"; return im.decode().catch(() => {}); }));
  tabs.forEach((t, j) => t.addEventListener("click", async (e) => {
    e.preventDefault();
    history.replaceState(null, "", t.hash);
    await Promise.race([ready(heads[j]), new Promise((r) => setTimeout(r, 1500))]); // never wait forever on a slow image
    heads[j].scrollIntoView({ behavior: "smooth" });
  }));
  // After the page has loaded, fetch the remaining images in the background so later jumps are instant
  addEventListener("load", () => document.querySelectorAll("#project img").forEach((im) => (im.loading = "eager")));
  setHdr(); mark();
  addEventListener("resize", setHdr);
  addEventListener("scroll", mark, { passive: true });
}

shell();
isHome ? home() : project();

// Hero text: largest font size that fits one screen; the cover then wraps the text
function fitHero() {
  const hero = $("#hero"), text = hero.querySelector(".hero__text");
  hero.style.height = ""; // measure against the full-screen height from CSS
  const cs = getComputedStyle(hero);
  const room = hero.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  let lo = 24, hi = 400;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    text.style.fontSize = mid + "px";
    text.scrollHeight <= room && text.scrollWidth <= text.clientWidth ? (lo = mid) : (hi = mid);
  }
  text.style.fontSize = lo + "px";
  hero.style.height = "auto"; // then shrink the cover to hug the text, no empty band
}
if (isHome) { document.fonts.ready.then(fitHero); addEventListener("resize", fitHero); }

// Scroll reveal (images unveil top-down)
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))), { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
