import React from 'react';
import styles from './Partners.module.scss';
import partner1 from './images/Генеральные партнеры.svg';
import partner2 from './images/фонд_Михаила_Прохорова.svg';
import partner3 from './images/mosbrew.svg';
import partner4 from './images/sbtg.svg';
import partner5 from './images/а_поговорить.svg';

const initPartners: string[] = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,

];

const Partners = () => {
    return (
        <ul className={styles.partners}>
            {initPartners.map((partner, index) => (
                <li key={index}>
                    <img src={partner} alt='партнеры'/>
                </li>
            ))}
        </ul>
    );
};

export default Partners;
