import { useRef, useState } from "react";
import type { ReactElement } from "react";
import styles from "./Window.module.css";

import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

type WindowType = "about" | "projects" | "skills" | "contact";

interface WindowProps {
  type: WindowType;
  zIndex: number;
  x: number;
  y: number;
  onMove: (x: number, y: number) => void;
  onMinimize: () => void;
  onClose: () => void;
  onFocus?: () => void;
}

const TITLES: Record<WindowType, string> = {
  about: "Sobre_Mim.txt",
  projects: "Projetos_Pasta/",
  skills: "Habilidades.js",
  contact: "Contato_Formulário.html",
};

const Window = ({
  type,
  zIndex,
  x,
  y,
  onMove,
  onMinimize,
  onClose,
  onFocus,
}: WindowProps) => {
  const [maximized, setMaximized] = useState(false);
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) return;
    if (maximized) return;

    dragging.current = true;
    dragOffset.current = { x: e.clientX - x, y: e.clientY - y };
    onFocus?.();

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      onMove(
        ev.clientX - dragOffset.current.x,
        ev.clientY - dragOffset.current.y,
      );
    };

    const onMouseUp = () => {
      dragging.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const getStyle = () => {
    if (maximized)
      return {
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        transform: "none",
        zIndex,
      };
    return { left: x, top: y, zIndex, transform: "none" };
  };

  const content: Record<WindowType, ReactElement> = {
    about: <AboutMe />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
  };

  return (
    <section
      className={`${styles.window} ${maximized ? styles.maximized : ""}`}
      style={getStyle()}
      onMouseDown={() => onFocus?.()}
    >
      <div className={styles.windowHeader} onMouseDown={onMouseDown}>
        {TITLES[type] ?? "Window"}

        <div className={styles.windowActions}>
          <button onClick={onMinimize}>_</button>

          <button onClick={() => setMaximized((m) => !m)}>
            {maximized ? "❐" : "□"}
          </button>

          <button className={styles.closeWindow} onClick={onClose}>
            ×
          </button>
        </div>
      </div>

      <div className={styles.windowContent}>{content[type]}</div>
    </section>
  );
};

export default Window;
