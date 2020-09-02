import React, { useState } from "react";
// import Todo from "../components/Todo";
import SetNewTodo from "../components/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo App</h1>
      <SetNewTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default TodoList;
