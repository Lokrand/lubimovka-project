import styles from "./Navigation.module.scss";

const Navigation = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{children}</ul>
    </nav>
  );
};

export default Navigation;
