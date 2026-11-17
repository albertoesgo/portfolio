// Comprueba que el contenido es coherente antes de publicar:  npm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { profile, experience, education, skills, projects } from '../js/data.js';
import { UI } from '../js/i18n.js';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['es', 'en'];
const isText = (x) => typeof x === 'string' && x.trim().length > 0;
// Un texto es una cadena (igual en los dos idiomas) o { es, en } con los dos rellenos
const bilingual = (x) => isText(x) || (x && LANGS.every((l) => (Array.isArray(x[l]) ? x[l].length > 0 : isText(x[l]))));

test('perfil, experiencia y formación están en español y en inglés', () => {
  for (const k of ['role', 'location', 'headline', 'bio', 'focus', 'principles']) assert.ok(bilingual(profile[k]), `profile.${k}`);
  assert.equal(profile.bio.es.length, profile.bio.en.length);
  assert.equal(profile.focus.es.length, profile.focus.en.length);
  assert.equal(profile.principles.es.length, profile.principles.en.length);
  for (const e of experience) for (const k of ['role', 'date', 'text']) assert.ok(bilingual(e[k]), `experiencia ${e.org}.${k}`);
  for (const e of education) assert.ok(bilingual(e.title) && bilingual(e.org));
  for (const [k, v] of skills) assert.ok(bilingual(k) && bilingual(v));
});

for (const p of projects) {
  test(`${p.id}: textos completos en los dos idiomas`, () => {
    for (const k of ['name', 'plain', 'tagline', 'kind', 'metric', 'url']) assert.ok(bilingual(p[k]), `${p.id}.${k}`);
    for (const l of LANGS) {
      assert.equal(p.stats[l].length, 3, 'tres cifras por proyecto');
      for (const [a, b] of p.stats[l]) assert.ok(isText(a) && isText(b));
    }
    assert.equal(p.proves.es.length, p.proves.en.length);
    const c = p.case;
    for (const k of ['role', 'problem', 'solution', 'next']) assert.ok(bilingual(c[k]), `${p.id}.case.${k}`);
    for (const k of ['arch', 'decisions', 'impact']) assert.equal(c[k].es.length, c[k].en.length, `${p.id}.case.${k}: mismo número de puntos en ES y EN`);
    if (c.check) assert.equal(c.check.es.length, c.check.en.length);
  });

  test(`${p.id}: capturas y logo existen`, () => {
    assert.ok(existsSync(join(SITE, p.logo)), p.logo);
    for (const n of [...p.shots.map(([s]) => s), p.phone].filter(Boolean)) assert.ok(existsSync(join(SITE, 'img', 'shots', `${n}.webp`)), n);
  });

  test(`${p.id}: «En producción» solo con enlace público`, () => {
    if (p.live) assert.match(p.link ?? '', /^https:\/\//, 'un proyecto en producción necesita su URL');
    else assert.ok(!p.link || p.status === undefined, 'si no está en producción, o no hay enlace o no hay etiqueta de estado');
    if (p.link) assert.ok(isText(p.linkLabel));
    if (p.repo) assert.match(p.repo, /^https:\/\/github\.com\//);
  });

  test(`${p.id}: el fragmento de código cabe en pantalla`, () => {
    const code = p.case.code;
    if (!code) return;
    assert.ok(isText(code.file) && bilingual(code.note));
    const lines = code.src.split('\n');
    assert.ok(lines.length <= 18, 'como mucho 18 líneas');
    assert.ok(Math.max(...lines.map((l) => l.length)) <= 120, 'líneas de 120 caracteres como mucho');
  });
}

test('la interfaz tiene las mismas claves en español y en inglés', () => {
  const keys = (o, pre = '') => Object.entries(o).flatMap(([k, v]) => (v && typeof v === 'object' && !Array.isArray(v) ? keys(v, `${pre}${k}.`) : [`${pre}${k}`]));
  assert.deepEqual(keys(UI.es).sort(), keys(UI.en).sort());
});

test('la vista clásica generada incluye todos los proyectos', () => {
  for (const f of ['clasica.html', 'classic.html']) {
    const html = readFileSync(join(SITE, f), 'utf8');
    for (const p of projects) assert.ok(html.includes(`id="${p.id}"`), `${f} · ${p.id}`);
  }
});
