import styles from "./AboutMe.module.css";
import avatarImg from "../../assets/img/avatar.png";
import htmlLogo from "../../assets/img/html-logo.png";
import cssLogo from "../../assets/img/css-logo.png";
import jsLogo from "../../assets/img/js-logo.png";
import tsLogo from "../../assets/img/ts-logo.png";
import reactLogo from "../../assets/img/react-logo.png";
import nodejsLogo from "../../assets/img/nodejs-logo.png";
import pythonLogo from "../../assets/img/python-logo.png";
import mysqlLogo from "../../assets/img/mysql-logo.png";
import gitLogo from "../../assets/img/git-logo.png";

const AboutMe = () => (
  <div className={styles.aboutContent}>
    <div className={styles.aboutHeader}>
      <div className={styles.aboutAvatar}>
        <img src={avatarImg} alt="" />
      </div>
      <div>
        <div className={styles.aboutName}>&gt; Rafaela Rodrigues</div>
        <div className={styles.aboutRole}>Desenvolvedora Full-Stack</div>
        <div className={styles.aboutStatus}>
          <span className={styles.statusDot}></span>
          Disponível para vagas
        </div>
      </div>
    </div>

    <div className={styles.codeBlock}>
      <span className={styles.codePrompt}>const</span>
      <pre>{`developer = {
  name:    "Rafaela Rodrigues",
  passion: "Criar experiências web incríveis",
  type:    "CLT / Presencial Brasília / Remoto"
}`}</pre>
    </div>

    <div className={styles.eduSection}>
      <div className={styles.eduLabel}>// FORMAÇÃO ACADÊMICA</div>
      <div className={styles.eduCards}>
        <div className={`${styles.eduItem} ${styles.eduItemOngoing}`}>
          <span className={`${styles.eduBadge} ${styles.eduBadgeOngoing}`}>
            CURSANDO
          </span>
          <span className={styles.eduYear}>2025–</span>
          <p className={styles.eduCourse}>
            Computação - Universidade de Brasília (UnB)
          </p>
          <p className={styles.eduSub}>// graduação em andamento</p>
        </div>
        <div className={styles.eduItem}>
          <span className={styles.eduBadge}>CONCLUÍDO</span>
          <span className={styles.eduYear}>2022</span>
          <p className={styles.eduCourse}>
            Técnico em Informática - Instituto Federal Catarinense (IFC)
          </p>
        </div>
      </div>
    </div>

    <div className={styles.langSection}>
      <img src={htmlLogo} width={50} />
      <img src={cssLogo} width={50} />
      <img src={jsLogo} width={50} />
      <img src={tsLogo} width={50} />
      <img src={reactLogo} width={50} />
      <img src={nodejsLogo} width={50} />
      <img src={pythonLogo} width={50} />
      <img src={mysqlLogo} width={50} />
      <img src={gitLogo} width={50} />
    </div>
  </div>
);

export default AboutMe;
