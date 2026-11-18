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
    es: 'IA y automatización que llegan a producción, del dato a la interfaz.',
    en: 'AI and automation that ship, from data to interface.',
  },
  bio: {
    es: [
      'Ingeniero informático por la Universidad de Málaga, con mención en Computación. Me dedico a convertir modelos —de redes neuronales para series temporales a LLMs— en sistemas fiables, medibles y que se usan de verdad.',
      'Formo parte del equipo fundador del departamento de IA y automatización de MicroCAD, donde diseño automatizaciones e integraciones entre sistemas para las distintas áreas de negocio. En paralelo construyo y opero productos propios y plataformas para clientes, de la base de datos a la interfaz.',
    ],
    en: [
      'Computer engineer from the University of Málaga, specialising in Computing. I turn models — from neural networks for time series to LLMs — into reliable, measurable systems that people actually use.',
      "I am part of the founding team of MicroCAD's AI & Automation department, where I design automations and system integrations for teams across the business. Alongside that, I build and run my own products and client platforms, from database to interface.",
    ],
  },
  focus: {
    es: [
      ['Machine learning y forecasting', 'Deep learning para series temporales (LSTM, redes de grafos), feature engineering y evaluación multi-horizonte frente a baselines, con entrenamiento en HPC.'],
      ['Aplicaciones con LLMs', 'LLMs integrados en producto con criterio de coste y latencia: parsers deterministas primero, el modelo como fallback y extracción estructurada de intención.'],
      ['Automatización e integración', 'Flujos con Power Automate y Python, integración de APIs con SharePoint y aplicaciones internas, y cuadros de mando en Power BI.'],
      ['Ingeniería de producto', 'Full-stack con TypeScript, Next.js, React y FastAPI; serverless en Cloudflare y Vercel; seguridad con RLS y cifrado.'],
    ],
    en: [
      ['Machine learning & forecasting', 'Deep learning for time series (LSTMs, graph networks), feature engineering and multi-horizon evaluation against baselines, trained on HPC.'],
      ['LLM applications', 'LLMs built into products with cost and latency in mind: deterministic parsers first, the model as a fallback, and structured intent extraction.'],
      ['Automation & integration', 'Power Automate and Python workflows, API integration with SharePoint and internal apps, and Power BI dashboards.'],
      ['Product engineering', 'Full-stack with TypeScript, Next.js, React and FastAPI; serverless on Cloudflare and Vercel; security with RLS and encryption.'],
    ],
  },
  principles: {
    es: [
      'Medir antes de afirmar: cada modelo se compara con una referencia simple y en el horizonte que de verdad importa.',
      'Seguridad y privacidad por diseño: autorización en la base de datos, datos cifrados y ninguna credencial en el código.',
      'Desarrollo con agentes de IA y criterio propio: yo fijo la arquitectura y el listón de calidad; en el TFG configuré agentes auditores que revisaban fugas de datos, código y documentación.',
      'Del prototipo a producción: despliegue, mantenimiento y decisiones documentadas.',
    ],
    en: [
      'Measure before claiming: every model is compared with a simple baseline, on the horizon that actually matters.',
      'Security and privacy by design: authorisation in the database, encrypted data and no credentials in the code.',
      'AI-agent-assisted development with my own judgement: I set the architecture and the quality bar; for my thesis I configured auditing agents that reviewed data leakage, code and documentation.',
      'From prototype to production: deployment, maintenance and documented decisions.',
    ],
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
  { title: { es: 'Grado en Ingeniería Informática · Mención en Computación', en: 'BSc in Computer Engineering · Computing track' }, org: { es: 'Universidad de Málaga', en: 'University of Málaga' }, date: '2021 – 2026' },
  { title: 'Erasmus+ · Computer Science', org: { es: 'Politechnika Gdańska (Polonia) · en inglés', en: 'Gdańsk University of Technology (Poland) · taught in English' }, date: '2024 – 2025' },
];

export const extras = [
  [{ es: 'Idiomas', en: 'Languages' }, { es: 'Español (nativo) · Inglés (C1)', en: 'Spanish (native) · English (C1)' }],
  [{ es: 'Voluntariado', en: 'Volunteering' }, { es: 'Erasmus Student Network (2026 – actualidad) · Fundación Madre Coraje (2025)', en: 'Erasmus Student Network (2026 – present) · Fundación Madre Coraje (2025)' }],
];

export const skills = [
  ['Machine learning', { es: 'PyTorch, scikit-learn, XGBoost, statsmodels, Prophet · LSTM, GNN (T-GCN) · forecasting y evaluación', en: 'PyTorch, scikit-learn, XGBoost, statsmodels, Prophet · LSTM, GNN (T-GCN) · forecasting and evaluation' }],
  ['LLMs', { es: 'Gemini y OpenAI vía API · extracción estructurada de intención · desarrollo con agentes (Claude Code, Copilot)', en: 'Gemini and OpenAI via API · structured intent extraction · agent-assisted development (Claude Code, Copilot)' }],
  [{ es: 'Datos', en: 'Data' }, 'Python, pandas, NumPy, SQL (PostgreSQL, Oracle, SQLite), ETL, Power BI'],
  [{ es: 'Backend y nube', en: 'Backend & cloud' }, 'FastAPI, Node.js, Express, Supabase, Redis · Cloudflare (Pages, Workers, KV), Vercel, GitHub Actions'],
  ['Frontend', 'TypeScript, React, Next.js, three.js, Tailwind, PWA'],
  [{ es: 'Automatización', en: 'Automation' }, { es: 'Power Automate, SharePoint, integraciones vía API, Oracle APEX, OutSystems', en: 'Power Automate, SharePoint, API integrations, Oracle APEX, OutSystems' }],
];

