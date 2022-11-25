import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Album } from "src/app/models/albums";

@Component({
  selector: "app-album-grid",
  template: `
    <div class="d-flex w-100 flex-wrap gap-3">
      <ng-template [ngIf]="albums">
        <app-album-item *ngFor="let album of albums" [album]="album">
        </app-album-item>
      </ng-template>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumGridComponent implements OnInit {
  @Input() albums: Album[] | null = [];

  constructor() {}

  ngOnInit(): void {}
}
