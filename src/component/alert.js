import React from "react";
// import {} from "../redux/action/index";
import styles from "./alert.module.css";
import { useSelector } from "react-redux";

export const Alert = () => {
  const alertText = useSelector(state => state.alertState);

  const style = [styles.alert__main];
  if (alertText.show) {
    style.push(styles.succes);
  }

  let showText =
    alertText.show === true ? (
      <div className={style.join(" ")}>
        <div className={styles.alert__main_succes}>
          <span>{alertText.text}</span>
        </div>
        <button className={styles.alert__main_button}>&times;</button>
      </div>
    ) : (
      <div className={styles.alert__main}>
        <div className={styles.alert__main_fail}>
          <span>Вы ввели некоректную заметку</span>
        </div>
        <button className={styles.alert__main_button}>&times;</button>
      </div>
    );

  return showText;
};
