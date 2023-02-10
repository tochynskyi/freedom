import React from "react";
import styles from "./Header.module.scss";
import instagramLogo from "../../../assets/instagram.svg";
import telephoneIcon from "../../../assets/mobilephone.svg";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          FREEDOM
          <span className={styles.logoSecondText}>TERRACE & LOUNGE</span>
        </a>
        <div className={styles.info}>
          <p className={styles.infoLocation}>Чекаємо на Вас за адресою:</p>
          <a
            className={styles.infoLocationLink}
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0,+9,+%D0%9A%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B5%D1%86%D1%8C,+%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+47000/@50.0922044,25.7263796,20.5z/data=!4m6!3m5!1s0x472fc02b258e8f63:0x6d6f41a08cea1f4c!8m2!3d50.0922747!4d25.7266047!16s%2Fg%2F11bbrk2qyl"
          >
            м. Кременець, вул. Шевченка, 9 (ТРЦ "Diamond Plaza")
          </a>

          <p className={styles.infoWork}>
            <span className={styles.infoWorkDays}>Будні:</span>
            <span className={styles.infoWorkHours}>09:00 - 21:00</span>|
            <span className={styles.infoWorkDays}>Вихідні:</span>
            <span className={styles.infoWorkHours}>10:00 - 22:00</span>
          </p>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactsPhone}>
            <img src={telephoneIcon} alt="phone icon" />
            <a href="/">000 00 00 000</a>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/freedom_kremenets/"
          >
            <img
              className={styles.contactsSocialLogo}
              src={instagramLogo}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
