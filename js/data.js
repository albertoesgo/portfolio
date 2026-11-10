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
    es: 'Desarrollo sistemas de machine learning de extremo a extremo —datos, modelado, evaluación y despliegue— y los productos web que los ponen en producción.',
    en: 'I build end-to-end machine learning systems — data, modelling, evaluation and deployment — and the web products that put them into production.',
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
    id: 'aqua', name: { es: 'Predicción espaciotemporal de embalses', en: 'Spatio-temporal reservoir forecasting' }, short: { es: 'TFG', en: 'Thesis' }, cats: ['ia'], live: false,
    metric: { es: 'RMSE −52 % a 30 días', en: 'RMSE −52% at 30 days' },
    kind: { es: 'Trabajo Fin de Grado · Deep learning · 2025–2026', en: "Bachelor's thesis · Deep learning · 2025–2026" },
    logo: 'img/logos/aquaandalucia.svg', plate: '#ffffff', tint: '#2e7d46', wall: 'aqua', url: { es: 'TFG · Universidad de Málaga', en: 'Thesis · University of Málaga' },
    tagline: {
      es: 'Predicción espaciotemporal del nivel de 7 embalses con LSTM y redes de grafos (GCN-LSTM), evaluada a varios horizontes y con simulación de escenarios a 90 días.',
      en: 'Spatio-temporal forecasting of 7 reservoirs with LSTMs and graph networks (GCN-LSTM), evaluated across horizons, with 90-day scenario simulation.',
    },
    stats: {
      es: [['−52 %', 'RMSE a 30 días frente a persistencia'], ['0,70', 'NSE a 60 días (persistencia: 0,07)'], ['11', 'modelos en 3 familias']],
      en: [['−52%', '30-day RMSE vs. persistence'], ['0.70', '60-day NSE (persistence: 0.07)'], ['11', 'models across 3 families']],
    },
    proves: {
      es: [
        'Pipeline de ML completo: ingesta y limpieza de series SAIH/AEMET, feature engineering, entrenamiento en HPC, inferencia vía API y visualización.',
        'Evaluación autorregresiva multi-horizonte (7–60 días) con orígenes móviles frente a persistencia y partición temporal sin fuga de datos.',
        'Modelado espaciotemporal con GCN-LSTM (T-GCN) sobre un grafo gaussiano de distancias y simulación what-if de los 7 embalses a la vez.',
      ],
      en: [
        'Full ML pipeline: SAIH/AEMET series ingestion and cleaning, feature engineering, HPC training, API inference and visualisation.',
        'Autoregressive multi-horizon evaluation (7–60 days) with rolling origins against persistence, on a leak-free temporal split.',
        'Spatio-temporal modelling with a GCN-LSTM (T-GCN) over a Gaussian distance graph, and joint what-if simulation of all 7 reservoirs.',
      ],
    },
    stack: ['Python', 'PyTorch', 'LSTM · GCN', 'statsmodels', 'XGBoost', 'FastAPI', 'React · TS', 'HPC Picasso'],
    shots: [['aqua-dashboard', 'kb'], ['aqua-map', 'kb'], ['aqua-comparativa', 'kb']],
    phone: null, link: null, linkLabel: null, aqua: true,
    keys: 'tfg thesis python pytorch lstm gcn gnn t-gcn grafos graph series temporales time series forecasting predicción prediction espaciotemporal spatio-temporal fastapi express react hpc picasso machine learning deep learning embalses reservoirs agua water sequía drought nse rmse arima sarima xgboost prophet datos data',
    case: {
      role: { es: 'Proyecto individual: ingeniería de datos, modelado, evaluación experimental, backend de inferencia y frontend.', en: 'Solo project: data engineering, modelling, experimental evaluation, inference backend and frontend.' },
      problem: {
        es: 'En 2024 los embalses de Málaga marcaron el mínimo de la serie: un 24 % de capacidad media tras cuatro años de descenso. La relación entre meteorología y nivel es acumulativa, no lineal y diferida (|r| < 0,10 incluso con desfases de 60 días), y el periodo de test (2020–2024) es una sequía sin precedentes en el histórico de entrenamiento: un régimen fuera de distribución para los modelos estacionales clásicos.',
        en: 'In 2024 Málaga\'s reservoirs hit the record low of the series: 24% average capacity after four years of decline. The weather–level relationship is cumulative, non-linear and lagged (|r| < 0.10 even at 60-day lags), and the test period (2020–2024) is a drought with no precedent in the training history: an out-of-distribution regime for classic seasonal models.',
      },
      solution: {
        es: 'Plataforma de predicción sobre series temporales multivariantes: dataset diario integrado (SAIH Hidrosur + AEMET OpenData, 2000–2024), benchmark de 11 modelos en tres familias (estadísticos, ML tabular y deep learning), entrenamiento en el clúster Picasso y una arquitectura de servicio en tres capas —FastAPI para la inferencia bajo demanda, BFF en Express y SPA en React— con simulador what-if y asistente en lenguaje natural.',
        en: 'A forecasting platform on multivariate time series: an integrated daily dataset (SAIH Hidrosur + AEMET OpenData, 2000–2024), a benchmark of 11 models across three families (statistical, tabular ML and deep learning), training on the Picasso cluster, and a three-tier serving architecture — FastAPI for on-demand inference, an Express BFF and a React SPA — with a what-if simulator and a natural-language assistant.',
      },
      arch: {
        es: [['Datos', 'SAIH Hidrosur + AEMET OpenData · interpolación, capping y validación de invariantes · ~9.100 observaciones por embalse'], ['Modelos', 'ARIMA/SARIMA (AIC), Prophet, Random Forest, XGBoost, ensemble ponderado · LSTM uni/multivariante, transfer learning, ST-LSTM con atención · GCN-LSTM (T-GCN)'], ['Entrenamiento', 'PyTorch en Picasso (HPC) · Adam, MSE, early stopping (paciencia 20), ventana de 90 días, semilla fija'], ['Servicio', 'FastAPI + Pydantic (/predict, /scenarios, /ask) · BFF en Express 5 con Drizzle (SQLite) y Zod · LLM con parser de respaldo'], ['Producto', 'React 18 + TypeScript, Vite, Tailwind, shadcn/ui, Recharts y Leaflet']],
        en: [['Data', 'SAIH Hidrosur + AEMET OpenData · interpolation, capping and invariant validation · ~9,100 observations per reservoir'], ['Models', 'ARIMA/SARIMA (AIC), Prophet, Random Forest, XGBoost, weighted ensemble · uni/multivariate LSTM, transfer learning, attention ST-LSTM · GCN-LSTM (T-GCN)'], ['Training', 'PyTorch on Picasso (HPC) · Adam, MSE, early stopping (patience 20), 90-day window, fixed seed'], ['Serving', 'FastAPI + Pydantic (/predict, /scenarios, /ask) · Express 5 BFF with Drizzle (SQLite) and Zod · LLM with a fallback parser'], ['Product', 'React 18 + TypeScript, Vite, Tailwind, shadcn/ui, Recharts and Leaflet']],
      },
      decisions: {
        es: [
          'Persistencia como línea base obligatoria: a un paso todos los modelos saturan en R² ≈ 0,999, así que la evaluación principal es autorregresiva a 7, 14, 30 y 60 días con orígenes móviles.',
          'Partición temporal estricta (70/15/15) sin barajado y escaladores ajustados solo con el conjunto de entrenamiento, para evitar fuga de información.',
          'Feature engineering hidrológico: retardos de 1 a 30 días, medias móviles, precipitación acumulada a 30 días y codificación cíclica (seno/coseno) del día del año.',
          'Reformulación del GCN-LSTM para predecir incrementos (Δ) en lugar del nivel absoluto: elimina el sesgo de persistencia y hace coherentes las simulaciones what-if.',
          'Grafo de 7 nodos con núcleo gaussiano sobre distancias haversine y normalización de Kipf–Welling, con predicción conjunta de todos los embalses.',
          'Escenarios análogos con trayectorias meteorológicas reales (2002, 2010, 2017, 2023) y una prueba de estrés sintética (2023 con −30 % de precipitación) para no salir de la distribución de entrenamiento.',
        ],
        en: [
          'Persistence as a mandatory baseline: one step ahead every model saturates at R² ≈ 0.999, so the main evaluation is autoregressive at 7, 14, 30 and 60 days with rolling origins.',
          'Strict temporal split (70/15/15) without shuffling and scalers fitted on the training set only, to prevent data leakage.',
          'Hydrological feature engineering: 1–30 day lags, rolling means, 30-day cumulative precipitation and cyclical (sine/cosine) day-of-year encoding.',
          'GCN-LSTM reformulated to predict increments (Δ) instead of absolute level: removes persistence bias and makes what-if simulations physically coherent.',
          'A 7-node graph with a Gaussian kernel over haversine distances and Kipf–Welling normalisation, predicting all reservoirs jointly.',
          'Analog scenarios using real weather trajectories (2002, 2010, 2017, 2023) plus a synthetic stress test (2023 with −30% precipitation) to stay within the training distribution.',
        ],
      },
      impact: {
        es: [
          'LSTM multivariante: RMSE de 5,74 frente a 11,99 de la persistencia a 30 días (−52 %) y NSE de 0,70 a 60 días frente a 0,07.',
          'Familias complementarias: el LSTM con meteorología domina de 7 a 60 días y SARIMA mensual de 1 a 6 meses (R² de 0,45 a 3 meses frente a −0,32 de la persistencia).',
          'Inferencia what-if a 90 días para los 7 embalses con umbrales de alerta (20 % y 10 %) y un asistente que traduce lenguaje natural a parámetros de simulación.',
        ],
        en: [
          'Multivariate LSTM: RMSE of 5.74 vs. 11.99 for persistence at 30 days (−52%) and NSE of 0.70 at 60 days vs. 0.07.',
          'Complementary families: the weather-aware LSTM leads from 7 to 60 days and monthly SARIMA from 1 to 6 months (R² of 0.45 at 3 months vs. −0.32 for persistence).',
          '90-day what-if inference for all 7 reservoirs with alert thresholds (20% and 10%) and an assistant that maps natural language to simulation parameters.',
        ],
      },
      next: { es: 'LSTM global multi-embalse, predicción directa multi-horizonte con covariables futuras, intervalos por conformal prediction, grafo de conectividad hidrológica real e ingesta diaria automatizada del SAIH.', en: 'A global multi-reservoir LSTM, direct multi-horizon forecasting with future covariates, conformal prediction intervals, a graph based on real hydrological connectivity and automated daily SAIH ingestion.' },
    },
  },
  {
    id: 'lookit', name: 'LOOKIT', cats: ['ia', 'prod'], live: true,
    metric: { es: '9.000+ productos indexados', en: '9,000+ products indexed' },
    kind: { es: 'Producto propio · 2026', en: 'Own product · 2026' },
    logo: 'img/logos/lookit.svg', plate: null, tint: '#a8d400', wall: 'lookit', url: 'lookit.es',
    tagline: {
      es: 'Agregador y motor de búsqueda de moda española: 24 catálogos Shopify normalizados en un índice único y regenerado cada hora con ISR.',
      en: 'A Spanish fashion aggregator and search engine: 24 Shopify catalogues normalised into a single index, regenerated hourly with ISR.',
    },
    stats: {
      es: [['24', 'catálogos Shopify integrados'], ['9.000+', 'productos indexados'], ['1 h', 'ciclo de regeneración (ISR)']],
      en: [['24', 'Shopify catalogues integrated'], ['9,000+', 'products indexed'], ['1 h', 'regeneration cycle (ISR)']],
    },
    proves: {
      es: [
        'Producto en producción de extremo a extremo: ingesta, normalización, búsqueda, notificaciones, SEO programático y analítica.',
        'Búsqueda híbrida: parser de intención determinista con relajación de consultas y un LLM (Gemini) solo como fallback, para acotar coste y latencia.',
        'Privacidad por diseño: identidad sin cuentas con claves por dispositivo, HMAC y cifrado AES-256-GCM en reposo.',
      ],
      en: [
        'An end-to-end product in production: ingestion, normalisation, search, notifications, programmatic SEO and analytics.',
        'Hybrid search: a deterministic intent parser with query relaxation and an LLM (Gemini) only as a fallback, bounding cost and latency.',
        'Privacy by design: account-free identity with per-device keys, HMAC and AES-256-GCM encryption at rest.',
      ],
    },
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Upstash Redis', 'Web Push', 'Gemini', 'Vercel'],
    shots: [['lookit-home', 'kb'], ['lookit-tall', 'tall']], phone: 'lookit-mobile',
    link: 'https://lookit.es', linkLabel: 'lookit.es',
    keys: 'next nextjs react typescript redis vercel gemini llm búsqueda search moda fashion shopify pwa push seo isr remotion vídeo video redes social producto product cifrado encryption hmac',
    case: {
      role: { es: 'Fundador e ingeniero único: arquitectura, frontend, backend, datos, despliegue y contenido.', en: 'Founder and sole engineer: architecture, frontend, backend, data, deployment and content.' },
      problem: {
        es: 'La moda independiente española está repartida en decenas de tiendas Shopify sin un índice común: no hay forma de buscar, comparar precios ni detectar lanzamientos de forma transversal.',
        en: 'Independent Spanish fashion is spread across dozens of Shopify stores with no shared index: there is no way to search, compare prices or detect drops across them.',
      },
      solution: {
        es: 'Pipeline de ingesta que lee el catálogo público de cada tienda con concurrencia limitada, normaliza productos, variantes, tallas y precios a un esquema común y publica un catálogo estático regenerado por ISR. Sobre él se apoyan la búsqueda en lenguaje natural, el comparador, un armario compartible y un sistema de avisos (lanzamientos, bajadas de precio y reposiciones) por Web Push o correo.',
        en: 'An ingestion pipeline that reads each store\'s public catalogue with bounded concurrency, normalises products, variants, sizes and prices into a common schema, and publishes a static catalogue regenerated via ISR. On top of it sit natural-language search, a comparison tool, a shareable wardrobe and an alert system (drops, price cuts and restocks) over Web Push or email.',
      },
      arch: {
        es: [['Ingesta', 'Endpoints públicos de Shopify · pool de concurrencia · caché por tienda (1 h)'], ['Catálogo', 'JSON estático regenerado por ISR · render en servidor de la primera página y carga diferida del resto'], ['Búsqueda', 'Parser de marca, prenda, color, talla, precio y rebajas con relajación progresiva + Gemini como fallback'], ['Avisos', 'Upstash Redis · Web Push (VAPID) · Resend · candado distribuido para la pasada horaria'], ['Plataforma', 'Next.js 16 (App Router), React 19, Tailwind 4, Zustand y Framer Motion en Vercel']],
        en: [['Ingestion', 'Public Shopify endpoints · concurrency pool · per-store cache (1 h)'], ['Catalogue', 'Static JSON regenerated via ISR · server-rendered first page and deferred loading of the rest'], ['Search', 'Brand, item, colour, size, price and sales parser with progressive relaxation + Gemini as a fallback'], ['Alerts', 'Upstash Redis · Web Push (VAPID) · Resend · distributed lock for the hourly run'], ['Platform', 'Next.js 16 (App Router), React 19, Tailwind 4, Zustand and Framer Motion on Vercel']],
      },
      decisions: {
        es: [
          'Caché por tienda (cada entrada de la caché de datos de Next admite 2 MB) y catálogo servido como JSON estático: escala a decenas de marcas sin servidores propios y con coste casi nulo.',
          'Parser de intención con relajación progresiva de filtros; el LLM solo resuelve las consultas que el parser no cubre.',
          'Identidad sin cuentas: clave aleatoria por dispositivo, el servidor solo almacena su HMAC y el resto se cifra con AES-256-GCM. Doble opt-in y baja en un clic (RFC 8058).',
          'Detección de lanzamientos por umbral (≥ 10 altas en 24 h, 5 en catálogos pequeños) para filtrar las reposiciones.',
          'Pasada horaria de avisos disparada por el propio tráfico con un candado distribuido en Redis, y Vercel Cron / GitHub Actions como respaldo.',
        ],
        en: [
          'Per-store caching (each Next data-cache entry allows 2 MB) and a catalogue served as static JSON: scales to dozens of brands with no servers of my own and near-zero cost.',
          'An intent parser with progressive filter relaxation; the LLM only handles queries the parser does not cover.',
          'Account-free identity: a random per-device key, the server stores only its HMAC and everything else is encrypted with AES-256-GCM. Double opt-in and one-click unsubscribe (RFC 8058).',
          'Threshold-based drop detection (≥ 10 new items in 24 h, 5 for small catalogues) to filter out restocks.',
          'An hourly alert run triggered by traffic itself behind a distributed Redis lock, with Vercel Cron / GitHub Actions as a fallback.',
        ],
      },
      impact: {
        es: ['24 catálogos y más de 9.000 productos indexados y regenerados cada hora en lookit.es.', 'Avisos por Web Push o correo sin registro de usuarios.', 'Contenido para redes generado por código: Remotion, segmentación de fondo con IA y voz alineada con Whisper.'],
        en: ['24 catalogues and 9,000+ products indexed and regenerated hourly at lookit.es.', 'Web Push and email alerts with no user sign-up.', 'Social content generated from code: Remotion, AI background segmentation and Whisper-aligned voiceover.'],
      },
      next: { es: 'Métricas de uso públicas, recomendaciones personalizadas y más catálogos.', en: 'Public usage metrics, personalised recommendations and more catalogues.' },
    },
  },
  {
    id: 'lucia', name: 'Lucía Gascón', cats: ['cli'], live: true,
    metric: { es: 'Galería WebGL · 13 obras', en: 'WebGL gallery · 13 works' },
    kind: { es: 'Cliente · Web de artista · 2026', en: 'Client · Artist website · 2026' },
    logo: 'img/logos/lucia-gascon.png', plate: null, tint: '#8c2f28', wall: 'lucia', url: 'luciagascon.es',
    tagline: {
      es: 'Galería 3D en WebGL (three.js) con navegación guiada por raíl, escala métrica real y un CMS serverless sobre Cloudflare.',
      en: 'A WebGL (three.js) 3D gallery with rail-guided navigation, true metric scale and a serverless CMS on Cloudflare.',
    },
    stats: {
      es: [['13', 'obras en la escena 3D'], ['1:1', 'escala métrica real'], ['KV', 'CMS serverless en el edge']],
      en: [['13', 'works in the 3D scene'], ['1:1', 'true metric scale'], ['KV', 'serverless CMS on the edge']],
    },
    proves: {
      es: [
        'Escena three.js con la cámara interpolada sobre un raíl y una parada por obra: navegación 3D determinista, sin controles libres que desorienten.',
        'Rendimiento: el motor 3D se carga bajo demanda y hay una vista 2D de respaldo si el dispositivo no tiene WebGL.',
        'CMS propio sobre Cloudflare Pages Functions + KV: la clienta gestiona obras y salas sin intervención técnica.',
      ],
      en: [
        'A three.js scene with the camera interpolated along a rail and one stop per work: deterministic 3D navigation with no free controls to get lost in.',
        'Performance: the 3D engine loads on demand, with a 2D fallback view when the device has no WebGL.',
        'A custom CMS on Cloudflare Pages Functions + KV: the client manages works and rooms with no technical help.',
      ],
    },
    stack: ['three.js', 'WebGL', 'JavaScript (ES modules)', 'Cloudflare Pages', 'Functions', 'KV'],
    shots: [['lucia-3d-b', 'kb'], ['lucia-home', 'kb']], phone: 'lucia-mobile',
    link: 'https://luciagascon.es', linkLabel: 'luciagascon.es',
    keys: 'three threejs 3d webgl galería gallery arte art pintora painter cloudflare kv functions serverless creativo creative diseño design cliente client gestos gestures museo museum cms',
    case: {
      role: { es: 'Diseño de interacción, desarrollo WebGL, backend serverless y despliegue.', en: 'Interaction design, WebGL development, serverless backend and deployment.' },
      problem: {
        es: 'La artista necesitaba una web que reprodujera la experiencia de una exposición física —escala, recorrido y ritmo— y que pudiera mantener sin conocimientos técnicos.',
        en: 'The artist needed a website that reproduced the experience of a physical exhibition — scale, route and pace — and that could be maintained without technical knowledge.',
      },
      solution: {
        es: 'Escena three.js con la cámara interpolada sobre un raíl y una parada por obra, geometría a escala métrica real, una vista clásica 2D como alternativa y un CMS serverless (Cloudflare Pages Functions + KV) para gestionar obras, textos y color de las salas.',
        en: 'A three.js scene with the camera interpolated along a rail and one stop per work, geometry at true metric scale, a classic 2D view as an alternative, and a serverless CMS (Cloudflare Pages Functions + KV) to manage works, copy and room colours.',
      },
      arch: {
        es: [['Escena', 'three.js · cámara sobre raíl con interpolación entre paradas · un gesto = una obra'], ['Rendimiento', 'Carga diferida del motor 3D · detección de WebGL con fallback a la vista 2D'], ['Backend', 'Cloudflare Pages Functions + KV · sin servidores que mantener'], ['Gestión', 'Panel de administración propio: obras, textos y color de las salas']],
        en: [['Scene', 'three.js · rail camera interpolated between stops · one gesture = one work'], ['Performance', 'Lazy-loaded 3D engine · WebGL detection with a 2D fallback'], ['Backend', 'Cloudflare Pages Functions + KV · no servers to maintain'], ['Management', 'Custom admin panel: works, copy and room colours']],
      },
      decisions: {
        es: [
          'Navegación guiada por raíl en lugar de controles libres: cada gesto avanza a la siguiente parada, así que nadie se pierde en el espacio 3D.',
          'Unidades métricas reales (1 unidad = 1 m, obras colgadas a 1,5 m): cada cuadro se renderiza a su tamaño físico.',
          'Selección de vista al entrar, como el directorio de un museo: recorrido 3D o vista clásica 2D.',
          'Backend serverless en el edge de Cloudflare: coste mínimo y ningún servidor que mantener para la clienta.',
        ],
        en: [
          'Rail-guided navigation instead of free controls: each gesture moves to the next stop, so nobody gets lost in 3D space.',
          'True metric units (1 unit = 1 m, works hung at 1.5 m): every painting is rendered at its physical size.',
          'View selection on entry, like a museum directory: 3D walk-through or classic 2D view.',
          'Serverless backend on the Cloudflare edge: minimal cost and no server for the client to maintain.',
        ],
      },
      impact: {
        es: ['luciagascon.es en producción, con 13 obras recorribles en 3D.', 'La artista gestiona la exposición desde el panel, sin intervención técnica.'],
        en: ['luciagascon.es is live, with 13 works to walk through in 3D.', 'The artist manages the exhibition from the panel with no technical help.'],
      },
      next: { es: 'Vídeo del recorrido para redes y nuevas salas temáticas.', en: 'A walk-through video for social media and new themed rooms.' },
    },
  },
  {
    id: 'wild', name: 'WildCamper', cats: ['cli', 'prod'], live: true,
    metric: { es: 'Supabase + RLS · 100 % parametrizable', en: 'Supabase + RLS · fully configurable' },
    kind: { es: 'Cliente · Plataforma de negocio · 2026', en: 'Client · Business platform · 2026' },
    logo: 'img/logos/wildcamper.png', plate: null, tint: '#e8892b', wall: 'wild', url: 'wildcamper.es',
    tagline: {
      es: 'Plataforma de venta, alquiler y reservas sobre Supabase (PostgreSQL + RLS) con un panel de administración que parametriza todo el sitio.',
      en: 'A sales, rental and booking platform on Supabase (PostgreSQL + RLS) with an admin panel that configures the whole site.',
    },
    stats: {
      es: [['100 %', 'del contenido parametrizado desde el panel'], ['RLS', 'autorización en PostgreSQL'], ['PWA', 'service worker y modo sin conexión']],
      en: [['100%', 'of content configurable from the panel'], ['RLS', 'authorisation in PostgreSQL'], ['PWA', 'service worker and offline mode']],
    },
    proves: {
      es: [
        'Autorización en la base de datos: políticas Row Level Security (lectura pública, escritura solo para administradores) sobre Supabase Auth.',
        'Calidad automatizada: tests con el runner nativo de Node sobre la lógica pura y la estructura, incluido uno que falla si aparecen credenciales en el código.',
        'Frontend modular sin proceso de build: ES modules, sistema de diseño con variables CSS y escape de XSS en el renderizado.',
      ],
      en: [
        'Authorisation in the database: Row Level Security policies (public reads, admin-only writes) on top of Supabase Auth.',
        "Automated quality: tests with Node's native runner on pure logic and structure, including one that fails if credentials ever appear in the code.",
        'Modular build-free frontend: ES modules, a CSS-variable design system and XSS escaping at render time.',
      ],
    },
    stack: ['JavaScript (ES modules)', 'Supabase', 'PostgreSQL · RLS', 'Service Worker', 'Cloudflare', 'Shopify'],
    shots: [['wild-home', 'kb'], ['wild-tall', 'tall']], phone: 'wild-mobile',
    link: 'https://wildcamper.es', linkLabel: 'wildcamper.es',
    keys: 'supabase postgres postgresql rls auth seguridad security reservas bookings calendario calendar pwa offline service worker shopify cliente client furgonetas vans camper panel admin tests',
    case: {
      role: { es: 'Desarrollo completo: web pública, modelo de datos, seguridad y panel de administración.', en: 'Full build: public site, data model, security and admin panel.' },
      problem: {
        es: 'Un taller de camperización necesitaba vender y alquilar furgonetas, gestionar la disponibilidad y mostrar sus trabajos, con autonomía total para actualizar contenido, catálogo y calendario.',
        en: 'A van conversion workshop needed to sell and rent vans, manage availability and showcase its work, with full autonomy to update content, catalogue and calendar.',
      },
      solution: {
        es: 'Sitio de siete secciones sobre Supabase con catálogo dinámico, calendario de reservas con fechas bloqueadas y galería de trabajos. Un panel de administración autenticado parametriza textos, colores, estadísticas, contacto y catálogo, y la autorización se aplica en PostgreSQL mediante RLS.',
        en: 'A seven-section site on Supabase with a dynamic catalogue, a booking calendar with blocked dates and a work gallery. An authenticated admin panel configures copy, colours, stats, contact details and catalogue, with authorisation enforced in PostgreSQL through RLS.',
      },
      arch: {
        es: [['Front', 'HTML, CSS y JavaScript modular (ES modules) sin build · sistema de diseño con variables CSS'], ['Datos', 'Supabase (PostgreSQL) · esquema versionado con RLS · Storage para imágenes'], ['Seguridad', 'Supabase Auth · lectura pública y escritura solo para administradores · escape de XSS'], ['Plataforma', 'PWA con service worker y página offline · Cloudflare · Shopify Buy Button'], ['Calidad', 'Tests con node --test sobre la lógica pura y la estructura']],
        en: [['Front end', 'Modular HTML, CSS and JavaScript (ES modules), no build step · CSS-variable design system'], ['Data', 'Supabase (PostgreSQL) · versioned schema with RLS · Storage for images'], ['Security', 'Supabase Auth · public reads, admin-only writes · XSS escaping'], ['Platform', 'PWA with a service worker and offline page · Cloudflare · Shopify Buy Button'], ['Quality', 'Tests with node --test on pure logic and structure']],
      },
      decisions: {
        es: [
          'Autorización en la base de datos y no en el cliente: políticas RLS que solo permiten escribir a administradores autenticados.',
          'Tests que fallan si aparecen credenciales en el código: la seguridad se verifica en cada cambio.',
          'Configuración del sitio como datos: textos, colores, estadísticas, contacto, catálogo y fechas bloqueadas se leen de Supabase.',
          'Sin framework ni build: menos dependencias, carga rápida y mantenimiento mínimo.',
        ],
        en: [
          'Authorisation in the database, not the client: RLS policies that only let authenticated admins write.',
          'Tests that fail if credentials ever appear in the code: security is verified on every change.',
          'Site configuration as data: copy, colours, stats, contact details, catalogue and blocked dates are read from Supabase.',
          'No framework or build step: fewer dependencies, fast loading and minimal maintenance.',
        ],
      },
      impact: {
        es: ['wildcamper.es en producción y gestionada por el propio cliente.', 'Reservas con calendario y disponibilidad controlada desde el panel.'],
        en: ['wildcamper.es is live and managed directly by the client.', 'Bookings with a calendar and availability managed from the panel.'],
      },
      next: { es: 'Tienda online con Shopify y un comparador antes/después de las camperizaciones.', en: 'A Shopify online store and a before/after comparison of the conversions.' },
    },
  },
  {
    id: 'detemp', name: 'DeTemporada', cats: ['prod'], live: false,
    metric: { es: 'PWA offline · 451 comercios geocodificados', en: 'Offline PWA · 451 geocoded shops' },
    kind: { es: 'Producto propio · PWA · 2026', en: 'Own product · PWA · 2026' },
    logo: 'img/logos/detemporada.svg', plate: null, tint: '#f0531c', wall: 'detemp', url: 'DeTemporada',
    tagline: {
      es: 'PWA offline-first que cruza calendarios oficiales de temporada con un directorio geocodificado de comercios locales en las 17 comunidades.',
      en: 'An offline-first PWA that combines official seasonal calendars with a geocoded directory of local shops across all 17 Spanish regions.',
    },
    stats: {
      es: [['210', 'fichas con temporada, precio y receta'], ['451', 'comercios geocodificados'], ['17', 'comunidades autónomas']],
      en: [['210', 'entries with season, price and recipe'], ['451', 'geocoded shops'], ['17', 'Spanish regions']],
    },
    proves: {
      es: [
        'Ingeniería de datos: normalización de fuentes oficiales (Ministerio de Agricultura, vedas, pliegos DOP/IGP) y geocodificación por lotes con caché y correcciones manuales.',
        'Offline-first: SPA en React + Vite con service worker, precache y datos embebidos, sin backend.',
        'Tests E2E con Chrome headless sobre los flujos críticos: zona, filtros, ficha, lista con deshacer y comercios.',
      ],
      en: [
        'Data engineering: normalisation of official sources (Ministry of Agriculture, fishing seasons, PDO/PGI specs) and batch geocoding with caching and manual overrides.',
        'Offline-first: a React + Vite SPA with a service worker, precache and embedded data, no backend.',
        'E2E tests in headless Chrome over the critical flows: region, filters, product page, list with undo and shops.',
      ],
    },
    stack: ['React', 'Vite', 'PWA · Service Worker', 'Node.js (ETL)', 'Geocoding', 'Chrome headless (E2E)'],
    shots: [['detemp-home', 'kb'], ['detemp-tall', 'tall']], phone: 'detemp-mobile',
    link: 'https://de-temporada-mauve.vercel.app', linkLabel: 'DeTemporada',
    keys: 'react vite pwa offline service worker datos data etl geolocalización geocoding mapa map comercios shops alimentos food temporada seasonal recetas recipes producto product tests e2e',
    case: {
      role: { es: 'Producto, ingeniería de datos y desarrollo.', en: 'Product, data engineering and development.' },
      problem: {
        es: 'La información sobre qué está de temporada en cada zona, su precio y dónde comprarlo a productores locales está dispersa en fuentes oficiales heterogéneas y poco accesibles.',
        en: 'Information on what is in season in each region, its price and where to buy it from local producers is scattered across heterogeneous, hard-to-use official sources.',
      },
      solution: {
        es: 'Un ETL en Node normaliza calendarios oficiales en 210 fichas (temporada por comunidad, precio orientativo, receta e imagen con licencia) y geocodifica 451 comercios verificados. La PWA los sirve sin conexión con destacados del mes, lista de la compra compartible y ordenación por distancia.',
        en: 'A Node ETL normalises official calendars into 210 entries (season per region, indicative price, recipe and a licensed image) and geocodes 451 verified shops. The PWA serves them offline with monthly highlights, a shareable shopping list and sorting by distance.',
      },
      arch: {
        es: [['Datos', 'Ministerio de Agricultura, vedas, órdenes de caza y pliegos DOP/IGP · 210 fichas normalizadas'], ['Comercios', 'Geocodificación por lotes con caché y overrides manuales · 451 comercios'], ['Imágenes', 'Wikimedia Commons con autor y licencia en cada ficha'], ['App', 'React + Vite · PWA con service worker y precache · API opcional en Vercel'], ['Calidad', 'Tests E2E con clics reales en Chrome headless']],
        en: [['Data', 'Ministry of Agriculture, fishing and hunting seasons, PDO/PGI specifications · 210 normalised entries'], ['Shops', 'Batch geocoding with caching and manual overrides · 451 shops'], ['Images', 'Wikimedia Commons with author and licence on every entry'], ['App', 'React + Vite · PWA with service worker and precache · optional API on Vercel'], ['Quality', 'E2E tests with real clicks in headless Chrome']],
      },
      decisions: {
        es: [
          'Fuentes oficiales como única verdad para cada temporada, también en productos regionales con denominación de origen.',
          'Arquitectura sin backend: datos embebidos y precacheados, instalable y rápida incluso sin conexión.',
          'Destacados calculados por mes: «Recién llegados» y «Últimos días».',
          'Imágenes con licencia libre y atribución en cada ficha.',
        ],
        en: [
          'Official sources as the single source of truth for every season, including regional products with protected designations of origin.',
          'Backend-free architecture: embedded and precached data, installable and fast even offline.',
          'Monthly computed highlights: "Just in" and "Last days".',
          'Openly licensed images with attribution on every entry.',
        ],
      },
      impact: {
        es: ['210 productos y 451 comercios en las 17 comunidades.', 'Flujos críticos cubiertos con tests de extremo a extremo.'],
        en: ['210 products and 451 shops across all 17 regions.', 'Critical flows covered by end-to-end tests.'],
      },
      next: { es: 'Dominio propio y lanzamiento público.', en: 'Own domain and public launch.' },
    },
  },
];
