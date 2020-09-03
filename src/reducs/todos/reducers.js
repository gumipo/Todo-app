import * as Actions from "./actions";
import initialState from "../Store/initialState";

export const TodoReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        todos: [...action.payload],
      };
    default:
      return state;
  }
};
