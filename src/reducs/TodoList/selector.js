import { createSelector } from "reselect";

const todoSelector = (state) => state.todo;
export const getTodoList = createSelector(
  [todoSelector],
  (state) => state.list
);
