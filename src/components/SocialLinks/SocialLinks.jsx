import styles from "./SocialLinks.module.scss";

const SocialLinks = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{children}</ul>
    </nav>
  );
};

export default SocialLinks;
