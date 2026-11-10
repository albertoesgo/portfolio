// Gráficos del TFG con datos reales: simulador de escenarios (salida del modelo GCN-LSTM),
// histórico 2002–2024 del sistema de 7 embalses y error frente a horizonte (CSV del TFG).

const COLOR = { wet: 'var(--blue)', normal: 'var(--green)', moderate_drought: 'var(--orange)', extreme_drought: 'var(--red)', unprecedented_drought: 'var(--purple)' };
const T = {
  es: {
    locale: 'es-ES', months: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'],
    pct: (v) => `${v} %`, scen: {},
    simH: '¿Y si no llueve?', simLead: 'Mi modelo proyecta el nivel de los embalses a 90 días en cinco escenarios basados en años reales.',
    all: 'Los 7 embalses', reservoir: 'Embalse', scenario: 'Escenario', plusDays: (d) => `+${d} días`,
    stress: (mm) => `Prueba de estrés: el año más seco (2023) con un 30 % menos de lluvia, ${mm} mm al año.`,
    based: (y, mm, p) => `Basado en ${y}: ${mm} mm de lluvia al año (percentil ${p}).`,
    simNote: (d) => ` Simulación del modelo GCN-LSTM del TFG, que proyecta los 7 embalses a la vez como un sistema conectado, desde el último dato (${d}).`,
    at: (d) => `de capacidad el ${d}`, inDays: (d, sign, delta, today) => `dentro de ${d} días · ${sign}${delta} puntos sobre hoy (${today})`,
    histH: 'Dos décadas de agua embalsada',
    histLead: (a, b) => `Llenado medio mensual de los 7 embalses, ${a}–${b}. La sequía de 2020–2024 no tiene precedentes en el histórico: por eso hacen falta modelos que aprendan de la meteorología y no solo de la estacionalidad.`,
    histRead: (m, y, min, mm, my) => `en ${m} ${y}, último dato · mínimo ${min} en ${mm} ${my}`,
    drought: 'Sequía 2020–2024', histNote: (hm) => `Fuente: SAIH Hidrosur, procesado en el TFG. Media ponderada por capacidad (${hm} hm³ en total).`,
    hzH: (s) => `¿Cuánto se equivoca a ${s} días?`, hzLead: 'Error medio (RMSE, en puntos de % de capacidad) al predecir La Concepción. La referencia que hay que batir es repetir el dato de hoy.',
    series: ['Repetir el dato de hoy', 'LSTM con meteorología', 'GCN-LSTM (7 embalses a la vez)'], days: (h) => `${h} días`, horizon: 'Horizonte',
    verdict: (h, red) => `A ${h} días, el LSTM con meteorología reduce el error un ${red} % frente a repetir el dato de hoy.`,
    v60: (a, b) => ` La referencia ya no predice nada (NSE ${a}); el LSTM aún explica buena parte de la variación (NSE ${b}).`,
    v7: ' A una semana casi todo lo explica el nivel de hoy; la meteorología marca la diferencia a partir de dos semanas.',
  },
  en: {
    locale: 'en-GB', months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    pct: (v) => `${v}%`,
    scen: { wet: 'Wet year', normal: 'Normal year', moderate_drought: 'Moderate drought', extreme_drought: 'Extreme drought', unprecedented_drought: 'Unprecedented drought' },
    simH: "What if it doesn't rain?", simLead: 'My model projects reservoir levels 90 days ahead under five scenarios based on real years.',
    all: 'All 7 reservoirs', reservoir: 'Reservoir', scenario: 'Scenario', plusDays: (d) => `+${d} days`,
    stress: (mm) => `Stress test: the driest year (2023) with 30% less rain, ${mm} mm a year.`,
    based: (y, mm, p) => `Based on ${y}: ${mm} mm of rain a year (percentile ${p}).`,
    simNote: (d) => ` Simulated with the thesis GCN-LSTM model, which projects all 7 reservoirs jointly as a connected system, from the latest data point (${d}).`,
    at: (d) => `of capacity on ${d}`, inDays: (d, sign, delta, today) => `in ${d} days · ${sign}${delta} points vs. today (${today})`,
    histH: 'Two decades of stored water',
    histLead: (a, b) => `Average monthly fill of the 7 reservoirs, ${a}–${b}. The 2020–2024 drought has no precedent in the record, which is why the models must learn from the weather and not just from seasonality.`,
    histRead: (m, y, min, mm, my) => `in ${m} ${y}, latest data · low of ${min} in ${mm} ${my}`,
    drought: '2020–2024 drought', histNote: (hm) => `Source: SAIH Hidrosur, processed in the thesis. Capacity-weighted average (${hm} hm³ in total).`,
    hzH: (s) => `How far off is it at ${s} days?`, hzLead: "Mean error (RMSE, in percentage points of capacity) forecasting La Concepción. The baseline to beat is repeating today's value.",
    series: ["Repeat today's value", 'LSTM with weather', 'GCN-LSTM (all 7 at once)'], days: (h) => `${h} days`, horizon: 'Horizon',
    verdict: (h, red) => `At ${h} days, the LSTM with weather cuts the error by ${red}% compared with repeating today's value.`,
    v60: (a, b) => ` The baseline no longer predicts anything (NSE ${a}); the LSTM still explains much of the variation (NSE ${b}).`,
    v7: " A week ahead, today's level explains almost everything; the weather makes the difference from two weeks on.",
  },
};
const svgEl = (w, h) => `<svg viewBox="0 0 ${w} ${h}" role="img">`;

