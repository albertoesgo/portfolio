// Escritorio del portfolio: Mac en pantallas grandes, iOS en el móvil.
// Un gesto = un proyecto (como luciagascon.es). Enlaces directos: index.html#lookit
import { profile, experience, education, extras, skills, cv, filters, projects } from './data.js';
import { loadAqua, mountSimulator, mountHistory, mountHorizon, sparkline } from './aqua.js';

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nf = (n) => n.toLocaleString('es-ES');
const ICON = {
  home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.2 2.8 11h2.7v9h5v-6h3v6h5v-9h2.7z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5zm2.3-.3 6.7 5.3 6.7-5.3z"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2.5h8l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V4A1.5 1.5 0 0 1 6 2.5zm7.5 1v4.5H18zM8 12h8v1.5H8zm0 3.5h8V17H8z"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20.5c0-4.1 3.6-7 8-7s8 2.9 8 7z"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="5" width="16" height="2.4" rx="1.2"/><rect x="4" y="10.8" width="16" height="2.4" rx="1.2"/><rect x="4" y="16.6" width="11" height="2.4" rx="1.2"/></svg>',
};
const glyph = (name, bg) => `<span class="ai" style="--plate:${bg}">${ICON[name]}</span>`;
const SYS = {
  home: glyph('home', 'linear-gradient(160deg,#8e8e93,#48484a)'),
  grid: glyph('grid', 'linear-gradient(160deg,#5e5ce6,#3634a3)'),
  search: glyph('search', 'linear-gradient(160deg,#64d2ff,#0a84ff)'),
  mail: glyph('mail', 'linear-gradient(160deg,#5ac8fa,#007aff)'),
  doc: `<span class="ai" style="--plate:linear-gradient(160deg,#f2f2f7,#c7c7cc);color:#8e8e93">${ICON.doc.replace('<svg', '<svg style="color:#8e8e93"')}</span>`,
  person: glyph('person', 'linear-gradient(160deg,#34c3c8,#0a63c9)'),
};
const appIcon = (p) => `<span class="ai${p.plate ? ' pad' : ''}${p.wide ? ' wide' : ''}" style="--plate:${p.plate || 'transparent'}"><img src="${p.logo}" alt="" draggable="false"></span>`;
const shot = (n) => `img/shots/${n}.webp`;
const SP = [{ id: 'inicio', name: 'Inicio', wall: 'home' }, ...projects];
const CV_HINT = { ai: 'Ofertas de ML, datos o IA', automation: 'IA aplicada, automatización y consultoría', fullstack: 'Desarrollo de software y producto' };

let live = { lookit: { products: 9000, brands: 24 }, detemporada: null };
let aquaData = null;
let mode = 'mac', i = 0, slideTimer = null, drag = null, hinted = false;

/* ── Estructura ── */
const app = document.getElementById('app');
app.innerHTML = `
  <a class="skip" href="clasica.html">Ir a la vista clásica</a>
  <main class="screen" id="screen" aria-label="Escritorio de ${esc(profile.name)}">
    <div class="walls">${SP.map((s) => `<div class="wall w-${s.wall}"></div>`).join('')}</div>
    <nav class="menubar" aria-label="Menú">
      <div class="l"><span class="mono" aria-hidden="true">${profile.initials}</span><b>${esc(profile.short)}</b>
        <button data-act="overview">Proyectos</button><button data-act="about">Sobre mí</button><button data-act="cv">CV</button><button data-act="contact">Contacto</button></div>
      <div class="r"><a href="clasica.html">Vista clásica</a><button data-act="spot" aria-label="Buscar (⌘K)">${ICON.search.replace('<svg', '<svg width="14" height="14"')}</button><span id="clock"></span></div>
    </nav>
    <div class="track" id="track"></div>
    <div class="pager" id="pager" aria-hidden="true"></div>
    <div class="hint" id="hint"></div>
    <nav class="dock" id="dock" aria-label="Dock"></nav>
    <div class="overlay ov" id="ov" role="dialog" aria-label="Todos los proyectos">
      <div class="ov-head"><h2>Proyectos</h2><div class="seg" id="filters" role="group" aria-label="Filtrar"></div></div>
      <div class="ov-grid" id="ovgrid"></div>
    </div>
    <div class="overlay sp" id="sp" role="dialog" aria-label="Buscar">
      <div class="spbox"><div class="spin">${ICON.search}<input id="spq" placeholder="Busca un proyecto o una tecnología: PyTorch, 3D, Supabase…" autocomplete="off" aria-label="Buscar"></div><div class="spres" id="spres"></div></div>
    </div>
    <div class="overlay sheetwrap" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <div class="sheet"><div class="sheet-head"><b id="sheet-title"></b><button data-act="close" aria-label="Cerrar">×</button></div><div class="sheet-body" id="sheet-body"></div></div>
    </div>
    <button class="toast" id="toast" aria-live="polite"></button>
  </main>`;
