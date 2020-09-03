import React from "react";
import { Route, Switch } from "react-router";
import TodoList from "./components/TodoList";
import ObonKobon from "./components/ObonKobon";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={TodoList} />
      <Route exact path={"/obonkobon"} component={ObonKobon} />
    </Switch>
  );
};
export default Router;
