import React from "react";
import { Form } from "./form";
import { Notes } from "./notes";
import styles from "./main.module.css";
import { Alert } from "./alert";

export const Home = () => {
  return (
    <>
      <main className={styles.main__page}>
        <div className={styles.main__page_content}>
          <h1>Мои дела на день</h1>
          <Alert />
          <Form />
          <hr />
          <Notes />
        </div>
      </main>
    </>
  );
};
