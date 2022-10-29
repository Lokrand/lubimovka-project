import React from "react";
import styles from "./Videos.module.scss";
import Video from "../Video/Video";
import { Title } from "../Title/Title";

const initVideos: string[] = [
  "https://www.youtube.com/embed/JDs2DxwNLUo",
  "https://www.youtube.com/embed/Ae1hUGycs40",
  "https://www.youtube.com/embed/-zzxxaBVbRw",
];

const Videos = () => {
  return (
    <section className={styles.videos}>
      <Title text='Заголовок блока с видео' />
      <ul>
        {initVideos.map((video, index) => (
          <li key={index}>
            <Video src={video} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Videos;
