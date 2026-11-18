// Escritorio del portfolio: Mac en pantallas grandes, iOS en el móvil.
// Un gesto = un proyecto (como luciagascon.es). Enlaces directos: index.html#lookit · ?lang=en
import { profile, experience, education, extras, skills, tech, filters, projects, cvFile, cvPreview } from './data.js?v=582f5f3f6c';
import { UI, pick, classicFile } from './i18n.js?v=582f5f3f6c';
import { loadAqua, mountSimulator, mountHistory, mountHorizon } from './aqua.js?v=582f5f3f6c';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } },
};

/* ── Idioma: ?lang= → elección guardada → idioma del navegador ── */
const LANGS = ['es', 'en'];
const qLang = new URLSearchParams(location.search).get('lang');
let lang = LANGS.includes(qLang) ? qLang : LANGS.includes(store.get('ae-lang')) ? store.get('ae-lang') : /^es\b/i.test(navigator.language || 'es') ? 'es' : 'en';
let t = UI[lang];
const tr = (x) => pick(x, lang);
// Números con separador de miles siempre (9.063 / 9,063)
const fmt = (n, d = 0) => {
  const [a, b] = n.toFixed(d).split('.');
  const g = a.replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'es' ? '.' : ',');
  return b ? `${g}${lang === 'es' ? ',' : '.'}${b}` : g;
};

const ICON = {
  home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.2 2.8 11h2.7v9h5v-6h3v6h5v-9h2.7z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5zm2.3-.3 6.7 5.3 6.7-5.3z"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2.5h8l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V4A1.5 1.5 0 0 1 6 2.5zm7.5 1v4.5H18zM8 12h8v1.5H8zm0 3.5h8V17H8z"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20.5c0-4.1 3.6-7 8-7s8 2.9 8 7z"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="5" width="16" height="2.4" rx="1.2"/><rect x="4" y="10.8" width="16" height="2.4" rx="1.2"/><rect x="4" y="16.6" width="11" height="2.4" rx="1.2"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.1M12 19.3v2.1M4.7 4.7l1.5 1.5M17.8 17.8l1.5 1.5M2.6 12h2.1M19.3 12h2.1M4.7 19.3l1.5-1.5M17.8 6.2l1.5-1.5"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 14.7A8.6 8.6 0 0 1 9.3 3.6a8.6 8.6 0 1 0 11.1 11.1z"/></svg>',
  left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 5.5-6.5 6.5 6.5 6.5"/></svg>',
  right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9.5 5.5 6.5 6.5-6.5 6.5"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M7 7l10 10M17 7 7 17"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.2 8.6h3.1V19H5.2zM6.8 3.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM10.4 8.6h3v1.4c.5-.9 1.6-1.7 3.2-1.7 3.3 0 3.9 2.1 3.9 4.9V19h-3.1v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V19h-3.1z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="8.5" y="8.5" width="11" height="11" rx="2.5"/><path d="M15.5 8.5V6.5A2 2 0 0 0 13.5 4.5h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
};
const glyph = (name, bg, color = '#fff') => `<span class="ai sys" style="--plate:${bg};color:${color}">${ICON[name]}</span>`;
const SYS = {
  home: glyph('home', 'linear-gradient(170deg,#9a9aa0,#4a4a4e)'),
  grid: glyph('grid', 'linear-gradient(170deg,#7d7af5,#3634a3)'),
  search: glyph('search', 'linear-gradient(170deg,#7ddcff,#0a84ff)'),
  mail: glyph('mail', 'linear-gradient(170deg,#6fd0ff,#0a6cff)'),
  doc: glyph('doc', 'linear-gradient(170deg,#ffffff,#d6d6dc)', '#8e8e93'),
  person: glyph('person', 'linear-gradient(170deg,#4fd3d7,#0a63c9)'),
  list: glyph('list', 'linear-gradient(170deg,#9a9aa0,#4a4a4e)'),
};
const appIcon = (p) => `<span class="ai${p.plate ? ' pad' : ''}" style="--plate:${p.plate || 'transparent'}"><img src="${p.logo}" alt="" draggable="false"></span>`;
const shot = (n) => `img/shots/${n}.webp`;
// Vídeo en bucle (mp4) con su primer fotograma como póster (.webp del mismo nombre); solo se reproduce cuando se ve
const clip = (n, alt = '') => `<video src="img/shots/${n}.mp4" poster="${shot(n)}" muted loop playsinline preload="none" aria-label="${esc(alt)}"></video>`;
const visual = (n, fx, alt) => (/\bvid\b/.test(fx) ? clip(n, alt) : `<img src="${shot(n)}" alt="${esc(alt)}" loading="lazy" decoding="async" fetchpriority="low" draggable="false">`);
const SP = [{ id: 'inicio', name: 'Inicio', wall: 'home' }, ...projects];
const spName = (k) => (k ? tr(SP[k].name) : t.home);

let live = { lookit: null };
// Cifras de cada proyecto: las de LOOKIT son las reales del último build (data/live.json)
const statsFor = (p) => {
  const s = tr(p.stats);
  return p.id === 'lookit' && live.lookit ? s.map((x, j) => (j === 0 ? [String(live.lookit.brands), x[1]] : j === 1 ? [fmt(live.lookit.products), x[1]] : x)) : s;
};
// Estado público: «En producción» solo si tiene URL que responde; si no, lo que diga el proyecto (o nada)
const badge = (p) => (p.live ? `<span class="live"><i></i>${t.live}</span>` : p.status ? `<span class="soon">${esc(tr(p.status))}</span>` : '');
let aquaData = null;
let pagerHinted = false;
let mode = 'mac', i = 0, slideTimer = null, drag = null, hinted = false, suppressClick = 0;
let screen, track, dock, spaces = [], charts = [];

/* ── Tema: claro, oscuro o el del sistema ── */
const sysDark = matchMedia('(prefers-color-scheme: dark)');
let theme = ['light', 'dark'].includes(store.get('ae-theme')) ? store.get('ae-theme') : null;
const isDark = () => (theme ? theme === 'dark' : sysDark.matches);
const withTransition = (fn) => (document.startViewTransition && !reduced() ? document.startViewTransition(fn) : fn());
function applyTheme() {
  const root = document.documentElement;
  if (theme) root.dataset.theme = theme; else delete root.dataset.theme;
  $$('meta[name="theme-color"]').forEach((m) => { m.content = theme ? (isDark() ? '#000000' : '#f2f2f7') : (m.media.includes('dark') ? '#000000' : '#f2f2f7'); });
  $$('[data-act="theme"]').forEach((b) => { b.innerHTML = isDark() ? ICON.sun : ICON.moon; b.setAttribute('aria-label', isDark() ? t.toLight : t.toDark); b.title = b.getAttribute('aria-label'); });
}
sysDark.addEventListener('change', () => { if (!theme) applyTheme(); });

