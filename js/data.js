// ─────────────────────────────────────────────────────────────────────────────
// Contenido del portfolio: fuente única para el escritorio (os.js) y la vista
// clásica (scripts/build.mjs → clasica.html). Todo lo que aparece aquí está
// sacado de los repositorios, del TFG o de lo que ha confirmado Alberto.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Alberto Estrada Gómez',
  short: 'Alberto Estrada',
  initials: 'AE',
  role: 'Ingeniero de IA y automatización',
  location: 'Málaga',
  now: 'Ingeniero de IA y automatización en MicroCAD',
  headline: 'Construyo productos completos: del modelo de datos o de IA a la interfaz que lo hace útil.',
  // REVISA: tu bio en primera persona. Cámbiala con tus palabras si algo no te representa.
  bio: [
    'Soy ingeniero informático por la Universidad de Málaga. Me gusta construir productos completos: desde el modelo de datos o de IA hasta la interfaz que lo hace útil, cuidando cómo se ve y cómo se usa.',
    'Hoy trabajo en el departamento de IA y automatización de MicroCAD. Antes hice prácticas en Babel, estudié un año en Gdańsk con Erasmus+ y, por mi cuenta, he publicado varios productos y webs para clientes.',
  ],
  // REVISA: cómo trabajas con agentes de IA. Es una pregunta segura en entrevistas; mejor contestarla tú.
  aiWork: 'Uso agentes de IA para programar más rápido. Yo decido la arquitectura, el modelo de datos, qué se mide y qué se publica; reviso y pruebo lo que se genera antes de que llegue a producción.',
  email: 'albertoestradag19@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/alberto-estrada-g%C3%B3mez-a742b4303/',
    github: 'https://github.com/albertoesgo',
  },
};

// Experiencia: MicroCAD se cuenta por encima, como experiencia y no como proyecto.
export const experience = [
  { role: 'Ingeniero de IA y automatización de procesos', org: 'MicroCAD Informática', date: 'sept. 2026 – actualidad',
    text: 'Automatización de procesos y aplicaciones internas en el nuevo departamento de IA y automatización.' },
  { role: 'Desarrollador de software (prácticas)', org: 'Babel', date: 'nov. 2025 – may. 2026',
    text: 'Modernización de un sistema de gestión empresarial con Oracle APEX y OutSystems.' },
];

export const education = [
  { title: 'Grado en Ingeniería Informática · Mención en Computación', org: 'Universidad de Málaga', date: '2021 – 2026' },
  { title: 'Erasmus+ · Computer Science', org: 'Politechnika Gdańska (Polonia)', date: '2024 – 2025' },
];

export const extras = [
  ['Idiomas', 'Español (nativo) · Inglés (C1)'],
  ['Voluntariado', 'Erasmus Student Network (2026 – actualidad) · Fundación Madre Coraje (2025)'],
];

export const skills = [
  ['IA y datos', 'Python, PyTorch, scikit-learn, XGBoost, pandas, series temporales, LLMs'],
  ['Producto web', 'TypeScript, React, Next.js, three.js, PWA, Tailwind'],
  ['Backend y nube', 'FastAPI, Node.js, SQL, Supabase, Redis, Cloudflare, Vercel'],
  ['Automatización', 'Power Automate, Power BI, SharePoint, integraciones vía API'],
];

// CV: los PDF se copian desde ~/Proyectos/cv/out con `npm run build`.
export const cv = [
  { key: 'ai', label: 'IA y datos' },
  { key: 'automation', label: 'Automatización' },
  { key: 'fullstack', label: 'Full-stack' },
];

export const filters = [['all', 'Todo'], ['ia', 'IA y datos'], ['prod', 'Producto propio'], ['cli', 'Clientes']];

