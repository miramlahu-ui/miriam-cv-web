const profile = {
  name: "Miriam Magaly Lampa Huanca",
  title: "Especialista en Gestión Ambiental, SSOMA y Sistemas Integrados",
  subtitle:
    "Experiencia en proyectos de agua, saneamiento y construcción, con enfoque en cumplimiento normativo, control de impactos, prevención y mejora continua.",
  location: "Lima / Tacna, Perú",
  phone: "+51 993 344 258",
  emailPrimary: "Ing.ambiental.lampa@gmail.com",
  emailSecondary: "miramlahu@gmail.com",
  linkedin: "https://www.linkedin.com/in/miriam-lampa",
  cip: "CIP 181173",
  availability: "Disponible para nuevas oportunidades y proyectos",
};

const profilePhoto =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 900">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#1e293b" />
      </linearGradient>
      <linearGradient id="glow" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.55" />
        <stop offset="100%" stop-color="#a855f7" stop-opacity="0.35" />
      </linearGradient>
    </defs>
    <rect width="800" height="900" fill="url(#bg)" rx="40" />
    <circle cx="400" cy="290" r="190" fill="url(#glow)" opacity="0.7" />
    <circle cx="400" cy="265" r="120" fill="#e2e8f0" opacity="0.96" />
    <path d="M210 680c34-144 161-214 190-214s156 70 190 214" fill="#e2e8f0" opacity="0.95" />
    <text x="400" y="815" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#e2e8f0">
      Miriam Lampa
    </text>
  </svg>
