import styles from "./SocialLinks.module.scss";
import Link from "../Link/Link";

function SocialLinks() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <Link href={"#"} text={"fb"} target={true} />
        </li>
        <li>
          <Link href={"#"} text={"inst"} target={true} />
        </li>
        <li>
          <Link href={"#"} text={"ytube"} target={true} />
        </li>
        <li>
          <Link href={"#"} text={"tlgrm"} target={true} />
        </li>
        <li>
          <Link href={"#"} text={"vk"} target={true} />
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
