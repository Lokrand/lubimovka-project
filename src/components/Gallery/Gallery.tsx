import React from "react";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Наши фотографиии</h2>
      <ul>
        <li>
          <img src={require("./images/gallery_1.png")} alt="gallery" />
        </li>
        <li>
          <img src={require("./images/gallery_2.jpg")} alt="gallery" />
        </li>
        <li>
          <img src={require("./images/gallery_3.jpg")} alt="gallery" />
        </li>
        <li>
          <img src={require("./images/gallery_4.jpg")} alt="gallery" />
        </li>
        <li>
          <img src={require("./images/gallery_5.jpg")} alt="gallery" />
        </li>
        <li>
          <img src={require("./images/gallery_6.jpg")} alt="gallery" />
        </li>
        <li>
          <img src={require("./images/gallery_7.jpg")} alt="gallery" />
        </li>
        <li>
          <img src={require("./images/gallery_8.jpg")} alt="gallery" />
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