const screen = $('#screen'), track = $('#track');

function homeHTML() {
  const L = live.lookit, D = live.detemporada;
  const total = aquaData ? aquaData.total : null;
  return `
  <section class="space" data-i="0" aria-label="Inicio"><div class="home">
    <div class="widget w-profile"><div class="avatar" aria-hidden="true">${profile.initials}</div><div>
      <h1>${esc(profile.name)}</h1>
      <p class="role">${esc(profile.role)} · ${esc(profile.location)}</p>
      <p class="now">${esc(profile.headline)}</p>
      <div class="actions"><button class="btn" data-act="cv">${ICON.doc.replace('<svg', '<svg width="15" height="15"')}CV</button><button class="btn sec" data-act="about">Sobre mí</button><button class="btn sec" data-act="overview">Proyectos</button><button class="btn sec" data-act="contact">Contacto</button></div>
    </div></div>
    <button class="widget w-wide" data-go="1">
      <div class="wl">AquaAndalucía · embalses de Málaga</div>
      <h3>${total ? `${nf(total.normal[0])} % → ${nf(total.normal[90])} %` : 'Predicción a 90 días'}</h3>
      <p>Llenado de los 7 embalses en el último dato y dentro de 90 días con un año normal, según mi modelo. <b>Prueba otros escenarios.</b></p>
      <div class="spark">${aquaData ? sparkline(aquaData) : ''}</div>
    </button>
    <button class="widget" data-go="2"><div class="wl"><i class="pulse"></i>LOOKIT</div><h3>${nf(L.products)} prendas</h3><p>de ${L.brands} marcas españolas, leídas de lookit.es.</p></button>
    ${D ? `<button class="widget" data-go="5"><div class="wl"><i class="pulse" style="background:var(--orange)"></i>DeTemporada</div><h3>${esc(D.month[0].toUpperCase() + D.month.slice(1))}</h3><p>En ${esc(D.region)}: ${D.items.map(esc).join(', ')}.</p></button>` : ''}
    <button class="widget w-tl" data-act="about"><div class="wl">Trayectoria</div><ol class="tl">
      <li><small>2026 –</small><span><b>MicroCAD</b> · IA y automatización</span></li>
      <li><small>2025 – 2026</small><span><b>Babel</b> · desarrollo (prácticas)</span></li>
      <li><small>2024 – 2025</small><span><b>Erasmus+</b> · Gdańsk</span></li>
      <li><small>2021 – 2026</small><span><b>Ingeniería Informática</b> · UMA</span></li>
    </ol></button>
    <div class="icons">${projects.map((p, k) => `<button class="dicon" data-go="${k + 1}">${appIcon(p)}<span>${esc(p.name)}</span></button>`).join('')}
      <button class="dicon" data-act="cv">${SYS.doc}<span>CV.pdf</span></button><button class="dicon" data-act="about">${SYS.person}<span>Sobre mí</span></button></div>
  </div></section>`;
}

