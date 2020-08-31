import * as Actions from "./actions";
import initialState from "../Store/initialState";

export const TodoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case Actions.Add_Todo:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};
