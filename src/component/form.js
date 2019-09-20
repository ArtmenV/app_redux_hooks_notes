import React, { useState } from "react";
import { addNotes } from "../redux/action/index.js";
import { useDispatch } from "react-redux";
import styles from "./form.module.css";
import { openAlert, isValidAlert } from "../redux/action/index";

export const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const notes = {
      text: value,
      id: Math.random()
    };
    console.log(notes, "form");
    dispatch(addNotes(notes));
    // const valid = value === '' ?
    value === "" ? dispatch(isValidAlert()) : dispatch(openAlert());
    setValue("");
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