function projectHTML(p, k) {
  const stats = p.id === 'lookit' ? [['24', 'marcas españolas'], [nf(live.lookit.products), 'prendas'], ['1 h', 'entre actualizaciones']] : p.stats;
  const slides = `<div class="shot">
      ${p.shots.map(([n, fx]) => `<div class="slide ${fx}"><img src="${shot(n)}" alt="Captura de ${esc(p.name)}" loading="lazy" draggable="false"></div>`).join('')}
      ${p.phone ? `<div class="slide m phone-only"><img src="${shot(p.phone)}" alt="${esc(p.name)} en el móvil" loading="lazy" draggable="false"></div>` : ''}
      <div class="pips">${p.shots.map(() => '<i></i>').join('')}</div>
    </div>`;
  const media = p.aqua
    ? `<div class="mtabs"><div class="seg" role="group" aria-label="Contenido">${[['sim', 'Simulador'], ['hist', 'Histórico'], ['prec', 'Precisión'], ['app', 'La app']].map(([k2, l], j) => `<button data-pane="${k2}" aria-pressed="${j === 0}">${l}</button>`).join('')}</div></div>
       <div class="pane on" data-p="sim"></div><div class="pane" data-p="hist"></div><div class="pane" data-p="prec"></div>
       <div class="pane" data-p="app">${slides}<p class="cap">Capturas reales de la app del TFG (React + FastAPI)</p></div>`
    : `${slides}${p.phone ? `<div class="phoneshot"><img src="${shot(p.phone)}" alt="" loading="lazy" draggable="false"></div>` : ''}<p class="cap">Captura real · ${esc(p.url)}</p>`;
  return `
  <section class="space" data-i="${k + 1}" aria-label="${esc(p.name)}"><div class="win">
    <div class="titlebar"><div class="lights"><button class="c" data-act="home" aria-label="Volver a Inicio"></button><button class="m" data-act="overview" aria-label="Ver todos los proyectos"></button><button class="x" data-act="max" aria-label="Ampliar ventana"></button></div><div class="ttl">${esc(p.name)}<small>${esc(p.url)}</small></div><div></div></div>
    <div class="wbody">
      <div class="media" style="--tint:${p.tint}">${media}</div>
      <div class="info">
        <div class="kind">${esc(p.kind)}</div>
        <h2>${esc(p.name)}</h2>
        <p class="tag">${esc(p.tagline)}</p>
        <div class="stats">${stats.map(([a, b]) => `<div class="stat"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
        <div class="group"><div class="gh">Qué demuestra</div><ul>${p.proves.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
        <div class="stack">${p.stack.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
        <div class="actions"><button class="btn" data-act="case">Caso de estudio</button>${p.link ? `<a class="btn sec" href="${p.link}" target="_blank" rel="noopener">${esc(p.linkLabel)} ↗</a>` : ''}</div>
      </div>
    </div>
  </div></section>`;
}

function render() {
  track.innerHTML = homeHTML() + projects.map(projectHTML).join('');
  if (aquaData) {
    const sp = track.querySelector('[data-i="1"]');
    mountSimulator($('[data-p="sim"]', sp), aquaData);
    mountHistory($('[data-p="hist"]', sp), aquaData);
    mountHorizon($('[data-p="prec"]', sp));
  }
  go(i, true);
}

$('#dock').innerHTML =
  `<button data-go="0" aria-label="Inicio">${SYS.home}<span class="tip">Inicio</span></button>` +
  projects.map((p, k) => `<button class="only-mac" data-go="${k + 1}" aria-label="${esc(p.name)}">${appIcon(p)}<span class="tip">${esc(p.name)}</span></button>`).join('') +
  '<span class="sepv"></span>' +
  `<button data-act="overview" aria-label="Todos los proyectos">${SYS.grid}<span class="tip">Todos los proyectos</span></button>` +
  `<button data-act="about" aria-label="Sobre mí">${SYS.person}<span class="tip">Sobre mí</span></button>` +
  `<button data-act="spot" aria-label="Buscar">${SYS.search}<span class="tip">Buscar (⌘K)</span></button>` +
  `<button data-act="contact" aria-label="Contacto">${SYS.mail}<span class="tip">Contacto</span></button>`;
$('#pager').innerHTML = SP.map(() => '<i></i>').join('');

/* ── Modo y escala ── */
const mq = matchMedia('(max-width: 760px)');
function setMode() {
  mode = mq.matches ? 'phone' : 'mac';
  document.body.classList.toggle('mac', mode === 'mac');
  document.body.classList.toggle('phone', mode === 'phone');
  const s = mode === 'mac' ? Math.min(1.25, Math.max(0.72, innerWidth / 1440)) : 1;
  document.documentElement.style.setProperty('--s', s);
  $('#hint').textContent = mode === 'mac' ? 'Desliza con dos dedos, usa la rueda o ← → para pasar de proyecto' : 'Desliza para pasar de proyecto';
  go(i, true);
}
const scale = () => (mode === 'mac' ? +getComputedStyle(document.documentElement).getPropertyValue('--s') || 1 : 1);
mq.addEventListener('change', setMode);
addEventListener('resize', () => { if (mode === 'mac') setMode(); });

/* ── Navegación ── */
function go(n, instant) {
  i = Math.max(0, Math.min(SP.length - 1, n));
  track.classList.toggle('drag', !!instant);
  track.style.transform = `translate3d(${-i * 100}%,0,0)`;
  if (instant) requestAnimationFrame(() => track.classList.remove('drag'));
  document.querySelectorAll('.wall').forEach((w, k) => w.classList.toggle('on', k === i));
  document.querySelectorAll('#pager i').forEach((d, k) => d.classList.toggle('on', k === i));
  document.querySelectorAll('#dock [data-go]').forEach((b) => b.classList.toggle('on', +b.dataset.go === i));
  track.querySelectorAll('.space').forEach((s, k) => { s.inert = k !== i; });
  const id = SP[i].id;
  if ((location.hash.slice(1) || 'inicio') !== id) history.replaceState(null, '', i ? `#${id}` : location.pathname + location.search);
  document.title = i ? `${SP[i].name} · ${profile.name}` : `${profile.name} · ${profile.role}`;
  startSlides();
  if (i > 0 && !hinted) { hinted = true; $('#hint').classList.add('gone'); }
}
function startSlides() {
  clearInterval(slideTimer);
  track.querySelectorAll('.slide.on').forEach((s) => s.classList.remove('on'));
  const sp = track.children[i];
  if (!sp || i === 0) return;
  const appPane = sp.querySelector('[data-p="app"]');
  if (appPane && !appPane.classList.contains('on')) return;
  let slides = [...sp.querySelectorAll('.slide')].filter((s) => mode === 'phone' || !s.classList.contains('phone-only'));
  if (mode === 'phone') { const m = slides.find((s) => s.classList.contains('m')); if (m) slides = [m, ...slides.filter((s) => s !== m && !s.classList.contains('tall'))]; }
  const pips = [...sp.querySelectorAll('.pips i')];
  let k = 0;
  const show = () => { slides.forEach((s, j) => s.classList.toggle('on', j === k)); pips.forEach((p, j) => p.classList.toggle('on', j === k % pips.length)); };
  show();
  if (slides.length > 1) slideTimer = setInterval(() => { k = (k + 1) % slides.length; show(); }, 6000);
}
addEventListener('hashchange', () => { const k = SP.findIndex((s) => s.id === location.hash.slice(1)); if (k >= 0 && k !== i) go(k); });

/* ── Gestos: dedo o ratón ── */
const anyOpen = () => ['#ov', '#sp', '#sheet'].some((s) => $(s).classList.contains('open'));
track.addEventListener('pointerdown', (e) => {
  if (anyOpen() || e.target.closest('button, a, input, select, svg, .seg') || (mode === 'mac' && e.target.closest('.info'))) return;
  drag = { x: e.clientX, y: e.clientY, dx: 0, axis: null, id: e.pointerId, t: performance.now() };
});
addEventListener('pointermove', (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = (e.clientX - drag.x) / scale(), dy = (e.clientY - drag.y) / scale();
  if (!drag.axis && Math.hypot(dx, dy) > 8) {
    drag.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    if (drag.axis === 'x') { track.classList.add('drag'); try { track.setPointerCapture(drag.id); } catch { /* sin captura */ } }
  }
  if (drag.axis !== 'x') return;
  const edge = (i === 0 && dx > 0) || (i === SP.length - 1 && dx < 0) ? 0.35 : 1;
  drag.dx = dx;
  track.style.transform = `translate3d(calc(${-i * 100}% + ${dx * edge}px),0,0)`;
});
addEventListener('pointerup', (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const d = drag; drag = null; track.classList.remove('drag');
  if (d.axis !== 'x') return;
  const v = d.dx / (performance.now() - d.t);
  go(d.dx < -70 || v < -0.45 ? i + 1 : d.dx > 70 || v > 0.45 ? i - 1 : i);
});
addEventListener('pointercancel', () => { if (drag) { drag = null; track.classList.remove('drag'); go(i); } });

/* ── Trackpad y rueda: un gesto = un proyecto; pellizcar = vista general ── */
let acc = 0, accT = 0, lock = false;
screen.addEventListener('wheel', (e) => {
  if (e.ctrlKey) { e.preventDefault(); if (e.deltaY > 2) openOv(); else if (e.deltaY < -2) closeAll(); return; }
  if (anyOpen()) return;
  const horiz = Math.abs(e.deltaX) > Math.abs(e.deltaY);
  if (!horiz && (mode === 'phone' || e.target.closest('.info, .viz, .home'))) return;
  e.preventDefault();
  const now = performance.now();
  if (now - accT > 220) acc = 0;
  accT = now;
  if (lock) return;
  acc += horiz ? e.deltaX : e.deltaY;
  if (Math.abs(acc) > 60) { go(i + Math.sign(acc)); acc = 0; lock = true; setTimeout(() => (lock = false), 700); }
}, { passive: false });

/* ── Teclado ── */
addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSpot(); return; }
  if (e.key === 'Escape') { closeAll(); return; }
  if (anyOpen() || (e.target instanceof Element && e.target.closest('input, select, textarea'))) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); openOv(); }
  else if (/^[1-6]$/.test(e.key)) go(+e.key - 1);
});

