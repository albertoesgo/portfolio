// Textos de la interfaz (escritorio y vista clásica) en español e inglés.
export const UI = {
  es: {
    locale: 'es-ES', other: 'en', otherLabel: 'English', short: 'ES',
    skip: 'Ir a la vista clásica', desktopOf: (n) => `Escritorio de ${n}`, menu: 'Menú',
    projects: 'Proyectos', myProjects: 'Mis proyectos', about: 'Sobre mí', cv: 'CV', contact: 'Contacto', classic: 'Vista clásica', desktop: 'Volver al escritorio',
    search: 'Buscar', searchK: 'Buscar (⌘K)', close: 'Cerrar', filter: 'Filtrar', home: 'Inicio', prev: 'Proyecto anterior', next: 'Proyecto siguiente',
    toDark: 'Activar modo oscuro', toLight: 'Activar modo claro', langBtn: 'Ver en inglés',
    spPlaceholder: 'Busca un proyecto o una tecnología: PyTorch, 3D, Supabase…',
    spEmpty: (q) => `Nada con «${q}». Prueba con una tecnología (PyTorch, three.js, Supabase) o un tema (sequía, moda, 3D).`,
    hintMac: 'Desliza con dos dedos, usa la rueda o ← → para pasar de proyecto', hintPhone: 'Desliza para ver mis proyectos',
    homeX: {
      lookitM: (n) => `${n} prendas en directo`,
      askH: '¿Qué quieres saber?',
      ask: {
        live: ['¿Qué tienes en producción?', (n, total) => `${n} de mis ${total} proyectos están publicados y con usuarios reales:`],
        ai: ['¿Qué has hecho con IA?', 'Un modelo de redes de grafos que predice los embalses de Málaga (mi TFG), la búsqueda con Gemini de LOOKIT y Sinapsis, que mide qué hacen mis agentes de IA y cuánto gastan.'],
        work: ['¿Dónde trabajas?', (role, org, since) => `Soy ${role[0].toLowerCase() + role.slice(1)} en ${org} desde ${since}. Antes, prácticas en Babel modernizando un sistema de gestión con Oracle APEX y OutSystems.`],
        study: ['¿Qué estudiaste?', 'Ingeniería Informática en la Universidad de Málaga, con mención en Computación, y un año de Erasmus+ en Gdańsk (Polonia), todo en inglés.'],
      },
      more: 'Más sobre mí',
    },
    // Proyecto
    shotOf: (n) => `Captura de ${n}`, onPhone: (n) => `${n} en el móvil`,
    tabs: [['sim', 'Simulador'], ['hist', 'Histórico'], ['prec', 'Precisión'], ['app', 'La app']],
    appCap: 'Capturas reales de la app del TFG (React + FastAPI)', realShot: 'Captura real',
    highlights: 'Lo que aporta', caseBtn: 'Caso de estudio', live: 'En producción', repoBtn: 'Código en GitHub',
    toHome: 'Volver a Inicio', toAll: 'Ver todos los proyectos', maximize: 'Ampliar ventana', minimize: 'Minimizar ventana',
    // Hojas
    focusH: 'Especialización', howWork: 'Cómo trabajo', experience: 'Experiencia', education: 'Formación', skills: 'Stack técnico', extras: 'Idiomas y voluntariado',
    downloadCV: 'Descargar CV', viewCV: 'Ver CV', downloadPdf: 'Descargar PDF', openPdf: 'Abrir en pestaña nueva', cvSub: 'PDF · una página', cvAlt: (n) => `Currículum de ${n}`,
    caseOf: (n) => `Caso de estudio · ${n}`,
    c: { role: 'Mi papel', problem: 'El reto', solution: 'La solución', arch: 'Arquitectura', decisions: 'Decisiones técnicas', impact: 'Resultados', next: 'Siguiente paso', stack: 'Tecnologías' },
    open: (l) => `Abrir ${l} ↗`,
    talk: 'Hablemos', talkSub: '¿Una vacante, un proyecto o una idea? Escríbeme, en español o en inglés.', emailL: 'Correo', mailSubject: 'Contacto desde tu portfolio', copy: 'Copiar', copied: 'Copiado', copyManual: 'Selecciónalo y cópialo', write: 'Correo',
    sp: {
      about: ['Sobre mí', 'Experiencia, formación y habilidades', 'sobre mi experiencia microcad babel trabajo universidad uma gdansk erasmus formacion idiomas ingles habilidades'],
      cv: ['CV', 'Vista previa y descarga en PDF', 'cv curriculum pdf descargar resume'],
      contact: ['Contacto', 'Correo y LinkedIn', 'contacto email correo linkedin escribir'],
      classic: ['Vista clásica', 'Todo el contenido en una página', 'vista clasica texto accesible pagina'],
    },
    toastApp: 'LOOKIT', toastTitle: 'Catálogo actualizado', toastBody: (n, b) => `${n} prendas de ${b} marcas españolas. Toca para verlo.`, nowT: 'ahora',
    // Vista clásica
    k: { index: 'Proyectos destacados', more: 'Ver caso de estudio completo', less: 'Ocultar detalle', viewDesktop: 'Ver como escritorio', updated: 'Actualizado el', now: 'Ahora', based: 'Ubicación', languages: 'Idiomas', backTop: 'Volver arriba', contactLead: '¿Tienes un proyecto o una vacante? Escríbeme.' },
  },
  en: {
    locale: 'en-GB', other: 'es', otherLabel: 'Español', short: 'EN',
    skip: 'Skip to the classic view', desktopOf: (n) => `${n}'s desktop`, menu: 'Menu',
    projects: 'Projects', myProjects: 'My projects', about: 'About', cv: 'CV', contact: 'Contact', classic: 'Classic view', desktop: 'Back to the desktop',
    search: 'Search', searchK: 'Search (⌘K)', close: 'Close', filter: 'Filter', home: 'Home', prev: 'Previous project', next: 'Next project',
    toDark: 'Switch to dark mode', toLight: 'Switch to light mode', langBtn: 'Ver en español',
    spPlaceholder: 'Search a project or a technology: PyTorch, 3D, Supabase…',
    spEmpty: (q) => `Nothing for "${q}". Try a technology (PyTorch, three.js, Supabase) or a topic (drought, fashion, 3D).`,
    hintMac: 'Swipe with two fingers, scroll or use ← → to change project', hintPhone: 'Swipe to see my projects',
    homeX: {
      lookitM: (n) => `${n} items, live`,
      askH: 'What would you like to know?',
      ask: {
        live: ['What’s in production?', (n, total) => `${n} of my ${total} projects are live, with real users:`],
        ai: ['What have you built with AI?', 'A graph neural network that forecasts Málaga’s reservoirs (my thesis), LOOKIT’s Gemini-powered search, and Sinapsis, which tracks what my AI agents do and what they cost.'],
        work: ['Where do you work?', (role, org, since) => `I’m an ${role} at ${org} since ${since}. Before that, an internship at Babel modernising a business management system with Oracle APEX and OutSystems.`],
        study: ['What did you study?', 'Computer Engineering at the University of Málaga, specialising in Computing, plus an Erasmus+ year in Gdańsk (Poland), taught in English.'],
      },
      more: 'More about me',
    },
    shotOf: (n) => `Screenshot of ${n}`, onPhone: (n) => `${n} on mobile`,
    tabs: [['sim', 'Simulator'], ['hist', 'History'], ['prec', 'Accuracy'], ['app', 'The app']],
    appCap: 'Real screenshots of the thesis app (React + FastAPI)', realShot: 'Real screenshot',
    highlights: 'Highlights', caseBtn: 'Case study', live: 'Live', repoBtn: 'Code on GitHub',
    toHome: 'Back to Home', toAll: 'See all projects', maximize: 'Enlarge window', minimize: 'Minimise window',
    focusH: 'Focus areas', howWork: 'How I work', experience: 'Experience', education: 'Education', skills: 'Tech stack', extras: 'Languages & volunteering',
    downloadCV: 'Download CV', viewCV: 'View CV', downloadPdf: 'Download PDF', openPdf: 'Open in a new tab', cvSub: 'PDF · one page', cvAlt: (n) => `${n}'s CV`,
    caseOf: (n) => `Case study · ${n}`,
    c: { role: 'My role', problem: 'The challenge', solution: 'The solution', arch: 'Architecture', decisions: 'Key technical decisions', impact: 'Results', next: 'Next step', stack: 'Technologies' },
    open: (l) => `Open ${l} ↗`,
    talk: "Let's talk", talkSub: 'A role, a project or an idea? Drop me a line, in English or Spanish.', emailL: 'Email', mailSubject: 'Hello from your portfolio', copy: 'Copy', copied: 'Copied', copyManual: 'Select it and copy', write: 'Email',
    sp: {
      about: ['About', 'Experience, education and skills', 'about experience microcad babel work university uma gdansk erasmus education languages english skills'],
      cv: ['CV', 'Preview and PDF download', 'cv resume curriculum pdf download'],
      contact: ['Contact', 'Email and LinkedIn', 'contact email linkedin write'],
      classic: ['Classic view', 'All the content on one page', 'classic view text accessible page'],
    },
    toastApp: 'LOOKIT', toastTitle: 'Catalogue updated', toastBody: (n, b) => `${n} items from ${b} Spanish brands. Tap to see it.`, nowT: 'now',
    k: { index: 'Selected projects', more: 'Read the full case study', less: 'Hide details', viewDesktop: 'View as a desktop', updated: 'Updated on', now: 'Now', based: 'Based in', languages: 'Languages', backTop: 'Back to top', contactLead: 'Got a project or a role? Drop me a line.' },
  },
};

// Texto en el idioma pedido: { es, en } → cadena; el resto se devuelve tal cual.
export const pick = (x, lang) => (x && typeof x === 'object' && !Array.isArray(x) && 'es' in x ? x[lang] : x);
export const classicFile = (lang) => (lang === 'en' ? 'classic.html' : 'clasica.html');
