import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
