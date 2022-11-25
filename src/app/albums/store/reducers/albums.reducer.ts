import {createReducer, on} from "@ngrx/store";
import * as AlbumsActions from "../actions/albums.actions";
import {Album} from "../../../models/albums";

export interface AlbumsState {
  albums: Album[];
  loading: boolean;
  error?: any;
}

const initialState: AlbumsState = {
  albums: [],
  loading: false
}

export const albumsReducer = createReducer(
  initialState,
  on(AlbumsActions.getAlbumsAction, (state) => ({ ...state, loading: true, error: undefined })),
  on(AlbumsActions.getAlbumsSuccessAction, (state, { albums }) => ({ ...state, albums, loading: false })),
  on(AlbumsActions.getAlbumsFailureAction, (state, { error }) => ({ ...state, albums: [], loading: false, error })),
);