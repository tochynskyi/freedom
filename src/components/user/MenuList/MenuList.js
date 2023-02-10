import React from "react";
import { MenuItem } from "../MenuItem/MenuItem";
import styles from './MenuList.module.scss'

export const MenuList = ({dishes}) => {
  return (
      <ul className={styles.container}>
        {dishes?.map(({ id, type, name, description, price }) => {
          return (
            <MenuItem
              key={id}
				  id={id}
              type={type}
              name={name}
              description={description}
              price={price}
            />
          );
        })}
      </ul>
  );
};
