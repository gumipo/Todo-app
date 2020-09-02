import React, { useState } from "react";
// import Todo from "../components/Todo";
import SetNewTodo from "../components/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="c-section-container">
      <h1 className="u-text__headline">Todo App</h1>
      <SetNewTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default TodoList;
