import styles from './Title.module.scss';

export const Title = (props) => {
  return (
    <h2 className={styles.title}>{props.text}</h2>
  )
}
