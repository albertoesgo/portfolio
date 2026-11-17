# Portfolio · escritorio

Escritorio tipo Mac en pantallas grandes e interfaz tipo iOS en el móvil. Un gesto = un proyecto.
HTML, CSS y JavaScript sin framework ni dependencias.

```bash
npm run dev      # compila y abre http://localhost:4321
npm run build    # solo compila (CV, datos en vivo, enlaces y vista clásica)
npm test         # comprueba el contenido (ES/EN completos, capturas, enlaces y estados)
```

`build` hace cuatro cosas:
1. Copia **un solo CV público** (perfil `automation`, sin teléfono) desde `~/Proyectos/cv/out-web` a `cv/…_ES.pdf` y `cv/…_EN.pdf` (antes, `node build.mjs` en `~/Proyectos/cv`). Las otras versiones son solo para uso privado.
2. Lee las cifras reales de lookit.es → `data/live.json`; esas cifras son las que se ven en la portada, la ficha, el caso de estudio y la vista clásica. Si lookit.es no responde, conserva la última cifra buena.
3. Comprueba que el enlace de cada proyecto responde. Si uno falla, avisa y termina con error: un proyecto solo sale «En producción» (`live: true`) si su URL funciona.
4. Genera la vista clásica en español (`clasica.html`) y en inglés (`classic.html`).

Idioma: botón ES/EN (o `?lang=en`); se recuerda en el navegador. Tema claro/oscuro: botón de luna/sol; por defecto, el del sistema.

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Textos, proyectos, casos de estudio, experiencia (ES y EN) | `js/data.js` (fuente única para el escritorio y la vista clásica) |
| Frase llana de cada proyecto (`plain`), fragmento de código (`case.code`) y «Compruébalo tú» (`case.check`) | `js/data.js` |
| Textos de la interfaz (ES y EN) | `js/i18n.js` |
| Comportamiento del escritorio (gestos, Dock, Spotlight, hojas) | `js/os.js` |
| Gráficos del TFG | `js/aqua.js` + `data/aqua.json` |
| Estilos | `css/os.css` (escritorio) y `css/clasica.css` |
| Capturas | `img/shots/*.webp` (originales y scripts en `../capturas/`) |
| Logos reales de cada proyecto | `img/logos/` |

`data/aqua.json` sale del modelo del TFG (trayectorias a 90 días de los 5 escenarios y el histórico 2002–2024).
Para regenerarlo hace falta el repo del TFG y su entorno `venv_dl`.

## Controles

- Deslizar con el dedo, dos dedos en el trackpad, rueda del ratón o ← → para cambiar de proyecto.
- Pellizcar o ↑ para la vista general con filtros. ⌘K para buscar.
- Enlaces directos a cada proyecto: `#aqua`, `#lookit`, `#lucia`, `#wild`, `#detemp`.

## Publicación

GitHub Pages desde la rama `main` (raíz) → https://albertoesgo.github.io/portfolio/
Para actualizar: `npm run build`, commit y `git push`. Las cifras en vivo se refrescan en cada `build`.

## Antes del lanzamiento definitivo

- [ ] DeTemporada: al migrarla de Vercel, poner `live: true` y su `link` en `js/data.js` (y el enlace en `~/Proyectos/cv/data.mjs`).
- [ ] TFG: el botón «Código en GitHub» apunta al repo del tutor (rama `entrega-tfg`); cambiar `repo` si se prefiere un fork propio.
- [ ] Revisar la bio y «Cómo trabajo con IA» en `js/data.js`.
- [ ] Dominio propio (y cambiar `og:url` / `og:image` en `index.html`).
- [ ] Quitar `noindex` de `index.html` y de la vista clásica, y borrar `robots.txt`.
