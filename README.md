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
| Frase llana de cada proyecto (`plain`) | `js/data.js` |
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
- Enlaces directos a cada proyecto: `#aqua`, `#lookit`, `#sinapsis`, `#lucia`, `#wild`, `#detemp`.

Las capturas de Sinapsis son del modo demostración (`npm run demo` en `~/Proyectos/sinapsis`): nunca publicar capturas con datos reales.

## Publicación

GitHub Pages desde la rama `main` (raíz) → https://albertoesgo.github.io/portfolio/
Para actualizar: `npm run build`, commit y `git push`. Las cifras en vivo se refrescan en cada `build`.

La imagen para compartir (`og.jpg`, 1200 × 630) es una captura de `index.html?og` (sin la notificación).
Rehacerla cuando cambien los proyectos; LinkedIn la guarda en caché (Post Inspector la refresca).

## Pendiente

- [ ] TFG: el botón «Código en GitHub» apunta al repo del tutor (rama `entrega-tfg`); cambiar `repo` si se prefiere un fork propio.
- [ ] Dominio propio (y cambiar `og:url`, `og:image` y `canonical` en `index.html`).
