import React from "react";
import styles from "./Gallery.module.scss";
import {galleryImages} from "../../utils/constants";
import { Title } from "../Title/Title";

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <Title text='Наши фотографиии' />
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
