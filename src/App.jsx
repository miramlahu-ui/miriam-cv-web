const profile = {
  name: "Miriam Magaly Lampa Huanca",
  title: "Especialista en Seguridad, Salud Ocupacional y Medio Ambiente",
  subtitle:
    "Ingeniera ambiental con experiencia en proyectos de agua, saneamiento y tratamiento de aguas residuales. Enfoque en gestión ambiental, SSOMA, reportes técnicos y cumplimiento de compromisos ambientales.",
  location: "Lima / Tacna, Perú",
  phone: "+51 993 344 258",
  emailPrimary: "Ing.ambiental.lampa@gmail.com",
  emailSecondary: "miramlahu@gmail.com",
  linkedin: "https://www.linkedin.com/in/miriam-lampa",
  cip: "CIP 181173",
  photo: "/assets/miriam-photo.jpg",
}

const quickStats = [
  { label: "Trayectoria", value: "Desde 2016", detail: "Gestión ambiental y SSOMA en construcción" },
  { label: "Cobertura", value: "Lima · Tacna · Puno", detail: "Proyectos de agua, alcantarillado y saneamiento" },
  { label: "Especialidad", value: "Gestión ambiental", detail: "Control de impactos, reportes y cumplimiento" },
]

const strengths = [
  "Gestión ambiental en proyectos de construcción",
  "Supervisión de cumplimiento ambiental en obra",
  "SSOMA y sistemas integrados de gestión",
  "Capacitaciones, simulacros e investigación de incidentes",
  "Informes técnicos, indicadores y seguimiento ambiental",
  "Coordinación con contratista, supervisión y cliente",
]

const standards = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 37001",
  "ISO 50001",
  "ISO/IEC 17025",
  "Programa 5S",
]

const projects = [
  {
    title:
      "Mejoramiento y Ampliación de los sistemas de agua potable, alcantarillado y tratamiento de aguas residuales para el Esquema José Gálvez Sector 315 y Esquema Villa Alejandro - Etapa 2",
    company: "Constructora MPM S.A.C.",
    role: "Especialista Ambiental",
    period: "Ago 2024 - Actualidad",
    place: "Villa María del Triunfo y Lurín, Lima",
    code: "CUI 2403503",
    amount: "S/ 236,335,663.26",
    link: "https://ofi5.mef.gob.pe/inviertews/Repseguim/ResumF12B?codigo=2403503&utm_source=chatgpt.com",
    summary:
      "Proyecto de gran escala orientado al mejoramiento y ampliación de sistemas de agua potable, alcantarillado y tratamiento de aguas residuales.",
    bullets: [
      "Supervisión del cumplimiento ambiental de obra.",
      "Seguimiento del Plan de Manejo Ambiental.",
      "Reportes técnicos e indicadores ambientales.",
      "Coordinación con supervisión, contratista y actores clave.",
    ],
  },
  {
    title: "Construcción y equipamiento de una nueva Planta de Tratamiento de Agua Potable de Calana",
    company: "Consorcio PTAP Calana",
    role: "Especialista Ambiental",
    period: "Oct 2021 - Jul 2024",
    place: "Calana, Tacna",
    code: "CUI 2167692",
    amount: "S/ 65,340,933.34",
    link: "https://ofi5.mef.gob.pe/invierteWS/Repseguim/ResumF12B?codigo=2167692",
    summary:
      "Proyecto de infraestructura de agua potable con componentes hidráulicos, eléctricos, automatización y laboratorio.",
    bullets: [
      "Supervisión del cumplimiento ambiental conforme al instrumento aprobado.",
      "Acciones preventivas, correctivas y de mitigación.",
      "Monitoreo de riesgos, controles e indicadores ambientales.",
      "Procedimientos, formatos e informes técnicos de gestión ambiental.",
    ],
  },
  {
    title: "Ampliación de los sistemas de agua potable y alcantarillado de la Quebrada de Manchay - 3era Etapa",
    company: "Consorcio Aguas de Manchay",
    role: "Especialista Ambiental",
    period: "Feb 2020 - Sep 2021",
    place: "Pachacámac, Lima",
    code: "CUI 2302266",
    amount: "S/ 36,541,113.63",
    link: "https://ofi5.mef.gob.pe/invierte/ejecucion/verFichaEjecucionHistorico/2302266/2/1",
    summary:
      "Proyecto de saneamiento orientado a ampliar los sistemas de agua potable y alcantarillado en la Quebrada de Manchay.",
    bullets: [
      "Gestión ambiental de obra según normativa y estándares.",
      "Identificación de impactos y medidas de control.",
      "Acciones correctivas y preventivas en campo.",
      "Auditorías, capacitaciones y simulacros.",
    ],
  },
]

