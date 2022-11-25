import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Album } from "../../../models/albums";
import { getAlbumAction } from "../../store/actions/albums.actions";
import { ActivatedRoute } from "@angular/router";
import { getCurrentAlbum } from "../../store/selectors/albums.selectors";

@Component({
  selector: "app-album",
  template: `
    <h2 *ngIf="album$ | async as album">
      <span class="me-3">{{ album.id }}</span
      >{{ album.title }}
    </h2>
  `,
  styles: [],
})
export class AlbumComponent implements OnInit {
  album$: Observable<Album | null> = this.store.select(getCurrentAlbum);
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(
      getAlbumAction({ id: this.route.snapshot.params["id"] })
    );
  }
}
