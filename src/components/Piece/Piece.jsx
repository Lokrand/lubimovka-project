import styles from "./Piece.module.scss";

export const Piece = ({ props }) => {
  return (
    <div>
      <div className={styles.poster}>
        <p className={styles.title}>{props.title}</p>
      </div>
      <div className={styles.description}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.city}>{props.city}</p>
        <p className={styles.year}>{props.year}</p>
      </div>
    </div>
  );
};
