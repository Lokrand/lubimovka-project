import React, { FC } from "react";
import styles from "./Video.module.scss";

interface VideoProps {
  src: string;
}

const Video: FC<VideoProps> = ({ src }) => {
  return (
    <iframe
      src={src}
      title="Youtube Player"
      allowFullScreen
      className={styles.video}
    />
  );
};

export default Video;