/* ── Acciones ── */
screen.addEventListener('click', (e) => {
  const pane = e.target.closest('[data-pane]');
  if (pane) {
    const media = pane.closest('.media');
    media.querySelectorAll('[data-pane]').forEach((b) => b.setAttribute('aria-pressed', b === pane));
    media.querySelectorAll('.pane').forEach((p) => p.classList.toggle('on', p.dataset.p === pane.dataset.pane));
    startSlides();
    return;
  }
  const g = e.target.closest('[data-go]');
  if (g) { closeAll(); go(+g.dataset.go); return; }
  const a = e.target.closest('[data-act]');
  if (!a) return;
  ({
    overview: openOv, spot: openSpot, about: () => sheet('Sobre mí', aboutHTML()), cv: () => sheet('Currículum', cvHTML()),
    contact: () => sheet('Contacto', contactHTML()), close: closeAll, home: () => go(0),
    max: () => track.children[i].classList.toggle('max'),
    case: () => { const p = projects[i - 1]; if (p) sheet(`Caso de estudio · ${p.name}`, caseHTML(p)); },
    copy: async () => {
      try { await navigator.clipboard.writeText(profile.email); a.textContent = 'Copiado'; }
      catch { getSelection().selectAllChildren($('#sheet code')); a.textContent = 'Selecciónalo y cópialo'; }
    },
  })[a.dataset.act]?.();
});
$('#toast').addEventListener('click', () => { const t = $('#toast'); t.classList.remove('show'); if (t.dataset.go) go(+t.dataset.go); });