/* ── Estructura ── */
const app = document.getElementById('app');
function chromeHTML() {
  return `
  <a class="skip" href="${classicFile(lang)}">${t.skip}</a>
  <main class="screen" id="screen" aria-label="${esc(t.desktopOf(profile.name))}">
    <div class="walls">${SP.map((s) => `<div class="wall w-${s.wall}"></div>`).join('')}</div>
    <nav class="menubar" aria-label="${t.menu}">
      <div class="l"><span class="mono" aria-hidden="true">${profile.initials}</span><b>${esc(profile.short)}</b>
        <button data-act="overview">${t.projects}</button><button data-act="about">${t.about}</button><button data-act="cv">${t.cv}</button><button data-act="contact">${t.contact}</button></div>
      <div class="r"><button class="pill" data-act="lang" lang="${t.other}" aria-label="${t.langBtn}" title="${t.langBtn}">${UI[t.other].short}</button><button class="ico" data-act="theme"></button>
        <a href="${classicFile(lang)}">${t.classic}</a><button class="ico" data-act="spot" aria-label="${t.searchK}" title="${t.searchK}">${ICON.search}</button><span id="clock"></span></div>
    </nav>
    <div class="track" id="track"></div>
    <nav class="pager" id="pager" aria-label="${t.projects}">
      <button class="pg" data-act="prev" aria-label="${t.prev}">${ICON.left}</button>
      <button class="pgt" data-act="next">${esc(t.hintPhone)}</button>
      <span class="dots">${SP.map((s, k) => `<button data-go="${k}" aria-label="${esc(spName(k))}"><i></i></button>`).join('')}</span>
      <button class="pg" data-act="next" aria-label="${t.next}">${ICON.right}</button>
    </nav>
    <div class="hint" id="hint" aria-hidden="true"></div>
    <nav class="dock" id="dock" aria-label="Dock"></nav>
    <div class="overlay ov" id="ov" role="dialog" aria-modal="true" aria-labelledby="ov-title">
      <div class="ov-in" id="ov-in">
        <div class="grab" aria-hidden="true"></div>
        <div class="ov-head"><h2 id="ov-title">${t.myProjects}</h2><div class="seg" id="filters" role="group" aria-label="${t.filter}"></div><button class="xbtn" data-act="close" aria-label="${t.close}">${ICON.x}</button></div>
        <div class="ov-grid" id="ovgrid"></div>
      </div>
    </div>
    <div class="overlay sp" id="sp" role="dialog" aria-label="${t.search}">
      <div class="spbox"><div class="spin">${ICON.search}<input id="spq" placeholder="${esc(t.spPlaceholder)}" autocomplete="off" aria-label="${t.search}"></div><div class="spres" id="spres"></div></div>
    </div>
    <div class="overlay sheetwrap" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <div class="sheet" id="sheet-panel"><div class="grab" aria-hidden="true"></div><div class="sheet-head"><div class="lights"><button class="c" data-act="close" aria-label="${t.close}"></button><button class="m" data-act="close" aria-label="${t.minimize}"></button><button class="x" data-act="max" aria-label="${t.maximize}"></button></div><b id="sheet-title">${esc(profile.short)}</b><button class="xbtn" data-act="close" aria-label="${t.close}">${ICON.x}</button></div><div class="sheet-body" id="sheet-body"></div></div>
    </div>
    <button class="toast" id="toast" aria-live="polite"></button>
  </main>`;
}

const rv = (k) => ` rv" style="--k:${k}`;

function homeHTML(cur) {
  const h = t.homeX;
  const metric = (p) => (p.id === 'lookit' && live.lookit ? h.lookitM(fmt(live.lookit.products)) : tr(p.metric));
  const card = (p, k) => `<button class="fc${k < 2 ? ' big' : ''}" data-go="${k + 1}" style="--tint:${p.tint}">
      <img src="${shot(p.shots[0][0])}" alt="" loading="lazy" decoding="async" draggable="false">
      <span class="fcx">${appIcon(p)}<span><b>${esc(tr(p.cardName || p.name))}</b><small>${esc(metric(p))}</small></span>${p.live ? `<i class="dot" title="${t.live}"></i>` : ''}</span>
    </button>`;
  return `
  <section class="space${cur ? ' cur' : ''}" data-i="0" aria-label="${t.home}"><div class="home">
    <div class="qs"><a class="cls" href="${classicFile(lang)}">${ICON.list}<span>${t.classic}</span></a><button class="pill" data-act="lang" lang="${t.other}" aria-label="${t.langBtn}">${UI[t.other].short}</button><button class="ico" data-act="theme"></button></div>
    <div class="hero">
      <p class="hi${rv(0)}"><i></i>${esc(tr(profile.role))} · ${esc(tr(profile.location))}</p>
      <h1 class="${rv(1)}">${esc(profile.name)}</h1>
      <p class="hline${rv(3)}">${esc(tr(profile.headline))}</p>
      <div class="actions${rv(4)}"><button class="btn" data-act="cv">${ICON.doc}${t.viewCV}</button><button class="btn sec" data-act="contact">${t.contact}</button></div>
      <dl class="facts${rv(5)}">${h.facts(projects.length, projects.filter((p) => p.live).length).map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl>
    </div>
    <div class="feat${rv(2)}" aria-label="${t.projects}">${projects.map(card).join('')}</div>
    <div class="w-profile">
      <p class="hi${rv(0)}"><i></i>${esc(tr(profile.role))} · ${esc(tr(profile.location))}</p>
      <h1 class="${rv(1)}">${esc(profile.name.split(' ')[0])}<br>${esc(profile.name.split(' ').slice(1).join(' '))}</h1>
      <p class="pitch${rv(2)}">${esc(tr(profile.headline))}</p>
    </div>
    <div class="icons${rv(4)}"><h2>${t.projects}</h2><div class="irow">${projects.map((p, k) => `<button class="dicon" data-go="${k + 1}">${appIcon(p)}<span>${esc(tr(p.short || p.name))}</span></button>`).join('')}</div></div>
  </div></section>`;
}

const linkBtns = (p, primary = false) =>
  (p.link ? `<a class="btn${primary ? '' : ' sec'}" href="${p.link}" target="_blank" rel="noopener">${esc(p.linkText ? `${tr(p.linkText)} ↗` : primary ? t.open(p.linkLabel) : `${p.linkLabel} ↗`)}</a>` : '') +
  (p.repo ? `<a class="btn sec" href="${p.repo}" target="_blank" rel="noopener">${t.repoBtn} ↗</a>` : '');

