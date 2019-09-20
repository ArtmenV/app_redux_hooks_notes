import React from "react";
// import {} from "../redux/action/index";
import styles from "./alert.module.css";
import { useSelector, useDispatch } from "react-redux";
import { openAlert } from "../redux/action/index";

export const Alert = () => {
  const alertText = useSelector(state => state.alertState);
  const dispatch = useDispatch();
  const delAlert = () => dispatch(openAlert());

  const style = [styles.alert__main];
  if (alertText.isOpen) {
    style.push(styles.succes);
  }

  let showText = alertText.isOpen ? (
    <div className={style.join(" ")}>
      <div className={styles.alert__main_succes}>
        <span>{alertText.text}</span>
      </div>
      <button className={styles.alert__main_button} onClick={delAlert}>
        &times;
      </button>
    </div>
  ) : null;

  return showText;
};

/*  <div className={style.join(" ")}>
        <div className={styles.alert__main_fail}>
          <span>Вы ввели некоректную заметку</span>
        </div>
        <button className={styles.alert__main_button} onClick={delAlert}>
          &times;
        </button>
      </div> */
