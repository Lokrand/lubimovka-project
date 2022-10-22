import styles from "./Piece.module.scss";

export const Piece = ({ props }) => {
  return (
    <div>
      <div className={styles.poster}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            СМОТРЕТЬ ЧИТКУ{" "}
            <img
              src={require("../../images/Arrow_for_button.svg").default}
              alt="Стрелка на 1 час"
              className={styles.arrow}
            />
          </button>
          <button className={styles.button}>
            СКАЧАТЬ ПЬЕСУ{" "}
            <img
              src={require("../../images/Arrow_for_button.svg").default}
              alt="Стрелка вниз"
              className={styles.arrow}
            />
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
