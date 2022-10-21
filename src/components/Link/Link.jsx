import styles from "./Link.module.scss";

function Link({ href, text, target }) {
  return (
    <a
      href={href}
      className={styles.link}
      target={target ? "_blank" : null}
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

export default Link;