/* ── Hojas ── */
function sheet(title, html) {
  closeAll();
  $('#sheet-title').textContent = title;
  $('#sheet-body').innerHTML = html;
  $('#sheet-body').scrollTop = 0;
  $('#sheet').classList.add('open');
  setTimeout(() => $('#sheet [data-act="close"]').focus({ preventScroll: true }), 50);
}
const li = (b, small, span) => `<div class="li"><b>${esc(b)}</b>${small ? `<small>${esc(small)}</small>` : ''}${span ? `<span>${esc(span)}</span>` : ''}</div>`;
function aboutHTML() {
  return `<h2>${esc(profile.name)}</h2><p class="lead">${esc(profile.role)} · ${esc(profile.location)}</p>
    ${profile.bio.map((p) => `<p>${esc(p)}</p>`).join('')}
    <h3>Cómo trabajo con IA</h3><p>${esc(profile.aiWork)}</p>
    <h3>Experiencia</h3><div class="list">${experience.map((e) => li(`${e.role} · ${e.org}`, e.date, e.text)).join('')}</div>
    <h3>Formación</h3><div class="list">${education.map((e) => li(e.title, e.date, e.org)).join('')}</div>
    <h3>Habilidades</h3><div class="list">${skills.map(([k, v]) => li(k, '', v)).join('')}</div>
    <h3>Idiomas y voluntariado</h3><div class="list">${extras.map(([k, v]) => li(k, '', v)).join('')}</div>
    <div class="actions" style="margin-top:20px"><button class="btn" data-act="cv">Descargar CV</button><a class="btn sec" href="${profile.links.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a><a class="btn sec" href="${profile.links.github}" target="_blank" rel="noopener">GitHub ↗</a></div>`;
}
function caseHTML(p) {
  const c = p.case;
  return `<h2>${esc(p.name)}</h2><p class="lead">${esc(p.tagline)}</p>
    <h3>El problema</h3><p>${esc(c.problem)}</p>
    <h3>Qué hice</h3><p>${esc(c.did)}</p>
    <h3>Decisiones</h3><ul>${c.decisions.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
    <h3>Lo que no salió bien</h3><p>${esc(c.wrong)}</p>
    <h3>Resultado</h3><p>${esc(c.result)}</p>
    <h3>Siguiente paso</h3><p>${esc(c.next)}</p>
    <div class="stack" style="margin-top:18px">${p.stack.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
    ${p.link ? `<div class="actions" style="margin-top:16px"><a class="btn" href="${p.link}" target="_blank" rel="noopener">Abrir ${esc(p.linkLabel)} ↗</a></div>` : ''}`;
}
function cvHTML() {
  return `<h2>Elige la versión</h2><p class="lead">El mismo CV, ordenado según el tipo de puesto. Una página, en español o en inglés.</p>
    <div class="cvgrid">${cv.map((c) => `<div class="cvcard"><b>${esc(c.label)}</b><span style="font-size:13px;color:var(--label2)">${esc(CV_HINT[c.key])}</span>
      <div class="actions"><a class="btn" href="cv/${c.key}/Alberto_Estrada_Gomez_CV_ES.pdf" download>ES</a><a class="btn sec" href="cv/${c.key}/Alberto_Estrada_Gomez_CV_EN.pdf" download>EN</a></div></div>`).join('')}</div>`;
}
function contactHTML() {
  return `<h2>Hablemos</h2><p class="lead">${esc(profile.location)} · en español o en inglés.</p>
    <div class="copyrow"><code>${esc(profile.email)}</code><button class="btn sec" data-act="copy">Copiar</button><a class="btn sec" href="mailto:${profile.email}">Escribir</a></div>
    <div class="actions" style="margin-top:14px"><a class="btn" href="${profile.links.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a><a class="btn sec" href="${profile.links.github}" target="_blank" rel="noopener">GitHub ↗</a></div>`;
}

