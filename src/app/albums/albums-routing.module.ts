import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumsComponent } from "./pages/albums/albums.component";
import { AlbumComponent } from "./pages/album/album.component";

const routes: Routes = [
  { path: "", component: AlbumsComponent },
  { path: ":id", component: AlbumComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
