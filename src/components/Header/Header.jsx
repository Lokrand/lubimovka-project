import styles from "./Header.module.scss";
import logo from "../../images/Logo.svg";
import Navigation from "../Navigation/Navigation";
import SocialLinks from "../SocialLinks/SocialLinks";
import SupportLink from "../SupportLink/SupportLink";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Логотип." />
        <Navigation />
        <SocialLinks />
        <SupportLink />
      </header>
      <div className={styles.line}></div>
    </>
  );
}

export default Header;
