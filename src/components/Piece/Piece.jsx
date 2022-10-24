import { ArrowDown } from "../../icons/ArrowDown";
import { ArrowOneHour } from "../../icons/ArrowOneHour";
import styles from "./Piece.module.scss";

export const Piece = ({ props }) => {
  return (
    <div>
      <div className={styles.poster}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            СМОТРЕТЬ ЧИТКУ{" "}
            <ArrowOneHour />
          </button>
          <button className={styles.button}>
            СКАЧАТЬ ПЬЕСУ{" "}
            <ArrowDown />
          </button>
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.city}>{props.city}</p>
        <p className={styles.year}>{props.year}</p>
      </div>
    </div>
  );
};
