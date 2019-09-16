import React from "react";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className={styles.nav__main}>
      <div className={styles.logo}>
        <h2>Artmen007</h2>
      </div>
      <div>
        <ul className={styles.nav__main_navigation}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signIn">SignIn</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