function projectHTML(p, k, cur) {
  const stats = statsFor(p);
  const slides = `<div class="shot">
      ${p.shots.map(([n, fx]) => `<div class="slide ${fx}">${visual(n, fx, t.shotOf(tr(p.name)))}</div>`).join('')}
      ${p.phone ? `<div class="slide m phone-only${p.phoneVid ? ' vid' : ''}">${visual(p.phone, p.phoneVid ? 'vid' : '', t.onPhone(tr(p.name)))}</div>` : ''}
      <div class="pips">${p.shots.filter(([, fx]) => !/phone-only/.test(fx)).map(() => '<i></i>').join('')}</div>
    </div>`;
  const media = p.aqua
    ? `<div class="mtabs"><div class="seg" role="group">${t.tabs.map(([k2, l], j) => `<button data-pane="${k2}" aria-pressed="${j === 0}">${l}</button>`).join('')}</div></div>
       <div class="pane on" data-p="sim"></div><div class="pane" data-p="hist"></div><div class="pane" data-p="prec"></div>
       <div class="pane" data-p="app">${slides}<p class="cap">${t.appCap}</p></div>`
    : `${slides}${p.phone ? `<div class="phoneshot">${visual(p.phone, p.phoneVid ? 'vid' : '', '')}</div>` : ''}<p class="cap">${p.shotNote ? esc(tr(p.shotNote)) : `${t.realShot} · ${esc(tr(p.url))}`}</p>`;
  return `
  <section class="space${cur ? ' cur' : ''}" data-i="${k + 1}" aria-label="${esc(tr(p.name))}"><div class="win">
    <div class="titlebar"><div class="lights"><button class="c" data-act="home" aria-label="${t.toHome}"></button><button class="m" data-act="overview" aria-label="${t.toAll}"></button><button class="x" data-act="max" aria-label="${t.maximize}"></button></div><div class="ttl">${esc(tr(p.name))}<small>${esc(tr(p.url))}</small></div><div></div></div>
    <div class="wbody">
      <div class="media" style="--tint:${p.tint}">${media}</div>
      <div class="info">
        <div class="info-in">
          <div class="phead${rv(0)}">${appIcon(p)}<div><div class="kind">${esc(tr(p.kind))}${badge(p)}</div><h2>${esc(tr(p.name))}</h2></div></div>
          <p class="plain${rv(1)}">${esc(tr(p.plain))}</p>
          <p class="tag${rv(1)}">${esc(tr(p.tagline))}</p>
          <div class="stats${rv(2)}">${stats.map(([a, b]) => `<div class="stat"><b data-v="${esc(a)}">${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
          <div class="group${rv(3)}"><div class="gh">${t.highlights}</div><ul>${tr(p.proves).map((x) => `<li>${ICON.check}<span>${esc(x)}</span></li>`).join('')}</ul></div>
          <div class="stack${rv(4)}">${p.stack.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
        </div>
        <div class="info-foot actions${rv(5)}"><button class="btn" data-act="case">${t.caseBtn}</button>${linkBtns(p)}</div>
      </div>
    </div>
  </div></section>`;
}

function render(animate) {
  track.innerHTML = homeHTML(!animate && i === 0) + projects.map((p, k) => projectHTML(p, k, !animate && i === k + 1)).join('');
  spaces = $$('.space', track);
  charts = [];
  if (aquaData) {
    const sp = spaces[1];
    charts.push(mountSimulator($('[data-p="sim"]', sp), aquaData, lang), mountHorizon($('[data-p="prec"]', sp), lang));
    mountHistory($('[data-p="hist"]', sp), aquaData, lang);
  }
  applyTheme();
  if (animate) void track.offsetWidth; // fija el estado inicial para que la entrada se anime
  go(i, true, animate);
}

function dockHTML() {
  const item = (attrs, icon, label, cls = '') => `<button class="${cls}" ${attrs} aria-label="${esc(label)}">${icon}<span class="tip">${esc(label)}</span><span class="lbl">${esc(label)}</span></button>`;
  // Mac: el Dock son los proyectos (las secciones están en la barra de menús). Móvil: no hay barra, así que el Dock son las secciones.
  if (mode === 'mac') return item('data-go="0"', SYS.home, t.home) + projects.map((p, k) => item(`data-go="${k + 1}"`, appIcon(p), tr(p.name))).join('');
  return item('data-go="0"', SYS.home, t.home) + item('data-act="overview"', SYS.grid, t.projects) + item('data-act="about"', SYS.person, t.about) +
    item('data-act="contact"', SYS.mail, t.contact);
}

/* ── Modo y escala ── */
// Móvil en vertical u horizontal (pantalla táctil y baja) → interfaz iOS
const mq = matchMedia('(max-width: 760px), (max-height: 520px) and (pointer: coarse), (max-width: 1000px) and (orientation: portrait)');
function applyMode() {
  mode = mq.matches ? 'phone' : 'mac';
  document.body.classList.toggle('mac', mode === 'mac');
  document.body.classList.toggle('phone', mode === 'phone');
  const s = mode === 'mac' ? Math.min(1.25, Math.max(0.72, innerWidth / 1440)) : 1;
  document.documentElement.style.setProperty('--s', s);
  if (dock && dock.dataset.mode !== mode) { dock.dataset.mode = mode; dock.innerHTML = dockHTML(); dockRest = null; }
  $('#hint').innerHTML = mode === 'mac' ? esc(t.hintMac) : `${esc(t.hintPhone)} <span class="arr">${ICON.right}</span>`;
}
const scale = () => (mode === 'mac' ? +getComputedStyle(document.documentElement).getPropertyValue('--s') || 1 : 1);
mq.addEventListener('change', () => { applyMode(); go(i, true); });
addEventListener('resize', () => { if (mode === 'mac') applyMode(); });

/* ── Navegación ── */
function go(n, instant, reveal) {
  const prev = i;
  i = Math.max(0, Math.min(SP.length - 1, n));
  track.classList.toggle('drag', !!instant);
  track.style.transform = `translate3d(${-i * 100}%,0,0)`;
  if (instant) requestAnimationFrame(() => track.classList.remove('drag'));
  $$('.wall').forEach((w, k) => w.classList.toggle('on', k === i));
  $$('#pager .dots button').forEach((d, k) => { d.classList.toggle('on', k === i); d.toggleAttribute('aria-current', k === i); });
  $('#pager [data-act="prev"]').disabled = i === 0;
  $('#pager .pg[data-act="next"]').disabled = i === SP.length - 1;
  if (i > 0) pagerHinted = true;
  $('#pager').classList.toggle('first', i === 0 && !pagerHinted);
  $('#pager').classList.toggle('athome', i === 0);
  $$('#dock [data-go]').forEach((b) => b.classList.toggle('on', +b.dataset.go === i));
  spaces.forEach((s, k) => { s.inert = k !== i; });
  const changed = prev !== i || reveal;
  spaces.forEach((s, k) => s.classList.toggle('cur', k === i));
  if (prev !== i && spaces[prev]) {
    const w = spaces[prev];
    w.classList.add('was'); clearTimeout(w.wasT); w.wasT = setTimeout(() => w.classList.remove('was'), 700);
  }
  if (changed) arrive(spaces[i]);
  const id = SP[i].id;
  if ((location.hash.slice(1) || 'inicio') !== id) history.replaceState(null, '', i ? `#${id}` : location.pathname + location.search);
  document.title = i ? `${tr(SP[i].name)} · ${profile.name}` : `${profile.name} · ${tr(profile.role)}`;
  if (prev !== i || instant || reveal) startSlides();
  if (i > 0 && !hinted) hideHint();
  if (prev !== i) { lastY = 0; screen.classList.remove('tuck'); }
}
// Al llegar a un proyecto: las cifras cuentan y las curvas del TFG se dibujan
function arrive(sp) {
  if (!sp || reduced()) return;
  $$('.stat b[data-v]', sp).forEach(countUp);
  if (sp === spaces[1]) charts.forEach((c) => c.replay());
}
function countUp(b) {
  const final = b.dataset.v;
  const m = final.match(/^([^\d]*)(\d[\d.,]*)(.*)$/);
  if (!m || m[3].includes(':')) return;
  const [, pre, num, post] = m;
  const dec = lang === 'es' ? ',' : '.', grp = lang === 'es' ? '.' : ',';
  const decimals = num.includes(dec) ? num.split(dec)[1].length : 0;
  const val = parseFloat(num.split(grp).join('').replace(dec, '.'));
  if (!(val >= 5 || decimals)) return;
  const t0 = performance.now(), D = 1200 + Math.min(600, Math.log10(val + 1) * 150);
  const step = (now) => {
    const k = Math.min(1, (now - t0 - 250) / D);
    if (k < 0) { b.textContent = pre + fmt(0, decimals) + post; return requestAnimationFrame(step); }
    const e = 1 - Math.pow(1 - k, 4);
    b.textContent = k < 1 ? pre + fmt(val * e, decimals) + post : final;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function playVideos() {
  // Solo suenan (en silencio) los vídeos del proyecto visible y de la diapositiva activa
  track.querySelectorAll('video').forEach((v) => {
    const sp = v.closest('.space'), sl = v.closest('.slide');
    const visible = sp === spaces[i] && (!sl || sl.classList.contains('on')) && !(v.closest('.phoneshot') && mode === 'phone');
    if (visible && !reduced()) { if (v.preload === 'none') v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
  });
}
function startSlides() {
  clearTimeout(slideTimer);
  track.querySelectorAll('.slide.on').forEach((s) => s.classList.remove('on'));
  const sp = spaces[i];
  if (!sp || i === 0) { playVideos(); return; }
  const appPane = sp.querySelector('[data-p="app"]');
  if (appPane && !appPane.classList.contains('on')) return;
  let slides = [...sp.querySelectorAll('.slide')].filter((s) => (mode === 'phone' ? !s.classList.contains('mac-only') : !s.classList.contains('phone-only')));
  if (mode === 'phone') { const m = slides.find((s) => s.classList.contains('m')); if (m) slides = [m, ...slides.filter((s) => s !== m && !s.classList.contains('tall'))]; }
  const pips = [...sp.querySelectorAll('.pips i')];
  let k = 0;
  const show = () => { slides.forEach((s, j) => s.classList.toggle('on', j === k)); pips.forEach((p, j) => p.classList.toggle('on', j === k % pips.length)); playVideos(); };
  // Las fotos duran 6 s; un vídeo, lo que dura una vuelta (mínimo 6 s)
  const next = () => {
    const v = slides[k]?.querySelector('video');
    const ms = v && v.duration ? Math.max(6000, v.duration * 1000) : v ? 10000 : 6000;
    slideTimer = setTimeout(() => { k = (k + 1) % slides.length; show(); next(); }, ms);
  };
  show();
  if (slides.length > 1) next();
}
function hideHint() { hinted = true; $('#hint')?.classList.add('gone'); }
addEventListener('hashchange', () => { const k = SP.findIndex((s) => s.id === location.hash.slice(1)); if (k >= 0 && k !== i) go(k); });

/* ── Gestos: dedo o ratón (un arrastre horizontal no cuenta como clic) ── */
const anyOpen = () => ['#ov', '#sp', '#sheet'].some((s) => $(s)?.classList.contains('open'));
function onDown(e) {
  if (e.pointerType === 'touch' || anyOpen() || e.button > 0) return;
  if (e.target.closest('input, select, textarea, .chips, .seg')) return;
  if (e.pointerType === 'mouse' && e.target.closest('.info, .viz, button, a')) return;
  drag = { x: e.clientX, y: e.clientY, dx: 0, axis: null, id: e.pointerId, t: performance.now() };
}
addEventListener('pointermove', (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = (e.clientX - drag.x) / scale(), dy = (e.clientY - drag.y) / scale();
  if (!drag.axis && Math.hypot(dx, dy) > 8) {
    drag.axis = Math.abs(dx) > Math.abs(dy) * 1.1 ? 'x' : 'y';
    if (drag.axis === 'x') { track.classList.add('drag'); try { track.setPointerCapture(drag.id); } catch { /* sin captura */ } }
  }
  if (drag.axis !== 'x') return;
  const edge = (i === 0 && dx > 0) || (i === SP.length - 1 && dx < 0) ? 0.3 : 1;
  drag.dx = dx;
  track.style.transform = `translate3d(calc(${-i * 100}% + ${dx * edge}px),0,0)`;
});
function endDrag() {
  const d = drag; drag = null; track.classList.remove('drag');
  if (!d || d.axis !== 'x') return;
  suppressClick = performance.now();
  const v = d.dx / (performance.now() - d.t);
  go(d.dx < -50 || v < -0.35 ? i + 1 : d.dx > 50 || v > 0.35 ? i - 1 : i);
}
addEventListener('pointerup', (e) => { if (drag && e.pointerId === drag.id) endDrag(); });
// Gestos con el dedo: se decide el eje en los primeros píxeles y, si es horizontal, el gesto es nuestro
function onTouchStart(e) {
  if (anyOpen() || e.touches.length > 1 || e.target.closest('input, select, textarea, .chips, .seg')) { drag = null; return; }
  const p = e.touches[0];
  drag = { x: p.clientX, y: p.clientY, dx: 0, axis: null, id: 'touch', t: performance.now() };
}
function onTouchMove(e) {
  if (!drag || drag.id !== 'touch') return;
  const p = e.touches[0], dx = p.clientX - drag.x, dy = p.clientY - drag.y;
  if (!drag.axis && Math.hypot(dx, dy) > 8) {
    drag.axis = Math.abs(dx) > Math.abs(dy) * 1.1 ? 'x' : 'y';
    if (drag.axis === 'x') track.classList.add('drag');
  }
  if (drag.axis !== 'x') return;
  e.preventDefault();
  const edge = (i === 0 && dx > 0) || (i === SP.length - 1 && dx < 0) ? 0.3 : 1;
  drag.dx = dx;
  track.style.transform = `translate3d(calc(${-i * 100}% + ${dx * edge}px),0,0)`;
}
function onTouchEnd() { if (drag && drag.id === 'touch') endDrag(); }
// Si el navegador se queda el gesto (scroll vertical), solo se recoloca la pista
addEventListener('pointercancel', () => {
  if (!drag) return;
  const d = drag; drag = null; track.classList.remove('drag');
  if (d.axis === 'x') track.style.transform = `translate3d(${-i * 100}%,0,0)`;
});
// Tras deslizar no se abre lo que hubiera bajo el dedo
addEventListener('click', (e) => { if (performance.now() - suppressClick < 350) { e.preventDefault(); e.stopPropagation(); } }, true);

/* ── Móvil: el Dock y el paginador se apartan al leer hacia abajo y vuelven al subir ── */
let lastY = 0;
function onScroll(e) {
  const el = e.target;
  if (mode !== 'phone' || !(el instanceof Element) || !el.matches('.space.cur .wbody')) return;
  const y = el.scrollTop, d = y - lastY;
  if (Math.abs(d) < 6) return;
  lastY = y;
  screen.classList.toggle('tuck', d > 0 && y > 80 && y < el.scrollHeight - el.clientHeight - 40);
}

/* ── Trackpad y rueda: un gesto = un proyecto; pellizcar = vista general ── */
let acc = 0, accT = 0, lock = false;
function onWheel(e) {
  if (e.ctrlKey) { e.preventDefault(); if (e.deltaY > 2) openOv(); else if (e.deltaY < -2) closeAll(); return; }
  if (anyOpen()) return;
  const horiz = Math.abs(e.deltaX) > Math.abs(e.deltaY);
  if (!horiz && (mode === 'phone' || e.target.closest('.info, .viz, .home, .dock'))) return;
  e.preventDefault();
  const now = performance.now();
  if (now - accT > 220) acc = 0;
  accT = now;
  if (lock) return;
  acc += horiz ? e.deltaX : e.deltaY;
  if (Math.abs(acc) > 60) { go(i + Math.sign(acc)); acc = 0; lock = true; setTimeout(() => (lock = false), 700); }
}

/* ── Teclado ── */
addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSpot(); return; }
  if (e.key === 'Escape') { closeAll(); return; }
  if ($('#ov').classList.contains('open') && e.key === 'ArrowDown') { e.preventDefault(); closeAll(); return; }
  if (anyOpen() || (e.target instanceof Element && e.target.closest('input, select, textarea'))) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); toggle('overview'); }
  else if (/^[1-7]$/.test(e.key)) go(+e.key - 1);
});

