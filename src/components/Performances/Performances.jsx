import { Performance } from "../Performance/Performance";
import styles from './Performances.module.scss';

export const Performances = () => {
  return (
    <>
      <h2 className={styles.title}>Заголовок блока с тремя и более спектаклями</h2>
      <div>
        <Performance />
        <Performance />
        <Performance />
      </div>
    </>
  );
};
