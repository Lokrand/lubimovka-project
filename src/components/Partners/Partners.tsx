import React from "react";
import styles from "./Partners.module.scss";
import {partners} from "../../utils/constants";

const Partners = () => {
  return (
    <ul className={styles.partners}>
      {partners.map((partner, index) => {
          const {img} = partner;
          return (
              <li key={index}>
                  <img src={`${img}`} alt="партнеры"/>
                  <p>{partner.description}</p>
              </li>
          )
      })}
    </ul>
  );
};

export default Partners;