let cache;
export async function loadAqua() {
  if (!cache) cache = fetch('data/aqua.json').then((r) => r.json());
  return cache;
}

export function sparkline(data) {
  const v = data.history.pct, W = 300, H = 40, n = v.length;
  const pts = v.map((y, i) => `${(i / (n - 1)) * W},${H - (y / 100) * H}`).join(' ');
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,${H} ${pts} ${W},${H}" fill="var(--blue)" opacity=".18"/><polyline class="draw" pathLength="1" points="${pts}" fill="none" stroke="var(--blue)" stroke-width="1.6" vector-effect="non-scaling-stroke"/></svg>`;
}

const helpers = (lang) => {
  const t = T[lang];
  const f = (n, d = 1) => n.toLocaleString(t.locale, { minimumFractionDigits: d, maximumFractionDigits: d });
  return { t, f, p: (n, d = 1) => t.pct(f(n, d)) };
};

/* ── Simulador ── */
export function mountSimulator(el, data, lang = 'es') {
  const { t, f, p } = helpers(lang);
  const W = 600, H = 250, L = 36, R = 62, T0 = 10, B = 26;
  const x = (d) => L + (d / 90) * (W - L - R), y = (v) => T0 + (1 - v / 100) * (H - T0 - B);
  const start = new Date(data.start_date);
  const startLabel = `${start.getDate()} ${t.months[start.getMonth()]} ${start.getFullYear()}`;
  const label = (s) => t.scen[s.key] || s.label;
  let scen = 'normal', res = 'all';
  el.innerHTML = `
    <div class="viz">
      <h4>${t.simH}</h4>
      <p class="lead">${t.simLead}</p>
      <div class="row"><select aria-label="${t.reservoir}"><option value="all">${t.all}</option>${Object.entries(data.reservoirs).map(([k, r]) => `<option value="${k}">${r.name}</option>`).join('')}</select><div class="chips" role="group" aria-label="${t.scenario}">${data.scenarios.map((s) => `<button class="chip" data-s="${s.key}" aria-pressed="${s.key === scen}"><i style="background:${COLOR[s.key]}"></i>${label(s)}</button>`).join('')}</div></div>
      <div class="readout"><b></b><span></span></div>
      <div class="svgbox">${svgEl(W, H)}<g class="g"></g><g class="lines"></g><g class="cur"></g></svg></div>
      <p class="note"></p>
    </div>`;
  const svg = el.querySelector('svg'), lines = el.querySelector('.lines'), cur = el.querySelector('.cur');
  el.querySelector('.g').innerHTML = [0, 25, 50, 75, 100].map((v) => `<line class="grid" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/><text x="${L - 6}" y="${y(v) + 3}" text-anchor="end">${t.pct(v)}</text>`).join('') +
    [[0, startLabel], [30, t.plusDays(30)], [60, t.plusDays(60)], [90, t.plusDays(90)]].map(([d, s]) => `<text x="${x(d)}" y="${H - 6}" text-anchor="${d === 0 ? 'start' : d === 90 ? 'end' : 'middle'}">${s}</text>`).join('');
  const series = () => (res === 'all' ? data.total : data.reservoirs[res].runs);
  const path = (arr) => arr.map((v, d) => `${d ? 'L' : 'M'}${x(d).toFixed(1)},${y(v).toFixed(1)}`).join('');
  function draw() {
    const s = series();
    const sel = s[scen];
    lines.innerHTML = data.scenarios.filter((k) => k.key !== scen).map((k) => `<path d="${path(s[k.key])}" fill="none" stroke="${COLOR[k.key]}" stroke-width="1.4" opacity=".35"/>`).join('') +
      `<path class="area" d="${path(sel)}L${x(90)},${y(0)}L${x(0)},${y(0)}Z" fill="${COLOR[scen]}" opacity=".12"/>` +
      `<path class="draw" pathLength="1" d="${path(sel)}" fill="none" stroke="${COLOR[scen]}" stroke-width="3" stroke-linejoin="round"/>` +
      `<circle cx="${x(0)}" cy="${y(sel[0])}" r="4" fill="var(--win)" stroke="${COLOR[scen]}" stroke-width="2"/>` +
      `<g class="endpt"><circle cx="${x(90)}" cy="${y(sel[90])}" r="4.5" fill="${COLOR[scen]}"/><text x="${x(90) + 8}" y="${y(sel[90]) + 4}" style="fill:var(--label);font-weight:700;font-size:12px">${p(sel[90])}</text></g>`;
    readout(90);
    const m = data.scenarios.find((k) => k.key === scen);
    el.querySelector('.note').textContent = (scen === 'unprecedented_drought' ? t.stress(f(m.precip, 0)) : t.based(m.year, f(m.precip, 0), m.pct)) + t.simNote(startLabel);
  }
  function readout(d) {
    const sel = series()[scen], delta = sel[d] - sel[0];
    el.querySelector('.readout b').textContent = p(sel[d]);
    el.querySelector('.readout span').textContent = d === 0 ? t.at(startLabel) : t.inDays(d, delta >= 0 ? '+' : '−', f(Math.abs(delta)), p(sel[0]));
  }
  svg.addEventListener('pointermove', (e) => {
    const r = svg.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    const d = Math.round(Math.max(0, Math.min(90, ((px - L) / (W - L - R)) * 90)));
    const v = series()[scen][d];
    cur.innerHTML = `<line class="cursor" x1="${x(d)}" x2="${x(d)}" y1="${T0}" y2="${H - B}"/><circle cx="${x(d)}" cy="${y(v)}" r="5" fill="${COLOR[scen]}" stroke="var(--win)" stroke-width="2"/>`;
    readout(d);
  });
  svg.addEventListener('pointerleave', () => { cur.innerHTML = ''; readout(90); });
  el.querySelector('select').addEventListener('change', (e) => { res = e.target.value; draw(); });
  el.querySelector('.chips').addEventListener('click', (e) => {
    const b = e.target.closest('[data-s]'); if (!b) return;
    scen = b.dataset.s;
    el.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', c === b));
    draw();
  });
  draw();
  return { replay: draw };
}

