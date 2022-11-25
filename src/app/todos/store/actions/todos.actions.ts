import { createAction, props } from "@ngrx/store";
import { Todo } from "../../../models/todo";

const PREFIX = "[TODOS]";

export const getTodosAction = createAction(`${PREFIX} Get`);

export const getTodosSuccessAction = createAction(
  `${PREFIX} Get success`,
  props<{ todos: Todo[] }>()
);

export const getTodosFailureAction = createAction(
  `${PREFIX} Get failure`,
  props<{ error: any }>()
);

export const updateTodoAction = createAction(
  `${PREFIX} Update`,
  props<{ todo: Todo }>()
);

export const updateTodoSuccessAction = createAction(
  `${PREFIX} Update success`,
  props<{ todo: Todo }>()
);

export const updateTodoFailureAction = createAction(
  `${PREFIX} Update failure`,
  props<{ error: any }>()
);

export const deleteTodoAction = createAction(
  `${PREFIX} Delete`,
  props<{ id: number }>()
);

export const deleteTodoSuccessAction = createAction(
  `${PREFIX} Delete success`,
  props<{ id: number }>()
);

export const deleteTodoFailureAction = createAction(
  `${PREFIX} Delete failure`,
  props<{ error: any }>()
);
