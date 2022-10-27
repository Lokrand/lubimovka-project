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
                    <span>Пишите на <a href="#" rel="noreferrer noopener">more@lubimovka.ru</a></span>
                </div>
            </div>
        </section>
    );
};

export default CooperationProject;
