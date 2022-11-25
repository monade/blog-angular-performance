import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumGridComponent } from './components/album-grid/album-grid.component';


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumGridComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
