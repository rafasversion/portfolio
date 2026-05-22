import styles from "./NavBar.module.css";
import trash from "../../assets/img/trash.png";
import aboutme from "../../assets/img/aboutme.png";
import projects from "../../assets/img/projects.png";
import skills from "../../assets/img/skills.png";
import contact from "../../assets/img/contact.png";

const NavBar = ({ openWindow }: { openWindow: (type: string) => void }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationContent}>
        <button className={styles.navButton}>
          <img className={styles.trash} src={trash} alt="" />
          <span>Lixeira</span>
        </button>

        <button
          data-clickable
          onMouseEnter={() => {
            document.querySelector(".cursor")?.classList.add("pointer");
          }}
          onMouseLeave={() => {
            document.querySelector(".cursor")?.classList.remove("pointer");
          }}
          className={styles.navButton}
          onClick={() => openWindow("about")}
        >
          <img className={styles.aboutme} src={aboutme} alt="" />
          <span>Sobre mim</span>
        </button>

        <button
          data-clickable
          onMouseEnter={() => {
            document.querySelector(".cursor")?.classList.add("pointer");
          }}
          onMouseLeave={() => {
            document.querySelector(".cursor")?.classList.remove("pointer");
          }}
          className={styles.navButton}
          onClick={() => openWindow("projects")}
        >
          <img className={styles.projects} src={projects} alt="" />
          <span>Projetos</span>
        </button>

        <button
          data-clickable
          onMouseEnter={() => {
            document.querySelector(".cursor")?.classList.add("pointer");
          }}
          onMouseLeave={() => {
            document.querySelector(".cursor")?.classList.remove("pointer");
          }}
          className={styles.navButton}
          onClick={() => openWindow("skills")}
        >
          <img className={styles.skills} src={skills} alt="" />
          <span>Habilidades</span>
        </button>

        <button
          data-clickable
          onMouseEnter={() => {
            document.querySelector(".cursor")?.classList.add("pointer");
          }}
          onMouseLeave={() => {
            document.querySelector(".cursor")?.classList.remove("pointer");
          }}
          className={styles.navButton}
          onClick={() => openWindow("contact")}
        >
          <img className={styles.contact} src={contact} alt="" />
          <span>Contato</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
