import {createAction, props} from "@ngrx/store";
import {Comment} from "../../../models/comment";

const PREFIX = '[Comments]';

export const getCommentsAction = createAction(
  `${PREFIX} Get`
);

export const getCommentsSuccessAction = createAction(
  `${PREFIX} Get success`,
  props<{ comments: Comment[] }>()
);

export const getCommentsFailureAction = createAction(
  `${PREFIX} Get failure`,
  props<{ error: any }>()
);