// Gráficos del TFG con datos reales: simulador de escenarios (salida del modelo GCN-LSTM),
// histórico 2002–2024 del sistema de 7 embalses y error frente a horizonte (CSV del TFG).

const COLOR = { wet: 'var(--blue)', normal: 'var(--green)', moderate_drought: 'var(--orange)', extreme_drought: 'var(--red)', unprecedented_drought: 'var(--purple)' };
const MONTHS = ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'];
const f = (n, d = 1) => n.toLocaleString('es-ES', { minimumFractionDigits: d, maximumFractionDigits: d });
const svgEl = (w, h) => `<svg viewBox="0 0 ${w} ${h}" role="img">`;

let cache;
export async function loadAqua() {
  if (!cache) cache = fetch('data/aqua.json').then((r) => r.json());
  return cache;
}

export function sparkline(data) {
  const v = data.history.pct, W = 300, H = 40, n = v.length;
  const pts = v.map((y, i) => `${(i / (n - 1)) * W},${H - (y / 100) * H}`).join(' ');
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,${H} ${pts} ${W},${H}" fill="var(--blue)" opacity=".18"/><polyline points="${pts}" fill="none" stroke="var(--blue)" stroke-width="1.6" vector-effect="non-scaling-stroke"/></svg>`;
}

/* ── Simulador ── */
export function mountSimulator(el, data) {
  const W = 600, H = 250, L = 36, R = 62, T = 10, B = 26;
  const x = (d) => L + (d / 90) * (W - L - R), y = (v) => T + (1 - v / 100) * (H - T - B);
  const start = new Date(data.start_date);
  const startLabel = `${start.getDate()} ${MONTHS[start.getMonth()]} ${start.getFullYear()}`;
  let scen = 'normal', res = 'all';
  el.innerHTML = `
    <div class="viz">
      <h4>¿Y si no llueve?</h4>
      <p class="lead">Mi modelo proyecta el nivel de los embalses 90 días en cinco escenarios basados en años reales.</p>
      <div class="row"><select aria-label="Embalse"><option value="all">Los 7 embalses</option>${Object.entries(data.reservoirs).map(([k, r]) => `<option value="${k}">${r.name}</option>`).join('')}</select></div>
      <div class="chips" role="group" aria-label="Escenario">${data.scenarios.map((s) => `<button class="chip" data-s="${s.key}" aria-pressed="${s.key === scen}"><i style="background:${COLOR[s.key]}"></i>${s.label}</button>`).join('')}</div>
      <div class="readout"><b></b><span></span></div>
      <div class="svgbox">${svgEl(W, H)}<g class="g"></g><g class="lines"></g><g class="cur"></g></svg></div>
      <p class="note"></p>
    </div>`;
  const svg = el.querySelector('svg'), lines = el.querySelector('.lines'), cur = el.querySelector('.cur');
  el.querySelector('.g').innerHTML = [0, 25, 50, 75, 100].map((v) => `<line class="grid" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/><text x="${L - 6}" y="${y(v) + 3}" text-anchor="end">${v} %</text>`).join('') +
    [[0, startLabel], [30, '+30 días'], [60, '+60 días'], [90, '+90 días']].map(([d, t]) => `<text x="${x(d)}" y="${H - 6}" text-anchor="${d === 0 ? 'start' : d === 90 ? 'end' : 'middle'}">${t}</text>`).join('');
  const series = () => (res === 'all' ? data.total : Object.fromEntries(Object.entries(data.reservoirs[res].runs)));
  const path = (arr) => arr.map((v, d) => `${d ? 'L' : 'M'}${x(d).toFixed(1)},${y(v).toFixed(1)}`).join('');
  function draw() {
    const s = series();
    const sel = s[scen];
    lines.innerHTML = data.scenarios.filter((k) => k.key !== scen).map((k) => `<path d="${path(s[k.key])}" fill="none" stroke="${COLOR[k.key]}" stroke-width="1.4" opacity=".35"/>`).join('') +
      `<path d="${path(sel)}L${x(90)},${y(0)}L${x(0)},${y(0)}Z" fill="${COLOR[scen]}" opacity=".12"/>` +
      `<path d="${path(sel)}" fill="none" stroke="${COLOR[scen]}" stroke-width="3" stroke-linejoin="round"/>` +
      `<circle cx="${x(0)}" cy="${y(sel[0])}" r="4" fill="var(--win)" stroke="${COLOR[scen]}" stroke-width="2"/>` +
      `<circle cx="${x(90)}" cy="${y(sel[90])}" r="4.5" fill="${COLOR[scen]}"/><text x="${x(90) + 8}" y="${y(sel[90]) + 4}" style="fill:var(--label);font-weight:700;font-size:12px">${f(sel[90])} %</text>`;
    readout(90);
    const m = data.scenarios.find((k) => k.key === scen);
    el.querySelector('.note').textContent = (scen === 'unprecedented_drought'
      ? `Prueba de estrés: el año más seco (2023) con un 30 % menos de lluvia, ${f(m.precip, 0)} mm al año.`
      : `Basado en ${m.year}: ${f(m.precip, 0)} mm de lluvia al año (percentil ${m.pct}).`) +
      ` Simulación del modelo GCN-LSTM del TFG desde el último dato (${startLabel}). Es el único modelo que proyecta los 7 embalses a la vez; el siguiente paso es un LSTM global, más preciso.`;
  }
  function readout(d) {
    const sel = series()[scen], delta = sel[d] - sel[0];
    el.querySelector('.readout b').textContent = `${f(sel[d])} %`;
    el.querySelector('.readout span').textContent = d === 0 ? `de capacidad el ${startLabel}` : `dentro de ${d} días · ${delta >= 0 ? '+' : '−'}${f(Math.abs(delta))} puntos sobre hoy (${f(sel[0])} %)`;
  }
  svg.addEventListener('pointermove', (e) => {
    const r = svg.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    const d = Math.round(Math.max(0, Math.min(90, ((px - L) / (W - L - R)) * 90)));
    const v = series()[scen][d];
    cur.innerHTML = `<line class="cursor" x1="${x(d)}" x2="${x(d)}" y1="${T}" y2="${H - B}"/><circle cx="${x(d)}" cy="${y(v)}" r="5" fill="${COLOR[scen]}" stroke="var(--win)" stroke-width="2"/>`;
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
}

/* ── Histórico ── */
export function mountHistory(el, data) {
  const v = data.history.pct, n = v.length, W = 600, H = 240, L = 36, R = 12, T = 22, B = 24;
  const [y0, m0] = data.history.start.split('-').map(Number);
  const date = (i) => { const t = (m0 - 1) + i; return [y0 + Math.floor(t / 12), t % 12]; };
  const x = (i) => L + (i / (n - 1)) * (W - L - R), y = (p) => T + (1 - p / 100) * (H - T - B);
  const idx2020 = (2020 - y0) * 12 - (m0 - 1);
  let mi = 0; v.forEach((p, i) => { if (p < v[mi]) mi = i; });
  const [my, mm] = date(mi);
  const pts = v.map((p, i) => `${x(i).toFixed(1)},${y(p).toFixed(1)}`).join(' ');
  el.innerHTML = `
    <div class="viz">
      <h4>Dos décadas de agua embalsada</h4>
      <p class="lead">Llenado medio mensual de los 7 embalses, ${y0}–${date(n - 1)[0]}. La sequía de 2020–2024 no tiene precedentes en el histórico: por eso fallan los modelos que repiten los patrones del pasado, como Prophet.</p>
      <div class="readout"><b>${f(v[n - 1])} %</b><span>en ${MONTHS[date(n - 1)[1]]} ${date(n - 1)[0]}, último dato · mínimo ${f(v[mi])} % en ${MONTHS[mm]} ${my}</span></div>
      <div class="svgbox">${svgEl(W, H)}
        <rect x="${x(idx2020)}" y="${T}" width="${x(n - 1) - x(idx2020)}" height="${H - T - B}" fill="var(--orange)" opacity=".12"/>
        <text x="${x(idx2020) + 6}" y="${T - 8}" style="fill:var(--orange);font-weight:600">Sequía 2020–2024</text>
        ${[0, 25, 50, 75, 100].map((p) => `<line class="grid" x1="${L}" x2="${W - R}" y1="${y(p)}" y2="${y(p)}"/><text x="${L - 6}" y="${y(p) + 3}" text-anchor="end">${p} %</text>`).join('')}
        ${[2004, 2008, 2012, 2016, 2020, 2024].map((yr) => { const i = (yr - y0) * 12 - (m0 - 1); return `<text x="${x(i)}" y="${H - 6}" text-anchor="middle">${yr}</text>`; }).join('')}
        <polygon points="${x(0)},${y(0)} ${pts} ${x(n - 1)},${y(0)}" fill="var(--blue)" opacity=".16"/>
        <polyline points="${pts}" fill="none" stroke="var(--blue)" stroke-width="1.8" stroke-linejoin="round"/>
        <circle cx="${x(mi)}" cy="${y(v[mi])}" r="4" fill="var(--red)"/>
        <g class="cur"></g>
      </svg></div>
      <p class="note">Fuente: SAIH Hidrosur, procesado en el TFG. Media ponderada por capacidad (${f(data.capacity_hm3, 0)} hm³ en total).</p>
    </div>`;
  const svg = el.querySelector('svg'), cur = el.querySelector('.cur'), rb = el.querySelector('.readout b'), rs = el.querySelector('.readout span');
  const rest = [rb.textContent, rs.textContent];
  svg.addEventListener('pointermove', (e) => {
    const r = svg.getBoundingClientRect();
    const i = Math.round(Math.max(0, Math.min(n - 1, ((((e.clientX - r.left) / r.width) * W - L) / (W - L - R)) * (n - 1))));
    const [yy, mo] = date(i);
    cur.innerHTML = `<line class="cursor" x1="${x(i)}" x2="${x(i)}" y1="${T}" y2="${H - B}"/><circle cx="${x(i)}" cy="${y(v[i])}" r="4.5" fill="var(--blue)" stroke="var(--win)" stroke-width="2"/>`;
    rb.textContent = `${f(v[i])} %`; rs.textContent = `${MONTHS[mo]} ${yy}`;
  });
  svg.addEventListener('pointerleave', () => { cur.innerHTML = ''; [rb.textContent, rs.textContent] = rest; });
}

/* ── Error frente a horizonte (CSV del TFG, La Concepción) ── */
export function mountHorizon(el) {
  const DATA = { 7: [3.84, 1.94, 3.12], 14: [6.77, 3.18, 5.37], 30: [11.99, 5.74, 9.19], 60: [19.54, 11.03, 14.67] };
  const NSE = { 7: [0.964, 0.991], 14: [0.887, 0.975], 30: [0.648, 0.919], 60: [0.074, 0.705] };
  const SER = [['Repetir el dato de hoy', 'var(--gray)'], ['LSTM con meteorología', 'var(--blue)'], ['GCN-LSTM (grafos)', 'var(--orange)']];
  el.innerHTML = `
    <div class="viz">
      <h4>¿Cuánto se equivoca a <span class="hzl">30</span> días?</h4>
      <p class="lead">Error medio (RMSE, en puntos de % de capacidad) al predecir La Concepción. La referencia que hay que batir es repetir el dato de hoy.</p>
      <div class="seg hz" role="group" aria-label="Horizonte">${[7, 14, 30, 60].map((h) => `<button data-h="${h}" aria-pressed="${h === 30}">${h} días</button>`).join('')}</div>
      <div class="bars">${SER.map(([n, c]) => `<div class="brow"><span>${n}</span><div class="track2"><div class="fill" style="background:${c};width:0"></div></div><span class="v">–</span></div>`).join('')}</div>
      <div class="axis"><span></span><div><span>0</span><span>5</span><span>10</span><span>15</span><span>20</span></div><span></span></div>
      <div class="verdict"></div>
    </div>`;
  const hz = (h) => {
    el.querySelector('.hzl').textContent = h;
    el.querySelectorAll('.hz button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.h == h));
    el.querySelectorAll('.brow').forEach((r, k) => { r.querySelector('.fill').style.width = (DATA[h][k] / 20) * 100 + '%'; r.querySelector('.v').textContent = f(DATA[h][k]); });
    const red = Math.round((1 - DATA[h][1] / DATA[h][0]) * 100);
    el.querySelector('.verdict').textContent = `A ${h} días, el LSTM con meteorología reduce el error un ${red} % frente a repetir el dato de hoy.` +
      (h == 60 ? ` La referencia ya no predice nada (NSE ${f(NSE[h][0], 2)}); el LSTM aún explica buena parte (NSE ${f(NSE[h][1], 2)}).` : h == 7 ? ' A una semana casi todo lo explica el nivel de hoy.' : '') +
      ' El modelo de grafos no ganó: en esta cuenca la señal es temporal, no espacial.';
  };
  el.querySelector('.hz').addEventListener('click', (e) => { const b = e.target.closest('[data-h]'); if (b) hz(+b.dataset.h); });
  requestAnimationFrame(() => hz(30));
}
