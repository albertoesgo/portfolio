// ─────────────────────────────────────────────────────────────────────────────
// Contenido del portfolio en español e inglés: fuente única para el escritorio
// (os.js) y la vista clásica (scripts/build.mjs → clasica.html / classic.html).
// Cada texto es { es, en } o un valor sin traducir. Todo sale de los repositorios,
// del TFG o de lo que ha confirmado Alberto: se cuenta con ambición, sin inventar.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Alberto Estrada Gómez',
  short: 'Alberto Estrada',
  initials: 'AE',
  role: { es: 'Ingeniero de IA y automatización', en: 'AI & Automation Engineer' },
  location: { es: 'Málaga', en: 'Málaga, Spain' },
  headline: {
    es: 'Diseño y construyo sistemas de IA y productos digitales completos: del dato y el modelo a la interfaz que los hace útiles.',
    en: 'I design and build AI systems and complete digital products: from data and models to the interface that makes them useful.',
  },
  bio: {
    es: [
      'Soy ingeniero informático por la Universidad de Málaga, con mención en Computación. Trabajo donde se cruzan tres mundos que pocas veces van juntos: la inteligencia artificial, la automatización de procesos en empresa y el producto web.',
      'Hoy formo parte del equipo fundador del departamento de IA y automatización de MicroCAD, donde diseño automatizaciones e integraciones que eliminan trabajo manual. Antes modernicé sistemas de gestión empresarial en Babel, estudié un año en Gdańsk con Erasmus+ y lancé productos propios y webs para clientes que hoy están en producción.',
    ],
    en: [
      'I am a computer engineer from the University of Málaga, with a major in Computing. I work where three worlds that rarely meet come together: artificial intelligence, business process automation and web products.',
      "Today I am part of the founding team of MicroCAD's AI & Automation department, where I design automations and integrations that remove manual work. Before that I modernised business management systems at Babel, spent a year in Gdańsk on Erasmus+, and launched my own products and client websites that are live today.",
    ],
  },
  aiWork: {
    es: 'Uso agentes de IA como multiplicador: yo defino la arquitectura, el modelo de datos y los criterios de calidad, y ellos aceleran la implementación. En el TFG configuré agentes auditores propios que revisaban fugas de datos en los notebooks, la app web y la memoria. Todo pasa por mi revisión y por pruebas antes de llegar a producción.',
    en: 'I use AI agents as a force multiplier: I define the architecture, the data model and the quality bar, and they speed up implementation. For my thesis I set up my own auditing agents that checked the notebooks for data leakage, plus the web app and the write-up. Everything goes through my review and testing before it reaches production.',
  },
  email: 'albertoestradag19@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/alberto-estrada-g%C3%B3mez-a742b4303/',
    github: 'https://github.com/albertoesgo',
  },
};

// Experiencia: MicroCAD se cuenta como experiencia, no como proyecto.
export const experience = [
  {
    role: { es: 'Ingeniero de IA y automatización de procesos', en: 'AI & Process Automation Engineer' },
    org: 'MicroCAD Informática', date: { es: 'sept. 2026 – actualidad', en: 'Sep 2026 – present' },
    text: {
      es: 'Equipo fundador del departamento de IA y automatización. Automatizaciones con Power Automate y Python, integraciones vía API con SharePoint, aplicaciones internas y cuadros de mando en Power BI.',
      en: 'Founding team of the AI & Automation department. Automations with Power Automate and Python, API integrations with SharePoint, internal apps and Power BI dashboards.',
    },
  },
  {
    role: { es: 'Desarrollador de software (prácticas)', en: 'Software Developer Intern' },
    org: 'Babel', date: { es: 'nov. 2025 – may. 2026', en: 'Nov 2025 – May 2026' },
    text: {
      es: 'Modernización de un sistema de gestión empresarial con Oracle APEX y OutSystems ODC: modelo de datos, lógica de negocio, automatización de procesos y pruebas de concepto de IA.',
      en: 'Modernised a business management system with Oracle APEX and OutSystems ODC: data model, business logic, process automation and AI proofs of concept.',
    },
  },
];

export const education = [
  { title: { es: 'Grado en Ingeniería Informática · Mención en Computación', en: 'BSc in Computer Engineering · Computing major' }, org: { es: 'Universidad de Málaga', en: 'University of Málaga' }, date: '2021 – 2026' },
  { title: 'Erasmus+ · Computer Science', org: { es: 'Politechnika Gdańska (Polonia) · en inglés', en: 'Gdańsk University of Technology (Poland) · taught in English' }, date: '2024 – 2025' },
];

