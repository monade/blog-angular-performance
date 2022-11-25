import { createReducer, on } from "@ngrx/store";
import * as AlbumsActions from "../actions/albums.actions";
import { Album } from "../../../models/albums";

export interface AlbumsState {
  albums: Album[];
  loading: boolean;
  error?: any;
  currentAlbum: Album | null;
}

const initialState: AlbumsState = {
  albums: [],
  loading: false,
  currentAlbum: null,
};

export const albumsReducer = createReducer(
  initialState,
  on(AlbumsActions.getAlbumsAction, (state) => ({
    ...state,
    loading: true,
    error: undefined,
  })),
  on(AlbumsActions.getAlbumsSuccessAction, (state, { albums }) => ({
    ...state,
    albums,
    loading: false,
  })),
  on(AlbumsActions.getAlbumsFailureAction, (state, { error }) => ({
    ...state,
    albums: [],
    loading: false,
    error,
  })),
  on(AlbumsActions.getAlbumAction, (state) => ({
    ...state,
    loading: true,
    error: undefined,
    currentAlbum: null,
  })),
  on(AlbumsActions.getAlbumSuccessAction, (state, { album }) => ({
    ...state,
    currentAlbum: album,
    loading: false,
  })),
  on(AlbumsActions.getAlbumFailureAction, (state, { error }) => ({
    ...state,
    currentAlbum: null,
    loading: false,
    error,
  }))
);
