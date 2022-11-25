import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from 'src/app/models/albums';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  static baseUri = `${environment.endpoint}/albums`;

  getAlbums() {
    return this.http.get<Album[]>(AlbumsService.baseUri);
  }
}
