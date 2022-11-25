import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlbumsState } from "../reducers/albums.reducer";

const selectAlbums = createFeatureSelector<AlbumsState>("albums");

export const getAlbums = createSelector(selectAlbums, (state) => state.albums);
export const getCurrentAlbum = createSelector(
  selectAlbums,
  (state) => state.currentAlbum
);