export const extras = [
  [{ es: 'Idiomas', en: 'Languages' }, { es: 'Español (nativo) · Inglés (C1)', en: 'Spanish (native) · English (C1)' }],
  [{ es: 'Voluntariado', en: 'Volunteering' }, { es: 'Erasmus Student Network (2026 – actualidad) · Fundación Madre Coraje (2025)', en: 'Erasmus Student Network (2026 – present) · Fundación Madre Coraje (2025)' }],
];

export const skills = [
  [{ es: 'IA y datos', en: 'AI & data' }, 'Python, PyTorch (LSTM, GNN), scikit-learn, XGBoost, pandas, statsmodels, LLMs'],
  [{ es: 'Producto web', en: 'Web product' }, 'TypeScript, React, Next.js, three.js, Tailwind, PWA'],
  [{ es: 'Backend y nube', en: 'Backend & cloud' }, 'FastAPI, Node.js, Express, SQL, Supabase, Redis, Cloudflare, Vercel'],
  [{ es: 'Automatización', en: 'Automation' }, { es: 'Power Automate, Power BI, SharePoint, integraciones vía API', en: 'Power Automate, Power BI, SharePoint, API integrations' }],
];

// Un solo CV público (perfil «automation» de ~/Proyectos/cv), en el idioma de la web.
export const cvFile = (lang) => `cv/Alberto_Estrada_Gomez_CV_${lang.toUpperCase()}.pdf`;

export const filters = [
  ['all', { es: 'Todo', en: 'All' }],
  ['ia', { es: 'IA y datos', en: 'AI & data' }],
  ['prod', { es: 'Producto propio', en: 'Own products' }],
  ['cli', { es: 'Clientes', en: 'Clients' }],
];

