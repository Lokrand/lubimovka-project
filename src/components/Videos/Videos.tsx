import React from 'react';
import styles from './Videos.module.scss';
import Video from "../Video/Video";

const initVideos: string[] = [
    'https://www.youtube.com/embed/v79wBGAeOeI',
    'https://www.youtube.com/embed/1zjPOhWoGp8',
    'https://www.youtube.com/embed/9f_Hx6SHolo',
]

const Videos = () => {
    return (
        <section className={styles.videos}>
            <h2>Our performances</h2>
            <ul>
                {initVideos.map((video, index) => (
                    <li key={index}>
                        <Video src={video}/>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Videos;