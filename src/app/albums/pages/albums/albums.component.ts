import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/albums';

@Component({
  selector: 'app-albums',
  template: `
    <app-album-grid [albums]="albums"></app-album-grid>
  `,
  styles: [
  ]
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
