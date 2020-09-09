import React, { useState } from "react";
import SetNewTodo from "../components/Todo";
import PrimaryButton from "./UIkit/Button";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const TodoList = () => {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  return (
    <div className="c-section-container">
      <h1 className="u-text__headline">Todo App</h1>
      <SetNewTodo
        todos={todos}
        setTodos={setTodos}
        completeTodos={completeTodos}
        setCompleteTodos={setCompleteTodos}
      />
      <div className="module-spacer--medium"></div>
      <PrimaryButton
        label={"おぼんこぼん"}
        onClick={() => dispatch(push("/obonkobon"))}
      />
    </div>
  );
};
export default TodoList;