// Un solo CV público (perfil «automation» de ~/Proyectos/cv), en el idioma de la web.
export const cvFile = (lang) => `cv/Alberto_Estrada_Gomez_CV_${lang.toUpperCase()}.pdf`;
// Imagen de la página del CV para la vista previa (la genera scripts/build.mjs).
export const cvPreview = (lang) => `cv/Alberto_Estrada_Gomez_CV_${lang.toUpperCase()}.png`;

export const filters = [
  ['all', { es: 'Todo', en: 'All' }],
  ['ia', { es: 'IA y datos', en: 'AI & data' }],
  ['prod', { es: 'Producto propio', en: 'Own products' }],
  ['cli', { es: 'Clientes', en: 'Clients' }],
];

export const projects = [
  {
    id: 'aqua', name: { es: 'Predicción espaciotemporal de embalses', en: 'Spatio-temporal reservoir forecasting' }, short: { es: 'TFG', en: 'Thesis' }, cats: ['ia'], live: false,
    cardName: { es: 'Predicción de embalses · TFG', en: 'Reservoir forecasting · Thesis' },
    metric: { es: 'Simula cinco escenarios de lluvia a 90 días', en: 'Simulate five rainfall scenarios, 90 days ahead' },
    plain: {
      es: '¿Cuánta agua tendrán los embalses de Málaga dentro de uno a tres meses? Un sistema que lo predice y deja simular qué pasa si no llueve.',
      en: "How much water will Málaga's reservoirs hold one to three months from now? A system that forecasts it and lets you simulate what happens if it doesn't rain.",
    },
    kind: { es: 'Trabajo Fin de Grado · Deep learning · 2025–2026', en: "Bachelor's thesis · Deep learning · 2025–2026" },
    logo: 'img/logos/aquaandalucia.svg', plate: '#ffffff', tint: '#2e7d46', wall: 'aqua', url: { es: 'TFG · Universidad de Málaga', en: 'Thesis · University of Málaga' },
    tagline: {
      es: 'Predicción espaciotemporal del nivel de 7 embalses con LSTM y redes de grafos (GCN-LSTM), evaluada a varios horizontes y con simulación de escenarios a 90 días.',
      en: 'Spatio-temporal forecasting of 7 reservoirs with LSTMs and graph networks (GCN-LSTM), evaluated across horizons, with 90-day scenario simulation.',
    },
    stats: {
      es: [['−52 %', 'de error (RMSE) a 30 días frente a persistencia, en La Concepción'], ['0,70', 'NSE a 60 días en La Concepción (persistencia: 0,07)'], ['11', 'modelos comparados en 3 familias']],
      en: [['−52%', '30-day error (RMSE) vs. persistence, at La Concepción'], ['0.70', '60-day NSE at La Concepción (persistence: 0.07)'], ['11', 'models compared across 3 families']],
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
    // Repositorio público del TFG (cuenta del tutor), en la rama de la entrega. Si prefieres un fork propio, cambia solo esta línea.
    repo: 'https://github.com/jamaltoutouh/malaga-reservoirs-weather-data/tree/entrega-tfg',
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
          'La meteorología, medida y no supuesta: el LSTM univariante no supera a la persistencia a 30 días (RMSE 12,5 frente a 12,0); con variables meteorológicas baja a 5,7.',
          'Dos modelos para dos usos: el LSTM multivariante es el más preciso embalse a embalse (5,7 frente a 9,2 del GCN-LSTM a 30 días en La Concepción); el GCN-LSTM alimenta el simulador porque predice los siete embalses de forma conjunta.',
          'Reformulación del GCN-LSTM para predecir incrementos (Δ) en lugar del nivel absoluto: elimina el sesgo de persistencia y hace coherentes las simulaciones what-if.',
          'Grafo de 7 nodos con núcleo gaussiano sobre distancias haversine y normalización de Kipf–Welling, con predicción conjunta de todos los embalses.',
          'Escenarios análogos con trayectorias meteorológicas reales (2002, 2010, 2017, 2023) y una prueba de estrés sintética (2023 con −30 % de precipitación) para no salir de la distribución de entrenamiento.',
        ],
        en: [
          'Persistence as a mandatory baseline: one step ahead every model saturates at R² ≈ 0.999, so the main evaluation is autoregressive at 7, 14, 30 and 60 days with rolling origins.',
          'Strict temporal split (70/15/15) without shuffling and scalers fitted on the training set only, to prevent data leakage.',
          'Hydrological feature engineering: 1–30 day lags, rolling means, 30-day cumulative precipitation and cyclical (sine/cosine) day-of-year encoding.',
          'Weather measured, not assumed: the univariate LSTM does not beat persistence at 30 days (RMSE 12.5 vs. 12.0); with weather variables it drops to 5.7.',
          'Two models for two jobs: the multivariate LSTM is the most accurate reservoir by reservoir (5.7 vs. 9.2 for the GCN-LSTM at 30 days, La Concepción); the GCN-LSTM drives the simulator because it predicts all seven reservoirs jointly.',
          'GCN-LSTM reformulated to predict increments (Δ) instead of absolute level: removes persistence bias and makes what-if simulations coherent.',
          'A 7-node graph with a Gaussian kernel over haversine distances and Kipf–Welling normalisation, predicting all reservoirs jointly.',
          'Analog scenarios using real weather trajectories (2002, 2010, 2017, 2023) plus a synthetic stress test (2023 with −30% precipitation) to stay within the training distribution.',
        ],
      },
      impact: {
        es: [
          'LSTM multivariante en La Concepción: RMSE de 5,74 frente a 11,99 de la persistencia a 30 días (−52 %) y NSE de 0,70 a 60 días frente a 0,07.',
          'Familias complementarias: el LSTM con meteorología domina de 7 a 60 días y SARIMA mensual de 1 a 6 meses (R² de 0,45 a 3 meses frente a −0,32 de la persistencia).',
          'Inferencia what-if a 90 días para los 7 embalses con umbrales de alerta (20 % y 10 %) y un asistente que traduce lenguaje natural a parámetros de simulación.',
        ],
        en: [
          'Multivariate LSTM at La Concepción: RMSE of 5.74 vs. 11.99 for persistence at 30 days (−52%) and NSE of 0.70 at 60 days vs. 0.07.',
          'Complementary families: the weather-aware LSTM leads from 7 to 60 days and monthly SARIMA from 1 to 6 months (R² of 0.45 at 3 months vs. −0.32 for persistence).',
          '90-day what-if inference for all 7 reservoirs with alert thresholds (20% and 10%) and an assistant that maps natural language to simulation parameters.',
        ],
      },
      next: { es: 'LSTM global multi-embalse, predicción directa multi-horizonte con covariables futuras, intervalos por conformal prediction, grafo de conectividad hidrológica real e ingesta diaria automatizada del SAIH.', en: 'A global multi-reservoir LSTM, direct multi-horizon forecasting with future covariates, conformal prediction intervals, a graph based on real hydrological connectivity and automated daily SAIH ingestion.' },
    },
  },
  {
    id: 'lookit', name: 'LOOKIT', cats: ['ia', 'prod'], live: true,
    // Las cifras de catálogo (marcas y productos) se sustituyen por las reales de data/live.json en cada build.
    metric: { es: 'Cerca de 9.000 productos indexados', en: 'Close to 9,000 products indexed' },
    plain: {
      es: 'Un buscador que reúne en un solo sitio la ropa de 24 marcas españolas independientes y avisa de lanzamientos y bajadas de precio.',
      en: 'A search engine that brings the clothing of 24 independent Spanish brands into one place and alerts you to drops and price cuts.',
    },
    kind: { es: 'Producto propio · 2026', en: 'Own product · 2026' },
    logo: 'img/logos/lookit.svg', plate: null, tint: '#a8d400', wall: 'lookit', url: 'lookit.es',
    tagline: {
      es: 'Agregador y motor de búsqueda de moda española: 24 catálogos Shopify normalizados en un índice único, reconstruido cada 2 horas y servido como web estática.',
      en: 'A Spanish fashion aggregator and search engine: 24 Shopify catalogues normalised into a single index, rebuilt every 2 hours and served as a static site.',
    },
    stats: {
      es: [['24', 'catálogos Shopify integrados'], ['≈ 9.000', 'productos indexados'], ['2 h', 'ciclo de reconstrucción']],
      en: [['24', 'Shopify catalogues integrated'], ['≈ 9,000', 'products indexed'], ['2 h', 'rebuild cycle']],
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
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Cloudflare Pages', 'Functions', 'Upstash Redis', 'Web Push', 'Gemini'],
    shots: [['lookit-home', 'kb'], ['lookit-tall', 'tall']], phone: 'lookit-mobile',
    link: 'https://lookit.es', linkLabel: 'lookit.es',
    keys: 'next nextjs react typescript redis cloudflare pages functions workers estático static export gemini llm búsqueda search moda fashion shopify pwa push seo remotion vídeo video redes social producto product cifrado encryption hmac github actions',
    case: {
      role: { es: 'Fundador e ingeniero único: arquitectura, frontend, backend, datos, despliegue y contenido.', en: 'Founder and sole engineer: architecture, frontend, backend, data, deployment and content.' },
      problem: {
        es: 'La moda independiente española está repartida en decenas de tiendas Shopify sin un índice común: no hay forma de buscar, comparar precios ni detectar lanzamientos de forma transversal.',
        en: 'Independent Spanish fashion is spread across dozens of Shopify stores with no shared index: there is no way to search, compare prices or detect drops across them.',
      },
      solution: {
        es: 'Pipeline de ingesta que lee el catálogo público de cada tienda con concurrencia limitada, normaliza productos, variantes, tallas y precios a un esquema común y genera en cada build una web estática con unas 9.000 fichas. Sobre ella se apoyan la búsqueda en lenguaje natural, el comparador, un armario compartible y un sistema de avisos (lanzamientos, bajadas de precio y reposiciones) por Web Push o correo.',
        en: 'An ingestion pipeline that reads each store\'s public catalogue with bounded concurrency, normalises products, variants, sizes and prices into a common schema, and generates a static site with some 9,000 product pages on every build. On top of it sit natural-language search, a comparison tool, a shareable wardrobe and an alert system (drops, price cuts and restocks) over Web Push or email.',
      },
      arch: {
        es: [['Ingesta', 'Endpoints públicos de Shopify · pool de concurrencia · una descarga por tienda en cada build'], ['Catálogo', 'Export estático de Next.js: inicio, marcas, categorías, rebajas y unas 9.000 fichas · catálogo como JSON estático y carga diferida en la portada'], ['Búsqueda', 'Parser de marca, prenda, color, talla, precio y rebajas con relajación progresiva + Gemini como fallback'], ['Dinámico', 'Cloudflare Pages Functions solo donde hace falta: tallas y stock en vivo (caché de 30 min), avisos, armario compartido y búsqueda con IA, con validación de origen y límite de peticiones'], ['Avisos', 'Upstash Redis · Web Push (VAPID) · Resend · pasada en cada build con candado distribuido'], ['Plataforma', 'Next.js 16 (App Router), React 19, Tailwind 4, Zustand y Framer Motion en Cloudflare Pages · reconstrucción cada 2 h con GitHub Actions']],
        en: [['Ingestion', 'Public Shopify endpoints · concurrency pool · one download per store on every build'], ['Catalogue', 'Next.js static export: home, brands, categories, sales and some 9,000 product pages · catalogue as static JSON, lazy-loaded on the home page'], ['Search', 'Brand, item, colour, size, price and sales parser with progressive relaxation + Gemini as a fallback'], ['Dynamic', 'Cloudflare Pages Functions only where needed: live sizes and stock (30-min cache), alerts, shared wardrobe and AI search, with origin validation and rate limiting'], ['Alerts', 'Upstash Redis · Web Push (VAPID) · Resend · one run per build behind a distributed lock'], ['Platform', 'Next.js 16 (App Router), React 19, Tailwind 4, Zustand and Framer Motion on Cloudflare Pages · rebuilt every 2 h via GitHub Actions']],
      },
      decisions: {
        es: [
          'De servidor a estático: la primera versión regeneraba páginas con ISR en Vercel. Para eliminar el cómputo por petición la migré a un export estático en Cloudflare Pages, reconstruido cada 2 horas, con funciones solo para lo que debe ser dinámico.',
          'Un límite convertido en diseño: Cloudflare Pages admite 20.000 archivos por despliegue y el export generaba 46.000. Un paso posterior al build elimina los datos de navegación de las fichas, que pasan a cargarse como páginas normales.',
          'Parser de intención con relajación progresiva de filtros; el LLM solo resuelve las consultas que el parser no cubre.',
          'Identidad sin cuentas: clave aleatoria por dispositivo, el servidor solo almacena su HMAC y el resto se cifra con AES-256-GCM. Doble opt-in y baja en un clic (RFC 8058).',
          'Detección de lanzamientos por umbral (≥ 10 altas en 24 h, 5 en catálogos pequeños) para filtrar las reposiciones.',
          'Avisos ligados al build: en cada reconstrucción se compara el catálogo con la pasada anterior, con un candado en Redis para que no se solapen dos ejecuciones.',
        ],
        en: [
          'From server to static: the first version regenerated pages with ISR on Vercel. To remove per-request compute I migrated it to a static export on Cloudflare Pages, rebuilt every 2 hours, with functions only for what must be dynamic.',
          'A limit turned into design: Cloudflare Pages accepts 20,000 files per deployment and the export produced 46,000. A post-build step drops the navigation payloads of the product pages, which then load as regular pages.',
          'An intent parser with progressive filter relaxation; the LLM only handles queries the parser does not cover.',
          'Account-free identity: a random per-device key, the server stores only its HMAC and everything else is encrypted with AES-256-GCM. Double opt-in and one-click unsubscribe (RFC 8058).',
          'Threshold-based drop detection (≥ 10 new items in 24 h, 5 for small catalogues) to filter out restocks.',
          'Alerts tied to the build: each rebuild compares the catalogue with the previous run, behind a Redis lock so two runs never overlap.',
        ],
      },
      impact: {
        es: ['24 catálogos y cerca de 9.000 productos indexados y reconstruidos cada 2 horas en lookit.es, sin servidores propios.', 'Avisos por Web Push o correo sin registro de usuarios.', 'Contenido para redes generado por código: Remotion, segmentación de fondo con IA y voz alineada con Whisper.'],
        en: ['24 catalogues and close to 9,000 products indexed and rebuilt every 2 hours at lookit.es, with no servers of my own.', 'Web Push and email alerts with no user sign-up.', 'Social content generated from code: Remotion, AI background segmentation and Whisper-aligned voiceover.'],
      },
      next: { es: 'Métricas de uso públicas, recomendaciones personalizadas y más catálogos.', en: 'Public usage metrics, personalised recommendations and more catalogues.' },
    },
  },
  {
    // Herramienta local con demo pública (datos sintéticos). Capturas y vídeos SIEMPRE de la demo, nunca con datos reales.
    id: 'sinapsis', name: 'Sinapsis', cats: ['ia', 'prod'], live: false,
    status: { es: 'Código abierto', en: 'Open source' },
    metric: { es: 'Consumo y límites de mis agentes de IA', en: 'Usage and limits of my AI agents' },
    plain: {
      es: 'Un panel que me dice, en tiempo real, cuánto consumen mis agentes de IA en cada proyecto, cuánto me queda del límite de mi plan y qué sesión conviene cortar, y que le indica a la IA por qué ficheros empezar para que gaste menos. Lo dibuja como un cerebro para ver de un vistazo qué está haciendo cada uno.',
      en: 'A dashboard that tells me, in real time, how much my AI agents use in each project, how much of my plan’s limit is left and which session I should cut short, and that tells the AI which files to start from so it spends less. It draws everything as a brain, so I can see at a glance what each one is doing.',
    },
    kind: { es: 'Herramienta propia · Código abierto · 2026', en: 'Own tool · Open source · 2026' },
    logo: 'img/logos/sinapsis.webp', plate: null, tint: '#6f6cf6', wall: 'sinapsis',
    url: 'albertoesgo.github.io/sinapsis',
    shotNote: { es: 'Demo pública · datos sintéticos', en: 'Public demo · synthetic data' },
    tagline: {
      es: 'Observabilidad para agentes de IA: lee en local los registros de Claude Code y los convierte en consumo por proyecto y modelo, contexto por sesión, una estimación de los límites del plan Pro/Max, avisos, informe semanal y un mapa de cada proyecto que le dice a la IA dónde mirar, sobre un cerebro 3D en tiempo real.',
      en: 'Observability for AI agents: it reads Claude Code’s logs locally and turns them into usage by project and model, per-session context, an estimate of the Pro/Max plan limits, alerts, a weekly report and a map of each project that tells the AI where to look, on top of a real-time 3D brain.',
    },
    stats: {
      es: [['2', 'límites del plan vigilados: la ventana de 5 h y la semana'], ['200 k', 'tokens de contexto: a partir de ahí avisa de compactar'], ['0', 'peticiones a internet: los datos no salen del ordenador']],
      en: [['2', 'plan limits tracked: the 5-hour window and the week'], ['200 k', 'tokens of context: past that, it suggests compacting'], ['0', 'requests to the internet: the data stays on the computer']],
    },
    proves: {
      es: [
        'Control del consumo de IA: coste por proyecto, modelo y agente, contexto por sesión y una estimación de los límites del plan aprendida de los cortes reales del historial, con avisos al 75 % y al 90 %.',
        'Menos tokens por tarea: aprende del historial qué ficheros y órdenes usó cada petición (TF-IDF) y se lo pasa a Claude Code con una skill, para que vaya directo en lugar de buscar a ciegas.',
        'Ingeniería de extremo a extremo: ingesta incremental en directo por Server-Sent Events, cerebro 3D procedural en three.js, PWA completa, demo pública y CI con ESLint y tests en Node 20, 22 y 24.',
      ],
      en: [
        'AI usage control: cost by project, model and agent, per-session context and an estimate of the plan limits learned from the real cut-offs in the history, with alerts at 75% and 90%.',
        'Fewer tokens per task: it learns from the history which files and commands each request used (TF-IDF) and hands that to Claude Code through a skill, so it goes straight there instead of searching blindly.',
        'End-to-end engineering: incremental live ingestion over Server-Sent Events, a procedural three.js brain, a complete PWA, a public demo and CI with ESLint and tests on Node 20, 22 and 24.',
      ],
    },
    stack: ['Node.js', 'Server-Sent Events', 'three.js', 'WebGL · shaders', 'TF-IDF', 'PWA', 'GitHub Actions'],
    shots: [['sinapsis-motion', 'vid mac-only'], ['sinapsis-home', 'kb'], ['sinapsis-where', 'kb'], ['sinapsis-report', 'kb'], ['sinapsis-plan-m', 'kb phone-only']],
    phone: 'sinapsis-motion-m', phoneVid: true,
    link: 'https://albertoesgo.github.io/sinapsis/', linkLabel: 'albertoesgo.github.io/sinapsis',
    linkText: { es: 'Probar la demo', en: 'Try the demo' },
    repo: 'https://github.com/albertoesgo/sinapsis',
    keys: 'sinapsis claude code agentes agents ia ai llm observabilidad observability tokens coste cost consumo usage límites limits plan pro max mapa map dónde mirar where obsidian skill tf-idf eslint contexto context caché cache node sse server-sent events three threejs 3d webgl shaders cerebro brain panel dashboard tiempo real real time demo github actions ci pwa código abierto open source',
    case: {
      role: { es: 'Proyecto individual: idea, servidor de ingesta, estimación de límites, mapa de proyectos, visualización 3D, paneles y demo pública.', en: 'Solo project: concept, ingestion server, limit estimation, project map, 3D visualisation, dashboards and public demo.' },
      problem: {
        es: 'Trabajo a diario con agentes de IA en varios proyectos a la vez y el consumo no se ve: en cada paso el modelo relee todo el contexto de la sesión —cientos de tokens leídos por cada uno que escribe— y una sesión larga se encarece sin avisar. Y lo que más gasta no es escribir, sino buscar: abrir ficheros y rastrear el repositorio hasta dar con el sitio. En los planes Pro y Max, además, quedarse sin límite a mitad de una tarea corta el trabajo. Los registros existen, pero son miles de líneas JSON por proyecto.',
        en: 'I work with AI agents every day across several projects at once, and usage is invisible: on every step the model re-reads the whole session context — hundreds of tokens read for each one it writes — and a long session gets expensive without warning. And what costs most is not writing but searching: opening files and combing the repository until the right spot turns up. On Pro and Max plans, running out of limit halfway through a task also stops the work. The logs exist, but they are thousands of JSON lines per project.',
      },
      solution: {
        es: 'Un servidor Node siempre encendido que lee los registros de Claude Code de forma incremental y los convierte en lo que necesito decidir: cuánto llevo del límite de 5 horas y del semanal (y si, a este ritmo, llegaré antes del reinicio), qué sesión relee demasiado contexto, cuánto cuesta cada proyecto y un informe semanal con qué cambiar. Además aprende un mapa de cada proyecto (ficheros clave, órdenes de prueba y dónde empezar cada tarea) que Claude Code consulta mediante una skill y que también se exporta como vault de Obsidian. Todo se ve sobre un cerebro 3D donde cada petición real viaja como un impulso, con búsqueda (⌘K) y el comando listo para retomar cualquier sesión.',
        en: 'An always-on Node server that incrementally reads Claude Code’s logs and turns them into what I need to decide: how much of the 5-hour and weekly limits I have used (and whether, at this pace, I will hit them before the reset), which session re-reads too much context, what each project costs and a weekly report with what to change. It also learns a map of each project (key files, test commands and where to start each task) that Claude Code queries through a skill and that is also exported as an Obsidian vault. It all sits on a 3D brain where every real request travels as an impulse, with search (⌘K) and a ready-to-copy command to resume any session.',
      },
      extra: [{
        h: { es: 'Por qué un cerebro', en: 'Why a brain' },
        p: {
          es: 'Un agente de IA funciona como un sistema nervioso: tus mensajes entran por el tronco encefálico, el modelo piensa en el tálamo, actúa con herramientas desde la corteza motora, recuerda en el hipocampo, aplica lo aprendido desde el cerebelo (las skills) y delega en subagentes. Dar a cada pieza su región hace que miles de eventos se lean de un vistazo: dónde hay actividad, qué proyecto planifica y cuál ejecuta, qué skills no se usan nunca. La anatomía solo ordena los datos; los datos son reales. Y no finge mostrar las neuronas internas del modelo, que no son accesibles: la propia app lo explica.',
          en: 'An AI agent works like a nervous system: your messages come in through the brainstem, the model thinks in the thalamus, acts with tools from the motor cortex, remembers in the hippocampus, applies what it has learned from the cerebellum (the skills) and delegates to subagents. Giving each piece its own region makes thousands of events readable at a glance: where the activity is, which project plans and which executes, which skills are never used. The anatomy only organises the data; the data is real. And it does not pretend to show the model’s internal neurons, which are not accessible: the app itself says so.',
        },
      }],
      arch: {
        es: [['Ingesta', 'Lectura incremental de los .jsonl por desplazamiento de bytes · deduplicación por id de mensaje · caché en disco'], ['Plan', 'Ventana de 5 h y límite semanal estimados con los cortes reales del historial · avisos al 75 % y al 90 % · previsión al ritmo actual'], ['Consumo', 'Coste a precios públicos de la API por proyecto, modelo y agente · contexto por sesión con avisos a 200 k, 400 k y 600 k · informe semanal'], ['Mapa', 'TF-IDF sobre las peticiones pasadas: ficheros leídos y editados, órdenes de prueba y pasos de búsqueda · skill para Claude Code · vault de Obsidian regenerado cada 10 min'], ['Tiempo real', 'Server-Sent Events al navegador · impulsos agrupados por petición · reproducción acelerada de las últimas 24 h'], ['Visualización', 'three.js: anatomía procedural (ruido de Perlin, surcos, cerebelo), ~110.000 partículas y ondas de activación en el shader'], ['Calidad y acceso', 'ESLint y tests con node --test, CI en Node 20, 22 y 24 · PWA completa (sin conexión, instalable, «atrás» por capas) · demo estática por GitHub Actions · en casa, con clave y código QR']],
        en: [['Ingestion', 'Incremental reading of the .jsonl logs by byte offset · message-id deduplication · on-disk cache'], ['Plan', '5-hour window and weekly limit estimated from the real cut-offs in the history · alerts at 75% and 90% · forecast at the current pace'], ['Usage', 'Cost at public API prices by project, model and agent · per-session context with alerts at 200 k, 400 k and 600 k · weekly report'], ['Map', 'TF-IDF over past requests: files read and edited, test commands and search steps · a skill for Claude Code · an Obsidian vault regenerated every 10 min'], ['Real time', 'Server-Sent Events to the browser · impulses grouped by request · accelerated replay of the last 24 h'], ['Visualisation', 'three.js: procedural anatomy (Perlin noise, sulci, cerebellum), ~110,000 particles and activation waves in the shader'], ['Quality & access', 'ESLint and tests with node --test, CI on Node 20, 22 and 24 · complete PWA (offline, installable, layered «back») · static demo via GitHub Actions · at home, with a key and QR code']],
      },
      decisions: {
        es: [
          'El límite se aprende, no se supone: Anthropic no publica su tamaño, pero el historial guarda cada corte. Sinapsis mide lo consumido justo antes de cada uno y lo usa como presupuesto, y avisa de que es una estimación.',
          'Una skill y no un conector MCP: un conector carga sus definiciones en cada paso de cada sesión; una skill solo ocupa su descripción (unos 60 tokens) hasta que se usa.',
          'El mapa es una pista, no la verdad: si no hay peticiones parecidas en el historial, la IA explora como siempre.',
          'El contexto como métrica principal, porque es lo que más consume: cada sesión abierta lleva un medidor verde, ámbar o rojo y avisa cuando conviene compactar o empezar de nuevo.',
          'Privacidad y seguridad: nada sale del ordenador, por defecto solo escucha en local, desde el móvil exige una clave y solo responde a nombres de host conocidos (protección frente a DNS rebinding).',
          'Ingesta incremental en lugar de releer el historial: la primera pasada queda en caché y después solo se procesa lo nuevo, cada poco más de un segundo.',
          'Una demo pública sin datos personales: se construye con el generador sintético, nunca desde los registros reales.',
          'Los datos mandan sobre la metáfora: una neurona o una conexión solo existe si el evento ocurrió, y su tamaño y su brillo dependen del uso real.',
        ],
        en: [
          'The limit is learned, not assumed: Anthropic does not publish its size, but the history records every cut-off. Sinapsis measures the usage right before each one, uses it as the budget and says that it is an estimate.',
          'A skill rather than an MCP connector: a connector loads its definitions on every step of every session; a skill only takes up its description (about 60 tokens) until it is used.',
          'The map is a hint, not the truth: if there are no similar requests in the history, the AI explores as usual.',
          'Context as the main metric, because it drives usage: every open session gets a green, amber or red gauge and an alert when it is time to compact or start fresh.',
          'Privacy and security: nothing leaves the computer, it listens locally by default, phone access requires a key and it only answers known host names (protection against DNS rebinding).',
          'Incremental ingestion instead of re-reading the history: the first pass is cached and from then on only new data is processed, every second or so.',
          'A public demo with no personal data: it is built with the synthetic generator, never from the real logs.',
          'Data over metaphor: a neuron or connection only exists if the event really happened, and its size and brightness follow real usage.',
        ],
      },
      impact: {
        es: ['Lo uso a diario: corre siempre en mi Mac y lo consulto también desde el móvil.', 'Sé cuánto me queda del plan y cuándo se reinicia, y me avisa antes de agotarlo o de que una sesión se dispare.', 'Mi Claude Code consulta el mapa antes de explorar mis proyectos, en lugar de buscar a ciegas.', 'Código abierto (MIT) con demo pública: se prueba en el navegador sin instalar nada.'],
        en: ['I use it every day: it runs permanently on my Mac and I check it from my phone too.', 'I know how much of my plan is left and when it resets, and it warns me before I run out or a session spikes.', 'My Claude Code checks the map before exploring my projects, instead of searching blindly.', 'Open source (MIT) with a public demo: you can try it in the browser without installing anything.'],
      },
      next: { es: 'Acceso seguro fuera de casa y comparativas por tipo de tarea entre semanas.', en: 'Secure access away from home and week-over-week comparisons by type of task.' },
    },
  },
  {
    id: 'lucia', name: 'Lucía Gascón', cats: ['cli'], live: true,
    metric: { es: 'Galería WebGL · 13 obras', en: 'WebGL gallery · 13 works' },
    plain: {
      es: 'La web de una pintora, que se recorre como una sala de exposiciones: un gesto te lleva de un cuadro al siguiente.',
      en: "A painter's website you walk through like an exhibition: one gesture takes you from one painting to the next.",
    },
    kind: { es: 'Cliente · Web de artista · 2026', en: 'Client · Artist website · 2026' },
    logo: 'img/logos/lucia-gascon.webp', plate: null, tint: '#8c2f28', wall: 'lucia', url: 'luciagascon.es',
    tagline: {
      es: 'Galería 3D en WebGL (three.js) con navegación guiada por raíl, escala métrica real y un CMS serverless sobre Cloudflare.',
      en: 'A WebGL (three.js) 3D gallery with rail-guided navigation, true metric scale and a serverless CMS on Cloudflare.',
    },
    stats: {
      es: [['13', 'obras en la escena 3D'], ['1:1', 'cada cuadro, a su tamaño real'], ['4', 'espacios: entrada, dos salas y estudio']],
      en: [['13', 'works in the 3D scene'], ['1:1', 'every painting at its real size'], ['4', 'spaces: entrance, two rooms and studio']],
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
    metric: { es: 'Supabase + RLS · 68 tests automáticos', en: 'Supabase + RLS · 68 automated tests' },
    plain: {
      es: 'La web con la que un taller de furgonetas camper vende, alquila y gestiona sus reservas, y que el propio taller actualiza sin tocar código.',
      en: 'The website a camper-van workshop uses to sell, rent and manage bookings, and which the workshop itself updates without touching code.',
    },
    kind: { es: 'Cliente · Plataforma de negocio · 2026', en: 'Client · Business platform · 2026' },
    logo: 'img/logos/wildcamper.webp', plate: null, tint: '#e8892b', wall: 'wild', url: 'wildcamper.es',
    tagline: {
      es: 'Plataforma de venta, alquiler y reservas sobre Supabase (PostgreSQL + RLS) con un panel de administración que parametriza todo el sitio.',
      en: 'A sales, rental and booking platform on Supabase (PostgreSQL + RLS) with an admin panel that configures the whole site.',
    },
    stats: {
      es: [['100 %', 'del contenido parametrizado desde el panel'], ['68', 'tests automáticos, incluidos los de seguridad'], ['24', 'políticas RLS en PostgreSQL']],
      en: [['100%', 'of content configurable from the panel'], ['68', 'automated tests, security checks included'], ['24', 'RLS policies in PostgreSQL']],
    },
    proves: {
      es: [
        'Autorización en la base de datos: políticas Row Level Security (lectura pública, escritura solo para administradores) sobre Supabase Auth.',
        'Calidad automatizada: 68 tests con el runner nativo de Node sobre la lógica pura y la estructura, incluido uno que falla si aparecen credenciales en el código.',
        'Frontend modular sin proceso de build: ES modules, sistema de diseño con variables CSS y escape de XSS en el renderizado.',
      ],
      en: [
        'Authorisation in the database: Row Level Security policies (public reads, admin-only writes) on top of Supabase Auth.',
        "Automated quality: 68 tests with Node's native runner on pure logic and structure, including one that fails if credentials ever appear in the code.",
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
    id: 'detemp', name: 'DeTemporada', cats: ['prod'], live: true,
    metric: { es: 'PWA offline · 451 comercios geocodificados', en: 'Offline PWA · 451 geocoded shops' },
    plain: {
      es: 'Una app que te dice qué alimentos están de temporada en tu comunidad, cuánto cuestan y dónde comprarlos cerca de ti.',
      en: 'An app that tells you which foods are in season in your region, what they cost and where to buy them nearby.',
    },
    kind: { es: 'Producto propio · PWA · 2026', en: 'Own product · PWA · 2026' },
    logo: 'img/logos/detemporada.svg', plate: null, tint: '#f0531c', wall: 'detemp', url: 'detemporada.albertoesgo76.workers.dev',
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
    stack: ['React', 'Vite', 'PWA · Service Worker', 'Cloudflare Workers', 'Node.js (ETL)', 'Geocoding', 'Chrome headless (E2E)'],
    shots: [['detemp-home', 'kb'], ['detemp-tall', 'tall']], phone: 'detemp-mobile',
    link: 'https://detemporada.albertoesgo76.workers.dev', linkLabel: 'DeTemporada',
    keys: 'cloudflare workers react vite pwa offline service worker datos data etl geolocalización geocoding mapa map comercios shops alimentos food temporada seasonal recetas recipes producto product tests e2e',
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
        es: [['Datos', 'Ministerio de Agricultura, vedas, órdenes de caza y pliegos DOP/IGP · 210 fichas normalizadas'], ['Comercios', 'Geocodificación por lotes con caché y overrides manuales · 451 comercios'], ['Imágenes', 'Wikimedia Commons con autor y licencia en cada ficha'], ['App', 'React + Vite · PWA con service worker y precache · Cloudflare Workers con una API pública de los mismos datos'], ['Calidad', 'Tests E2E con clics reales en Chrome headless']],
        en: [['Data', 'Ministry of Agriculture, fishing and hunting seasons, PDO/PGI specifications · 210 normalised entries'], ['Shops', 'Batch geocoding with caching and manual overrides · 451 shops'], ['Images', 'Wikimedia Commons with author and licence on every entry'], ['App', 'React + Vite · PWA with service worker and precache · Cloudflare Workers with a public API over the same data'], ['Quality', 'E2E tests with real clicks in headless Chrome']],
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
        es: ['En producción en Cloudflare Workers e instalable como app.', '210 productos y 451 comercios en las 17 comunidades.', 'Flujos críticos cubiertos con tests de extremo a extremo.'],
        en: ['Live on Cloudflare Workers and installable as an app.', '210 products and 451 shops across all 17 regions.', 'Critical flows covered by end-to-end tests.'],
      },
      next: { es: 'Dominio propio y más comercios locales en cada comunidad.', en: 'Own domain and more local shops in every region.' },
    },
  },
];
