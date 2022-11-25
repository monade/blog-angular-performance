import {Todo} from "../../../models/todo";
import {createReducer, on} from "@ngrx/store";
import {getTodosAction, getTodosFailureAction, getTodosSuccessAction} from "../actions/todos.actions";

export interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
  todos: []
};

export const todosReducer = createReducer(
    initialState,
    on(getTodosAction, (state) => ({...state, todos: []})),
    on(getTodosSuccessAction, (state, { todos }) => ({ ...state, todos})),
    on(getTodosFailureAction, (state, { error }) => ({ ...state, todos: [], error }))
)