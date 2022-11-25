import { createAction, props } from "@ngrx/store";
import { Album } from "src/app/models/albums";

const PREFIX = "[Albums]";

export const getAlbumsAction = createAction(`${PREFIX} Get`);

export const getAlbumsSuccessAction = createAction(
  `${PREFIX} Get success`,
  props<{ albums: Album[] }>()
);

export const getAlbumsFailureAction = createAction(
  `${PREFIX} Get failure`,
  props<{ error: any }>()
);

export const getAlbumAction = createAction(
  `${PREFIX} Get single`,
  props<{ id: string }>()
);

export const getAlbumSuccessAction = createAction(
  `${PREFIX} Get single success`,
  props<{ album: Album }>()
);

export const getAlbumFailureAction = createAction(
  `${PREFIX} Get single failure`,
  props<{ error: any }>()
);
