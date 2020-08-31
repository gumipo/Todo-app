export const Add_Todo = "Add_Todo";
export const addTodoAction = (todo) => {
  return {
    type: "Add_Todo",
    payload: todo,
  };
};
