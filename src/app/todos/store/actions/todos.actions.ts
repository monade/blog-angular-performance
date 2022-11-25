import {createAction, props} from "@ngrx/store";
import {Todo} from "../../../models/todo";

const PREFIX = '[TODOS]';

export const getTodosAction = createAction(
    `${PREFIX} Get`
);

export const getTodosSuccessAction = createAction(
    `${PREFIX} Get success`,
    props<{ todos: Todo[] }>()
);

export const getTodosFailureAction = createAction(
    `${PREFIX} Get failure`,
    props<{ error: any }>()
);