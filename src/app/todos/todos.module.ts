import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { CardComponent } from './components/card/card.component';
import {StoreModule} from "@ngrx/store";
import {todosReducer} from "./store/reducers/todos.reducer";


@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    StoreModule.forFeature('todos', todosReducer)
  ]
})
export class TodosModule { }
