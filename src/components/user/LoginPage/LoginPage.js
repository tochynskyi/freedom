import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../firebase";


export const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorSignIn, setErrorSignIn] = useState(false);

  const onLogin = (e) => {
    setLogin(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, login, password);
      navigate("/admin");
    } catch {
      setErrorSignIn(true);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={signIn} className={styles.form}>
        <h1 className={styles.formTitle}>Увійти</h1>
        {errorSignIn && <p>Неправильний логін або пароль</p>}
        <input
          className={styles.formInput}
          value={login}
          onChange={onLogin}
          name="login"
          type="text"
          placeholder="Введіть логін..."
        />
        <input
          className={styles.formInput}
          value={password}
          onChange={onPassword}
          name="password"
          type="password"
          placeholder="Введіть пароль..."
        />
        <button type="submit" className={styles.formButton}>
          Увійти
        </button>
      </form>
    </div>
  );
};
