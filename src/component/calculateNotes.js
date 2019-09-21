import React from "react";
import { useSelector } from "react-redux";
import styles from "./calculateNotes.module.css";

export const Calculate = () => {
  const notes = useSelector(state => state.Notes);

  const calculate = notes.filter(note => note).length;
  const important = notes.filter(notes => notes.important === true).length;
  return (
    <div className={styles.calculate__notes}>
      Список дел на сегодня <strong>{calculate}</strong>,&nbsp; важных &nbsp;
      <strong>{important}</strong>
    </div>
  );
};
