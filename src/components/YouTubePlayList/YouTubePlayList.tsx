import React from "react";
import styles from "./YouTubePlayList.module.scss";
import { ArrowRight } from "../../icons/ArrowRight";

const YouTubePlayList = () => {
  return (
    <section className={styles.youtubePlaylist}>
      <h2>Наш плейлист</h2>
      <div>
        <p>
          Видео прошедших мероприятий можно посмотреть в плейлисте на канале
          Любимовки в YouTube
        </p>
        <button type="button">
          YOUTUBE
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default YouTubePlayList;