/* ── Histórico ── */
export function mountHistory(el, data, lang = 'es') {
  const { t, f, p } = helpers(lang);
  const v = data.history.pct, n = v.length, W = 600, H = 240, L = 36, R = 12, T0 = 22, B = 24;
  const [y0, m0] = data.history.start.split('-').map(Number);
  const date = (i) => { const k = (m0 - 1) + i; return [y0 + Math.floor(k / 12), k % 12]; };
  const x = (i) => L + (i / (n - 1)) * (W - L - R), y = (q) => T0 + (1 - q / 100) * (H - T0 - B);
  const idx2020 = (2020 - y0) * 12 - (m0 - 1);
  let mi = 0; v.forEach((q, i) => { if (q < v[mi]) mi = i; });
  const [my, mm] = date(mi), [ly, lm] = date(n - 1);
  const pts = v.map((q, i) => `${x(i).toFixed(1)},${y(q).toFixed(1)}`).join(' ');
  el.innerHTML = `
    <div class="viz">
      <h4>${t.histH}</h4>
      <p class="lead">${t.histLead(y0, ly)}</p>
      <div class="readout"><b>${p(v[n - 1])}</b><span>${t.histRead(t.months[lm], ly, p(v[mi]), t.months[mm], my)}</span></div>
      <div class="svgbox">${svgEl(W, H)}
        <rect x="${x(idx2020)}" y="${T0}" width="${x(n - 1) - x(idx2020)}" height="${H - T0 - B}" fill="var(--orange)" opacity=".12"/>
        <text x="${x(idx2020) + 6}" y="${T0 - 8}" style="fill:var(--orange);font-weight:600">${t.drought}</text>
        ${[0, 25, 50, 75, 100].map((q) => `<line class="grid" x1="${L}" x2="${W - R}" y1="${y(q)}" y2="${y(q)}"/><text x="${L - 6}" y="${y(q) + 3}" text-anchor="end">${t.pct(q)}</text>`).join('')}
        ${[2004, 2008, 2012, 2016, 2020, 2024].map((yr) => { const i = (yr - y0) * 12 - (m0 - 1); return `<text x="${x(i)}" y="${H - 6}" text-anchor="middle">${yr}</text>`; }).join('')}
        <polygon points="${x(0)},${y(0)} ${pts} ${x(n - 1)},${y(0)}" fill="var(--blue)" opacity=".16"/>
        <polyline class="draw" pathLength="1" points="${pts}" fill="none" stroke="var(--blue)" stroke-width="1.8" stroke-linejoin="round"/>
        <circle cx="${x(mi)}" cy="${y(v[mi])}" r="4" fill="var(--red)"/>
        <g class="cur"></g>
      </svg></div>
      <p class="note">${t.histNote(f(data.capacity_hm3, 0))}</p>
    </div>`;
  const svg = el.querySelector('svg'), cur = el.querySelector('.cur'), rb = el.querySelector('.readout b'), rs = el.querySelector('.readout span');
  const rest = [rb.textContent, rs.textContent];
  svg.addEventListener('pointermove', (e) => {
    const r = svg.getBoundingClientRect();
    const i = Math.round(Math.max(0, Math.min(n - 1, ((((e.clientX - r.left) / r.width) * W - L) / (W - L - R)) * (n - 1))));
    const [yy, mo] = date(i);
    cur.innerHTML = `<line class="cursor" x1="${x(i)}" x2="${x(i)}" y1="${T0}" y2="${H - B}"/><circle cx="${x(i)}" cy="${y(v[i])}" r="4.5" fill="var(--blue)" stroke="var(--win)" stroke-width="2"/>`;
    rb.textContent = p(v[i]); rs.textContent = `${t.months[mo]} ${yy}`;
  });
  svg.addEventListener('pointerleave', () => { cur.innerHTML = ''; [rb.textContent, rs.textContent] = rest; });
}