export const projects = [
  {
    id: 'aqua', metric: { es: '−52 % de error a 30 días', en: '−52% error at 30 days' },  name: { es: 'Predicción espaciotemporal de embalses', en: 'Spatio-temporal reservoir forecasting' }, short: { es: 'TFG', en: 'Thesis' }, cats: ['ia'], live: false,
    kind: { es: 'Trabajo Fin de Grado · Deep learning · 2025–2026', en: "Bachelor's thesis · Deep learning · 2025–2026" },
    logo: 'img/logos/aquaandalucia.svg', plate: '#ffffff', tint: '#2e7d46', wall: 'aqua', url: { es: 'TFG · Universidad de Málaga', en: 'Thesis · University of Málaga' },
    tagline: {
      es: 'Un sistema de IA que predice el agua de los 7 embalses de Málaga a 90 días y simula sequías antes de que lleguen.',
      en: "An AI system that forecasts the water in Málaga's 7 reservoirs 90 days ahead and simulates droughts before they hit.",
    },
    stats: {
      es: [['−52 %', 'de error a 30 días frente a la referencia'], ['11', 'modelos comparados, de ARIMA a redes de grafos'], ['60.000+', 'registros diarios de 25 años']],
      en: [['−52%', '30-day error vs. the baseline'], ['11', 'models benchmarked, from ARIMA to graph networks'], ['60,000+', 'daily records over 25 years']],
    },
    proves: {
      es: [
        'Sistema de IA de principio a fin: datos, investigación, entrenamiento en supercomputador, API y producto web.',
        'Rigor de investigación: evaluación a varios horizontes frente a una referencia, sin métricas infladas.',
        'Simulación de 5 escenarios climáticos sobre los 7 embalses a la vez con una red neuronal de grafos.',
      ],
      en: [
        'End-to-end AI system: data, research, supercomputer training, API and web product.',
        'Research-grade rigour: multi-horizon evaluation against a baseline, no inflated metrics.',
        'Simulation of 5 climate scenarios across all 7 reservoirs at once with a graph neural network.',
      ],
    },
    stack: ['Python', 'PyTorch', 'GNN · LSTM', 'FastAPI', 'Express', 'React', 'HPC Picasso'],
    shots: [['aqua-dashboard', 'kb'], ['aqua-map', 'kb'], ['aqua-comparativa', 'kb']],
    phone: null, link: null, linkLabel: null, aqua: true,
    keys: 'python pytorch lstm gcn gnn grafos graph series temporales time series forecasting predicción prediction fastapi express react hpc picasso machine learning deep learning embalses reservoirs agua water sequía drought tfg thesis datos data',
    case: {
      role: { es: 'Proyecto individual: investigación, ingeniería de datos, modelado, backend y frontend.', en: 'Solo project: research, data engineering, modelling, backend and frontend.' },
      problem: {
        es: 'En 2024 los embalses de Málaga tocaron su mínimo histórico: un 24 % de capacidad media, tras cuatro años de caída continua. Anticipar cuánta agua habrá en las próximas semanas, y qué pasaría si no llueve, es clave para planificar; pero los datos están dispersos y los modelos estacionales clásicos fallan ante una sequía sin precedentes.',
        en: "In 2024 Málaga's reservoirs hit their record low: 24% average capacity, after four straight years of decline. Anticipating how much water there will be in the coming weeks, and what happens if it doesn't rain, is key to planning; but the data is scattered and classic seasonal models break down in an unprecedented drought.",
      },
      solution: {
        es: 'Diseñé y construí una plataforma de previsión completa: un pipeline que unifica 25 años de datos hidrológicos y meteorológicos, un benchmark de 11 modelos en tres familias, entrenamiento en el supercomputador Picasso de la UMA y una aplicación web que convierte el modelo en decisiones, con mapa, comparativa, simulador de escenarios y asistente en lenguaje natural.',
        en: 'I designed and built a complete forecasting platform: a pipeline unifying 25 years of hydrological and weather data, a benchmark of 11 models across three families, training on the University of Málaga\'s Picasso supercomputer, and a web app that turns the model into decisions, with a map, model comparison, scenario simulator and natural-language assistant.',
      },
      arch: {
        es: [['Datos', 'SAIH Hidrosur + AEMET · 2000–2024 · pandas, notebooks y scripts reproducibles'], ['Modelos', 'ARIMA, SARIMA, Prophet, Random Forest, XGBoost, 4 variantes de LSTM y GCN-LSTM en PyTorch'], ['Entrenamiento', 'Supercomputador Picasso (HPC de la UMA)'], ['Servicio', 'FastAPI + PyTorch · BFF en Express 5 con SQLite, Drizzle y Zod · asistente con LLM (OpenAI) y parser de respaldo'], ['Producto', 'React 18, Vite, Tailwind, Recharts, Leaflet y Framer Motion']],
        en: [['Data', 'SAIH Hidrosur + AEMET · 2000–2024 · pandas, reproducible notebooks and scripts'], ['Models', 'ARIMA, SARIMA, Prophet, Random Forest, XGBoost, 4 LSTM variants and a GCN-LSTM in PyTorch'], ['Training', 'Picasso supercomputer (University of Málaga HPC)'], ['Serving', 'FastAPI + PyTorch · Express 5 BFF with SQLite, Drizzle and Zod · LLM assistant (OpenAI) with a fallback parser'], ['Product', 'React 18, Vite, Tailwind, Recharts, Leaflet and Framer Motion']],
      },
      decisions: {
        es: [
          'Evaluación honesta: medir a 7, 14, 30 y 60 días con predicción encadenada frente a la persistencia, porque a un día vista cualquier modelo, incluida la referencia, da R² ≈ 0,999.',
          'Variables hidrológicas: lluvia acumulada a 30 días y codificación cíclica del día del año, porque la lluvia llega al embalse con retraso y de forma acumulada.',
          'Predecir el cambio diario en lugar del nivel absoluto, para que las simulaciones de sequía o lluvia den trayectorias físicamente coherentes.',
          'Una red de grafos (GCN-LSTM) que modela los 7 embalses como un sistema conectado y los simula de forma conjunta.',
          'Escenarios anclados en años reales (2002, 2010, 2017, 2023) y una prueba de estrés con un 30 % menos de lluvia que el año más seco.',
          'Cada familia en su horizonte: el LSTM con meteorología manda de 7 a 60 días y SARIMA mensual de 1 a 6 meses; juntos cubren todo el rango útil para planificar.',
        ],
        en: [
          'Honest evaluation: measure at 7, 14, 30 and 60 days with chained forecasts against persistence, because one day ahead any model, the baseline included, scores R² ≈ 0.999.',
          'Hydrological features: 30-day cumulative rainfall and cyclical day-of-year encoding, because rain reaches the reservoir with a delay and cumulatively.',
          'Predict the daily change instead of the absolute level, so drought or rain simulations produce physically coherent trajectories.',
          'A graph network (GCN-LSTM) that models the 7 reservoirs as a connected system and simulates them jointly.',
          'Scenarios anchored in real years (2002, 2010, 2017, 2023) plus a stress test with 30% less rain than the driest year.',
          'Each model family on its own horizon: the weather-aware LSTM leads from 7 to 60 days and monthly SARIMA from 1 to 6 months; together they cover the full planning range.',
        ],
      },
      impact: {
        es: [
          'A 30 días, el LSTM multivariante reduce el error un 52 % frente a la referencia (RMSE 5,7 frente a 12,0 puntos de capacidad).',
          'A 60 días mantiene un NSE de 0,70 cuando la referencia cae a 0,07: sigue prediciendo donde los métodos simples dejan de hacerlo.',
          'Simulador a 90 días para los 7 embalses y 5 escenarios, con estados de alerta y un asistente que convierte preguntas en simulaciones.',
        ],
        en: [
          'At 30 days, the multivariate LSTM cuts the error by 52% against the baseline (RMSE 5.7 vs. 12.0 capacity points).',
          'At 60 days it holds an NSE of 0.70 while the baseline drops to 0.07: it keeps forecasting where simple methods stop working.',
          'A 90-day simulator for all 7 reservoirs and 5 scenarios, with alert levels and an assistant that turns questions into simulations.',
        ],
      },
      next: { es: 'Un LSTM global para los 7 embalses, bandas de incertidumbre con conformal prediction y datos actualizados cada día de forma automática.', en: 'A global LSTM for all 7 reservoirs, uncertainty bands with conformal prediction and automatically refreshed daily data.' },
    },
  },
  {
    id: 'lookit', metric: { es: '9.000+ prendas', en: '9,000+ items' },  name: 'LOOKIT', cats: ['ia', 'prod'], live: true,
    kind: { es: 'Producto propio · 2026', en: 'Own product · 2026' },
    logo: 'img/logos/lookit.svg', plate: null, tint: '#a8d400', wall: 'lookit', url: 'lookit.es',
    tagline: {
      es: 'El buscador de la moda española: 24 marcas y más de 9.000 prendas en una sola búsqueda, actualizado cada hora.',
      en: 'The search engine for Spanish fashion: 24 brands and 9,000+ items in a single search, refreshed every hour.',
    },
    stats: {
      es: [['24', 'marcas españolas'], ['9.000+', 'prendas indexadas'], ['1 h', 'entre actualizaciones del catálogo']],
      en: [['24', 'Spanish brands'], ['9,000+', 'items indexed'], ['1 h', 'between catalogue refreshes']],
    },
    proves: {
      es: [
        'Producto en producción que construyo y opero en solitario: datos, búsqueda, notificaciones, SEO y contenido.',
        'IA con criterio: mi motor de búsqueda resuelve la mayoría de consultas y el LLM solo entra cuando hace falta, con menos coste y latencia.',
        'Privacidad por diseño: avisos sin cuentas, con claves HMAC y datos cifrados con AES-256-GCM.',
      ],
      en: [
        'A live product I build and run on my own: data, search, notifications, SEO and content.',
        'AI with judgement: my own search engine handles most queries and the LLM only steps in when needed, cutting cost and latency.',
        'Privacy by design: account-free alerts with HMAC keys and AES-256-GCM encrypted data.',
      ],
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Redis', 'Web Push', 'Gemini', 'Vercel'],
    shots: [['lookit-home', 'kb'], ['lookit-tall', 'tall']], phone: 'lookit-mobile',
    link: 'https://lookit.es', linkLabel: 'lookit.es',
    keys: 'next nextjs react typescript redis vercel gemini llm búsqueda search moda fashion shopify pwa push seo remotion vídeo video redes social producto product isr cifrado encryption',
    case: {
      role: { es: 'Fundador y único ingeniero: producto, diseño, desarrollo, datos y contenido.', en: 'Founder and sole engineer: product, design, development, data and content.' },
      problem: {
        es: 'La moda española independiente está repartida en decenas de tiendas: comparar precios, encontrar una talla o enterarte de un lanzamiento obliga a abrir una web por marca.',
        en: 'Independent Spanish fashion is spread across dozens of stores: comparing prices, finding a size or catching a drop means opening one site per brand.',
      },
      solution: {
        es: 'Una plataforma que ingiere cada hora el catálogo de 24 marcas, lo normaliza en un único índice y ofrece búsqueda en lenguaje natural, comparador, armario compartible y avisos de lanzamientos, bajadas de precio y reposiciones. La compra se hace en la web oficial de cada marca.',
        en: 'A platform that ingests 24 brand catalogues every hour, normalises them into a single index and offers natural-language search, a comparison tool, a shareable wardrobe and alerts for drops, price cuts and restocks. Purchases happen on each brand\'s official store.',
      },
      arch: {
        es: [['Ingesta', 'Catálogos públicos de Shopify · descarga concurrente con límite de peticiones · caché por tienda (1 h)'], ['Catálogo', 'JSON estático regenerado por ISR · la portada carga en dos tiempos para ser instantánea'], ['Búsqueda', 'Parser propio de marca, prenda, color, talla, precio y rebajas + Gemini como último recurso'], ['Avisos', 'Upstash Redis · Web Push (VAPID) · Resend · candado distribuido para la pasada horaria'], ['Plataforma', 'Next.js 16, React 19, Tailwind 4, Zustand y Framer Motion en Vercel']],
        en: [['Ingestion', 'Public Shopify catalogues · rate-limited concurrent fetching · per-store cache (1 h)'], ['Catalogue', 'Static JSON regenerated via ISR · two-stage home load so it feels instant'], ['Search', 'Custom parser for brand, item, colour, size, price and sales + Gemini as a last resort'], ['Alerts', 'Upstash Redis · Web Push (VAPID) · Resend · distributed lock for the hourly run'], ['Platform', 'Next.js 16, React 19, Tailwind 4, Zustand and Framer Motion on Vercel']],
      },
      decisions: {
        es: [
          'Caché independiente por tienda y catálogo servido como JSON estático: escala a decenas de marcas sin servidores propios y con un coste casi nulo.',
          'Búsqueda que entiende la intención y relaja la consulta si no hay resultados exactos; el LLM es un respaldo, no el camino principal.',
          'Identidad sin cuentas: cada dispositivo genera una clave, el servidor solo guarda su HMAC y el resto va cifrado. Correo con doble confirmación y baja en un clic (RFC 8058).',
          'Detección de lanzamientos con umbrales (10 prendas nuevas en 24 h, 5 en marcas pequeñas) para que las reposiciones no generen ruido.',
          'SEO programático: páginas por marca y categoría, sitemap, llms.txt y PWA instalable.',
        ],
        en: [
          'Independent per-store caching and a catalogue served as static JSON: scales to dozens of brands with no servers of my own and near-zero cost.',
          'Search that understands intent and relaxes the query when there are no exact matches; the LLM is a fallback, not the main path.',
          'Account-free identity: each device generates a key, the server only stores its HMAC and everything else is encrypted. Double opt-in email and one-click unsubscribe (RFC 8058).',
          'Drop detection with thresholds (10 new items in 24 h, 5 for small brands) so restocks do not create noise.',
          'Programmatic SEO: brand and category pages, sitemap, llms.txt and an installable PWA.',
        ],
      },
      impact: {
        es: ['24 marcas y más de 9.000 prendas indexadas y actualizadas cada hora, en producción en lookit.es.', 'Avisos por web push o correo sin pedir registro a nadie.', 'Contenido para redes generado por código con Remotion, recorte de fondo con IA y voz sincronizada con Whisper.'],
        en: ['24 brands and 9,000+ items indexed and refreshed hourly, live at lookit.es.', 'Web push and email alerts without asking anyone to sign up.', 'Social content generated from code with Remotion, AI background removal and Whisper-synced voiceover.'],
      },
      next: { es: 'Métricas de uso públicas, recomendaciones personalizadas y más marcas.', en: 'Public usage metrics, personalised recommendations and more brands.' },
    },
  },
  {
    id: 'lucia', metric: { es: '13 obras recorribles en 3D', en: '13 works to walk through in 3D' },  name: 'Lucía Gascón', cats: ['cli'], live: true,
    kind: { es: 'Cliente · Web de artista · 2026', en: 'Client · Artist website · 2026' },
    logo: 'img/logos/lucia-gascon.png', plate: null, tint: '#8c2f28', wall: 'lucia', url: 'luciagascon.es',
    tagline: {
      es: 'Una exposición en 3D que se recorre desde el navegador: cada gesto te lleva a la siguiente obra.',
      en: 'A 3D exhibition you walk through in the browser: every gesture takes you to the next painting.',
    },
    stats: {
      es: [['13', 'obras recorribles en 3D'], ['1:1', 'escala real, como en un museo'], ['CMS', 'propio y sin servidor']],
      en: [['13', 'works to walk through in 3D'], ['1:1', 'real scale, like a museum'], ['CMS', 'custom and serverless']],
    },
    proves: {
      es: [
        'Experiencia a medida: la web traduce el mundo de la artista en una visita, no en una plantilla.',
        'WebGL que carga solo cuando hace falta y funciona en el móvil, con vista clásica de respaldo.',
        'Autonomía total de la clienta: un CMS propio sin servidor para subir obra y cambiar la sala.',
      ],
      en: [
        "Bespoke experience: the site turns the artist's world into a visit, not a template.",
        'WebGL that only loads when needed and runs on mobile, with a classic fallback view.',
        'Full client autonomy: a custom serverless CMS to upload work and restyle the room.',
      ],
    },
    stack: ['three.js', 'WebGL', 'JavaScript', 'Cloudflare Pages', 'Functions', 'KV'],
    shots: [['lucia-3d-b', 'kb'], ['lucia-home', 'kb']], phone: 'lucia-mobile',
    link: 'https://luciagascon.es', linkLabel: 'luciagascon.es',
    keys: 'three threejs 3d webgl galería gallery arte art pintora painter cloudflare kv functions creativo creative diseño design cliente client gestos gestures museo museum cms',
    case: {
      role: { es: 'Diseño de producto, desarrollo 3D, backend y despliegue.', en: 'Product design, 3D development, backend and deployment.' },
      problem: {
        es: 'Una pintora quería que su web transmitiera la sensación de visitar una exposición, no de navegar por un catálogo, y poder gestionarla sin depender de nadie.',
        en: 'A painter wanted a website that felt like visiting an exhibition, not browsing a catalogue, and that could be managed without depending on anyone.',
      },
      solution: {
        es: 'Una galería virtual en three.js en la que la cámara avanza sobre un raíl con una parada delante de cada cuadro, una vista clásica para quien prefiera leer y un panel de administración propio para gestionar obras y salas.',
        en: 'A virtual gallery in three.js where the camera moves along a rail with a stop in front of each painting, a classic view for those who prefer to read, and a custom admin panel to manage works and rooms.',
      },
      arch: {
        es: [['Experiencia', 'three.js · cámara sobre raíl · un gesto = una obra'], ['Rendimiento', 'Motor 3D con carga diferida · detección de WebGL con vista clásica de respaldo'], ['Backend', 'Cloudflare Pages Functions + KV · sin servidores que mantener'], ['Gestión', 'Panel de administración propio: obras, textos y color de las salas']],
        en: [['Experience', 'three.js · rail-guided camera · one gesture = one painting'], ['Performance', 'Lazy-loaded 3D engine · WebGL detection with a classic fallback'], ['Backend', 'Cloudflare Pages Functions + KV · no servers to maintain'], ['Management', 'Custom admin panel: works, copy and room colours']],
      },
      decisions: {
        es: [
          'Navegación guiada por raíl: un gesto lleva a la siguiente obra, así nadie se pierde en un espacio 3D.',
          'Escala real (1 unidad = 1 metro, cuadros colgados a 1,5 m): cada obra se ve a su tamaño, como en un museo.',
          'Al entrar se elige la vista, como en el directorio de un museo: recorrido 3D o vista clásica.',
          'Backend sin servidor en el edge de Cloudflare: coste mínimo y nada que mantener para la clienta.',
        ],
        en: [
          'Rail-guided navigation: one gesture takes you to the next painting, so nobody gets lost in 3D space.',
          'Real scale (1 unit = 1 metre, paintings hung at 1.5 m): every work is shown at its true size, like in a museum.',
          'Visitors choose how to enter, like a museum directory: 3D walk-through or classic view.',
          'Serverless backend on the Cloudflare edge: minimal cost and nothing for the client to maintain.',
        ],
      },
      impact: {
        es: ['luciagascon.es en producción, con 13 obras recorribles en 3D.', 'La artista actualiza su exposición sola desde el panel.'],
        en: ['luciagascon.es is live, with 13 works to walk through in 3D.', 'The artist updates the exhibition independently from the panel.'],
      },
      next: { es: 'Un vídeo del recorrido para redes y nuevas salas temáticas.', en: 'A walk-through video for social media and new themed rooms.' },
    },
  },
  {
    id: 'wild', metric: { es: '100 % editable por el cliente', en: '100% client-editable' },  name: 'WildCamper', cats: ['cli', 'prod'], live: true,
    kind: { es: 'Cliente · Plataforma de negocio · 2026', en: 'Client · Business platform · 2026' },
    logo: 'img/logos/wildcamper.png', plate: null, tint: '#e8892b', wall: 'wild', url: 'wildcamper.es',
    tagline: {
      es: 'Venta, alquiler y reservas de furgonetas camper, con un panel desde el que el dueño controla toda la web.',
      en: 'Camper van sales, rentals and bookings, with a panel from which the owner controls the whole site.',
    },
    stats: {
      es: [['100 %', 'del sitio editable sin código'], ['RLS', 'seguridad en la base de datos'], ['PWA', 'instalable y sin conexión']],
      en: [['100%', 'of the site editable, no code'], ['RLS', 'database-level security'], ['PWA', 'installable and offline']],
    },
    proves: {
      es: [
        'Seguridad profesional: autenticación real, Row Level Security y tests que bloquean credenciales en el código.',
        'Pensado para el negocio: el cliente cambia textos, colores, catálogo y disponibilidad sin tocar una línea.',
        'Arquitectura ligera sin build: rápida, barata de alojar y fácil de mantener.',
      ],
      en: [
        'Professional security: real authentication, Row Level Security and tests that block credentials in the code.',
        'Built for the business: the client changes copy, colours, catalogue and availability without touching code.',
        'Lightweight, build-free architecture: fast, cheap to host and easy to maintain.',
      ],
    },
    stack: ['JavaScript', 'Supabase', 'PostgreSQL · RLS', 'Cloudflare', 'Shopify', 'PWA'],
    shots: [['wild-home', 'kb'], ['wild-tall', 'tall']], phone: 'wild-mobile',
    link: 'https://wildcamper.es', linkLabel: 'wildcamper.es',
    keys: 'supabase postgres postgresql rls auth seguridad security reservas bookings calendario calendar pwa offline shopify cliente client furgonetas vans camper panel admin tests',
    case: {
      role: { es: 'Desarrollo completo: web pública, base de datos, seguridad y panel de administración.', en: 'Full build: public site, database, security and admin panel.' },
      problem: {
        es: 'Un taller de camperización necesitaba vender y alquilar furgonetas, gestionar reservas y enseñar sus trabajos, y poder actualizarlo todo sin depender de un desarrollador.',
        en: 'A van conversion workshop needed to sell and rent vans, manage bookings and showcase its work, and update everything without depending on a developer.',
      },
      solution: {
        es: 'Una plataforma de siete secciones públicas con catálogo dinámico, calendario de reservas y galería de trabajos sobre Supabase, con un panel de administración que controla el 100 % del contenido y del aspecto del sitio.',
        en: 'A platform with seven public sections, a dynamic catalogue, booking calendar and work gallery on Supabase, with an admin panel that controls 100% of the content and look of the site.',
      },
      arch: {
        es: [['Front', 'HTML, CSS y JavaScript modular sin build · sistema de diseño con variables CSS'], ['Datos', 'Supabase (PostgreSQL) · esquema con RLS · Storage para imágenes'], ['Seguridad', 'Supabase Auth · lectura pública y escritura solo para administradores · escape de XSS'], ['Plataforma', 'PWA con service worker · Cloudflare · Shopify Buy Button'], ['Calidad', 'Tests con el runner nativo de Node sobre la lógica y la estructura']],
        en: [['Front end', 'Modular HTML, CSS and JavaScript, no build step · CSS-variable design system'], ['Data', 'Supabase (PostgreSQL) · RLS schema · Storage for images'], ['Security', 'Supabase Auth · public reads, admin-only writes · XSS escaping'], ['Platform', 'PWA with a service worker · Cloudflare · Shopify Buy Button'], ['Quality', "Tests with Node's native runner on logic and structure"]],
      },
      decisions: {
        es: [
          'Seguridad en la base de datos y no en el front: políticas RLS que solo dejan escribir a administradores autenticados.',
          'Tests automáticos que fallan si aparecen credenciales en el código.',
          'Personalización total desde el panel: textos, colores, estadísticas, contacto, catálogo y fechas bloqueadas.',
          'Sin framework ni proceso de build: carga rápida y mantenimiento mínimo.',
        ],
        en: [
          'Security enforced in the database, not the front end: RLS policies that only let authenticated admins write.',
          'Automated tests that fail if credentials ever appear in the code.',
          'Full customisation from the panel: copy, colours, stats, contact details, catalogue and blocked dates.',
          'No framework or build step: fast loading and minimal maintenance.',
        ],
      },
      impact: {
        es: ['wildcamper.es en producción y gestionada por el propio cliente.', 'Reservas con calendario y disponibilidad controlada desde el panel.'],
        en: ['wildcamper.es is live and managed directly by the client.', 'Bookings with a calendar and availability managed from the panel.'],
      },
      next: { es: 'Tienda online con Shopify y un antes y después interactivo de las camperizaciones.', en: 'A Shopify online store and an interactive before-and-after of the conversions.' },
    },
  },
  {
    id: 'detemp', metric: { es: '210 productos · 451 comercios', en: '210 products · 451 shops' },  name: 'DeTemporada', cats: ['prod'], live: false,
    kind: { es: 'Producto propio · PWA · 2026', en: 'Own product · PWA · 2026' },
    logo: 'img/logos/detemporada.svg', plate: null, tint: '#f0531c', wall: 'detemp', url: 'DeTemporada',
    tagline: {
      es: 'Qué está de temporada en tu comunidad este mes, cuánto cuesta y dónde comprarlo cerca.',
      en: "What's in season in your region this month, what it costs and where to buy it nearby.",
    },
    stats: {
      es: [['210', 'productos con receta'], ['451', 'comercios locales geolocalizados'], ['17', 'comunidades autónomas']],
      en: [['210', 'products with recipes'], ['451', 'geolocated local shops'], ['17', 'Spanish regions']],
    },
    proves: {
      es: [
        'Ingeniería de datos: temporadas de fuentes oficiales y un directorio de comercios verificado y geolocalizado con scripts propios.',
        'Producto offline-first: sin backend, instalable y funcional sin conexión.',
        'Calidad comprobada con tests de extremo a extremo en un navegador real.',
      ],
      en: [
        'Data engineering: seasons from official sources and a verified, geocoded shop directory built with my own scripts.',
        'Offline-first product: no backend, installable and fully usable without a connection.',
        'Quality verified with end-to-end tests in a real browser.',
      ],
    },
    stack: ['React', 'Vite', 'PWA', 'Node.js', 'Geocoding', 'E2E'],
    shots: [['detemp-home', 'kb'], ['detemp-tall', 'tall']], phone: 'detemp-mobile',
    link: 'https://de-temporada-mauve.vercel.app', linkLabel: 'DeTemporada',
    keys: 'react vite pwa offline datos data geolocalización geocoding mapa map comercios shops alimentos food temporada seasonal recetas recipes producto product tests e2e',
    case: {
      role: { es: 'Producto, datos y desarrollo.', en: 'Product, data and development.' },
      problem: {
        es: 'Saber qué está de temporada en tu zona, a qué precio y dónde comprarlo a productores locales obliga a consultar fuentes dispersas y poco accesibles.',
        en: 'Knowing what is in season locally, at what price and where to buy it from local producers means digging through scattered, hard-to-use sources.',
      },
      solution: {
        es: 'Una PWA que cruza calendarios oficiales de temporada con un directorio de comercios locales verificados: fichas con foto, precio orientativo, calendario y receta, destacados del mes, lista de la compra compartible y comercios ordenados por cercanía.',
        en: 'A PWA that combines official seasonal calendars with a directory of verified local shops: product pages with photo, indicative price, calendar and recipe, monthly highlights, a shareable shopping list and shops sorted by distance.',
      },
      arch: {
        es: [['Datos', 'Ministerio de Agricultura, vedas, órdenes de caza y pliegos DOP/IGP · 210 fichas'], ['Comercios', 'Script de geolocalización con caché y correcciones manuales · 451 comercios'], ['Imágenes', 'Wikimedia Commons con autor y licencia en cada ficha'], ['App', 'React + Vite · PWA con caché sin conexión · API opcional en Vercel'], ['Calidad', 'Tests E2E con clics reales en Chrome headless']],
        en: [['Data', 'Spanish Ministry of Agriculture, fishing and hunting seasons, PDO/PGI specifications · 210 entries'], ['Shops', 'Geocoding script with caching and manual overrides · 451 shops'], ['Images', 'Wikimedia Commons with author and licence on every entry'], ['App', 'React + Vite · PWA with offline cache · optional API on Vercel'], ['Quality', 'E2E tests with real clicks in headless Chrome']],
      },
      decisions: {
        es: [
          'Fuentes oficiales para cada temporada, también para productos regionales con denominación de origen.',
          'Todo en el cliente: sin backend que mantener, instalable y rápido incluso sin conexión.',
          'Destacados automáticos del mes: «Recién llegados» y «Últimos días».',
          'Imágenes con licencia libre y atribución en cada ficha.',
        ],
        en: [
          'Official sources for every season, including regional products with protected designations of origin.',
          'Everything client-side: no backend to maintain, installable and fast even offline.',
          'Automatic monthly highlights: "Just in" and "Last days".',
          'Openly licensed images with attribution on every entry.',
        ],
      },
      impact: {
        es: ['210 productos y 451 comercios en las 17 comunidades.', 'Flujos principales cubiertos con tests de extremo a extremo.'],
        en: ['210 products and 451 shops across all 17 regions.', 'Core flows covered by end-to-end tests.'],
      },
      next: { es: 'Dominio propio y lanzamiento público.', en: 'Own domain and public launch.' },
    },
  },
];
