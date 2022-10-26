import React from "react";
import styles from "./Gallery.module.scss";
import {galleryImages} from "../../utils/constants";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Наши фотографиии</h2>
        <ul>
        {galleryImages.map((elem, index) => (
            <li key={index}>
                <img src={`${elem}`} alt='наша галлерея'/>
            </li>
        ))}
        </ul>
    </section>
  );
};

export default Gallery;
