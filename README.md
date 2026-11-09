# Portfolio · escritorio

Escritorio tipo Mac en pantallas grandes e interfaz tipo iOS en el móvil. Un gesto = un proyecto.
HTML, CSS y JavaScript sin framework ni dependencias.

```bash
npm run dev      # compila y abre http://localhost:4321
npm run build    # solo compila (CV, datos en vivo y vista clásica)
```

`build` hace tres cosas:
1. Copia los CV desde `~/Proyectos/cv/out` (antes, `node build.mjs` en `~/Proyectos/cv`).
2. Lee las cifras reales de lookit.es y la temporada del mes de DeTemporada → `data/live.json`.
3. Genera `clasica.html`, la vista de una página para buscadores, lectores de pantalla y quien prefiera leer.

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Textos, proyectos, casos de estudio, experiencia | `js/data.js` (fuente única para el escritorio y la vista clásica) |
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

- [ ] Revisar los textos marcados con `REVISA` en `js/data.js` (bio y cómo trabajas con IA).
- [ ] Dominio propio (y cambiar `og:url` / `og:image` en `index.html`).
- [ ] Quitar `noindex` de `index.html` y de la vista clásica, y borrar `robots.txt`.
- [ ] Versión en inglés.
