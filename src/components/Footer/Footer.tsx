import React from "react";
import logo from "./images/logo_footer.svg";
import mark from "./images/footer_footer.svg";
import styles from "./Footer.module.scss";
import Partners from "../Partners/Partners";

const initFooterLinks = [
  {
    name: "Любимовка",
    link: "#",
  },
  {
    name: "Афиша",
    link: "#",
  },
  {
    name: "Библиотека",
    link: "#",
  },
  {
    name: "Блог",
    link: "#",
  },
  {
    name: "Новости",
    link: "#",
  },
  {
    name: "О фестивале",
    link: "#",
  },
  {
    name: "Организаторы",
    link: "#",
  },
  {
    name: "История",
    link: "#",
  },
  {
    name: "Контакты",
    link: "#",
  },
  {
    name: "Для прессы",
    link: "#",
  },
  {
    name: "Все проекты",
    link: "#",
  },
  {
    name: "Любимовка.Ещё",
    link: "#",
  },
  {
    name: "Спектакли",
    link: "#",
  },
  {
    name: "Сборник Любимовка.Пьесы",
    link: "#",
  },
  {
    name: "Lark+Любимовка",
    link: "#",
  },
  {
    name: "Практика постдраматурга",
    link: "#",
  },
  {
    name: "Эхо Любимовки",
    link: "#",
  },
];

const Footer = () => {
  const firstBlockOfLinks = initFooterLinks.slice(0, 5);
  const secondBlockOfLinks = initFooterLinks.slice(5, 10);
  const thirdBlockOfLinks = initFooterLinks.slice(10);

  return (
    <footer className={styles.footer}>
      <img src={logo} alt="логотип Любимовка" />
      <Partners />
      <div className={styles.footer__body}>
        <div>
          <h3>Площадка «8/3»</h3>
          <p>Москва, ул. Казакова, 8, стр. 3 Метро «Курская»</p>
        </div>
        <div className={styles.footer__links}>
          <ul>
            {firstBlockOfLinks.map((el, index) => (
              <li key={index}>
                <a href={el.link} target="_blank" rel="noreferrer noopener">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {secondBlockOfLinks.map((el, index) => (
              <li key={index}>
                <a href={el.link} target="_blank" rel="noreferrer noopener">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {thirdBlockOfLinks.map((el, index) => (
              <li key={index}>
                <a href={el.link} target="_blank" rel="noreferrer noopener">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footer__footer}>
        <div>
          <p>© Любимовка, 2021</p>
          <p>
            <a href={"#"}> Политика конфиденциальности</a>
          </p>
        </div>
        <div>
          <div>
            <img src={mark} alt="декор" />
            <p>дизайн сайта — shishki.collective</p>
          </div>
          <span>
            вёрстка и разработака — студенты{" "}
            <a href={"#"}> Яндекс.Практикума </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
