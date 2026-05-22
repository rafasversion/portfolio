import "./assets/css/App.css";
import { useEffect, useState, useRef } from "react";
import TaskBar from "./components/TaskBar/TaskBar";
import NavBar from "./components/Navigation/NavBar";
import Window from "./components/Window/Window";
import MobileView from "./components/Mobile/MobileView";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

function App() {
  const isMobile = useIsMobile();
const [windows, setWindows] = useState<any[]>([
  {
    id: Date.now(),
    type: "about",
    minimized: false,
    closed: false,
    zIndex: 10,
    x: Math.max(10, document.documentElement.clientWidth / 2 - 400),
    y: Math.max(10, document.documentElement.clientHeight / 2 - 300 - 38),
  },
]);
  const [zCounter, setZCounter] = useState(10);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMobile) return;
    const move = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.left = e.clientX - 4 + "px";
      cursor.style.top = e.clientY - 4 + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  const openWindow = (type: string) => {
    setZCounter((z) => z + 1);
    const newZ = zCounter + 1;
    const openCount = windows.filter((w) => !w.closed).length;
    const offset = openCount * 30;
    const x = Math.max(
      10,
      document.documentElement.clientWidth / 2 - 400 + offset,
    );
    const y = Math.max(
      10,
      document.documentElement.clientHeight / 2 - 300 - 38 + offset,
    );
    setWindows((prev) => {
      const exists = prev.find((w) => w.type === type);
      if (exists) {
        return prev.map((w) =>
          w.type === type
            ? { ...w, closed: false, minimized: false, zIndex: newZ }
            : w,
        );
      }
      return [
        ...prev,
        {
          id: Date.now(),
          type,
          minimized: false,
          closed: false,
          zIndex: newZ,
          x,
          y,
        },
      ];
    });
  };

  const updatePos = (id: number, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  };

  const bringToFront = (id: number) => {
    setZCounter((z) => z + 1);
    const newZ = zCounter + 1;
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w)),
    );
  };

  const toggleMinimize = (id: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w)),
    );
  };

  const restoreWindow = (id: number) => {
    setZCounter((z) => z + 1);
    const newZ = zCounter + 1;
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, minimized: false, closed: false, zIndex: newZ }
          : w,
      ),
    );
  };

  const closeWindow = (id: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, closed: true } : w)),
    );
  };

  if (isMobile) {
    return <MobileView />;
  }

  return (
    <>
      <NavBar openWindow={openWindow} />
      {windows.map(
        (w) =>
          !w.closed &&
          !w.minimized && (
            <Window
              key={w.id}
              type={w.type}
              zIndex={w.zIndex}
              x={w.x}
              y={w.y}
              onMove={(x: number, y: number) => updatePos(w.id, x, y)}
              onMinimize={() => toggleMinimize(w.id)}
              onClose={() => closeWindow(w.id)}
              onFocus={() => bringToFront(w.id)}
            />
          ),
      )}
      <TaskBar windows={windows} onRestore={restoreWindow} />
      <div ref={cursorRef} className="cursor"></div>
    </>
  );
}

export default App;
