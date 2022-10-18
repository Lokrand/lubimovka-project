import styles from './Persons.module.scss';
import { persons } from '../../utils/constants';
import { Person } from '../Person/Person';

export const Persons = () => {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Заголовок блока с персонами</h2>
      <div className={styles.persons}>
        {persons.map((person) => {
          return (
            <Person props={person}/>
          )
        })}
      </div>
    </div>
  )
}