const education = [
  {
    degree: "Ingeniería Ambiental",
    institution: "Universidad Alas Peruanas",
    detail: "Bachiller (2014) · Título profesional (2015)",
  },
  {
    degree: "Magíster Global en Gestión Ambiental en Minería",
    institution: "Universidad Técnica de Oruro - Bolivia",
    detail: "Graduada",
  },
  {
    degree: "Master Universitario in Business Administration",
    institution: "Università degli Studi Mediterranea di Reggio Calabria - Italia",
    detail: "Graduada",
  },
  {
    degree: "Máster en Gestión Integrada (Calidad, Medio Ambiente y PRL)",
    institution: "CEREM International Business School",
    detail: "Aprobado - 2022",
  },
]

const certificates = [
  {
    title: "Certificado PTAP Calana",
    issuer: "Consorcio PTAP Calana",
    detail: "Especialista Ambiental · 22/10/2021 al 31/07/2024",
    image: "/assets/calana-thumb.jpg",
    file: "/assets/certificado-calana.pdf",
  },
  {
    title: "Certificado Consorcio Aguas de Manchay",
    issuer: "Consorcio Aguas de Manchay",
    detail: "Especialista Medio Ambiental · 2020 - 2021",
    image: "/assets/manchay-thumb.jpg",
    file: "/assets/certificado-manchay.pdf",
  },
  {
    title: "CV documentado",
    issuer: "Miriam Magaly Lampa Huanca",
    detail: "Resumen completo de trayectoria, formación y certificados",
    image: "/assets/cv-thumb.jpg",
    file: "/assets/cv-documentado.pdf",
  },
]

const tools = [
  "MS Office Professional",
  "AutoCAD",
  "S10 Presupuestos",
  "MS Project",
  "Power BI básico",
  "Inglés intermedio",
]

function runDataChecks() {
  const tests = [
    { name: "profile name", pass: Boolean(profile.name) },
    { name: "at least 3 projects", pass: projects.length >= 3 },
    { name: "project titles complete", pass: projects.every((p) => p.title && p.company && p.role && p.link) },
    { name: "certificates complete", pass: certificates.every((c) => c.title && c.image && c.file) },
    { name: "education complete", pass: education.length >= 3 },
  ]

  const failed = tests.filter((t) => !t.pass)
  if (failed.length) {
    throw new Error(`Datos incompletos en la web: ${failed.map((t) => t.name).join(", ")}`)
  }
}

runDataChecks()

function SectionTitle({ badge, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{badge}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-main">
        <span className="chip chip-accent">{project.role}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="project-meta">
          <div><strong>Empresa:</strong> {project.company}</div>
          <div><strong>Ubicación:</strong> {project.place}</div>
          <div><strong>Código:</strong> {project.code}</div>
          <div><strong>Monto:</strong> {project.amount}</div>
        </div>

        <details className="project-details">
          <summary>Ver más detalles</summary>
          <div className="bullet-list">
            {project.bullets.map((item) => (
              <div key={item} className="bullet-item">{item}</div>
            ))}
          </div>
        </details>
      </div>

      <div className="project-side">
        <div className="metric-box">
          <span>Periodo</span>
          <strong>{project.period}</strong>
        </div>
        <a className="primary-btn" href={project.link} target="_blank" rel="noreferrer">
          Ver ficha pública
        </a>
      </div>
    </article>
  )
}

