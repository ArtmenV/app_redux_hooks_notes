import React from "react";
import { Form } from "./form";
import { Notes } from "./notes";
import styles from "./main.module.css";
import { Alert } from "./alert";
import { Calculate } from "./calculateNotes";
import { SearchInput } from "./searchNotes";

export const Home = () => {
  return (
    <>
      <main className={styles.main__page}>
        <div className={styles.main__page_content}>
          <div className={styles.main__head}>
            <h1>Мои дела на день</h1>
            <div className={styles.main__search_filter}>
              <Calculate />
              <SearchInput />
            </div>
          </div>
          <Alert />
          <Form />
          <hr />
          <Notes />
        </div>
      </main>
    </>
  );
};