export const projects = [
  {
    id: 'aqua', name: 'AquaAndalucía', kind: 'Trabajo Fin de Grado · 2025–2026', cats: ['ia'],
    logo: 'img/logos/aquaandalucia.svg', plate: '#ffffff', tint: '#2e7d46', wall: 'aqua', url: 'TFG · Universidad de Málaga',
    tagline: 'Cuánta agua tendrán los embalses de Málaga dentro de 90 días, y qué pasa si no llueve.',
    stats: [['7', 'embalses, datos diarios 2000–2024'], ['11', 'modelos comparados'], ['0,70', 'NSE a 60 días (referencia: 0,07)']],
    proves: [
      'Comparo siempre contra una referencia simple: un R² de 0,999 a un día vista no demuestra nada.',
      'Sé explicar por qué el modelo más sofisticado (grafos) no ganó.',
      'Ciclo completo en solitario: datos, supercomputador, API y web.',
    ],
    stack: ['Python', 'PyTorch', 'FastAPI', 'React', 'Picasso (HPC)'],
    shots: [['aqua-dashboard', 'kb'], ['aqua-map', 'kb'], ['aqua-comparativa', 'kb']],
    phone: null, link: null, linkLabel: null, aqua: true,
    keys: 'python pytorch lstm gcn grafos series temporales forecasting predicción fastapi react hpc picasso machine learning deep learning embalses agua sequía tfg datos',
    case: {
      problem: 'Málaga encadena sequías cada vez más duras: la de 2020–2024 es la peor del registro. Saber cómo evolucionará el agua embalsada en las próximas semanas, y qué pasaría si no llueve, es clave para planificar.',
      did: 'Todo el proyecto, en solitario: datos diarios de 7 embalses (SAIH Hidrosur) cruzados con meteorología (AEMET) de 2000 a 2024; limpieza y variables; 11 modelos en tres familias (estadísticos, ML tabular y deep learning); entrenamiento en el supercomputador Picasso de la UMA; una API con FastAPI y una web en React con mapa, comparativa, simulador de escenarios y asistente en lenguaje natural.',
      decisions: [
        'Medir contra la persistencia (repetir el dato de hoy). A un día vista todos los modelos, incluida ella, dan R² ≈ 0,999; por eso evalué a 7, 14, 30 y 60 días con predicción encadenada.',
        'Lluvia acumulada a 30 días y codificación cíclica del día del año: la lluvia llega al embalse con retraso y de forma acumulada, no el mismo día.',
        'Predecir el cambio diario en lugar del nivel, para que los escenarios de sequía o lluvia den trayectorias coherentes.',
        'Escenarios basados en años reales (2002, 2010, 2017, 2023) en vez de valores inventados, más una prueba de estrés: 2023 con un 30 % menos de lluvia.',
      ],
      wrong: 'El modelo de grafos (GCN-LSTM) no superó al LSTM individual: el grafo tenía solo 7 nodos y se basaba en distancias, La Viñuela pertenece a otra cuenca y las extracciones y trasvases no aparecen en los datos. Prophet también se hundió (R² 0,17) porque la sequía de 2020–2024 no tenía precedentes en el histórico.',
      result: 'A 30 días, el LSTM con meteorología comete la mitad de error que la referencia (5,7 frente a 12,0 puntos de capacidad); a 60 días mantiene un NSE de 0,70 cuando la referencia cae a 0,07. El simulador proyecta los 7 embalses a 90 días en cinco escenarios.',
      next: 'Un LSTM global para los 7 embalses, bandas de incertidumbre y datos actualizados cada día.',
    },
  },
  {
    id: 'lookit', name: 'LOOKIT', kind: 'Producto propio · 2026 · en producción', cats: ['ia', 'prod'],
    logo: 'img/logos/lookit.svg', plate: null, tint: '#a8d400', wall: 'lookit', url: 'lookit.es',
    tagline: 'Toda la moda española en un sitio: 24 marcas, una sola búsqueda.',
    stats: [['24', 'marcas españolas'], ['9.000+', 'prendas'], ['1 h', 'entre actualizaciones']],
    proves: [
      'Mantengo yo solo un producto en producción: datos, búsqueda, avisos, SEO y redes.',
      'Criterio con la IA: el LLM solo entra si mi buscador no entiende la frase, con menos coste y latencia.',
      'Privacidad desde el diseño: avisos sin cuentas y con los datos cifrados.',
    ],
    stack: ['Next.js', 'TypeScript', 'Redis', 'Vercel', 'Gemini', 'Remotion'],
    shots: [['lookit-home', 'kb'], ['lookit-tall', 'tall']], phone: 'lookit-mobile',
    link: 'https://lookit.es', linkLabel: 'lookit.es',
    keys: 'next nextjs react typescript redis vercel gemini llm búsqueda search moda shopify pwa push seo remotion vídeo redes producto',
    case: {
      problem: 'La moda española independiente está repartida en decenas de tiendas. Comparar o enterarte de un lanzamiento implica abrir una web por marca.',
      did: 'Todo: producto, diseño, código, datos y el contenido para redes (vídeos generados con Remotion).',
      decisions: [
        'Leer el catálogo público de Shopify de cada marca, cachear cada tienda por separado una hora y servir el catálogo como JSON regenerado: rápido y casi gratis de mantener.',
        'Un buscador propio que entiende marca, prenda, color, talla, precio y rebajas, y que relaja la consulta si no hay resultados. Gemini solo entra como último recurso.',
        'Avisos sin cuentas: cada dispositivo genera una clave, el servidor guarda solo su huella (HMAC) y los datos cifrados con AES-256-GCM. Correo con doble confirmación y baja en un clic.',
        'Un «lanzamiento» solo cuenta si hay 10 prendas nuevas en 24 horas (5 en marcas pequeñas): las reposiciones no disparan avisos.',
      ],
      wrong: 'La caché de Next limita cada entrada a 2 MB y el catálogo completo no cabía: tuve que separar la caché por tienda y cargar la home en dos tiempos.',
      result: '24 marcas y más de 9.000 prendas en una PWA instalable, con avisos por push o correo y páginas por marca y categoría para buscadores.',
      next: 'Publicar cifras de uso y mejorar el comparador.',
    },
  },
  {
    id: 'lucia', name: 'Lucía Gascón', kind: 'Cliente · 2026', cats: ['cli'],
    logo: 'img/logos/lucia-gascon.png', plate: null, tint: '#8c2f28', wall: 'lucia', url: 'luciagascon.es',
    tagline: 'Una exposición que se recorre: cada gesto te lleva a la siguiente obra.',
    stats: [['3D', 'galería en el navegador'], ['1 gesto', '= 1 obra'], ['Panel', 'para que la artista la gestione']],
    proves: [
      'Traduzco el mundo de una clienta a una experiencia, no a una plantilla.',
      '3D en el navegador que carga solo cuando hace falta y funciona en el móvil.',
      'La clienta es autónoma: actualiza su obra sin llamarme.',
    ],
    stack: ['three.js', 'JavaScript', 'Cloudflare Pages', 'Functions', 'KV'],
    shots: [['lucia-3d-b', 'kb'], ['lucia-home', 'kb']], phone: 'lucia-mobile',
    link: 'https://luciagascon.es', linkLabel: 'luciagascon.es',
    keys: 'three threejs 3d webgl galería arte pintora cloudflare kv functions creativo diseño cliente gestos museo',
    case: {
      problem: 'Una pintora quería enseñar su obra con la sensación de visitar una exposición, no de navegar por una tienda.',
      did: 'Diseño y desarrollo completos: la galería 3D, una vista clásica y el panel de administración.',
      decisions: [
        'La cámara recorre un raíl fijo con una parada delante de cada cuadro: un gesto lleva a la siguiente obra. En 3D nadie se pierde.',
        'Medidas reales: 1 unidad = 1 metro, los cuadros cuelgan a 1,5 m como en un museo y cada obra se ve a su tamaño.',
        'Al entrar eliges la vista, como en el directorio de un museo: recorrido 3D o vista clásica (y la clásica si el dispositivo no tiene WebGL).',
        'three.js se carga solo al elegir el 3D, y un panel propio (Cloudflare Functions + KV) le permite subir obras y cambiar el color de las paredes.',
      ],
      wrong: 'El acceso al panel fallaba cuando los secretos de Cloudflare tenían espacios o comillas de más; lo hice tolerante a ese error de configuración.',
      result: 'luciagascon.es en producción, con 13 obras recorribles en 3D y gestionadas por la propia artista.',
      next: 'Un vídeo corto del recorrido para redes y para este portfolio.',
    },
  },
  {
    id: 'wild', name: 'WildCamper', kind: 'Cliente · 2026', cats: ['cli', 'prod'],
    logo: 'img/logos/wildcamper.png', plate: null, tint: '#e8892b', wall: 'wild', url: 'wildcamper.es',
    tagline: 'Venta, alquiler y reservas de furgonetas, con un panel para que el dueño edite toda la web.',
    stats: [['100 %', 'editable desde el panel'], ['RLS', 'seguridad en la base de datos'], ['PWA', 'funciona sin conexión']],
    proves: [
      'Seguridad: quité las credenciales del front, activé RLS y añadí tests para que no vuelvan.',
      'Pienso en quien mantiene la web después: el cliente lo cambia todo sin tocar código.',
    ],
    stack: ['JavaScript', 'Supabase Auth', 'RLS', 'Cloudflare', 'PWA'],
    shots: [['wild-home', 'kb'], ['wild-tall', 'tall']], phone: 'wild-mobile',
    link: 'https://wildcamper.es', linkLabel: 'wildcamper.es',
    keys: 'supabase postgres rls auth seguridad reservas calendario pwa offline shopify cliente furgonetas camper panel admin tests',
    case: {
      problem: 'Un taller de camperización necesitaba vender y alquilar furgonetas, enseñar sus trabajos y poder actualizarlo todo sin depender de nadie.',
      did: 'La web completa, la base de datos y el panel de administración.',
      decisions: [
        'Sin framework ni proceso de build: HTML, CSS y JavaScript con Supabase detrás. Barato de alojar y fácil de mantener.',
        'Todo editable desde el panel: textos, colores, estadísticas, contacto, catálogo y fechas bloqueadas del calendario.',
        'PWA instalable con modo sin conexión.',
      ],
      wrong: 'La primera versión guardaba las contraseñas del panel en el propio front. Lo corregí con Supabase Auth y RLS (lectura pública; escribir exige ser administrador) y añadí tests que fallan si vuelven a aparecer credenciales en el código.',
      result: 'wildcamper.es en producción. La tienda con Shopify está en preparación.',
      next: 'Terminar la tienda y añadir un antes/después de las camperizaciones.',
    },
  },
  {
    id: 'detemp', name: 'DeTemporada', kind: 'Producto propio · 2026', cats: ['prod'],
    logo: 'img/logos/detemporada.svg', plate: null, tint: '#f0531c', wall: 'detemp', url: 'DeTemporada',
    tagline: 'Qué está bueno este mes en tu comunidad y dónde comprarlo cerca.',
    stats: [['210', 'productos con receta'], ['451', 'comercios locales'], ['17', 'comunidades']],
    proves: [
      'Calidad de datos: temporadas de fuentes oficiales y comercios verificados y geolocalizados.',
      'Producto sin servidor y que funciona sin conexión, probado con tests de extremo a extremo.',
    ],
    stack: ['React', 'Vite', 'PWA', 'Node (datos)'],
    shots: [['detemp-home', 'kb'], ['detemp-tall', 'tall']], phone: 'detemp-mobile',
    link: null, linkLabel: null,
    keys: 'react vite pwa offline datos geolocalización mapa comercios alimentos temporada recetas producto tests e2e',
    case: {
      problem: 'Saber qué está de temporada en tu zona, cuánto cuesta y dónde comprarlo a productores y tiendas locales, sin grandes superficies.',
      did: 'Todo, incluido el trabajo de datos.',
      decisions: [
        'Temporadas sacadas de fuentes oficiales (Ministerio de Agricultura, vedas, órdenes de caza, pliegos DOP/IGP) para 210 productos, con precio orientativo y receta.',
        'Un directorio de 451 comercios verificados y geolocalizados con un script propio, con caché para no repetir consultas.',
        'Fotos con licencia libre de Wikimedia Commons, con autor y licencia en cada ficha.',
        'Todo funciona en el navegador: sin backend, instalable y sin conexión.',
      ],
      wrong: 'Algunas ubicaciones y fotos no eran fiables al principio; las verifiqué una a una y ajusté las fotos de carne y pescado a como se compran.',
      result: 'Una PWA rápida para las 17 comunidades, probada con clics reales en Chrome headless.',
      next: 'Dominio propio y publicación.',
    },
  },
];
