import React from "react";
import { Nav } from "./component/nav";
import { Routes } from "./routes/main";

export const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Routes />
      </main>
    </>
  );
};
