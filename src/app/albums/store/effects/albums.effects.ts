import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  getAlbumAction,
  getAlbumFailureAction,
  getAlbumsAction,
  getAlbumsFailureAction,
  getAlbumsSuccessAction,
  getAlbumSuccessAction,
} from "../actions/albums.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AlbumsService } from "../../services/albums.service";

@Injectable()
export class AlbumsEffects {
  constructor(
    private actions$: Actions,
    private albumsService: AlbumsService
  ) {}

  getAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAlbumsAction),
      mergeMap((action) =>
        this.albumsService.getAlbums().pipe(
          map((albums) => getAlbumsSuccessAction({ albums })),
          catchError((error) => of(getAlbumsFailureAction({ error })))
        )
      )
    )
  );

  getAlbum$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAlbumAction),
      tap((action) => console.log(action)),
      mergeMap((action) =>
        this.albumsService.getAlbum(action.id).pipe(
          map((album) => getAlbumSuccessAction({ album: album })),
          catchError((error) => of(getAlbumFailureAction({ error })))
        )
      )
    )
  );
}
