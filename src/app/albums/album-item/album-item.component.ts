import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Album } from "../../models/albums";

@Component({
  selector: "app-album-item",
  template: ` <div
    [routerLink]="['/albums', album.id]"
    role="button"
    class="card d-block"
  >
    <h6 class="card-header">
      {{ album.title }}
    </h6>
  </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumItemComponent implements OnInit {
  @Input() album!: Album;

  constructor() {}

  ngOnInit(): void {}
}
