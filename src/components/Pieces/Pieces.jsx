import styles from "./Pieces.module.scss";
import { pieces } from "../../utils/constants";
import { Piece } from "../Piece/Piece";
import {Title} from "../Title/Title";

export const Pieces = () => {
  return (
    <div className={styles.section}>
      <Title text='Заголовок блока с пьесами' />
      <div className={styles.pieces}>
        {pieces.map((el) => {
          return <Piece props={el} />;
        })}
      </div>
    </div>
  );
};
