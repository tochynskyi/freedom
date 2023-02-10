import React from "react";
import styles from "./MenuItem.module.scss";
import { DynamicImage } from "../DynamicImage/DynamicImage";

export const MenuItem = ({ id, type, name, description, price }) => {
  return (
    <li className={styles.item}>
      {type !== "drink" && type !== "hotDrink" && (
        <DynamicImage className={styles.itemImg} filename={`${type}/${id}`} />
      )}
      <h2 className={styles.itemTitle}>{name}</h2>
      <p className={styles.itemDescription}>{description}</p>
      <p className={styles.itemPrice}>{price}</p>
    </li>
  );
};
