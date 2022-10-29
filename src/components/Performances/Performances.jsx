import { Performance } from "../Performance/Performance";
import styles from "./Performances.module.scss";
import { performances } from "../../utils/constants";
import { Title } from "../Title/Title";

export const Performances = () => {
  return (
    <div className={styles.section}>
      <Title text='Заголовок блока с тремя и более спектаклями' />
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
