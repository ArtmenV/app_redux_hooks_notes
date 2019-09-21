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
    style.push(styles.visible);
  }

  const validStyle = [styles.alert__isValid];

  if (alertText.isValid === false) {
    validStyle.push(styles.fail);
  } else {
    validStyle.push(styles.succes);
  }

  let showText = alertText.isOpen ? (
    <div className={style.join(" ")}>
      <div className={validStyle.join(" ")}>
        <span>
          {alertText.isValid === true ? (
            alertText.text
          ) : (
            <span>Чтобы добавить заметку введите текст</span>
          )}
        </span>
        <button className={styles.alert__main_button} onClick={delAlert}>
          &times;
        </button>
      </div>
    </div>
  ) : null;

  return showText;
};
