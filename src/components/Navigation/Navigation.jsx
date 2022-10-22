import Tab from "../Tab/Tab";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <Tab href={"#"} text={"Афиша"} />
        <Tab href={"#"} text={"Библиотека"} />
        <Tab href={"#"} text={"Проекты"} />
        <Tab href={"#"} text={"История"} />
        <Tab href={"#"} text={"Блог"} />
        <Tab href={"#"} text={"Новости"} />
        <Tab href={"#"} text={"О фестивале"} />
        <Tab href={"#"} text={"Контакты"} />
      </ul>
    </nav>
  );
}

export default Navigation;