/* ── Acciones ── */
function onClick(e) {
  const pane = e.target.closest('[data-pane]');
  if (pane) {
    const media = pane.closest('.media');
    media.querySelectorAll('[data-pane]').forEach((b) => b.setAttribute('aria-pressed', b === pane));
    media.querySelectorAll('.pane').forEach((p) => p.classList.toggle('on', p.dataset.p === pane.dataset.pane));
    if (pane.dataset.pane === 'sim' || pane.dataset.pane === 'prec') charts.forEach((c) => c.replay());
    startSlides();
    return;
  }
  const inDock = e.target.closest('#dock > *');
  if (inDock) bounce(inDock);
  const g = e.target.closest('[data-go]');
  if (g) { closeAll(); go(+g.dataset.go); return; }
  const a = e.target.closest('[data-act]');
  if (!a) return;
  ({
    overview: () => toggle('overview'), spot: openSpot, about: () => toggle('about'), cv: () => toggle('cv'), contact: () => toggle('contact'),
    close: closeAll, home: () => go(0), prev: () => go(i - 1), next: () => go(i + 1),
    max: () => (a.closest('.sheet') || spaces[i]).classList.toggle('max'),
    case: () => { const p = projects[i - 1]; if (p) sheet(t.caseOf(tr(p.name)), caseHTML(p), 'case'); },
    theme: () => { theme = isDark() ? 'light' : 'dark'; store.set('ae-theme', theme); withTransition(applyTheme); },
    lang: () => setLang(t.other),
    copy: async () => {
      const lbl = a.querySelector('span') || a;
      try { await navigator.clipboard.writeText(profile.email); lbl.textContent = t.copied; }
      catch { getSelection().selectAllChildren($('#sheet code')); lbl.textContent = t.copyManual; }
    },
  })[a.dataset.act]?.();
}
function bounce(el) {
  const icon = el.querySelector('.ai');
  if (!icon || mode !== 'mac' || reduced()) return;
  icon.animate([{ transform: 'none' }, { transform: 'translateY(-38%)', offset: 0.28 }, { transform: 'none', offset: 0.56 }, { transform: 'translateY(-14%)', offset: 0.76 }, { transform: 'none' }],
    { duration: 720, easing: 'cubic-bezier(.3,.7,.4,1)' });
}
function setLang(l) {
  lang = l; t = UI[l]; store.set('ae-lang', l);
  document.documentElement.lang = l;
  const u = new URL(location.href);
  if (u.searchParams.has('lang')) { u.searchParams.set('lang', l); history.replaceState(null, '', u); }
  withTransition(() => mount(false));
}

