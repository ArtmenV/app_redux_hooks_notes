import React from "react";
import { Form } from "./form";
import { Notes } from "./notes";
import { increment, decrement } from "../redux/action/index";
import { useSelector, useDispatch } from "react-redux";
import styles from "./main.module.css";
import { Alert } from "./alert";

export const Home = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counterReducer);

  const increase = id => dispatch(decrement(id));
  const _increment = id => dispatch(increment(id));

  return (
    <>
      <main className={styles.main__page}>
        <div className={styles.main__page_content}>
          <h1>My store magazine</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            natus laboriosam commodi quisquam perspiciatis magnam odit officiis
            odio earum, nostrum minus tenetur alias, repellat consequuntur vel,
            fugiat nulla suscipit nobis?
          </p>
          {counter}
          <button onClick={_increment}>+</button>
          <button onClick={increase}>-</button>
          <Alert />
          <Form />
          <Notes />
        </div>
      </main>
    </>
  );
};