/* ── Error frente a horizonte (CSV del TFG, La Concepción) ── */
export function mountHorizon(el, lang = 'es') {
  const { t, f } = helpers(lang);
  const DATA = { 7: [3.84, 1.94, 3.12], 14: [6.77, 3.18, 5.37], 30: [11.99, 5.74, 9.19], 60: [19.54, 11.03, 14.67] };
  const NSE = { 7: [0.964, 0.991], 14: [0.887, 0.975], 30: [0.648, 0.919], 60: [0.074, 0.705] };
  const SER = ['var(--gray)', 'var(--blue)', 'var(--orange)'];
  el.innerHTML = `
    <div class="viz">
      <h4>${t.hzH('<span class="hzl">30</span>')}</h4>
      <p class="lead">${t.hzLead}</p>
      <div class="seg hz" role="group" aria-label="${t.horizon}">${[7, 14, 30, 60].map((h) => `<button data-h="${h}" aria-pressed="${h === 30}">${t.days(h)}</button>`).join('')}</div>
      <div class="bars">${SER.map((c, k) => `<div class="brow"><span>${t.series[k]}</span><div class="track2"><div class="fill" style="background:${c};width:0"></div></div><span class="v">–</span></div>`).join('')}</div>
      <div class="axis"><span></span><div><span>0</span><span>5</span><span>10</span><span>15</span><span>20</span></div><span></span></div>
      <div class="verdict"></div>
    </div>`;
  const hz = (h) => {
    el.querySelector('.hzl').textContent = h;
    el.querySelectorAll('.hz button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.h == h));
    el.querySelectorAll('.brow').forEach((r, k) => { r.querySelector('.fill').style.width = (DATA[h][k] / 20) * 100 + '%'; r.querySelector('.v').textContent = f(DATA[h][k]); });
    const red = Math.round((1 - DATA[h][1] / DATA[h][0]) * 100);
    el.querySelector('.verdict').textContent = t.verdict(h, red) + (h == 60 ? t.v60(f(NSE[h][0], 2), f(NSE[h][1], 2)) : h == 7 ? t.v7 : '');
  };
  el.querySelector('.hz').addEventListener('click', (e) => { const b = e.target.closest('[data-h]'); if (b) hz(+b.dataset.h); });
  requestAnimationFrame(() => hz(30));
  return { replay: () => { el.querySelectorAll('.fill').forEach((x) => (x.style.width = 0)); requestAnimationFrame(() => requestAnimationFrame(() => hz(+(el.querySelector('.hz [aria-pressed="true"]')?.dataset.h || 30)))); } };
}
