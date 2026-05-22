import { useState } from "react";
import styles from "./MobileView.module.css";

import { ChevronLeft, Circle, Menu } from "lucide-react";

import ClockWidget from "./ClockWidget";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

import wifi from "../../assets/img/wifi.png";
import batery from "../../assets/img/batery.png";

import aboutmeIcon from "../../assets/img/aboutme.png";
import projectsIcon from "../../assets/img/projects.png";
import skillsIcon from "../../assets/img/skills.png";
import contactIcon from "../../assets/img/contact.png";
import noteIcon from "../../assets/img/note.png";
import linkedinIcon from "../../assets/img/linkedin.png";
import githubIcon from "../../assets/img/github.png";
import instagramIcon from "../../assets/img/instagram.png";
import avatar from "../../assets/img/avatar.png";
type AppType =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "contact"
  | "curriculum"
  | "linkedin"
  | "github"
  | "instagram";

const HomeScreen = ({ onOpenApp }: { onOpenApp: (app: AppType) => void }) => {
  return (
    <div className={styles.homeScreen}>
      <div className={styles.statusBar}>
        <img src={wifi} className={styles.statusIcon} />
        <span className={styles.statusCenter}>9:41</span>
        <img src={batery} className={styles.statusIcon} />
      </div>

      <div className={styles.homeContainer}>
        <div className={styles.rowApps}>
          <div className={styles.widget}>
            <ClockWidget />
          </div>

          <div className={styles.appColumn}>
            {[
              { id: "about", label: "Sobre mim", icon: aboutmeIcon },
              { id: "projects", label: "Projetos", icon: projectsIcon },
              { id: "skills", label: "Habilidades", icon: skillsIcon },
              { id: "contact", label: "Contato", icon: contactIcon },
            ].map((app) => (
              <button
                key={app.id}
                className={styles.appIcon}
                onClick={() => onOpenApp(app.id as AppType)}
              >
                <div className={styles.iconBox}>
                  <img src={app.icon} />
                </div>
                <span>{app.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.rowApps}>
          <div className={styles.fullWidget}>
            <div className={styles.roadmapHeader}>
              <span>2026 ROADMAP</span>
              <span className={styles.roadmapBadge}>work in progress</span>
            </div>

            <div className={styles.roadmapList}>
              <div className={styles.roadmapItem}>
                <span>[✓]</span>
                <p>chroma pics - rede social de imagens</p>
              </div>

              <div className={styles.roadmapItem}>
                <span>[✓]</span>
                <p>calenday - gerenciador de eventos e tarefas</p>
              </div>

              <div className={styles.roadmapItem}>
                <span>[✓]</span>
                <p>eladev - portifólio</p>
              </div>

              <div className={styles.roadmapItem}>
                <span>[&nbsp;&nbsp;&nbsp;&nbsp;]</span>
                <p>jounal book site</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rowApps}>
          <div className={styles.appColumn}>
            {[
              {
                id: "curriculum",
                label: "Currículo",
                icon: noteIcon,
                link: "/curriculo.pdf",
              },
              {
                id: "linkedin",
                label: "LinkedIn",
                icon: linkedinIcon,
                link: "https://www.linkedin.com/in/rafaelardosanjos/",
              },
              {
                id: "github",
                label: "GitHub",
                icon: githubIcon,
                link: "https://github.com/rafasversion",
              },
              {
                id: "instagram",
                label: "Instagram",
                icon: instagramIcon,
                link: "https://www.instagram.com/codebyela/",
              },
            ].map((app) => (
              <button
                key={app.id}
                className={styles.appIcon}
                onClick={() => {
                  if (app.id === "curriculum") {
                    const link = document.createElement("a");

                    link.href = "/curriculo.pdf";
                    link.download = "Rafaela-Rodrigues-Curriculo.pdf";

                    document.body.appendChild(link);

                    link.click();

                    document.body.removeChild(link);

                    return;
                  }

                  if (app.link) {
                    window.open(app.link, "_blank");
                  }
                }}
              >
                <div className={styles.iconBox}>
                  <img src={app.icon} />
                </div>
                <span>{app.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.widget}>
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileView = () => {
  const [activeApp, setActiveApp] = useState<AppType>("home");

  const renderApp = () => {
    switch (activeApp) {
      case "about":
        return <AboutMe />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <div style={{ color: "#800040" }}>Em breve...</div>;
    }
  };

  return (
    <div className={styles.mobileShell}>
      {activeApp === "home" ? (
        <HomeScreen onOpenApp={setActiveApp} />
      ) : (
        <div className={styles.appWindow}>
          <div className={styles.appHeader}>
            <span>{activeApp}</span>
          </div>

          <div className={styles.appBody}>{renderApp()}</div>
        </div>
      )}

      <div className={styles.navBottom}>
        <button className={styles.navBtn}>
          <Menu size={18} />
        </button>

        <button className={styles.navBtn} onClick={() => setActiveApp("home")}>
          <Circle size={18} />
        </button>

        <button className={styles.navBtn} onClick={() => setActiveApp("home")}>
          <ChevronLeft size={18} />
        </button>
      </div>
    </div>
  );
};

export default MobileView;
