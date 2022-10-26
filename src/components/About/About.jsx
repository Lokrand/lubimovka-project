import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>О проекте</h2>
      <p className={styles.subtitle}>
        За первый сезон проекта организаторы провели 17 мероприятий вместе с
        режиссёрами и актёрами московских театров: Театра.doc, Театрального
        Центра им. Вс. Мейерхольда, Гоголь-центра, Электротеатра
        «Станиславский», Ленкома.
      </p>
    </section>
  );
}

export default About;
