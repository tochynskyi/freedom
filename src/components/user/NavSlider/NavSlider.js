import React from "react";
import { Link } from "react-scroll";
import styles from "./NavSlider.module.scss";
import appetizerIcon from "../../../assets/navbarIcons/appetizer.svg";
import breakfestIcon from "../../../assets/navbarIcons/breakfest.svg";
import dessertsIcon from "../../../assets/navbarIcons/desserts.svg";
import drinksIcon from "../../../assets/navbarIcons/drink.svg";
import hotDrinksIcon from "../../../assets/navbarIcons/hotDrinks.svg";
import grillIcon from "../../../assets/navbarIcons/grill.svg";
import saladIcon from "../../../assets/navbarIcons/salad.svg";
import soupIcon from "../../../assets/navbarIcons/soup.png";
import sushiIcon from "../../../assets/navbarIcons/sushi.svg";
import sushiSetIcon from "../../../assets/navbarIcons/sushiSet.svg";
import deepFryerIcon from "../../../assets/navbarIcons/deepFryer.png";
import alcoholIcon from "../../../assets/navbarIcons/alcohol.svg";


export const NavSlider = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navbar}>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="breakfest">
            <img
              src={breakfestIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Cніданки</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="sushi">
            <img
              src={sushiIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Роли</p>
          </Link>
        </li>
		  <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="sushiSet">
            <img
              src={sushiSetIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Сети</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="appetizer">
            <img
              src={appetizerIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Закуски</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="salad">
            <img
              src={saladIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Салати</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="soupAndBowl">
            <img src={soupIcon} className={styles.navbarIcon} alt="Food icon" />
            <p className={styles.navbarText}>Супи/Боули</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="grill">
            <img
              src={grillIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Гриль</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="deepFryer">
            <img
              src={deepFryerIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Фритюр</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="dessert">
            <img
              src={dessertsIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Десерти</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="drink">
            <img
              src={drinksIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Напої</p>
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="hotDrink">
            <img
              src={hotDrinksIcon}
              className={styles.navbarIcon}
              alt="Food icon"
            />
            <p className={styles.navbarText}>Гарячі напої</p>
          </Link>
        </li>
		  <li className={styles.navbarLink}>
          <Link activeClass="active" smooth spy to="alcohol">
            <img
              src={alcoholIcon}
              className={styles.navbarIcon}
              alt="Alcohol icon"
            />
            <p className={styles.navbarText}>Алкоголь</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
