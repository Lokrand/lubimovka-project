import styles from "./Performance.module.scss";
import { blackArrow } from "../../utils/constants";
import { ArrowRight } from "../../icons/arrowRight";
export const Performance = ({ props }) => {
  return (
    <div>
      <div className={styles.block}>
        <img
          className={styles.image}
          src="https://img.desktopwallpapers.ru/rocks/pics/wide/1920x1200/27640f370156a0e0ae3ee9608fc8480a.jpg"
          alt=""
        />
        <div className={styles.description}>
          <div className={styles.data_block}>
            <p>{props.data}</p>
            <p>{props.time}</p>
          </div>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.directors}>{props.directors}</p>
          <p className={styles.read}>читка проекта Любимовка.Ещё</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <ArrowRight />О СПЕКТАКЛЕ
        </button>
        <button className={styles.button}>
          <ArrowRight />
          БИЛЕТЫ
        </button>
      </div>
    </div>
  );
};
