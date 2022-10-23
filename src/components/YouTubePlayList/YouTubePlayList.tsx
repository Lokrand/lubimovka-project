import React from 'react';
import styles from './YouTubePlayList.module.scss';
import arrowRight from './images/arrow-right.svg';

const YouTubePlayList = () => {
    return (
        <section className={styles.youtubePlaylist}>
            <h2>Наш плейлист</h2>
            <div>
                <p>Видео прошедших мероприятий можно посмотреть в плейлисте на канале Любимовки в YouTube</p>
                <a href={'#'} target="_blank" rel="noreferrer noopener">
                    YOUTUBE
                    <img src={arrowRight} alt='стрелка'/>
                </a>
            </div>

        </section>
    );
};

export default YouTubePlayList;
