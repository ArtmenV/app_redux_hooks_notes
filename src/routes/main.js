import React from "react";
import { Home } from "../component/main";
import { Switch, Route } from "react-router-dom";

export const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);
