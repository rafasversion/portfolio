import { useState, useEffect } from "react";
import styles from "./MobileView.module.css";

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  return (
    <div className={styles.widget}>
      <svg viewBox="0 0 120 120" className={styles.clockSvg}>
        <circle
          cx="60"
          cy="60"
          r="58"
          fill="#fff0f5"
          stroke="#fc6cb4"
          strokeWidth="2"
        />

        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 60 + 50 * Math.sin(angle);
          const y1 = 60 - 50 * Math.cos(angle);
          const x2 = 60 + 55 * Math.sin(angle);
          const y2 = 60 - 55 * Math.cos(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#fb0680"
              strokeWidth="2"
            />
          );
        })}

        <line
          x1="60"
          y1="60"
          x2={60 + 25 * Math.sin((hourDeg * Math.PI) / 180)}
          y2={60 - 25 * Math.cos((hourDeg * Math.PI) / 180)}
          stroke="#8fbafa"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <line
          x1="60"
          y1="60"
          x2={60 + 35 * Math.sin((minuteDeg * Math.PI) / 180)}
          y2={60 - 35 * Math.cos((minuteDeg * Math.PI) / 180)}
          stroke="#acccfd"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <line
          x1="60"
          y1="60"
          x2={60 + 38 * Math.sin((secondDeg * Math.PI) / 180)}
          y2={60 - 38 * Math.cos((secondDeg * Math.PI) / 180)}
          stroke="#acccfd"
          strokeWidth="1"
          strokeLinecap="round"
        />

        <circle cx="60" cy="60" r="3" fill="#fb0680" />
      </svg>
    </div>
  );
};

export default ClockWidget;
