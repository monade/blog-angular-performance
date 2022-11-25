import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Todo } from "../../models/todo";
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl = `${environment.endpoint}/todos`;
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  getOne(id: number) {
    return this.http.get<Todo>(`${this.baseUrl}/${id}`);
  }

  create(todo: Todo) {
    return this.http.post<Todo>(`${this.baseUrl}`, todo);
  }

  update(todo: Todo) {
    return this.http.put<Todo>(`${this.baseUrl}/${todo.id}`, todo);
  }

  destroy(id: number) {
    return this.http.delete<boolean>(`${this.baseUrl}/${id}`).pipe(
			map(() => { return true })
		);
  }
}
