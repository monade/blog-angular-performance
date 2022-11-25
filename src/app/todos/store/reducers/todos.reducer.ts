import { Todo } from "../../../models/todo";
import { createReducer, on } from "@ngrx/store";
import {
  deleteTodoSuccessAction,
  getTodosAction,
  getTodosFailureAction,
  getTodosSuccessAction,
  updateTodoAction,
  updateTodoSuccessAction,
} from "../actions/todos.actions";

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = createReducer(
  initialState,
  on(getTodosAction, (state) => ({ ...state, todos: [] })),
  on(getTodosSuccessAction, (state, { todos }) => ({ ...state, todos })),
  on(getTodosFailureAction, (state, { error }) => ({
    ...state,
    todos: [],
    error,
  })),
  on(updateTodoSuccessAction, (state, { todo }) => {
    const todos = state.todos.map((t) => (t.id === todo.id ? todo : t));
    return { ...state, todos };
  }),
  on(deleteTodoSuccessAction, (state, { id }) => {
    const todos = state.todos.filter((t) => t.id !== id);
    return { ...state, todos };
  })
);
