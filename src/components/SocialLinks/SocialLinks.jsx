import styles from "./SocialLinks.module.scss";
import Tab from "../Tab/Tab";

function SocialLinks() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <Tab href={"#"} text={"fb"} />
        <Tab href={"#"} text={"inst"} />
        <Tab href={"#"} text={"ytube"} />
        <Tab href={"#"} text={"tlgrm"} />
        <Tab href={"#"} text={"vk"} />
      </ul>
    </nav>
  );
}

export default SocialLinks;
