import styles from "./Tab.module.scss";

function Tab({ href, text }) {
  return (
    <li className={styles.item}>
      <a href={href} className={styles.link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </li>
  );
}

export default Tab;
