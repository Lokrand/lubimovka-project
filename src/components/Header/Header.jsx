import styles from "./Header.module.scss";
import logo from "../../images/Logo.svg";
import Navigation from "../Navigation/Navigation";
import SocialLinks from "../SocialLinks/SocialLinks";
import SupportLink from "../SupportLink/SupportLink";
import Tab from "../Tab/Tab";
import { ArrowRight } from "../../icons/ArrowRight";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Логотип." />
        <Navigation>
          <Tab href={"#"} text={"Афиша"} />
          <Tab href={"#"} text={"Библиотека"} />
          <Tab href={"#"} text={"Проекты"} />
          <Tab href={"#"} text={"История"} />
          <Tab href={"#"} text={"Блог"} />
          <Tab href={"#"} text={"Новости"} />
          <Tab href={"#"} text={"О фестивале"} />
          <Tab href={"#"} text={"Контакты"} />
        </Navigation>
        <SocialLinks>
          <Tab href={"#"} text={"fb"} />
          <Tab href={"#"} text={"inst"} />
          <Tab href={"#"} text={"ytube"} />
          <Tab href={"#"} text={"tlgrm"} />
          <Tab href={"#"} text={"vk"} />
        </SocialLinks>
        <SupportLink />
      </header>
      <div className={styles.line}></div>
      <button className={styles.button}>
        Проекты
        <div className={styles.icon}>
          <ArrowRight />
        </div>
      </button>
    </>
  );
};

export default Header;
