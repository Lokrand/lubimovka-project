import styles from "./Person.module.scss";

export const Person = ({ props }) => {
  return (
    <div className={styles.block}>
      <img src={props.image} alt={props.name} className={styles.image} />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.job}>{props.job}</p>
    </div>
  );
};
