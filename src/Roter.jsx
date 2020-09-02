import React from "react";
import { Route, Switch } from "react-router";
import TodoList from "./components/TodoList";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={TodoList} />
    </Switch>
  );
};
export default Router;
