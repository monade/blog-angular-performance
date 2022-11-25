import {createAction, props} from "@ngrx/store";
import { Album } from "src/app/models/albums";

const PREFIX = '[Albums]';

export const getAlbumsAction = createAction(
  `${PREFIX} Get`
);

export const getAlbumsSuccessAction = createAction(
  `${PREFIX} Get success`,
  props<{ albums: Album[] }>()
);

export const getAlbumsFailureAction = createAction(
  `${PREFIX} Get failure`,
  props<{ error: any }>()
);