/* ── Vista general ── */
let filter = 'all';
$('#filters').innerHTML = filters.map(([k, l]) => `<button data-f="${k}" aria-pressed="${k === 'all'}">${l}</button>`).join('');
$('#ovgrid').innerHTML = projects.map((p, k) => `<button class="oc" data-go="${k + 1}" data-cats="${p.cats.join(' ')}"><div class="th"><img src="${shot(p.shots[0][0])}" alt="" loading="lazy">${appIcon(p)}</div><b>${esc(p.name)}</b><span>${esc(p.tagline)}</span></button>`).join('');
$('#filters').addEventListener('click', (e) => {
  const b = e.target.closest('[data-f]'); if (!b) return;
  filter = b.dataset.f;
  $('#filters').querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b));
  $('#ovgrid').querySelectorAll('.oc').forEach((c) => c.classList.toggle('dim', filter !== 'all' && !c.dataset.cats.split(' ').includes(filter)));
});
function openOv() { closeAll(); $('#ov').classList.add('open'); }
function closeAll() { ['#ov', '#sp', '#sheet'].forEach((s) => $(s).classList.remove('open')); }
['#ov', '#sp', '#sheet'].forEach((s) => $(s).addEventListener('click', (e) => { if (e.target === $(s)) closeAll(); }));