function CertificateCard({ item }) {
  return (
    <article className="certificate-card">
      <div className="certificate-image-wrap">
        <img src={item.image} alt={item.title} className="certificate-image" />
      </div>
      <div className="certificate-body">
        <span className="chip">Documento</span>
        <h3>{item.title}</h3>
        <p className="issuer">{item.issuer}</p>
        <p>{item.detail}</p>
        <a className="secondary-btn" href={item.file} target="_blank" rel="noreferrer">
          Abrir documento
        </a>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-dot" />
          <div>
            <strong>{profile.name}</strong>
            <small>CV digital visual</small>
          </div>
        </div>
        <nav className="nav">
          <a href="#proyectos">Proyectos</a>
          <a href="#formacion">Formación</a>
          <a href="#documentos">Documentos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Perfil profesional</span>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p>{profile.subtitle}</p>

            <div className="hero-actions">
              <a className="primary-btn" href="#proyectos">Ver proyectos</a>
              <a className="secondary-btn" href="#documentos">Ver documentos</a>
              <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="pill-row">
              <span className="pill">{profile.location}</span>
              <span className="pill">{profile.cip}</span>
              <span className="pill">SSOMA</span>
              <span className="pill">Gestión ambiental</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-card">
              <img src={profile.photo} alt={`Foto de ${profile.name}`} />
            </div>
            <div className="contact-card">
              <div><strong>Teléfono</strong><span>{profile.phone}</span></div>
              <div><strong>Correo</strong><span>{profile.emailPrimary}</span></div>
              <div><strong>Correo alterno</strong><span>{profile.emailSecondary}</span></div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {quickStats.map((item) => (
            <article key={item.label} className="stat-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="content-block">
          <SectionTitle
            badge="Fortalezas"
            title="Lo que aporto en obra"
            text="Una vista rápida de las áreas donde tu experiencia genera más valor."
          />
          <div className="strength-grid">
            {strengths.map((item) => (
              <div key={item} className="strength-card">{item}</div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="content-block">
          <SectionTitle
            badge="Proyectos"
            title="Proyectos destacados"
            text="Una presentación más visual de los proyectos donde has participado y el tipo de responsabilidad que asumiste."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="formacion" className="two-col-section">
          <div className="content-block">
            <SectionTitle
              badge="Formación"
              title="Formación académica"
              text="Base técnica y profesional que respalda tu experiencia."
            />
            <div className="stack-list">
              {education.map((item) => (
                <article key={item.degree} className="list-card">
                  <h3>{item.degree}</h3>
                  <p className="issuer">{item.institution}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="content-block">
            <SectionTitle
              badge="Herramientas"
              title="Herramientas e idiomas"
              text="Recursos técnicos complementarios para tu trabajo diario."
            />
            <div className="tool-pills">
              {tools.map((item) => (
                <span key={item} className="pill pill-dark">{item}</span>
              ))}
            </div>
            <div className="standards-card">
              <h3>Normas y estándares</h3>
              <div className="tool-pills">
                {standards.map((item) => (
                  <span key={item} className="pill pill-dark">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="documentos" className="content-block">
          <SectionTitle
            badge="Documentos"
            title="Certificados y documentos visibles"
            text="Aquí sí se muestran tus archivos reales dentro de la web, con miniatura y acceso al documento."
          />
          <div className="certificate-grid">
            {certificates.map((item) => (
              <CertificateCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="contacto" className="content-block contact-section">
          <SectionTitle
            badge="Contacto"
            title="Disponible para colaborar"
            text="Tu página ya está pensada como perfil profesional visual y fácil de actualizar."
          />
          <div className="contact-grid">
            <a className="contact-box" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
              <strong>Teléfono</strong>
              <span>{profile.phone}</span>
            </a>
            <a className="contact-box" href={`mailto:${profile.emailPrimary}`}>
              <strong>Correo principal</strong>
              <span>{profile.emailPrimary}</span>
            </a>
            <a className="contact-box" href={`mailto:${profile.emailSecondary}`}>
              <strong>Correo alterno</strong>
              <span>{profile.emailSecondary}</span>
            </a>
            <a className="contact-box" href={profile.linkedin} target="_blank" rel="noreferrer">
              <strong>LinkedIn</strong>
              <span>linkedin.com/in/miriam-lampa</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 {profile.name}</span>
        <span>Web personal profesional</span>
      </footer>
    </div>
  )
}