/* ── Hojas ── */
// Proyectos, Sobre mí, CV y Contacto se abren igual: la misma ventana, bajo la barra de menús, y un segundo clic la cierra
let openSection = null;
const SECTIONS = {
  overview: openOv,
  about: () => sheet(t.about, aboutHTML(), 'about'),
  cv: () => sheet(t.cv, cvHTML(), 'cv'),
  contact: () => sheet(t.contact, contactHTML(), 'contact'),
};
function toggle(name) {
  if (openSection === name && anyOpen()) { closeAll(); return; }
  $('#toast').classList.remove('show'); // el aviso no debe tapar la ventana
  SECTIONS[name]();
  openSection = name;
  $$('.menubar .l [data-act]').forEach((b) => b.classList.toggle('on', b.dataset.act === name));
}
function sheet(title, html, kind = '') {
  closeAll(false); modal(true);
  $('#toast').classList.remove('show');
  $('#sheet-panel').dataset.kind = kind;
  $('#sheet-panel').classList.remove('max');
  $('#sheet-title').textContent = title;
  $('#sheet-body').innerHTML = html;
  $('#sheet-body').scrollTop = 0;
  $('#sheet').classList.add('open');
  setTimeout(() => $(mode === 'mac' ? '#sheet .lights .c' : '#sheet .xbtn').focus({ preventScroll: true }), 60);
}
const li = (b, small, span) => `<div class="li"><b>${esc(b)}</b>${small ? `<small>${esc(small)}</small>` : ''}${span ? `<span>${esc(span)}</span>` : ''}</div>`;
function aboutHTML() {
  return `<div class="about-hero"><div class="avatar" aria-hidden="true">${profile.initials}</div><div><h2>${esc(profile.name)}</h2><p class="lead">${esc(tr(profile.role))} · ${esc(tr(profile.location))}</p></div></div>
    <div class="bio">${tr(profile.bio).map((p) => `<p>${esc(p)}</p>`).join('')}</div>
    <div class="cols"><div>
      <h3>${t.experience}</h3><div class="list">${experience.map((e) => li(`${tr(e.role)} · ${e.org}`, tr(e.date), tr(e.text))).join('')}</div>
    </div><div>
      <h3>${t.education}</h3><div class="list">${education.map((e) => li(tr(e.title), e.date, tr(e.org))).join('')}</div>
      <h3>${t.extras}</h3><div class="list">${extras.map(([k, v]) => li(tr(k), '', tr(v))).join('')}</div>
    </div></div>
    <h3>${t.focusH}</h3><div class="focus">${tr(profile.focus).map(([a, b]) => `<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
    <h3>${t.howWork}</h3><ul class="impact">${tr(profile.principles).map((d) => `<li>${ICON.check}<span>${esc(d)}</span></li>`).join('')}</ul>
    <h3>${t.skills}</h3><div class="techs">${skills.map(([k, v]) => `<div><b>${esc(tr(k))}</b><div class="chips">${v.map((x) => `<span>${esc(tech(x).name)}</span>`).join('')}</div></div>`).join('')}</div>
    <div class="actions" style="margin-top:22px"><button class="btn" data-act="cv">${ICON.doc}${t.viewCV}</button><a class="btn sec" href="${profile.links.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a></div>`;
}
// CV: primero se ve; descargarlo es una decisión de quien lo lee
function cvHTML() {
  const pdf = cvFile(lang);
  return `<div class="cvbar"><span>${t.cvSub} · ${t.short}</span><span class="actions"><a class="btn sec" href="${pdf}" target="_blank" rel="noopener">${t.openPdf} ↗</a><a class="btn" href="${pdf}" download>${ICON.doc}${t.downloadPdf}</a></span></div>
    <div class="cvpage"><img src="${cvPreview(lang)}" width="1131" height="1600" alt="${esc(t.cvAlt(profile.name))}"></div>`;
}
function caseHTML(p) {
  const c = p.case, h = t.c;
  return `<div class="case-hero">${appIcon(p)}<div><div class="kind">${esc(tr(p.kind))}${badge(p)}</div><h2>${esc(tr(p.name))}</h2></div></div>
    <p class="lead big">${esc(tr(p.plain))}</p>
    <p class="lead">${esc(tr(p.tagline))}</p>
    <div class="stats">${statsFor(p).map(([a, b]) => `<div class="stat"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
    <figure class="case-shot" style="--tint:${p.tint}"><img src="${shot(p.shots[0][0])}" alt="${esc(t.shotOf(tr(p.name)))}" loading="lazy"></figure>
    <div class="myrole"><b>${h.role}</b><span>${esc(tr(c.role))}</span></div>
    <h3>${h.problem}</h3><p>${esc(tr(c.problem))}</p>
    <h3>${h.solution}</h3><p>${esc(tr(c.solution))}</p>
    ${(c.extra || []).map((x) => `<h3>${esc(tr(x.h))}</h3><p>${esc(tr(x.p))}</p>`).join('')}
    <h3>${h.arch}</h3><div class="arch">${tr(c.arch).map(([k, v]) => `<div class="ar"><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join('')}</div>
    <h3>${h.decisions}</h3><ol class="dec">${tr(c.decisions).map((d) => `<li>${esc(d)}</li>`).join('')}</ol>
    <h3>${h.impact}</h3><ul class="impact">${tr(c.impact).map((d) => `<li>${ICON.check}<span>${esc(d)}</span></li>`).join('')}</ul>
    <h3>${h.next}</h3><p>${esc(tr(c.next))}</p>
    <h3>${h.stack}</h3><div class="stack">${p.stack.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
    ${p.link || p.repo ? `<div class="actions" style="margin-top:22px">${linkBtns(p, true)}</div>` : ''}`;
}
const mailto = () => `mailto:${profile.email}?subject=${encodeURIComponent(t.mailSubject)}`;
function contactHTML() {
  const act = (href, icon, label, attrs = '') => `<a class="cact" href="${href}"${attrs}><span>${icon}</span>${esc(label)}</a>`;
  const row = (k, v, extra = '') => `<div class="crow"><small>${esc(k)}</small><div>${v}</div>${extra}</div>`;
  return `<div class="ccard">
      <div class="avatar" aria-hidden="true">${profile.initials}</div>
      <h2>${esc(profile.name)}</h2>
      <p class="lead">${esc(tr(profile.role))}</p>
      <p class="cpitch">${esc(t.talkSub)}</p>
      <div class="cacts">${act(mailto(), ICON.mail, t.write)}${act(profile.links.linkedin, ICON.linkedin, 'LinkedIn', ' target="_blank" rel="noopener"')}${act(cvFile(lang), ICON.doc, t.cv, ' target="_blank" rel="noopener"')}</div>
    </div>
    <div class="crows">
      ${row(t.emailL, `<a href="${mailto()}"><code>${esc(profile.email)}</code></a>`, `<button class="ccopy" data-act="copy">${ICON.copy}<span>${t.copy}</span></button>`)}
      ${row('LinkedIn', `<a href="${profile.links.linkedin}" target="_blank" rel="noopener">${esc(profile.name)} ↗</a>`)}
      ${row(t.k.based, esc(tr(profile.location)))}
      ${row(t.k.languages, esc(tr(extras[0][1])))}
    </div>`;
}

/* ── Vista general («Mis proyectos») ── */
let filter = 'all';
function overviewHTML() {
  $('#filters').innerHTML = filters.map(([k, l]) => `<button data-f="${k}" aria-pressed="${k === filter}">${esc(tr(l))}</button>`).join('');
  $('#ovgrid').innerHTML = projects.map((p, k) => `<button class="oc${filter !== 'all' && !p.cats.includes(filter) ? ' dim' : ''}" data-go="${k + 1}" style="--k:${k}"><div class="th"><img src="${shot(p.shots[0][0])}" alt="" loading="lazy">${appIcon(p)}${badge(p)}</div><small>${esc(tr(p.kind))}</small><b>${esc(tr(p.name))}</b><span>${esc(tr(p.plain))}</span></button>`).join('');
}
function openOv() { closeAll(false); modal(true); $('#ov').classList.add('open'); $('#ov-in').scrollTop = 0; setTimeout(() => $('#ov .xbtn').focus({ preventScroll: true }), 60); }
// Con una capa abierta, lo de detrás no recibe foco ni clics; al cerrarla, el foco vuelve a donde estaba
let lastFocus = null;
function modal(on) {
  if (on && !anyOpen()) lastFocus = document.activeElement;
  [track, dock, $('#pager')].forEach((el) => { if (el) el.inert = on; });
}
function closeAll(restore = true) {
  const was = anyOpen();
  ['#ov', '#sp', '#sheet'].forEach((s) => $(s)?.classList.remove('open'));
  openSection = null; $$('.menubar .l .on').forEach((b) => b.classList.remove('on'));
  modal(false);
  if (restore && was && lastFocus?.isConnected && !lastFocus.closest('.overlay')) lastFocus.focus({ preventScroll: true });
}

/* ── Deslizar hacia abajo para cerrar (móvil) ── */
function swipeToClose(panel, scroller) {
  let y0 = null, x0 = 0, dy = 0, t0 = 0, active = false;
  panel.addEventListener('touchstart', (e) => {
    if (mode !== 'phone' || e.touches.length > 1 || e.target.closest('input, select, textarea, .seg, .chips')) { y0 = null; return; }
    y0 = e.touches[0].clientY; x0 = e.touches[0].clientX; dy = 0; t0 = performance.now(); active = false;
  }, { passive: true });
  panel.addEventListener('touchmove', (e) => {
    if (y0 === null) return;
    const d = e.touches[0].clientY - y0, dx = e.touches[0].clientX - x0;
    if (!active) {
      const fromHead = e.target.closest('.grab, .sheet-head, .ov-head');
      if (d > 6 && d > Math.abs(dx) && (fromHead || scroller.scrollTop <= 0)) { active = true; panel.classList.add('dragging'); }
      else if (Math.abs(d) > 6 || Math.abs(dx) > 6) { y0 = null; return; }
      else return;
    }
    e.preventDefault();
    dy = Math.max(0, d);
    panel.style.transform = `translate3d(0,${dy}px,0)`;
  }, { passive: false });
  const end = () => {
    if (y0 === null) return;
    y0 = null;
    if (!active) return;
    active = false; panel.classList.remove('dragging');
    const v = dy / (performance.now() - t0);
    panel.style.transform = '';
    if (dy > 110 || v > 0.55) closeAll();
  };
  panel.addEventListener('touchend', end);
  panel.addEventListener('touchcancel', end);
}

/* ── Spotlight ── */
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
let sel = 0, results = [];
function search(q) {
  const s = t.sp, q2 = norm(q.trim());
  const extra = [
    { name: s.about[0], sub: s.about[1], keys: s.about[2], act: 'about', icon: SYS.person },
    { name: s.cv[0], sub: s.cv[1], keys: s.cv[2], act: 'cv', icon: SYS.doc },
    { name: s.contact[0], sub: s.contact[1], keys: s.contact[2], act: 'contact', icon: SYS.mail },
    { name: s.classic[0], sub: s.classic[1], keys: s.classic[2], href: classicFile(lang), icon: SYS.list },
  ];
  const all = [...projects.map((p, k) => ({ name: tr(p.name), sub: p.stack.join(' · '), keys: `${p.keys} ${tr(p.name)} ${tr(p.tagline)}`, go: k + 1, icon: appIcon(p) })), ...extra];
  results = q2 ? all.filter((r) => q2.split(/\s+/).every((w) => norm(`${r.keys} ${r.name} ${r.sub}`).includes(w))) : all;
  sel = 0; renderRes(q);
}
function renderRes(q) {
  $('#spres').innerHTML = results.length
    ? results.map((r, k) => `<button class="${k === sel ? 'sel' : ''}" data-k="${k}">${r.icon}<span><b>${esc(r.name)}</b><small>${esc(r.sub)}</small></span></button>`).join('')
    : `<div class="spempty">${esc(t.spEmpty(q))}</div>`;
}
function pickResult(r) {
  if (!r) return;
  closeAll();
  if (r.href) { if (r.blank) open(r.href, '_blank', 'noopener'); else location.href = r.href; }
  else if (r.go !== undefined) go(r.go);
  else if (r.act) toggle(r.act);
}
function openSpot() { closeAll(false); modal(true); $('#sp').classList.add('open'); const q = $('#spq'); q.value = ''; search(''); setTimeout(() => q.focus({ preventScroll: true }), 30); }

/* ── Notificación ── */
let toastT;
function notify({ icon, app: appName, title, body, goTo }) {
  const el = $('#toast');
  el.innerHTML = `${icon}<div><div class="t1"><span>${esc(appName)}</span><span>${t.nowT}</span></div><b>${esc(title)}</b><p>${esc(body)}</p></div>`;
  el.dataset.go = goTo ?? '';
  el.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 6500);
}

/* ── Dock: ampliación como en macOS (los iconos crecen y empujan a los vecinos) ── */
const DOCK_MAX = 1.55, DOCK_R = 120, DOCK_B = 50;
let dockRest = null, dockRaf = 0, dockX = 0;
const dockItems = () => $$(':scope > button, :scope > a', dock);
function measureDock() { dockRest = dockItems().map((b) => { const r = b.getBoundingClientRect(); return r.left + r.width / 2; }); }
// Solo transform (escala + desplazamiento): ningún recálculo de layout por fotograma
function applyMag() {
  dockRaf = 0;
  const s = scale(), items = dockItems();
  const m = items.map((b, k) => { const d = Math.abs(dockX - dockRest[k]) / s; return d < DOCK_R ? 1 + (DOCK_MAX - 1) * (Math.cos((Math.PI * d) / DOCK_R) + 1) / 2 : 1; });
  const extra = m.map((v) => DOCK_B * (v - 1));
  const E = extra.reduce((a, b) => a + b, 0);
  let acc = 0, k = 0;
  for (const el of dock.children) {
    if (items.includes(el)) {
      el.style.transform = `translate3d(${(acc + extra[k] / 2 - E / 2).toFixed(2)}px,0,0) scale(${m[k].toFixed(3)})`;
      el.style.setProperty('--m', m[k].toFixed(3));
      acc += extra[k]; k++;
    } else el.style.transform = `translate3d(${(acc - E / 2).toFixed(2)}px,0,0)`;
  }
  dock.style.setProperty('--grow', `${E.toFixed(1)}px`);
}
function resetDock() {
  for (const el of dock.children) { el.style.transform = ''; el.style.removeProperty('--m'); }
  dock.style.setProperty('--grow', '0px');
}
function bindDock() {
  const on = () => { measureDock(); dock.classList.add('mag'); screen.classList.add('docking'); };
  dock.addEventListener('pointerenter', (e) => { if (mode !== 'mac' || e.pointerType !== 'mouse') return; resetDock(); on(); });
  dock.addEventListener('pointermove', (e) => {
    if (mode !== 'mac' || e.pointerType !== 'mouse') return;
    if (!dockRest) on();
    dockX = e.clientX;
    if (!dockRaf) dockRaf = requestAnimationFrame(applyMag);
  });
  dock.addEventListener('pointerleave', () => {
    dockRest = null; cancelAnimationFrame(dockRaf); dockRaf = 0;
    dock.classList.remove('mag'); screen.classList.remove('docking');
    resetDock();
  });
}

/* ── Montaje (se repite al cambiar de idioma) ── */
function mount(animate) {
  app.innerHTML = chromeHTML();
  screen = $('#screen'); track = $('#track'); dock = $('#dock');
  overviewHTML();
  track.addEventListener('pointerdown', onDown);
  track.addEventListener('touchstart', onTouchStart, { passive: true });
  track.addEventListener('touchmove', onTouchMove, { passive: false });
  track.addEventListener('touchend', onTouchEnd);
  track.addEventListener('touchcancel', onTouchEnd);
  track.addEventListener('scroll', onScroll, { capture: true, passive: true });
  screen.addEventListener('wheel', onWheel, { passive: false });
  screen.addEventListener('click', onClick);
  ['#ov', '#sp', '#sheet'].forEach((s) => $(s).addEventListener('click', (e) => { if (e.target === $(s) || e.target.id === 'ovgrid' || e.target.id === 'ov-in') closeAll(); }));
  $('#filters').addEventListener('click', (e) => {
    const b = e.target.closest('[data-f]'); if (!b) return;
    filter = b.dataset.f;
    $$('#filters button').forEach((x) => x.setAttribute('aria-pressed', x === b));
    $$('#ovgrid .oc').forEach((c) => c.classList.toggle('dim', filter !== 'all' && !projects[+c.dataset.go - 1].cats.includes(filter)));
  });
  $('#spq').addEventListener('input', (e) => search(e.target.value));
  $('#spq').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(results.length - 1, sel + 1); renderRes(e.target.value); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); renderRes(e.target.value); }
    else if (e.key === 'Enter') pickResult(results[sel]);
  });
  $('#spres').addEventListener('click', (e) => { const b = e.target.closest('[data-k]'); if (b) pickResult(results[+b.dataset.k]); });
  $('#toast').addEventListener('click', () => { const el = $('#toast'); el.classList.remove('show'); if (el.dataset.go) go(+el.dataset.go); });
  // Móvil: la notificación se aparta deslizándola hacia arriba, como en iOS
  let ty = null;
  $('#toast').addEventListener('touchstart', (e) => { ty = e.touches[0].clientY; }, { passive: true });
  $('#toast').addEventListener('touchmove', (e) => { if (ty !== null && e.touches[0].clientY - ty < -14) { ty = null; $('#toast').classList.remove('show'); suppressClick = performance.now(); } }, { passive: true });
  swipeToClose($('#sheet-panel'), $('#sheet-body'));
  swipeToClose($('#ov-in'), $('#ov-in'));
  bindDock();
  applyMode();
  if (hinted) $('#hint').classList.add('gone');
  tick();
  render(animate);
}

