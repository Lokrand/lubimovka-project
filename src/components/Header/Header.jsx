import styles from "./Header.module.scss";
import logo from "../../images/Logo.svg";
import Navigation from "../Navigation/Navigation";
import SocialLinks from "../SocialLinks/SocialLinks";
import SupportLink from "../SupportLink/SupportLink";
import Tab from "../Tab/Tab";
import Modal from "../Modal/Modal";
import { ArrowRight } from "../../icons/ArrowRight";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const openMenu = () => {
    setActive((active) => !active);
  };

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Логотип." />
        <div className={styles.navigation}>
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
        </div>
        <button
          className={styles.burger}
          onClick={() => {
            openMenu();
          }}
        >
          <span
            className={
              active
                ? `${styles.burger_line} ${styles.burger_line_active}`
                : `${styles.burger_line}`
            }
          ></span>
        </button>
      </header>
      <div className={styles.line}></div>
      <button className={styles.button}>
        Проекты
        <div className={styles.icon}>
          <ArrowRight />
        </div>
      </button>
      <Modal onClose={openMenu} visible={active}>
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
      </Modal>
    </>
  );
};

export default Header;
