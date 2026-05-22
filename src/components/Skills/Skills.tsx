import styles from "./Skills.module.css";

const skillGroups = [
  {
    title: "Frontend",
    icon: "</>",
    color: "pink",
    count: 4,
    skills: [
      { name: "React", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript ES6+", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "</>",
    color: "blue",
    count: 4,
    skills: [
      { name: "NodeJS", level: 75 },
      { name: "Express", level: 80 },
      { name: "MySQL / Prisma", level: 65 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Styling & Design",
    icon: "✎",
    color: "pink",
    count: 4,
    skills: [
      { name: "Bootstrap", level: 50 },
      { name: "CSS Modules / SC", level: 82 },
      { name: "Design Responsivo", level: 92 },
      { name: "Figma", level: 70 },
    ],
  },
];

const Skills = () => (
  <div className={styles.skillsContent}>
    <p className={styles.termLine}>&gt; console.log(skills)</p>

    <div className={styles.skillsGrid}>
      {skillGroups.map((g) => {
        const isBlue = g.color === "blue";
        return (
          <div key={g.title} className={styles.skillCard}>
            <div
              className={`${styles.skillCardHeader} ${isBlue ? styles.blue : styles.pink}`}
            >
              <div>
                {g.icon} {g.title}
              </div>
              <div className={styles.skillCount}>{g.count} skills</div>
            </div>

            <div
              className={`${styles.skillCardBody} ${isBlue ? styles.skillCardBodyBlue : ""}`}
            >
              {g.skills.map((s) => (
                <div key={s.name} className={styles.skillItem}>
                  <div
                    className={`${styles.skillLabel} ${isBlue ? styles.skillLabelBlue : ""}`}
                  >
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div
                    className={`${styles.skillBar} ${isBlue ? styles.skillBarBlue : ""}`}
                  >
                    <div
                      className={`${styles.skillFill} ${isBlue ? styles.skillFillBlue : ""}`}
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Skills;
