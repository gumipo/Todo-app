import React, { useState, useCallback } from "react";
import PrimaryButton from "./components/UIkit/Button";
import { useSelector } from "react-redux";
import { getTodoList } from "./reducs/TodoList/selector";

const TodoApp = () => {
  const selector = useSelector((state) => state);
  const todolist = getTodoList(selector);

  const [todo, setTodo] = useState([]);

  const inputTodoList = useCallback(
    (event) => {
      const newTodo = setTodo(event.target.value);
      todolist.push(newTodo);
    },
    [setTodo]
  );

  return (
    <div>
      <h1>Simple Todo</h1>
      <input type="text" placeholder="タスクのタイトル"></input>
      <PrimaryButton onChange={inputTodoList} label="タスクを作成" />

      <h2>未完了</h2>
      <p>{todolist}</p>

      <h2>完了済み</h2>
      {/* <p>completeTodo</p> */}
    </div>
  );
};
export default TodoApp;
