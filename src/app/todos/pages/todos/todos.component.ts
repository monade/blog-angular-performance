import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { Store } from "@ngrx/store";
import {
  deleteTodoAction,
  getTodosAction,
  getTodosSuccessAction,
  updateTodoAction,
} from "../../store/actions/todos.actions";
import { Observable } from "rxjs";
import { getTodos } from "../../store/selectors/todos.selectors";

@Component({
  selector: "app-todos",
  template: `
    <app-todos-list
      [todos]="todos$ | async"
      (todoChanged)="onTodoChanged($event)"
      (todoDeleted)="onTodoDeleted($event)"
    ></app-todos-list>
  `,
  styles: [],
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]> = this.store.select(getTodos);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getTodosAction());
  }

  onTodoChanged(todo: Todo) {
    this.store.dispatch(updateTodoAction({ todo }));
  }

  onTodoDeleted(id: number) {
    this.store.dispatch(deleteTodoAction({ id }));
  }
}
