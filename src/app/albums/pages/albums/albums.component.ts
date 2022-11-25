import { Component, OnInit } from "@angular/core";
import { Album } from "src/app/models/albums";
import { getAlbums } from "../../store/selectors/albums.selectors";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getAlbumsAction } from "../../store/actions/albums.actions";

@Component({
  selector: "app-albums",
  template: ` <app-album-grid [albums]="albums$ | async"></app-album-grid> `,
  styles: [],
})
export class AlbumsComponent implements OnInit {
  albums$ = this.store.select(getAlbums);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getAlbumsAction());
  }
}
