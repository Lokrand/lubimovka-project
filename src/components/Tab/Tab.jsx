import Link from "../Link/Link";
import styles from "./Tab.module.scss";

function Tab({ href, text }) {
  return (
    <li className={styles.link}>
      <Link href={href} text={text}></Link>
    </li>
  );
}

export default Tab;
