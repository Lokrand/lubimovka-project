import { Performance } from "../Performance/Performance";
import styles from "./Performances.module.scss";
import { performances } from "../../utils/constants";

export const Performances = () => {
  console.log(performances);
  return (
    <div>
      <h2 className={styles.title}>
        Заголовок блока с тремя и более спектаклями
      </h2>
      <div className={styles.block}>
        {performances.map((el) => {
          return (
            <div key={el.index} className={styles.items}>
              <Performance props={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
