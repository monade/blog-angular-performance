import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
  selector: "app-card",
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <input [value]="todo.title" (change)="onTitleChange($event)" />
        <p *ngIf="todo.completed">Fatto!</p>
        <p *ngIf="!todo.completed">Da fare *.*</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-danger" (click)="onTodoDeleted()">Delete</button>
      </div>
    </div>
  `,
  styles: [],
})
export class CardComponent {
  @Input() todo!: Todo;

  @Output() todoChanged = new EventEmitter<Todo>();
  @Output() todoDeleted = new EventEmitter<void>();

  onTitleChange(e: any) {
    console.log(e);
    this.todoChanged.emit({ ...this.todo, title: e?.target?.value });
  }

  onTodoDeleted() {
    this.todoDeleted.emit();
  }
}
