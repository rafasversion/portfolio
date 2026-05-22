import styles from "./TaskBar.module.css";
import windows from "../../assets/img/windows.png";
import browser from "../../assets/img/browser.png";
import wifi from "../../assets/img/wifi.png";
import volume from "../../assets/img/volume.png";
import batery from "../../assets/img/batery.png";

const LABELS: Record<string, string> = {
  about: "About_Me.txt",
  projects: "Projects_Folder/",
  skills: "Skills.js",
  contact: "Contact_Form.html",
};

const TaskBar = ({ windows: winList, onRestore }: any) => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();

  return (
    <div className={styles.footer}>
      <div className={styles.apps}>
        <img className={styles.windows} src={windows} alt="" />
        <img className={styles.browser} src={browser} alt="" />

        {winList.map(
          (w: any) =>
            !w.closed && (
              <button key={w.id} onClick={() => onRestore(w.id)}>
                {LABELS[w.type] ?? w.type}
              </button>
            ),
        )}
      </div>

      <div className={styles.controllers}>
        <img className={styles.wifi} src={wifi} alt="" />
        <img className={styles.volume} src={volume} alt="" />
        <img className={styles.batery} src={batery} alt="" />
        <span>
          {hour}:{min < 10 ? "0" + min : min}
        </span>
      </div>
    </div>
  );
};

export default TaskBar;
