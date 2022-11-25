import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) },
	{ path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