/* ── Spotlight ── */
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const EXTRA = [
  { name: 'Sobre mí', sub: 'Experiencia, formación, habilidades', keys: 'sobre mi experiencia microcad babel trabajo universidad uma gdansk erasmus formacion idiomas ingles habilidades', act: 'about', icon: SYS.person },
  { name: 'CV', sub: 'IA y datos · Automatización · Full-stack · ES / EN', keys: 'cv curriculum pdf descargar resume', act: 'cv', icon: SYS.doc },
  { name: 'Contacto', sub: 'Correo, LinkedIn y GitHub', keys: 'contacto email correo linkedin github', act: 'contact', icon: SYS.mail },
  { name: 'Vista clásica', sub: 'Todo el contenido en una página', keys: 'vista clasica texto accesible pagina', href: 'clasica.html', icon: glyph('list', 'linear-gradient(160deg,#8e8e93,#48484a)') },
];
let sel = 0, results = [];
function search(q) {
  const t = norm(q.trim());
  const all = [...projects.map((p, k) => ({ name: p.name, sub: p.stack.join(' · '), keys: `${p.keys} ${p.name} ${p.tagline}`, go: k + 1, icon: appIcon(p) })), ...EXTRA];
  results = t ? all.filter((r) => t.split(/\s+/).every((w) => norm(`${r.keys} ${r.name}`).includes(w))) : all;
  sel = 0; renderRes(q);
}
function renderRes(q) {
  $('#spres').innerHTML = results.length
    ? results.map((r, k) => `<button class="${k === sel ? 'sel' : ''}" data-k="${k}">${r.icon}<span><b>${esc(r.name)}</b><small>${esc(r.sub)}</small></span></button>`).join('')
    : `<div class="spempty">Nada con «${esc(q)}». Prueba con una tecnología (PyTorch, three.js, Supabase) o un tema (sequía, moda, 3D).</div>`;
}
function pick(r) {
  if (!r) return;
  closeAll();
  if (r.href) location.href = r.href;
  else if (r.go !== undefined) go(r.go);
  else screen.querySelector(`[data-act="${r.act}"]`)?.click();
}
function openSpot() { closeAll(); $('#sp').classList.add('open'); const q = $('#spq'); q.value = ''; search(''); setTimeout(() => q.focus({ preventScroll: true }), 30); }
$('#spq').addEventListener('input', (e) => search(e.target.value));
$('#spq').addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(results.length - 1, sel + 1); renderRes(e.target.value); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); renderRes(e.target.value); }
  else if (e.key === 'Enter') pick(results[sel]);
});
$('#spres').addEventListener('click', (e) => { const b = e.target.closest('[data-k]'); if (b) pick(results[+b.dataset.k]); });

/* ── Notificación ── */
let toastT;
function notify({ icon, app: appName, title, body, goTo }) {
  const t = $('#toast');
  t.innerHTML = `${icon}<div><div class="t1"><span>${esc(appName)}</span><span>ahora</span></div><b>${esc(title)}</b><p>${esc(body)}</p></div>`;
  t.dataset.go = goTo ?? '';
  t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 6500);
}

/* ── Reloj y Dock ── */
const tick = () => { const d = new Date(); $('#clock').textContent = `${d.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }).replace(',', '')}  ${d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`; };
tick(); setInterval(tick, 30000);
const dock = $('#dock');
dock.addEventListener('pointermove', (e) => {
  if (mode !== 'mac' || e.pointerType !== 'mouse') return;
  dock.querySelectorAll('button').forEach((b) => { const r = b.getBoundingClientRect(); const d = Math.abs(e.clientX - (r.left + r.width / 2)) / scale(); b.style.transform = `scale(${1 + Math.max(0, 1 - d / 140) * 0.42})`; });
});
dock.addEventListener('pointerleave', () => dock.querySelectorAll('button').forEach((b) => (b.style.transform = '')));

/* ── Arranque ── */
setTimeout(() => { hinted = true; $('#hint').classList.add('gone'); }, 7000);
const start = SP.findIndex((s) => s.id === location.hash.slice(1));
i = start > 0 ? start : 0;
setMode();
render();
Promise.all([
  fetch('data/live.json').then((r) => (r.ok ? r.json() : null)).catch(() => null),
  loadAqua().catch(() => null),
]).then(([l, a]) => {
  if (l) live = { ...live, ...l };
  aquaData = a;
  render();
  // En el móvil la notificación taparía el nombre al entrar; y no sale en la imagen para compartir (?og)
  if (mode === 'mac' && !location.search.includes('og')) setTimeout(() => notify({ icon: appIcon(projects[1]), app: 'LOOKIT', title: 'Catálogo actualizado', body: `${nf(live.lookit.products)} prendas de ${live.lookit.brands} marcas españolas. Toca para verlo.`, goTo: 2 }), 2500);
});
// El escritorio se asoma al siguiente para que se descubra el gesto
setTimeout(() => {
  if (i !== 0 || drag || anyOpen()) return;
  track.style.transform = 'translate3d(-6%,0,0)';
  setTimeout(() => { if (i === 0 && !drag) track.style.transform = 'translate3d(0,0,0)'; }, 650);
}, 1400);
