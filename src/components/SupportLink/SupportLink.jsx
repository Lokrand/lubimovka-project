/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./SupportLink.module.scss";
import plus from "../../images/plus.svg";

function SupportLink() {
  return (
    <a href="#" target="_blank" rel="noreferrer" className={styles.link}>
      <img src={plus} alt="" className={styles.link_icon} />
      Поддержать
    </a>
  );
}

export default SupportLink;
