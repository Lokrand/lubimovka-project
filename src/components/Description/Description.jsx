import styles from "./Description.module.scss";
import audience from "../../images/audience.jpg";

const Head = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Любимовка. Ещё</h1>
      <p className={styles.subtitle}>
        Межсезонные читки и обсуждение пьес из списка отмеченных отборщиками
        Любимовки.
      </p>
      <img
        src={audience}
        alt="Читка пьес в большой аудитории."
        className={styles.image}
      />
    </section>
  );
};

export default Head;
