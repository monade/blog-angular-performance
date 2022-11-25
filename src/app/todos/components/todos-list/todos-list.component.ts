import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
  selector: "app-todos-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="todos">
      <app-card *ngFor="let todo of todos" [todo]="todo" (todoChanged)="onTodoChanged($event)"></app-card>
    </ng-container>
  `,
  styles: [],
})
export class TodosListComponent {
  @Input() todos: Todo[] | null = null;

  @Output() todoChanged = new EventEmitter<Todo>();

  onTodoChanged(todo: Todo) {
    this.todoChanged.emit(todo);
  }
}
