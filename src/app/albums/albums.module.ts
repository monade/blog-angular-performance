import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlbumsRoutingModule } from "./albums-routing.module";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { AlbumGridComponent } from "./components/album-grid/album-grid.component";
import { StoreModule } from "@ngrx/store";
import { albumsReducer } from "./store/reducers/albums.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AlbumsEffects } from "./store/effects/albums.effects";
import { AlbumItemComponent } from './album-item/album-item.component';
import { AlbumComponent } from './pages/album/album.component';

@NgModule({
  declarations: [AlbumsComponent, AlbumGridComponent, AlbumItemComponent, AlbumComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    StoreModule.forFeature("albums", albumsReducer),
    EffectsModule.forFeature([AlbumsEffects]),
  ],
})
export class AlbumsModule {}
