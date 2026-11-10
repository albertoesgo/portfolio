#!/usr/bin/env node
// Prepara el sitio: copia el CV público, recoge datos en vivo y genera la vista clásica en ES y EN.
//   node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { profile, experience, education, extras, skills, projects, cvFile } from '../js/data.js';
import { UI, pick, classicFile } from '../js/i18n.js';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROYECTOS = join(SITE, '..', '..');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Perfil del CV que se publica en la web (el resto de versiones son solo para Alberto)
const PUBLIC_CV = 'automation';

// 1. Un solo CV descargable (sin teléfono), en español e inglés
rmSync(join(SITE, 'cv'), { recursive: true, force: true });
mkdirSync(join(SITE, 'cv'), { recursive: true });
for (const lang of ['es', 'en']) {
  const src = join(PROYECTOS, 'cv', 'out-web', PUBLIC_CV, `Alberto_Estrada_Gomez_CV_${lang.toUpperCase()}.pdf`);
  if (!existsSync(src)) { console.log(`⚠ falta ${src} (ejecuta node build.mjs en ~/Proyectos/cv)`); continue; }
  copyFileSync(src, join(SITE, cvFile(lang)));
}
console.log(`✓ CV público (${PUBLIC_CV}) copiado`);

// 2. Datos en vivo (con valores de respaldo si no hay red)
const live = { built: new Date().toISOString().slice(0, 10) };
try {
  const r = await fetch('https://lookit.es/api/catalog', { signal: AbortSignal.timeout(15000) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const d = await r.json();
  live.lookit = { products: d.products.length, brands: new Set(d.products.map((p) => p.brand)).size, updatedAt: d.updatedAt };
  console.log(`✓ LOOKIT: ${live.lookit.products} prendas de ${live.lookit.brands} marcas`);
} catch {
  // Sin respuesta: se conserva la última cifra buena (y si no hay, valores prudentes)
  let prev = null;
  try { prev = JSON.parse(readFileSync(join(SITE, 'data', 'live.json'), 'utf8')).lookit; } catch { /* primera vez */ }
  live.lookit = prev?.products ? prev : { products: 9000, brands: 24, updatedAt: null };
  console.log(`⚠ LOOKIT no responde; mantengo ${live.lookit.products} prendas del último build`);
}
try {
  const catalog = JSON.parse(readFileSync(join(PROYECTOS, 'DeTemporada', 'DeTemporada', 'src', 'data', 'catalog.json'), 'utf8'));
  const month = new Date().getMonth() + 1;
  const inSeason = catalog.filter((p) => !p.yearRound && p.north.includes(month) && (p.regiones.includes('andalucia') || p.regiones.includes('all')));
  // Primero lo que lleva un lugar andaluz en el nombre, luego lo genérico de huerta y frutal
  const andaluz = /málaga|granada|almería|huelva|cádiz|sevilla|córdoba|jaén|costa tropical|andaluc/i;
  const otraRegion = /murcia|valencia|xúquer|navarra|galicia|asturias|canarias|aragón|rioja|extremadura|catalu|lleida|bierzo/i;
  const score = (p) => (andaluz.test(p.nombre) ? 0 : ['frutas', 'verduras'].includes(p.categoria) ? 1 : 2);
  const pickItems = inSeason.filter((p) => !otraRegion.test(p.nombre)).sort((a, b) => score(a) - score(b)).slice(0, 4);
  live.detemporada = { month: MESES[month - 1], region: 'Andalucía', count: inSeason.length, items: pickItems.map((p) => p.nombre.replace(/\s*\(.*\)$/, '')) };
  console.log(`✓ DeTemporada: ${live.detemporada.count} productos en ${live.detemporada.month}`);
} catch {
  console.log('⚠ DeTemporada: no encuentro el catálogo');
}
writeFileSync(join(SITE, 'data', 'live.json'), JSON.stringify(live));

// 3. Vista clásica: una página editorial por idioma (buscadores, lectores de pantalla y quien prefiera leer)
const CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function classic(lang) {
  const t = UI[lang], k = t.k, c = t.c, tr = (x) => pick(x, lang);
  const grp = lang === 'es' ? '.' : ',';
  const n = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, grp);
  const stats = (p) => {
    let s = tr(p.stats);
    if (p.id === 'lookit' && live.lookit) s = s.map((x, j) => (j === 1 ? [n(live.lookit.products), x[1]] : x));
    return s;
  };
  const updated = new Date(live.built).toLocaleDateString(t.locale, { day: 'numeric', month: 'long', year: 'numeric' });
  const project = (p, i) => `
    <article class="proj" id="${p.id}" style="--tint:${p.tint}">
      <header class="ph">
        <img class="logo${p.plate ? ' pad' : ''}" src="${p.logo}" alt="" width="64" height="64" style="background:${p.plate || 'transparent'}">
        <div><p class="kind"><span class="num">${String(i + 1).padStart(2, '0')}</span> ${esc(tr(p.kind))}${p.live ? ` <span class="live"><i></i>${t.live}</span>` : ''}</p><h3>${esc(tr(p.name))}</h3></div>
      </header>
      <p class="tagline">${esc(tr(p.tagline))}</p>
      <figure class="shot"><img src="img/shots/${p.shots[0][0]}.webp" alt="${esc(t.shotOf(tr(p.name)))}" loading="lazy" width="1280" height="800"></figure>
      <dl class="stats">${stats(p).map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>
      <div class="cols">
        <div>
          <p class="myrole"><b>${c.role}</b> ${esc(tr(p.case.role))}</p>
          <h4>${c.problem}</h4><p>${esc(tr(p.case.problem))}</p>
          <h4>${c.solution}</h4><p>${esc(tr(p.case.solution))}</p>
        </div>
        <aside>
          <h4>${t.highlights}</h4><ul class="checks">${tr(p.proves).map((x) => `<li>${CHECK}<span>${esc(x)}</span></li>`).join('')}</ul>
        </aside>
      </div>
      <h4>${c.arch}</h4><dl class="arch">${tr(p.case.arch).map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>
      <h4>${c.decisions}</h4><ol class="dec">${tr(p.case.decisions).map((d) => `<li>${esc(d)}</li>`).join('')}</ol>
      <h4>${c.impact}</h4><ul class="checks">${tr(p.case.impact).map((d) => `<li>${CHECK}<span>${esc(d)}</span></li>`).join('')}</ul>
      <h4>${c.next}</h4><p>${esc(tr(p.case.next))}</p>
      <footer class="pf"><p class="stack">${p.stack.map((x) => `<span>${esc(x)}</span>`).join('')}</p>${p.link ? `<a class="btn sec" href="${p.link}" rel="noopener">${esc(t.open(p.linkLabel))}</a>` : ''}</footer>
    </article>`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(profile.name)} · ${esc(tr(profile.role))}</title>
<meta name="description" content="${esc(tr(profile.headline))}">
<meta name="robots" content="noindex, nofollow">
<link rel="alternate" hreflang="es" href="clasica.html">
<link rel="alternate" hreflang="en" href="classic.html">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="theme-color" content="#f2f2f7" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
<script>try { var t = localStorage.getItem('ae-theme'); if (t === 'dark' || t === 'light') document.documentElement.dataset.theme = t; } catch (e) {}</script>
<style>@font-face { font-family: 'Inter'; src: url(fonts/inter-latin-ext.woff2) format('woff2'); font-weight: 100 900; font-display: swap; }</style>
<link rel="stylesheet" href="css/clasica.css">
</head>
<body>
<header class="bar">
  <div class="in">
    <a class="me" href="#top"><span class="mono">${profile.initials}</span>${esc(profile.short)}</a>
    <nav aria-label="${t.menu}"><a href="#projects">${t.projects}</a><a href="#experience">${t.experience}</a><a href="#about">${t.about}</a><a href="#contact">${t.contact}</a></nav>
    <div class="tools">
      <a class="pill" href="${classicFile(t.other)}" hreflang="${t.other}" lang="${t.other}" title="${t.langBtn}" data-lang="${t.other}">${UI[t.other].short}</a>
      <button class="ico" id="theme" type="button" aria-label="${t.toDark}" data-dark="${t.toDark}" data-light="${t.toLight}"></button>
      <a class="desk" href="./?lang=${lang}">${k.viewDesktop}</a>
    </div>
  </div>
</header>
<main class="wrap" id="top">
  <section class="hero">
    <div class="avatar" aria-hidden="true">${profile.initials}</div>
    <p class="role">${esc(tr(profile.role))} · ${esc(tr(profile.location))}</p>
    <h1>${esc(profile.name)}</h1>
    <p class="lead">${esc(tr(profile.headline))}</p>
    <p class="cta"><a class="btn" href="${cvFile(lang)}" rel="noopener">${t.downloadCV}</a><a class="btn sec" href="mailto:${profile.email}">${t.write}</a><a class="btn sec" href="${profile.links.linkedin}" rel="noopener">LinkedIn ↗</a><a class="btn sec" href="${profile.links.github}" rel="noopener">GitHub ↗</a></p>
    <dl class="facts">
      <div><dt>${k.now}</dt><dd>${esc(tr(experience[0].role))} · ${esc(experience[0].org)}</dd></div>
      <div><dt>${k.based}</dt><dd>${esc(tr(profile.location))}</dd></div>
      <div><dt>${k.languages}</dt><dd>${esc(tr(extras[0][1]))}</dd></div>
    </dl>
  </section>

  <section id="projects">
    <h2>${k.index}</h2>
    <ol class="index">${projects.map((p, i) => `<li><a href="#${p.id}"><span class="num">${String(i + 1).padStart(2, '0')}</span><b>${esc(tr(p.name))}</b><span class="it">${esc(tr(p.tagline))}</span></a></li>`).join('')}</ol>
    ${projects.map(project).join('')}
  </section>

  <section id="experience">
    <h2>${t.experience}</h2>
    <ol class="tl">${experience.map((e) => `<li><small>${esc(tr(e.date))}</small><div><b>${esc(tr(e.role))}</b> · ${esc(e.org)}<p>${esc(tr(e.text))}</p></div></li>`).join('')}</ol>
    <h2>${t.education}</h2>
    <ol class="tl">${education.map((e) => `<li><small>${esc(e.date)}</small><div><b>${esc(tr(e.title))}</b><p>${esc(tr(e.org))}</p></div></li>`).join('')}</ol>
  </section>

  <section id="about">
    <h2>${t.about}</h2>
    ${tr(profile.bio).map((p) => `<p class="body">${esc(p)}</p>`).join('')}
    <h3>${t.aiWork}</h3><p class="body">${esc(tr(profile.aiWork))}</p>
    <h3>${t.skills}</h3>
    <dl class="kv">${[...skills, ...extras].map(([a, b]) => `<div><dt>${esc(tr(a))}</dt><dd>${esc(tr(b))}</dd></div>`).join('')}</dl>
  </section>

  <section id="contact" class="contact">
    <h2>${t.talk}</h2>
    <p class="lead">${k.contactLead}</p>
    <p><a class="mail" href="mailto:${profile.email}">${profile.email}</a></p>
    <p class="cta"><a class="btn" href="${cvFile(lang)}" rel="noopener">${t.downloadCV}</a><a class="btn sec" href="${profile.links.linkedin}" rel="noopener">LinkedIn ↗</a><a class="btn sec" href="${profile.links.github}" rel="noopener">GitHub ↗</a></p>
  </section>
  <footer class="foot">${esc(profile.name)} · ${esc(tr(profile.location))} · ${k.updated} ${esc(updated)} · <a href="#top">${k.backTop} ↑</a></footer>
</main>
<script>
  // Tema claro/oscuro y recordar el idioma (compartido con el escritorio)
  (function () {
    var root = document.documentElement, b = document.getElementById('theme'), mq = matchMedia('(prefers-color-scheme: dark)');
    var sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.1M12 19.3v2.1M4.7 4.7l1.5 1.5M17.8 17.8l1.5 1.5M2.6 12h2.1M19.3 12h2.1M4.7 19.3l1.5-1.5M17.8 6.2l1.5-1.5"/></svg>';
    var moon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 14.7A8.6 8.6 0 0 1 9.3 3.6a8.6 8.6 0 1 0 11.1 11.1z"/></svg>';
    var dark = function () { return root.dataset.theme ? root.dataset.theme === 'dark' : mq.matches; };
    var paint = function () { b.innerHTML = dark() ? sun : moon; b.setAttribute('aria-label', dark() ? b.dataset.light : b.dataset.dark); b.title = b.getAttribute('aria-label'); };
    b.addEventListener('click', function () { var t = dark() ? 'light' : 'dark'; root.dataset.theme = t; try { localStorage.setItem('ae-theme', t); } catch (e) {} paint(); });
    mq.addEventListener('change', paint); paint();
    try { localStorage.setItem('ae-lang', '${lang}'); } catch (e) {}
  })();
</script>
</body>
</html>
`;
}
writeFileSync(join(SITE, 'clasica.html'), classic('es'));
writeFileSync(join(SITE, 'classic.html'), classic('en'));
console.log('✓ clasica.html y classic.html');

// 4. Versionado: un hash del contenido en las URL de CSS y JS (GitHub Pages cachea 10 minutos)
const VQ = /\?v=[0-9a-f]+/g;
const JS = ['os.js', 'data.js', 'i18n.js', 'aqua.js'];
const hash = createHash('sha1');
for (const f of [...JS.map((x) => `js/${x}`), 'css/os.css', 'css/clasica.css', 'data/live.json']) hash.update(readFileSync(join(SITE, f), 'utf8').replace(VQ, ''));
const V = hash.digest('hex').slice(0, 10);
for (const f of JS) {
  const p = join(SITE, 'js', f);
  const src = readFileSync(p, 'utf8');
  const out = src.replace(/from '\.\/([\w-]+)\.js(?:\?v=[0-9a-f]+)?'/g, `from './$1.js?v=${V}'`);
  if (out !== src) writeFileSync(p, out);
}
for (const f of ['index.html', 'clasica.html', 'classic.html']) {
  const p = join(SITE, f);
  const src = readFileSync(p, 'utf8');
  const out = src.replace(/(href|src)="((?:css|js)\/[\w-]+\.(?:css|js))(?:\?v=[0-9a-f]+)?"/g, `$1="$2?v=${V}"`);
  if (out !== src) writeFileSync(p, out);
}
console.log(`✓ versión de recursos ${V}`);
