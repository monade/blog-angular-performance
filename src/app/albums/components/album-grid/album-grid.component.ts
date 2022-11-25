import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/albums';

@Component({
  selector: 'app-album-grid',
  template: `
    <div class="d-flex w-100 flex-wrap">
      <div
        *ngFor="let album of albums"
        class="ms-4"
      >
        <span>{{ album.title }}</span>
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumGridComponent implements OnInit {
  @Input() albums: Album[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
