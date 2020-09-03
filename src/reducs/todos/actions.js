export const ADD_TODO = "ADD_TODO";
let todoId = 0;
export const addTodoAction = (todoState) => {
  return {
    type: "ADD_TOdO",
    payload: {
      isConpleted: false,
      title: todoState.title,
      id: todoId++,
    },
  };
};
