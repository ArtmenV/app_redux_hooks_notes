import React from "react";
import { removeNotes, addImportant } from "../redux/action/index";
import styles from "./notes.module.css";
import { useSelector, useDispatch } from "react-redux";

export const Notes = () => {
  const notes = useSelector(state => state.Notes);

  const dispatch = useDispatch();

  const deleteAction = id => {
    dispatch(removeNotes(id));
  };
  const addImportantAction = id => {
    dispatch(addImportant(id));
  };

  return (
    <>
      <ul>
        {notes.map(note => {
          const style = [styles.notes__list_item];
          if (note.important === true) {
            style.push(styles.important);
          }

          return (
            <li className={style.join(" ")} key={note.id}>
              {note.text}

              <div className="notes__list_group_button">
                <button
                  className={styles.notes__list_button_important}
                  onClick={() => addImportantAction(note.id)}
                >
                  !
                </button>
                <button
                  className={styles.notes__list_button}
                  onClick={() => deleteAction(note.id)}
                >
                  &times;
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
