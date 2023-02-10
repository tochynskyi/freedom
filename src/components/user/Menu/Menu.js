import React from "react";
import { MenuList } from "../MenuList/MenuList";
import styles from "./Menu.module.scss";
import { dishes } from "../../../dishes";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <section id="breakfest" className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Сніданки <span className={styles.sectionWorkHours}>9:00-14:00</span>
        </h2>
        <MenuList dishes={dishes.breakfest} />
      </section>
      <section id="sushi" className={styles.section}>
        <h2 className={styles.sectionTitle}>Роли</h2>
        <MenuList dishes={dishes.sushi} />
      </section>
      <section id="sushiSet" className={styles.section}>
        <h2 className={styles.sectionTitle}>Сети</h2>
        <MenuList dishes={dishes.sushiSet} />
      </section>
      <section id="appetizer" className={styles.section}>
        <h2 className={styles.sectionTitle}>Закуски</h2>
        <MenuList dishes={dishes.appetizer} />
      </section>
      <section id="salad" className={styles.section}>
        <h2 className={styles.sectionTitle}>Салати</h2>
        <MenuList dishes={dishes.salad} />
      </section>
      <section id="soupAndBowl" className={styles.section}>
        <h2 className={styles.sectionTitle}>Супи/Боули</h2>
        <MenuList dishes={dishes.soupAndBowl} />
      </section>
      <section id="grill" className={styles.section}>
        <h2 className={styles.sectionTitle}>Гриль</h2>
        <MenuList dishes={dishes.grill} />
      </section>
      <section id="deepFryer" className={styles.section}>
        <h2 className={styles.sectionTitle}>Фритюр</h2>
        <MenuList dishes={dishes.deepFryer} />
      </section>
      <section id="dessert" className={styles.section}>
        <h2 className={styles.sectionTitle}>Десерти</h2>
        <MenuList dishes={dishes.dessert} />
      </section>
      <section id="drink" className={styles.section}>
        <h2 className={styles.sectionTitle}>Напої</h2>
        <MenuList dishes={dishes.drink} />
      </section>
      <section id="hotDrink" className={styles.section}>
        <h2 className={styles.sectionTitle}>Гарячі напої</h2>
        <MenuList dishes={dishes.hotDrink} />
      </section>
    </div>
  );
};
