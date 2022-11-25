import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Comment} from "../../../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments() {
    const url = `${environment.endpoint}/commentss`;
    return this.http.get<Comment[]>(url);
  }
}
