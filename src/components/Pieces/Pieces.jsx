import styles from "./Pieces.module.scss";
import { pieces } from "../../utils/constants";
import { Piece } from "../Piece/Piece";
export const Pieces = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Заголовок блока с пьесами</h2>
      <div className={styles.pieces}>
        {pieces.map((el) => {
          return <Piece props={el} />;
        })}
      </div>
    </div>
  );
};
