import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  template: `
		<app-todos-list [todos]="todo"></app-todos-list>
  `,
  styles: [
  ]
})
export class TodosComponent implements OnInit {
  todo: Todo[] = [
		{
			"userId": 1,
			"id": 1,
			"title": "delectus aut autem",
			"completed": false
		},
		{
			"userId": 1,
			"id": 2,
			"title": "quis ut nam facilis et officia qui",
			"completed": false
		},
		{
			"userId": 1,
			"id": 3,
			"title": "fugiat veniam minus",
			"completed": false
		},
		{
			"userId": 1,
			"id": 4,
			"title": "et porro tempora",
			"completed": true
		},
		{
			"userId": 1,
			"id": 5,
			"title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
			"completed": false
		},
		{
			"userId": 1,
			"id": 6,
			"title": "qui ullam ratione quibusdam voluptatem quia omnis",
			"completed": false
		}
	]

  ngOnInit(): void {
  }

}