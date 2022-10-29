import React from 'react';
import page404Img from '../../images/page404/page404.jpg';
import styles from './Page404.module.scss';

const Page404 = () => {
    return (
        <div className={styles.root}>
            <h2>Такой страницы несуществует</h2>
            <img src={page404Img} alt='такой страницы нет'/>
        </div>
    );
};

export default Page404;