/* ── Reloj ── */
function tick() {
  const c = $('#clock'); if (!c) return;
  const d = new Date();
  c.textContent = `${d.toLocaleDateString(t.locale, { weekday: 'short', day: 'numeric', month: 'short' }).replace(',', '')}  ${d.toLocaleTimeString(t.locale, { hour: '2-digit', minute: '2-digit' })}`;
}
setInterval(tick, 30000);

/* ── Arranque ── */
document.documentElement.lang = lang;
const start = SP.findIndex((s) => s.id === location.hash.slice(1));
i = start > 0 ? start : 0;
let ready = false;
const data = Promise.all([
  fetch('data/live.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
  loadAqua().catch(() => null),
]).then(([l, a]) => { if (l) live = { ...live, ...l }; aquaData = a; ready = true; });
await Promise.race([data, sleep(250)]);
const readyAtMount = ready;
mount(true);
if (!readyAtMount) data.then(() => render(false));
setTimeout(hideHint, 7000);
setTimeout(() => { pagerHinted = true; $('#pager')?.classList.remove('first'); }, 6000);
data.then(() => {
  // No sale en la imagen para compartir (?og). En el móvil llega un poco después, cuando ya se ha leído el nombre.
  if (live.lookit && !location.search.includes('og')) setTimeout(() => i === 0 && !anyOpen() && notify({ icon: appIcon(projects[1]), app: t.toastApp, title: t.toastTitle, body: t.toastBody(fmt(live.lookit.products), live.lookit.brands), goTo: 2 }), mode === 'phone' ? 3200 : 2600);
});
// El escritorio se asoma al siguiente para que se descubra el gesto
setTimeout(() => {
  if (i !== 0 || drag || anyOpen() || reduced()) return;
  track.style.transform = 'translate3d(-7%,0,0)';
  setTimeout(() => { if (i === 0 && !drag) track.style.transform = 'translate3d(0,0,0)'; }, 650);
}, 1600);
