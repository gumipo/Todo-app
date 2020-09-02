import { createSelector } from "reselect";

const todoSelector = (state) => state.todos;

export const getTodotitle = createSelector(
  [todoSelector],
  (state) => state.title
);
