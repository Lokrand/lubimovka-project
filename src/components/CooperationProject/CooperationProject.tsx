import React from 'react';
import styles from './CooperationProject.module.scss';
import snowflake from './images/asterisk.svg';

const CooperationProject = () => {
    return (
        <section className={styles.root}>
            <div>
                <img src={snowflake} alt='снежинка'/>
                <h2>Проект открыт к сотрудничеству </h2>
                <div className={styles.root__subtitles}>
                    <p>Мы находимся в постоянном поиске режиссёров и актеров,
                        заинтересованных в постановке читок.
                    </p>
                    <p>Пишите на more@lubimovka.ru</p>
                </div>
            </div>
        </section>
    );
};

export default CooperationProject;