`);

const aboutMe =
  "Soy una profesional orientada a resultados, con experiencia en gestión ambiental, seguridad y sistemas integrados en proyectos de construcción y saneamiento. Me caracteriza el compromiso con el cumplimiento normativo, la organización en campo y la búsqueda de soluciones prácticas y sostenibles. Fuera del trabajo disfruto los viajes, la poesía y una buena taza de café.";

const quickStats = [
  { label: "Trayectoria", value: "Desde 2016" },
  { label: "Especialidad", value: "Gestión ambiental y SSOMA" },
  { label: "Cobertura", value: "Lima · Tacna · Puno" },
  { label: "Disponibilidad", value: "Nuevos proyectos" },
];

const interests = ["Viajes", "Poesía", "Café", "Aprendizaje continuo"];

const highlights = [
  "Gestión ambiental en obra",
  "SSOMA y control operacional",
  "Sistemas Integrados de Gestión",
  "Auditorías internas y cumplimiento",
  "Capacitaciones y simulacros",
  "Mejora continua en campo",
];

const standards = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 37001",
  "ISO 50001",
  "ISO/IEC 17025",
  "Programa 5S",
  "ISO 22000",
];

const keyAchievements = [
  {
    title: "Proyectos de alto impacto",
    text: "Participación en obras de agua potable, alcantarillado y tratamiento de aguas residuales en distintas regiones del país.",
    icon: "🏗️",
  },
  {
    title: "Gestión ambiental aplicada",
    text: "Supervisión ambiental, control de impactos, reportes técnicos y atención de compromisos en obra.",
    icon: "🌿",
  },
  {
    title: "SSOMA y sistemas integrados",
    text: "Experiencia en prevención, control operacional y mejora continua bajo estándares de gestión.",
    icon: "🛡️",
  },
  {
    title: "Formación especializada",
    text: "Ingeniería Ambiental, maestrías y diplomados orientados a sostenibilidad y desempeño organizacional.",
    icon: "🎓",
  },
];

const experience = [
  {
    company: "Constructora MPM S.A.C.",
    role: "Especialista Ambiental",
    period: "Ago 2024 - Actualidad",
    location: "Villa María del Triunfo y Lurín, Lima",
    description:
      "Gestión ambiental en obra para un proyecto de agua, alcantarillado y tratamiento de aguas residuales.",
  },
  {
    company: "Consorcio PTAP Calana",
    role: "Especialista Ambiental",
    period: "Oct 2021 - Jul 2024",
    location: "Calana, Tacna",
    description:
      "Participación ambiental en la construcción y equipamiento de una Planta de Tratamiento de Agua Potable.",
  },
  {
    company: "Consorcio Aguas de Manchay",
    role: "Especialista Ambiental",
    period: "Feb 2020 - Sep 2021",
    location: "Pachacámac, Lima",
    description:
      "Gestión ambiental en proyecto de ampliación de sistemas de agua potable y alcantarillado.",
  },
  {
    company: "MEJESA S.R.L.",
    role: "Especialista en Seguridad y Monitoreo Ambiental",
    period: "Ene 2020 - Jul 2020",
    location: "Lima",
    description:
      "Supervisión, monitoreo ambiental y apoyo a la gestión de seguridad en obra.",
  },
  {
    company: "Consorcio Los Olivos",
    role: "Ingeniero del Sistema Integrado de Gestión",
    period: "Oct 2018 - Jun 2019",
    location: "Lima",
    description:
      "Seguimiento de indicadores, auditorías internas y articulación del sistema integrado de gestión.",
  },
];

const featuredProjects = [
  {
    title:
      "Mejoramiento y ampliación de sistemas de agua potable, alcantarillado y tratamiento de aguas residuales - Etapa 2",
    company: "Constructora MPM S.A.C.",
    role: "Especialista Ambiental",
    period: "Desde agosto 2024",
    location: "Villa María del Triunfo y Lurín, Lima",
    contract: "Contrato N.º 010-2024/VIVIENDA/VMCS/PASLC",
    cui: "CUI N.º 2403503",
    amount: "S/ 236,335,663.26",
    milestone1: "Entrega de terreno: 22/08/2024",
    milestone2: "Inicio de ejecución contractual: 23/08/2024",
    summary:
      "Proyecto de gran escala orientado al mejoramiento y ampliación de sistemas de agua potable, alcantarillado y tratamiento de aguas residuales en Lima.",
    link:
      "https://ofi5.mef.gob.pe/inviertews/Repseguim/ResumF12B?codigo=2403503&utm_source=chatgpt.com",
    linkLabel: "Ver ficha pública del proyecto",
    functions: [
      "Supervisión del cumplimiento ambiental de obra y seguimiento del instrumento de gestión ambiental.",
      "Control de impactos, medidas preventivas y acciones correctivas durante la ejecución.",
      "Elaboración de reportes, registros y documentación técnica ambiental.",
    ],
    accent: "from-cyan-500/20 to-sky-500/10",
  },
  {
    title:
      "Construcción y equipamiento de una nueva Planta de Tratamiento de Agua Potable de Calana",
    company: "Consorcio PTAP Calana",
    role: "Especialista Ambiental",
    period: "Oct 2021 - Jul 2024",
    location: "Calana, Tacna",
    contract: "Obra de PTAP Calana",
    cui: "CUI N.º 2167692",
    amount: "S/ 65,340,933.34",
    milestone1: "Captación, línea de conducción y PTAP",
    milestone2:
      "Equipamiento hidráulico, electromecánico, automatización y laboratorio",
    summary:
      "Proyecto de infraestructura de agua potable con componentes hidráulicos, eléctricos, automatización y laboratorio.",
    link: "https://ofi5.mef.gob.pe/invierteWS/Repseguim/ResumF12B?codigo=2167692",
    linkLabel: "Ver ficha pública del proyecto",
    functions: [
      "Supervisión del cumplimiento ambiental de obra conforme al instrumento ambiental aprobado.",
      "Implementación de acciones preventivas, correctivas y de mitigación frente a impactos ambientales.",
      "Monitoreo de riesgos, controles e indicadores ambientales durante la etapa constructiva.",
    ],
    accent: "from-fuchsia-500/20 to-violet-500/10",
  },
  {
    title:
      "Ampliación de los sistemas de agua potable y alcantarillado de la Quebrada de Manchay - 3era Etapa",
    company: "Consorcio Aguas de Manchay",
    role: "Especialista Ambiental",
    period: "Feb 2020 - Sep 2021",
    location: "Pachacámac, Lima",
    contract: "Proyecto de ampliación de sistemas de agua potable y alcantarillado",
    cui: "CUI N.º 2302266",
    amount: "S/ 36,541,113.63",
    milestone1:
      "Obras civiles, equipamiento hidráulico y líneas de agua potable y alcantarillado",
    milestone2:
      "Redes, conexiones, monitoreo arqueológico e intervención social",
    summary:
      "Proyecto de saneamiento orientado a ampliar los sistemas de agua potable y alcantarillado en la Quebrada de Manchay.",
    link:
      "https://ofi5.mef.gob.pe/invierte/ejecucion/verFichaEjecucionHistorico/2302266/2/1",
    linkLabel: "Ver ficha pública del proyecto",
    functions: [
      "Gestión ambiental de obra conforme a estándares de la organización y normativa aplicable.",
      "Identificación de operaciones, actividades, impactos y medidas de control.",
      "Implementación de acciones correctivas y preventivas en materia ambiental.",
    ],
    accent: "from-emerald-500/20 to-cyan-500/10",
  },
];

const certificateGallery = [
  {
    title: "Certificado de servicios - Consorcio Aguas de Manchay",
    issuer: "Consorcio Aguas de Manchay",
    detail: "Especialista Medio Ambiental · 2020 - 2021",
    tag: "Certificado destacado",
  },
  {
    title: "Certificado de trabajo - PTAP Calana",
    issuer: "Consorcio PTAP Calana",
    detail: "Especialista Ambiental · 22/10/2021 al 31/07/2024",
    tag: "Certificado destacado",
  },
  {
    title: "Máster en Gestión Integrada",
    issuer: "CEREM International Business School",
    detail: "Calidad, Medio Ambiente y PRL · 2022",
    tag: "Máster",
  },
  {
    title: "Power BI Nivel Básico",
    issuer: "EICE",
    detail: "Diplomado especializado · 2024",
    tag: "Certificación",
  },
  {
    title: "Gestión del Medio Ambiente",
    issuer: "Pro Avance S.A.C.",
    detail: "Diplomado · 2013",
    tag: "Diplomado",
  },
  {
    title: "Supervisión de Seguridad Minera y Control Ambiental",
    issuer: "Business School B.S.",
    detail: "Aplicación al sistema integrado de gestión",
    tag: "Diplomado",
  },
];

const education = [
  {
    institution: "Universidad Alas Peruanas",
    degree: "Ingeniería Ambiental",
    detail: "Bachiller y título profesional",
  },
  {
    institution: "Universidad Técnica de Oruro - Bolivia",
    degree: "Magíster Global en Gestión Ambiental en Minería",
    detail: "Graduada",
  },
  {
    institution:
      "Università degli Studi Mediterranea di Reggio Calabria - Italia",
    degree: "Master Universitario in Business Administration",
    detail: "Graduada",
  },
  {
    institution: "CEREM International Business School",
    degree: "Máster en Gestión Integrada",
    detail: "Calidad, Medio Ambiente y PRL · 2022",
  },
];

const certifications = [
  "Power BI Nivel Básico",
  "Diplomado en Gestión del Medio Ambiente",
  "Supervisión de Seguridad Minera y Control Ambiental",
  "Gestión de Recursos Hídricos",
  "Saneamiento Ambiental Sostenible",
  "Remediación de Pasivos Ambientales",
];

const tools = [
  "MS Office Professional",
  "AutoCAD",
  "S10 Presupuestos",
  "MS Project",
  "Power BI básico",
];

const languages = ["Español nativo", "Inglés intermedio"];

function validateData() {
  const checks = [
    { name: "profile", pass: !!profile.name && !!profile.title },
    { name: "experience", pass: Array.isArray(experience) && experience.length >= 3 },
    { name: "featuredProjects", pass: Array.isArray(featuredProjects) && featuredProjects.length >= 3 },
    { name: "certificateGallery", pass: Array.isArray(certificateGallery) && certificateGallery.length >= 3 },
    { name: "education", pass: Array.isArray(education) && education.length >= 3 },
    { name: "tools", pass: Array.isArray(tools) && tools.length >= 3 },
  ];

  const failed = checks.filter((check) => !check.pass);
  if (failed.length > 0) {
    throw new Error(
      `Faltan datos importantes en el CV digital: ${failed
        .map((check) => check.name)
        .join(", ")}.`
    );
  }
}

function runDataChecks() {
  validateData();
  console.assert(featuredProjects.every((item) => Array.isArray(item.functions)), "Cada proyecto destacado debe tener funciones.");
  console.assert(certificateGallery.every((item) => item.title && item.issuer), "Cada certificado debe tener título y emisor.");
}

runDataChecks();

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-slate-300 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
      {children}
    </span>
  );
}

function ContactItem({ label, value, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="block rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:-translate-y-0.5 hover:bg-slate-900"
    >
      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</div>
      <div className="mt-1 text-sm font-medium text-white md:text-base">{value}</div>
    </a>
  );
}

function ExperienceCard({ item }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-lg transition hover:-translate-y-1">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{item.role}</h3>
          <p className="mt-1 text-sm text-cyan-300">{item.company}</p>
          <p className="mt-2 text-sm text-slate-400">{item.location}</p>
        </div>
        <div className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-xs text-slate-300">
          {item.period}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
    </div>
  );
}

function SimpleCard({ title, items }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg">
      <h3 className="mb-5 text-xl font-semibold text-white">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={`overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} shadow-2xl transition duration-300 hover:-translate-y-1`}>
      <div className="border-b border-white/10 bg-slate-950/50 px-8 py-6 backdrop-blur">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            {project.role}
          </span>
          <span className="inline-flex rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200">
            {project.company}
          </span>
        </div>
        <h3 className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
          {project.summary}
        </p>
      </div>

      <div className="grid gap-8 px-8 py-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">📍 Ubicación</div>
              <div className="mt-2 text-base font-semibold text-white">{project.location}</div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">📅 Periodo</div>
              <div className="mt-2 text-base font-semibold text-white">{project.period}</div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">🧾 CUI</div>
              <div className="mt-2 text-base font-semibold text-white">{project.cui}</div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">💰 Monto</div>
              <div className="mt-2 text-base font-semibold text-white">{project.amount}</div>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/30 p-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Mi aporte en el proyecto
            </div>
            <div className="grid gap-3">
              {project.functions.map((fn) => (
                <div key={fn} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm leading-6 text-slate-200">
                  {fn}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/30 p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Hitos del proyecto</div>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">{project.milestone1}</div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">{project.milestone2}</div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Enlace público</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Puedes consultar la ficha pública para revisar información general del proyecto.
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-4 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
            >
              {project.linkLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaginaPersonal() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">{profile.name}</div>
            <div className="text-sm text-slate-400">Web profesional</div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre-mi" className="transition hover:text-white">Sobre mí</a>
            <a href="#experiencia" className="transition hover:text-white">Experiencia</a>
            <a href="#proyectos" className="transition hover:text-white">Proyectos</a>
            <a href="#certificados" className="transition hover:text-white">Certificados</a>
            <a href="#contacto" className="transition hover:text-white">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-10">
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                {profile.availability}
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl text-cyan-300 md:text-2xl">{profile.title}</p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {profile.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Pill>{profile.location}</Pill>
                <Pill>{profile.cip}</Pill>
                <Pill>Sector construcción</Pill>
                <Pill>SSOMA &amp; SIG</Pill>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#proyectos" className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20">
                  Explorar proyectos clave
                </a>
                <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                  Conversemos
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900">
                  Ver LinkedIn
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/60">
                  <img src={profilePhoto} alt={`Foto de perfil de ${profile.name}`} className="aspect-square w-full object-cover" />
                </div>
                <p className="mt-3 text-center text-sm text-slate-300">Miriam Lampa</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickStats.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-lg">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                    <div className="mt-2 text-base font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-6 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Sobre mí</p>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Una presencia digital más humana y profesional
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {aboutMe}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <Pill key={interest}>{interest}</Pill>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Mi aporte</div>
                <div className="mt-3 text-lg font-semibold text-white">Gestión con criterio técnico y visión preventiva</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Acompaño la ejecución de obra con enfoque en cumplimiento ambiental, control de impactos, documentación técnica y coordinación efectiva con supervisión, contratistas y cliente.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Enfoque profesional</div>
                <div className="mt-3 text-lg font-semibold text-white">Orden, prevención y mejora continua</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Mi trabajo combina seguimiento técnico, control operacional, elaboración de reportes y compromiso con una ejecución más segura, eficiente y sostenible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle
            eyebrow="Logros"
            title="Una mirada rápida a mi perfil"
            subtitle="Bloques visuales para mostrar de forma simple el valor que aporto en proyectos de construcción, agua y saneamiento."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {keyAchievements.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-lg transition hover:-translate-y-1">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experiencia" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle
            eyebrow="Experiencia"
            title="Trayectoria profesional"
            subtitle="Un resumen ejecutivo de mis cargos, empresas y etapas más relevantes. Los proyectos clave se detallan en la sección siguiente."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experience.map((item) => (
              <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
            ))}
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle
            eyebrow="Proyectos destacados"
            title="Proyectos clave"
            subtitle="Aquí presento los proyectos más representativos con mayor detalle, contexto y aporte profesional."
          />

          <div className="grid gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle
            eyebrow="Perfil técnico"
            title="Fortalezas, estándares y herramientas"
            subtitle="Una combinación entre base técnica, herramientas de trabajo y criterios aplicados en campo."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <SimpleCard title="Fortalezas principales" items={highlights} />
            <SimpleCard title="Normas y estándares" items={standards} />
            <SimpleCard title="Herramientas e idiomas" items={[...tools, ...languages]} />
          </div>
        </section>

        <section id="formacion" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle
            eyebrow="Formación"
            title="Formación académica y especialización"
            subtitle="Una lectura más breve y clara de mi base académica y formación complementaria."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="mb-5 text-xl font-semibold text-white">Formación académica</h3>
              <div className="grid gap-4">
                {education.map((item) => (
                  <div key={`${item.institution}-${item.degree}`} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="text-lg font-semibold text-white">{item.degree}</div>
                    <div className="mt-1 text-cyan-300">{item.institution}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="mb-5 text-xl font-semibold text-white">Especializaciones clave</h3>
              <div className="grid gap-3">
                {certifications.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm leading-6 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="certificados" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <SectionTitle
            eyebrow="Certificados"
            title="Galería visual de certificaciones"
            subtitle="Una presentación más limpia y coherente con el resto del diseño."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificateGallery.map((item) => (
              <div key={`${item.title}-${item.issuer}`} className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-lg transition hover:-translate-y-1">
                <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                  {item.tag}
                </div>
                <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/70 text-3xl">
                  📜
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-7 text-white">{item.title}</h3>
                <p className="mt-2 text-cyan-300">{item.issuer}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-6 py-12 pb-24 md:py-16 md:pb-28">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-fuchsia-500/10 p-8 shadow-2xl md:p-10">
            <SectionTitle
              eyebrow="Contacto"
              title="Conversemos"
              subtitle="Esta web está pensada para mostrar tu experiencia de forma más humana, profesional y visual."
            />

            <div className="grid gap-4 md:grid-cols-2">
              <ContactItem label="Teléfono" value={profile.phone} href={`tel:${profile.phone.replace(/\s+/g, "")}`} />
              <ContactItem label="Correo principal" value={profile.emailPrimary} href={`mailto:${profile.emailPrimary}`} />
              <ContactItem label="Correo alterno" value={profile.emailSecondary} href={`mailto:${profile.emailSecondary}`} />
              <ContactItem label="LinkedIn" value={profile.linkedin.replace("https://", "")} href={profile.linkedin} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
        © 2026 {profile.name} · Web profesional personal
      </footer>
    </div>
  );
}
