import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodosState } from "../reducers/todos.reducer";

const selectTodos = createFeatureSelector<TodosState>("todos");
export const getTodos = createSelector(selectTodos, (state) => state.todos);
