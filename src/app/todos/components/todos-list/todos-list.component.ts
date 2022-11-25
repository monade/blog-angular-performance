import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
		<div *ngIf="todos">
			<div *ngFor="let todo of todos" class="card mb-3">
				<div class="card-body">
					<h5>{{ todo.title }}</h5>
					<p *ngIf="todo.completed">Fatto!</p>
					<p *ngIf="! todo.completed">Da fare *.*</p>
				</div>
			</div>
		</div>
  `,
  styles: [
  ]
})
export class TodosListComponent {

	@Input() todos: Todo[] | null = null

}
