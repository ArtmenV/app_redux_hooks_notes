import React, { useState } from "react";
import styles from "./searchNotes.module.css";
import { useDispatch } from "react-redux";
import { searchNotes } from "../redux/action/index";

export const SearchInput = () => {
  const [findNotes, useFindNotes] = useState("");
  const dispatch = useDispatch();

  const filterNotes = e => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFindNotes(e.target.value);
    // const searchNotes = {
    //   name: findNotes
    // };
    dispatch(searchNotes(findNotes));
  };

  return (
    <div className={styles.input}>
      <input
        className={styles.input__search}
        type="text"
        placeholder="найти..."
        value={findNotes}
        onChange={filterNotes}
      />
    </div>
  );
};
