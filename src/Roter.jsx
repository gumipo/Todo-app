import React from "react";
import { Route, Switch } from "react-router";
import TodoApp from "./TodoApp";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={TodoApp} />
      {/* <Route exact path={"/rule"} component={Rule} /> */}
    </Switch>
  );
};
export default Router;
