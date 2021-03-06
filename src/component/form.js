import React, { useState } from "react";
import { addNotes } from "../redux/action/index.js";
import { useDispatch } from "react-redux";
import styles from "./form.module.css";
import { openAlert, isValidAlert } from "../redux/action/index";
// import { calculateNotes } from "../redux/action/index";

export const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const notes = {
      text: value,
      id: Math.random()
    };
    dispatch(addNotes(notes));
    // const valid = value === '' ?
    dispatch(openAlert());
    value === "" ? dispatch(isValidAlert(false)) : dispatch(isValidAlert(true));
    setValue("");
    // dispatch(calculateNotes());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form__main}>
      <div className={styles.form__notes}>
        <input
          type="text"
          placeholder="Введите вашу заметку"
          value={value}
          onChange={ev => setValue(ev.target.value)}
        />
      </div>
    </form>
  );
};
