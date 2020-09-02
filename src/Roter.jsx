import React from "react";
import { Route, Switch } from "react-router";
import TodoList from "./components/TodoList";
import Rule from "./components/Rule";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={TodoList} />
      <Route exact path={"/rule"} component={Rule} />
    </Switch>
  );
};
export default Router;
