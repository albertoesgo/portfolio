#!/usr/bin/env node
// Prepara el sitio: copia los CV, recoge datos en vivo de tus productos y genera la vista clásica.
//   node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { profile, experience, education, extras, skills, cv, projects } from '../js/data.js';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROYECTOS = join(SITE, '..', '..');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// 1. CV en PDF desde ~/Proyectos/cv/out
for (const { key } of cv) {
  for (const lang of ['ES', 'EN']) {
    // Versión web: sin teléfono (la genera ~/Proyectos/cv/build.mjs en out-web)
    const src = join(PROYECTOS, 'cv', 'out-web', key, `Alberto_Estrada_Gomez_CV_${lang}.pdf`);
    const dst = join(SITE, 'cv', key, `Alberto_Estrada_Gomez_CV_${lang}.pdf`);
    if (!existsSync(src)) { console.log(`⚠ falta ${src} (ejecuta node build.mjs en ~/Proyectos/cv)`); continue; }
    mkdirSync(dirname(dst), { recursive: true });
    copyFileSync(src, dst);
  }
}
console.log('✓ CV copiados');

// 2. Datos en vivo (con valores de respaldo si no hay red)
const live = { built: new Date().toISOString().slice(0, 10) };
try {
  const r = await fetch('https://lookit.es/api/catalog', { signal: AbortSignal.timeout(15000) });
  const d = await r.json();
  live.lookit = { products: d.products.length, brands: new Set(d.products.map((p) => p.brand)).size, updatedAt: d.updatedAt };
  console.log(`✓ LOOKIT: ${live.lookit.products} prendas de ${live.lookit.brands} marcas`);
} catch (e) {
  live.lookit = { products: 9000, brands: 24, updatedAt: null };
  console.log('⚠ LOOKIT sin conexión; uso valores de respaldo');
}
try {
  const catalog = JSON.parse(readFileSync(join(PROYECTOS, 'DeTemporada', 'DeTemporada', 'src', 'data', 'catalog.json'), 'utf8'));
  const month = new Date().getMonth() + 1;
  const inSeason = catalog.filter((p) => !p.yearRound && p.north.includes(month) && (p.regiones.includes('andalucia') || p.regiones.includes('all')));
  // Primero lo que lleva un lugar andaluz en el nombre, luego lo genérico de huerta y frutal
  const andaluz = /málaga|granada|almería|huelva|cádiz|sevilla|córdoba|jaén|costa tropical|andaluc/i;
  const otraRegion = /murcia|valencia|xúquer|navarra|galicia|asturias|canarias|aragón|rioja|extremadura|catalu|lleida|bierzo/i;
  const score = (p) => (andaluz.test(p.nombre) ? 0 : ['frutas', 'verduras'].includes(p.categoria) ? 1 : 2);
  const pick = inSeason.filter((p) => !otraRegion.test(p.nombre)).sort((a, b) => score(a) - score(b)).slice(0, 4);
  live.detemporada = { month: MESES[month - 1], region: 'Andalucía', count: inSeason.length, items: pick.map((p) => p.nombre.replace(/\s*\(.*\)$/, '')) };
  console.log(`✓ DeTemporada: ${live.detemporada.count} productos en ${live.detemporada.month}`);
} catch (e) {
  console.log('⚠ DeTemporada: no encuentro el catálogo');
}
writeFileSync(join(SITE, 'data', 'live.json'), JSON.stringify(live));

// 3. Vista clásica (HTML estático: buscadores, lectores de pantalla y quien prefiera leer)
const n = (x) => x.toLocaleString('es-ES');
const stat = (p) => p.id === 'lookit' && live.lookit ? [['24', 'marcas españolas'], [n(live.lookit.products), 'prendas'], ['1 h', 'entre actualizaciones']] : p.stats;
const project = (p) => `
  <article class="proj" id="${p.id}">
    <header><img class="logo${p.plate ? ' pad' : ''}" src="${p.logo}" alt="" width="56" height="56" style="background:${p.plate || 'transparent'}"><div><p class="kind">${esc(p.kind)}</p><h3>${esc(p.name)}</h3></div></header>
    <p class="tagline">${esc(p.tagline)}</p>
    <img class="shot" src="img/shots/${p.shots[0][0]}.webp" alt="Captura de ${esc(p.name)}" loading="lazy" width="1280" height="800">
    <dl class="stats">${stat(p).map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl>
    <h4>El problema</h4><p>${esc(p.case.problem)}</p>
    <h4>Qué hice</h4><p>${esc(p.case.did)}</p>
    <h4>Decisiones</h4><ul>${p.case.decisions.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
    <h4>Lo que no salió bien</h4><p>${esc(p.case.wrong)}</p>
    <h4>Resultado</h4><p>${esc(p.case.result)}</p>
    <p class="stack">${p.stack.map(esc).join(' · ')}${p.link ? ` · <a href="${p.link}">${esc(p.linkLabel)} ↗</a>` : ''}</p>
  </article>`;
const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(profile.name)} · ${esc(profile.role)}</title>
<meta name="description" content="${esc(profile.headline)} Proyectos de IA, producto web y automatización.">
<meta name="robots" content="noindex, nofollow">
<link rel="canonical" href="clasica.html">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="stylesheet" href="css/clasica.css">
</head>
<body>
<main class="wrap">
  <nav class="top"><a href="./">← Volver al escritorio</a></nav>
  <header class="hero">
    <div class="avatar">${profile.initials}</div>
    <h1>${esc(profile.name)}</h1>
    <p class="role">${esc(profile.role)} · ${esc(profile.location)}</p>
    <p class="lead">${esc(profile.headline)}</p>
    <p class="cta"><a class="btn" href="#cv">Descargar CV</a> <a href="${profile.links.linkedin}">LinkedIn</a> · <a href="${profile.links.github}">GitHub</a> · <a href="mailto:${profile.email}">${profile.email}</a></p>
  </header>
  <section><h2>Sobre mí</h2>${profile.bio.map((p) => `<p>${esc(p)}</p>`).join('')}<p>${esc(profile.aiWork)}</p></section>
  <section><h2>Proyectos</h2>${projects.map(project).join('')}</section>
  <section><h2>Experiencia</h2><ul class="rows">${experience.map((e) => `<li><b>${esc(e.role)}</b> · ${esc(e.org)} <small>${esc(e.date)}</small><span>${esc(e.text)}</span></li>`).join('')}</ul></section>
  <section><h2>Formación</h2><ul class="rows">${education.map((e) => `<li><b>${esc(e.title)}</b> · ${esc(e.org)} <small>${esc(e.date)}</small></li>`).join('')}</ul></section>
  <section><h2>Habilidades</h2><dl class="kv">${[...skills, ...extras].map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl></section>
  <section id="cv"><h2>CV</h2><ul class="rows">${cv.map((c) => `<li><b>${esc(c.label)}</b> <span><a href="cv/${c.key}/Alberto_Estrada_Gomez_CV_ES.pdf" download>Español</a> · <a href="cv/${c.key}/Alberto_Estrada_Gomez_CV_EN.pdf" download>English</a></span></li>`).join('')}</ul></section>
  <footer>${esc(profile.name)} · ${esc(profile.location)} · Actualizado el ${live.built}</footer>
</main>
</body>
</html>
`;
writeFileSync(join(SITE, 'clasica.html'), html);
console.log('✓ clasica.html');
