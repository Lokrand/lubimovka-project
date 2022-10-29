import styles from "./Persons.module.scss";
import { persons } from "../../utils/constants";
import { Person } from "../Person/Person";
import { Title } from "../Title/Title";

export const Persons = () => {
  return (
    <div className={styles.block}>
      <Title text='Заголовок блока с персонами' />
      <div className={styles.persons}>
        {persons.map((person) => {
          return <Person props={person} />;
        })}
      </div>
    </div>
  );
};
