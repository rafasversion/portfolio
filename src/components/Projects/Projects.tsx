import styles from "./Projects.module.css";

const projectImages = import.meta.glob<{ default: string }>(
  "../../assets/img/projects/*.jpg",
  { eager: true },
);

function getProjectImage(slug: string): string | null {
  const key = `../../assets/img/projects/${slug}.jpg`;
  return projectImages[key]?.default ?? null;
}

const projectsData = [
  {
    id: 1,
    slug: "chroma",
    title: "Chroma",
    file: "chromapics.site",
    desc: "Rede social de imagens.",
    version: "v1.0",
    tags: ["React", "TypeScript", "NodeJS", "MySQL", "Prisma"],
    codeUrl: "https://github.com/rafasversion/chroma",
    demoUrl: "https://chromapics.site",
  },
  {
    id: 2,
    slug: "calenday",
    title: "Calenday",
    file: "calenday.site",
    desc: "Calendário + kanban para eventos e tarefas.",
    version: "v2.0",
    isNew: true,
    tags: ["React", "TypeScript", "Express", "MySQL", "Prisma"],
    codeUrl: "https://github.com/rafasversion/calenday-backend",
    demoUrl: "https://calenday.site",
  },
  {
    id: 3,
    slug: "doce-essencia",
    title: "Doce Essência",
    file: "https://doceessenciasite.vercel.app/",
    desc: "Landing Page de salão de beleza.",
    version: "v1.0",
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/rafasversion/doce-essencia",
    demoUrl: "https://doceessenciasite.vercel.app/",
  },
  {
    id: 4,
    slug: "sistema-treinamento",
    title: "Sistema de Treinamento Online",
    file: "",
    desc: "Sistema web de treinamentos desenvolvido como TCC para uma personal trainer.",
    version: "v1.0",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    slug: "calculadora-verde",
    title: "Calculadora Verde",
    file: "",
    desc: ".",
    version: "v1.0",
    tags: ["Python", "HTML", "CSS"],
  },
  {
    id: 6,
    slug: "portfolio-eladev",
    title: "Portfolio eladev",
    file: "eladev.com",
    desc: "Portifólio com estética windows retrô.",
    version: "THIS",
    isNew: true,
    tags: ["React", "TypeScript", "CSS Modules"],
    codeUrl: "https://github.com/rafasversion/potfolio",
    demoUrl: "https://eladev.com",
  },
];

const ProjectThumb = ({ slug, version }: any) => {
  const img = getProjectImage(slug);
  return (
    <div
      className={`${styles.projectThumb} ${img ? "" : styles.projectThumbBlue}`}
    >
      {img && <img src={img} className={styles.projectThumbImg} />}
      <span className={styles.projectThumbBadge}>{version}</span>
    </div>
  );
};

const Projects = () => (
  <div className={styles.projectsContent}>
    <p className={styles.termLine}>&gt; ls ./projetos</p>
    <div className={styles.projectsGrid}>
      {projectsData.map((p) => (
        <div key={p.id} className={styles.projectCard}>
          <div className={styles.projectCardHeader}>
            {p.file}
            <span className={styles.projectHeaderDot}></span>
          </div>

          <ProjectThumb slug={p.slug} version={p.version} />

          <div className={styles.projectCardBody}>
            <h3 className={styles.projectTitle}>
              {p.title}
              {p.isNew && <span className={styles.projectNewBadge}>NEW</span>}
            </h3>

            <p className={styles.projectDesc}>{p.desc}</p>

            <div className={styles.projectTags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>

            <div className={styles.projectActions}>
              {p.codeUrl && (
                <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectBtn}
                >
                  ⌥ Code
                </a>
              )}

              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.projectBtn}
                >
                  ↗ Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
