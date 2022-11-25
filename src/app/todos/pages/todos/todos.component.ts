import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import {Store} from "@ngrx/store";
import {getTodosAction, getTodosSuccessAction} from "../../store/actions/todos.actions";

@Component({
  selector: "app-todos",
  template: `
    <app-todos-list [todos]="todos" (todoChanged)="onTodoChanged($event)"></app-todos-list>
  `,
  styles: [],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
  ];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getTodosSuccessAction({ todos: this.todos }));
  }

  onTodoChanged(todo: Todo) {
    this.todos = this.todos.map(t => (t.id === todo.id ? todo : t));
  }
}
